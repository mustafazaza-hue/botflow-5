// app/analytics/page.js
'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGlobe, faBell, faQuestionCircle, faDownload,
  faFilePdf, faMessage, faChartLine, faClock,
  faTrophy, faRobot, faEllipsisVertical
} from '@fortawesome/free-solid-svg-icons'
import { faBell as faBellRegular } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Sidebar from '@/components/Sidebar'

// Dynamic imports for charts to avoid SSR issues
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

export default function AnalyticsPage() {
  const [plotlyLoaded, setPlotlyLoaded] = useState(false)

  useEffect(() => {
    setPlotlyLoaded(true)
  }, [])

  const metrics = [
    {
      id: 'messages',
      value: '24,567',
      label: 'Total Messages',
      change: '+12.5%',
      changeColor: 'text-green-600',
      bgColor: 'from-blue-500 to-blue-600',
      icon: faMessage,
      iconColor: 'text-white'
    },
    {
      id: 'engagement',
      value: '78.4%',
      label: 'Engagement Rate',
      change: '+8.3%',
      changeColor: 'text-green-600',
      bgColor: 'from-purple-500 to-purple-600',
      icon: faChartLine,
      iconColor: 'text-white'
    },
    {
      id: 'response',
      value: '2.3min',
      label: 'Avg Response Time',
      change: '-15.2%',
      changeColor: 'text-green-600',
      bgColor: 'from-pink-500 to-pink-600',
      icon: faClock,
      iconColor: 'text-white'
    },
    {
      id: 'conversion',
      value: '34.2%',
      label: 'Conversion Rate',
      change: '+22.1%',
      changeColor: 'text-green-600',
      bgColor: 'from-green-500 to-green-600',
      icon: faTrophy,
      iconColor: 'text-white'
    }
  ]

  const topBots = [
    {
      id: 'bot-1',
      name: 'Product Inquiry Bot',
      conversations: '8,234',
      conversion: '42.3%',
      gradient: 'from-[#6366F1] to-[#8B5CF6]'
    },
    {
      id: 'bot-2',
      name: 'Order Tracking Bot',
      conversations: '6,891',
      conversion: '38.7%',
      gradient: 'from-[#8B5CF6] to-[#EC4899]'
    },
    {
      id: 'bot-3',
      name: 'FAQ Support Bot',
      conversations: '5,432',
      conversion: '35.1%',
      gradient: 'from-[#EC4899] to-[#6366F1]'
    },
    {
      id: 'bot-4',
      name: 'Lead Qualifier Bot',
      conversations: '4,123',
      conversion: '31.8%',
      gradient: 'from-blue-500 to-blue-600'
    }
  ]

  const topPages = [
    {
      id: 'page-1',
      name: 'TechStore Official',
      messages: '12,456',
      engagement: '82.3%',
      platform: 'facebook',
      bgColor: 'bg-blue-500'
    },
    {
      id: 'page-2',
      name: 'StyleHub Boutique',
      messages: '9,234',
      engagement: '76.8%',
      platform: 'instagram',
      bgColor: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    {
      id: 'page-3',
      name: 'RealtyPro Agency',
      messages: '7,891',
      engagement: '71.2%',
      platform: 'facebook',
      bgColor: 'bg-blue-500'
    },
    {
      id: 'page-4',
      name: 'FitLife Wellness',
      messages: '6,543',
      engagement: '68.5%',
      platform: 'instagram',
      bgColor: 'bg-gradient-to-br from-purple-500 to-pink-500'
    }
  ]

  // Chart data
  const messagesData = [{
    type: 'scatter',
    mode: 'lines',
    x: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    y: [3200, 3800, 4100, 3900, 4500, 3700, 4200],
    line: { color: '#6366F1', width: 3 },
    fill: 'tozeroy',
    fillcolor: 'rgba(99, 102, 241, 0.1)'
  }]

  const messagesLayout = {
    margin: { t: 20, r: 20, b: 40, l: 50 },
    plot_bgcolor: '#ffffff',
    paper_bgcolor: '#ffffff',
    xaxis: { gridcolor: '#f3f4f6' },
    yaxis: { gridcolor: '#f3f4f6' },
    showlegend: false
  }

  const engagementData = [{
    type: 'pie',
    labels: ['Facebook', 'Instagram', 'Messenger', 'WhatsApp'],
    values: [45, 30, 15, 10],
    marker: { colors: ['#1877F2', '#E4405F', '#0084FF', '#25D366'] },
    hole: 0.4
  }]

  const engagementLayout = {
    margin: { t: 20, r: 20, b: 20, l: 20 },
    plot_bgcolor: '#ffffff',
    paper_bgcolor: '#ffffff',
    showlegend: true,
    legend: { orientation: 'h', y: -0.1 }
  }

  const responseData = [{
    type: 'bar',
    x: ['<1min', '1-5min', '5-15min', '15-30min', '>30min'],
    y: [45, 30, 15, 7, 3],
    marker: { color: '#EC4899' }
  }]

  const responseLayout = {
    margin: { t: 20, r: 20, b: 40, l: 40 },
    plot_bgcolor: '#ffffff',
    paper_bgcolor: '#ffffff',
    xaxis: { gridcolor: '#f3f4f6' },
    yaxis: { gridcolor: '#f3f4f6', title: '%' },
    showlegend: false
  }

  const conversionData = [{
    type: 'funnel',
    y: ['Visitors', 'Engaged', 'Qualified', 'Converted'],
    x: [10000, 7840, 5230, 3420],
    marker: { color: ['#6366F1', '#8B5CF6', '#A855F7', '#EC4899'] }
  }]

  const conversionLayout = {
    margin: { t: 20, r: 20, b: 20, l: 120 },
    plot_bgcolor: '#ffffff',
    paper_bgcolor: '#ffffff',
    showlegend: false
  }

  const peakHoursData = [{
    type: 'heatmap',
    z: [[20, 30, 45, 60, 75, 85, 90, 95, 88, 82, 78, 70, 65, 72, 80, 85, 82, 75, 65, 50, 40, 35, 25, 20]],
    x: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
    y: ['Activity'],
    colorscale: [[0, '#F3F4F6'], [0.5, '#8B5CF6'], [1, '#6366F1']],
    showscale: true
  }]

  const peakHoursLayout = {
    margin: { t: 20, r: 20, b: 60, l: 80 },
    plot_bgcolor: '#ffffff',
    paper_bgcolor: '#ffffff',
    yaxis: { showticklabels: false }
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar Component */}
      <Sidebar activeItem="analytics" theme="dark" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-[#0F172A]">Analytics & Reports</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-[#6366F1] px-3 py-2 rounded-lg font-medium transition">
                <FontAwesomeIcon icon={faGlobe} className="mr-2" />EN
              </button>
              <button className="text-gray-600 hover:text-[#6366F1] p-2 rounded-lg transition">
                <FontAwesomeIcon icon={faBellRegular} className="text-xl" />
              </button>
              <button className="text-gray-600 hover:text-[#6366F1] p-2 rounded-lg transition">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-xl" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {/* Controls Section */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#6366F1]">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                  <option>This Month</option>
                  <option>Last Month</option>
                  <option>Custom Range</option>
                </select>
                <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#6366F1]">
                  <option>All Pages</option>
                  <option>Facebook - TechStore</option>
                  <option>Instagram - StyleHub</option>
                  <option>Facebook - RealtyPro</option>
                </select>
              </div>
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition">
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />Export CSV
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-lg font-semibold hover:shadow-lg transition">
                  <FontAwesomeIcon icon={faFilePdf} className="mr-2" />Export PDF
                </button>
              </div>
            </div>
          </div>

          {/* Metrics Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric) => (
              <div key={metric.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${metric.bgColor} rounded-lg flex items-center justify-center`}>
                    <FontAwesomeIcon icon={metric.icon} className={`${metric.iconColor} text-xl`} />
                  </div>
                  <span className="text-green-600 text-sm font-semibold bg-green-50 px-2 py-1 rounded">
                    {metric.change}
                  </span>
                </div>
                <div className="text-3xl font-bold text-[#0F172A] mb-1">{metric.value}</div>
                <div className="text-gray-600 text-sm font-medium">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* Messages Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[#0F172A]">Messages Over Time</h3>
                <select className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
              <div style={{ height: '300px' }}>
                {plotlyLoaded && (
                  <Plot
                    data={messagesData}
                    layout={messagesLayout}
                    style={{ width: '100%', height: '100%' }}
                    config={{ responsive: true, displayModeBar: false, displaylogo: false }}
                  />
                )}
              </div>
            </div>

            {/* Engagement Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[#0F172A]">Engagement by Channel</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </div>
              <div style={{ height: '300px' }}>
                {plotlyLoaded && (
                  <Plot
                    data={engagementData}
                    layout={engagementLayout}
                    style={{ width: '100%', height: '100%' }}
                    config={{ responsive: true, displayModeBar: false, displaylogo: false }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Response and Conversion Charts */}
          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            {/* Response Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#0F172A] mb-6">Response Time Distribution</h3>
              <div style={{ height: '280px' }}>
                {plotlyLoaded && (
                  <Plot
                    data={responseData}
                    layout={responseLayout}
                    style={{ width: '100%', height: '100%' }}
                    config={{ responsive: true, displayModeBar: false, displaylogo: false }}
                  />
                )}
              </div>
            </div>

            {/* Conversion Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[#0F172A]">Conversion Funnel</h3>
                <span className="text-sm text-gray-600">Last 30 Days</span>
              </div>
              <div style={{ height: '280px' }}>
                {plotlyLoaded && (
                  <Plot
                    data={conversionData}
                    layout={conversionLayout}
                    style={{ width: '100%', height: '100%' }}
                    config={{ responsive: true, displayModeBar: false, displaylogo: false }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Top Bots and Pages */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* Top Bots */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#0F172A] mb-6">Top Performing Bots</h3>
              <div className="space-y-4">
                {topBots.map((bot) => (
                  <div key={bot.id} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${bot.gradient} rounded-lg flex items-center justify-center`}>
                        <FontAwesomeIcon icon={faRobot} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#0F172A]">{bot.name}</div>
                        <div className="text-sm text-gray-500">{bot.conversations} conversations</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">{bot.conversion}</div>
                      <div className="text-xs text-gray-500">Conversion</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Pages */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#0F172A] mb-6">Top Performing Pages</h3>
              <div className="space-y-4">
                {topPages.map((page) => (
                  <div key={page.id} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${page.bgColor} rounded-lg flex items-center justify-center`}>
                        <FontAwesomeIcon 
                          icon={page.platform === 'facebook' ? faFacebook : faInstagram} 
                          className="text-white" 
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-[#0F172A]">{page.name}</div>
                        <div className="text-sm text-gray-500">{page.messages} messages</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-[#6366F1]">{page.engagement}</div>
                      <div className="text-xs text-gray-500">Engagement</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Peak Hours Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-[#0F172A]">Peak Activity Hours</h3>
              <span className="text-sm text-gray-600">Last 7 Days</span>
            </div>
            <div style={{ height: '300px' }}>
              {plotlyLoaded && (
                <Plot
                  data={peakHoursData}
                  layout={peakHoursLayout}
                  style={{ width: '100%', height: '100%' }}
                  config={{ responsive: true, displayModeBar: false, displaylogo: false }}
                />
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}