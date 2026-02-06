'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRobot, faSearch, faGlobe, faBell, faGear, faChevronDown,
  faPlus, faChartLine, faComments, faUsers, faShareNodes,
  faChartBar, faBullhorn, faCreditCard, faQuestionCircle,
  faCrown, faFilter, faEllipsisVertical, faUserPlus, faTag,
  faPaperclip, faPaperPlane, faLightbulb, faClock, faUser,
  faBolt, faCheckCircle, faBan, faFileExport
} from '@fortawesome/free-solid-svg-icons'
import { faBell as faBellRegular } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import { useConversations } from '@/hooks/useConversations'
import { transformConversationData, transformMessageData } from '@/api/conversations'
import { formatDate } from '@/utils/formatters'

export default function ConversationsPage() {
  const {
    conversations: apiConversations,
    selectedConversation: apiSelectedConversation,
    messages: apiMessages,
    aiSuggestions,
    loading,
    filters,
    unreadCount,
    fetchConversations,
    fetchConversation,
    sendMessage,
    assignConversation,
    addTag,
    removeTag,
    exportConversation,
    setFilters,
  } = useConversations()

  const [localFilters, setLocalFilters] = useState({
    status: 'all',
    platform: '',
    searchQuery: '',
  })

  const [messageInput, setMessageInput] = useState('')
  const [isAutoReplyEnabled, setIsAutoReplyEnabled] = useState(false)

  // تحويل بيانات API للفرونت
  const transformedConversations = apiConversations.map(transformConversationData)
  const transformedMessages = apiMessages.map(transformMessageData)
  const transformedSelectedConversation = apiSelectedConversation 
    ? transformConversationData(apiSelectedConversation)
    : null

  // تطبيق الفلاتر المحلية
  const applyFilters = () => {
    const apiFilters = {}
    
    if (localFilters.status !== 'all') {
      apiFilters.status = localFilters.status
    }
    
    if (localFilters.platform) {
      apiFilters.platform = localFilters.platform
    }
    
    if (localFilters.searchQuery) {
      apiFilters.searchQuery = localFilters.searchQuery
    }
    
    fetchConversations(apiFilters)
  }

  // جلب محادثة محددة عند التحديد
  const handleSelectConversation = async (conversationId) => {
    await fetchConversation(conversationId)
  }

  // إرسال رسالة
  const handleSendMessage = async () => {
    if (!messageInput.trim()) return
    
    try {
      await sendMessage(messageInput, isAutoReplyEnabled)
      setMessageInput('')
    } catch (error) {
      console.error("Failed to send message:", error)
    }
  }

  // إضافة تاج
  const handleAddTag = async (tag) => {
    try {
      await addTag(tag)
    } catch (error) {
      console.error("Failed to add tag:", error)
    }
  }

  // حذف تاج
  const handleRemoveTag = async (tag) => {
    try {
      await removeTag(tag)
    } catch (error) {
      console.error("Failed to remove tag:", error)
    }
  }

  // تعيين محادثة
  const handleAssignConversation = async (userId) => {
    try {
      await assignConversation(userId)
    } catch (error) {
      console.error("Failed to assign conversation:", error)
    }
  }

  // استخدام اقتراح AI
  const handleUseAISuggestion = (suggestion) => {
    setMessageInput(suggestion)
  }

  // تصدير المحادثة
  const handleExportConversation = async () => {
    if (!transformedSelectedConversation) return
    
    try {
      await exportConversation()
    } catch (error) {
      console.error("Failed to export conversation:", error)
    }
  }

  // الفلاتر في الشريط الجانبي
  const sidebarFilters = [
    { id: 'all', label: 'All', count: transformedConversations.length },
    { id: 'unread', label: 'Unread', count: transformedConversations.filter(c => !c.isRead).length },
    { id: 'assigned', label: 'Assigned', count: transformedConversations.filter(c => c.assigned).length }
  ]

  // دالة لتحديد لون التاج
  const getTagClass = (tag) => {
    if (tag === 'Unread') return 'bg-[#EC4899] text-white'
    if (tag === 'New Lead') return 'bg-green-100 text-green-700'
    if (tag === 'Converted') return 'bg-purple-100 text-purple-700'
    if (tag.includes('Assigned')) return 'bg-blue-100 text-blue-700'
    return 'bg-gray-100 text-gray-700'
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-8">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faRobot} className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold text-[#0F172A]">BotFlow</span>
            </a>
            <div className="relative w-96">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
              </div>
              <input 
                className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent" 
                placeholder="Search conversations..." 
                type="text"
                value={localFilters.searchQuery}
                onChange={(e) => {
                  setLocalFilters(prev => ({ ...prev, searchQuery: e.target.value }))
                  // Debounced search يمكن إضافته لاحقًا
                }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    applyFilters()
                  }
                }}
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-[#6366F1] px-3 py-2 rounded-lg font-medium transition">
              <FontAwesomeIcon icon={faGlobe} className="mr-2" />EN
            </button>
            <button className="relative text-gray-600 hover:text-[#6366F1] p-2">
              <FontAwesomeIcon icon={faBellRegular} className="text-xl" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#EC4899] rounded-full"></span>
              )}
            </button>
            <button className="text-gray-600 hover:text-[#6366F1] p-2">
              <FontAwesomeIcon icon={faGear} className="text-xl" />
            </button>
            <div className="flex items-center space-x-2 cursor-pointer">
              <img 
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" 
                className="w-9 h-9 rounded-full" 
                alt="User" 
              />
              <FontAwesomeIcon icon={faChevronDown} className="text-gray-400 text-sm" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Sidebar Component */}
        <Sidebar activeItem="conversations" />

        <div className="ml-64 flex-1 flex">
          {/* Conversations List */}
          <div className="w-96 bg-white border-r border-gray-200 overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 z-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-[#0F172A]">Conversations</h2>
                {loading.conversations && (
                  <span className="text-sm text-gray-500">Loading...</span>
                )}
              </div>
              <div className="flex items-center space-x-2 mb-4">
                {sidebarFilters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => {
                      setLocalFilters(prev => ({ ...prev, status: filter.id }))
                      applyFilters()
                    }}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition ${
                      localFilters.status === filter.id
                        ? 'bg-[#6366F1] text-white font-semibold'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter.label} <span className="ml-1">({filter.count})</span>
                  </button>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative flex-1">
                  <FontAwesomeIcon icon={faFilter} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select 
                    className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                    value={localFilters.platform}
                    onChange={(e) => {
                      setLocalFilters(prev => ({ ...prev, platform: e.target.value }))
                      applyFilters()
                    }}
                  >
                    <option value="">All Platforms</option>
                    <option value="facebook">Facebook Pages</option>
                    <option value="instagram">Instagram Accounts</option>
                  </select>
                </div>
                <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  <FontAwesomeIcon icon={faEllipsisVertical} className="text-gray-600" />
                </button>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {loading.conversations ? (
                <div className="p-8 text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#6366F1] mx-auto"></div>
                  <p className="mt-2 text-gray-500">Loading conversations...</p>
                </div>
              ) : transformedConversations.length === 0 ? (
                <div className="p-8 text-center">
                  <p className="text-gray-500">No conversations found</p>
                </div>
              ) : (
                transformedConversations.map((conv) => (
                  <div
                    key={conv.id}
                    onClick={() => handleSelectConversation(conv.id)}
                    className={`p-4 hover:bg-gray-50 cursor-pointer transition ${
                      transformedSelectedConversation?.id === conv.id 
                        ? 'bg-[#6366F1]/5 border-l-4 border-[#6366F1]' 
                        : ''
                    } ${!conv.isRead ? 'bg-blue-50' : ''}`}
                  >
                    <div className="flex items-start space-x-3">
                      <img src={conv.avatar} className="w-12 h-12 rounded-full" alt={conv.name} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-[#0F172A] truncate">{conv.name}</h3>
                          <span className="text-xs text-gray-500">{conv.time}</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500 mb-2">
                          <FontAwesomeIcon 
                            icon={conv.platform === 'facebook' ? faFacebook : faInstagram} 
                            className={`${conv.platform === 'facebook' ? 'text-blue-600' : 'text-pink-600'} mr-1`} 
                          />
                          <span>{conv.page}</span>
                        </div>
                        <p className="text-sm text-gray-700 truncate">
                          {conv.message}
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          {conv.tags.map((tag, index) => (
                            <span key={index} className={`text-xs px-2 py-0.5 rounded-full ${getTagClass(tag)}`}>
                              {tag}
                            </span>
                          ))}
                          {conv.assigned && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                              Assigned to {conv.assigned}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Conversation Detail */}
          <div className="flex-1 flex flex-col bg-white">
            {loading.messages ? (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6366F1] mx-auto"></div>
                  <p className="mt-4 text-gray-500">Loading conversation...</p>
                </div>
              </div>
            ) : !transformedSelectedConversation ? (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <FontAwesomeIcon icon={faComments} className="text-gray-300 text-6xl mb-4" />
                  <h3 className="text-lg font-semibold text-gray-500">Select a conversation</h3>
                  <p className="text-gray-400">Choose a conversation from the list to start messaging</p>
                </div>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 p-4 z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={transformedSelectedConversation.avatar} 
                        className="w-12 h-12 rounded-full" 
                        alt="User" 
                      />
                      <div>
                        <h3 className="font-bold text-[#0F172A]">{transformedSelectedConversation.name}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <FontAwesomeIcon 
                            icon={transformedSelectedConversation.platform === 'facebook' ? faFacebook : faInstagram} 
                            className={`${transformedSelectedConversation.platform === 'facebook' ? 'text-blue-600' : 'text-pink-600'} mr-1`} 
                          />
                          <span>{transformedSelectedConversation.page}</span>
                          <span className="mx-2">•</span>
                          <span className="flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                            Active now
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button 
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition"
                        onClick={() => handleAssignConversation('user-id')}
                      >
                        <FontAwesomeIcon icon={faUserPlus} className="mr-2" />Assign
                      </button>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition">
                        <FontAwesomeIcon icon={faTag} className="mr-2" />Tag
                      </button>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {transformedMessages.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No messages yet</p>
                    </div>
                  ) : (
                    <>
                      <div className="text-center">
                        <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {formatDate(transformedMessages[0]?.time)}
                        </span>
                      </div>

                      {transformedMessages.map((msg) => (
                        <div 
                          key={msg.id}
                          className={`flex items-start space-x-3 ${msg.sender === 'user' ? '' : 'justify-end'}`}
                        >
                          {msg.sender === 'user' && (
                            <img src={msg.avatar} className="w-9 h-9 rounded-full" alt="User" />
                          )}
                          
                          <div className={`flex-1 ${msg.sender === 'user' ? '' : 'text-right'}`}>
                            <div className={`
                              rounded-2xl p-4 inline-block max-w-lg
                              ${msg.sender === 'user' 
                                ? 'bg-gray-100 rounded-tl-none' 
                                : 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-tr-none'
                              }
                            `}>
                              {msg.isAutoReply && (
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-xs opacity-80">
                                    <FontAwesomeIcon icon={faRobot} className="mr-1" />Auto Reply
                                  </span>
                                </div>
                              )}
                              <p>{msg.content}</p>
                            </div>
                            <span className="text-xs text-gray-500 mt-1 inline-block">{msg.time}</span>
                          </div>

                          {msg.sender === 'bot' && (
                            <div className="w-9 h-9 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-full flex items-center justify-center">
                              <FontAwesomeIcon icon={faRobot} className="text-white" />
                            </div>
                          )}
                        </div>
                      ))}
                    </>
                  )}

                  {/* AI Suggestion */}
                  {aiSuggestions.length > 0 && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                      <div className="flex items-start space-x-3">
                        <FontAwesomeIcon icon={faLightbulb} className="text-yellow-600 mt-1" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-[#0F172A] mb-1">AI Suggestion</h4>
                          <p className="text-sm text-gray-700 mb-3">Customer is showing high purchase intent. Suggested responses:</p>
                          <div className="space-y-2">
                            {aiSuggestions.map((suggestion, index) => (
                              <button 
                                key={index}
                                className="w-full text-left bg-white border border-gray-200 rounded-lg p-3 hover:border-[#6366F1] hover:bg-[#6366F1]/5 transition text-sm"
                                onClick={() => handleUseAISuggestion(suggestion)}
                              >
                                {suggestion}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Message Input */}
                <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <button 
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                        isAutoReplyEnabled
                          ? 'bg-[#6366F1] text-white'
                          : 'bg-[#6366F1]/10 text-[#6366F1] hover:bg-[#6366F1]/20'
                      }`}
                      onClick={() => setIsAutoReplyEnabled(!isAutoReplyEnabled)}
                    >
                      <FontAwesomeIcon icon={faRobot} className="mr-1" />
                      {isAutoReplyEnabled ? 'Auto Reply On' : 'Enable Auto Reply'}
                    </button>
                    <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                      <FontAwesomeIcon icon={faBolt} className="mr-1" />Quick Responses
                    </button>
                    <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                      <FontAwesomeIcon icon={faPaperclip} className="mr-1" />Attach
                    </button>
                  </div>
                  <div className="flex items-end space-x-2">
                    <div className="flex-1">
                      <textarea 
                        className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#6366F1] resize-none" 
                        rows={3}
                        placeholder="Type your message..."
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        disabled={loading.sending}
                      />
                    </div>
                    <button 
                      className={`bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white p-3 rounded-xl hover:shadow-lg transition ${loading.sending ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={handleSendMessage}
                      disabled={loading.sending || !messageInput.trim()}
                    >
                      {loading.sending ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mx-auto"></div>
                      ) : (
                        <FontAwesomeIcon icon={faPaperPlane} className="text-lg" />
                      )}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Conversation Sidebar */}
          {transformedSelectedConversation && (
            <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto">
              {/* Contact Information */}
              <div className="p-4">
                <h3 className="font-bold text-[#0F172A] mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-gray-500 font-medium">Name</label>
                    <p className="text-sm text-[#0F172A] font-medium">{transformedSelectedConversation.name}</p>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-medium">Platform</label>
                    <p className="text-sm text-[#0F172A]">
                      <FontAwesomeIcon 
                        icon={transformedSelectedConversation.platform === 'facebook' ? faFacebook : faInstagram} 
                        className={`${transformedSelectedConversation.platform === 'facebook' ? 'text-blue-600' : 'text-pink-600'} mr-1`} 
                      />
                      {transformedSelectedConversation.platform === 'facebook' ? 'Facebook Messenger' : 'Instagram Direct'}
                    </p>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-medium">Page</label>
                    <p className="text-sm text-[#0F172A]">{transformedSelectedConversation.page}</p>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-medium">First Contact</label>
                    <p className="text-sm text-[#0F172A]">{transformedSelectedConversation.time}</p>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-medium">Status</label>
                    <div className="flex items-center space-x-2 mt-1">
                      {transformedSelectedConversation.tags.map((tag, index) => (
                        <span key={index} className={`text-xs px-2 py-1 rounded-full ${getTagClass(tag)}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Assigned To */}
              <div className="border-t border-gray-200 p-4">
                <h3 className="font-bold text-[#0F172A] mb-4">Assigned To</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {transformedSelectedConversation.assigned ? (
                      <>
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <FontAwesomeIcon icon={faUser} className="text-gray-500" />
                        </div>
                        <span className="text-sm text-gray-600">{transformedSelectedConversation.assigned}</span>
                      </>
                    ) : (
                      <>
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <FontAwesomeIcon icon={faUser} className="text-gray-500" />
                        </div>
                        <span className="text-sm text-gray-600">Unassigned</span>
                      </>
                    )}
                  </div>
                  <button 
                    className="text-[#6366F1] text-sm font-medium hover:underline"
                    onClick={() => handleAssignConversation('current-user-id')}
                  >
                    Assign
                  </button>
                </div>
              </div>

              {/* Tags */}
              <div className="border-t border-gray-200 p-4">
                <h3 className="font-bold text-[#0F172A] mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {transformedSelectedConversation.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full flex items-center"
                    >
                      {tag}
                      <button 
                        className="ml-1 text-blue-500 hover:text-blue-700"
                        onClick={() => handleRemoveTag(tag)}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  {transformedSelectedConversation.tags.length === 0 && (
                    <span className="text-sm text-gray-500">No tags</span>
                  )}
                </div>
                <button 
                  className="text-[#6366F1] text-sm font-medium hover:underline"
                  onClick={() => handleAddTag('New Tag')}
                >
                  <FontAwesomeIcon icon={faPlus} className="mr-1" />Add Tag
                </button>
              </div>

              {/* Conversation History */}
              <div className="border-t border-gray-200 p-4">
                <h3 className="font-bold text-[#0F172A] mb-4">Conversation History</h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="flex items-center text-gray-500 mb-1">
                      <FontAwesomeIcon icon={faClock} className="text-xs mr-2" />
                      <span className="text-xs">{transformedSelectedConversation.time}</span>
                    </div>
                    <p className="text-gray-700">First message received</p>
                  </div>
                  {transformedSelectedConversation.tags.length > 0 && (
                    <div className="text-sm">
                      <div className="flex items-center text-gray-500 mb-1">
                        <FontAwesomeIcon icon={faTag} className="text-xs mr-2" />
                        <span className="text-xs">{transformedSelectedConversation.time}</span>
                      </div>
                      <p className="text-gray-700">Tagged as "{transformedSelectedConversation.tags[0]}"</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="border-t border-gray-200 p-4">
                <h3 className="font-bold text-[#0F172A] mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition text-left">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-600" />Mark as Resolved
                  </button>
                  <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition text-left">
                    <FontAwesomeIcon icon={faBan} className="mr-2 text-red-600" />Block User
                  </button>
                  <button 
                    className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition text-left"
                    onClick={handleExportConversation}
                  >
                    <FontAwesomeIcon icon={faFileExport} className="mr-2 text-blue-600" />Export Chat
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}