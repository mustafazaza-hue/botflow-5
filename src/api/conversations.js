import axiosInstance from "./client";

export const conversationsApi = {
  // الحصول على جميع المحادثات
  getConversations: async (params = {}) => {
    try {
      console.log("📥 Fetching conversations with params:", params);
      
      const response = await axiosInstance.get("/Conversations", {
        params: {
          Status: params.status || "",
          Platform: params.platform || "",
          PageId: params.pageId || "",
          AssignedTo: params.assignedTo || "",
          Tags: params.tags || [],
          SearchQuery: params.searchQuery || "",
          Page: params.page || 1,
          PageSize: params.pageSize || 20,
        },
      });

      console.log("✅ Conversations response:", {
        count: response.data?.length,
        data: response.data
      });

      return response.data;
    } catch (error) {
      console.error("❌ Get conversations error:", {
        status: error.response?.status,
        message: error.message,
        data: error.response?.data,
      });
      throw error.response?.data || error.message;
    }
  },

  // الحصول على محادثة محددة
  getConversationById: async (id) => {
    try {
      console.log("📥 Fetching conversation:", id);
      
      if (!id) {
        throw new Error("Conversation ID is required");
      }

      const response = await axiosInstance.get(`/Conversations/${id}`);
      
      console.log("✅ Conversation data:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Get conversation error:", {
        status: error.response?.status,
        message: error.message,
      });
      throw error.response?.data || error.message;
    }
  },

  // الحصول على رسائل المحادثة
  getConversationMessages: async (id) => {
    try {
      console.log("📥 Fetching messages for conversation:", id);
      
      if (!id) {
        throw new Error("Conversation ID is required");
      }

      const response = await axiosInstance.get(`/Conversations/${id}/messages`);
      
      console.log("✅ Messages data:", {
        count: response.data?.length,
        data: response.data
      });
      return response.data;
    } catch (error) {
      console.error("❌ Get messages error:", {
        status: error.response?.status,
        message: error.message,
      });
      throw error.response?.data || error.message;
    }
  },

  // إرسال رسالة جديدة
  sendMessage: async (id, messageData) => {
    try {
      console.log("📤 Sending message:", {
        conversationId: id,
        ...messageData
      });

      const response = await axiosInstance.post(
        `/Conversations/${id}/messages`,
        {
          conversationId: id,
          content: messageData.content,
          messageType: messageData.messageType || "text",
          isAutoReply: messageData.isAutoReply || false,
          aiSuggestions: messageData.aiSuggestions || [],
        }
      );

      console.log("✅ Message sent:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Send message error:", {
        status: error.response?.status,
        message: error.message,
        data: error.response?.data,
      });
      throw error.response?.data || error.message;
    }
  },

  // تعيين المحادثة لمستخدم
  assignConversation: async (id, assignToUserId) => {
    try {
      console.log("👤 Assigning conversation:", {
        conversationId: id,
        assignToUserId
      });

      const response = await axiosInstance.post(
        `/Conversations/${id}/assign`,
        { assignToUserId }
      );

      console.log("✅ Conversation assigned:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Assign conversation error:", {
        status: error.response?.status,
        message: error.message,
      });
      throw error.response?.data || error.message;
    }
  },

  // إضافة تاج للمحادثة
  addTag: async (id, tag) => {
    try {
      console.log("🏷️ Adding tag:", {
        conversationId: id,
        tag
      });

      const response = await axiosInstance.post(
        `/Conversations/${id}/tags`,
        { tag }
      );

      console.log("✅ Tag added:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Add tag error:", {
        status: error.response?.status,
        message: error.message,
      });
      throw error.response?.data || error.message;
    }
  },

  // حذف تاج من المحادثة
  removeTag: async (id, tag) => {
    try {
      console.log("🗑️ Removing tag:", {
        conversationId: id,
        tag
      });

      const response = await axiosInstance.delete(
        `/Conversations/${id}/tags/${encodeURIComponent(tag)}`
      );

      console.log("✅ Tag removed:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Remove tag error:", {
        status: error.response?.status,
        message: error.message,
      });
      throw error.response?.data || error.message;
    }
  },

  // الحصول على اقتراحات AI
  getAISuggestions: async (id) => {
    try {
      console.log("🤖 Getting AI suggestions for conversation:", id);

      const response = await axiosInstance.get(
        `/Conversations/${id}/ai-suggestions`
      );

      console.log("✅ AI suggestions:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Get AI suggestions error:", {
        status: error.response?.status,
        message: error.message,
      });
      throw error.response?.data || error.message;
    }
  },

  // تصدير المحادثة
  exportConversation: async (id) => {
    try {
      console.log("💾 Exporting conversation:", id);

      const response = await axiosInstance.post(
        `/Conversations/${id}/export`,
        null,
        {
          responseType: 'blob',
        }
      );

      // إنشاء رابط لتحميل الملف
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `conversation-${id}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();

      console.log("✅ Conversation exported");
      return { success: true };
    } catch (error) {
      console.error("❌ Export conversation error:", {
        status: error.response?.status,
        message: error.message,
      });
      throw error.response?.data || error.message;
    }
  },

  // الحصول على عدد المحادثات غير المقروءة
  getUnreadCount: async () => {
    try {
      console.log("📊 Fetching unread count");

      const response = await axiosInstance.get("/Conversations/unread-count");
      
      console.log("✅ Unread count:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Get unread count error:", {
        status: error.response?.status,
        message: error.message,
      });
      throw error.response?.data || error.message;
    }
  },

  // وضع علامة كمقروءة
  markAsRead: async (id) => {
    try {
      console.log("👁️ Marking as read:", id);

      const response = await axiosInstance.post(
        `/Conversations/${id}/read`
      );

      console.log("✅ Marked as read:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Mark as read error:", {
        status: error.response?.status,
        message: error.message,
      });
      throw error.response?.data || error.message;
    }
  },
};

// دالة لتحويل بيانات API إلى تنسيق مناسب للفرونت
export const transformConversationData = (apiData) => {
  if (!apiData) return null;

  return {
    id: apiData.id || apiData.conversationId,
    name: apiData.contactName || apiData.userName || "Unknown User",
    time: formatDate(apiData.lastMessageTime || apiData.createdAt),
    platform: apiData.platform?.toLowerCase() || "facebook",
    page: apiData.pageName || "Unknown Page",
    message: apiData.lastMessage || "No messages",
    tags: apiData.tags || [],
    assigned: apiData.assignedToName,
    avatar: apiData.avatarUrl || `https://ui-avatars.com/api/?name=${apiData.contactName || "User"}&background=random`,
    status: apiData.status,
    isRead: apiData.isRead || false,
  };
};

// دالة لتحويل رسائل API
export const transformMessageData = (apiData) => {
  if (!apiData) return null;

  return {
    id: apiData.id || apiData.messageId,
    sender: apiData.senderType === "bot" || apiData.isAutoReply ? "bot" : "user",
    content: apiData.content,
    time: formatDate(apiData.sentAt || apiData.createdAt),
    avatar: apiData.senderAvatar || (apiData.senderType === "user" ? 
      `https://ui-avatars.com/api/?name=${apiData.senderName || "User"}&background=random` : null),
    isAutoReply: apiData.isAutoReply || false,
    aiSuggestions: apiData.aiSuggestions || [],
  };
};

// إعادة استيراد دالة formatDate
import { formatDate } from '@/utils/formatters'
