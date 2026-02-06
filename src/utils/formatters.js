// دالة مساعدة لتنسيق الأرقام
export const formatNumber = (num) => {
  if (num === undefined || num === null) return '--';
  
  if (typeof num === 'string') {
    num = parseFloat(num.replace(/[^0-9.-]+/g, ""));
  }
  
  if (isNaN(num)) return '--';
  
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  
  return num.toLocaleString('en-US');
};

// دالة مساعدة لتنسيق العملة
export const formatCurrency = (amount) => {
  if (amount === undefined || amount === null) return '--';
  
  if (typeof amount === 'string') {
    amount = parseFloat(amount.replace(/[^0-9.-]+/g, ""));
  }
  
  if (isNaN(amount)) return '--';
  
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(1)}M`;
  }
  
  if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(1)}K`;
  }
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

// دالة مساعدة لتنسيق التاريخ
export const formatDate = (dateString) => {
  if (!dateString) return 'Never';
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid date';
    
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} mins ago`;
    if (diffHours < 24) return `${diffHours} hours ago`;
    if (diffDays < 7) return `${diffDays} days ago`;
    
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch (error) {
    return 'Invalid date';
  }
};

// دالة لتنسيق النسبة المئوية
export const formatPercentage = (num) => {
  if (num === undefined || num === null) return '--%';
  
  if (typeof num === 'string') {
    num = parseFloat(num);
  }
  
  if (isNaN(num)) return '--%';
  
  return `${num.toFixed(1)}%`;
};

// دالة لتحويل الثواني إلى تنسيق وقت مقروء
export const formatSeconds = (seconds) => {
  if (seconds === undefined || seconds === null) return '--';
  
  if (seconds < 1) {
    return `${Math.round(seconds * 1000)}ms`;
  }
  
  return `${seconds.toFixed(2)}s`;
};