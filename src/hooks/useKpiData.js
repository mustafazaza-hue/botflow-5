import { useState, useEffect, useCallback } from 'react';
import { kpiApi } from '../api/kpi';
import { formatNumber, formatCurrency, formatPercentage } from '../utils/formatters';

export const useKpiData = () => {
  const [overview, setOverview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const overviewData = await kpiApi.getOverview();
      
      if (!overviewData || typeof overviewData !== 'object') {
        throw new Error('No overview data returned from API');
      }
      
      setOverview(overviewData);
    } catch (err) {
      setError(err.message || 'Failed to load KPI data from API');
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshData = async () => {
    await fetchAllData();
  };

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  const formattedData = {
    totalUsers: formatNumber(overview?.totalUsers),
    activeSubscriptions: formatNumber(overview?.activeSubscriptions),
    avgResponseTime: overview?.avgResponseTime ? `${overview.avgResponseTime}ms` : '--',
    totalRevenue: formatCurrency(overview?.totalRevenue),
    totalComments: formatNumber(overview?.totalComments),
    messagesSent: formatNumber(overview?.messagesSent),
    uxPilotApiCalls: formatNumber(overview?.uxPilotApiCalls),
    whatsappApiCalls: formatNumber(overview?.whatsappApiCalls),
    
    userGrowthRate: formatPercentage(overview?.userGrowthRate),
    subscriptionGrowthRate: formatPercentage(overview?.subscriptionGrowthRate),
    responseTimeImprovement: overview?.responseTimeImprovement 
      ? `${overview.responseTimeImprovement > 0 ? '+' : ''}${overview.responseTimeImprovement}ms` 
      : '--',
    revenueGrowthRate: formatPercentage(overview?.revenueGrowthRate),
    commentsGrowthRate: formatPercentage(overview?.commentsGrowthRate),
    messagesGrowthRate: formatPercentage(overview?.messagesGrowthRate),
    uxPilotGrowthRate: formatPercentage(overview?.uxPilotGrowthRate),
    whatsappGrowthRate: formatPercentage(overview?.whatsappGrowthRate),
    
    userComparison: overview?.previousPeriodUsers !== undefined
      ? `${overview.totalUsers - overview.previousPeriodUsers} vs previous period`
      : '--',
    subscriptionComparison: overview?.previousPeriodSubscriptions !== undefined
      ? `${overview.activeSubscriptions - overview.previousPeriodSubscriptions} vs previous period`
      : '--',
    revenueComparison: overview?.previousPeriodRevenue !== undefined
      ? `$${formatNumber(Math.abs(overview.totalRevenue - overview.previousPeriodRevenue))} vs previous period`
      : '--'
  };

  return {
    overview,
    loading,
    error,
    refreshData,
    formattedData
  };
};

export const useUserGrowth = (period = 'weekly') => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserGrowth = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const userGrowth = await kpiApi.getUserGrowth(period);
      setData(userGrowth);
    } catch (err) {
      setError(err.message || 'Failed to load user growth data');
    } finally {
      setLoading(false);
    }
  }, [period]);

  useEffect(() => {
    fetchUserGrowth();
  }, [fetchUserGrowth]);

  return { data, loading, error, refetch: fetchUserGrowth };
};

export const useMetrics = (metricType = '', period = 'daily') => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMetrics = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const metrics = await kpiApi.getMetrics(metricType, period);
      setData(metrics);
    } catch (err) {
      setError(err.message || 'Failed to load metrics data');
    } finally {
      setLoading(false);
    }
  }, [metricType, period]);

  useEffect(() => {
    fetchMetrics();
  }, [fetchMetrics]);

  return { data, loading, error, refetch: fetchMetrics };
};

export const useRevenueAnalysis = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRevenueAnalysis = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const revenue = await kpiApi.getRevenueAnalysis();
      setData(revenue);
    } catch (err) {
      setError(err.message || 'Failed to load revenue analysis');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRevenueAnalysis();
  }, [fetchRevenueAnalysis]);

  return { data, loading, error, refetch: fetchRevenueAnalysis };
};