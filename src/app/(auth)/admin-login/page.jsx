'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShieldHalved, faEnvelope, faLock, faKey,
  faCircleInfo, faRightToBracket, faTriangleExclamation,
  faArrowLeft, faGlobe, faCircleQuestion, faHeadset,
  faEye, faEyeSlash, faSpinner
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    twoFactorCode: ''
  })

  const router = useRouter()

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id.replace('admin-', '')]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.email || !formData.password) return
    
    setIsAuthenticating(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      router.push('/admin/dashboard')
    } catch (error) {
      console.error('Authentication error:', error)
      setIsAuthenticating(false)
    }
  }

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div id="admin-login-container" className="flex items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="w-full max-w-md">
        <div id="admin-login-card" className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center transform hover:scale-105 transition">
                <FontAwesomeIcon icon={faShieldHalved} className="text-white text-3xl" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Admin Access</h1>
            <p className="text-gray-500">Secure login for system administrators</p>
          </div>

          <form id="admin-login-form" className="space-y-6" onSubmit={handleSubmit}>
            <div id="admin-email-field">
              <label htmlFor="admin-email" className="block text-sm font-semibold text-gray-700 mb-2">
                Admin Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="admin-email"
                  className="w-full pl-11 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#6366F1] focus:ring-4 focus:ring-[#6366F1]/10 transition"
                  placeholder="admin@botflow.com"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isAuthenticating}
                />
              </div>
            </div>

            <div id="admin-password-field">
              <label htmlFor="admin-password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faLock} className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="admin-password"
                  className="w-full pl-11 pr-12 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#6366F1] focus:ring-4 focus:ring-[#6366F1]/10 transition"
                  placeholder="••••••••••••"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  disabled={isAuthenticating}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                  onClick={togglePassword}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>

            <div id="admin-2fa-field">
              <label htmlFor="admin-2fa" className="block text-sm font-semibold text-gray-700 mb-2">
                Two-Factor Authentication Code
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faKey} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="admin-2fa"
                  className="w-full pl-11 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#6366F1] focus:ring-4 focus:ring-[#6366F1]/10 transition"
                  placeholder="000000"
                  maxLength="6"
                  value={formData.twoFactorCode}
                  onChange={handleInputChange}
                  disabled={isAuthenticating}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                <FontAwesomeIcon icon={faCircleInfo} className="mr-1" />
                Enter the 6-digit code from your authenticator app
              </p>
            </div>

            <div id="admin-remember-field" className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#6366F1] border-gray-300 rounded focus:ring-[#6366F1] focus:ring-2"
                  disabled={isAuthenticating}
                />
                <span className="ml-2 text-sm text-gray-600">Remember this device</span>
              </label>
              <a
                href="/forgot-password"
                className="text-sm font-semibold text-[#6366F1] hover:text-[#8B5CF6] transition"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              id="admin-login-button"
              disabled={isAuthenticating}
              className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white py-3.5 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-[1.02] transition transform disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isAuthenticating ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
                  Authenticating...
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faRightToBracket} className="mr-2" />
                  Access Admin Panel
                </>
              )}
            </button>

            <div id="admin-security-notice" className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start">
                <FontAwesomeIcon icon={faTriangleExclamation} className="text-amber-500 mt-0.5 mr-3" />
                <div>
                  <p className="text-xs font-semibold text-amber-800 mb-1">Security Notice</p>
                  <p className="text-xs text-amber-700">
                    All admin activities are logged and monitored. Unauthorized access attempts will be reported.
                  </p>
                </div>
              </div>
            </div>
          </form>

          <div id="admin-login-footer" className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500 mb-3">
              Not an administrator?
            </p>
            <a
              href="/customer-login"
              className="inline-flex items-center text-[#6366F1] font-semibold hover:text-[#8B5CF6] transition"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Go to Customer Login
            </a>
          </div>
        </div>

        <div id="admin-language-selector" className="mt-6 flex justify-center">
          <div className="bg-white rounded-xl shadow-md px-4 py-2 flex items-center space-x-3">
            <FontAwesomeIcon icon={faGlobe} className="text-gray-400" />
            <button className="text-sm font-semibold text-[#0F172A] hover:text-[#6366F1] transition">
              English
            </button>
            <span className="text-gray-300">|</span>
            <button className="text-sm font-semibold text-gray-400 hover:text-[#6366F1] transition">
              العربية
            </button>
          </div>
        </div>

        <div id="admin-help-links" className="mt-6 flex justify-center space-x-6 text-sm">
          <a href="/help" className="text-gray-500 hover:text-[#6366F1] transition flex items-center">
            <FontAwesomeIcon icon={faCircleQuestion} className="mr-1" />
            Help Center
          </a>
          <a href="/contact" className="text-gray-500 hover:text-[#6366F1] transition flex items-center">
            <FontAwesomeIcon icon={faHeadset} className="mr-1" />
            Contact Support
          </a>
        </div>

        <div id="admin-footer-text" className="mt-8 text-center">
          <p className="text-xs text-gray-400">
            © 2026 Nexus Company. All rights reserved. |{' '}
            <a href="/privacy" className="hover:text-[#6366F1] transition">Privacy Policy</a> |{' '}
            <a href="/terms" className="hover:text-[#6366F1] transition">Terms of Service</a>
          </p>
        </div>
      </div>
    </div>
  )
}