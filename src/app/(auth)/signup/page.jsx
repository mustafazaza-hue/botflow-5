'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRobot, faGlobe, faBolt, faShieldHalved, faHeadset, faRocket,
  faEnvelope, faBuilding, faLock, faEye, faEyeSlash, faPhone,
  faCheckCircle, faArrowRight
} from '@fortawesome/free-solid-svg-icons'
import { faShopify, faWordpress, faSlack, faHubspot, faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordStrength, setPasswordStrength] = useState(0)

  const benefits = [
    {
      id: 'benefit-1',
      icon: faBolt,
      title: 'Quick Setup',
      description: 'Get started in minutes. No technical knowledge required.',
      gradient: 'from-[#6366F1] to-[#8B5CF6]'
    },
    {
      id: 'benefit-2',
      icon: faShieldHalved,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee.',
      gradient: 'from-[#8B5CF6] to-[#EC4899]'
    },
    {
      id: 'benefit-3',
      icon: faHeadset,
      title: '24/7 Support',
      description: 'Our team is always here to help you succeed.',
      gradient: 'from-[#EC4899] to-[#6366F1]'
    },
    {
      id: 'benefit-4',
      icon: faRocket,
      title: '14-Day Free Trial',
      description: 'Full access to all features. No credit card required.',
      gradient: 'from-[#6366F1] to-[#EC4899]'
    }
  ]

  const trustBadges = [
    { id: 'shopify', icon: faShopify, name: 'Shopify' },
    { id: 'wordpress', icon: faWordpress, name: 'WordPress' },
    { id: 'slack', icon: faSlack, name: 'Slack' },
    { id: 'hubspot', icon: faHubspot, name: 'HubSpot' }
  ]

  const socialButtons = [
    {
      id: 'google',
      name: 'Google',
      icon: faGoogle,
      iconColor: 'text-red-500',
      borderHover: 'hover:border-[#6366F1]'
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: faFacebook,
      iconColor: 'text-blue-600',
      borderHover: 'hover:border-[#6366F1]'
    }
  ]

  const securityBadges = [
    {
      id: 'ssl',
      icon: faShieldHalved,
      text: 'SSL Secured',
      color: 'text-green-500'
    },
    {
      id: 'encryption',
      icon: faLock,
      text: '256-bit Encryption',
      color: 'text-green-500'
    },
    {
      id: 'gdpr',
      icon: faCheckCircle,
      text: 'GDPR Compliant',
      color: 'text-green-500'
    }
  ]

  const calculatePasswordStrength = (password) => {
    let strength = 0
    if (password.length >= 8) strength++
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^a-zA-Z0-9]/.test(password)) strength++
    return strength
  }

  const getStrengthColor = (strength) => {
    const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500']
    return strength > 0 ? colors[strength - 1] : 'bg-gray-200'
  }

  useEffect(() => {
    setPasswordStrength(calculatePasswordStrength(password))
  }, [password])

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen">
      <nav id="header" className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faRobot} className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold text-[#0F172A]">BotFlow</span>
            </a>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-[#6366F1] px-3 py-2 rounded-lg font-medium transition">
                <FontAwesomeIcon icon={faGlobe} className="mr-2" />EN
              </button>
              <span className="text-gray-400">Already have an account?</span>
              <a href="/login" className="text-[#6366F1] hover:text-[#8B5CF6] px-4 py-2 rounded-lg font-semibold transition">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main id="register-main" className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div id="register-hero-content" className="order-2 lg:order-1">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Why Choose BotFlow?</h1>
                  <p className="text-gray-600">Join thousands of businesses automating their customer conversations</p>
                </div>
                
                <div className="space-y-6">
                  {benefits.map((benefit) => (
                    <div key={benefit.id} className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <FontAwesomeIcon icon={benefit.icon} className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#0F172A] mb-1">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div id="trust-badges" className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-4">Trusted by 10,000+ businesses worldwide</p>
                  <div className="flex items-center space-x-6 opacity-60">
                    {trustBadges.map((badge) => (
                      <FontAwesomeIcon key={badge.id} icon={badge.icon} className="text-3xl text-gray-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div id="register-form-container" className="order-1 lg:order-2">
              <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-2xl">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-[#0F172A] mb-2">Create Your Account</h2>
                  <p className="text-gray-600">Start your 14-day free trial today</p>
                </div>
                
                <div id="social-signup" className="space-y-3 mb-6">
                  {socialButtons.map((button) => (
                    <button
                      key={button.id}
                      className={`w-full flex items-center justify-center space-x-3 bg-white border-2 border-gray-200 ${button.borderHover} px-6 py-3 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition`}
                    >
                      <FontAwesomeIcon icon={button.icon} className={`text-xl ${button.iconColor}`} />
                      <span>Continue with {button.name}</span>
                    </button>
                  ))}
                </div>
                
                <div className="flex items-center my-6">
                  <div className="flex-1 border-t border-gray-200"></div>
                  <span className="px-4 text-sm text-gray-500 font-medium">OR</span>
                  <div className="flex-1 border-t border-gray-200"></div>
                </div>
                
                <form id="register-form" className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#6366F1] focus:outline-none transition"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#6366F1] focus:outline-none transition"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Work Email
                    </label>
                    <div className="relative">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="email"
                        placeholder="john@company.com"
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#6366F1] focus:outline-none transition"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <FontAwesomeIcon
                        icon={faBuilding}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="text"
                        placeholder="Your Company"
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#6366F1] focus:outline-none transition"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <FontAwesomeIcon
                        icon={faLock}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-[#6366F1] focus:outline-none transition"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        onClick={togglePassword}
                      >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                      </button>
                    </div>
                    <div className="mt-2 flex items-center space-x-1">
                      {[0, 1, 2, 3].map((index) => (
                        <div
                          key={index}
                          className={`h-1 flex-1 rounded ${getStrengthColor(passwordStrength)}`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Use 8+ characters with letters, numbers & symbols
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number (Optional)
                    </label>
                    <div className="relative">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#6366F1] focus:outline-none transition"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      className="w-5 h-5 text-[#6366F1] border-2 border-gray-300 rounded focus:ring-2 focus:ring-[#6366F1] mt-0.5"
                      required
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to BotFlow&apos;s{' '}
                      <a href="#" className="text-[#6366F1] font-semibold hover:underline">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-[#6366F1] font-semibold hover:underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="w-5 h-5 text-[#6366F1] border-2 border-gray-300 rounded focus:ring-2 focus:ring-[#6366F1] mt-0.5"
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-600">
                      Send me product updates, tips, and exclusive offers
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition transform hover:scale-[1.02]"
                  >
                    Create Account <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <a href="/login" className="text-[#6366F1] font-semibold hover:underline">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
              
              <div id="security-badges" className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-500">
                {securityBadges.map((badge) => (
                  <div key={badge.id} className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={badge.icon} className={badge.color} />
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer id="footer" className="bg-white border-t border-gray-100 py-8 px-6 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faRobot} className="text-white text-sm" />
              </div>
              <span className="text-lg font-bold text-[#0F172A]">BotFlow</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-[#6366F1] transition">Help Center</a>
              <a href="#" className="hover:text-[#6366F1] transition">Privacy Policy</a>
              <a href="#" className="hover:text-[#6366F1] transition">Terms of Service</a>
              <a href="#" className="hover:text-[#6366F1] transition">Contact Support</a>
            </div>
            <p className="text-sm text-gray-500">© 2026 Nexus Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}