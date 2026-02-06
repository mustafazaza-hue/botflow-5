'use client'

import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch, faGlobe, faBell, faCog,
  faPlus, faFilter, faSort,
  faList, 
  faChevronLeft, faChevronRight, faBell as faBellRegular,
  faExclamationTriangle, faSpinner
} from '@fortawesome/free-solid-svg-icons'
import Sidebar from '@/components/Sidebar'
import BotCard from '@/components/BotCard'
import BotFormModal from '@/components/BotFormModal'
import BotStats from '@/components/BotStats'
import useBots from '@/hooks/useBots'
import { showAlert } from '@/utils/sweetAlert'

export default function BotsPage() {
  const [activeTab, setActiveTab] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [selectedBot, setSelectedBot] = useState(null)
  const [isRefreshing, setIsRefreshing] = useState(false)

  // استخدام hook البوتات
  const {
    bots,
    botStats,
    loading,
    error,
    fetchBots,
    fetchBotStats,
    createBot,
    updateBot,
    deleteBot,
    updateBotStatus,
    searchBots,
    duplicateBot,
    refreshAllData,
  } = useBots()

  // التصفية المحلية للبوتات
  const filteredBots = bots.filter(bot => {
    if (activeTab !== 'all' && bot.status !== activeTab) return false
    if (searchQuery && !bot.name.toLowerCase().includes(searchQuery.toLowerCase())) return false
    return true
  })

  // معالجة إنشاء بوت
  const handleCreateBot = async (botData) => {
    try {
      await createBot(botData)
      setShowCreateModal(false)
      setSelectedBot(null)
    } catch (error) {
      console.error('Create bot failed:', error)
    }
  }

  // معالجة تحديث بوت
  const handleUpdateBot = async (botData) => {
    if (!selectedBot) return
    
    try {
      await updateBot(selectedBot.id, botData)
      setShowCreateModal(false)
      setSelectedBot(null)
    } catch (error) {
      console.error('Update bot failed:', error)
    }
  }

  // معالجة حذف بوت
  const handleDeleteBot = async (id) => {
    try {
      await deleteBot(id)
    } catch (error) {
      console.error('Delete bot failed:', error)
    }
  }

  // معالجة تغيير حالة البوت
  const handleStatusChange = async (id, status) => {
    try {
      await updateBotStatus(id, status)
    } catch (error) {
      console.error('Status change failed:', error)
    }
  }

  // معالجة نسخ بوت
  const handleDuplicateBot = async (id) => {
    try {
      await duplicateBot(id)
    } catch (error) {
      console.error('Duplicate bot failed:', error)
    }
  }

  // فتح مودال التعديل
  const handleEditBot = (bot) => {
    setSelectedBot(bot)
    setShowCreateModal(true)
  }

  // فتح إحصائيات البوت
  const handleBotStats = (bot) => {
    console.log('View stats for bot:', bot)
    // يمكنك التوجيه لصفحة إحصائيات البوت هنا
    showAlert.info('Bot Stats', `Stats for ${bot.name} would open here.`)
  }

  // معالجة البحث
  const handleSearch = async (e) => {
    const query = e.target.value
    setSearchQuery(query)
    
    if (query.trim()) {
      await searchBots(query)
    } else {
      await fetchBots()
    }
  }

  // تحديث التبويبات بناءً على حالة التحميل
  const tabs = [
    { id: 'all', name: 'All Bots', count: bots.length },
    { id: 'active', name: 'Active', count: bots.filter(b => b.status === 'active').length },
    { id: 'draft', name: 'Draft', count: bots.filter(b => b.status === 'draft').length },
    { id: 'paused', name: 'Paused', count: bots.filter(b => b.status === 'paused').length },
  ]

  // إعادة تحميل البيانات يدوياً
  const handleRefresh = async () => {
    setIsRefreshing(true)
    try {
      await refreshAllData()
      showAlert.success('Refreshed', 'Data has been refreshed')
    } catch (error) {
      console.error('Refresh failed:', error)
    } finally {
      setIsRefreshing(false)
    }
  }

  // تنظيف البحث
  const handleClearSearch = () => {
    setSearchQuery('')
    fetchBots()
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
        <div className="flex items-center h-16 px-6">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🤖</span>
              </div>
              <span className="text-xl font-bold text-gray-900">BotFlow</span>
            </div>
          </div>
          <div className="flex-grow"></div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search bots..."
                className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchQuery}
                onChange={handleSearch}
                disabled={loading.bots}
              />
              <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3 text-gray-400" />
              {searchQuery && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
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
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white text-sm font-semibold">
              JD
            </div>
          </div>
        </div>
      </nav>

      <div className="flex pt-16">
        {/* Sidebar */}
        <Sidebar activeItem="bots" />

        {/* Main Content */}
        <div className="flex-1 ml-64 p-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-1">Bots Management</h1>
                <p className="text-gray-600">Create, edit, and manage your chatbot automation flows</p>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleRefresh}
                  disabled={loading.bots || isRefreshing}
                  className="flex items-center px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium disabled:opacity-50"
                >
                  <FontAwesomeIcon 
                    icon={isRefreshing ? faSpinner : faFilter} 
                    className={`mr-2 ${isRefreshing ? 'animate-spin' : ''}`} 
                  />
                  Refresh
                </button>
                <button className="flex items-center px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium">
                  <FontAwesomeIcon icon={faSort} className="mr-2" />
                  Sort
                </button>
                <button
                  onClick={() => setShowCreateModal(true)}
                  disabled={loading.action}
                  className="flex items-center px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50"
                >
                  <FontAwesomeIcon icon={faPlus} className="mr-2" />
                  New Bot
                </button>
              </div>
            </div>
          </div>

          {/* Error Display */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
              <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500 text-xl mr-3 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-semibold text-red-900 mb-1">Error</h3>
                <p className="text-sm text-red-700">{error}</p>
                <div className="mt-2 flex space-x-3">
                  <button
                    onClick={handleRefresh}
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

          {/* Stats Section */}
          <BotStats 
            stats={botStats} 
            isLoading={loading.stats || loading.bots}
            showOnlyEssential={true}
          />

          {/* Tabs Section */}
          <div className="bg-white rounded-xl border border-gray-200 mb-6">
            <div className="flex items-center border-b border-gray-200 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  disabled={loading.bots}
                  className={`px-4 py-4 font-medium transition ${
                    activeTab === tab.id
                      ? 'text-indigo-600 border-b-2 border-indigo-600 font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                  } ${loading.bots ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {tab.name}{' '}
                  <span className={`ml-2 text-xs ${
                    activeTab === tab.id 
                      ? 'bg-indigo-100 text-indigo-600' 
                      : 'bg-gray-100 text-gray-600'
                  } px-2 py-0.5 rounded-full`}>
                    {tab.count}
                  </span>
                </button>
              ))}
              <div className="ml-auto flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('list')}
                  disabled={loading.bots}
                  className={`p-2 rounded-lg hover:bg-gray-50 transition ${
                    viewMode === 'list' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-400 hover:text-gray-600'
                  } ${loading.bots ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <FontAwesomeIcon icon={faList} />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  disabled={loading.bots}
                  className={`p-2 rounded-lg hover:bg-gray-50 transition ${
                    viewMode === 'grid' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-400 hover:text-gray-600'
                  } ${loading.bots ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {/* <FontAwesomeIcon icon={faGrid2} /> */}
                </button>
              </div>
            </div>
          </div>

          {/* Bots Grid */}
          {loading.bots ? (
            <div className="grid grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <BotCard key={i} isLoading={true} />
              ))}
            </div>
          ) : filteredBots.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border-2 border-dashed border-gray-300">
              <div className="text-gray-400 text-5xl mb-4">🤖</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {searchQuery ? 'No bots found' : 'No bots available'}
              </h3>
              <p className="text-gray-500 mb-6">
                {searchQuery 
                  ? 'Try a different search term' 
                  : 'Create your first bot to get started'}
              </p>
              <button
                onClick={() => setShowCreateModal(true)}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition"
              >
                {searchQuery ? 'Clear Search' : 'Create Your First Bot'}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-6">
              {filteredBots.map((bot) => (
                <BotCard
                  key={bot.id}
                  bot={bot}
                  onEdit={handleEditBot}
                  onStats={handleBotStats}
                  onDuplicate={handleDuplicateBot}
                  onStatusChange={handleStatusChange}
                  onDelete={handleDeleteBot}
                  isLoading={loading.action}
                />
              ))}

              {/* Create New Bot Card */}
              <div 
                onClick={() => !loading.action && setShowCreateModal(true)}
                className={`bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border-2 border-dashed border-indigo-600 transition cursor-pointer ${
                  loading.action ? 'opacity-50 cursor-not-allowed' : 'hover:border-solid hover:shadow-xl'
                }`}
              >
                <div className="p-6 h-full flex flex-col items-center justify-center text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 transition ${
                    loading.action ? '' : 'group-hover:scale-110'
                  }`}>
                    <FontAwesomeIcon icon={faPlus} className="text-white text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Create New Bot</h3>
                  <p className="text-sm text-gray-600 mb-4">Start building your next automation flow</p>
                  <button 
                    disabled={loading.action}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Pagination */}
          {filteredBots.length > 0 && (
            <div className="flex items-center justify-between mt-8">
              <div className="text-sm text-gray-600">
                Showing <span className="font-semibold">1-{filteredBots.length}</span> of{' '}
                <span className="font-semibold">{bots.length}</span> bots
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold">1</button>
                {bots.length > 6 && (
                  <>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                      2
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                      3
                    </button>
                  </>
                )}
                <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition">
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bot Form Modal */}
      {showCreateModal && (
        <BotFormModal
          bot={selectedBot}
          onSave={selectedBot ? handleUpdateBot : handleCreateBot}
          onClose={() => {
            setShowCreateModal(false)
            setSelectedBot(null)
          }}
          isLoading={loading.action}
        />
      )}
    </div>
  )
}