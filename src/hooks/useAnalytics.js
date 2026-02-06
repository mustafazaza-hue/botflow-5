// src/hooks/useAnalytics.js
import { useState, useEffect, useCallback } from 'react';
import { analyticsApi, formatChartData, formatMetrics, formatTopBots, formatTopPages } from '@/api/analytics';
import { authApi } from '@/api/auth';
import { showAlert } from '@/utils/alerts';

export const useAnalytics = (initialParams = {}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [params, setParams] = useState({
    period: '7d',
    startDate: null,
    endDate: null,
    botId: null,
    pageId: null,
    platform: null,
    ...initialParams
  });
  
  // البيانات
  const [metrics, setMetrics] = useState([]);
  const [topBots, setTopBots] = useState([]);
  const [topPages, setTopPages] = useState([]);
  const [messagesData, setMessagesData] = useState(null);
  const [engagementData, setEngagementData] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [conversionData, setConversionData] = useState(null);
  const [peakHoursData, setPeakHoursData] = useState(null);

  // دالة لتحميل البيانات
  const loadData = useCallback(async (customParams = null) => {
    const currentParams = customParams || params;
    
    try {
      setLoading(true);
      setError(null);

      // التحقق من المصادقة
      if (!authApi.isAuthenticated()) {
        throw new Error('Authentication required');
      }

      // تحميل جميع البيانات بشكل متوازي
      const [
        metricsRes,
        topBotsRes,
        topPagesRes,
        messagesChartRes,
        engagementChartRes,
        responseTimeChartRes,
        conversionChartRes,
        timeSeriesRes
      ] = await Promise.allSettled([
        analyticsApi.getMetrics(currentParams),
        analyticsApi.getTopBots(currentParams),
        analyticsApi.getTopPages(currentParams),
        analyticsApi.getMessagesChart(currentParams),
        analyticsApi.getEngagementChart(currentParams),
        analyticsApi.getResponseTimeChart(currentParams),
        analyticsApi.getConversionChart(currentParams),
        analyticsApi.getTimeSeries(currentParams)
      ]);

      // معالجة النتائج
      const handleResult = (result, defaultValue) => {
        if (result.status === 'fulfilled') {
          return result.value;
        } else {
          console.warn('API call failed:', result.reason);
          return defaultValue;
        }
      };

      // تحديث الحالة
      const metricsData = handleResult(metricsRes, null);
      if (metricsData) {
        setMetrics(formatMetrics(metricsData));
      }

      const topBotsData = handleResult(topBotsRes, []);
      setTopBots(formatTopBots(topBotsData));

      const topPagesData = handleResult(topPagesRes, []);
      setTopPages(formatTopPages(topPagesData));

      const messagesChartData = handleResult(messagesChartRes, null);
      if (messagesChartData) {
        setMessagesData(formatChartData.messages(messagesChartData));
      }

      const engagementChartData = handleResult(engagementChartRes, null);
      if (engagementChartData) {
        setEngagementData(formatChartData.engagement(engagementChartData));
      }

      const responseTimeChartData = handleResult(responseTimeChartRes, null);
      if (responseTimeChartData) {
        setResponseData(formatChartData.responseTime(responseTimeChartData));
      }

      const conversionChartData = handleResult(conversionChartRes, null);
      if (conversionChartData) {
        setConversionData(formatChartData.conversion(conversionChartData));
      }

      const timeSeriesData = handleResult(timeSeriesRes, null);
      if (timeSeriesData) {
        setPeakHoursData(formatChartData.peakHours(timeSeriesData));
      }

    } catch (err) {
      console.error('Error loading analytics data:', err);
      setError(err.message);
      showAlert.error('Failed to load analytics data', err.message || 'Please try again');
    } finally {
      setLoading(false);
    }
  }, [params]);

  // تحديث الباراميترات
  const updateParams = useCallback((newParams) => {
    setParams(prev => ({ ...prev, ...newParams }));
  }, []);

  // التحميل الأولي
  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    // الحالة
    loading,
    error,
    params,
    
    // البيانات
    metrics,
    topBots,
    topPages,
    messagesData,
    engagementData,
    responseData,
    conversionData,
    peakHoursData,
    
    // الدوال
    loadData,
    updateParams,
    refresh: () => loadData(),
    exportData: analyticsApi.exportData
  };
};