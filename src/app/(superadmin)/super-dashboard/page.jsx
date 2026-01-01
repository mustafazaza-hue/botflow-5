'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLanguage,
  faBell,
  faQuestionCircle,
  faChevronDown,
  faSearch,
  faDownload,
  faEllipsisVertical,
  faUsers,
  faCheckCircle,
  faDollarSign,
  faRobot,
  faChartLine,
  faComments,
  faChartPie,
  faCog,
  faShieldHalved,
  faPlug,
  faCrown
} from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-regular-svg-icons'

// ديناميكي استيراد Plotly لتجنب مشاكل SSR
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#6366f1] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  // بيانات الرسوم البيانية
  const revenueChartData = [{
    type: 'scatter',
    mode: 'lines',
    fill: 'tozeroy',
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    y: [85000, 92000, 88000, 95000, 102000, 108000, 112000, 115000, 118000, 122000, 124800, 130000],
    line: { color: '#6366f1', width: 3 },
    fillcolor: 'rgba(99, 102, 241, 0.1)'
  }]

  const subscriptionChartData = [{
    type: 'pie',
    labels: ['Business', 'Pro', 'Starter', 'Trial'],
    values: [842, 1156, 623, 226],
    marker: { colors: ['#8b5cf6', '#6366f1', '#94a3b8', '#fbbf24'] },
    textinfo: 'label+percent',
    textposition: 'inside',
    hovertemplate: '<b>%{label}</b><br>%{value} subscribers<br>%{percent}<extra></extra>'
  }]

  const activityChartData = [{
    type: 'bar',
    x: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    y: [12400, 15200, 14800, 16900, 18200, 11500, 9800],
    marker: { color: '#ec4899' }
  }]

  const chartLayouts = {
    revenue: {
      margin: { t: 20, r: 20, b: 40, l: 60 },
      plot_bgcolor: '#ffffff',
      paper_bgcolor: '#ffffff',
      showlegend: false,
      xaxis: { gridcolor: '#f3f4f6' },
      yaxis: { gridcolor: '#f3f4f6', tickformat: '$,.0f' }
    },
    subscription: {
      margin: { t: 20, r: 20, b: 20, l: 20 },
      plot_bgcolor: '#ffffff',
      paper_bgcolor: '#ffffff',
      showlegend: false
    },
    activity: {
      margin: { t: 20, r: 20, b: 40, l: 60 },
      plot_bgcolor: '#ffffff',
      paper_bgcolor: '#ffffff',
      showlegend: false,
      xaxis: { gridcolor: '#f3f4f6' },
      yaxis: { gridcolor: '#f3f4f6', title: 'Messages' }
    }
  }

  const chartConfig = {
    responsive: true,
    displayModeBar: false,
    displaylogo: false
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-[#1e293b] to-gray-900 text-white flex flex-col">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-lg flex items-center justify-center">
              <FontAwesomeIcon icon={faCrown} className="text-white text-lg" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Super Admin</h1>
              <p className="text-xs text-gray-400">System Control</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-1">
            <a href="#" className="flex items-center px-4 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-lg text-white shadow-lg">
              <FontAwesomeIcon icon={faChartLine} className="mr-3" />
              <span className="font-medium">Overview</span>
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
              <FontAwesomeIcon icon={faUsers} className="mr-3" />
              <span>All Subscribers</span>
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
              <FontAwesomeIcon icon={faCreditCard} className="mr-3" />
              <span>Billing & Revenue</span>
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
              <FontAwesomeIcon icon={faRobot} className="mr-3" />
              <span>System Bots</span>
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
              <FontAwesomeIcon icon={faComments} className="mr-3" />
              <span>All Conversations</span>
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
              <FontAwesomeIcon icon={faChartPie} className="mr-3" />
              <span>Analytics</span>
            </a>
          </div>
          
          <div className="mt-8">
            <p className="text-xs font-semibold text-gray-500 uppercase px-4 mb-2">System Management</p>
            <div className="space-y-1">
              <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
                <FontAwesomeIcon icon={faCog} className="mr-3" />
                <span>System Settings</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
                <FontAwesomeIcon icon={faShieldHalved} className="mr-3" />
                <span>Security & Logs</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
                <FontAwesomeIcon icon={faPlug} className="mr-3" />
                <span>Integrations</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
                <FontAwesomeIcon icon={faBell} className="mr-3" />
                <span>Notifications</span>
              </a>
            </div>
          </div>
        </nav>
        
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center space-x-3 px-4 py-3 bg-gray-800 rounded-lg">
            <img 
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg" 
              alt="Admin" 
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <p className="font-medium text-sm">John Mitchell</p>
              <p className="text-xs text-gray-400">System Admin</p>
            </div>
            <button className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-8 py-4 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Platform Overview</h2>
              <p className="text-sm text-gray-500 mt-1">System-wide analytics and subscriber management</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition flex items-center space-x-2">
                  <FontAwesomeIcon icon={faLanguage} />
                  <span>EN</span>
                  <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
                </button>
              </div>
              <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition">
                <FontAwesomeIcon icon={faBell} className="text-xl" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-xl" />
              </button>
            </div>
          </div>
        </header>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faUsers} className="text-2xl" />
                </div>
                <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">+12.5%</span>
              </div>
              <h3 className="text-3xl font-bold mb-1">2,847</h3>
              <p className="text-sm text-white text-opacity-80">Total Subscribers</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-2xl text-green-600" />
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">+8.2%</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">2,634</h3>
              <p className="text-sm text-gray-500">Active Accounts</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#ec4899] bg-opacity-10 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faDollarSign} className="text-2xl text-[#ec4899]" />
                </div>
                <span className="text-xs bg-[#ec4899] bg-opacity-10 text-[#ec4899] px-2 py-1 rounded">+18.7%</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">$124.8K</h3>
              <p className="text-sm text-gray-500">Monthly Revenue</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faRobot} className="text-2xl text-orange-600" />
                </div>
                <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">+24.1%</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">8,492</h3>
              <p className="text-sm text-gray-500">Active Bots</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
                  <p className="text-sm text-gray-500">Monthly recurring revenue trend</p>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-[#6366f1] text-white text-sm rounded-lg">Month</button>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200">Year</button>
                </div>
              </div>
              <div style={{ height: '320px' }}>
                <Plot
                  data={revenueChartData}
                  layout={chartLayouts.revenue}
                  config={chartConfig}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Subscription Plans</h3>
              <div style={{ height: '320px' }}>
                <Plot
                  data={subscriptionChartData}
                  layout={chartLayouts.subscription}
                  config={chartConfig}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">User Activity</h3>
                <button className="text-[#6366f1] hover:text-[#8b5cf6] text-sm font-medium">View All</button>
              </div>
              <div style={{ height: '280px' }}>
                <Plot
                  data={activityChartData}
                  layout={chartLayouts.activity}
                  config={chartConfig}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">System Performance</h3>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Healthy</span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">API Response Time</span>
                    <span className="text-sm font-semibold text-gray-900">124ms</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Server Uptime</span>
                    <span className="text-sm font-semibold text-gray-900">99.98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#6366f1] h-2 rounded-full" style={{ width: '99.98%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Database Load</span>
                    <span className="text-sm font-semibold text-gray-900">62%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '62%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Bot Success Rate</span>
                    <span className="text-sm font-semibold text-gray-900">94.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#ec4899] h-2 rounded-full" style={{ width: '94.2%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Recent Subscribers</h3>
                  <p className="text-sm text-gray-500 mt-1">Latest platform subscriptions</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <FontAwesomeIcon 
                      icon={faSearch} 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                    />
                    <input 
                      type="text" 
                      placeholder="Search..." 
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
                    />
                  </div>
                  <button className="px-4 py-2 bg-[#6366f1] text-white rounded-lg hover:bg-[#8b5cf6] transition text-sm font-medium">
                    <FontAwesomeIcon icon={faDownload} className="mr-2" />
                    Export
                  </button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Subscriber</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Plan</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Bots</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Revenue</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Joined</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img 
                          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" 
                          alt="" 
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <p className="font-medium text-gray-900">Sarah Johnson</p>
                          <p className="text-sm text-gray-500">sarah@techcorp.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">Business</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        <span className="text-green-700 font-medium">Active</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">12</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">$299/mo</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Dec 15, 2024</td>
                    <td className="px-6 py-4">
                      <button className="text-gray-400 hover:text-gray-600">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img 
                          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" 
                          alt="" 
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <p className="font-medium text-gray-900">Michael Chen</p>
                          <p className="text-sm text-gray-500">m.chen@startup.io</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">Pro</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        <span className="text-green-700 font-medium">Active</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">8</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">$149/mo</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Dec 14, 2024</td>
                    <td className="px-6 py-4">
                      <button className="text-gray-400 hover:text-gray-600">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img 
                          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" 
                          alt="" 
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <p className="font-medium text-gray-900">Emma Williams</p>
                          <p className="text-sm text-gray-500">emma.w@agency.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">Business</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        <span className="text-yellow-700 font-medium">Trial</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">5</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">$0/mo</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Dec 13, 2024</td>
                    <td className="px-6 py-4">
                      <button className="text-gray-400 hover:text-gray-600">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img 
                          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" 
                          alt="" 
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <p className="font-medium text-gray-900">David Martinez</p>
                          <p className="text-sm text-gray-500">david@ecommerce.co</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">Starter</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        <span className="text-green-700 font-medium">Active</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">3</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">$49/mo</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Dec 12, 2024</td>
                    <td className="px-6 py-4">
                      <button className="text-gray-400 hover:text-gray-600">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img 
                          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg" 
                          alt="" 
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <p className="font-medium text-gray-900">Lisa Anderson</p>
                          <p className="text-sm text-gray-500">lisa@realestate.net</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">Pro</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        <span className="text-red-700 font-medium">Suspended</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">6</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">$149/mo</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Dec 10, 2024</td>
                    <td className="px-6 py-4">
                      <button className="text-gray-400 hover:text-gray-600">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <p className="text-sm text-gray-500">Showing 1 to 5 of 2,847 subscribers</p>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">Previous</button>
                <button className="px-3 py-1 bg-[#6366f1] text-white rounded-lg text-sm">1</button>
                <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">2</button>
                <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">3</button>
                <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">Next</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}