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
  faEllipsisVertical
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Sidebar() {
  return (
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
  )
}