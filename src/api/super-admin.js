import axiosInstance from "./client";

// دالة مساعدة لجلب البيانات مع معالجة الأخطاء وتحليل البيانات
const fetchWithAuth = async (endpoint, params = {}) => {
  try {
    console.log(`🔍 Fetching ${endpoint} with params:`, params);
    
    const response = await axiosInstance.get(endpoint, { params });
    
    console.log(`📊 API Response for ${endpoint}:`, {
      status: response.status,
      hasData: !!response.data,
      dataType: typeof response.data,
      data: response.data
    });
    
    if (!response.data) {
      console.warn(`⚠️ Empty response from ${endpoint}`);
      return getEmptyDataStructure(endpoint);
    }
    
    // تحليل وتنسيق البيانات حسب النوع
    const formattedData = formatApiData(response.data, endpoint);
    
    console.log(`✅ Successfully fetched ${endpoint}:`, {
      formattedType: typeof formattedData,
      isArray: Array.isArray(formattedData),
      keys: !Array.isArray(formattedData) ? Object.keys(formattedData) : `Array with ${formattedData.length} items`
    });
    
    return formattedData;
  } catch (error) {
    console.error(`❌ Error fetching ${endpoint}:`, {
      status: error.response?.status,
      message: error.message,
      url: error.config?.url,
      data: error.response?.data
    });
    
    // إرجاع بيانات فارغة بدلاً من رمي خطأ
    return getEmptyDataStructure(endpoint);
  }
};

// دالة لإنشاء هياكل بيانات فارغة حسب نوع الـ endpoint
const getEmptyDataStructure = (endpoint) => {
  const emptyStructures = {
    'overview': {
      totalUsers: 0,
      activeSubscriptions: 0,
      monthlyRevenue: 0,
      activeBots: 0,
      trialUsers: 0,
      suspendedUsers: 0,
      userGrowthPercentage: 0,
      revenueGrowthPercentage: 0,
      botGrowthPercentage: 0,
      newUsers: 0
    },
    'revenue-trend': [],
    'subscription-distribution': {},
    'recent-users': [],
    'system-performance': {
      apiResponseTime: 0,
      serverUptime: 0,
      databaseLoad: 0,
      botSuccessRate: 0
    },
    'stats': {
      totalUsers: 0,
      activeUsers: 0,
      newUsers: 0,
      activePercentage: 0
    }
  };
  
  // تحديد نوع البيانات بناءً على الـ endpoint
  if (endpoint.includes('overview')) return emptyStructures.overview;
  if (endpoint.includes('revenue-trend')) return emptyStructures['revenue-trend'];
  if (endpoint.includes('subscription-distribution')) return emptyStructures['subscription-distribution'];
  if (endpoint.includes('recent-users')) return emptyStructures['recent-users'];
  if (endpoint.includes('system-performance')) return emptyStructures['system-performance'];
  if (endpoint.includes('stats')) return emptyStructures.stats;
  
  return {};
};

