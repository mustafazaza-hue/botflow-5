import apiClient from './client';

const botsAPI = {
  // GET جميع البوتات مع فلاتر
  getAllBots: (params = {}) => {
    console.log('📡 API Call: GET /Bots', params);
    return apiClient.get('/Bots', { params });
  },
  
  // GET بوت محدد
  getBotById: (id) => {
    console.log(`📡 API Call: GET /Bots/${id}`);
    return apiClient.get(`/Bots/${id}`);
  },
  
  // CREATE بوت جديد
  createBot: (data) => {
    console.log('📡 API Call: POST /Bots', data);
    return apiClient.post('/Bots', data);
  },
  
  // UPDATE بوت
  updateBot: (id, data) => {
    console.log(`📡 API Call: PUT /Bots/${id}`, data);
    return apiClient.put(`/Bots/${id}`, data);
  },
  
  // DELETE بوت
  deleteBot: (id) => {
    console.log(`📡 API Call: DELETE /Bots/${id}`);
    return apiClient.delete(`/Bots/${id}`);
  },
  
  // GET إحصائيات - مع معالجة الخطأ 400
  getBotStats: () => {
    console.log('📡 API Call: GET /Bots/stats');
    return apiClient.get('/Bots/stats')
      .then(response => response)
      .catch(error => {
        // إذا كان الخطأ 400، نرجع بيانات افتراضية
        if (error.response?.status === 400 || error.response?.status === 404) {
          console.log('ℹ️ Stats endpoint returned 400/404, using local calculation');
          // نرجع response وهمي للتعامل معه في hook
          return {
            data: null,
            status: 200,
            config: { url: '/Bots/stats' }
          };
        }
        throw error;
      });
  },
  
  // UPDATE حالة البوت
  updateBotStatus: (id, status) => {
    console.log(`📡 API Call: PATCH /Bots/${id}/status`, { status });
    return apiClient.patch(`/Bots/${id}/status`, { status });
  },
  
  // SEARCH بوتات
  searchBots: (query) => {
    console.log(`📡 API Call: GET /Bots/search?query=${query}`);
    return apiClient.get('/Bots/search', { params: { query } });
  },
  
  // DUPLICATE بوت
  duplicateBot: (id) => {
    console.log(`📡 API Call: POST /Bots/${id}/duplicate`);
    return apiClient.post(`/Bots/${id}/duplicate`);
  }
};

export default botsAPI;