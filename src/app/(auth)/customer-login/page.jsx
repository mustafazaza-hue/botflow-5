'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRobot, faEnvelope, faLock,
  faEye, faEyeSlash, faArrowRight,
  faGlobe, faShieldHalved
} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope as faEnvelopeRegular, faEye as faEyeRegular } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('english')

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  const socialButtons = [
    {
      id: 'google',
      name: 'Google',
      icon: (
        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      ),
      borderHover: 'hover:border-[#6366F1]'
    },
    {
      id: 'microsoft',
      name: 'Microsoft',
      icon: (
        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path d="M0 0h11.377v11.372H0V0zm12.623 0H24v11.372H12.623V0zM0 12.623h11.377V24H0V12.623zm12.623 0H24V24H12.623V12.623z" fill="#00A4EF"/>
        </svg>
      ),
      borderHover: 'hover:border-[#8B5CF6]'
    },
    {
      id: 'apple',
      name: 'Apple',
      icon: (
        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
        </svg>
      ),
      borderHover: 'hover:border-[#EC4899]'
    }
  ]

  const languages = [
    { id: 'english', name: 'English', code: 'en' },
    { id: 'arabic', name: 'العربية', code: 'ar' }
  ]

  return (
    <div id="auth-container" className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="w-full max-w-md">
        <div id="logo-section" className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <FontAwesomeIcon icon={faRobot} className="text-white text-3xl" />
          </div>
          <span className="text-2xl font-bold text-[#0F172A]">BotFlow</span>
        </div>

        <div id="welcome-section" className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to access your account</p>
        </div>

        <div id="login-form" className="bg-white rounded-2xl shadow-xl p-8">
          <form className="space-y-6">
            <div id="email-field">
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faEnvelopeRegular} className="text-gray-400" />
                </div>
                <input
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#6366F1] transition"
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div id="password-field">
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faLock} className="text-gray-400" />
                </div>
                <input
                  className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#6366F1] transition"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  onClick={togglePassword}
                >
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEyeRegular}
                    className="text-gray-400 hover:text-gray-600"
                  />
                </button>
              </div>
            </div>

            <div id="remember-forgot" className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#6366F1] border-gray-300 rounded focus:ring-[#6366F1]"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
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
              className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white py-3.5 rounded-xl font-semibold text-lg hover:shadow-xl transition transform hover:scale-[1.02]"
            >
              Sign In
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>

            <div id="signup-link" className="text-center">
              <span className="text-gray-600 text-sm">Don&apos;t have an account?</span>
              <a
                href="#"
                className="text-[#6366F1] font-semibold text-sm hover:text-[#8B5CF6] transition ml-1"
              >
                Create Account
              </a>
            </div>
          </form>

          <div id="divider" className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-200"></div>
            <span className="px-4 text-sm font-medium text-gray-500">OR</span>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>

          <div id="social-login" className="space-y-3">
            {socialButtons.map((button) => (
              <button
                key={button.id}
                className={`w-full flex items-center justify-center py-3 px-4 border-2 border-gray-200 rounded-xl ${button.borderHover} hover:bg-gray-50 transition font-medium text-gray-700`}
              >
                {button.icon}
                Continue with {button.name}
              </button>
            ))}
          </div>
        </div>

        <div id="language-selector" className="flex justify-center mt-6 space-x-4">
          {languages.map((language) => (
            <button
              key={language.id}
              onClick={() => setSelectedLanguage(language.id)}
              className={`flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition border-2 ${
                selectedLanguage === language.id
                  ? 'border-[#6366F1]'
                  : 'border-gray-200 hover:border-[#6366F1]'
              }`}
            >
              <FontAwesomeIcon
                icon={faGlobe}
                className={`mr-2 ${selectedLanguage === language.id ? 'text-[#6366F1]' : 'text-gray-600'}`}
              />
              <span
                className={`font-semibold ${
                  selectedLanguage === language.id ? 'text-[#6366F1]' : 'text-gray-600'
                }`}
              >
                {language.name}
              </span>
            </button>
          ))}
        </div>

        <div id="footer-links" className="text-center mt-8 space-x-4 text-sm">
          <a href="#" className="text-[#6366F1] hover:text-[#8B5CF6] transition font-medium">
            Terms of Use
          </a>
          <span className="text-gray-400">|</span>
          <a href="#" className="text-[#6366F1] hover:text-[#8B5CF6] transition font-medium">
            Privacy Policy
          </a>
          <span className="text-gray-400">|</span>
          <a href="#" className="text-[#6366F1] hover:text-[#8B5CF6] transition font-medium">
            Help Center
          </a>
        </div>

        <div id="admin-link" className="text-center mt-6">
          <a href="/admin-login" className="text-sm text-gray-500 hover:text-[#6366F1] transition">
            <FontAwesomeIcon icon={faShieldHalved} className="mr-1" />
            Admin Login
          </a>
        </div>
      </div>
    </div>
  )
}