'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRobot, faHome, faComments, faChartLine, faUsers, faCog,
  faSearch, faGlobe, faBell, faBriefcase, faPlus, faChevronDown,
  faFilter, faSort, faEllipsisVertical, faPen, faChartSimple,
  faPlay, faShoppingCart, faHouse, faCalendarCheck, faHeadset,
  faPercent, faUserCheck, faComments as faMessages,
  faGaugeHigh, faCircleCheck, faList, faGrid2, faChevronLeft,
  faChevronRight, faCrown,
  faGridVertical,
  faClock
} from '@fortawesome/free-solid-svg-icons'
import { faBell as faBellRegular } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import Link from 'next/link'
import Sidebar from '@/components/Sidebar'

export default function BotsPage() {
  const [activeTab, setActiveTab] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [searchQuery, setSearchQuery] = useState('')

  const stats = [
    {
      id: 'total-bots',
      value: '24',
      label: 'Total Bots',
      change: '+12%',
      changeColor: 'text-green-600',
      bgColor: 'bg-indigo-100',
      icon: faRobot,
      iconColor: 'text-[#6366F1]'
    },
    {
      id: 'active-bots',
      value: '18',
      label: 'Active Bots',
      change: 'Active',
      changeColor: 'text-green-600',
      bgColor: 'bg-green-100',
      icon: faCircleCheck,
      iconColor: 'text-green-600'
    },
    {
      id: 'conversations',
      value: '8.4K',
      label: 'Conversations Today',
      change: '+28%',
      changeColor: 'text-blue-600',
      bgColor: 'bg-purple-100',
      icon: faMessages,
      iconColor: 'text-[#8B5CF6]'
    },
    {
      id: 'response-rate',
      value: '94%',
      label: 'Response Rate',
      change: '+5%',
      changeColor: 'text-green-600',
      bgColor: 'bg-pink-100',
      icon: faGaugeHigh,
      iconColor: 'text-[#EC4899]'
    }
  ]

  const tabs = [
    { id: 'all', name: 'All Bots', count: 24, color: 'bg-indigo-100', textColor: 'text-[#6366F1]' },
    { id: 'active', name: 'Active', count: 18, color: 'bg-gray-100', textColor: 'text-gray-600' },
    { id: 'draft', name: 'Draft', count: 4, color: 'bg-gray-100', textColor: 'text-gray-600' },
    { id: 'paused', name: 'Paused', count: 2, color: 'bg-gray-100', textColor: 'text-gray-600' }
  ]

  const bots = [
    {
      id: 'bot-1',
      name: 'E-commerce Assistant',
      description: 'Handles product inquiries, order tracking, and customer support for online store',
      status: 'active',
      chats: 2847,
      updated: '2h ago',
      platforms: ['facebook', 'instagram'],
      icon: faShoppingCart,
      iconBg: 'from-blue-500 to-blue-600'
    },
    {
      id: 'bot-2',
      name: 'Real Estate Lead Gen',
      description: 'Qualifies property leads, schedules viewings, and answers property questions',
      status: 'active',
      chats: 1523,
      updated: '5h ago',
      platforms: ['facebook'],
      icon: faHouse,
      iconBg: 'from-purple-500 to-purple-600'
    },
    {
      id: 'bot-3',
      name: 'Appointment Scheduler',
      description: 'Automates booking appointments and sends confirmation messages',
      status: 'active',
      chats: 3912,
      updated: '1d ago',
      platforms: ['facebook', 'instagram'],
      icon: faCalendarCheck,
      iconBg: 'from-pink-500 to-pink-600'
    },
    {
      id: 'bot-4',
      name: 'Customer Support Bot',
      description: '24/7 support for FAQs, troubleshooting, and ticket creation',
      status: 'active',
      chats: 5234,
      updated: '3h ago',
      platforms: ['instagram'],
      icon: faHeadset,
      iconBg: 'from-green-500 to-green-600'
    },
    {
      id: 'bot-5',
      name: 'Promotion Campaign',
      description: 'Sends promotional offers and discount codes to engaged users',
      status: 'draft',
      chats: 0,
      updated: 'Created 2d ago',
      platforms: [],
      icon: faPercent,
      iconBg: 'from-orange-500 to-orange-600'
    },
    {
      id: 'bot-6',
      name: 'Lead Qualification',
      description: 'Collects contact info and qualifies leads based on criteria',
      status: 'paused',
      chats: 1876,
      updated: 'Paused 1w ago',
      platforms: ['facebook'],
      icon: faUserCheck,
      iconBg: 'from-teal-500 to-teal-600'
    }
  ]

  const getStatusConfig = (status) => {
    switch(status) {
      case 'active':
        return {
          text: 'Active',
          color: 'text-green-600',
          bgColor: 'bg-green-50',
          dotColor: 'bg-green-600'
        }
      case 'draft':
        return {
          text: 'Draft',
          color: 'text-gray-600',
          bgColor: 'bg-gray-100',
          dotColor: 'bg-gray-400'
        }
      case 'paused':
        return {
          text: 'Paused',
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-50',
          dotColor: 'bg-yellow-600'
        }
      default:
        return {
          text: 'Inactive',
          color: 'text-red-600',
          bgColor: 'bg-red-50',
          dotColor: 'bg-red-600'
        }
    }
  }

  const platformIcons = {
    facebook: faFacebook,
    instagram: faInstagram
  }

  const platformColors = {
    facebook: 'bg-blue-600',
    instagram: 'bg-gradient-to-br from-purple-600 to-pink-600'
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <nav id="header" className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
        <div className="flex items-center h-16 px-6">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faRobot} className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold text-[#0F172A]">BotFlow</span>
            </div>
            <div className="flex items-center space-x-1">
              <button className="p-2.5 text-gray-600 hover:bg-gray-100 rounded-lg transition">
                <FontAwesomeIcon icon={faHome} />
              </button>
              <button className="p-2.5 text-gray-600 hover:bg-gray-100 rounded-lg transition">
                <FontAwesomeIcon icon={faComments} />
              </button>
              <button className="p-2.5 text-gray-600 hover:bg-gray-100 rounded-lg transition">
                <FontAwesomeIcon icon={faChartLine} />
              </button>
              <button className="p-2.5 text-gray-600 hover:bg-gray-100 rounded-lg transition">
                <FontAwesomeIcon icon={faUsers} />
              </button>
            </div>
          </div>
          <div className="flex-grow"></div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search bots..."
                className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3 text-gray-400" />
            </div>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">
              <FontAwesomeIcon icon={faGlobe} />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition relative">
              <FontAwesomeIcon icon={faBellRegular} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">
              <FontAwesomeIcon icon={faCog} />
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-white text-sm font-semibold">
              JD
            </div>
          </div>
        </div>
      </nav>

      <div className="flex pt-16">
        {/* Sidebar */}
        <Sidebar activeItem="bots" />

        {/* Main Content */}
        <div id="main-content" className="flex-1 ml-64 p-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h1 className="text-3xl font-bold text-[#0F172A] mb-1">Bots Management</h1>
                <p className="text-gray-600">Create, edit, and manage your chatbot automation flows</p>
              </div>
              <div className="flex items-center space-x-3">
                <button className="flex items-center px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium">
                  <FontAwesomeIcon icon={faFilter} className="mr-2" />
                  Filter
                </button>
                <button className="flex items-center px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium">
                  <FontAwesomeIcon icon={faSort} className="mr-2" />
                  Sort
                </button>
                <button className="flex items-center px-6 py-2.5 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-lg font-semibold hover:shadow-lg transition">
                  <FontAwesomeIcon icon={faPlus} className="mr-2" />
                  New Bot
                </button>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div id="stats-section" className="grid grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                    <FontAwesomeIcon icon={stat.icon} className={`${stat.iconColor} text-xl`} />
                  </div>
                  <span className={`text-xs font-semibold ${stat.changeColor} bg-green-50 px-2 py-1 rounded-full`}>
                    {stat.change.startsWith('+') ? (
                      <>
                        <FontAwesomeIcon icon={faPlus} className="mr-1" />
                        {stat.change}
                      </>
                    ) : (
                      stat.change
                    )}
                  </span>
                </div>
                <div className="text-3xl font-bold text-[#0F172A] mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tabs Section */}
          <div id="tabs-section" className="bg-white rounded-xl border border-gray-200 mb-6">
            <div className="flex items-center border-b border-gray-200 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-4 font-medium ${
                    activeTab === tab.id
                      ? 'text-[#6366F1] border-b-2 border-[#6366F1] font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.name}{' '}
                  <span className={`ml-2 text-xs ${activeTab === tab.id ? 'bg-indigo-100 text-[#6366F1]' : 'bg-gray-100 text-gray-600'} px-2 py-0.5 rounded-full`}>
                    {tab.count}
                  </span>
                </button>
              ))}
              <div className="ml-auto flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg hover:bg-gray-50 ${
                    viewMode === 'list' ? 'text-[#6366F1] bg-indigo-50' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <FontAwesomeIcon icon={faList} />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg hover:bg-gray-50 ${
                    viewMode === 'grid' ? 'text-[#6366F1] bg-indigo-50' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <FontAwesomeIcon icon={faGridVertical} />
                </button>
              </div>
            </div>
          </div>

          {/* Bots Grid */}
          <div id="bots-grid" className="grid grid-cols-3 gap-6">
            {bots.map((bot) => {
              const statusConfig = getStatusConfig(bot.status)
              
              return (
                <div key={bot.id} className="bg-white rounded-xl border border-gray-200 hover:shadow-xl transition group">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${bot.iconBg} rounded-lg flex items-center justify-center`}>
                        <FontAwesomeIcon icon={bot.icon} className="text-white text-xl" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs font-semibold ${statusConfig.color} ${statusConfig.bgColor} px-2 py-1 rounded-full flex items-center`}>
                          <span className={`w-1.5 h-1.5 ${statusConfig.dotColor} rounded-full mr-1.5`}></span>
                          {statusConfig.text}
                        </span>
                        <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition">
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-2">{bot.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{bot.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faComments} className="mr-1.5" />
                        <span>{bot.chats.toLocaleString()} chats</span>
                      </div>
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faClock} className="mr-1.5" />
                        <span>{bot.updated}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                      {bot.platforms.map((platform) => (
                        <div key={platform} className="flex items-center">
                          <div className={`w-6 h-6 ${platformColors[platform]} rounded flex items-center justify-center`}>
                            <FontAwesomeIcon icon={platformIcons[platform]} className="text-white text-xs" />
                          </div>
                        </div>
                      ))}
                      <span className="text-xs text-gray-500">
                        {bot.platforms.length} {bot.platforms.length === 1 ? 'page' : 'pages'} connected
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="flex-1 bg-indigo-50 text-[#6366F1] py-2 rounded-lg font-semibold hover:bg-indigo-100 transition text-sm">
                        <FontAwesomeIcon icon={faPen} className="mr-2" />Edit
                      </button>
                      <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-50 transition text-sm">
                        <FontAwesomeIcon icon={faChartSimple} className="mr-2" />Stats
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Create New Bot Card */}
            <div id="create-bot-card" className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border-2 border-dashed border-[#6366F1] hover:border-solid hover:shadow-xl transition group cursor-pointer">
              <div className="p-6 h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <FontAwesomeIcon icon={faPlus} className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">Create New Bot</h3>
                <p className="text-sm text-gray-600 mb-4">Start building your next automation flow</p>
                <button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div id="pagination-section" className="flex items-center justify-between mt-8">
            <div className="text-sm text-gray-600">
              Showing <span className="font-semibold">1-7</span> of <span className="font-semibold">24</span> bots
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button className="px-4 py-2 bg-[#6366F1] text-white rounded-lg font-semibold">1</button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">2</button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">3</button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}