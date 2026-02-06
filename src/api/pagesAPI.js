import apiClient from './client';

const pagesAPI = {
  // GET جميع الصفحات
  getAllPages: () => apiClient.get('/Pages'),
  
  // GET صفحة محددة
  getPageById: (id) => apiClient.get(`/Pages/${id}`),
  
  // UPDATE صفحة
  updatePage: (id, data) => apiClient.put(`/Pages/${id}`, data),
  
  // DELETE صفحة
  deletePage: (id) => apiClient.delete(`/Pages/${id}`),
  
  // ربط صفحة جديدة
  connectPage: (data) => apiClient.post('/Pages/connect', data),
  
  // مزامنة صفحة
  syncPage: (id, data) => apiClient.post(`/Pages/${id}/sync`, data),
  
  // إعادة ربط صفحة
  reconnectPage: (id) => apiClient.post(`/Pages/${id}/reconnect`),
  
  // سجلات النشاط
  getActivityLogs: () => apiClient.get('/Pages/activity-logs'),
  
  // حالة الاتصال
  getConnectionStatus: () => apiClient.get('/Pages/connection-status'),
  
  // المنصات المتاحة
  getPlatforms: () => apiClient.get('/Pages/platforms'),
};

export default pagesAPI;