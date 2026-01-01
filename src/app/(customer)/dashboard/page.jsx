'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRobot, faChartLine, faComments, faShareNodes,
  faBullhorn, faUsers, faCreditCard, faChartBar,
  faFileLines, faBook, faGear, faRocket,
  faTimes, faBell, faGlobe, faChevronDown,
  faCircleQuestion, faCalendar, faFilter,
  faArrowsRotate, faDownload, faTriangleExclamation,
  faArrowUp, faCheck, faComment, faPlus,
  faCog, faWrench, faEllipsisVertical,
  faSpinner
} from '@fortawesome/free-solid-svg-icons'
import { faBell as faBellRegular, faCalendar as faCalendarRegular } from '@fortawesome/free-regular-svg-icons'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

// ديناميكي استيراد Plotly لتجنب مشاكل SSR
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState('weekly')
  const [isLoading, setIsLoading] = useState(true)

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
        badge: 12,
        path: '/conversations'
      },
      {
        id: 'pages',
        name: 'Pages',
        icon: faShareNodes,
        active: false,
        path: '/pages'
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
  }

  const keyMetrics = [
    {
      id: 'active-pages',
      value: '8',
      label: 'Active Pages',
      change: '+12%',
      changeColor: 'text-green-600',
      bgColor: 'from-blue-500 to-blue-600',
      icon: faShareNodes
    },
    {
      id: 'conversations',
      value: '247',
      label: 'Conversations Today',
      change: '+28%',
      changeColor: 'text-green-600',
      bgColor: 'from-purple-500 to-purple-600',
      icon: faComments
    },
    {
      id: 'response-rate',
      value: '94.2%',
      label: 'Response Rate',
      change: '+8%',
      changeColor: 'text-green-600',
      bgColor: 'from-green-500 to-green-600',
      icon: faChartLine
    },
    {
      id: 'bots-active',
      value: '12/14',
      label: 'Bots Active',
      change: 'Active',
      changeColor: 'text-green-600',
      bgColor: 'from-pink-500 to-pink-600',
      icon: faRobot
    }
  ]

  const botPerformance = [
    {
      id: 'ecommerce-bot',
      name: 'E-commerce Bot',
      conversations: 152,
      successRate: '98%',
      bgColor: 'from-blue-500 to-blue-600',
      icon: faRobot
    },
    {
      id: 'support-bot',
      name: 'Support Bot',
      conversations: 89,
      successRate: '95%',
      bgColor: 'from-purple-500 to-purple-600',
      icon: faRobot
    },
    {
      id: 'lead-gen-bot',
      name: 'Lead Gen Bot',
      conversations: 64,
      successRate: '92%',
      bgColor: 'from-pink-500 to-pink-600',
      icon: faRobot
    },
    {
      id: 'faq-bot',
      name: 'FAQ Bot',
      conversations: 0,
      status: 'Inactive',
      bgColor: 'from-amber-500 to-amber-600',
      icon: faRobot
    }
  ]

  const recentActivity = [
    {
      id: 'new-conversation',
      title: 'New conversation started',
      time: '2 min ago',
      description: 'Customer inquiry about product availability on Instagram',
      bgColor: 'from-blue-500 to-blue-600',
      icon: faComment
    },
    {
      id: 'bot-handled',
      title: 'Bot successfully handled query',
      time: '15 min ago',
      description: 'E-commerce Bot resolved shipping question automatically',
      bgColor: 'from-green-500 to-green-600',
      icon: faRobot
    },
    {
      id: 'new-page',
      title: 'New page connected',
      time: '1 hour ago',
      description: 'Facebook page "Fashion Store" successfully integrated',
      bgColor: 'from-purple-500 to-purple-600',
      icon: faShareNodes
    },
    {
      id: 'daily-report',
      title: 'Daily report generated',
      time: '3 hours ago',
      description: 'Your daily analytics report is ready for review',
      bgColor: 'from-pink-500 to-pink-600',
      icon: faChartLine
    }
  ]

  const conversationChartData = [
    {
      type: 'scatter',
      mode: 'lines',
      name: 'Conversations',
      x: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      y: [180, 220, 195, 247, 230, 210, 240],
      line: { color: '#6366F1', width: 3 },
      fill: 'tozeroy',
      fillcolor: 'rgba(99, 102, 241, 0.1)'
    }
  ]

  const responseTimeData = [
    {
      type: 'bar',
      x: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
      y: [2.5, 1.8, 3.2, 4.5, 3.8, 2.9],
      marker: { 
        color: ['#8B5CF6', '#8B5CF6', '#8B5CF6', '#EC4899', '#8B5CF6', '#8B5CF6']
      }
    }
  ]

  const engagementData = [
    {
      type: 'pie',
      labels: ['Facebook', 'Instagram', 'Direct Messages', 'Comments'],
      values: [45, 30, 15, 10],
      marker: {
        colors: ['#6366F1', '#8B5CF6', '#EC4899', '#F59E0B']
      },
      hole: 0.4,
      textinfo: 'label+percent',
      textposition: 'outside'
    }
  ]

  const chartLayouts = {
    conversation: {
      margin: { t: 20, r: 20, b: 40, l: 50 },
      plot_bgcolor: '#ffffff',
      paper_bgcolor: '#ffffff',
      xaxis: { 
        showgrid: false,
        zeroline: false
      },
      yaxis: { 
        showgrid: true,
        gridcolor: '#f3f4f6',
        zeroline: false
      },
      showlegend: false
    },
    responseTime: {
      margin: { t: 20, r: 20, b: 40, l: 50 },
      plot_bgcolor: '#ffffff',
      paper_bgcolor: '#ffffff',
      xaxis: { 
        showgrid: false,
        title: 'Time of Day'
      },
      yaxis: { 
        showgrid: true,
        gridcolor: '#f3f4f6',
        title: 'Minutes'
      },
      showlegend: false
    },
    engagement: {
      margin: { t: 20, r: 20, b: 20, l: 20 },
      plot_bgcolor: '#ffffff',
      paper_bgcolor: '#ffffff',
      showlegend: false
    }
  }

  const chartConfig = {
    responsive: true,
    displayModeBar: false,
    displaylogo: false
  }

  useEffect(() => {
    // محاكاة تحميل البيانات
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <FontAwesomeIcon icon={faSpinner} className="text-[#6366F1] text-4xl animate-spin mb-4" />
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
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
                <div className="text-sm font-semibold text-[#0F172A]">John Smith</div>
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
                    {item.badge && (
                      <span className="ml-auto bg-[#EC4899] text-white text-xs px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
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
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-[#6366F1] transition">
                <FontAwesomeIcon icon={faBellRegular} className="text-xl" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#EC4899] rounded-full"></span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-[#6366F1] transition px-3 py-2 rounded-lg">
                <FontAwesomeIcon icon={faGlobe} />
                <span className="font-medium">EN</span>
                <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
              </button>
              <button className="text-gray-600 hover:text-[#6366F1] transition p-2">
                <FontAwesomeIcon icon={faCircleQuestion} className="text-xl" />
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
                <button className="text-gray-600 hover:text-[#6366F1] transition p-2">
                  <FontAwesomeIcon icon={faArrowsRotate} />
                </button>
                <button className="flex items-center space-x-2 bg-[#6366F1] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#8B5CF6] transition">
                  <FontAwesomeIcon icon={faDownload} />
                  <span>Export</span>
                </button>
              </div>
            </div>
          </div>

          {/* Alert Section */}
          <div id="alerts-section" className="mb-6">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4 flex items-start space-x-4">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FontAwesomeIcon icon={faTriangleExclamation} className="text-amber-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-amber-900 mb-1">Bot Status Alert</h4>
                <p className="text-sm text-amber-700">
                  2 bots are currently inactive. Review and activate them to maintain engagement.
                </p>
              </div>
              <button className="text-amber-600 hover:text-amber-700 transition">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>

          {/* Key Metrics */}
          <div id="key-metrics" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {keyMetrics.map((metric) => (
              <div key={metric.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${metric.bgColor} rounded-lg flex items-center justify-center`}>
                    <FontAwesomeIcon icon={metric.icon} className="text-white text-xl" />
                  </div>
                  <span className={`text-xs font-medium ${metric.changeColor} bg-green-50 px-2 py-1 rounded-full`}>
                    <FontAwesomeIcon icon={faArrowUp} className="mr-1" />
                    {metric.change}
                  </span>
                </div>
                <div className="text-3xl font-bold text-[#0F172A] mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
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
                <Plot
                  data={conversationChartData}
                  layout={chartLayouts.conversation}
                  config={chartConfig}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>

            {/* Bot Performance */}
            <div id="bot-performance" className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-[#0F172A] mb-4">Bot Performance</h3>
              <div className="space-y-4">
                {botPerformance.map((bot) => (
                  <div
                    key={bot.id}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      bot.id === 'faq-bot' ? 'bg-amber-50 rounded-lg border border-amber-200' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${bot.bgColor} rounded-lg flex items-center justify-center`}>
                        <FontAwesomeIcon icon={bot.icon} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#0F172A] text-sm">{bot.name}</div>
                        <div className={`text-xs ${bot.id === 'faq-bot' ? 'text-amber-600' : 'text-gray-500'}`}>
                          {bot.conversations > 0 ? `${bot.conversations} conversations` : 'Inactive'}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      {bot.successRate ? (
                        <>
                          <div className="text-sm font-bold text-green-600">{bot.successRate}</div>
                          <div className="text-xs text-gray-500">Success</div>
                        </>
                      ) : (
                        <button className="text-xs font-semibold text-amber-600 hover:text-amber-700">
                          Activate
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Charts Row 2 */}
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
                <Plot
                  data={responseTimeData}
                  layout={chartLayouts.responseTime}
                  config={chartConfig}
                  style={{ width: '100%', height: '100%' }}
                />
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
                <Plot
                  data={engagementData}
                  layout={chartLayouts.engagement}
                  config={chartConfig}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div id="recent-activity" className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-[#0F172A]">Recent Activity</h3>
              <button className="text-sm text-[#6366F1] font-medium hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${activity.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <FontAwesomeIcon icon={activity.icon} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-[#0F172A]">{activity.title}</span>
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}