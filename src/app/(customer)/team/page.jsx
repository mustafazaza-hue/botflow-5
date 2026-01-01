// app/team/page.js
'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRobot, faChartLine, faComments, faShareNodes,
  faChartBar, faBullhorn, faUsers, faCreditCard,
  faGear, faFileLines, faCircleQuestion, faEllipsisVertical,
  faBell, faGlobe, faChevronDown, faSearch, faFilter,
  faUserPlus, faCrown, faUserShield, faHeadset, faEye,
  faCircleCheck, faClock, faUserPlus as faUserPlusAlt,
  faComment, faKey, faCheck
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Sidebar from '@/components/Sidebar'

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState('team-members')
  const [searchQuery, setSearchQuery] = useState('')

  const teamMembers = [
    {
      id: 'member-1',
      name: 'Sarah Johnson',
      email: 'sarah@botflow.com',
      role: 'Owner',
      roleColor: 'bg-purple-100 text-purple-700',
      roleIcon: faCrown,
      status: 'Active',
      statusColor: 'bg-green-100 text-green-700',
      statusDot: 'bg-green-500',
      lastActive: '2 minutes ago',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg'
    },
    {
      id: 'member-2',
      name: 'Michael Chen',
      email: 'michael@botflow.com',
      role: 'Admin',
      roleColor: 'bg-blue-100 text-blue-700',
      roleIcon: faUserShield,
      status: 'Active',
      statusColor: 'bg-green-100 text-green-700',
      statusDot: 'bg-green-500',
      lastActive: '15 minutes ago',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg'
    },
    {
      id: 'member-3',
      name: 'David Martinez',
      email: 'david@botflow.com',
      role: 'Agent',
      roleColor: 'bg-emerald-100 text-emerald-700',
      roleIcon: faHeadset,
      status: 'Active',
      statusColor: 'bg-green-100 text-green-700',
      statusDot: 'bg-green-500',
      lastActive: '1 hour ago',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg'
    },
    {
      id: 'member-4',
      name: 'Emma Wilson',
      email: 'emma@botflow.com',
      role: 'Agent',
      roleColor: 'bg-emerald-100 text-emerald-700',
      roleIcon: faHeadset,
      status: 'Away',
      statusColor: 'bg-yellow-100 text-yellow-700',
      statusDot: 'bg-yellow-500',
      lastActive: '3 hours ago',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg'
    },
    {
      id: 'member-5',
      name: 'James Anderson',
      email: 'james@botflow.com',
      role: 'Viewer',
      roleColor: 'bg-gray-100 text-gray-700',
      roleIcon: faEye,
      status: 'Offline',
      statusColor: 'bg-gray-200 text-gray-600',
      statusDot: 'bg-gray-500',
      lastActive: '2 days ago',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg'
    }
  ]

  const stats = [
    {
      id: 'total-members',
      value: '5',
      label: 'Total Members',
      icon: faUsers,
      iconBg: 'from-[#6366F1] to-[#8B5CF6]'
    },
    {
      id: 'active-now',
      value: '3',
      label: 'Active Now',
      icon: faCircleCheck,
      iconBg: 'from-green-400 to-emerald-500'
    },
    {
      id: 'actions-today',
      value: '127',
      label: 'Actions Today',
      icon: faClock,
      iconBg: 'from-[#EC4899] to-pink-500'
    },
    {
      id: 'pending-invites',
      value: '2',
      label: 'Pending Invites',
      icon: faUserPlusAlt,
      iconBg: 'from-orange-400 to-amber-500'
    }
  ]

  const recentActivities = [
    {
      id: 'activity-1',
      title: 'Sarah Johnson invited Michael Chen to the team',
      time: '2 hours ago',
      icon: faUserPlus,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100'
    },
    {
      id: 'activity-2',
      title: 'Michael Chen updated permissions for Agent role',
      time: '5 hours ago',
      icon: faUserShield,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100'
    },
    {
      id: 'activity-3',
      title: 'David Martinez accepted team invitation',
      time: '1 day ago',
      icon: faCheck,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100'
    },
    {
      id: 'activity-4',
      title: 'Emma Wilson changed her password',
      time: '2 days ago',
      icon: faKey,
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-100'
    }
  ]

  const tabs = [
    { id: 'team-members', label: 'Team Members', count: 5 },
    { id: 'roles-permissions', label: 'Roles & Permissions' },
    { id: 'activity-logs', label: 'Activity Logs' }
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeItem="team" />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-[#0F172A]">Team Management</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition">
                <FontAwesomeIcon icon={faBell} className="text-xl" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#EC4899] rounded-full"></span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition">
                <FontAwesomeIcon icon={faGlobe} />
                <span className="text-sm font-medium">EN</span>
                <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-8">
          <div className="mb-6">
            <p className="text-gray-600">Manage your team members, assign roles, and track their activity.</p>
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-4 px-1 font-medium transition ${
                      activeTab === tab.id
                        ? 'border-b-2 border-[#6366F1] text-[#6366F1] font-semibold'
                        : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.label}
                    {tab.count && (
                      <span className="ml-2 text-sm font-normal">({tab.count})</span>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Team Header */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <FontAwesomeIcon 
                    icon={faSearch} 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
                  />
                  <input 
                    type="text" 
                    placeholder="Search team members..." 
                    className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20 focus:border-[#6366F1]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button className="flex items-center px-4 py-2.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition">
                  <FontAwesomeIcon icon={faFilter} className="mr-2" />
                  <span>Filter</span>
                </button>
              </div>
              <button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition flex items-center">
                <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                Invite Member
              </button>
            </div>
          </div>

          {/* Team List */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Member</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Last Active</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {teamMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <img 
                            src={member.avatar} 
                            className="w-10 h-10 rounded-full mr-3" 
                            alt={member.name} 
                          />
                          <div>
                            <p className="font-semibold text-[#0F172A]">{member.name}</p>
                            <p className="text-sm text-gray-500">{member.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${member.roleColor}`}>
                          <FontAwesomeIcon icon={member.roleIcon} className="mr-1.5 text-xs" />
                          {member.role}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${member.statusColor}`}>
                          <span className={`w-1.5 h-1.5 ${member.statusDot} rounded-full mr-1.5`}></span>
                          {member.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{member.lastActive}</td>
                      <td className="px-6 py-4">
                        <button className="text-gray-400 hover:text-gray-600 p-2">
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Activity Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.iconBg} rounded-xl flex items-center justify-center`}>
                    <FontAwesomeIcon icon={stat.icon} className="text-white text-xl" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-[#0F172A] mb-1">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mt-8">
            <h3 className="text-lg font-bold text-[#0F172A] mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start">
                  <div className={`w-10 h-10 ${activity.iconBg} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                    <FontAwesomeIcon icon={activity.icon} className={activity.iconColor} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[#0F172A]">{activity.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition">
          <FontAwesomeIcon icon={faComment} className="text-xl" />
        </button>
      </div>
    </div>
  )
}