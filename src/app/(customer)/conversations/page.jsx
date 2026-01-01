// app/conversations/page.js
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
import { useState } from 'react'
import Sidebar from '@/components/Sidebar'

export default function ConversationsPage() {
  const [selectedConversation, setSelectedConversation] = useState('conv-1')
  const [activeFilter, setActiveFilter] = useState('all')
  const [message, setMessage] = useState('')

  const conversations = [
    {
      id: 'conv-1',
      name: 'Sarah Mitchell',
      time: '2m ago',
      platform: 'facebook',
      page: 'TechStore Official',
      message: 'Hi! Do you have this product in blue color?',
      tags: ['Unread', 'New Lead'],
      assigned: undefined,
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg'
    },
    {
      id: 'conv-2',
      name: 'David Chen',
      time: '15m ago',
      platform: 'instagram',
      page: 'StyleHub',
      message: 'Thanks for the quick response!',
      tags: ['Assigned to John'],
      assigned: 'John',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg'
    },
    {
      id: 'conv-3',
      name: 'Emily Rodriguez',
      time: '1h ago',
      platform: 'facebook',
      page: 'TechStore Official',
      message: "What's your return policy?",
      tags: ['Unread'],
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg'
    },
    {
      id: 'conv-4',
      name: 'Michael Thompson',
      time: '2h ago',
      platform: 'instagram',
      page: 'StyleHub',
      message: 'Bot replied: We\'re open 9AM-6PM daily',
      tags: [],
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg'
    },
    {
      id: 'conv-5',
      name: 'Jessica Lee',
      time: '3h ago',
      platform: 'facebook',
      page: 'TechStore Official',
      message: "Perfect! I'll place my order now.",
      tags: ['Converted'],
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg'
    },
    {
      id: 'conv-6',
      name: 'Ryan Anderson',
      time: '5h ago',
      platform: 'instagram',
      page: 'StyleHub',
      message: 'When will you restock?',
      tags: ['Unread'],
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg'
    },
    {
      id: 'conv-7',
      name: 'Alex Martinez',
      time: '6h ago',
      platform: 'facebook',
      page: 'TechStore Official',
      message: 'Great service! Thank you!',
      tags: [],
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-9.jpg'
    }
  ]

  const filters = [
    { id: 'all', label: 'All', count: 24 },
    { id: 'unread', label: 'Unread', count: 8 },
    { id: 'assigned', label: 'Assigned', count: 5 }
  ]

  const messages = [
    {
      id: 'msg-1',
      sender: 'user',
      content: 'Hi! I saw your post about the new wireless headphones. Do you have them available in blue color?',
      time: '3:42 PM',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg'
    },
    {
      id: 'msg-2',
      sender: 'bot',
      content: 'Hi Sarah! 👋 Thanks for reaching out! Yes, we have the wireless headphones in blue. They\'re currently in stock at $79.99.',
      time: '3:42 PM',
      isAutoReply: true
    },
    {
      id: 'msg-3',
      sender: 'user',
      content: 'Perfect! What\'s the battery life?',
      time: '3:43 PM',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg'
    },
    {
      id: 'msg-4',
      sender: 'bot',
      content: 'The battery lasts up to 30 hours on a single charge! 🔋 Plus, a 5-minute quick charge gives you 3 hours of playback.',
      time: '3:43 PM',
      isAutoReply: true
    },
    {
      id: 'msg-5',
      sender: 'user',
      content: 'Wow, that\'s impressive! Do you offer free shipping?',
      time: '3:44 PM',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg'
    }
  ]

  const suggestions = [
    "Yes! Free shipping on orders over $50. Your order qualifies! 🚚",
    "Absolutely! Plus, we're running a 10% discount today. Use code WELCOME10 at checkout! 🎉"
  ]

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
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-[#6366F1] px-3 py-2 rounded-lg font-medium transition">
              <FontAwesomeIcon icon={faGlobe} className="mr-2" />EN
            </button>
            <button className="relative text-gray-600 hover:text-[#6366F1] p-2">
              <FontAwesomeIcon icon={faBellRegular} className="text-xl" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#EC4899] rounded-full"></span>
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
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">Conversations</h2>
              <div className="flex items-center space-x-2 mb-4">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition ${
                      activeFilter === filter.id
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
                  <select className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1]">
                    <option>All Pages</option>
                    <option>Facebook Pages</option>
                    <option>Instagram Accounts</option>
                  </select>
                </div>
                <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  <FontAwesomeIcon icon={faEllipsisVertical} className="text-gray-600" />
                </button>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => setSelectedConversation(conv.id)}
                  className={`p-4 hover:bg-gray-50 cursor-pointer transition ${
                    selectedConversation === conv.id 
                      ? 'bg-[#6366F1]/5 border-l-4 border-[#6366F1]' 
                      : ''
                  }`}
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
                        {conv.message.includes('Bot replied') && (
                          <FontAwesomeIcon icon={faRobot} className="text-[#6366F1] text-xs mr-1" />
                        )}
                        {conv.message}
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        {conv.tags.map((tag, index) => (
                          <span key={index} className={`text-xs px-2 py-0.5 rounded-full ${getTagClass(tag)}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conversation Detail */}
          <div className="flex-1 flex flex-col bg-white">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" 
                    className="w-12 h-12 rounded-full" 
                    alt="User" 
                  />
                  <div>
                    <h3 className="font-bold text-[#0F172A]">Sarah Mitchell</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <FontAwesomeIcon icon={faFacebook} className="text-blue-600 mr-1" />
                      <span>TechStore Official</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                        Active now
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition">
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
              <div className="text-center">
                <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Today, 3:42 PM</span>
              </div>

              {messages.map((msg) => (
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

              {/* AI Suggestion */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <FontAwesomeIcon icon={faLightbulb} className="text-yellow-600 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#0F172A] mb-1">AI Suggestion</h4>
                    <p className="text-sm text-gray-700 mb-3">Customer is showing high purchase intent. Suggested responses:</p>
                    <div className="space-y-2">
                      {suggestions.map((suggestion, index) => (
                        <button 
                          key={index}
                          className="w-full text-left bg-white border border-gray-200 rounded-lg p-3 hover:border-[#6366F1] hover:bg-[#6366F1]/5 transition text-sm"
                          onClick={() => setMessage(suggestion)}
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  <FontAwesomeIcon icon={faUser} className="mr-1" />Waiting for manual reply...
                </span>
              </div>
            </div>

            {/* Message Input */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
              <div className="flex items-center space-x-2 mb-3">
                <button className="px-3 py-1.5 bg-[#6366F1]/10 text-[#6366F1] rounded-lg text-sm font-medium hover:bg-[#6366F1]/20 transition">
                  <FontAwesomeIcon icon={faRobot} className="mr-1" />Enable Auto Reply
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white p-3 rounded-xl hover:shadow-lg transition">
                  <FontAwesomeIcon icon={faPaperPlane} className="text-lg" />
                </button>
              </div>
            </div>
          </div>

          {/* Conversation Sidebar */}
          <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto">
            {/* Contact Information */}
            <div className="p-4">
              <h3 className="font-bold text-[#0F172A] mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-gray-500 font-medium">Name</label>
                  <p className="text-sm text-[#0F172A] font-medium">Sarah Mitchell</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 font-medium">Platform</label>
                  <p className="text-sm text-[#0F172A]">
                    <FontAwesomeIcon icon={faFacebook} className="text-blue-600 mr-1" />Facebook Messenger
                  </p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 font-medium">Page</label>
                  <p className="text-sm text-[#0F172A]">TechStore Official</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 font-medium">First Contact</label>
                  <p className="text-sm text-[#0F172A]">Today, 3:42 PM</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 font-medium">Status</label>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">New Lead</span>
                    <span className="bg-[#EC4899] text-white text-xs px-2 py-1 rounded-full">Unread</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Assigned To */}
            <div className="border-t border-gray-200 p-4">
              <h3 className="font-bold text-[#0F172A] mb-4">Assigned To</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faUser} className="text-gray-500" />
                  </div>
                  <span className="text-sm text-gray-600">Unassigned</span>
                </div>
                <button className="text-[#6366F1] text-sm font-medium hover:underline">Assign</button>
              </div>
            </div>

            {/* Tags */}
            <div className="border-t border-gray-200 p-4">
              <h3 className="font-bold text-[#0F172A] mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">Product Inquiry</span>
                <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">High Intent</span>
              </div>
              <button className="text-[#6366F1] text-sm font-medium hover:underline">
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
                    <span className="text-xs">Today, 3:42 PM</span>
                  </div>
                  <p className="text-gray-700">First message received</p>
                </div>
                <div className="text-sm">
                  <div className="flex items-center text-gray-500 mb-1">
                    <FontAwesomeIcon icon={faTag} className="text-xs mr-2" />
                    <span className="text-xs">Today, 3:43 PM</span>
                  </div>
                  <p className="text-gray-700">Tagged as "High Intent"</p>
                </div>
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
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition text-left">
                  <FontAwesomeIcon icon={faFileExport} className="mr-2 text-blue-600" />Export Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}