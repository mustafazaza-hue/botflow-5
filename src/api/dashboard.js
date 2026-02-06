// src/api/dashboard.js
import axiosInstance from './client';

export const dashboardApi = {
  // الحصول على جميع مقاييس Dashboard - مهم: لن نعيد بيانات افتراضية
  getMetrics: async () => {
    try {
      console.log('📊 Fetching dashboard metrics...');
      const response = await axiosInstance.get('/Dashboard/metrics');
      console.log('✅ Dashboard metrics response:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Dashboard metrics API error:', error);
      
      // 🔴 لن نعود بيانات افتراضية، سنرمي الخطأ
      // هذا مهم حتى يعرف المكون أن هناك مشكلة
      const apiError = {
        status: error.response?.status,
        message: error.response?.data?.message || error.message,
        data: error.response?.data,
        originalError: error
      };
      throw apiError;
    }
  },

  // الحصول على اتجاه المحادثات - مهم: لن نعود بيانات افتراضية
  getConversationTrend: async (timeRange = 'weekly') => {
    try {
      const response = await axiosInstance.get('/Dashboard/conversation-trend', {
        params: { timeRange }
      });
      console.log('📈 Conversation trend response:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Conversation trend API error:', error);
      throw error.response?.data || error.message;
    }
  },

  // الحصول على أوقات الاستجابة - مهم: لن نعود بيانات افتراضية
  getResponseTimes: async () => {
    try {
      const response = await axiosInstance.get('/Dashboard/response-times');
      console.log('⏱️ Response times response:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Response times API error:', error);
      throw error.response?.data || error.message;
    }
  },

  // الحصول على مصادر المشاركة - مهم: لن نعود بيانات افتراضية
  getEngagementSources: async () => {
    try {
      const response = await axiosInstance.get('/Dashboard/engagement-sources');
      console.log('📱 Engagement sources response:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Engagement sources API error:', error);
      throw error.response?.data || error.message;
    }
  },

  // الحصول على الأنشطة الحديثة - مهم: لن نعود بيانات افتراضية
  getRecentActivities: async (count = 10) => {
    try {
      const response = await axiosInstance.get('/Dashboard/recent-activities', {
        params: { count }
      });
      console.log('🔄 Recent activities response:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Recent activities API error:', error);
      throw error.response?.data || error.message;
    }
  },

  // الحصول على التنبيهات
  getAlerts: async () => {
    try {
      const response = await axiosInstance.get('/Dashboard/alerts');
      console.log('⚠️ Alerts response:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Alerts API error:', error);
      return { hasAlerts: false };
    }
  },

  // تصدير البيانات
  exportData: async (exportData) => {
    try {
      const response = await axiosInstance.post('/Dashboard/export', exportData);
      console.log('📥 Export response:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Export API error:', error);
      throw error;
    }
  },

  // الحصول على الملخص
  getSummary: async () => {
    try {
      const response = await axiosInstance.get('/Dashboard/summary');
      console.log('📋 Summary response:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Summary API error:', error);
      return '';
    }
  }
};