// src/api/pages.js
import axiosInstance from './client';

export const pagesApi = {
  // الحصول على جميع الصفحات
  getAllPages: async () => {
    try {
      const response = await axiosInstance.get('/Pages');
      console.log('📄 All pages response:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Get all pages API error:', error);
      throw error.response?.data || error.message;
    }
  },

  // الحصول على صفحة محددة
  getPageById: async (id) => {
    try {
      const response = await axiosInstance.get(`/Pages/${id}`);
      return response.data;
    } catch (error) {
      console.error('❌ Get page by ID API error:', error);
      throw error.response?.data || error.message;
    }
  },

  // إنشاء صفحة جديدة
  createPage: async (pageData) => {
    try {
      console.log('🆕 Creating new page:', pageData);
      const response = await axiosInstance.post('/Pages', pageData);
      console.log('✅ Page created response:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Create page API error:', error);
      throw error.response?.data || error.message;
    }
  },

  // تحديث صفحة
  updatePage: async (id, pageData) => {
    try {
      const response = await axiosInstance.put(`/Pages/${id}`, pageData);
      return response.data;
    } catch (error) {
      console.error('❌ Update page API error:', error);
      throw error.response?.data || error.message;
    }
  },

  // حذف صفحة
  deletePage: async (id) => {
    try {
      const response = await axiosInstance.delete(`/Pages/${id}`);
      return response.data;
    } catch (error) {
      console.error('❌ Delete page API error:', error);
      throw error.response?.data || error.message;
    }
  },

  // توصيل صفحة بمنصة التواصل الاجتماعي
  connectPage: async (platform, pageData) => {
    try {
      const response = await axiosInstance.post(`/Pages/connect/${platform}`, pageData);
      return response.data;
    } catch (error) {
      console.error('❌ Connect page API error:', error);
      throw error.response?.data || error.message;
    }
  },

  // فك توصيل صفحة
  disconnectPage: async (id) => {
    try {
      const response = await axiosInstance.post(`/Pages/disconnect/${id}`);
      return response.data;
    } catch (error) {
      console.error('❌ Disconnect page API error:', error);
      throw error.response?.data || error.message;
    }
  },

  // الحصول على تحليل الصفحة
  getPageAnalytics: async (id, period = 'weekly') => {
    try {
      const response = await axiosInstance.get(`/Pages/analytics/${id}`, {
        params: { period }
      });
      return response.data;
    } catch (error) {
      console.error('❌ Page analytics API error:', error);
      throw error.response?.data || error.message;
    }
  },

  // تنشيط/تعطيل الصفحة
  togglePageStatus: async (id, isActive) => {
    try {
      const response = await axiosInstance.post(`/Pages/status/${id}`, { isActive });
      return response.data;
    } catch (error) {
      console.error('❌ Toggle page status API error:', error);
      throw error.response?.data || error.message;
    }
  }
};