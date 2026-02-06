// app/analytics/page.js
'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGlobe, faBell, faQuestionCircle, faDownload,
  faFilePdf, faMessage, faChartLine, faClock,
  faTrophy, faRobot, faEllipsisVertical, faSpinner,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons'
import { faBell as faBellRegular } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Sidebar from '@/components/Sidebar'
import LoadingSpinner from '@/components/LoadingSpinner'
import { analyticsApi, formatChartData, formatMetrics, formatTopBots, formatTopPages } from '@/api/analytics'
import { authApi } from '@/api/auth'
import { showAlert } from '@/utils/sweetAlert'

// Dynamic imports for charts
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

// تنسيقات الرسوم البيانية
const chartLayouts = {
  messages: {
    margin: { t: 20, r: 20, b: 40, l: 50 },
    plot_bgcolor: '#ffffff',
    paper_bgcolor: '#ffffff',
    xaxis: { gridcolor: '#f3f4f6', title: 'Date' },
    yaxis: { gridcolor: '#f3f4f6', title: 'Messages' },
    showlegend: false
  },
  engagement: {
    margin: { t: 20, r: 20, b: 20, l: 20 },
    plot_bgcolor: '#ffffff',
    paper_bgcolor: '#ffffff',
    showlegend: true,
    legend: { orientation: 'h', y: -0.1 }
  },
  response: {
    margin: { t: 20, r: 20, b: 40, l: 40 },
    plot_bgcolor: '#ffffff',
    paper_bgcolor: '#ffffff',
    xaxis: { gridcolor: '#f3f4f6', title: 'Response Time' },
    yaxis: { gridcolor: '#f3f4f6', title: 'Percentage (%)' },
    showlegend: false
  },
  conversion: {
    margin: { t: 20, r: 20, b: 20, l: 120 },
    plot_bgcolor: '#ffffff',
    paper_bgcolor: '#ffffff',
    showlegend: false,
    yaxis: { title: 'Stage' },
    xaxis: { title: 'Count' }
  },
  peakHours: {
    margin: { t: 20, r: 20, b: 60, l: 80 },
    plot_bgcolor: '#ffffff',
    paper_bgcolor: '#ffffff',
    yaxis: { showticklabels: false },
    xaxis: { title: 'Hour of Day' }
  }
};

