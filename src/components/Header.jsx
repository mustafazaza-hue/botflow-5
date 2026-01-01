"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot, faGlobe, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Header() {
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const [useCasesOpen, setUseCasesOpen] = useState(false)

  return (
    <nav id="header" className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faRobot} className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold text-[#0F172A]">BotFlow</span>
            </a>
            <div className="hidden lg:flex items-center space-x-8">
              {/* Features Dropdown */}
              <div className="relative">
                <button 
                  className="flex items-center text-gray-600 hover:text-[#6366F1] font-medium transition"
                  onClick={() => setFeaturesOpen(!featuresOpen)}
                  onMouseEnter={() => setFeaturesOpen(true)}
                  onMouseLeave={() => setFeaturesOpen(false)}
                >
                  Features
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-xs" />
                </button>
                {featuresOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                    onMouseEnter={() => setFeaturesOpen(true)}
                    onMouseLeave={() => setFeaturesOpen(false)}
                  >
                    <a href="/automation" className="block px-4 py-2 text-gray-600 hover:text-[#6366F1] hover:bg-gray-50">Chatbot Automation</a>
                    <a href="/integration" className="block px-4 py-2 text-gray-600 hover:text-[#6366F1] hover:bg-gray-50">Social Media Integration</a>
                    <a href="/flows" className="block px-4 py-2 text-gray-600 hover:text-[#6366F1] hover:bg-gray-50">Auto Replies & Flows</a>
                    <a href="/multi-page" className="block px-4 py-2 text-gray-600 hover:text-[#6366F1] hover:bg-gray-50">Multi-Page Management</a>
                  </div>
                )}
              </div>

              <a href="/pricing" className="text-gray-600 hover:text-[#6366F1] font-medium transition">Pricing</a>

              {/* Use Cases Dropdown */}
              <div className="relative">
                <button 
                  className="flex items-center text-gray-600 hover:text-[#6366F1] font-medium transition"
                  onClick={() => setUseCasesOpen(!useCasesOpen)}
                  onMouseEnter={() => setUseCasesOpen(true)}
                  onMouseLeave={() => setUseCasesOpen(false)}
                >
                  Use Cases
                  <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-xs" />
                </button>
                {useCasesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                    onMouseEnter={() => setUseCasesOpen(true)}
                    onMouseLeave={() => setUseCasesOpen(false)}
                  >
                    <a href="/solutions" className="block px-4 py-2 text-gray-600 hover:text-[#6366F1] hover:bg-gray-50">E-commerce Solutions</a>
                    <a href="/real-estate" className="block px-4 py-2 text-gray-600 hover:text-[#6366F1] hover:bg-gray-50">Real Estate</a>
                    <a href="/agencies" className="block px-4 py-2 text-gray-600 hover:text-[#6366F1] hover:bg-gray-50">Agencies</a>
                    <a href="/business" className="block px-4 py-2 text-gray-600 hover:text-[#6366F1] hover:bg-gray-50">Small Businesses</a>
                  </div>
                )}
              </div>

              <a href="/about" className="text-gray-600 hover:text-[#6366F1] font-medium transition">About</a>
              <a href="/contact" className="text-gray-600 hover:text-[#6366F1] font-medium transition">Contact</a>
              <a href="/dashboard" className="text-gray-600 hover:text-[#6366F1] font-medium transition">C-Dashboard</a>
              <a href="/super-dashboard" className="text-gray-600 hover:text-[#6366F1] font-medium transition">A-Dashboard</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-[#6366F1] px-3 py-2 rounded-lg font-medium transition">
              <FontAwesomeIcon icon={faGlobe} className="mr-2" />EN
            </button>
            <a href="customer-login" className="text-gray-600 hover:text-[#6366F1] px-4 py-2 rounded-lg font-medium transition">Login</a>
            <a href="#" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition">Start Free</a>
          </div>
        </div>
      </div>
    </nav>
  )
}