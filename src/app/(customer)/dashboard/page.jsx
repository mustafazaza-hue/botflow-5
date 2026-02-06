// app/dashboard/page.jsx
'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRobot, faChartLine, faComments, faShareNodes,
  faBullhorn, faUsers, faCreditCard, faChartBar,
  faFileLines, faBook, faGear, faRocket,
  faTimes, faBell, faGlobe, faChevronDown,
  faCircleQuestion, faCalendar, faFilter,
  faArrowsRotate, faDownload, faTriangleExclamation,
  faArrowUp, faComment,
  faSpinner, faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import { faBell as faBellRegular, faCalendar as faCalendarRegular } from '@fortawesome/free-regular-svg-icons';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// استيراد APIs
import { dashboardApi } from '../../../api/dashboard';
import { authApi } from '../../../api/auth';
import AuthGuard from '../../../components/AuthGuard';
import LoadingSpinner from '../../../components/LoadingSpinner';
import { showAlert } from '../../../utils/sweetAlert';

// ديناميكي استيراد Plotly
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

// دالة لتحويل اسم الأيقونة
const getIconByName = (iconName) => {
  const iconMap = {
    'faRobot': faRobot,
    'faChartLine': faChartLine,
    'faComments': faComments,
    'faShareNodes': faShareNodes,
    'faComment': faComment,
    'faBullhorn': faBullhorn,
    'faUsers': faUsers,
    'faCreditCard': faCreditCard,
    'faChartBar': faChartBar,
    'faFileLines': faFileLines,
    'faBook': faBook,
    'faGear': faGear,
    'faExclamationTriangle': faExclamationTriangle
  };
  return iconMap[iconName] || faChartLine;
};

// دالة لتحويل لون الخلفية
const getColorClass = (bgColor) => {
  const colorMap = {
    'from-blue-500 to-blue-600': 'from-blue-500 to-blue-600',
    'from-purple-500 to-purple-600': 'from-purple-500 to-purple-600',
    'from-green-500 to-green-600': 'from-green-500 to-green-600',
    'from-pink-500 to-pink-600': 'from-pink-500 to-pink-600',
    'from-amber-500 to-amber-600': 'from-amber-500 to-amber-600'
  };
  return colorMap[bgColor] || 'from-gray-500 to-gray-600';
};

