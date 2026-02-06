// src/api/constants.js

export const PERIOD_OPTIONS = [
  { value: '7d', label: 'Last 7 Days' },
  { value: '30d', label: 'Last 30 Days' },
  { value: '90d', label: 'Last 90 Days' },
  { value: 'month', label: 'This Month' },
  { value: 'lastMonth', label: 'Last Month' },
  { value: 'custom', label: 'Custom Range' }
];

export const PLATFORM_OPTIONS = [
  { value: 'facebook', label: 'Facebook' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'messenger', label: 'Messenger' }
];

export const CHART_TYPES = {
  LINE: 'line',
  BAR: 'bar',
  PIE: 'pie',
  FUNNEL: 'funnel',
  HEATMAP: 'heatmap'
};

export const METRIC_TYPES = {
  MESSAGES: 'messages',
  ENGAGEMENT: 'engagement',
  RESPONSE_TIME: 'responseTime',
  CONVERSION: 'conversion'
};