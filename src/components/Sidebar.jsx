'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRobot, faHome, faComments, faShareNodes,
  faChartLine, faBullhorn, faUsers, faCreditCard,
  faCog, faBriefcase, faChevronDown, faPlus,
  faCrown, faFileLines, faBook
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useState } from 'react'

export default function Sidebar({ activeItem = 'bots' }) {
  const [userData] = useState({
    name: 'John Smith',
    plan: 'Pro Plan',
    avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg'
  })

  const mainNav = [
    { id: 'dashboard', name: 'Dashboard', icon: faHome, path: '/dashboard' },
    { id: 'bots', name: 'Bots', icon: faRobot, path: '/bots' },
    { id: 'conversations', name: 'Conversations', icon: faComments, badge: 12, path: '/conversations' },
    { id: 'pages', name: 'Pages', icon: faShareNodes, path: '/pages-integration' },
    { id: 'analytics', name: 'Analytics', icon: faChartLine, path: '/analytics' },
    { id: 'campaigns', name: 'Campaigns', icon: faBullhorn, path: '/campaigns' }
  ]

  const managementNav = [
    { id: 'team', name: 'Team', icon: faUsers, path: '/team' },
    { id: 'billing', name: 'Billing', icon: faCreditCard, path: '/billing' },
    { id: 'settings', name: 'Settings', icon: faCog, path: '/settings' }
  ]

  return (
    <div id="sidebar" className="w-64 bg-white border-r border-gray-200 h-screen fixed">
      <div className="p-4">
        {/* Workspace Info */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
              <FontAwesomeIcon icon={faBriefcase} className="text-white text-sm" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#0F172A]">My Workspace</div>
              <div className="text-xs text-gray-500">Pro Plan</div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
          </button>
        </div>

        {/* Create Bot Button */}
        <div className="mb-6">
          <button className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white py-2.5 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Create Bot
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="space-y-1">
          {mainNav.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className={`flex items-center px-3 py-2.5 rounded-lg transition ${
                activeItem === item.id
                  ? 'bg-indigo-50 text-[#6366F1]'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <FontAwesomeIcon icon={item.icon} className="mr-3 w-5" />
              <span className={`${activeItem === item.id ? 'font-semibold' : 'font-medium'}`}>
                {item.name}
              </span>
              {item.badge && (
                <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}

          {/* Management Section */}
          <div className="pt-4 mt-4 border-t border-gray-200">
            {managementNav.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className={`flex items-center px-3 py-2.5 rounded-lg transition ${
                  activeItem === item.id
                    ? 'bg-gray-100 text-[#0F172A]'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <FontAwesomeIcon icon={item.icon} className="mr-3 w-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Upgrade Banner */}
      <div className="h-2/12 absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
        <div className="bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-[#0F172A]">Upgrade to Business</span>
            <FontAwesomeIcon icon={faCrown} className="text-[#EC4899]" />
          </div>
          <p className="text-xs text-gray-600 mb-3">Unlock unlimited bots and advanced features</p>
          <button className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  )
}