// دالة لتنسيق بيانات الـ API
const formatApiData = (data, endpoint) => {
  // إذا كانت البيانات مصفوفة فارغة أو كائن فارغ، نرجعها كما هي
  if (!data || (Array.isArray(data) && data.length === 0) || (typeof data === 'object' && Object.keys(data).length === 0)) {
    return getEmptyDataStructure(endpoint);
  }
  
  // تنسيق بيانات الـ overview
  if (endpoint.includes('overview')) {
    return {
      totalUsers: data.totalUsers || data.totalSubscribers || 0,
      activeSubscriptions: data.activeSubscriptions || data.activeAccounts || 0,
      monthlyRevenue: data.monthlyRevenue || data.revenue || 0,
      activeBots: data.activeBots || data.bots || 0,
      trialUsers: data.trialUsers || 0,
      suspendedUsers: data.suspendedUsers || 0,
      userGrowthPercentage: data.userGrowthPercentage || data.growthPercentage || 0,
      revenueGrowthPercentage: data.revenueGrowthPercentage || 0,
      botGrowthPercentage: data.botGrowthPercentage || 0,
      newUsers: data.newUsers || data.newSubscribers || 0
    };
  }
  
  // تنسيق بيانات revenue trend
  if (endpoint.includes('revenue-trend')) {
    // إذا كانت البيانات مصفوفة
    if (Array.isArray(data)) {
      return data.map(item => ({
        period: item.period || item.month || item.date || '',
        amount: item.amount || item.revenue || item.value || 0,
        growthPercentage: item.growthPercentage || 0
      }));
    }
    // إذا كانت البيانات كائن مع مصفوفة
    if (data.items && Array.isArray(data.items)) {
      return data.items.map(item => ({
        period: item.period || item.month || item.date || '',
        amount: item.amount || item.revenue || item.value || 0,
        growthPercentage: item.growthPercentage || 0
      }));
    }
    return [];
  }
  
  // تنسيق بيانات subscription distribution
  if (endpoint.includes('subscription-distribution')) {
    // إذا كانت البيانات كائن
    if (typeof data === 'object' && !Array.isArray(data)) {
      return {
        business: data.business || data.Business || 0,
        pro: data.pro || data.Pro || 0,
        starter: data.starter || data.Starter || 0,
        trial: data.trial || data.Trial || 0,
        enterprise: data.enterprise || data.Enterprise || 0
      };
    }
    return {};
  }
  
  // تنسيق بيانات recent users
  if (endpoint.includes('recent-users')) {
    // إذا كانت البيانات مصفوفة
    if (Array.isArray(data)) {
      return data.map(user => ({
        id: user.id || user.userId || '',
        name: user.name || user.fullName || `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'Unknown User',
        email: user.email || '',
        plan: user.plan || user.subscriptionPlan || 'Trial',
        status: user.status || user.accountStatus || 'Active',
        botCount: user.botCount || user.bots || 0,
        revenue: user.revenue || user.monthlyRevenue || 0,
        joinedDate: user.joinedDate || user.createdAt || user.registrationDate || new Date().toISOString(),
        avatarUrl: user.avatarUrl || user.profileImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || 'User')}&background=6366f1&color=fff`
      }));
    }
    // إذا كانت البيانات كائن مع مصفوفة items
    if (data.items && Array.isArray(data.items)) {
      return data.items.map(user => ({
        id: user.id || user.userId || '',
        name: user.name || user.fullName || `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'Unknown User',
        email: user.email || '',
        plan: user.plan || user.subscriptionPlan || 'Trial',
        status: user.status || user.accountStatus || 'Active',
        botCount: user.botCount || user.bots || 0,
        revenue: user.revenue || user.monthlyRevenue || 0,
        joinedDate: user.joinedDate || user.createdAt || user.registrationDate || new Date().toISOString(),
        avatarUrl: user.avatarUrl || user.profileImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || 'User')}&background=6366f1&color=fff`
      }));
    }
    return [];
  }
  
  // تنسيق بيانات system performance
  if (endpoint.includes('system-performance')) {
    return {
      apiResponseTime: data.apiResponseTime || data.responseTime || 0,
      serverUptime: data.serverUptime || data.uptime || 0,
      databaseLoad: data.databaseLoad || data.dbLoad || 0,
      botSuccessRate: data.botSuccessRate || data.successRate || 0
    };
  }
  
  // تنسيق بيانات user stats
  if (endpoint.includes('stats')) {
    return {
      totalUsers: data.totalUsers || 0,
      activeUsers: data.activeUsers || data.activeSubscriptions || 0,
      newUsers: data.newUsers || 0,
      activePercentage: data.activePercentage || (data.activeUsers && data.totalUsers ? (data.activeUsers / data.totalUsers) * 100 : 0)
    };
  }
  
  // إذا لم يكن هناك تنسيق خاص، نرجع البيانات كما هي
  return data;
};

export const superAdminDashboardApi = {
  // نظرة عامة على لوحة التحكم
  getOverview: async () => {
    return await fetchWithAuth('/super-admin/dashboard/overview');
  },

  // اتجاهات الإيرادات
  getRevenueTrend: async (period = 'monthly') => {
    return await fetchWithAuth('/super-admin/dashboard/revenue-trend', { period });
  },

  // توزيع الاشتراكات
  getSubscriptionDistribution: async () => {
    return await fetchWithAuth('/super-admin/dashboard/subscription-distribution');
  },

  // المستخدمين الجدد
  getRecentUsers: async (page = 1, pageSize = 10) => {
    return await fetchWithAuth('/super-admin/dashboard/recent-users', { page, pageSize });
  },

  // أداء النظام
  getSystemPerformance: async () => {
    return await fetchWithAuth('/super-admin/dashboard/system-performance');
  },

  // إحصائيات المستخدمين
  getUserStats: async () => {
    return await fetchWithAuth('/super-admin/users/stats');
  }
};

// دالة للتحقق من هيكل البيانات
export const validateApiResponse = (data, endpoint) => {
  console.log(`🔍 Validating ${endpoint} data:`, data);
  return data;
};