export default function DashboardPage() {
  const router = useRouter();
  const [timeRange, setTimeRange] = useState('weekly');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // حالة مبدئية فارغة - كل البيانات ستأتي من API فقط
  const [dashboardData, setDashboardData] = useState({
    activePages: 0,
    conversationsToday: 0,
    responseRate: 0,
    botsActive: '0/0',
    keyMetrics: [],
    botPerformances: [],
    recentActivities: [],
    alerts: null
  });

  // حالة منفصلة لبيانات الرسومات
  const [chartsData, setChartsData] = useState({
    conversationTrend: null,
    responseTimes: null,
    engagementSources: null
  });

  const sidebarNav = {
    main: [
      {
        id: 'dashboard',
        name: 'Dashboard',
        icon: faChartLine,
        active: true,
        path: '/dashboard'
      },
      {
        id: 'pages',
        name: 'Pages',
        icon: faShareNodes,
        active: false,
        path: '/pages-integration'
      },
      {
        id: 'bots',
        name: 'Bots',
        icon: faRobot,
        active: false,
        path: '/bots'
      },
      {
        id: 'conversations',
        name: 'Conversations',
        icon: faComments,
        active: false,
        path: '/conversations'
      },
      {
        id: 'campaigns',
        name: 'Campaigns',
        icon: faBullhorn,
        active: false,
        path: '/campaigns'
      }
    ],
    management: [
      {
        id: 'team',
        name: 'Team',
        icon: faUsers,
        active: false,
        path: '/team'
      },
      {
        id: 'billing',
        name: 'Billing',
        icon: faCreditCard,
        active: false,
        path: '/billing'
      },
      {
        id: 'analytics',
        name: 'Analytics',
        icon: faChartBar,
        active: false,
        path: '/analytics'
      },
      {
        id: 'logs',
        name: 'Logs',
        icon: faFileLines,
        active: false,
        path: '/logs'
      }
    ],
    support: [
      {
        id: 'help',
        name: 'Help Center',
        icon: faBook,
        active: false,
        path: '/help'
      },
      {
        id: 'settings',
        name: 'Settings',
        icon: faGear,
        active: false,
        path: '/settings'
      }
    ]
  };

  useEffect(() => {
    fetchDashboardData();
  }, [timeRange]);

  const fetchDashboardData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      console.log('🔄 Fetching REAL dashboard data from API...');
      
      // 🔴 جلب جميع البيانات من APIs الحقيقية فقط
      const [
        metricsResponse,
        conversationTrendResponse,
        responseTimesResponse,
        engagementSourcesResponse,
        recentActivitiesResponse,
        alertsResponse
      ] = await Promise.allSettled([
        dashboardApi.getMetrics(),
        dashboardApi.getConversationTrend(timeRange),
        dashboardApi.getResponseTimes(),
        dashboardApi.getEngagementSources(),
        dashboardApi.getRecentActivities(10),
        dashboardApi.getAlerts()
      ]);
      
      console.log('📊 API Responses Status:', {
        metrics: metricsResponse.status,
        conversationTrend: conversationTrendResponse.status,
        responseTimes: responseTimesResponse.status,
        engagementSources: engagementSourcesResponse.status,
        recentActivities: recentActivitiesResponse.status,
        alerts: alertsResponse.status
      });
      
      // 🔴 معالجة البيانات من APIs
      const metricsData = metricsResponse.status === 'fulfilled' ? metricsResponse.value : null;
      const conversationTrendData = conversationTrendResponse.status === 'fulfilled' ? conversationTrendResponse.value : null;
      const responseTimesData = responseTimesResponse.status === 'fulfilled' ? responseTimesResponse.value : null;
      const engagementSourcesData = engagementSourcesResponse.status === 'fulfilled' ? engagementSourcesResponse.value : null;
      const recentActivitiesData = recentActivitiesResponse.status === 'fulfilled' ? recentActivitiesResponse.value : [];
      const alertsData = alertsResponse.status === 'fulfilled' ? alertsResponse.value : { hasAlerts: false };
      
      console.log('✅ Processed API Data:', {
        metrics: metricsData,
        conversationTrend: conversationTrendData,
        responseTimes: responseTimesData,
        engagementSources: engagementSourcesData
      });
      
      // 🔴 تحديث الحالة بالبيانات الحقيقية فقط
      setDashboardData({
        activePages: metricsData?.activePages || 0,
        conversationsToday: metricsData?.conversationsToday || 0,
        responseRate: metricsData?.responseRate || 0,
        botsActive: metricsData?.botsActive || '0/0',
        keyMetrics: metricsData?.keyMetrics || [],
        botPerformances: metricsData?.botPerformances || [],
        recentActivities: recentActivitiesData || [],
        alerts: alertsData
      });
      
      // 🔴 حفظ بيانات الرسومات
      setChartsData({
        conversationTrend: conversationTrendData,
        responseTimes: responseTimesData,
        engagementSources: engagementSourcesData
      });
      
      console.log('✅ All REAL dashboard data processed successfully');
      
    } catch (error) {
      console.error('❌ Error fetching REAL dashboard data:', error);
      setError(error.message || 'Failed to load dashboard data');
      
      if (error.status === 401) {
        showAlert.error('Session Expired', 'Please login again');
        router.push('/customer-login');
      } else {
        showAlert.error('Error', 'Failed to load dashboard data. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // 🔴 إعداد بيانات الرسومات بناءً على البيانات الحقيقية من API فقط
  const getConversationChartData = () => {
    if (!chartsData.conversationTrend || 
        !chartsData.conversationTrend.days || 
        chartsData.conversationTrend.days.length === 0 ||
        !chartsData.conversationTrend.conversationCounts ||
        chartsData.conversationTrend.conversationCounts.length === 0) {
      return null; // لا تعرض أي رسم بياني إذا لم توجد بيانات
    }
    
    return [{
      type: 'scatter',
      mode: 'lines',
      name: 'Conversations',
      x: chartsData.conversationTrend.days,
      y: chartsData.conversationTrend.conversationCounts,
      line: { color: '#6366F1', width: 3 },
      fill: 'tozeroy',
      fillcolor: 'rgba(99, 102, 241, 0.1)'
    }];
  };

  const getResponseTimeChartData = () => {
    if (!chartsData.responseTimes || 
        !chartsData.responseTimes.timeSlots || 
        chartsData.responseTimes.timeSlots.length === 0 ||
        !chartsData.responseTimes.responseTimes ||
        chartsData.responseTimes.responseTimes.length === 0) {
      return null; // لا تعرض أي رسم بياني إذا لم توجد بيانات
    }
    
    return [{
      type: 'bar',
      x: chartsData.responseTimes.timeSlots,
      y: chartsData.responseTimes.responseTimes,
      marker: { 
        color: chartsData.responseTimes.colors || '#6366F1'
      }
    }];
  };

  const getEngagementChartData = () => {
    if (!chartsData.engagementSources || 
        !chartsData.engagementSources.platforms || 
        chartsData.engagementSources.platforms.length === 0 ||
        !chartsData.engagementSources.percentages ||
        chartsData.engagementSources.percentages.length === 0) {
      return null; // لا تعرض أي رسم بياني إذا لم توجد بيانات
    }
    
    return [{
      type: 'pie',
      labels: chartsData.engagementSources.platforms,
      values: chartsData.engagementSources.percentages,
      marker: {
        colors: chartsData.engagementSources.colors || ['#6366F1', '#8B5CF6', '#EC4899', '#F59E0B']
      },
      hole: 0.4,
      textinfo: 'label+percent',
      textposition: 'outside'
    }];
  };

  const getChartLayout = (type, hasData) => {
    const baseLayout = {
      margin: { t: 20, r: 20, b: 40, l: 50 },
      plot_bgcolor: '#ffffff',
      paper_bgcolor: '#ffffff',
      showlegend: false
    };
    
    if (!hasData) {
      return baseLayout;
    }
    
    switch(type) {
      case 'conversation':
        return {
          ...baseLayout,
          xaxis: { 
            showgrid: false,
            zeroline: false,
            title: 'Days'
          },
          yaxis: { 
            showgrid: true,
            gridcolor: '#f3f4f6',
            zeroline: false,
            title: 'Conversations'
          }
        };
      case 'responseTime':
        return {
          ...baseLayout,
          xaxis: { 
            showgrid: false,
            title: 'Time of Day'
          },
          yaxis: { 
            showgrid: true,
            gridcolor: '#f3f4f6',
            title: 'Minutes'
          }
        };
      case 'engagement':
        return {
          margin: { t: 20, r: 20, b: 20, l: 20 },
          plot_bgcolor: '#ffffff',
          paper_bgcolor: '#ffffff',
          showlegend: false
        };
      default:
        return baseLayout;
    }
  };

  const handleExport = async () => {
    try {
      showAlert.loading('Preparing export...');
      
      const exportData = {
        range: timeRange,
        startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        endDate: new Date().toISOString()
      };
      
      const result = await dashboardApi.exportData(exportData);
      
      showAlert.close();
      
      if (result.downloadUrl) {
        window.open(result.downloadUrl, '_blank');
        showAlert.success('Export Ready', 'Your data has been prepared for download');
      } else {
        showAlert.info('Export Started', 'Your export will be ready shortly');
      }
    } catch (error) {
      showAlert.close();
      showAlert.error('Export Failed', error.message || 'Could not export data');
    }
  };

  const handleLogout = async () => {
    const result = await showAlert.confirm('Logout', 'Are you sure you want to logout?');
    
    if (result.isConfirmed) {
      try {
        await authApi.logout();
        router.push('/customer-login');
      } catch (error) {
        console.error('Logout error:', error);
      }
    }
  };

  const handleRefresh = () => {
    fetchDashboardData();
  };

  const handleTestAPIs = async () => {
    console.log('🔍 Testing APIs manually...');
    try {
      console.log('📊 Testing metrics API...');
      const metrics = await dashboardApi.getMetrics();
      console.log('✅ Metrics API response:', metrics);
      
      console.log('📈 Testing conversation trend API...');
      const trend = await dashboardApi.getConversationTrend(timeRange);
      console.log('✅ Conversation trend API response:', trend);
      
      console.log('⏱️ Testing response times API...');
      const responseTimes = await dashboardApi.getResponseTimes();
      console.log('✅ Response times API response:', responseTimes);
      
      console.log('📱 Testing engagement sources API...');
      const engagement = await dashboardApi.getEngagementSources();
      console.log('✅ Engagement sources API response:', engagement);
      
      console.log('🔄 Testing recent activities API...');
      const activities = await dashboardApi.getRecentActivities(5);
      console.log('✅ Recent activities API response:', activities);
      
    } catch (error) {
      console.error('❌ API test failed:', error);
    }
  };

  const chartConfig = {
    responsive: true,
    displayModeBar: false,
    displaylogo: false
  };

  // 🔴 تحضير بيانات الرسومات
  const conversationChartData = getConversationChartData();
  const responseTimeChartData = getResponseTimeChartData();
  const engagementChartData = getEngagementChartData();
  
  const hasConversationData = !!conversationChartData;
  const hasResponseTimeData = !!responseTimeChartData;
  const hasEngagementData = !!engagementChartData;

  if (isLoading) {
    return <LoadingSpinner message="Loading REAL dashboard data..." />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-500 text-4xl mb-4" />
          <h2 className="text-xl font-bold text-gray-800 mb-2">Error Loading Dashboard</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <div className="flex space-x-4 justify-center">
            <button
              onClick={fetchDashboardData}
              className="bg-[#6366F1] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#8B5CF6] transition"
            >
              Try Again
            </button>
            <button
              onClick={handleTestAPIs}
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-300 transition"
            >
              Test APIs
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-100 text-red-700 px-6 py-2 rounded-lg font-medium hover:bg-red-200 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AuthGuard>
      <div className="flex h-screen overflow-hidden bg-gray-50">
        {/* Sidebar */}
        <aside id="sidebar" className="w-64 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faRobot} className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold text-[#0F172A]">BotFlow</span>
            </div>
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center space-x-3">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                  className="w-8 h-8 rounded-full"
                  alt="User"
                />
                <div>
                  <div className="text-sm font-semibold text-[#0F172A]">
                    {authApi.getCurrentUser()?.userName || 'User'}
                  </div>
                  <div className="text-xs text-gray-500">Pro Plan</div>
                </div>
              </div>
              <FontAwesomeIcon icon={faChevronDown} className="text-gray-400 text-xs" />
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            {/* Main Navigation */}
            <div className="mb-6">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
                Main
              </div>
              <ul className="space-y-1">
                {sidebarNav.main.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.path}
                      className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg ${
                        item.active
                          ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-medium'
                          : 'text-gray-700 hover:bg-gray-50 transition'
                      }`}
                    >
                      <FontAwesomeIcon icon={item.icon} className="text-lg" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Management Navigation */}
            <div className="mb-6">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
                Management
              </div>
              <ul className="space-y-1">
                {sidebarNav.management.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.path}
                      className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                    >
                      <FontAwesomeIcon icon={item.icon} className="text-lg" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Navigation */}
            <div>
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
                Support
              </div>
              <ul className="space-y-1">
                {sidebarNav.support.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.path}
                      className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                    >
                      <FontAwesomeIcon icon={item.icon} className="text-lg" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Upgrade Banner */}
          <div className="p-4 border-t border-gray-200">
            <div className="bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] p-4 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faRocket} className="text-white" />
                </div>
                <button className="text-white/80 hover:text-white">
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <h4 className="text-white font-semibold mb-1">Upgrade to Business</h4>
              <p className="text-white/80 text-xs mb-3">Get unlimited pages and conversations</p>
              <button className="w-full bg-white text-[#6366F1] px-3 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition">
                Upgrade Now
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header id="header" className="bg-white border-b border-gray-200 px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold text-[#0F172A]">Dashboard Overview</h1>
                <span className="text-sm text-gray-500">
                  Last updated: {new Date().toLocaleTimeString()}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleRefresh}
                  className="text-gray-600 hover:text-[#6366F1] transition p-2"
                  title="Refresh Data"
                >
                  <FontAwesomeIcon icon={faArrowsRotate} className="text-xl" />
                </button>
                <button
                  onClick={handleTestAPIs}
                  className="text-gray-600 hover:text-[#6366F1] transition p-2"
                  title="Test APIs"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </button>
                <button className="relative p-2 text-gray-600 hover:text-[#6366F1] transition">
                  <FontAwesomeIcon icon={faBellRegular} className="text-xl" />
                  {dashboardData.alerts?.hasAlerts && (
                    <span className="absolute top-1 right-1 w-2 h-2 bg-[#EC4899] rounded-full"></span>
                  )}
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-[#6366F1] transition px-3 py-2 rounded-lg">
                  <FontAwesomeIcon icon={faGlobe} />
                  <span className="font-medium">EN</span>
                  <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
                </button>
                <button className="text-gray-600 hover:text-[#6366F1] transition p-2">
                  <FontAwesomeIcon icon={faCircleQuestion} className="text-xl" />
                </button>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-[#6366F1] transition p-2"
                  title="Logout"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto p-8">
            {/* Filters */}
            <div id="dashboard-filters" className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg">
                    <FontAwesomeIcon icon={faCalendarRegular} className="text-[#6366F1]" />
                    <span className="text-sm font-medium text-gray-700">Last 7 days</span>
                    <FontAwesomeIcon icon={faChevronDown} className="text-gray-400 text-xs" />
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg">
                    <FontAwesomeIcon icon={faFilter} className="text-[#6366F1]" />
                    <span className="text-sm font-medium text-gray-700">All Pages</span>
                    <FontAwesomeIcon icon={faChevronDown} className="text-gray-400 text-xs" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleRefresh}
                    className="text-gray-600 hover:text-[#6366F1] transition p-2"
                    title="Refresh"
                  >
                    <FontAwesomeIcon icon={faArrowsRotate} />
                  </button>
                  <button
                    onClick={handleExport}
                    className="flex items-center space-x-2 bg-[#6366F1] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#8B5CF6] transition"
                  >
                    <FontAwesomeIcon icon={faDownload} />
                    <span>Export</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Alert Section - تظهر فقط إذا كان هناك تنبيهات حقيقية */}
            {dashboardData.alerts?.hasAlerts && (
              <div id="alerts-section" className="mb-6">
                <div className={`bg-gradient-to-r ${
                  dashboardData.alerts.type === 'warning' 
                    ? 'from-amber-50 to-orange-50 border-amber-200' 
                    : 'from-red-50 to-pink-50 border-red-200'
                } border rounded-xl p-4 flex items-start space-x-4`}>
                  <div className={`w-10 h-10 ${
                    dashboardData.alerts.type === 'warning' ? 'bg-amber-100' : 'bg-red-100'
                  } rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <FontAwesomeIcon 
                      icon={faTriangleExclamation} 
                      className={dashboardData.alerts.type === 'warning' ? 'text-amber-600' : 'text-red-600'} 
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{dashboardData.alerts.title}</h4>
                    <p className="text-sm text-gray-700">{dashboardData.alerts.message}</p>
                    {dashboardData.alerts.timestamp && (
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(dashboardData.alerts.timestamp).toLocaleString()}
                      </p>
                    )}
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 transition">
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              </div>
            )}

            {/* 🔴 Key Metrics - البيانات الحقيقية فقط من API */}
            <div id="key-metrics" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Metric 1: Active Pages */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faShareNodes} className="text-white text-xl" />
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    dashboardData.activePages > 0 ? 'text-green-600 bg-green-50' : 'text-gray-600 bg-gray-100'
                  }`}>
                    {dashboardData.activePages > 0 ? 'Active' : 'No Data'}
                  </span>
                </div>
                <div className="text-3xl font-bold text-[#0F172A] mb-1">{dashboardData.activePages}</div>
                <div className="text-sm text-gray-600">Active Pages</div>
                <div className="text-xs text-gray-400 mt-1">
                  {dashboardData.activePages > 0 ? 'From API' : 'No data available'}
                </div>
              </div>

              {/* Metric 2: Conversations Today */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faComments} className="text-white text-xl" />
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    dashboardData.conversationsToday > 0 ? 'text-green-600 bg-green-50' : 'text-gray-600 bg-gray-100'
                  }`}>
                    {dashboardData.conversationsToday > 0 ? 'Today' : 'No Data'}
                  </span>
                </div>
                <div className="text-3xl font-bold text-[#0F172A] mb-1">{dashboardData.conversationsToday}</div>
                <div className="text-sm text-gray-600">Conversations Today</div>
                <div className="text-xs text-gray-400 mt-1">
                  {dashboardData.conversationsToday > 0 ? 'From API' : 'No conversations yet'}
                </div>
              </div>

              {/* Metric 3: Response Rate */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faChartLine} className="text-white text-xl" />
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    dashboardData.responseRate > 0 ? 'text-green-600 bg-green-50' : 'text-gray-600 bg-gray-100'
                  }`}>
                    {dashboardData.responseRate > 0 ? `${dashboardData.responseRate}%` : 'No Data'}
                  </span>
                </div>
                <div className="text-3xl font-bold text-[#0F172A] mb-1">{dashboardData.responseRate}%</div>
                <div className="text-sm text-gray-600">Response Rate</div>
                <div className="text-xs text-gray-400 mt-1">
                  {dashboardData.responseRate > 0 ? 'From API' : 'Awaiting data'}
                </div>
              </div>

              {/* Metric 4: Bots Active */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faRobot} className="text-white text-xl" />
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    dashboardData.botsActive !== '0/0' ? 'text-green-600 bg-green-50' : 'text-amber-600 bg-amber-50'
                  }`}>
                    {dashboardData.botsActive !== '0/0' ? 'Active' : 'No Bots'}
                  </span>
                </div>
                <div className="text-3xl font-bold text-[#0F172A] mb-1">{dashboardData.botsActive}</div>
                <div className="text-sm text-gray-600">Bots Active</div>
                <div className="text-xs text-gray-400 mt-1">
                  {dashboardData.botsActive !== '0/0' ? 'From API' : 'No bots configured'}
                </div>
              </div>
            </div>

            {/* 🔴 Charts Section - الرسومات الحقيقية فقط */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              {/* Conversation Trends */}
              <div id="conversation-trends" className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-1">Conversation Trends</h3>
                    <p className="text-sm text-gray-600">Daily conversation volume over time</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setTimeRange('daily')}
                      className={`text-sm px-3 py-1.5 rounded-lg transition ${
                        timeRange === 'daily'
                          ? 'font-medium text-white bg-[#6366F1]'
                          : 'text-gray-600 hover:text-[#6366F1] hover:bg-gray-50'
                      }`}
                    >
                      Daily
                    </button>
                    <button
                      onClick={() => setTimeRange('weekly')}
                      className={`text-sm px-3 py-1.5 rounded-lg transition ${
                        timeRange === 'weekly'
                          ? 'font-medium text-white bg-[#6366F1]'
                          : 'text-gray-600 hover:text-[#6366F1] hover:bg-gray-50'
                      }`}
                    >
                      Weekly
                    </button>
                    <button
                      onClick={() => setTimeRange('monthly')}
                      className={`text-sm px-3 py-1.5 rounded-lg transition ${
                        timeRange === 'monthly'
                          ? 'font-medium text-white bg-[#6366F1]'
                          : 'text-gray-600 hover:text-[#6366F1] hover:bg-gray-50'
                      }`}
                    >
                      Monthly
                    </button>
                  </div>
                </div>
                <div id="conversation-chart" style={{ height: '320px' }}>
                  {hasConversationData ? (
                    <Plot
                      data={conversationChartData}
                      layout={getChartLayout('conversation', true)}
                      config={chartConfig}
                      style={{ width: '100%', height: '100%' }}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full">
                      <FontAwesomeIcon icon={faChartLine} className="text-4xl text-gray-300 mb-4" />
                      <p className="text-gray-500 mb-2">No conversation data available</p>
                      <p className="text-sm text-gray-400">Data will appear here when conversations occur</p>
                      <button
                        onClick={handleRefresh}
                        className="mt-4 text-sm text-[#6366F1] hover:text-[#8B5CF6] transition"
                      >
                        <FontAwesomeIcon icon={faArrowsRotate} className="mr-1" />
                        Refresh Data
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Bot Performance */}
              <div id="bot-performance" className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-[#0F172A]">Bot Performance</h3>
                  <span className="text-xs text-gray-500">
                    {dashboardData.botPerformances.length} bots
                  </span>
                </div>
                <div className="space-y-4">
                  {dashboardData.botPerformances.length > 0 ? (
                    dashboardData.botPerformances.map((bot) => (
                      <div
                        key={bot.id}
                        className={`flex items-center justify-between p-3 rounded-lg ${
                          bot.status === 'Inactive' 
                            ? 'bg-amber-50 rounded-lg border border-amber-200' 
                            : 'bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 bg-gradient-to-br ${getColorClass(bot.bgColor)} rounded-lg flex items-center justify-center`}>
                            <FontAwesomeIcon icon={getIconByName(bot.icon)} className="text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-[#0F172A] text-sm">{bot.name}</div>
                            <div className={`text-xs ${
                              bot.status === 'Inactive' ? 'text-amber-600' : 'text-gray-500'
                            }`}>
                              {bot.conversations > 0 ? `${bot.conversations} conversations` : bot.status || 'No activity'}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          {bot.successRate ? (
                            <>
                              <div className="text-sm font-bold text-green-600">{bot.successRate}</div>
                              <div className="text-xs text-gray-500">Success Rate</div>
                            </>
                          ) : (
                            <div className="text-xs text-amber-600 font-medium">
                              {bot.status || 'No data'}
                            </div>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <FontAwesomeIcon icon={faRobot} className="text-3xl mb-2 opacity-50" />
                      <p>No bot performance data available</p>
                      <p className="text-sm mt-1">Configure bots to see performance metrics</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 🔴 Charts Row 2 - بيانات حقيقية فقط */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Response Time Chart */}
              <div id="response-time-chart" className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-1">Response Time Analysis</h3>
                    <p className="text-sm text-gray-600">Average response time by hour</p>
                  </div>
                </div>
                <div id="response-time-plot" style={{ height: '280px' }}>
                  {hasResponseTimeData ? (
                    <Plot
                      data={responseTimeChartData}
                      layout={getChartLayout('responseTime', true)}
                      config={chartConfig}
                      style={{ width: '100%', height: '100%' }}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full">
                      <FontAwesomeIcon icon={faChartLine} className="text-4xl text-gray-300 mb-4" />
                      <p className="text-gray-500 mb-2">No response time data available</p>
                      <p className="text-sm text-gray-400">Data will appear when conversations occur</p>
                      <button
                        onClick={handleRefresh}
                        className="mt-4 text-sm text-[#6366F1] hover:text-[#8B5CF6] transition"
                      >
                        <FontAwesomeIcon icon={faArrowsRotate} className="mr-1" />
                        Refresh Data
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Engagement Sources */}
              <div id="engagement-sources" className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-1">Engagement Sources</h3>
                    <p className="text-sm text-gray-600">Conversation breakdown by platform</p>
                  </div>
                </div>
                <div id="engagement-pie-chart" style={{ height: '280px' }}>
                  {hasEngagementData ? (
                    <Plot
                      data={engagementChartData}
                      layout={getChartLayout('engagement', true)}
                      config={chartConfig}
                      style={{ width: '100%', height: '100%' }}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full">
                      <FontAwesomeIcon icon={faShareNodes} className="text-4xl text-gray-300 mb-4" />
                      <p className="text-gray-500 mb-2">No engagement data available</p>
                      <p className="text-sm text-gray-400">Connect platforms to see engagement sources</p>
                      <button
                        onClick={handleRefresh}
                        className="mt-4 text-sm text-[#6366F1] hover:text-[#8B5CF6] transition"
                      >
                        <FontAwesomeIcon icon={faArrowsRotate} className="mr-1" />
                        Refresh Data
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 🔴 Recent Activity - بيانات حقيقية فقط */}
            <div id="recent-activity" className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A]">Recent Activity</h3>
                  <p className="text-sm text-gray-600">Latest actions and events</p>
                </div>
                <span className="text-sm text-gray-500">
                  {dashboardData.recentActivities.length} activities
                </span>
              </div>
              <div className="space-y-4">
                {dashboardData.recentActivities.length > 0 ? (
                  dashboardData.recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-br ${getColorClass(activity.bgColor)} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <FontAwesomeIcon icon={getIconByName(activity.icon)} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-[#0F172A]">{activity.title}</span>
                          <span className="text-xs text-gray-500">{activity.time}</span>
                        </div>
                        <p className="text-sm text-gray-600">{activity.description}</p>
                        {activity.type && (
                          <span className="inline-block mt-1 text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                            {activity.type}
                          </span>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <FontAwesomeIcon icon={faComments} className="text-3xl mb-2 opacity-50" />
                    <p>No recent activities</p>
                    <p className="text-sm mt-1">Activity will appear here as it happens</p>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </AuthGuard>
  );
}