export default function AnalyticsPage() {
  const [plotlyLoaded, setPlotlyLoaded] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  // البيانات
  const [metrics, setMetrics] = useState([])
  const [topBots, setTopBots] = useState([])
  const [topPages, setTopPages] = useState([])
  const [charts, setCharts] = useState({
    messages: { data: [], isEmpty: true },
    engagement: { data: [], isEmpty: true },
    response: { data: [], isEmpty: true },
    conversion: { data: [], isEmpty: true },
    peakHours: { data: [], isEmpty: true }
  })
  
  // الفلترات
  const [filterPeriod, setFilterPeriod] = useState('Last7Days')

  useEffect(() => {
    setPlotlyLoaded(true)
    
    if (!authApi.isAuthenticated()) {
      showAlert.error("Authentication required", "Please login to access analytics")
      return
    }
    
    loadAnalyticsData()
  }, [])

  // تحميل البيانات
  const loadAnalyticsData = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const allData = await analyticsApi.getAllAnalyticsData({ period: filterPeriod })
      
      // تحديث البيانات
      setMetrics(formatMetrics(allData.metrics) || [])
      setTopBots(formatTopBots(allData.topBots) || [])
      setTopPages(formatTopPages(allData.topPages) || [])
      
      // تحديث الرسوم البيانية
      setCharts({
        messages: formatChartData.messages(allData.messagesChart),
        engagement: formatChartData.engagement(allData.engagementChart),
        response: formatChartData.responseTime(allData.responseTimeChart),
        conversion: formatChartData.conversion(allData.conversionChart),
        peakHours: formatChartData.peakHours(allData.timeSeries)
      })
      
    } catch (error) {
      console.error("Error loading analytics data:", error)
      setError("Failed to load analytics data. The API may be experiencing issues.")
      
      // تعيين كل شيء فارغ
      setMetrics([])
      setTopBots([])
      setTopPages([])
      setCharts({
        messages: { data: [], isEmpty: true },
        engagement: { data: [], isEmpty: true },
        response: { data: [], isEmpty: true },
        conversion: { data: [], isEmpty: true },
        peakHours: { data: [], isEmpty: true }
      })
      
    } finally {
      setLoading(false)
    }
  }

  // تغيير الفلتر
  const handleFilterChange = (value) => {
    setFilterPeriod(value)
    setTimeout(() => loadAnalyticsData(), 300)
  }

  // معالجة التصدير
  const handleExport = async (format) => {
    try {
      await analyticsApi.exportData({
        period: filterPeriod,
        format: format
      })
    } catch (error) {
      console.error("Export error:", error)
    }
  }

  // عرض رسوم بيانية فارغة
  const EmptyChart = ({ message }) => (
    <div className="flex flex-col items-center justify-center h-full p-8">
      <FontAwesomeIcon icon={faExclamationTriangle} className="text-4xl text-gray-400 mb-4" />
      <p className="text-gray-500 text-center">{message}</p>
    </div>
  )

  if (loading) {
    return <LoadingSpinner message="Loading analytics data..." />
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar activeItem="analytics" theme="dark" />

      <div className="flex-1 flex flex-col overflow-hidden ml-64">
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-[#0F172A]">Analytics & Reports</h1>
              {loading && (
                <FontAwesomeIcon icon={faSpinner} className="text-[#6366F1] animate-spin" />
              )}
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

        <main className="flex-1 overflow-y-auto p-8">
          {error && (
            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-yellow-600 mr-2" />
                <div>
                  <p className="text-yellow-800 font-medium">{error}</p>
                  <p className="text-yellow-600 text-sm mt-1">
                    Some data may not be available due to API limitations.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <select 
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  value={filterPeriod}
                  onChange={(e) => handleFilterChange(e.target.value)}
                >
                  <option value="Last7Days">Last 7 Days</option>
                  <option value="Last30Days">Last 30 Days</option>
                  <option value="Last90Days">Last 90 Days</option>
                  <option value="ThisMonth">This Month</option>
                  <option value="LastMonth">Last Month</option>
                </select>
              </div>
              <div className="flex items-center space-x-3">
                <button 
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
                  onClick={() => handleExport('csv')}
                  disabled={loading}
                >
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />Export CSV
                </button>
                <button 
                  className="px-4 py-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-lg font-semibold hover:shadow-lg transition"
                  onClick={() => handleExport('pdf')}
                  disabled={loading}
                >
                  <FontAwesomeIcon icon={faFilePdf} className="mr-2" />Export PDF
                </button>
              </div>
            </div>
          </div>

          {/* المقاييس */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.length > 0 ? (
              metrics.map((metric) => (
                <div key={metric.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${metric.bgColor} rounded-lg flex items-center justify-center`}>
                      <FontAwesomeIcon icon={metric.icon} className="text-white text-xl" />
                    </div>
                    <span className={`${metric.changeColor} text-sm font-semibold px-2 py-1 rounded`}>
                      {metric.change}
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-[#0F172A] mb-1">{metric.value}</div>
                  <div className="text-gray-600 text-sm font-medium">{metric.label}</div>
                </div>
              ))
            ) : (
              <div className="col-span-4 text-center py-8 text-gray-500">
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-2xl mb-2" />
                <p>No metrics data available</p>
              </div>
            )}
          </div>

          {/* الرسوم البيانية */}
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
                {plotlyLoaded && !charts.messages.isEmpty ? (
                  <Plot
                    data={charts.messages.data}
                    layout={chartLayouts.messages}
                    style={{ width: '100%', height: '100%' }}
                    config={{ responsive: true, displayModeBar: false, displaylogo: false }}
                  />
                ) : (
                  <EmptyChart message="No messages data available" />
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
                {plotlyLoaded && !charts.engagement.isEmpty ? (
                  <Plot
                    data={charts.engagement.data}
                    layout={chartLayouts.engagement}
                    style={{ width: '100%', height: '100%' }}
                    config={{ responsive: true, displayModeBar: false, displaylogo: false }}
                  />
                ) : (
                  <EmptyChart message="No engagement data available" />
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
                {plotlyLoaded && !charts.response.isEmpty ? (
                  <Plot
                    data={charts.response.data}
                    layout={chartLayouts.response}
                    style={{ width: '100%', height: '100%' }}
                    config={{ responsive: true, displayModeBar: false, displaylogo: false }}
                  />
                ) : (
                  <EmptyChart message="No response time data available" />
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
                {plotlyLoaded && !charts.conversion.isEmpty ? (
                  <Plot
                    data={charts.conversion.data}
                    layout={chartLayouts.conversion}
                    style={{ width: '100%', height: '100%' }}
                    config={{ responsive: true, displayModeBar: false, displaylogo: false }}
                  />
                ) : (
                  <EmptyChart message="No conversion data available" />
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
                {topBots.length > 0 ? (
                  topBots.map((bot) => (
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
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <FontAwesomeIcon icon={faRobot} className="text-2xl mb-2" />
                    <p>No bot data available</p>
                  </div>
                )}
              </div>
            </div>

            {/* Top Pages */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#0F172A] mb-6">Top Performing Pages</h3>
              <div className="space-y-4">
                {topPages.length > 0 ? (
                  topPages.map((page) => (
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
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <FontAwesomeIcon icon={faFacebook} className="text-2xl mb-2" />
                    <p>No page data available</p>
                  </div>
                )}
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
              {plotlyLoaded && !charts.peakHours.isEmpty ? (
                <Plot
                  data={charts.peakHours.data}
                  layout={chartLayouts.peakHours}
                  style={{ width: '100%', height: '100%' }}
                  config={{ responsive: true, displayModeBar: false, displaylogo: false }}
                />
              ) : (
                <EmptyChart message="No activity data available" />
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}