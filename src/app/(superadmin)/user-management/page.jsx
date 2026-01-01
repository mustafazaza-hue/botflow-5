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
  faCog,
  faShieldHalved,
  faPlug,
  faBell,
  faEllipsisVertical,
  faLanguage,
  faChevronDown,
  faQuestionCircle,
  faSearch,
  faDownload,
  faFilter,
  faCheckCircle,
  faClock,
  faBan,
  faEye,
  faDollarSign,
  faComments as faCommentsSolid,
  faRotate,
  faPauseCircle,
  faEnvelope,
  faXmark
} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function UserManagementPage() {
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
            <a href="/user-management" className="flex items-center px-4 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-lg text-white shadow-lg">
              <FontAwesomeIcon icon={faUsers} className="mr-3" />
              <span className="font-medium">All Subscribers</span>
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
              <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
              <p className="text-sm text-gray-500 mt-1">Manage all subscribers, accounts, and subscription status</p>
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
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#6366f1] bg-opacity-10 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faUsers} className="text-2xl text-[#6366f1]" />
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">+12.5%</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">2,847</h3>
              <p className="text-sm text-gray-500">Total Users</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-2xl text-green-600" />
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">92.5%</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">2,634</h3>
              <p className="text-sm text-gray-500">Active Accounts</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faClock} className="text-2xl text-yellow-600" />
                </div>
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">5.8%</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">164</h3>
              <p className="text-sm text-gray-500">Trial Users</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faBan} className="text-2xl text-red-600" />
                </div>
                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">1.7%</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">49</h3>
              <p className="text-sm text-gray-500">Suspended</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex-1 min-w-[300px]">
                <div className="relative">
                  <FontAwesomeIcon icon={faSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search by name, email, or company..." 
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <select className="px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent">
                  <option>All Plans</option>
                  <option>Business</option>
                  <option>Pro</option>
                  <option>Starter</option>
                  <option>Trial</option>
                </select>
                <select className="px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Trial</option>
                  <option>Suspended</option>
                  <option>Expired</option>
                </select>
                <button className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition text-sm font-medium flex items-center space-x-2">
                  <FontAwesomeIcon icon={faFilter} />
                  <span>More Filters</span>
                </button>
                <button className="px-4 py-3 bg-[#6366f1] text-white rounded-lg hover:bg-[#8b5cf6] transition text-sm font-medium flex items-center space-x-2">
                  <FontAwesomeIcon icon={faDownload} />
                  <span>Export</span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left">
                      <input type="checkbox" className="w-4 h-4 text-[#6366f1] border-gray-300 rounded focus:ring-[#6366f1]" />
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">User</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Plan</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Pages</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Bots</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Messages</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Revenue</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Renewal</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input type="checkbox" className="w-4 h-4 text-[#6366f1] border-gray-300 rounded focus:ring-[#6366f1]" />
                    </td>
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
                          <p className="text-xs text-gray-400">TechCorp Solutions</p>
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
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
                        <FontAwesomeIcon icon={faInstagram} className="text-pink-600" />
                        <span className="text-sm text-gray-600 font-medium">8</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">12</td>
                    <td className="px-6 py-4 text-sm text-gray-600">24.8K</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">$299/mo</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Jan 15, 2025</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-[#6366f1] hover:bg-[#6366f1] hover:bg-opacity-10 rounded-lg transition" title="View Profile">
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition" title="More Actions">
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input type="checkbox" className="w-4 h-4 text-[#6366f1] border-gray-300 rounded focus:ring-[#6366f1]" />
                    </td>
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
                          <p className="text-xs text-gray-400">Startup Innovations</p>
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
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
                        <FontAwesomeIcon icon={faInstagram} className="text-pink-600" />
                        <span className="text-sm text-gray-600 font-medium">5</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">8</td>
                    <td className="px-6 py-4 text-sm text-gray-600">18.2K</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">$149/mo</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Jan 20, 2025</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-[#6366f1] hover:bg-[#6366f1] hover:bg-opacity-10 rounded-lg transition" title="View Profile">
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition" title="More Actions">
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input type="checkbox" className="w-4 h-4 text-[#6366f1] border-gray-300 rounded focus:ring-[#6366f1]" />
                    </td>
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
                          <p className="text-xs text-gray-400">Creative Agency Co.</p>
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
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
                        <span className="text-sm text-gray-600 font-medium">3</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">5</td>
                    <td className="px-6 py-4 text-sm text-gray-600">8.4K</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">$0/mo</td>
                    <td className="px-6 py-4 text-sm text-orange-600 font-medium">7 days left</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-[#6366f1] hover:bg-[#6366f1] hover:bg-opacity-10 rounded-lg transition" title="View Profile">
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition" title="More Actions">
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input type="checkbox" className="w-4 h-4 text-[#6366f1] border-gray-300 rounded focus:ring-[#6366f1]" />
                    </td>
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
                          <p className="text-xs text-gray-400">E-commerce Plus</p>
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
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faInstagram} className="text-pink-600" />
                        <span className="text-sm text-gray-600 font-medium">2</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">3</td>
                    <td className="px-6 py-4 text-sm text-gray-600">5.1K</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">$49/mo</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Feb 5, 2025</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-[#6366f1] hover:bg-[#6366f1] hover:bg-opacity-10 rounded-lg transition" title="View Profile">
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition" title="More Actions">
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input type="checkbox" className="w-4 h-4 text-[#6366f1] border-gray-300 rounded focus:ring-[#6366f1]" />
                    </td>
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
                          <p className="text-xs text-gray-400">Prime Realty Group</p>
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
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faFacebook} className="text-gray-400" />
                        <FontAwesomeIcon icon={faInstagram} className="text-gray-400" />
                        <span className="text-sm text-gray-400 font-medium">4</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400 font-medium">6</td>
                    <td className="px-6 py-4 text-sm text-gray-400">12.3K</td>
                    <td className="px-6 py-4 text-sm text-gray-400 font-medium">$149/mo</td>
                    <td className="px-6 py-4 text-sm text-red-600 font-medium">Payment Failed</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-[#6366f1] hover:bg-[#6366f1] hover:bg-opacity-10 rounded-lg transition" title="View Profile">
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition" title="More Actions">
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input type="checkbox" className="w-4 h-4 text-[#6366f1] border-gray-300 rounded focus:ring-[#6366f1]" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img 
                          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg" 
                          alt="" 
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <p className="font-medium text-gray-900">Robert Taylor</p>
                          <p className="text-sm text-gray-500">robert.t@consulting.biz</p>
                          <p className="text-xs text-gray-400">Business Consulting Ltd</p>
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
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
                        <FontAwesomeIcon icon={faInstagram} className="text-pink-600" />
                        <span className="text-sm text-gray-600 font-medium">6</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">10</td>
                    <td className="px-6 py-4 text-sm text-gray-600">19.7K</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">$299/mo</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Jan 28, 2025</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-[#6366f1] hover:bg-[#6366f1] hover:bg-opacity-10 rounded-lg transition" title="View Profile">
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition" title="More Actions">
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input type="checkbox" className="w-4 h-4 text-[#6366f1] border-gray-300 rounded focus:ring-[#6366f1]" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img 
                          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg" 
                          alt="" 
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <p className="font-medium text-gray-900">Jennifer Lee</p>
                          <p className="text-sm text-gray-500">j.lee@fashion.store</p>
                          <p className="text-xs text-gray-400">Fashion Hub Store</p>
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
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faInstagram} className="text-pink-600" />
                        <span className="text-sm text-gray-600 font-medium">4</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">7</td>
                    <td className="px-6 py-4 text-sm text-gray-600">15.9K</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">$149/mo</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Feb 12, 2025</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-[#6366f1] hover:bg-[#6366f1] hover:bg-opacity-10 rounded-lg transition" title="View Profile">
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition" title="More Actions">
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input type="checkbox" className="w-4 h-4 text-[#6366f1] border-gray-300 rounded focus:ring-[#6366f1]" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img 
                          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-9.jpg" 
                          alt="" 
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <p className="font-medium text-gray-900">James Wilson</p>
                          <p className="text-sm text-gray-500">james@fitness.pro</p>
                          <p className="text-xs text-gray-400">FitPro Gym Chain</p>
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
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
                        <span className="text-sm text-gray-600 font-medium">1</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">2</td>
                    <td className="px-6 py-4 text-sm text-gray-600">3.2K</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">$49/mo</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Feb 18, 2025</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-[#6366f1] hover:bg-[#6366f1] hover:bg-opacity-10 rounded-lg transition" title="View Profile">
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition" title="More Actions">
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <p className="text-sm text-gray-500">Showing 1 to 8 of 2,847 users</p>
                <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6366f1]">
                  <option>8 per page</option>
                  <option>16 per page</option>
                  <option>32 per page</option>
                  <option>50 per page</option>
                </select>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                  <FontAwesomeIcon icon={faChevronDown} className="mr-1 rotate-90" />
                  Previous
                </button>
                <button className="px-3 py-1 bg-[#6366f1] text-white rounded-lg text-sm font-medium">1</button>
                <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">2</button>
                <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">3</button>
                <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">4</button>
                <span className="px-3 py-1 text-sm text-gray-500">...</span>
                <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">356</button>
                <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                  Next<FontAwesomeIcon icon={faChevronDown} className="ml-1 -rotate-90" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      <div className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <img 
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" 
                alt="" 
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Sarah Johnson</h3>
                <p className="text-sm text-gray-500">sarah@techcorp.com</p>
                <p className="text-xs text-gray-400 mt-1">TechCorp Solutions</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <FontAwesomeIcon icon={faXmark} className="text-2xl" />
            </button>
          </div>
          
          <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-lg p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <FontAwesomeIcon icon={faDollarSign} className="text-3xl opacity-80" />
                    <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">Active</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-1">$299/mo</h4>
                  <p className="text-sm opacity-80">Business Plan</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <FontAwesomeIcon icon={faRobot} className="text-3xl text-[#6366f1]" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-1">12</h4>
                  <p className="text-sm text-gray-500">Active Bots</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <FontAwesomeIcon icon={faCommentsSolid} className="text-3xl text-[#ec4899]" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-1">24.8K</h4>
                  <p className="text-sm text-gray-500">Total Messages</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">User ID</span>
                      <span className="text-sm font-medium text-gray-900">#USR-28471</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Joined</span>
                      <span className="text-sm font-medium text-gray-900">Dec 15, 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Last Active</span>
                      <span className="text-sm font-medium text-gray-900">2 hours ago</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Renewal Date</span>
                      <span className="text-sm font-medium text-gray-900">Jan 15, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Payment Method</span>
                      <span className="text-sm font-medium text-gray-900">Visa •••• 4242</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Connected Pages</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-xl" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">TechCorp Official</p>
                          <p className="text-xs text-gray-500">124K followers</p>
                        </div>
                      </div>
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FontAwesomeIcon icon={faInstagram} className="text-pink-600 text-xl" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">@techcorp</p>
                          <p className="text-xs text-gray-500">89K followers</p>
                        </div>
                      </div>
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-xl" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">TechCorp Support</p>
                          <p className="text-xs text-gray-500">45K followers</p>
                        </div>
                      </div>
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Performance Statistics</h4>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#6366f1] mb-1">94.2%</div>
                    <div className="text-xs text-gray-500">Bot Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">3.2min</div>
                    <div className="text-xs text-gray-500">Avg Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#ec4899] mb-1">87%</div>
                    <div className="text-xs text-gray-500">Customer Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#8b5cf6] mb-1">1,847</div>
                    <div className="text-xs text-gray-500">Conversations/Month</div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h4>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span className="text-sm font-medium">Activate</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition">
                    <FontAwesomeIcon icon={faRotate} />
                    <span className="text-sm font-medium">Renew</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition">
                    <FontAwesomeIcon icon={faPauseCircle} />
                    <span className="text-sm font-medium">Suspend</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className="text-sm font-medium">Email User</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-gray-200 flex justify-between items-center">
            <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium">
              View Full Profile
            </button>
            <div className="flex space-x-3">
              <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium">
                Cancel
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg hover:opacity-90 transition font-medium">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}