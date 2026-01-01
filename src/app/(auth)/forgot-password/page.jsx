'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRobot, faKey, faEnvelope, faPaperPlane,
  faArrowLeft, faSpinner, faCheck,
  faCircleCheck, faGlobe, faChevronDown
} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email) return
    
    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setIsSuccess(true)
      setIsSubmitting(false)
      
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (error) {
      console.error('Error:', error)
      setIsSubmitting(false)
    }
  }

  return (
    <div id="forgot-password-container" className="flex items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="w-full max-w-md">
        <div id="brand-section" className="text-center mb-8">
          <Link href="/" className="inline-flex items-center justify-center space-x-2 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center shadow-lg">
              <FontAwesomeIcon icon={faRobot} className="text-white text-2xl" />
            </div>
            <span className="text-2xl font-bold text-[#0F172A]">BotFlow</span>
          </Link>
        </div>

        <div id="forgot-password-card" className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-2xl mb-6 shadow-lg">
              <FontAwesomeIcon icon={faKey} className="text-white text-2xl" />
            </div>
            <h1 className="text-3xl font-bold text-[#0F172A] mb-3">Forgot Password?</h1>
            <p className="text-gray-600 leading-relaxed">
              No worries! Enter your email address and we&apos;ll send you instructions to reset your password.
            </p>
          </div>

          <form id="forgot-password-form" className="space-y-6" onSubmit={handleSubmit}>
            <div id="email-field">
              <label htmlFor="email" className="block text-sm font-semibold text-[#0F172A] mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#6366F1] focus:ring-4 focus:ring-[#6366F1]/10 transition-all"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting || isSuccess}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`w-full ${
                isSuccess
                  ? 'bg-green-500'
                  : 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]'
              } text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {isSubmitting ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                  <span>Sending...</span>
                </>
              ) : isSuccess ? (
                <>
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Instructions Sent!</span>
                </>
              ) : (
                <>
                  <span>Send Reset Instructions</span>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </>
              )}
            </button>

            {isSuccess && (
              <div id="success-message" className="bg-green-50 border-2 border-green-200 rounded-xl p-4 mt-6 flex items-start space-x-3">
                <FontAwesomeIcon icon={faCircleCheck} className="text-green-500 text-xl mt-0.5" />
                <div>
                  <p className="font-semibold text-green-900 mb-1">Email sent successfully!</p>
                  <p className="text-sm text-green-700">
                    Check your inbox at <strong>{email}</strong> for password reset instructions.
                    Don&apos;t forget to check your spam folder.
                  </p>
                </div>
              </div>
            )}
          </form>

          <div id="back-to-login" className="mt-8 text-center">
            <Link
              href="/customer-login"
              className="inline-flex items-center space-x-2 text-[#6366F1] font-semibold hover:text-[#8B5CF6] transition-colors"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>Back to Login</span>
            </Link>
          </div>
        </div>

        <div id="help-section" className="mt-8 text-center">
          <p className="text-gray-600 text-sm mb-4">Need help? Contact our support team</p>
          <div className="flex items-center justify-center space-x-6">
            <a
              href="mailto:support@botflow.com"
              className="inline-flex items-center space-x-2 text-[#6366F1] hover:text-[#8B5CF6] transition-colors"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="text-sm font-medium">support@botflow.com</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center space-x-2 text-[#6366F1] hover:text-[#8B5CF6] transition-colors"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
          </div>
        </div>

        <div id="language-toggle" className="mt-8 flex justify-center">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
            <FontAwesomeIcon icon={faGlobe} className="text-[#6366F1]" />
            <span className="text-sm font-medium text-[#0F172A]">English</span>
            <FontAwesomeIcon icon={faChevronDown} className="text-gray-400 text-xs" />
          </button>
        </div>
      </div>
    </div>
  )
}