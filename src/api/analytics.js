// src/api/analytics.js
import axiosInstance from "./client";
import { showAlert } from "@/utils/sweetAlert";
import { formatNumber, formatPercentage } from "@/utils/formatters";
import dayjs from 'dayjs';

// استيراد الأيقونات
import {
  faMessage,
  faChartLine,
  faClock,
  faTrophy
} from '@fortawesome/free-solid-svg-icons';

// دالة مساعدة لبناء باراميترات API
const buildApiParams = (params = {}) => {
  const now = dayjs();
  const defaultStartDate = now.subtract(7, 'day').startOf('day').toISOString();
  const defaultEndDate = now.endOf('day').toISOString();
  
  const apiParams = {
    StartDate: params.startDate || defaultStartDate,
    EndDate: params.endDate || defaultEndDate,
    Period: params.period || 'Last7Days'
  };
  
  // إضافة باراميترات اختيارية فقط إذا كانت موجودة
  if (params.botId) apiParams.BotId = params.botId;
  if (params.pageId) apiParams.PageId = params.pageId;
  if (params.platform) apiParams.Platform = params.platform;
  
  return apiParams;
};

// دالة مساعدة لمعالجة أخطاء API
const handleApiError = (error, endpointName) => {
  const errorData = error.response?.data;
  const status = error.response?.status;
  const errorMessage = error.message;
  
  console.log(`⚠️ ${endpointName} API Error:`, {
    status,
    error: errorData?.error,
    message: errorData?.message || errorMessage,
    type: errorData?.type
  });
  
  // إذا كان خطأ SQLite أو 400، نعيد null أو مصفوفة فارغة
  if (status === 400 || errorData?.error?.includes('SQLite')) {
    console.log(`ℹ️ ${endpointName}: Returning empty due to SQLite/400 error`);
    return null;
  }
  
  throw error;
};

