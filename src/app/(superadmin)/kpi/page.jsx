'use client'

import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCrown,
  faChartLine,
  faUsers,
  faCreditCard,
  faRobot,
  faComments,
  faChartPie,
  faCog,
  faShieldHalved,
  faPlug,
  faBell,
  faEllipsisVertical,
  faLanguage,
  faChevronDown,
  faQuestionCircle,
  faCalendarDays,
  faUsers as faUsersSolid,
  faCheckCircle,
  faGaugeHigh,
  faDollarSign,
  faCommentDots,
  faPaperPlane,
  faBrain,
  faServer,
  faDatabase,
  faTriangleExclamation,
  faRefresh,
  faExclamationTriangle,
  faArrowUp,
  faArrowDown
} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useKpiData, useUserGrowth, useMetrics, useRevenueAnalysis } from '@/hooks/useKpiData'
import { formatNumber, formatCurrency } from '@/utils/formatters'
import { showAlert } from '@/utils/sweetAlert'

export default function KPIAnalyticsPage() {
  const {
    overview,
    loading: kpiLoading,
    error: kpiError,
    refreshData,
    formattedData
  } = useKpiData();

  const {
    data: userGrowthData,
    loading: userGrowthLoading,
    error: userGrowthError
  } = useUserGrowth('weekly');

  const {
    data: subscriptionMetrics,
    loading: subscriptionLoading,
    error: subscriptionError
  } = useMetrics('subscription');

  const {
    data: revenueData,
    loading: revenueLoading,
    error: revenueError
  } = useRevenueAnalysis();

  const [refreshLoading, setRefreshLoading] = useState(false);

  const handleRefresh = async () => {
    setRefreshLoading(true);
    try {
      await refreshData();
      showAlert.success('Data refreshed successfully');
    } catch (error) {
      showAlert.error('Failed to refresh data');
    } finally {
      setRefreshLoading(false);
    }
  };

  // Loading state
  if (kpiLoading) {
    return (
      <div className="flex h-screen bg-gray-50 items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#6366f1] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading KPI Analytics...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (kpiError) {
    return (
      <div className="flex h-screen bg-gray-50 items-center justify-center">
        <div className="text-center">
          <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500 text-4xl mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Error Loading Data</h3>
          <p className="text-gray-600 mb-4">{kpiError}</p>
          <div className="text-left text-sm text-gray-600 mb-6 bg-gray-50 p-4 rounded-lg max-w-md mx-auto">
            <p className="mb-2">API Endpoints required:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>GET /api/super-admin/KPI/overview</li>
              <li>GET /api/super-admin/KPI/metrics</li>
              <li>GET /api/super-admin/KPI/revenue-analysis</li>
              <li>GET /api/super-admin/KPI/user-growth</li>
            </ul>
          </div>
          <button
            onClick={refreshData}
            className="px-4 py-2 bg-[#6366f1] text-white rounded-lg hover:bg-[#4f46e5] transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-[#1e293b] to-gray-900 text-white flex flex-col">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-lg flex items-center justify-center">
              <FontAwesomeIcon icon={faCrown} className="text-white text-lg" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Super Admin</h1>
              <p className="text-xs text-gray-400">System Control</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-1">
            <a href="/super-dashboard" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
              <FontAwesomeIcon icon={faChartLine} className="mr-3" />
              <span>Overview</span>
            </a>
            <a href="/user-management" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
              <FontAwesomeIcon icon={faUsers} className="mr-3" />
              <span>All Subscribers</span>
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
              <FontAwesomeIcon icon={faCreditCard} className="mr-3" />
              <span>Billing & Revenue</span>
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
              <FontAwesomeIcon icon={faRobot} className="mr-3" />
              <span>System Bots</span>
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
              <FontAwesomeIcon icon={faComments} className="mr-3" />
              <span>All Conversations</span>
            </a>
            <a href="kpi" className="flex items-center px-4 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-lg text-white shadow-lg">
              <FontAwesomeIcon icon={faChartPie} className="mr-3" />
              <span className="font-medium">Analytics</span>
            </a>
          </div>
          
          <div className="mt-8">
            <p className="text-xs font-semibold text-gray-500 uppercase px-4 mb-2">System Management</p>
            <div className="space-y-1">
              <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
                <FontAwesomeIcon icon={faCog} className="mr-3" />
                <span>System Settings</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
                <FontAwesomeIcon icon={faShieldHalved} className="mr-3" />
                <span>Security & Logs</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
                <FontAwesomeIcon icon={faPlug} className="mr-3" />
                <span>Integrations</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
                <FontAwesomeIcon icon={faBell} className="mr-3" />
                <span>Notifications</span>
              </a>
            </div>
          </div>
        </nav>
        
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center space-x-3 px-4 py-3 bg-gray-800 rounded-lg">
            <img 
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg" 
              alt="Admin" 
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <p className="font-medium text-sm">John Mitchell</p>
              <p className="text-xs text-gray-400">System Admin</p>
            </div>
            <button className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-8 py-4 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">System KPI Analytics</h2>
              <p className="text-sm text-gray-500 mt-1">Real-time performance metrics and operational insights</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCalendarDays} />
                  <span>Last 30 Days</span>
                  <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
                </button>
              </div>
              
              <button
                onClick={handleRefresh}
                disabled={refreshLoading}
                className="px-4 py-2 bg-[#6366f1] text-white rounded-lg hover:bg-[#4f46e5] transition flex items-center space-x-2 disabled:opacity-50"
              >
                <FontAwesomeIcon icon={faRefresh} className={refreshLoading ? 'animate-spin' : ''} />
                <span>{refreshLoading ? 'Refreshing...' : 'Refresh Data'}</span>
              </button>
              
              <div className="relative">
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition flex items-center space-x-2">
                  <FontAwesomeIcon icon={faLanguage} />
                  <span>EN</span>
                  <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
                </button>
              </div>
              <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition">
                <FontAwesomeIcon icon={faBell} className="text-xl" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-xl" />
              </button>
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* Main KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Total Users Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faUsersSolid} className="text-white text-xl" />
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  overview?.userGrowthRate > 0 ? 'bg-green-100 text-green-700' : 
                  overview?.userGrowthRate < 0 ? 'bg-red-100 text-red-700' : 
                  'bg-gray-100 text-gray-700'
                }`}>
                  {formattedData.userGrowthRate}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">
                {formattedData.totalUsers}
              </h3>
              <p className="text-sm text-gray-500 mb-2">Total Users</p>
              <div className="flex items-center text-xs text-gray-400">
                {overview?.userGrowthRate > 0 ? (
                  <>
                    <FontAwesomeIcon icon={faArrowUp} className="text-green-500 mr-1" />
                    <span>{formattedData.userComparison}</span>
                  </>
                ) : overview?.userGrowthRate < 0 ? (
                  <>
                    <FontAwesomeIcon icon={faArrowDown} className="text-red-500 mr-1" />
                    <span>{formattedData.userComparison}</span>
                  </>
                ) : (
                  <span>{formattedData.userComparison}</span>
                )}
              </div>
            </div>

            {/* Active Subscriptions Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-white text-xl" />
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  overview?.subscriptionGrowthRate > 0 ? 'bg-green-100 text-green-700' : 
                  overview?.subscriptionGrowthRate < 0 ? 'bg-red-100 text-red-700' : 
                  'bg-gray-100 text-gray-700'
                }`}>
                  {formattedData.subscriptionGrowthRate}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">
                {formattedData.activeSubscriptions}
              </h3>
              <p className="text-sm text-gray-500 mb-2">Active Subscriptions</p>
              <div className="flex items-center text-xs text-gray-400">
                {overview?.subscriptionGrowthRate > 0 ? (
                  <>
                    <FontAwesomeIcon icon={faArrowUp} className="text-green-500 mr-1" />
                    <span>{formattedData.subscriptionComparison}</span>
                  </>
                ) : overview?.subscriptionGrowthRate < 0 ? (
                  <>
                    <FontAwesomeIcon icon={faArrowDown} className="text-red-500 mr-1" />
                    <span>{formattedData.subscriptionComparison}</span>
                  </>
                ) : (
                  <span>{formattedData.subscriptionComparison}</span>
                )}
              </div>
            </div>

            {/* Avg Response Time Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faGaugeHigh} className="text-white text-xl" />
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  overview?.responseTimeImprovement < 0 ? 'bg-green-100 text-green-700' : 
                  overview?.responseTimeImprovement > 0 ? 'bg-red-100 text-red-700' : 
                  'bg-gray-100 text-gray-700'
                }`}>
                  {formattedData.responseTimeImprovement}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">
                {formattedData.avgResponseTime}
              </h3>
              <p className="text-sm text-gray-500 mb-2">Avg Response Time</p>
              <div className="flex items-center text-xs text-gray-400">
                {overview?.responseTimeImprovement < 0 ? (
                  <>
                    <FontAwesomeIcon icon={faArrowDown} className="text-green-500 mr-1" />
                    <span>Improved performance</span>
                  </>
                ) : overview?.responseTimeImprovement > 0 ? (
                  <>
                    <FontAwesomeIcon icon={faArrowUp} className="text-red-500 mr-1" />
                    <span>Performance degraded</span>
                  </>
                ) : (
                  <span>No change</span>
                )}
              </div>
            </div>

            {/* Total Revenue Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ec4899] to-pink-600 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faDollarSign} className="text-white text-xl" />
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  overview?.revenueGrowthRate > 0 ? 'bg-green-100 text-green-700' : 
                  overview?.revenueGrowthRate < 0 ? 'bg-red-100 text-red-700' : 
                  'bg-gray-100 text-gray-700'
                }`}>
                  {formattedData.revenueGrowthRate}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">
                {formattedData.totalRevenue}
              </h3>
              <p className="text-sm text-gray-500 mb-2">Total Revenue</p>
              <div className="flex items-center text-xs text-gray-400">
                {overview?.revenueGrowthRate > 0 ? (
                  <>
                    <FontAwesomeIcon icon={faArrowUp} className="text-green-500 mr-1" />
                    <span>{formattedData.revenueComparison}</span>
                  </>
                ) : overview?.revenueGrowthRate < 0 ? (
                  <>
                    <FontAwesomeIcon icon={faArrowDown} className="text-red-500 mr-1" />
                    <span>{formattedData.revenueComparison}</span>
                  </>
                ) : (
                  <span>{formattedData.revenueComparison}</span>
                )}
              </div>
            </div>
          </div>

          {/* Secondary KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Total Comments Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faCommentDots} className="text-blue-600 text-xl" />
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  overview?.commentsGrowthRate > 0 ? 'bg-green-100 text-green-700' : 
                  overview?.commentsGrowthRate < 0 ? 'bg-red-100 text-red-700' : 
                  'bg-blue-100 text-blue-700'
                }`}>
                  {formattedData.commentsGrowthRate}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">
                {formattedData.totalComments}
              </h3>
              <p className="text-sm text-gray-500 mb-2">Total Comments</p>
              <div className="flex items-center text-xs text-gray-400">
                {overview?.commentsGrowthRate > 0 ? (
                  <>
                    <FontAwesomeIcon icon={faArrowUp} className="text-green-500 mr-1" />
                    <span>Growth from last period</span>
                  </>
                ) : overview?.commentsGrowthRate < 0 ? (
                  <>
                    <FontAwesomeIcon icon={faArrowDown} className="text-red-500 mr-1" />
                    <span>Decline from last period</span>
                  </>
                ) : (
                  <span>No change</span>
                )}
              </div>
            </div>

            {/* Messages Sent Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faPaperPlane} className="text-purple-600 text-xl" />
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  overview?.messagesGrowthRate > 0 ? 'bg-green-100 text-green-700' : 
                  overview?.messagesGrowthRate < 0 ? 'bg-red-100 text-red-700' : 
                  'bg-purple-100 text-purple-700'
                }`}>
                  {formattedData.messagesGrowthRate}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">
                {formattedData.messagesSent}
              </h3>
              <p className="text-sm text-gray-500 mb-2">Messages Sent</p>
              <div className="flex items-center text-xs text-gray-400">
                {overview?.messagesGrowthRate > 0 ? (
                  <>
                    <FontAwesomeIcon icon={faArrowUp} className="text-green-500 mr-1" />
                    <span>Growth from last period</span>
                  </>
                ) : overview?.messagesGrowthRate < 0 ? (
                  <>
                    <FontAwesomeIcon icon={faArrowDown} className="text-red-500 mr-1" />
                    <span>Decline from last period</span>
                  </>
                ) : (
                  <span>No change</span>
                )}
              </div>
            </div>

            {/* UX Pilot API Calls Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faBrain} className="text-teal-600 text-xl" />
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  overview?.uxPilotGrowthRate > 0 ? 'bg-green-100 text-green-700' : 
                  overview?.uxPilotGrowthRate < 0 ? 'bg-red-100 text-red-700' : 
                  'bg-teal-100 text-teal-700'
                }`}>
                  {formattedData.uxPilotGrowthRate}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">
                {formattedData.uxPilotApiCalls}
              </h3>
              <p className="text-sm text-gray-500 mb-2">UX Pilot API Calls</p>
              <div className="flex items-center text-xs text-gray-400">
                {overview?.uxPilotGrowthRate > 0 ? (
                  <>
                    <FontAwesomeIcon icon={faArrowUp} className="text-green-500 mr-1" />
                    <span>Growth from last period</span>
                  </>
                ) : overview?.uxPilotGrowthRate < 0 ? (
                  <>
                    <FontAwesomeIcon icon={faArrowDown} className="text-red-500 mr-1" />
                    <span>Decline from last period</span>
                  </>
                ) : (
                  <span>No change</span>
                )}
              </div>
            </div>

            {/* WhatsApp API Calls Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-green-600 text-xl" />
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  overview?.whatsappGrowthRate > 0 ? 'bg-green-100 text-green-700' : 
                  overview?.whatsappGrowthRate < 0 ? 'bg-red-100 text-red-700' : 
                  'bg-green-100 text-green-700'
                }`}>
                  {formattedData.whatsappGrowthRate}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">
                {formattedData.whatsappApiCalls}
              </h3>
              <p className="text-sm text-gray-500 mb-2">WhatsApp API Calls</p>
              <div className="flex items-center text-xs text-gray-400">
                {overview?.whatsappGrowthRate > 0 ? (
                  <>
                    <FontAwesomeIcon icon={faArrowUp} className="text-green-500 mr-1" />
                    <span>Growth from last period</span>
                  </>
                ) : overview?.whatsappGrowthRate < 0 ? (
                  <>
                    <FontAwesomeIcon icon={faArrowDown} className="text-red-500 mr-1" />
                    <span>Decline from last period</span>
                  </>
                ) : (
                  <span>No change</span>
                )}
              </div>
            </div>
          </div>

          {/* API Status Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* API Endpoints Status */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">API Endpoints Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">KPI Overview</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    !kpiError ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {!kpiError ? 'Connected' : 'Error'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">User Growth</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    !userGrowthError ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {!userGrowthError ? 'Connected' : 'Error'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Revenue Analysis</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    !revenueError ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {!revenueError ? 'Connected' : 'Error'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Metrics</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    !subscriptionError ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {!subscriptionError ? 'Connected' : 'Error'}
                  </span>
                </div>
              </div>
            </div>

            {/* User Growth Data Table */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">User Growth Data</h3>
                  <p className="text-sm text-gray-500">Weekly user growth statistics</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </div>
              
              {userGrowthLoading ? (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-[#6366f1] border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                    <p className="text-sm text-gray-500">Loading user growth data...</p>
                  </div>
                </div>
              ) : userGrowthError ? (
                <div className="flex items-center justify-center h-64 text-red-500">
                  <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />
                  <span>{userGrowthError}</span>
                </div>
              ) : userGrowthData && userGrowthData.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-sm text-gray-500 border-b">
                        <th className="pb-3">Period</th>
                        <th className="pb-3">Total Users</th>
                        <th className="pb-3">New Users</th>
                        <th className="pb-3">Growth %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userGrowthData.slice(0, 5).map((item, index) => (
                        <tr key={index} className="border-b border-gray-100 last:border-0">
                          <td className="py-3 text-sm">{item.period || item.date || `Week ${index + 1}`}</td>
                          <td className="py-3 text-sm font-medium">{formatNumber(item.users || item.total || item.value)}</td>
                          <td className="py-3 text-sm">{formatNumber(item.newUsers || item.new || 0)}</td>
                          <td className="py-3 text-sm">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              (item.growthRate || 0) > 0 ? 'bg-green-100 text-green-700' :
                              (item.growthRate || 0) < 0 ? 'bg-red-100 text-red-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {formatPercentage(item.growthRate || 0)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="flex items-center justify-center h-64 text-gray-400">
                  <span>No user growth data available</span>
                </div>
              )}
            </div>
          </div>

          {/* Metrics Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Subscription Metrics */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Subscription Metrics</h3>
                  <p className="text-sm text-gray-500">Subscription distribution and status</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </div>
              
              {subscriptionLoading ? (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                    <p className="text-sm text-gray-500">Loading subscription data...</p>
                  </div>
                </div>
              ) : subscriptionError ? (
                <div className="flex items-center justify-center h-64 text-red-500">
                  <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />
                  <span>{subscriptionError}</span>
                </div>
              ) : subscriptionMetrics ? (
                <div className="space-y-4">
                  {Array.isArray(subscriptionMetrics) ? (
                    subscriptionMetrics.slice(0, 5).map((metric, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full mr-2" style={{
                            backgroundColor: index === 0 ? '#10b981' :
                                            index === 1 ? '#fbbf24' :
                                            index === 2 ? '#f97316' :
                                            index === 3 ? '#ef4444' : '#6366f1'
                          }}></div>
                          <span className="text-sm text-gray-600">{metric.label || metric.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">
                          {formatNumber(metric.value || metric.count)}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="text-center text-gray-400 py-8">
                      <p>Subscription data not in expected format</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center justify-center h-64 text-gray-400">
                  <span>No subscription data available</span>
                </div>
              )}
            </div>

            {/* Revenue Analysis */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Revenue Analysis</h3>
                  <p className="text-sm text-gray-500">Recent revenue and cost breakdown</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </div>
              
              {revenueLoading ? (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                    <p className="text-sm text-gray-500">Loading revenue data...</p>
                  </div>
                </div>
              ) : revenueError ? (
                <div className="flex items-center justify-center h-64 text-red-500">
                  <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />
                  <span>{revenueError}</span>
                </div>
              ) : revenueData && revenueData.length > 0 ? (
                <div className="space-y-4">
                  {revenueData.slice(0, 3).map((item, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900">
                          {item.date || item.period || `Period ${index + 1}`}
                        </span>
                        <span className="text-sm font-semibold text-gray-900">
                          {formatCurrency(item.revenue || item.total)}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                        <div>Cost: {formatCurrency(item.cost || 0)}</div>
                        <div>Profit: {formatCurrency(item.profit || ((item.revenue || 0) - (item.cost || 0)))}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center h-64 text-gray-400">
                  <span>No revenue data available</span>
                </div>
              )}
            </div>
          </div>

          {/* System Status */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">System Status</h3>
                <p className="text-sm text-gray-500">Current system health and API connectivity</p>
              </div>
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                !kpiError ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {!kpiError ? 'All Systems Operational' : 'API Connection Issues'}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600">API Overview</span>
                  <FontAwesomeIcon icon={faServer} className={!kpiError ? 'text-green-500' : 'text-red-500'} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {!kpiError ? 'Connected' : 'Error'}
                </div>
                <div className="text-xs text-gray-500">Last checked: Just now</div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600">User Growth API</span>
                  <FontAwesomeIcon icon={faUsers} className={!userGrowthError ? 'text-green-500' : 'text-red-500'} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {!userGrowthError ? 'Connected' : 'Error'}
                </div>
                <div className="text-xs text-gray-500">Data points: {userGrowthData?.length || 0}</div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600">Metrics API</span>
                  <FontAwesomeIcon icon={faChartLine} className={!subscriptionError ? 'text-green-500' : 'text-red-500'} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {!subscriptionError ? 'Connected' : 'Error'}
                </div>
                <div className="text-xs text-gray-500">Available metrics: {subscriptionMetrics?.length || 0}</div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600">Revenue API</span>
                  <FontAwesomeIcon icon={faDollarSign} className={!revenueError ? 'text-green-500' : 'text-red-500'} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {!revenueError ? 'Connected' : 'Error'}
                </div>
                <div className="text-xs text-gray-500">Periods: {revenueData?.length || 0}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}