import { useState, useEffect, useCallback } from 'react';
import { conversationsApi } from '@/api/conversations';
import { showAlert } from '@/utils/sweetAlert';

export const useConversations = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState({
    conversations: false,
    messages: false,
    sending: false,
  });
  const [filters, setFilters] = useState({
    status: '',
    platform: '',
    searchQuery: '',
    page: 1,
    pageSize: 20,
  });
  const [unreadCount, setUnreadCount] = useState(0);
  const [aiSuggestions, setAiSuggestions] = useState([]);

  // جلب جميع المحادثات
  const fetchConversations = useCallback(async (customFilters = {}) => {
    try {
      setLoading(prev => ({ ...prev, conversations: true }));
      
      const combinedFilters = { ...filters, ...customFilters };
      const data = await conversationsApi.getConversations(combinedFilters);
      
      setConversations(data);
      
      // تحديث الفلاتر إذا كانت مخصصة
      if (Object.keys(customFilters).length > 0) {
        setFilters(prev => ({ ...prev, ...customFilters }));
      }
      
      return data;
    } catch (error) {
      showAlert.error("Error", "Failed to load conversations");
      console.error("Failed to fetch conversations:", error);
      return [];
    } finally {
      setLoading(prev => ({ ...prev, conversations: false }));
    }
  }, [filters]);

  // جلب محادثة محددة
  const fetchConversation = useCallback(async (id) => {
    try {
      if (!id) return;
      
      setLoading(prev => ({ ...prev, messages: true }));
      
      const [conversationData, messagesData] = await Promise.all([
        conversationsApi.getConversationById(id),
        conversationsApi.getConversationMessages(id),
      ]);
      
      setSelectedConversation(conversationData);
      setMessages(messagesData);
      
      // وضع علامة كمقروءة
      if (!conversationData.isRead) {
        await conversationsApi.markAsRead(id);
        fetchUnreadCount();
      }
      
      // جلب اقتراحات AI
      try {
        const suggestions = await conversationsApi.getAISuggestions(id);
        setAiSuggestions(suggestions);
      } catch (error) {
        console.log("No AI suggestions available");
        setAiSuggestions([]);
      }
      
      return { conversation: conversationData, messages: messagesData };
    } catch (error) {
      showAlert.error("Error", "Failed to load conversation");
      console.error("Failed to fetch conversation:", error);
      return null;
    } finally {
      setLoading(prev => ({ ...prev, messages: false }));
    }
  }, []);

  // إرسال رسالة
  const sendMessage = useCallback(async (content, isAutoReply = false) => {
    if (!selectedConversation || !content.trim()) return;
    
    try {
      setLoading(prev => ({ ...prev, sending: true }));
      
      const newMessage = {
        id: `temp-${Date.now()}`,
        content,
        sender: 'user',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: `https://ui-avatars.com/api/?name=Me&background=6366F1`,
      };
      
      // إضافة الرسالة مؤقتًا
      setMessages(prev => [...prev, newMessage]);
      
      // إرسال للـ API
      const response = await conversationsApi.sendMessage(selectedConversation.id, {
        content,
        isAutoReply,
        messageType: 'text',
      });
      
      // تحديث الرسالة بالبيانات الحقيقية من الـ API
      setMessages(prev => 
        prev.map(msg => 
          msg.id === newMessage.id 
            ? { ...msg, id: response.id || msg.id }
            : msg
        )
      );
      
      // تحديث آخر رسالة في قائمة المحادثات
      setConversations(prev => 
        prev.map(conv => 
          conv.id === selectedConversation.id
            ? { ...conv, lastMessage: content, lastMessageTime: new Date().toISOString() }
            : conv
        )
      );
      
      // جلب اقتراحات AI جديدة
      try {
        const suggestions = await conversationsApi.getAISuggestions(selectedConversation.id);
        setAiSuggestions(suggestions);
      } catch (error) {
        console.log("No new AI suggestions");
      }
      
      return response;
    } catch (error) {
      showAlert.error("Error", "Failed to send message");
      console.error("Failed to send message:", error);
      
      // إزالة الرسالة المؤقتة في حالة الخطأ
      setMessages(prev => prev.filter(msg => !msg.id.startsWith('temp-')));
      
      throw error;
    } finally {
      setLoading(prev => ({ ...prev, sending: false }));
    }
  }, [selectedConversation]);

  // تعيين محادثة لمستخدم
  const assignConversation = useCallback(async (userId) => {
    if (!selectedConversation) return;
    
    try {
      const response = await conversationsApi.assignConversation(selectedConversation.id, userId);
      
      // تحديث المحادثة محليًا
      setSelectedConversation(prev => ({ ...prev, assignedTo: userId }));
      setConversations(prev => 
        prev.map(conv => 
          conv.id === selectedConversation.id
            ? { ...conv, assignedTo: userId }
            : conv
        )
      );
      
      showAlert.success("Success", "Conversation assigned successfully");
      return response;
    } catch (error) {
      showAlert.error("Error", "Failed to assign conversation");
      throw error;
    }
  }, [selectedConversation]);

  // إضافة تاج
  const addTag = useCallback(async (tag) => {
    if (!selectedConversation) return;
    
    try {
      const response = await conversationsApi.addTag(selectedConversation.id, tag);
      
      // تحديث المحادثة محليًا
      setSelectedConversation(prev => ({ 
        ...prev, 
        tags: [...(prev.tags || []), tag] 
      }));
      
      setConversations(prev => 
        prev.map(conv => 
          conv.id === selectedConversation.id
            ? { ...conv, tags: [...(conv.tags || []), tag] }
            : conv
        )
      );
      
      showAlert.success("Success", "Tag added successfully");
      return response;
    } catch (error) {
      showAlert.error("Error", "Failed to add tag");
      throw error;
    }
  }, [selectedConversation]);

  // حذف تاج
  const removeTag = useCallback(async (tag) => {
    if (!selectedConversation) return;
    
    try {
      const response = await conversationsApi.removeTag(selectedConversation.id, tag);
      
      // تحديث المحادثة محليًا
      setSelectedConversation(prev => ({ 
        ...prev, 
        tags: (prev.tags || []).filter(t => t !== tag)
      }));
      
      setConversations(prev => 
        prev.map(conv => 
          conv.id === selectedConversation.id
            ? { ...conv, tags: (conv.tags || []).filter(t => t !== tag) }
            : conv
        )
      );
      
      showAlert.success("Success", "Tag removed successfully");
      return response;
    } catch (error) {
      showAlert.error("Error", "Failed to remove tag");
      throw error;
    }
  }, [selectedConversation]);

  // جلب عدد الرسائل غير المقروءة
  const fetchUnreadCount = useCallback(async () => {
    try {
      const count = await conversationsApi.getUnreadCount();
      setUnreadCount(count);
      return count;
    } catch (error) {
      console.error("Failed to fetch unread count:", error);
      return 0;
    }
  }, []);

  // تصدير المحادثة
  const exportConversation = useCallback(async () => {
    if (!selectedConversation) return;
    
    try {
      await conversationsApi.exportConversation(selectedConversation.id);
      showAlert.success("Success", "Conversation exported successfully");
    } catch (error) {
      showAlert.error("Error", "Failed to export conversation");
      throw error;
    }
  }, [selectedConversation]);

  // التحميل التلقائي للمحادثات
  useEffect(() => {
    fetchConversations();
    fetchUnreadCount();
    
    // تحديث كل 30 ثانية
    const interval = setInterval(() => {
      fetchConversations();
      fetchUnreadCount();
    }, 30000);
    
    return () => clearInterval(interval);
  }, [fetchConversations, fetchUnreadCount]);

  return {
    // البيانات
    conversations,
    selectedConversation,
    messages,
    aiSuggestions,
    loading,
    filters,
    unreadCount,
    
    // الدوال
    fetchConversations,
    fetchConversation,
    sendMessage,
    assignConversation,
    addTag,
    removeTag,
    exportConversation,
    setFilters,
    setSelectedConversation,
    setMessages,
    setAiSuggestions,
  };
};