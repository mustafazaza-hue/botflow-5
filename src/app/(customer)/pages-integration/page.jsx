// app/pages-integration/page.js
'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGlobe, faBell, faQuestionCircle, faTimes,
  faFilter, faSync, faGear, faTrash, faShieldHalved,
  faLink, faArrowRight, faClock, faInfoCircle,
  faExclamationCircle,
  faEllipsisVertical
} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import Sidebar from '@/components/Sidebar'

export default function PagesIntegrationPage() {
  const [alertVisible, setAlertVisible] = useState(true)

  const connectedPages = [
    {
      id: 'page-1',
      name: 'TechStore Official',
      platform: 'facebook',
      type: 'Facebook Page',
      status: 'active',
      followers: '24.5K',
      messages: '1,247',
      metric: '98%',
      metricLabel: 'Response Rate',
      connectionStatus: 'Healthy',
      permissions: 'All Granted',
      lastSynced: '2 mins ago',
      icon: faFacebook,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      statusColor: 'bg-green-100',
      statusTextColor: 'text-green-700',
      statusDotColor: 'bg-green-500'
    },
    {
      id: 'page-2',
      name: '@techstore',
      platform: 'instagram',
      type: 'Instagram Business',
      status: 'active',
      followers: '18.2K',
      messages: '892',
      metric: '4.2%',
      metricLabel: 'Engagement',
      connectionStatus: 'Healthy',
      permissions: 'All Granted',
      lastSynced: '5 mins ago',
      icon: faInstagram,
      iconColor: 'text-pink-600',
      iconBg: 'bg-gradient-to-br from-purple-100 to-pink-100',
      statusColor: 'bg-green-100',
      statusTextColor: 'text-green-700',
      statusDotColor: 'bg-green-500'
    },
    {
      id: 'page-3',
      name: 'StyleHub Fashion',
      platform: 'facebook',
      type: 'Facebook Page',
      status: 'warning',
      followers: '32.1K',
      messages: '2,145',
      metric: '95%',
      metricLabel: 'Response Rate',
      connectionStatus: 'Healthy',
      permissions: 'Limited',
      lastSynced: '1 hour ago',
      icon: faFacebook,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      statusColor: 'bg-yellow-100',
      statusTextColor: 'text-yellow-700',
      statusDotColor: 'bg-yellow-500'
    },
    {
      id: 'page-4',
      name: '@stylehub_official',
      platform: 'instagram',
      type: 'Instagram Business',
      status: 'error',
      followers: '28.9K',
      messages: '--',
      metric: '--',
      metricLabel: 'Engagement',
      connectionStatus: 'Disconnected',
      permissions: 'Expired',
      lastSynced: '3 days ago',
      icon: faInstagram,
      iconColor: 'text-pink-600',
      iconBg: 'bg-gradient-to-br from-purple-100 to-pink-100',
      statusColor: 'bg-red-100',
      statusTextColor: 'text-red-700',
      statusDotColor: 'bg-red-500'
    }
  ]

  const activityLogs = [
    {
      id: 'log-1',
      type: 'success',
      title: 'Connection Verified',
      time: '2 mins ago',
      description: 'TechStore Official - All permissions verified successfully',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 'log-2',
      type: 'info',
      title: 'Data Synced',
      time: '5 mins ago',
      description: '@techstore - Synced 47 new messages and 12 comments',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 'log-3',
      type: 'warning',
      title: 'Permission Update Required',
      time: '1 hour ago',
      description: 'StyleHub Fashion - Some permissions need to be re-granted',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      id: 'log-4',
      type: 'error',
      title: 'Connection Lost',
      time: '3 days ago',
      description: '@stylehub_official - Account disconnected due to expired token',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600'
    }
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success':
        return 'fa-check-circle'
      case 'warning':
        return 'fa-exclamation-triangle'
      case 'error':
        return 'fa-times-circle'
      default:
        return 'fa-check-circle'
    }
  }

  const getStatusIconColor = (status) => {
    switch (status) {
      case 'success':
        return 'text-green-500'
      case 'warning':
        return 'text-yellow-500'
      case 'error':
        return 'text-red-500'
      default:
        return 'text-green-500'
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Component */}
      <Sidebar activeItem="pages" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#0F172A]">Pages Integration</h1>
              <p className="text-sm text-gray-500 mt-1">Manage your connected social media accounts</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-lg transition">
                <FontAwesomeIcon icon={faGlobe} className="mr-2" />EN
              </button>
              <button className="text-gray-600 hover:text-gray-800 p-2 rounded-lg transition">
                <FontAwesomeIcon icon={faBell} className="text-xl" />
              </button>
              <button className="text-gray-600 hover:text-gray-800 p-2 rounded-lg transition">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-xl" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {/* Alert Section */}
          {alertVisible && (
            <div className="mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start">
                <FontAwesomeIcon icon={faInfoCircle} className="text-blue-500 text-xl mr-3 mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-900 mb-1">Connection Health Check</h3>
                  <p className="text-sm text-blue-700">All your connected pages are active and functioning properly. Last checked: 2 minutes ago</p>
                </div>
                <button 
                  onClick={() => setAlertVisible(false)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-[#0F172A]">Quick Actions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Connect Facebook Button */}
              <button className="bg-white border-2 border-dashed border-gray-300 hover:border-[#6366F1] p-6 rounded-xl transition group">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-500 transition">
                    <FontAwesomeIcon 
                      icon={faFacebook} 
                      className="text-blue-500 text-2xl group-hover:text-white" 
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-[#0F172A] mb-1">Connect Facebook Page</h3>
                    <p className="text-sm text-gray-500">Link your Facebook business page</p>
                  </div>
                </div>
              </button>

              {/* Connect Instagram Button */}
              <button className="bg-white border-2 border-dashed border-gray-300 hover:border-[#EC4899] p-6 rounded-xl transition group">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-500 transition">
                    <FontAwesomeIcon 
                      icon={faInstagram} 
                      className="text-pink-500 text-2xl group-hover:text-white" 
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-[#0F172A] mb-1">Connect Instagram Account</h3>
                    <p className="text-sm text-gray-500">Link your Instagram business account</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Connected Pages Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-[#0F172A]">Connected Pages (4)</h2>
              <div className="flex items-center space-x-3">
                <button className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition">
                  <FontAwesomeIcon icon={faFilter} className="mr-2" />Filter
                </button>
                <button className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition">
                  <FontAwesomeIcon icon={faSync} className="mr-2" />Refresh All
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {connectedPages.map((page) => (
                <div key={page.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                  {/* Page Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-14 h-14 ${page.iconBg} rounded-lg flex items-center justify-center mr-4`}>
                        <FontAwesomeIcon icon={page.icon} className={`${page.iconColor} text-2xl`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0F172A]">{page.name}</h3>
                        <p className="text-sm text-gray-500">{page.type}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 ${page.statusColor} ${page.statusTextColor} text-xs font-semibold rounded-full flex items-center`}>
                      <span className={`w-2 h-2 ${page.statusDotColor} rounded-full mr-2`}></span>
                      {page.status.charAt(0).toUpperCase() + page.status.slice(1)}
                    </span>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-100">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Followers</div>
                      <div className="font-bold text-[#0F172A]">{page.followers}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Messages</div>
                      <div className="font-bold text-[#0F172A]">{page.messages}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">{page.metricLabel}</div>
                      <div className="font-bold text-[#0F172A]">{page.metric}</div>
                    </div>
                  </div>

                  {/* Status Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 flex items-center">
                        <i className={`fas ${getStatusIcon(page.connectionStatus.toLowerCase())} ${getStatusIconColor(page.connectionStatus.toLowerCase())} mr-2`}></i>
                        Connection Status
                      </span>
                      <span className={`font-semibold ${
                        page.connectionStatus === 'Healthy' ? 'text-green-600' :
                        page.connectionStatus === 'Disconnected' ? 'text-red-600' :
                        'text-gray-700'
                      }`}>
                        {page.connectionStatus}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 flex items-center">
                        <i className={`fas ${getStatusIcon(page.permissions.toLowerCase())} ${getStatusIconColor(page.permissions.toLowerCase())} mr-2`}></i>
                        Permissions
                      </span>
                      <span className={`font-semibold ${
                        page.permissions === 'All Granted' ? 'text-green-600' :
                        page.permissions === 'Limited' ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {page.permissions}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 flex items-center">
                        <FontAwesomeIcon icon={faClock} className="text-gray-400 mr-2" />
                        Last Synced
                      </span>
                      <span className="font-semibold text-gray-700">{page.lastSynced}</span>
                    </div>
                  </div>

                  {/* Warning/Error Messages */}
                  {page.status === 'warning' && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                      <p className="text-xs text-yellow-800">
                        <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
                        Some permissions need to be re-granted for full functionality
                      </p>
                    </div>
                  )}

                  {page.status === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                      <p className="text-xs text-red-800">
                        <FontAwesomeIcon icon={faExclamationCircle} className="mr-1" />
                        Connection lost. Please reconnect this account to resume automation
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-2">
                    {page.status === 'active' ? (
                      <>
                        <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition">
                          <FontAwesomeIcon icon={faGear} className="mr-2" />Settings
                        </button>
                        <button className={`flex-1 ${
                          page.platform === 'facebook' 
                            ? 'bg-[#6366F1] hover:bg-indigo-700' 
                            : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                        } text-white px-4 py-2 rounded-lg font-medium transition`}>
                          <FontAwesomeIcon icon={faSync} className="mr-2" />Refresh
                        </button>
                        <button className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </>
                    ) : page.status === 'warning' ? (
                      <>
                        <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition">
                          <FontAwesomeIcon icon={faShieldHalved} className="mr-2" />Fix Permissions
                        </button>
                        <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition">
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition">
                          <FontAwesomeIcon icon={faLink} className="mr-2" />Reconnect
                        </button>
                        <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition">
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Logs */}
          <div className="mt-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-[#0F172A]">Recent Activity</h2>
                <button className="text-[#6366F1] hover:text-indigo-700 text-sm font-semibold">
                  View All Logs <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                </button>
              </div>
              <div className="space-y-4">
                {activityLogs.map((log) => (
                  <div key={log.id} className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className={`w-10 h-10 ${log.iconBg} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                      <i className={`fas ${log.icon} ${log.iconColor}`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-[#0F172A]">{log.title}</h4>
                        <span className="text-xs text-gray-500">{log.time}</span>
                      </div>
                      <p className="text-sm text-gray-600">{log.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}