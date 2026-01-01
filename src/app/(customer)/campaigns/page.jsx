// app/campaigns/page.js
'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRobot, faSearch, faGlobe, faBell, faPlus, faHome,
  faBullhorn, faComments, faLayerGroup, faChartLine,
  faUsers, faGear, faCrown, faFilter, faDownload,
  faPaperPlane, faChartLine as faChartSimple, faPen,
  faPause, faTrash, faPlay, faCopy, faBolt, faUserPlus,
  faBirthdayCake, faQuestion, faCalendar, faClock,
  faGift, faHeart, faStar, faCommentDots, faTrophy
} from '@fortawesome/free-solid-svg-icons'
import { faBell as faBellRegular } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Sidebar from '@/components/Sidebar'

export default function CampaignsPage() {
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const stats = [
    {
      id: 'active-campaigns',
      value: '24',
      label: 'Active Campaigns',
      change: '+12%',
      changeColor: 'text-green-600',
      bgColor: 'bg-gradient-to-br from-[#6366F1] to-[#8B5CF6]',
      icon: faBullhorn
    },
    {
      id: 'messages-sent',
      value: '15.2K',
      label: 'Messages Sent',
      change: '+28%',
      changeColor: 'text-green-600',
      bgColor: 'bg-gradient-to-br from-[#8B5CF6] to-[#EC4899]',
      icon: faPaperPlane
    },
    {
      id: 'engagement-rate',
      value: '64.5%',
      label: 'Engagement Rate',
      change: '+18%',
      changeColor: 'text-green-600',
      bgColor: 'bg-gradient-to-br from-[#EC4899] to-[#6366F1]',
      icon: faChartLine
    },
    {
      id: 'new-leads',
      value: '3.8K',
      label: 'New Leads',
      change: '+35%',
      changeColor: 'text-green-600',
      bgColor: 'bg-gradient-to-br from-[#6366F1] to-[#EC4899]',
      icon: faUsers
    }
  ]

  const tabs = [
    { id: 'all', label: 'All Campaigns' },
    { id: 'active', label: 'Active' },
    { id: 'scheduled', label: 'Scheduled' },
    { id: 'paused', label: 'Paused' },
    { id: 'completed', label: 'Completed' }
  ]

  const campaigns = [
    {
      id: 'campaign-1',
      name: 'Black Friday Flash Sale',
      status: 'active',
      statusColor: 'bg-green-500',
      description: 'Auto-reply campaign targeting users who comment on promotional posts',
      platform: 'facebook',
      platformIcon: faFacebook,
      platformColor: 'text-[#6366F1]',
      page: 'Fashion Store Page',
      dateLabel: 'Started',
      date: 'Nov 20, 2024',
      icon: faGift,
      iconBg: 'from-[#6366F1] to-[#8B5CF6]',
      cardBg: 'bg-gradient-to-br from-indigo-50 to-purple-50',
      cardBorder: 'border-indigo-100',
      stats: [
        { value: '2,847', label: 'Messages Sent', color: 'text-[#0F172A]' },
        { value: '1,923', label: 'Replies Received', color: 'text-[#0F172A]' },
        { value: '67.5%', label: 'Engagement Rate', color: 'text-[#6366F1]' },
        { value: '$12.4K', label: 'Revenue Generated', color: 'text-green-600' }
      ],
      buttons: [
        { icon: faChartSimple, color: 'text-gray-600 hover:text-[#6366F1]' },
        { icon: faPen, color: 'text-gray-600 hover:text-[#6366F1]' },
        { icon: faPause, color: 'text-gray-600 hover:text-[#6366F1]' },
        { icon: faTrash, color: 'text-gray-600 hover:text-red-500' }
      ]
    },
    {
      id: 'campaign-2',
      name: 'Welcome New Followers',
      status: 'active',
      statusColor: 'bg-green-500',
      description: 'Automated DM campaign to engage new Instagram followers',
      platform: 'instagram',
      platformIcon: faInstagram,
      platformColor: 'text-[#EC4899]',
      page: '@fashionstore_official',
      dateLabel: 'Started',
      date: 'Nov 15, 2024',
      icon: faHeart,
      iconBg: 'from-[#8B5CF6] to-[#EC4899]',
      cardBg: 'bg-white',
      cardBorder: 'border-gray-200',
      stats: [
        { value: '1,245', label: 'Messages Sent', color: 'text-[#0F172A]' },
        { value: '856', label: 'Replies Received', color: 'text-[#0F172A]' },
        { value: '68.8%', label: 'Engagement Rate', color: 'text-[#8B5CF6]' },
        { value: '$8.2K', label: 'Revenue Generated', color: 'text-green-600' }
      ],
      buttons: [
        { icon: faChartSimple, color: 'text-gray-600 hover:text-[#6366F1]' },
        { icon: faPen, color: 'text-gray-600 hover:text-[#6366F1]' },
        { icon: faPause, color: 'text-gray-600 hover:text-[#6366F1]' },
        { icon: faTrash, color: 'text-gray-600 hover:text-red-500' }
      ]
    },
    {
      id: 'campaign-3',
      name: 'Product Launch Announcement',
      status: 'scheduled',
      statusColor: 'bg-blue-500',
      description: 'Broadcast message to all subscribers about new product line',
      platform: 'facebook',
      platformIcon: faFacebook,
      platformColor: 'text-[#6366F1]',
      page: 'Fashion Store Page',
      dateLabel: 'Scheduled for',
      date: 'Dec 1, 2024 10:00 AM',
      icon: faStar,
      iconBg: 'from-[#EC4899] to-[#6366F1]',
      cardBg: 'bg-white',
      cardBorder: 'border-gray-200',
      stats: [
        { value: '5,432', label: 'Target Audience', color: 'text-[#0F172A]' },
        { value: '-', label: 'Replies Received', color: 'text-[#0F172A]' },
        { value: '-', label: 'Engagement Rate', color: 'text-gray-400' },
        { value: '-', label: 'Revenue Generated', color: 'text-gray-400' }
      ],
      buttons: [
        { icon: faChartSimple, color: 'text-gray-600 hover:text-[#6366F1]' },
        { icon: faPen, color: 'text-gray-600 hover:text-[#6366F1]' },
        { icon: faTrash, color: 'text-gray-600 hover:text-red-500' }
      ]
    },
    {
      id: 'campaign-4',
      name: 'Comment Auto-Reply: Summer Collection',
      status: 'paused',
      statusColor: 'bg-gray-400',
      description: 'Trigger-based campaign responding to specific keywords in comments',
      platform: 'instagram',
      platformIcon: faInstagram,
      platformColor: 'text-[#EC4899]',
      page: '@fashionstore_official',
      dateLabel: 'Paused on',
      date: 'Nov 18, 2024',
      icon: faCommentDots,
      iconBg: 'from-[#6366F1] to-[#8B5CF6]',
      cardBg: 'bg-white',
      cardBorder: 'border-gray-200',
      stats: [
        { value: '987', label: 'Messages Sent', color: 'text-[#0F172A]' },
        { value: '634', label: 'Replies Received', color: 'text-[#0F172A]' },
        { value: '64.2%', label: 'Engagement Rate', color: 'text-[#6366F1]' },
        { value: '$5.8K', label: 'Revenue Generated', color: 'text-green-600' }
      ],
      buttons: [
        { icon: faChartSimple, color: 'text-gray-600 hover:text-[#6366F1]' },
        { icon: faPen, color: 'text-gray-600 hover:text-[#6366F1]' },
        { icon: faPlay, color: 'text-green-600 hover:text-green-700' },
        { icon: faTrash, color: 'text-gray-600 hover:text-red-500' }
      ]
    },
    {
      id: 'campaign-5',
      name: 'VIP Customer Rewards Program',
      status: 'completed',
      statusColor: 'bg-purple-500',
      description: 'Exclusive offers sent to high-value customers via DM',
      platform: 'facebook',
      platformIcon: faFacebook,
      platformColor: 'text-[#6366F1]',
      page: 'Fashion Store Page',
      dateLabel: 'Completed',
      date: 'Nov 10, 2024',
      icon: faTrophy,
      iconBg: 'from-[#8B5CF6] to-[#EC4899]',
      cardBg: 'bg-white',
      cardBorder: 'border-gray-200',
      stats: [
        { value: '456', label: 'Messages Sent', color: 'text-[#0F172A]' },
        { value: '398', label: 'Replies Received', color: 'text-[#0F172A]' },
        { value: '87.3%', label: 'Engagement Rate', color: 'text-[#8B5CF6]' },
        { value: '$18.6K', label: 'Revenue Generated', color: 'text-green-600' }
      ],
      buttons: [
        { icon: faChartSimple, color: 'text-gray-600 hover:text-[#6366F1]' },
        { icon: faCopy, color: 'text-gray-600 hover:text-[#6366F1]' },
        { icon: faTrash, color: 'text-gray-600 hover:text-red-500' }
      ]
    }
  ]

  const templates = [
    {
      id: 'template-1',
      name: 'Flash Sale Campaign',
      description: 'Time-sensitive offers with urgency triggers',
      icon: faBolt,
      iconBg: 'from-[#6366F1] to-[#8B5CF6]',
      borderColor: 'hover:border-[#6366F1]',
      bgColor: 'hover:bg-indigo-50',
      textColor: 'text-[#6366F1]'
    },
    {
      id: 'template-2',
      name: 'Lead Generation',
      description: 'Capture and qualify leads automatically',
      icon: faUserPlus,
      iconBg: 'from-[#8B5CF6] to-[#EC4899]',
      borderColor: 'hover:border-[#8B5CF6]',
      bgColor: 'hover:bg-purple-50',
      textColor: 'text-[#8B5CF6]'
    },
    {
      id: 'template-3',
      name: 'Birthday Rewards',
      description: 'Personalized birthday messages with offers',
      icon: faBirthdayCake,
      iconBg: 'from-[#EC4899] to-[#6366F1]',
      borderColor: 'hover:border-[#EC4899]',
      bgColor: 'hover:bg-pink-50',
      textColor: 'text-[#EC4899]'
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <nav className="fixed w-full top-0 z-50 bg-white border-b border-gray-200">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <a href="#" className="flex items-center space-x-2">
                <div className="w-9 h-9 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faRobot} className="text-white text-lg" />
                </div>
                <span className="text-lg font-bold text-[#0F172A]">BotFlow</span>
              </a>
              <div className="relative">
                <input 
                  className="bg-gray-100 rounded-lg px-4 py-2 w-80 text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1]" 
                  placeholder="Search campaigns, bots, pages..." 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FontAwesomeIcon 
                  icon={faSearch} 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-[#6366F1] px-3 py-2 rounded-lg font-medium transition">
                <FontAwesomeIcon icon={faGlobe} className="mr-2" />EN
              </button>
              <button className="relative text-gray-600 hover:text-[#6366F1]">
                <FontAwesomeIcon icon={faBellRegular} className="text-xl" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#EC4899] rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3 pl-3 border-l border-gray-200">
                <img 
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" 
                  className="w-9 h-9 rounded-full" 
                  alt="User" 
                />
                <div className="text-sm">
                  <div className="font-semibold text-[#0F172A]">Michael Chen</div>
                  <div className="text-xs text-gray-500">Pro Plan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex pt-16">
        {/* Sidebar */}
        <Sidebar activeItem="campaigns" />

        {/* Main Content */}
        <main className="flex-1 ml-64 p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Campaigns</h1>
                <p className="text-gray-600">Create and manage automated outreach campaigns</p>
              </div>
              <div className="flex items-center space-x-3">
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition flex items-center">
                  <FontAwesomeIcon icon={faFilter} className="mr-2" />Filter
                </button>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition flex items-center">
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />Export
                </button>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.id} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                      <FontAwesomeIcon icon={stat.icon} className="text-white text-xl" />
                    </div>
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      {stat.change}
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-[#0F172A] mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Campaign Tabs */}
          <div className="bg-white rounded-xl border border-gray-200 mb-6">
            <div className="border-b border-gray-200 px-6">
              <div className="flex items-center space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-2 text-sm font-medium transition ${
                      activeTab === tab.id
                        ? 'border-b-2 border-[#6366F1] text-[#6366F1] font-semibold'
                        : 'border-b-2 border-transparent text-gray-600 hover:text-[#6366F1]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Campaigns List */}
            <div className="p-6">
              {campaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className={`${campaign.cardBg} p-6 rounded-xl mb-4 border ${campaign.cardBorder} hover:shadow-lg transition`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${campaign.iconBg} rounded-xl flex items-center justify-center`}>
                        <FontAwesomeIcon icon={campaign.icon} className="text-white text-xl" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-bold text-[#0F172A]">{campaign.name}</h3>
                          <span className={`${campaign.statusColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                            {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{campaign.description}</p>
                        <div className="flex items-center space-x-6 text-sm">
                          <div className="flex items-center text-gray-600">
                            <FontAwesomeIcon 
                              icon={campaign.platformIcon} 
                              className={`${campaign.platformColor} mr-2`} 
                            />
                            <span>{campaign.page}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                            <span>{campaign.dateLabel} {campaign.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {campaign.buttons.map((button, index) => (
                        <button
                          key={index}
                          className={`w-9 h-9 ${
                            campaign.id === 'campaign-1' 
                              ? 'bg-white hover:bg-gray-50' 
                              : 'bg-gray-50 hover:bg-gray-100'
                          } rounded-lg flex items-center justify-center transition ${button.color}`}
                        >
                          <FontAwesomeIcon icon={button.icon} />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {campaign.stats.map((stat, index) => (
                      <div
                        key={index}
                        className={`${
                          campaign.id === 'campaign-1' ? 'bg-white' : 'bg-gray-50'
                        } p-4 rounded-lg`}
                      >
                        <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Campaign Templates */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-[#0F172A] mb-1">Campaign Templates</h2>
                <p className="text-sm text-gray-600">Quick-start templates for common campaign types</p>
              </div>
              <button className="text-[#6366F1] font-semibold text-sm hover:underline">
                View All Templates
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className={`border-2 border-dashed border-gray-300 p-6 rounded-xl cursor-pointer transition ${template.borderColor} ${template.bgColor}`}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${template.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                    <FontAwesomeIcon icon={template.icon} className="text-white text-xl" />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2">{template.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{template.description}</p>
                  <button className={`${template.textColor} font-semibold text-sm hover:underline`}>
                    Use Template <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Help Button */}
      <div className="fixed bottom-6 right-6">
        <button className="w-14 h-14 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] text-white rounded-full shadow-xl hover:shadow-2xl transition flex items-center justify-center">
          <FontAwesomeIcon icon={faQuestion} className="text-xl" />
        </button>
      </div>
    </div>
  )
}