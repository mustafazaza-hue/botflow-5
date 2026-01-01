'use client'

import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCrown,
  faChartLine,
  faUsers,
  faCreditCard,
  faRobot,
  faComments,
  faChartPie,
  faCog,
  faShieldHalved,
  faPlug,
  faBell,
  faEllipsisVertical,
  faLanguage,
  faChevronDown,
  faQuestionCircle,
  faCalendarDays,
  faUsers as faUsersSolid,
  faCheckCircle,
  faGaugeHigh,
  faDollarSign,
  faCommentDots,
  faPaperPlane,
  faBrain,
  faServer,
  faDatabase,
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'



export default function KPIAnalyticsPage() {
  useEffect(() => {
    // تحميل Plotly script ديناميكيًا
    const script = document.createElement('script');
    script.src = 'https://cdn.plot.ly/plotly-3.1.1.min.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      try {
        const userGrowthData = [{
          type: 'scatter',
          mode: 'lines',
          x: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          y: [2420, 2567, 2698, 2847],
          line: { color: '#6366f1', width: 3 },
          marker: { size: 8, color: '#6366f1' }
        }];
        
        const userGrowthLayout = {
          margin: { t: 20, r: 20, b: 40, l: 60 },
          plot_bgcolor: '#ffffff',
          paper_bgcolor: '#ffffff',
          showlegend: false,
          xaxis: { gridcolor: '#f3f4f6' },
          yaxis: { gridcolor: '#f3f4f6', title: 'Total Users' }
        };
        
        window.Plotly.newPlot('user-growth-chart', userGrowthData, userGrowthLayout, {
          responsive: true, 
          displayModeBar: false, 
          displaylogo: false
        });
      } catch(e) {
        const element = document.getElementById('user-growth-chart');
        if (element) {
          element.innerHTML = '<div class="flex items-center justify-center h-full text-gray-400">Chart loading error</div>';
        }
      }

      try {
        const subscriptionData = [{
          type: 'pie',
          labels: ['Active', 'Trial', 'Suspended', 'Expired'],
          values: [2634, 142, 48, 23],
          marker: { colors: ['#10b981', '#fbbf24', '#f97316', '#ef4444'] },
          textinfo: 'label+percent',
          textposition: 'inside',
          hovertemplate: '<b>%{label}</b><br>%{value} subscriptions<br>%{percent}<extra></extra>'
        }];
        
        const subscriptionLayout = {
          margin: { t: 20, r: 20, b: 20, l: 20 },
          plot_bgcolor: '#ffffff',
          paper_bgcolor: '#ffffff',
          showlegend: false
        };
        
        window.Plotly.newPlot('subscription-status-chart', subscriptionData, subscriptionLayout, {
          responsive: true, 
          displayModeBar: false, 
          displaylogo: false
        });
      } catch(e) {
        const element = document.getElementById('subscription-status-chart');
        if (element) {
          element.innerHTML = '<div class="flex items-center justify-center h-full text-gray-400">Chart loading error</div>';
        }
      }

      try {
        const apiUsageData = [
          {
            type: 'bar',
            name: 'UX Pilot',
            x: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            y: [22400, 24800, 23600, 26200, 28400, 21200, 19600],
            marker: { color: '#14b8a6' }
          },
          {
            type: 'bar',
            name: 'WhatsApp',
            x: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            y: [12800, 14200, 13400, 15600, 16800, 11400, 10200],
            marker: { color: '#10b981' }
          }
        ];
        
        const apiUsageLayout = {
          margin: { t: 20, r: 20, b: 40, l: 60 },
          plot_bgcolor: '#ffffff',
          paper_bgcolor: '#ffffff',
          barmode: 'group',
          xaxis: { gridcolor: '#f3f4f6' },
          yaxis: { gridcolor: '#f3f4f6', title: 'API Calls' }
        };
        
        window.Plotly.newPlot('api-usage-chart', apiUsageData, apiUsageLayout, {
          responsive: true, 
          displayModeBar: false, 
          displaylogo: false
        });
      } catch(e) {
        const element = document.getElementById('api-usage-chart');
        if (element) {
          element.innerHTML = '<div class="flex items-center justify-center h-full text-gray-400">Chart loading error</div>';
        }
      }

      try {
        const responseTimeData = [{
          type: 'scatter',
          mode: 'lines',
          fill: 'tozeroy',
          x: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
          y: [118, 122, 128, 135, 142, 131, 124],
          line: { color: '#f97316', width: 3 },
          fillcolor: 'rgba(249, 115, 22, 0.1)'
        }];
        
        const responseTimeLayout = {
          margin: { t: 20, r: 20, b: 40, l: 60 },
          plot_bgcolor: '#ffffff',
          paper_bgcolor: '#ffffff',
          showlegend: false,
          xaxis: { gridcolor: '#f3f4f6', title: 'Time' },
          yaxis: { gridcolor: '#f3f4f6', title: 'Response Time (ms)' }
        };
        
        window.Plotly.newPlot('response-time-chart', responseTimeData, responseTimeLayout, {
          responsive: true, 
          displayModeBar: false, 
          displaylogo: false
        });
      } catch(e) {
        const element = document.getElementById('response-time-chart');
        if (element) {
          element.innerHTML = '<div class="flex items-center justify-center h-full text-gray-400">Chart loading error</div>';
        }
      }

      try {
        const messageVolumeData = [
          {
            type: 'scatter',
            mode: 'lines',
            name: 'Comments',
            x: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            y: [2640, 2890, 2760, 3120, 3340, 2480, 2260],
            line: { color: '#3b82f6', width: 3 }
          },
          {
            type: 'scatter',
            mode: 'lines',
            name: 'Messages',
            x: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            y: [6120, 6740, 6280, 7180, 7620, 5640, 5140],
            line: { color: '#8b5cf6', width: 3 }
          }
        ];
        
        const messageVolumeLayout = {
          margin: { t: 20, r: 20, b: 40, l: 60 },
          plot_bgcolor: '#ffffff',
          paper_bgcolor: '#ffffff',
          xaxis: { gridcolor: '#f3f4f6' },
          yaxis: { gridcolor: '#f3f4f6', title: 'Volume' }
        };
        
        window.Plotly.newPlot('message-volume-chart', messageVolumeData, messageVolumeLayout, {
          responsive: true, 
          displayModeBar: false, 
          displaylogo: false
        });
      } catch(e) {
        const element = document.getElementById('message-volume-chart');
        if (element) {
          element.innerHTML = '<div class="flex items-center justify-center h-full text-gray-400">Chart loading error</div>';
        }
      }
    };

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

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
            <a href="/super-dashboard" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
              <FontAwesomeIcon icon={faChartLine} className="mr-3" />
              <span>Overview</span>
            </a>
            <a href="/user-management" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
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
            <a href="kpi" className="flex items-center px-4 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-lg text-white shadow-lg">
              <FontAwesomeIcon icon={faChartPie} className="mr-3" />
              <span className="font-medium">Analytics</span>
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
              <h2 className="text-2xl font-bold text-gray-900">System KPI Analytics</h2>
              <p className="text-sm text-gray-500 mt-1">Real-time performance metrics and operational insights</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCalendarDays} />
                  <span>Last 30 Days</span>
                  <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
                </button>
              </div>
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
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faUsersSolid} className="text-white text-xl" />
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">+12.3%</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">2,847</h3>
              <p className="text-sm text-gray-500 mb-2">Total Users</p>
              <div className="flex items-center text-xs text-gray-400">
                <FontAwesomeIcon icon={faChevronDown} className="text-green-500 mr-1 rotate-180" />
                <span>348 vs previous period</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-white text-xl" />
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">+8.7%</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">2,634</h3>
              <p className="text-sm text-gray-500 mb-2">Active Subscriptions</p>
              <div className="flex items-center text-xs text-gray-400">
                <FontAwesomeIcon icon={faChevronDown} className="text-green-500 mr-1 rotate-180" />
                <span>211 vs previous period</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faGaugeHigh} className="text-white text-xl" />
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">-15ms</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">124ms</h3>
              <p className="text-sm text-gray-500 mb-2">Avg Response Time</p>
              <div className="flex items-center text-xs text-gray-400">
                <FontAwesomeIcon icon={faChevronDown} className="text-green-500 mr-1" />
                <span>Improved performance</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ec4899] to-pink-600 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faDollarSign} className="text-white text-xl" />
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">+18.2%</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">$124.8K</h3>
              <p className="text-sm text-gray-500 mb-2">Total Revenue</p>
              <div className="flex items-center text-xs text-gray-400">
                <FontAwesomeIcon icon={faChevronDown} className="text-green-500 mr-1 rotate-180" />
                <span>$19.2K vs previous period</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faCommentDots} className="text-blue-600 text-xl" />
                </div>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">+24.5%</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">18,492</h3>
              <p className="text-sm text-gray-500 mb-2">Total Comments</p>
              <div className="flex items-center text-xs text-gray-400">
                <FontAwesomeIcon icon={faChevronDown} className="text-green-500 mr-1 rotate-180" />
                <span>3,642 vs previous period</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faPaperPlane} className="text-purple-600 text-xl" />
                </div>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">+31.2%</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">42,856</h3>
              <p className="text-sm text-gray-500 mb-2">Messages Sent</p>
              <div className="flex items-center text-xs text-gray-400">
                <FontAwesomeIcon icon={faChevronDown} className="text-green-500 mr-1 rotate-180" />
                <span>10,184 vs previous period</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faBrain} className="text-teal-600 text-xl" />
                </div>
                <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full font-medium">+19.8%</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">156.2K</h3>
              <p className="text-sm text-gray-500 mb-2">UX Pilot API Calls</p>
              <div className="flex items-center text-xs text-gray-400">
                <FontAwesomeIcon icon={faChevronDown} className="text-green-500 mr-1 rotate-180" />
                <span>25,847 vs previous period</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-green-600 text-xl" />
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">+27.4%</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">89.4K</h3>
              <p className="text-sm text-gray-500 mb-2">WhatsApp API Calls</p>
              <div className="flex items-center text-xs text-gray-400">
                <FontAwesomeIcon icon={faChevronDown} className="text-green-500 mr-1 rotate-180" />
                <span>19,258 vs previous period</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">User Growth Trend</h3>
                  <p className="text-sm text-gray-500">Daily active users over time</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </div>
              <div id="user-growth-chart" style={{ height: '320px' }}></div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Subscription Distribution</h3>
                  <p className="text-sm text-gray-500">Active vs inactive breakdown</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </div>
              <div id="subscription-status-chart" style={{ height: '320px' }}></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">API Usage & Costs</h3>
                  <p className="text-sm text-gray-500">UX Pilot and WhatsApp API consumption</p>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-[#6366f1] text-white text-sm rounded-lg">Daily</button>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200">Weekly</button>
                </div>
              </div>
              <div id="api-usage-chart" style={{ height: '320px' }}></div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Cost Breakdown</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">UX Pilot API</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">$4,287</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-teal-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">68% of total AI costs</p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">WhatsApp API</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">$2,014</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '32%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">32% of total AI costs</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-900">Total AI/API Costs</span>
                    <span className="text-2xl font-bold text-gray-900">$6,301</span>
                  </div>
                  <div className="flex items-center text-xs text-green-600">
                    <FontAwesomeIcon icon={faChevronDown} className="mr-1" />
                    <span>$284 less than previous period</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Response Time Analysis</h3>
                  <p className="text-sm text-gray-500">Average system response time</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </div>
              <div id="response-time-chart" style={{ height: '280px' }}></div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Message Volume</h3>
                  <p className="text-sm text-gray-500">Comments and messages over time</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </div>
              <div id="message-volume-chart" style={{ height: '280px' }}></div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">System Health Indicators</h3>
                <p className="text-sm text-gray-500">Real-time operational metrics</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">All Systems Operational</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600">Server Uptime</span>
                  <FontAwesomeIcon icon={faServer} className="text-green-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">99.98%</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '99.98%' }}></div>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600">Database Load</span>
                  <FontAwesomeIcon icon={faDatabase} className="text-orange-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">62%</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '62%' }}></div>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600">Bot Success Rate</span>
                  <FontAwesomeIcon icon={faRobot} className="text-[#6366f1]" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">94.2%</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#6366f1] h-2 rounded-full" style={{ width: '94.2%' }}></div>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600">Error Rate</span>
                  <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">0.08%</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '0.08%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}