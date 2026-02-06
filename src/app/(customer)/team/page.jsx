'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRobot, faChartLine, faComments, faShareNodes,
  faChartBar, faBullhorn, faUsers, faCreditCard,
  faGear, faFileLines, faCircleQuestion, faEllipsisVertical,
  faBell, faGlobe, faChevronDown, faSearch, faFilter,
  faUserPlus, faCrown, faUserShield, faHeadset, faEye,
  faCircleCheck, faClock, faUserPlus as faUserPlusAlt,
  faComment, faKey, faCheck, faSpinner, faExclamationTriangle,
  faUserGear, faCircleDot, faEnvelope, faBellSlash, faArrowTrendUp,
  faShieldHalved, faUsersGear
} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import { teamApi, ROLE_CONFIG, STATUS_CONFIG, SYSTEM_COLORS, COLOR_SCHEME } from '@/api/team'
import { showAlert } from '@/utils/sweetAlert'
import { formatDate } from '@/utils/formatters'
import InviteMemberModal from '@/components/InviteMemberModal'
import MemberActionsMenu from '@/components/MemberActionsMenu'

// دالة مساعدة للحصول على الأيقونة من النص
const getIconFromString = (iconName) => {
  const icons = {
    faCrown: faCrown,
    faUserShield: faUserShield,
    faHeadset: faHeadset,
    faEye: faEye,
    faUserGear: faUserGear,
    faCircleCheck: faCircleCheck,
    faClock: faClock,
    faCircleDot: faCircleDot,
    faEnvelope: faEnvelope,
    faBellSlash: faBellSlash,
    faUserPlusAlt: faUserPlusAlt,
    faUserPlus: faUserPlus,
    faKey: faKey,
    faCheck: faCheck,
    faArrowTrendUp: faArrowTrendUp,
    faShieldHalved: faShieldHalved,
    faUsersGear: faUsersGear
  };
  return icons[iconName] || faUsers;
};

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState('team-members')
  const [searchQuery, setSearchQuery] = useState('')
  const [teamMembers, setTeamMembers] = useState([])
  const [stats, setStats] = useState([])
  const [recentActivities, setRecentActivities] = useState([])
  const [pendingInvites, setPendingInvites] = useState([])
  const [roles, setRoles] = useState([])
  const [loading, setLoading] = useState(true)
  const [showInviteModal, setShowInviteModal] = useState(false)
  
  // تحميل البيانات
  const loadData = async () => {
    try {
      setLoading(true)
      
      // تحميل البيانات بالتوازي
      const [membersData, statsData, activitiesData, pendingData, rolesData] = await Promise.all([
        teamApi.getMembers(),
        teamApi.getStats(),
        teamApi.getActivityLogs(),
        teamApi.getPendingInvites(),
        teamApi.getRoles()
      ]);
      
      // معالجة بيانات الأعضاء
      const processedMembers = Array.isArray(membersData) ? membersData.map(member => {
        const roleConfig = ROLE_CONFIG[member.role] || ROLE_CONFIG.Viewer;
        const statusConfig = STATUS_CONFIG[member.status] || STATUS_CONFIG.Offline;
        
        return {
          ...member,
          roleColor: roleConfig.color,
          roleIcon: getIconFromString(roleConfig.icon),
          roleIconColor: roleConfig.iconColor,
          statusColor: statusConfig.color,
          statusIcon: getIconFromString(statusConfig.icon),
          statusDot: statusConfig.dot,
          lastActiveFormatted: formatDate(member.lastActive),
          avatarColor: getAvatarColor(member.email || member.name)
        };
      }) : [];
      
      // معالجة الإحصائيات مع ألوان النظام
      const defaultStats = [
        { 
          id: 'total-members', 
          value: '0', 
          label: 'Total Members', 
          icon: faUsers, 
          iconBg: SYSTEM_COLORS.primary.gradient,
          trend: '+2' 
        },
        { 
          id: 'active-now', 
          value: '0', 
          label: 'Active Now', 
          icon: faCircleCheck, 
          iconBg: SYSTEM_COLORS.success.gradient,
          trend: '+1' 
        },
        { 
          id: 'actions-today', 
          value: '0', 
          label: 'Actions Today', 
          icon: faArrowTrendUp, 
          iconBg: SYSTEM_COLORS.secondary.gradient,
          trend: '+12%' 
        },
        { 
          id: 'pending-invites', 
          value: '0', 
          label: 'Pending Invites', 
          icon: faEnvelope, 
          iconBg: SYSTEM_COLORS.warning.gradient,
          trend: '-1' 
        }
      ];
      
      const processedStats = statsData ? defaultStats.map(stat => {
        const apiValue = statsData[stat.id] || statsData[stat.label] || '0';
        return { ...stat, value: apiValue.toString() };
      }) : defaultStats;
      
      // معالجة النشاطات
      const processedActivities = Array.isArray(activitiesData) ? activitiesData.map(activity => {
        const activityType = activity.type || 'info';
        const typeColors = {
          'invite': { bg: 'bg-indigo-100', icon: 'text-indigo-600', iconType: 'faUserPlus' },
          'role_change': { bg: 'bg-purple-100', icon: 'text-purple-600', iconType: 'faUserShield' },
          'login': { bg: 'bg-emerald-100', icon: 'text-emerald-600', iconType: 'faCheck' },
          'security': { bg: 'bg-amber-100', icon: 'text-amber-600', iconType: 'faKey' },
          'default': { bg: 'bg-blue-100', icon: 'text-blue-600', iconType: 'faCheck' }
        };
        
        const colors = typeColors[activityType] || typeColors.default;
        
        return {
          ...activity,
          timeFormatted: formatDate(activity.timestamp),
          icon: getIconFromString(activity.icon || colors.iconType),
          iconColor: colors.icon,
          iconBg: colors.bg
        };
      }) : [];
      
      setTeamMembers(processedMembers)
      setStats(processedStats)
      setRecentActivities(processedActivities)
      setPendingInvites(pendingData || [])
      setRoles(rolesData || [])
      
    } catch (error) {
      console.error('Error loading team data:', error)
      showAlert.error('Error', 'Failed to load team data')
    } finally {
      setLoading(false)
    }
  }
  
  // دالة لتوليد لون رمزي بناءً على اسم أو بريد العضو
  const getAvatarColor = (str) => {
    const colors = [
      'from-indigo-400 to-purple-500',
      'from-emerald-400 to-teal-500',
      'from-amber-400 to-orange-500',
      'from-rose-400 to-pink-500',
      'from-sky-400 to-cyan-500',
      'from-violet-400 to-fuchsia-500'
    ];
    
    if (!str) return colors[0];
    const hash = str.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    return colors[hash % colors.length];
  };
  
  useEffect(() => {
    loadData()
  }, [])
  
  // دالة دعوة عضو جديد
  const handleInviteMember = async (values) => {
    try {
      await teamApi.inviteMember(values)
      setShowInviteModal(false)
      await loadData() // إعادة تحميل البيانات
    } catch (error) {
      console.error('Error inviting member:', error)
    }
  }
  
  // دالة تحديث دور العضو
  const handleUpdateRole = async (memberId, role) => {
    try {
      await teamApi.updateMemberRole(memberId, { role })
      await loadData() // إعادة تحميل البيانات
    } catch (error) {
      console.error('Error updating role:', error)
    }
  }
  
  // دالة حذف عضو
  const handleDeleteMember = async (memberId) => {
    try {
      await teamApi.deleteMember(memberId)
      await loadData() // إعادة تحميل البيانات
    } catch (error) {
      console.error('Error deleting member:', error)
    }
  }
  
  // دالة إعادة إرسال الدعوة
  const handleResendInvite = async (inviteId) => {
    try {
      await teamApi.resendInvite(inviteId)
      await loadData() // إعادة تحميل البيانات
    } catch (error) {
      console.error('Error resending invite:', error)
    }
  }
  
  // تصفية الأعضاء حسب البحث
  const filteredMembers = teamMembers.filter(member =>
    member.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.role?.toLowerCase().includes(searchQuery.toLowerCase())
  )
  
  const tabs = [
    { id: 'team-members', label: 'Team Members', count: teamMembers.length },
    { id: 'roles-permissions', label: 'Roles & Permissions', icon: faShieldHalved },
    { id: 'activity-logs', label: 'Activity Logs', icon: faClock }
  ]
  
  if (loading) {
    return (
      <div className="flex h-screen bg-gray-50">
        <Sidebar activeItem="team" />
        <div className="flex-1 ml-64 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faSpinner} className="text-2xl text-white animate-spin" />
            </div>
            <p className="text-gray-600 font-medium">Loading team data...</p>
            <p className="text-sm text-gray-400 mt-1">Please wait a moment</p>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className={`flex h-screen ${COLOR_SCHEME.background.primary}`}>
      {/* Sidebar */}
      <Sidebar activeItem="team" />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <header className={`${COLOR_SCHEME.background.card} border-b ${COLOR_SCHEME.border.light} sticky top-0 z-40`}>
          <div className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center space-x-4">
              <div className={`w-10 h-10 bg-gradient-to-r ${SYSTEM_COLORS.primary.gradient} rounded-xl flex items-center justify-center`}>
                <FontAwesomeIcon icon={faUsersGear} className="text-white text-lg" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Team Management</h1>
                <p className="text-sm text-gray-500">Manage your team members and permissions</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition">
                <FontAwesomeIcon icon={faBell} className="text-xl" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"></span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-xl transition">
                <FontAwesomeIcon icon={faGlobe} />
                <span className="text-sm font-medium">EN</span>
                <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-8">
          {/* Tabs */}
          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-4 px-1 font-medium transition flex items-center ${
                      activeTab === tab.id
                        ? 'border-b-2 border-indigo-600 text-indigo-600 font-semibold'
                        : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.icon && (
                      <FontAwesomeIcon icon={tab.icon} className="mr-2 text-sm" />
                    )}
                    {tab.label}
                    {tab.count && (
                      <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                        activeTab === tab.id 
                          ? 'bg-indigo-100 text-indigo-700' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {tab.count}
                      </span>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Team Header */}
          <div className={`${COLOR_SCHEME.background.card} rounded-2xl border ${COLOR_SCHEME.border.light} p-6 mb-6 shadow-sm`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <FontAwesomeIcon 
                    icon={faSearch} 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
                  />
                  <input 
                    type="text" 
                    placeholder="Search team members by name, email, or role..." 
                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button className="flex items-center px-4 py-3 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition hover:border-gray-300">
                  <FontAwesomeIcon icon={faFilter} className="mr-2" />
                  <span>Filter</span>
                </button>
              </div>
              <button 
                onClick={() => setShowInviteModal(true)}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition flex items-center hover:shadow-indigo-500/25"
              >
                <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                Invite Member
              </button>
            </div>
          </div>

          {/* Team List */}
          {activeTab === 'team-members' && (
            <>
              {teamMembers.length === 0 ? (
                <div className={`${COLOR_SCHEME.background.card} rounded-2xl border ${COLOR_SCHEME.border.light} p-12 text-center`}>
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <FontAwesomeIcon icon={faUsers} className="text-3xl text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No Team Members Yet</h3>
                  <p className="text-gray-500 mb-6">Start building your team by inviting members</p>
                  <button 
                    onClick={() => setShowInviteModal(true)}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition hover:shadow-indigo-500/25"
                  >
                    Invite First Member
                  </button>
                </div>
              ) : (
                <>
                  <div className={`${COLOR_SCHEME.background.card} rounded-2xl border ${COLOR_SCHEME.border.light} overflow-hidden shadow-sm`}>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className={`bg-gradient-to-r from-gray-50 to-gray-100/50 border-b ${COLOR_SCHEME.border.light}`}>
                          <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Member</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Role</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Last Active</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200/50">
                          {filteredMembers.map((member) => (
                            <tr key={member.id} className="hover:bg-gray-50/50 transition">
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  {member.avatar ? (
                                    <img 
                                      src={member.avatar} 
                                      className="w-11 h-11 rounded-xl mr-3 border-2 border-white shadow-sm" 
                                      alt={member.name} 
                                    />
                                  ) : (
                                    <div className={`w-11 h-11 bg-gradient-to-br ${member.avatarColor} rounded-xl mr-3 flex items-center justify-center border-2 border-white shadow-sm`}>
                                      <span className="font-semibold text-white text-sm">
                                        {member.name?.charAt(0).toUpperCase()}
                                      </span>
                                    </div>
                                  )}
                                  <div>
                                    <p className="font-semibold text-gray-900">{member.name}</p>
                                    <p className="text-sm text-gray-500">{member.email}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <span className={`inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold ${member.roleColor} shadow-sm`}>
                                  <FontAwesomeIcon icon={member.roleIcon} className={`mr-1.5 text-xs ${member.roleIconColor}`} />
                                  {member.role}
                                </span>
                              </td>
                              <td className="px-6 py-4">
                                <span className={`inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold ${member.statusColor} shadow-sm`}>
                                  <div className={`w-2 h-2 ${member.statusDot} rounded-full mr-1.5`}></div>
                                  {member.status}
                                </span>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center text-sm text-gray-600">
                                  <FontAwesomeIcon icon={faClock} className="mr-2 text-gray-400 text-xs" />
                                  {member.lastActiveFormatted}
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <MemberActionsMenu
                                  member={member}
                                  roles={roles}
                                  onUpdateRole={handleUpdateRole}
                                  onDeleteMember={handleDeleteMember}
                                  onResendInvite={member.status === 'Pending' ? () => handleResendInvite(member.id) : null}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    {/* إظهار رسالة إذا لم توجد نتائج بحث */}
                    {filteredMembers.length === 0 && searchQuery && (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <FontAwesomeIcon icon={faSearch} className="text-2xl text-gray-400" />
                        </div>
                        <p className="text-gray-600 font-medium">No matching team members</p>
                        <p className="text-sm text-gray-400 mt-1">Try adjusting your search</p>
                      </div>
                    )}
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
                    {stats.map((stat) => (
                      <div key={stat.id} className={`${COLOR_SCHEME.background.card} rounded-2xl border ${COLOR_SCHEME.border.light} p-6 shadow-sm`}>
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-14 h-14 bg-gradient-to-br ${stat.iconBg} rounded-2xl flex items-center justify-center shadow-md`}>
                            <FontAwesomeIcon icon={stat.icon} className="text-white text-xl" />
                          </div>
                          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                            stat.trend?.startsWith('+') 
                              ? 'bg-emerald-100 text-emerald-700'
                              : 'bg-rose-100 text-rose-700'
                          }`}>
                            {stat.trend}
                          </span>
                        </div>
                        <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                        <p className="text-sm text-gray-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Pending Invites Section */}
              {pendingInvites.length > 0 && (
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">Pending Invitations</h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-sm font-medium rounded-full">
                      {pendingInvites.length} waiting
                    </span>
                  </div>
                  <div className="bg-gradient-to-r from-amber-50/50 to-orange-50/50 border border-amber-200 rounded-2xl p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-amber-100/30">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-amber-800 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-amber-800 uppercase tracking-wider">Role</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-amber-800 uppercase tracking-wider">Invited</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-amber-800 uppercase tracking-wider">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pendingInvites.map((invite) => (
                            <tr key={invite.id} className="border-b border-amber-200/30 last:border-0">
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  <div className="w-10 h-10 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl flex items-center justify-center mr-3">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-amber-500" />
                                  </div>
                                  <div>
                                    <p className="font-medium text-amber-900">{invite.email}</p>
                                    <p className="text-sm text-amber-700">Awaiting acceptance</p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <span className={`inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold ${
                                  ROLE_CONFIG[invite.role]?.color || 'bg-gray-100 text-gray-700'
                                }`}>
                                  {invite.role}
                                </span>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center text-sm text-amber-700">
                                  <FontAwesomeIcon icon={faClock} className="mr-2 text-amber-500" />
                                  {formatDate(invite.invitedAt)}
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <button
                                  onClick={() => handleResendInvite(invite.id)}
                                  className="text-sm font-medium text-amber-700 hover:text-amber-800 transition px-3 py-1.5 hover:bg-amber-100 rounded-lg"
                                >
                                  Resend Invite
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Recent Activity */}
          {activeTab === 'activity-logs' && (
            <div className={`${COLOR_SCHEME.background.card} rounded-2xl border ${COLOR_SCHEME.border.light} p-6 shadow-sm`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Activity Timeline</h3>
                <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                  View All Activity
                </button>
              </div>
              {recentActivities.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FontAwesomeIcon icon={faClock} className="text-2xl text-gray-400" />
                  </div>
                  <p className="text-gray-600 font-medium">No recent activity</p>
                  <p className="text-sm text-gray-400 mt-1">Team activity will appear here</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start">
                      <div className={`w-12 h-12 ${activity.iconBg} rounded-2xl flex items-center justify-center mr-4 flex-shrink-0`}>
                        <FontAwesomeIcon icon={activity.icon} className={activity.iconColor} />
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-sm text-gray-900">{activity.title || activity.description}</p>
                        <p className="text-xs text-gray-500 mt-1.5 flex items-center">
                          <FontAwesomeIcon icon={faClock} className="mr-1.5 text-gray-400" />
                          {activity.timeFormatted}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Roles & Permissions Tab */}
          {activeTab === 'roles-permissions' && (
            <div className={`${COLOR_SCHEME.background.card} rounded-2xl border ${COLOR_SCHEME.border.light} p-6 shadow-sm`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Team Roles & Permissions</h3>
                <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                  Manage Permissions
                </button>
              </div>
              {roles.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-2xl text-gray-400" />
                  </div>
                  <p className="text-gray-600 font-medium">No roles configured</p>
                  <p className="text-sm text-gray-400 mt-1">Configure roles to manage permissions</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {roles.map((role) => (
                    <div key={role.id} className={`border ${COLOR_SCHEME.border.light} rounded-2xl p-6 hover:border-indigo-300 transition`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold ${
                          ROLE_CONFIG[role.name]?.color || 'bg-gray-100 text-gray-700'
                        }`}>
                          <FontAwesomeIcon 
                            icon={getIconFromString(ROLE_CONFIG[role.name]?.icon || 'faUsers')} 
                            className={`mr-1.5 text-xs ${ROLE_CONFIG[role.name]?.iconColor || 'text-gray-600'}`} 
                          />
                          {role.name}
                        </span>
                        <span className="text-sm font-medium text-gray-600">
                          {role.memberCount || 0} members
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-3">Permissions</h4>
                      <ul className="space-y-2.5">
                        {(role.permissions || []).map((permission, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <div className="w-5 h-5 bg-gradient-to-r from-emerald-100 to-green-100 rounded-lg flex items-center justify-center mr-3">
                              <FontAwesomeIcon icon={faCheck} className="text-emerald-500 text-xs" />
                            </div>
                            {permission}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition hover:shadow-indigo-500/30">
          <FontAwesomeIcon icon={faComment} className="text-xl" />
        </button>
      </div>

      {/* Invite Member Modal */}
      {showInviteModal && (
        <InviteMemberModal
          isOpen={showInviteModal}
          onClose={() => setShowInviteModal(false)}
          onSubmit={handleInviteMember}
          roles={roles}
        />
      )}
    </div>
  )
}