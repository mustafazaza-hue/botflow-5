'use client'

import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGlobe, faBell, faQuestionCircle, faTimes,
  faFilter, faSync, faInfoCircle,
  faArrowRight, faPlus, faExclamationTriangle,
  faCheckCircle, faSpinner
} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Sidebar from '@/components/Sidebar'
import PageCard from '@/components/PageCard'
import ConnectPageModal from '@/components/ConnectPageModal'
import ActivityLogs from '@/components/ActivityLogs'
import ConnectionStatus from '@/components/ConnectionStatus'
import usePages from '@/hooks/usePages'
import { showAlert } from '@/utils/sweetAlert';


export default function PagesIntegrationPage() {
  const [showConnectModal, setShowConnectModal] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState('')
  const [filters, setFilters] = useState({
    status: 'all',
    platform: 'all'
  })

  const {
    pages,
    activityLogs,
    connectionStatus,
    platforms,
    loading,
    error,
    connectNewPage,
    updatePage,
    deletePage,
    syncPage,
    reconnectPage,
    fetchPages,
    fetchActivityLogs,
    refreshAllData
  } = usePages()

  // تصفية الصفحات بناءً على الفلاتر
  const filteredPages = pages.filter(page => {
    if (filters.status !== 'all' && page.status !== filters.status) return false
    if (filters.platform !== 'all' && page.platform !== filters.platform) return false
    return true
  })

  // حالة التحميل العامة
  const isLoading = loading.pages || loading.logs || loading.status

  // معالجة الأخطاء
  useEffect(() => {
    if (error && !isLoading) {
      if (error.includes('401') || error.includes('Unauthorized')) {
        showAlert.error(
          'Session Expired',
          'Your session has expired. Please login again.'
        ).then(() => {
          window.location.href = '/customer-login'
        })
      }
    }
  }, [error, isLoading])

  // إعادة تحميل البيانات يدويًا
  const handleRefreshAll = async () => {
    try {
      await refreshAllData()
      showAlert.success('Refreshed', 'All data has been refreshed')
    } catch (error) {
      console.error('Refresh failed:', error)
    }
  }

  // فتح مودال الربط
  const handleOpenConnectModal = (platform) => {
    setSelectedPlatform(platform)
    setShowConnectModal(true)
  }

  // معالجة الربط الناجح
  const handleConnectSuccess = async (formData) => {
    try {
      await connectNewPage(formData)
      setShowConnectModal(false)
      setSelectedPlatform('')
    } catch (error) {
      console.error('Connection failed:', error)
    }
  }

  // تحديث الفلاتر
  const handleFilterChange = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }))
  }

  // الحصول على إحصائيات الاتصال
  const getConnectionStats = () => {
    const total = pages.length
    const healthy = pages.filter(p => p.connectionStatus === 'Healthy').length
    const warning = pages.filter(p => p.status === 'warning').length
    const error = pages.filter(p => p.status === 'error').length

    return { total, healthy, warning, error }
  }

  const stats = getConnectionStats()

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Component */}
      <Sidebar activeItem="pages" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Pages Integration</h1>
                <p className="text-sm text-gray-500 mt-1">
                  {isLoading ? 'Loading pages...' : `Manage your connected social media pages (${stats.total} total)`}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-lg transition flex items-center">
                  <FontAwesomeIcon icon={faGlobe} className="mr-2" />
                  <span>EN</span>
                </button>
                <button className="text-gray-600 hover:text-gray-800 p-2 rounded-lg transition relative">
                  <FontAwesomeIcon icon={faBell} className="text-xl" />
                  {activityLogs.filter(log => log.type === 'warning' || log.type === 'error').length > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                      {activityLogs.filter(log => log.type === 'warning' || log.type === 'error').length}
                    </span>
                  )}
                </button>
                <button className="text-gray-600 hover:text-gray-800 p-2 rounded-lg transition">
                  <FontAwesomeIcon icon={faQuestionCircle} className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Connection Status Banner */}
          <ConnectionStatus
            stats={stats}
            lastChecked={connectionStatus.lastChecked}
            isLoading={loading.status}
          />

          {/* Error Display */}
          {error && !isLoading && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
              <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500 text-xl mr-3 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-semibold text-red-900 mb-1">Connection Error</h3>
                <p className="text-sm text-red-700">{error}</p>
                <div className="mt-2 flex space-x-3">
                  <button
                    onClick={fetchPages}
                    className="text-sm bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded"
                  >
                    Retry
                  </button>
                  <button
                    onClick={() => window.location.reload()}
                    className="text-sm text-red-600 hover:text-red-800"
                  >
                    Reload Page
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Quick Actions Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Quick Actions</h2>
              <button
                onClick={handleRefreshAll}
                disabled={isLoading}
                className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FontAwesomeIcon 
                  icon={isLoading ? faSpinner : faSync} 
                  className={`mr-2 ${isLoading ? 'animate-spin' : ''}`} 
                />
                Refresh All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Connect Facebook */}
              <button
                onClick={() => handleOpenConnectModal('facebook')}
                disabled={isLoading}
                className="bg-white border-2 border-dashed border-gray-300 hover:border-blue-500 p-6 rounded-xl transition-all hover:shadow-md group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-100 transition">
                    <FontAwesomeIcon 
                      icon={faFacebook} 
                      className="text-blue-500 text-2xl group-hover:text-blue-600" 
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 mb-1">Connect Facebook</h3>
                    <p className="text-sm text-gray-500">Link your Facebook business page</p>
                  </div>
                </div>
              </button>

              {/* Connect Instagram */}
              <button
                onClick={() => handleOpenConnectModal('instagram')}
                disabled={isLoading}
                className="bg-white border-2 border-dashed border-gray-300 hover:border-pink-500 p-6 rounded-xl transition-all hover:shadow-md group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-pink-50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-pink-100 transition">
                    <FontAwesomeIcon 
                      icon={faInstagram} 
                      className="text-pink-500 text-2xl group-hover:text-pink-600" 
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 mb-1">Connect Instagram</h3>
                    <p className="text-sm text-gray-500">Link your Instagram business account</p>
                  </div>
                </div>
              </button>

              {/* Bulk Actions */}
              <button
                onClick={handleRefreshAll}
                disabled={isLoading || pages.length === 0}
                className="bg-white border border-gray-200 hover:border-gray-300 p-6 rounded-xl transition-all hover:shadow-md group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-gray-100 transition">
                    <FontAwesomeIcon 
                      icon={faSync} 
                      className="text-gray-500 text-2xl group-hover:text-gray-600" 
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 mb-1">Sync All Pages</h3>
                    <p className="text-sm text-gray-500">Refresh data for all connected pages</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Connected Pages Section */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Connected Pages ({filteredPages.length})
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {stats.healthy} healthy • {stats.warning} needs attention • {stats.error} disconnected
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                {/* Platform Filter */}
                <div className="relative">
                  <select
                    value={filters.platform}
                    onChange={(e) => handleFilterChange('platform', e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="all">All Platforms</option>
                    <option value="facebook">Facebook</option>
                    <option value="instagram">Instagram</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <FontAwesomeIcon icon={faFilter} className="text-sm" />
                  </div>
                </div>

                {/* Status Filter */}
                <div className="relative">
                  <select
                    value={filters.status}
                    onChange={(e) => handleFilterChange('status', e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="warning">Warning</option>
                    <option value="error">Error</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <FontAwesomeIcon icon={faFilter} className="text-sm" />
                  </div>
                </div>
              </div>
            </div>

            {/* Loading State for Pages */}
            {loading.pages ? (
              <div className="flex flex-col items-center justify-center py-12 bg-white rounded-xl border border-gray-200">
                <FontAwesomeIcon icon={faSpinner} className="text-3xl text-blue-500 animate-spin mb-4" />
                <p className="text-gray-600">Loading pages...</p>
              </div>
            ) : filteredPages.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl border-2 border-dashed border-gray-300">
                <div className="text-gray-400 text-5xl mb-4">
                  <FontAwesomeIcon icon={faPlus} />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No pages found</h3>
                <p className="text-gray-500 mb-6">
                  {pages.length === 0 
                    ? "You haven't connected any pages yet" 
                    : "No pages match your filters"}
                </p>
                <button
                  onClick={() => handleOpenConnectModal('facebook')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
                >
                  Connect Your First Page
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPages.map((page) => (
                  <PageCard
                    key={page.id}
                    page={page}
                    onUpdate={updatePage}
                    onDelete={deletePage}
                    onSync={syncPage}
                    onReconnect={reconnectPage}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Activity Logs Section */}
          <ActivityLogs
            logs={activityLogs}
            isLoading={loading.logs}
            onRefresh={fetchActivityLogs}
          />
        </main>
      </div>

      {/* Connect Page Modal */}
      {showConnectModal && (
        <ConnectPageModal
          platform={selectedPlatform}
          onConnect={handleConnectSuccess}
          onClose={() => {
            setShowConnectModal(false)
            setSelectedPlatform('')
          }}
          isLoading={loading.pages}
        />
      )}
    </div>
  )
}