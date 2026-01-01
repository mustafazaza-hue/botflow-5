'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRobot, faGlobe, faEnvelopeOpenText, faEnvelope,
  faPaperPlane, faPen, faCircleQuestion, faHeadset,
  faStar, faShieldHalved, faCheck
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function VerifyEmailPage() {
  const [isResending, setIsResending] = useState(false)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [email] = useState('your.email@example.com')

  const handleResendEmail = async () => {
    if (isResending) return
    
    setIsResending(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsEmailSent(true)
      
      setTimeout(() => {
        setIsResending(false)
        setIsEmailSent(false)
      }, 3000)
    } catch (error) {
      console.error('Error:', error)
      setIsResending(false)
    }
  }

  const instructions = [
    {
      number: 1,
      title: 'Check your inbox',
      description: 'Look for an email from BotFlow with the subject "Verify your email address"',
      gradient: 'from-[#6366F1] to-[#8B5CF6]'
    },
    {
      number: 2,
      title: 'Click the verification link',
      description: 'The link will expire in 24 hours for security purposes',
      gradient: 'from-[#8B5CF6] to-[#EC4899]'
    },
    {
      number: 3,
      title: 'Start using BotFlow',
      description: 'Once verified, you&apos;ll be redirected to your dashboard',
      gradient: 'from-[#EC4899] to-[#6366F1]'
    }
  ]

  const helpLinks = [
    {
      id: 'spam',
      icon: faCircleQuestion,
      text: 'Check spam folder'
    },
    {
      id: 'support',
      icon: faHeadset,
      text: 'Contact support'
    }
  ]

  const stats = [
    {
      value: '10K+',
      label: 'Active Users'
    },
    {
      value: '98%',
      label: 'Satisfaction Rate'
    }
  ]

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen">
      <header id="header" className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faRobot} className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold text-[#0F172A]">BotFlow</span>
            </Link>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-[#6366F1] px-3 py-2 rounded-lg font-medium transition">
                <FontAwesomeIcon icon={faGlobe} className="mr-2" />EN
              </button>
              <a href="/contact" className="text-gray-600 hover:text-[#6366F1] px-4 py-2 rounded-lg font-medium transition">
                Need Help?
              </a>
            </div>
          </div>
        </div>
      </header>

      <main id="verify-email-container" className="flex items-center justify-center px-6 pt-32 pb-20">
        <div className="w-full max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div id="verification-form-section" className="bg-white p-12 rounded-3xl shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-white text-3xl" />
                </div>
                <h1 className="text-3xl font-bold text-[#0F172A] mb-3">Verify Your Email</h1>
                <p className="text-gray-600 text-lg">We&apos;ve sent a verification link to your email address</p>
              </div>

              <div id="email-display" className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl mb-8 border-2 border-[#6366F1]/20">
                <div className="flex items-center justify-center space-x-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-[#6366F1] text-xl" />
                  <span className="text-[#0F172A] font-semibold text-lg">{email}</span>
                </div>
              </div>

              <div id="instructions" className="space-y-4 mb-8">
                {instructions.map((instruction) => (
                  <div key={instruction.number} className="flex items-start space-x-4">
                    <div className={`w-8 h-8 bg-gradient-to-br ${instruction.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                      <span className="text-white text-sm font-bold">{instruction.number}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F172A] mb-1">{instruction.title}</h3>
                      <p className="text-gray-600 text-sm">{instruction.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div id="verification-actions" className="space-y-4">
                <button
                  onClick={handleResendEmail}
                  disabled={isResending}
                  className={`w-full ${
                    isEmailSent
                      ? 'bg-green-500'
                      : 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]'
                  } text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-xl transition flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {isResending ? (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} className="mr-3" />
                      Sending...
                    </>
                  ) : isEmailSent ? (
                    <>
                      <FontAwesomeIcon icon={faCheck} className="mr-3" />
                      Email Sent!
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} className="mr-3" />
                      Resend Verification Email
                    </>
                  )}
                </button>
                <button className="w-full bg-gray-100 text-[#0F172A] py-4 px-6 rounded-xl font-semibold hover:bg-gray-200 transition flex items-center justify-center">
                  <FontAwesomeIcon icon={faPen} className="mr-3" />
                  Change Email Address
                </button>
              </div>

              <div id="help-section" className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-center text-gray-600 text-sm mb-4">Didn&apos;t receive the email?</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  {helpLinks.map((link, index) => (
                    <div key={link.id} className="flex items-center">
                      <a href="#" className="text-[#6366F1] hover:underline font-medium flex items-center">
                        <FontAwesomeIcon icon={link.icon} className="mr-2" />
                        {link.text}
                      </a>
                      {index < helpLinks.length - 1 && (
                        <span className="text-gray-300 mx-2">|</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div id="testimonial-section" className="hidden lg:block">
              <div className="bg-white p-10 rounded-3xl shadow-xl mb-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-400 text-xl" />
                  ))}
                </div>
                <blockquote className="text-xl text-[#0F172A] font-medium leading-relaxed mb-6">
                  &quot;BotFlow has transformed how we engage with customers on social media. The automation is seamless, and our response time has improved by 90%. Highly recommended!&quot;
                </blockquote>
                <div className="flex items-center">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                    alt="Customer testimonial"
                  />
                  <div>
                    <p className="font-bold text-[#0F172A] text-lg">Sarah Mitchell</p>
                    <p className="text-gray-600">Marketing Director, TechVision</p>
                  </div>
                </div>
              </div>

              <div id="stats-grid" className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div id="security-badge" className="mt-8 bg-gradient-to-r from-[#6366F1]/10 to-[#8B5CF6]/10 p-6 rounded-2xl border-2 border-[#6366F1]/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F172A] mb-1">Your data is secure</h3>
                    <p className="text-gray-600 text-sm">We use industry-standard encryption to protect your information</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer id="footer" className="bg-white border-t border-gray-200 py-8 px-6 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">© 2026 Nexus Company. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-600 hover:text-[#6366F1] transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-[#6366F1] transition">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-[#6366F1] transition">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}