import { useState, useEffect, useCallback } from 'react';
import pagesAPI from '../api/pagesAPI';

import { showAlert } from '@/utils/sweetAlert';

const usePages = () => {
  const [pages, setPages] = useState([])
  const [activityLogs, setActivityLogs] = useState([])
  const [connectionStatus, setConnectionStatus] = useState({})
  const [platforms, setPlatforms] = useState([])
  const [loading, setLoading] = useState({
    pages: false,
    logs: false,
    status: false,
    platforms: false,
  })
  const [error, setError] = useState(null)

  // دالة مساعدة لتنسيق بيانات الصفحة
  const formatPageData = (page) => ({
    id: page.id,
    name: page.name || 'Unnamed Page',
    platform: page.platform?.toLowerCase() || 'facebook',
    type: page.platform === 'Facebook' ? 'Facebook Page' : 
          page.platform === 'Instagram' ? 'Instagram Business' : 
          page.platform || 'Social Page',
    status: page.isActive ? 'active' : (page.connectionStatus === 'Disconnected' ? 'error' : 'warning'),
    followers: page.followersCount || 0,
    messages: page.messagesCount || 0,
    metric: page.responseRate ? `${Math.round(page.responseRate)}%` : '--',
    metricLabel: 'Response Rate',
    connectionStatus: page.connectionStatus || 'Unknown',
    permissions: page.permissionsStatus || 'Unknown',
    lastSynced: page.lastSynced || null,
    webhookUrl: page.webhookUrl || '',
    botIds: page.botIds || [],
  })

  // تحميل جميع الصفحات
  const fetchPages = useCallback(async () => {
    setLoading(prev => ({ ...prev, pages: true }))
    setError(null)
    
    try {
      console.log('📡 Fetching pages from API...')
      const response = await pagesAPI.getAllPages()
      
      if (response && Array.isArray(response)) {
        const formattedPages = response.map(formatPageData)
        setPages(formattedPages)
        console.log('✅ Pages loaded:', formattedPages.length)
        return formattedPages
      } else {
        console.log('⚠️ No pages data returned')
        setPages([])
        return []
      }
    } catch (err) {
      console.error('❌ Error fetching pages:', err)
      
      let errorMessage = 'Failed to load pages'
      if (err.response?.status === 401) {
        errorMessage = 'Session expired. Please login again.'
      } else if (err.response?.status === 403) {
        errorMessage = 'You do not have permission to view pages'
      } else if (err.message) {
        errorMessage = err.message
      }
      
      setError(errorMessage)
      showAlert.error('Error', errorMessage)
      return []
    } finally {
      setLoading(prev => ({ ...prev, pages: false }))
    }
  }, [])

  // تحميل سجلات النشاط
  const fetchActivityLogs = useCallback(async () => {
    setLoading(prev => ({ ...prev, logs: true }))
    
    try {
      console.log('📡 Fetching activity logs...')
      const response = await pagesAPI.getActivityLogs()
      
      if (response && Array.isArray(response)) {
        setActivityLogs(response)
        console.log('✅ Activity logs loaded:', response.length)
        return response
      }
      return []
    } catch (err) {
      console.error('❌ Error fetching activity logs:', err)
      // لا نعرض تنبيه للأخطاء الثانوية
      return []
    } finally {
      setLoading(prev => ({ ...prev, logs: false }))
    }
  }, [])

  // تحميل حالة الاتصال
  const fetchConnectionStatus = useCallback(async () => {
    setLoading(prev => ({ ...prev, status: true }))
    
    try {
      console.log('📡 Fetching connection status...')
      const response = await pagesAPI.getConnectionStatus()
      
      if (response) {
        setConnectionStatus(response)
        console.log('✅ Connection status loaded')
        return response
      }
      return {}
    } catch (err) {
      console.error('❌ Error fetching connection status:', err)
      return {}
    } finally {
      setLoading(prev => ({ ...prev, status: false }))
    }
  }, [])

  // ربط صفحة جديدة
  const connectNewPage = async (pageData) => {
    showAlert.loading('Connecting page...')
    
    try {
      console.log('🔗 Connecting page:', pageData)
      const response = await pagesAPI.connectPage(pageData)
      
      showAlert.success('Success', 'Page connected successfully!')
      console.log('✅ Page connected:', response)
      
      // إعادة تحميل البيانات
      await Promise.all([
        fetchPages(),
        fetchActivityLogs(),
      ])
      
      return response
    } catch (err) {
      console.error('❌ Error connecting page:', err)
      
      let errorMessage = 'Failed to connect page'
      if (err.response?.status === 400) {
        errorMessage = 'Invalid access token or permissions'
      } else if (err.response?.status === 409) {
        errorMessage = 'This page is already connected'
      } else if (err.message) {
        errorMessage = err.message
      }
      
      showAlert.error('Error', errorMessage)
      throw new Error(errorMessage)
    }
  }

  // تحديث صفحة
  const updatePage = async (id, updateData) => {
    showAlert.loading('Updating page...')
    
    try {
      console.log('✏️ Updating page:', id, updateData)
      const response = await pagesAPI.updatePage(id, updateData)
      
      showAlert.success('Success', 'Page updated successfully!')
      console.log('✅ Page updated:', response)
      
      // تحديث القائمة المحلية
      setPages(prev => prev.map(page => 
        page.id === id ? { ...page, ...updateData } : page
      ))
      
      return response
    } catch (err) {
      console.error('❌ Error updating page:', err)
      showAlert.error('Error', err.message || 'Failed to update page')
      throw err
    }
  }

  // حذف صفحة
  const deletePage = async (id) => {
    const confirm = await showAlert.confirm(
      'Delete Page',
      'Are you sure you want to delete this page? This action cannot be undone.'
    )
    
    if (!confirm.isConfirmed) return
    
    showAlert.loading('Deleting page...')
    
    try {
      console.log('🗑️ Deleting page:', id)
      await pagesAPI.deletePage(id)
      
      showAlert.success('Success', 'Page deleted successfully!')
      console.log('✅ Page deleted')
      
      // تحديث القائمة المحلية
      setPages(prev => prev.filter(page => page.id !== id))
      
      return true
    } catch (err) {
      console.error('❌ Error deleting page:', err)
      showAlert.error('Error', err.message || 'Failed to delete page')
      throw err
    }
  }

  // مزامنة صفحة
  const syncPage = async (id, syncData = {}) => {
    showAlert.loading('Syncing page data...')
    
    try {
      console.log('🔄 Syncing page:', id)
      const response = await pagesAPI.syncPage(id, syncData)
      
      showAlert.success('Success', 'Page synchronized successfully!')
      console.log('✅ Page synced:', response)
      
      // إعادة تحميل البيانات
      await fetchPages()
      
      return response
    } catch (err) {
      console.error('❌ Error syncing page:', err)
      showAlert.error('Error', err.message || 'Failed to sync page')
      throw err
    }
  }

  // إعادة ربط صفحة
  const reconnectPage = async (id) => {
    showAlert.loading('Reconnecting page...')
    
    try {
      console.log('🔗 Reconnecting page:', id)
      const response = await pagesAPI.reconnectPage(id)
      
      showAlert.success('Success', 'Page reconnected successfully!')
      console.log('✅ Page reconnected:', response)
      
      // إعادة تحميل البيانات
      await fetchPages()
      
      return response
    } catch (err) {
      console.error('❌ Error reconnecting page:', err)
      showAlert.error('Error', err.message || 'Failed to reconnect page')
      throw err
    }
  }

  // إعادة تحميل جميع البيانات
  const refreshAllData = useCallback(async () => {
    try {
      await Promise.all([
        fetchPages(),
        fetchActivityLogs(),
        fetchConnectionStatus(),
      ])
    } catch (error) {
      console.error('Error refreshing all data:', error)
    }
  }, [fetchPages, fetchActivityLogs, fetchConnectionStatus])

  // التحميل الأولي
  useEffect(() => {
    refreshAllData()
  }, [refreshAllData])

  return {
    pages,
    activityLogs,
    connectionStatus,
    platforms,
    loading,
    error,
    fetchPages,
    fetchActivityLogs,
    fetchConnectionStatus,
    connectNewPage,
    updatePage,
    deletePage,
    syncPage,
    reconnectPage,
    refreshAllData,
  }
}

export default usePages