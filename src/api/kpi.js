import axiosInstance from './client';

// KPI API Functions - بدون أي fallback data
export const kpiApi = {
  // الحصول على نظرة عامة على الـ KPI
  getOverview: async (startDate, endDate) => {
    const params = {};
    if (startDate) params.startDate = startDate;
    if (endDate) params.endDate = endDate;
    
    const response = await axiosInstance.get('/super-admin/KPI/overview', { params });
    return response.data;
  },

  // الحصول على metrics محددة
  getMetrics: async (metricType = '', period = 'daily', startDate, endDate) => {
    const params = { metricType, period };
    if (startDate) params.startDate = startDate;
    if (endDate) params.endDate = endDate;
    
    const response = await axiosInstance.get('/super-admin/KPI/metrics', { params });
    return response.data;
  },

  // تحليل الإيرادات
  getRevenueAnalysis: async (startDate, endDate) => {
    const params = {};
    if (startDate) params.startDate = startDate;
    if (endDate) params.endDate = endDate;
    
    const response = await axiosInstance.get('/super-admin/KPI/revenue-analysis', { params });
    return response.data;
  },

  // نمو المستخدمين
  getUserGrowth: async (period = 'monthly') => {
    const response = await axiosInstance.get('/super-admin/KPI/user-growth', { 
      params: { period } 
    });
    return response.data;
  }
};