export const analyticsApi = {
  // الحصول على المقاييس الأساسية
  getMetrics: async (params = {}) => {
    try {
      const apiParams = buildApiParams(params);
      console.log("📊 Fetching metrics with params:", apiParams);
      
      const response = await axiosInstance.get("/Analytics/metrics", {
        params: apiParams
      });
      
      console.log("✅ Metrics API response received");
      return response.data;
    } catch (error) {
      return handleApiError(error, "Metrics");
    }
  },

  // الحصول على أفضل البوتات
  getTopBots: async (params = {}) => {
    try {
      const apiParams = buildApiParams(params);
      const response = await axiosInstance.get("/Analytics/top-bots", {
        params: apiParams
      });
      
      return response.data;
    } catch (error) {
      return handleApiError(error, "TopBots");
    }
  },

  // الحصول على أفضل الصفحات
  getTopPages: async (params = {}) => {
    try {
      const apiParams = buildApiParams(params);
      const response = await axiosInstance.get("/Analytics/top-pages", {
        params: apiParams
      });
      
      return response.data;
    } catch (error) {
      return handleApiError(error, "TopPages");
    }
  },

  // الحصول على بيانات الرسائل البيانية
  getMessagesChart: async (params = {}) => {
    try {
      const apiParams = buildApiParams(params);
      const response = await axiosInstance.get("/Analytics/messages-chart", {
        params: apiParams
      });
      
      return response.data;
    } catch (error) {
      return handleApiError(error, "MessagesChart");
    }
  },

  // الحصول على بيانات المشاركة البيانية
  getEngagementChart: async (params = {}) => {
    try {
      const apiParams = buildApiParams(params);
      const response = await axiosInstance.get("/Analytics/engagement-chart", {
        params: apiParams
      });
      
      return response.data;
    } catch (error) {
      return handleApiError(error, "EngagementChart");
    }
  },

  // الحصول على بيانات وقت الاستجابة البيانية
  getResponseTimeChart: async (params = {}) => {
    try {
      const apiParams = buildApiParams(params);
      const response = await axiosInstance.get("/Analytics/response-time-chart", {
        params: apiParams
      });
      
      return response.data;
    } catch (error) {
      return handleApiError(error, "ResponseTimeChart");
    }
  },

  // الحصول على بيانات التحويل البيانية
  getConversionChart: async (params = {}) => {
    try {
      const apiParams = buildApiParams(params);
      const response = await axiosInstance.get("/Analytics/conversion-chart", {
        params: apiParams
      });
      
      return response.data;
    } catch (error) {
      return handleApiError(error, "ConversionChart");
    }
  },

  // الحصول على بيانات السلاسل الزمنية
  getTimeSeries: async (params = {}) => {
    try {
      const apiParams = buildApiParams(params);
      const response = await axiosInstance.get("/Analytics/time-series", {
        params: apiParams
      });
      
      return response.data;
    } catch (error) {
      return handleApiError(error, "TimeSeries");
    }
  },

  // تصدير البيانات
  exportData: async (data) => {
    try {
      showAlert.loading("Preparing export...");
      
      const exportParams = buildApiParams(data);
      const response = await axiosInstance.post("/Analytics/export", exportParams, {
        responseType: 'blob'
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `analytics-export-${dayjs().format('YYYY-MM-DD')}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      
      showAlert.close();
      showAlert.success("Export downloaded successfully!");
      
      return response.data;
    } catch (error) {
      console.error("Error exporting data:", error);
      showAlert.close();
      showAlert.error("Export failed", "Please try again later");
      throw error;
    }
  },

  // الحصول على جميع البيانات
  getAllAnalyticsData: async (params = {}) => {
    try {
      showAlert.loading("Loading analytics data...");
      
      // استخدام باراميترات مبسطة
      const simpleParams = {
        period: params.period || 'Last7Days'
      };
      
      // استخدام Promise.allSettled بدلاً من Promise.all
      const [
        metricsPromise,
        topBotsPromise,
        topPagesPromise,
        messagesChartPromise,
        engagementChartPromise,
        responseTimeChartPromise,
        conversionChartPromise,
        timeSeriesPromise
      ] = await Promise.allSettled([
        analyticsApi.getMetrics(simpleParams),
        analyticsApi.getTopBots(simpleParams),
        analyticsApi.getTopPages(simpleParams),
        analyticsApi.getMessagesChart(simpleParams),
        analyticsApi.getEngagementChart(simpleParams),
        analyticsApi.getResponseTimeChart(simpleParams),
        analyticsApi.getConversionChart(simpleParams),
        analyticsApi.getTimeSeries(simpleParams)
      ]);
      
      showAlert.close();
      
      // معالجة النتائج
      const processResult = (result) => {
        if (result.status === 'fulfilled') {
          return result.value;
        } else {
          console.log(`⚠️ API call rejected: ${result.reason?.message || 'Unknown error'}`);
          return null;
        }
      };
      
      const result = {
        metrics: processResult(metricsPromise),
        topBots: processResult(topBotsPromise) || [],
        topPages: processResult(topPagesPromise) || [],
        messagesChart: processResult(messagesChartPromise),
        engagementChart: processResult(engagementChartPromise),
        responseTimeChart: processResult(responseTimeChartPromise),
        conversionChart: processResult(conversionChartPromise),
        timeSeries: processResult(timeSeriesPromise)
      };
      
      // التحقق مما إذا كان لدينا أي بيانات
      const hasData = result.metrics || 
                      result.topBots.length > 0 || 
                      result.topPages.length > 0 ||
                      result.messagesChart ||
                      result.engagementChart ||
                      result.responseTimeChart ||
                      result.conversionChart ||
                      result.timeSeries;
      
      if (hasData) {
        showAlert.success("Data loaded successfully!");
      } else {
        showAlert.warning("No data available", "Please check your API connection");
      }
      
      return result;
      
    } catch (error) {
      showAlert.close();
      console.error("Error loading all analytics data:", error);
      throw error;
    }
  }
};

// دالة مساعدة لتحويل البيانات من API
export const formatChartData = {
  // تحويل بيانات الرسائل
  messages: (apiData) => {
    if (!apiData) {
      // رسوم بيانية فارغة تماماً
      return {
        data: [{
          type: 'scatter',
          mode: 'lines',
          x: [],
          y: [],
          line: { color: '#6366F1', width: 3 }
        }],
        isEmpty: true
      };
    }
    
    // محاولة استخراج البيانات
    let labels = [];
    let values = [];
    
    if (apiData.labels && apiData.values) {
      labels = apiData.labels;
      values = apiData.values;
    } else if (apiData.data && apiData.data.labels && apiData.data.values) {
      labels = apiData.data.labels;
      values = apiData.data.values;
    } else if (Array.isArray(apiData)) {
      apiData.forEach(item => {
        if (item.date && item.count !== undefined) {
          labels.push(item.date);
          values.push(item.count);
        }
      });
    }
    
    const isEmpty = labels.length === 0 || values.length === 0;
    
    return {
      data: [{
        type: 'scatter',
        mode: 'lines',
        x: labels,
        y: values,
        line: { color: '#6366F1', width: 3 },
        fill: isEmpty ? 'none' : 'tozeroy',
        fillcolor: 'rgba(99, 102, 241, 0.1)'
      }],
      isEmpty
    };
  },

  // تحويل بيانات المشاركة
  engagement: (apiData) => {
    if (!apiData) {
      return {
        data: [{
          type: 'pie',
          labels: [],
          values: [],
          marker: { colors: [] },
          hole: 0.4
        }],
        isEmpty: true
      };
    }
    
    let labels = [];
    let values = [];
    
    if (apiData.labels && apiData.values) {
      labels = apiData.labels;
      values = apiData.values;
    } else if (apiData.data && apiData.data.labels && apiData.data.values) {
      labels = apiData.data.labels;
      values = apiData.data.values;
    } else if (Array.isArray(apiData)) {
      apiData.forEach(item => {
        if (item.channel && item.percentage !== undefined) {
          labels.push(item.channel);
          values.push(item.percentage);
        }
      });
    }
    
    const colors = ['#1877F2', '#E4405F', '#0084FF', '#25D366', '#FF6B35'];
    const isEmpty = labels.length === 0 || values.length === 0;
    
    return {
      data: [{
        type: 'pie',
        labels: labels,
        values: values,
        marker: { colors: colors.slice(0, labels.length) },
        hole: 0.4
      }],
      isEmpty
    };
  },

  // تحويل بيانات وقت الاستجابة
  responseTime: (apiData) => {
    if (!apiData) {
      return {
        data: [{
          type: 'bar',
          x: [],
          y: [],
          marker: { color: '#EC4899' }
        }],
        isEmpty: true
      };
    }
    
    let labels = [];
    let values = [];
    
    if (apiData.labels && apiData.values) {
      labels = apiData.labels;
      values = apiData.values;
    } else if (apiData.data && apiData.data.labels && apiData.data.values) {
      labels = apiData.data.labels;
      values = apiData.data.values;
    } else if (Array.isArray(apiData)) {
      apiData.forEach(item => {
        if (item.range && item.count !== undefined) {
          labels.push(item.range);
          values.push(item.count);
        }
      });
    }
    
    const isEmpty = labels.length === 0 || values.length === 0;
    
    return {
      data: [{
        type: 'bar',
        x: labels,
        y: values,
        marker: { color: '#EC4899' }
      }],
      isEmpty
    };
  },

  // تحويل بيانات التحويل
  conversion: (apiData) => {
    if (!apiData) {
      return {
        data: [{
          type: 'funnel',
          y: [],
          x: [],
          marker: { color: [] }
        }],
        isEmpty: true
      };
    }
    
    let stages = [];
    let values = [];
    
    if (apiData.stages && apiData.values) {
      stages = apiData.stages;
      values = apiData.values;
    } else if (apiData.data && apiData.data.stages && apiData.data.values) {
      stages = apiData.data.stages;
      values = apiData.data.values;
    } else if (Array.isArray(apiData)) {
      apiData.forEach(item => {
        if (item.stage && item.count !== undefined) {
          stages.push(item.stage);
          values.push(item.count);
        }
      });
    }
    
    const colors = ['#6366F1', '#8B5CF6', '#A855F7', '#EC4899', '#F97316'];
    const isEmpty = stages.length === 0 || values.length === 0;
    
    return {
      data: [{
        type: 'funnel',
        y: stages,
        x: values,
        marker: { color: colors.slice(0, stages.length) }
      }],
      isEmpty
    };
  },

  // تحويل بيانات ساعات الذروة
  peakHours: (apiData) => {
    if (!apiData) {
      return {
        data: [{
          type: 'heatmap',
          z: [[]],
          x: [],
          y: ['Activity'],
          colorscale: [[0, '#F3F4F6'], [0.5, '#8B5CF6'], [1, '#6366F1']],
          showscale: true
        }],
        isEmpty: true
      };
    }
    
    let hours = [];
    
    if (apiData.hours && Array.isArray(apiData.hours)) {
      hours = apiData.hours;
    } else if (apiData.data && apiData.data.hours) {
      hours = apiData.data.hours;
    } else if (Array.isArray(apiData)) {
      hours = apiData.map(item => item.activity || 0);
    }
    
    // تأكد من أن لدينا 24 ساعة
    if (hours.length === 0) {
      hours = Array(24).fill(0);
    } else if (hours.length < 24) {
      // تمديد المصفوفة إذا كانت أقصر
      hours = [...hours, ...Array(24 - hours.length).fill(0)];
    }
    
    const isEmpty = hours.every(hour => hour === 0);
    
    return {
      data: [{
        type: 'heatmap',
        z: [hours],
        x: Array.from({length: 24}, (_, i) => `${i.toString().padStart(2, '0')}:00`),
        y: ['Activity'],
        colorscale: [[0, '#F3F4F6'], [0.5, '#8B5CF6'], [1, '#6366F1']],
        showscale: true
      }],
      isEmpty
    };
  }
};

// دالة لتحويل بيانات المقاييس
export const formatMetrics = (apiData) => {
  if (!apiData) return [];
  
  const metrics = [
    {
      id: 'messages',
      value: formatNumber(apiData.totalMessages || 0),
      label: 'Total Messages',
      change: apiData.messagesChange ? `${apiData.messagesChange > 0 ? '+' : ''}${apiData.messagesChange}%` : '0%',
      changeColor: (apiData.messagesChange || 0) >= 0 ? 'text-green-600' : 'text-red-600',
      bgColor: 'from-blue-500 to-blue-600',
      icon: faMessage
    },
    {
      id: 'engagement',
      value: formatPercentage(apiData.engagementRate || 0),
      label: 'Engagement Rate',
      change: apiData.engagementChange ? `${apiData.engagementChange > 0 ? '+' : ''}${apiData.engagementChange}%` : '0%',
      changeColor: (apiData.engagementChange || 0) >= 0 ? 'text-green-600' : 'text-red-600',
      bgColor: 'from-purple-500 to-purple-600',
      icon: faChartLine
    },
    {
      id: 'response',
      value: `${apiData.avgResponseTime || 0}min`,
      label: 'Avg Response Time',
      change: apiData.responseChange ? `${apiData.responseChange > 0 ? '+' : ''}${apiData.responseChange}%` : '0%',
      changeColor: (apiData.responseChange || 0) <= 0 ? 'text-green-600' : 'text-red-600',
      bgColor: 'from-pink-500 to-pink-600',
      icon: faClock
    },
    {
      id: 'conversion',
      value: formatPercentage(apiData.conversionRate || 0),
      label: 'Conversion Rate',
      change: apiData.conversionChange ? `${apiData.conversionChange > 0 ? '+' : ''}${apiData.conversionChange}%` : '0%',
      changeColor: (apiData.conversionChange || 0) >= 0 ? 'text-green-600' : 'text-red-600',
      bgColor: 'from-green-500 to-green-600',
      icon: faTrophy
    }
  ];
  
  return metrics;
};

// دالة لتحويل بيانات أفضل البوتات
export const formatTopBots = (apiData) => {
  if (!apiData || !Array.isArray(apiData) || apiData.length === 0) return [];
  
  const gradients = [
    'from-[#6366F1] to-[#8B5CF6]',
    'from-[#8B5CF6] to-[#EC4899]',
    'from-[#EC4899] to-[#6366F1]',
    'from-blue-500 to-blue-600',
    'from-green-500 to-green-600'
  ];
  
  return apiData.map((bot, index) => ({
    id: bot.id || `bot-${index}`,
    name: bot.name || 'Unnamed Bot',
    conversations: formatNumber(bot.conversations || 0),
    conversion: formatPercentage(bot.conversionRate || 0),
    gradient: gradients[index % gradients.length]
  }));
};

// دالة لتحويل بيانات أفضل الصفحات
export const formatTopPages = (apiData) => {
  if (!apiData || !Array.isArray(apiData) || apiData.length === 0) return [];
  
  const platformColors = {
    'facebook': 'bg-blue-500',
    'instagram': 'bg-gradient-to-br from-purple-500 to-pink-500',
    'whatsapp': 'bg-green-500',
    'messenger': 'bg-blue-600',
    'telegram': 'bg-blue-400'
  };
  
  return apiData.map((page) => ({
    id: page.id || `page-${page.name}`,
    name: page.name || 'Unnamed Page',
    messages: formatNumber(page.messages || 0),
    engagement: formatPercentage(page.engagementRate || 0),
    platform: page.platform || 'facebook',
    bgColor: platformColors[page.platform] || 'bg-blue-500'
  }));
};