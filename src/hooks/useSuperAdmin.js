// src/hooks/useSuperAdmin.js
import { useState, useCallback } from 'react';
import { showAlert } from '@/utils/alert';
import { 
  superAdminDashboardApi, 
  superAdminUsersApi,
  superAdminKPIApi,
  superAdminAIDataSourcesApi 
} from '@/api/superAdminApi';

export const useSuperAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Dashboard functions
  const fetchDashboardData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await Promise.all([
        superAdminDashboardApi.getOverview(),
        superAdminDashboardApi.getRevenueTrend(),
        superAdminDashboardApi.getSubscriptionDistribution(),
        superAdminDashboardApi.getSystemPerformance(),
        superAdminUsersApi.getUserStats()
      ]);
      return {
        overview: data[0],
        revenueTrend: data[1],
        subscriptionDistribution: data[2],
        systemPerformance: data[3],
        userStats: data[4]
      };
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // User management functions
  const fetchUsers = useCallback(async (params = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await superAdminUsersApi.getUsers(params);
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateUser = useCallback(async (id, data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await superAdminUsersApi.updateUser(id, data);
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const suspendUser = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      await superAdminUsersApi.suspendUser(id);
      return true;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Data sources functions
  const fetchDataSources = useCallback(async (params = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await superAdminAIDataSourcesApi.getDataSources(params);
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const uploadDocument = useCallback(async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await superAdminAIDataSourcesApi.uploadDocument(formData);
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // KPI functions
  const fetchKPIOverview = useCallback(async (startDate, endDate) => {
    setLoading(true);
    setError(null);
    try {
      const response = await superAdminKPIApi.getKPIOverview(startDate, endDate);
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    fetchDashboardData,
    fetchUsers,
    updateUser,
    suspendUser,
    fetchDataSources,
    uploadDocument,
    fetchKPIOverview,
    // Add more functions as needed
  };
};