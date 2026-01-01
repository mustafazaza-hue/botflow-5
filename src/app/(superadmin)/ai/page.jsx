'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCrown,
  faChartLine,
  faUsers,
  faCreditCard,
  faRobot,
  faComments,
  faChartPie,
  faDatabase,
  faCog,
  faShieldHalved,
  faPlug,
  faBell,
  faEllipsisVertical,
  faLanguage,
  faChevronDown,
  faQuestionCircle,
  faSearch,
  faFilter,
  faDownload,
  faUpload,
  faLink,
  faCode,
  faFileLines,
  faFilePdf,
  faGlobe,
  faSpinner,
  faStop,
  faTrash,
  faPen,
  faSync,
  faExclamationCircle,
  faBook,
  faCalendar,
  faChartLine as faChartLineSolid,
  faFileCode,
  faFolder,
  faRedo,
  faExclamationTriangle,
  faCheckCircle,
  faClock
} from '@fortawesome/free-solid-svg-icons'

export default function AIDataSourcesPage() {
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
            <a href="/kpi" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition">
              <FontAwesomeIcon icon={faChartPie} className="mr-3" />
              <span>Analytics</span>
            </a>
          </div>
          
          <div className="mt-8">
            <p className="text-xs font-semibold text-gray-500 uppercase px-4 mb-2">System Management</p>
            <div className="space-y-1">
              <a href="/ai" className="flex items-center px-4 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-lg text-white shadow-lg">
                <FontAwesomeIcon icon={faDatabase} className="mr-3" />
                <span className="font-medium">AI Data Sources</span>
              </a>
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
              <h2 className="text-2xl font-bold text-gray-900">AI Data Sources</h2>
              <p className="text-sm text-gray-500 mt-1">Manage training data and knowledge base for AI bot responses</p>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#6366f1] bg-opacity-10 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faFileLines} className="text-2xl text-[#6366f1]" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">247</h3>
              <p className="text-sm text-gray-500">Total Documents</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-2xl text-green-600" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">234</h3>
              <p className="text-sm text-gray-500">Active Sources</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faClock} className="text-2xl text-orange-600" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">8</h3>
              <p className="text-sm text-gray-500">Processing</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faExclamationTriangle} className="text-2xl text-red-600" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">5</h3>
              <p className="text-sm text-gray-500">Failed</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Add New Data Source</h3>
                <p className="text-sm text-gray-500 mt-1">Upload documents, connect URLs, or integrate external sources</p>
              </div>
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm font-medium flex items-center">
                  <FontAwesomeIcon icon={faLink} className="mr-2" />
                  Connect URL
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm font-medium flex items-center">
                  <FontAwesomeIcon icon={faCode} className="mr-2" />
                  API Integration
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg hover:shadow-lg transition text-sm font-medium flex items-center">
                  <FontAwesomeIcon icon={faUpload} className="mr-2" />
                  Upload Documents
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search data sources..." 
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent w-80"
                  />
                </div>
                <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6366f1]">
                  <option>All Types</option>
                  <option>Documents</option>
                  <option>URLs</option>
                  <option>APIs</option>
                  <option>Databases</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6366f1]">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Processing</option>
                  <option>Failed</option>
                  <option>Disabled</option>
                </select>
              </div>
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition text-sm font-medium flex items-center">
                  <FontAwesomeIcon icon={faFilter} className="mr-2" />
                  More Filters
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition text-sm font-medium flex items-center">
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />
                  Export
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faFilePdf} className="text-2xl text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Product Documentation v3.2</h4>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>
                        Active
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">Comprehensive product documentation including features, API references, and use cases</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <span className="flex items-center"><FontAwesomeIcon icon={faFileLines} className="mr-2" />PDF Document</span>
                      <span className="flex items-center"><FontAwesomeIcon icon={faCalendar} className="mr-2" />Updated: Dec 15, 2024</span>
                      <span className="flex items-center"><FontAwesomeIcon icon={faChartLineSolid} className="mr-2" />1,247 queries</span>
                      <span className="flex items-center"><FontAwesomeIcon icon={faDatabase} className="mr-2" />2.4 MB</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-[#6366f1] hover:bg-gray-100 rounded-lg transition">
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition">
                    <FontAwesomeIcon icon={faSync} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faGlobe} className="text-2xl text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Help Center Articles</h4>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>
                        Active
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">https://help.yourplatform.com/articles - Crawled content from help center</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <span className="flex items-center"><FontAwesomeIcon icon={faLink} className="mr-2" />Web Crawler</span>
                      <span className="flex items-center"><FontAwesomeIcon icon={faCalendar} className="mr-2" />Updated: Dec 14, 2024</span>
                      <span className="flex items-center"><FontAwesomeIcon icon={faChartLineSolid} className="mr-2" />3,892 queries</span>
                      <span className="flex items-center"><FontAwesomeIcon icon={faFileLines} className="mr-2" />156 articles</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-[#6366f1] hover:bg-gray-100 rounded-lg transition">
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition">
                    <FontAwesomeIcon icon={faSync} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faSpinner} className="text-2xl text-orange-600 animate-spin" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">FAQ Database Import</h4>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full flex items-center">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-1.5 animate-pulse"></span>
                        Processing
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">Importing frequently asked questions from customer support database</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-3">
                      <span className="flex items-center"><FontAwesomeIcon icon={faDatabase} className="mr-2" />Database Import</span>
                      <span className="flex items-center"><FontAwesomeIcon icon={faCalendar} className="mr-2" />Started: Dec 16, 2024</span>
                      <span className="flex items-center"><FontAwesomeIcon icon={faFileLines} className="mr-2" />428 records</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">67% complete - Estimated time remaining: 4 minutes</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition">
                    <FontAwesomeIcon icon={faStop} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faCode} className="text-2xl text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">API Reference Documentation</h4>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>
                        Active
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">Complete API documentation with endpoints, parameters, and response examples</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <span className="flex items-center"><FontAwesomeIcon icon={faFileCode} className="mr-2" />JSON Document</span>
                      <span className="flex items-center"><FontAwesomeIcon icon={faCalendar} className="mr-2" />Updated: Dec 13, 2024</span>
                      <span className="flex items-center"><FontAwesomeIcon icon={faChartLineSolid} className="mr-2" />892 queries</span>
                      <span className="flex items-center"><FontAwesomeIcon icon={faDatabase} className="mr-2" />1.8 MB</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-[#6366f1] hover:bg-gray-100 rounded-lg transition">
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition">
                    <FontAwesomeIcon icon={faSync} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faExclamationCircle} className="text-2xl text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">Training Manual 2023</h4>
                      <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full flex items-center">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-1.5"></span>
                        Failed
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">Error: File format not supported. Please convert to PDF or TXT format.</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <span className="flex items-center"><FontAwesomeIcon icon={faFileLines} className="mr-2" />DOCX Document</span>
                      <span className="flex items-center"><FontAwesomeIcon icon={faCalendar} className="mr-2" />Failed: Dec 12, 2024</span>
                      <span className="flex items-center"><FontAwesomeIcon icon={faDatabase} className="mr-2" />3.7 MB</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-4 py-2 bg-[#6366f1] text-white rounded-lg hover:bg-[#8b5cf6] transition text-sm font-medium flex items-center">
                    <FontAwesomeIcon icon={faRedo} className="mr-2" />
                    Retry
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faBook} className="text-2xl text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">User Guides Collection</h4>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>
                        Active
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">Step-by-step guides for all platform features and functionalities</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <span className="flex items-center"><FontAwesomeIcon icon={faFolder} className="mr-2" />Multiple Files</span>
                      <span className="flex items-center"><FontAwesomeIcon icon={faCalendar} className="mr-2" />Updated: Dec 11, 2024</span>
                      <span className="flex items-center"><FontAwesomeIcon icon={faChartLineSolid} className="mr-2" />2,156 queries</span>
                      <span className="flex items-center"><FontAwesomeIcon icon={faFileLines} className="mr-2" />42 guides</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-[#6366f1] hover:bg-gray-100 rounded-lg transition">
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition">
                    <FontAwesomeIcon icon={faSync} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <p className="text-sm text-gray-500">Showing 1 to 7 of 247 data sources</p>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 bg-[#6366f1] text-white rounded-lg text-sm">1</button>
              <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">2</button>
              <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">3</button>
              <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">...</button>
              <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">36</button>
              <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}