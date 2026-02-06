import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5224/api';

console.log('🔧 API URL:', API_URL);

// إنشاء Axios instance
const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true, // إضافة هذه السطر
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // إضافة التوكن لكل الطلبات
    const token = localStorage.getItem('auth_token');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('🔑 Token added to request:', config.url);
    } else {
      console.log('⚠️ No token found for request:', config.url);
    }
    
    // إضافة headers لتفادي مشاكل CORS
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
    config.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
    
    return config;
  },
  (error) => {
    console.error('❌ Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('✅ API Response:', {
      url: response.config?.url || 'unknown',
      status: response.status,
      data: response.data ? 'Has data' : 'No data'
    });
    return response;
  },
  async (error) => {
    // الحصول على التفاصيل بطريقة آمنة
    let errorDetails = {};
    
    try {
      errorDetails = {
        url: error.config?.url || error.request?.responseURL || 'unknown',
        method: error.config?.method || 'unknown',
        status: error.response?.status,
        statusText: error.response?.statusText,
        message: error.message || 'Unknown error',
        data: error.response?.data
      };
    } catch (e) {
      errorDetails = {
        url: 'unknown',
        method: 'unknown',
        status: 'unknown',
        statusText: 'unknown',
        message: error?.message || 'Unknown error',
        originalError: error
      };
    }
    
    // لا نقوم بتسجيل أخطاء CORS أو Blackbox
    if (errorDetails.url.includes('useblackbox.io')) {
      console.log('ℹ️ Blackbox request failed - This is expected');
      return Promise.reject(new Error('External service unavailable'));
    }
    
    // التحقق مما إذا كان هناك معلومات كافية لتسجيل الخطأ
    const hasErrorInfo = errorDetails.url !== 'unknown' || errorDetails.status !== 'unknown';
    
    if (hasErrorInfo) {
      console.error('❌ API Response Error:', errorDetails);
    } else {
      console.error('❌ Unknown API Error:', error);
    }
    
    // معالجة خطأ 403 Forbidden
    if (error.response?.status === 403) {
      console.log('🚫 403 Forbidden - Access denied');
      
      // التحقق إذا كان طلب Super Admin
      const isSuperAdminRequest = errorDetails.url.includes('/super-admin/');
      
      if (isSuperAdminRequest) {
        console.log('⚠️ Super Admin API access denied.');
      }
    }
    
    // معالجة خطأ 401 Unauthorized
    if (error.response?.status === 401) {
      console.log('⚠️ 401 Unauthorized detected');
      
      try {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user_data');
        console.log('🧹 LocalStorage cleared due to 401');
        
        // إعادة التوجيه لصفحة تسجيل الدخول
        if (typeof window !== 'undefined') {
          window.location.href = '/customer-login';
        }
      } catch (e) {
        console.error('❌ Error clearing localStorage:', e);
      }
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;