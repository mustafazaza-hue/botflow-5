import axiosInstance from '../client';

export const aiDataSourcesApi = {
  // GET /api/super-admin/ai-data-sources
  getDataSources: async (params = {}) => {
    try {
      const response = await axiosInstance.get('/super-admin/ai-data-sources', {
        params: {
          Search: params.search || '',
          Type: params.type || '',
          Status: params.status || '',
          StartDate: params.startDate || '',
          EndDate: params.endDate || '',
          Page: params.page || 1,
          PageSize: params.pageSize || 10,
          SortBy: params.sortBy || '',
          SortDescending: params.sortDescending || false
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching data sources:', error);
      throw error;
    }
  },

  // POST /api/super-admin/ai-data-sources
  createDataSource: async (dataSource) => {
    try {
      const response = await axiosInstance.post('/super-admin/ai-data-sources', dataSource);
      return response.data;
    } catch (error) {
      console.error('Error creating data source:', error);
      throw error;
    }
  },

  // GET /api/super-admin/ai-data-sources/{id}
  getDataSourceById: async (id) => {
    try {
      const response = await axiosInstance.get(`/super-admin/ai-data-sources/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching data source ${id}:`, error);
      throw error;
    }
  },

  // PUT /api/super-admin/ai-data-sources/{id}
  updateDataSource: async (id, dataSource) => {
    try {
      const response = await axiosInstance.put(`/super-admin/ai-data-sources/${id}`, dataSource);
      return response.data;
    } catch (error) {
      console.error(`Error updating data source ${id}:`, error);
      throw error;
    }
  },

  // DELETE /api/super-admin/ai-data-sources/{id}
  deleteDataSource: async (id) => {
    try {
      const response = await axiosInstance.delete(`/super-admin/ai-data-sources/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting data source ${id}:`, error);
      throw error;
    }
  },

  // POST /api/super-admin/ai-data-sources/upload-document
  uploadDocument: async (formData) => {
    try {
      const response = await axiosInstance.post('/super-admin/ai-data-sources/upload-document', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error uploading document:', error);
      throw error;
    }
  },

  // POST /api/super-admin/ai-data-sources/connect-url
  connectUrl: async (data) => {
    try {
      const response = await axiosInstance.post('/super-admin/ai-data-sources/connect-url', data);
      return response.data;
    } catch (error) {
      console.error('Error connecting URL:', error);
      throw error;
    }
  },

  // POST /api/super-admin/ai-data-sources/connect-api
  connectApi: async (data) => {
    try {
      const response = await axiosInstance.post('/super-admin/ai-data-sources/connect-api', data);
      return response.data;
    } catch (error) {
      console.error('Error connecting API:', error);
      throw error;
    }
  },

  // POST /api/super-admin/ai-data-sources/connect-database
  connectDatabase: async (data) => {
    try {
      const response = await axiosInstance.post('/super-admin/ai-data-sources/connect-database', data);
      return response.data;
    } catch (error) {
      console.error('Error connecting database:', error);
      throw error;
    }
  },

  // POST /api/super-admin/ai-data-sources/{id}/process
  processDataSource: async (id) => {
    try {
      const response = await axiosInstance.post(`/super-admin/ai-data-sources/${id}/process`);
      return response.data;
    } catch (error) {
      console.error(`Error processing data source ${id}:`, error);
      throw error;
    }
  },

  // POST /api/super-admin/ai-data-sources/{id}/retry
  retryDataSource: async (id) => {
    try {
      const response = await axiosInstance.post(`/super-admin/ai-data-sources/${id}/retry`);
      return response.data;
    } catch (error) {
      console.error(`Error retrying data source ${id}:`, error);
      throw error;
    }
  },

  // POST /api/super-admin/ai-data-sources/{id}/stop
  stopDataSource: async (id) => {
    try {
      const response = await axiosInstance.post(`/super-admin/ai-data-sources/${id}/stop`);
      return response.data;
    } catch (error) {
      console.error(`Error stopping data source ${id}:`, error);
      throw error;
    }
  },

  // GET /api/super-admin/ai-data-sources/stats
  getDataSourceStats: async () => {
    try {
      const response = await axiosInstance.get('/super-admin/ai-data-sources/stats');
      return response.data;
    } catch (error) {
      console.error('Error fetching data source stats:', error);
      throw error;
    }
  },

  // GET /api/super-admin/ai-data-sources/by-status/{status}
  getDataSourcesByStatus: async (status) => {
    try {
      const response = await axiosInstance.get(`/super-admin/ai-data-sources/by-status/${status}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching data sources by status ${status}:`, error);
      throw error;
    }
  },

  // GET /api/super-admin/ai-data-sources/by-type/{type}
  getDataSourcesByType: async (type) => {
    try {
      const response = await axiosInstance.get(`/super-admin/ai-data-sources/by-type/${type}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching data sources by type ${type}:`, error);
      throw error;
    }
  },

  // POST /api/super-admin/ai-data-sources/bulk-delete
  bulkDeleteDataSources: async (ids) => {
    try {
      const response = await axiosInstance.post('/super-admin/ai-data-sources/bulk-delete', ids);
      return response.data;
    } catch (error) {
      console.error('Error bulk deleting data sources:', error);
      throw error;
    }
  },

  // POST /api/super-admin/ai-data-sources/bulk-update-status
  bulkUpdateDataSourceStatus: async (data) => {
    try {
      const response = await axiosInstance.post('/super-admin/ai-data-sources/bulk-update-status', data);
      return response.data;
    } catch (error) {
      console.error('Error bulk updating data source status:', error);
      throw error;
    }
  }
};