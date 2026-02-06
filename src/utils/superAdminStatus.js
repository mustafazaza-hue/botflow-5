// src/utils/superAdminStatus.js
export const checkSuperAdminStatus = () => {
  if (typeof window === 'undefined') {
    return {
      isSuperAdmin: false,
      reason: 'Server side rendering'
    };
  }
  
  const token = localStorage.getItem('auth_token');
  const userData = localStorage.getItem('user_data');
  
  if (!token) {
    return {
      isSuperAdmin: false,
      reason: 'No authentication token found',
      hasToken: false,
      hasUserData: false
    };
  }
  
  if (!userData) {
    return {
      isSuperAdmin: false,
      reason: 'No user data found',
      hasToken: true,
      hasUserData: false
    };
  }
  
  try {
    const user = JSON.parse(userData);
    const isSuperAdmin = user.role === 'SuperAdmin' || user.role === 'superadmin' || user.role === 'admin';
    
    return {
      isSuperAdmin,
      userRole: user.role,
      userEmail: user.email,
      userId: user.id,
      hasToken: true,
      hasUserData: true
    };
  } catch (error) {
    console.error('Error parsing user data:', error);
    return {
      isSuperAdmin: false,
      reason: 'Error parsing user data',
      error: error.message,
      hasToken: true,
      hasUserData: true
    };
  }
};

// دالة للتحقق من صلاحيات Super Admin مع تجنب 403
export const checkSuperAdminAccess = async () => {
  const status = checkSuperAdminStatus();
  
  if (!status.isSuperAdmin) {
    console.warn('⚠️ User is not Super Admin:', {
      role: status.userRole,
      reason: status.reason
    });
    
    return {
      hasAccess: false,
      status,
      message: `User role "${status.userRole}" does not have Super Admin privileges`
    };
  }
  
  // اختبار بسيط للوصول إلى API
  try {
    // يمكن إضافة اختبار API هنا إذا لزم الأمر
    return {
      hasAccess: true,
      status,
      message: 'User has Super Admin access'
    };
  } catch (error) {
    console.error('Super Admin access test failed:', error);
    return {
      hasAccess: false,
      status,
      message: 'Access test failed',
      error: error.message
    };
  }
};