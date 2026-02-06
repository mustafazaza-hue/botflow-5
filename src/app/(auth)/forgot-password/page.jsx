'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRobot, faKey, faEnvelope, faPaperPlane,
  faArrowLeft, faSpinner, faCheck,
  faCircleCheck, faGlobe, faChevronDown,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import Link from 'next/link'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { authApi } from '@/api/auth'
import { showAlert } from '@/utils/sweetAlert'
import { useRouter } from 'next/navigation'

export default function ForgotPasswordPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const router = useRouter()

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required')
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email format')
  })

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true)
      showAlert.loading('Sending reset instructions...')
      
      try {
        // حسب الـ endpoint المطلوب، البيانات يجب أن تكون في body ككائن
        const forgotPasswordData = {
          email: values.email.trim().toLowerCase() // تحويل لحروف صغيرة لتجنب مشاكل الحساسية
        }

        console.log('📤 Sending forgot password request:', forgotPasswordData)
        console.log('📤 Request body:', JSON.stringify(forgotPasswordData))
        
        const response = await authApi.forgotPassword(forgotPasswordData)
        
        showAlert.close()
        
        console.log('✅ Forgot password response:', response)
        
        setIsSuccess(true)
        
        await showAlert.success(
          'Email Sent Successfully!',
          'Check your inbox for password reset instructions. Don\'t forget to check your spam folder.'
        )
        
        formik.resetForm()
        
        setTimeout(() => {
          setIsSuccess(false)
        }, 10000)
        
      } catch (error) {
        showAlert.close()
        
        console.error('🔥 Full error object:', error)
        console.error('🔥 Error details:', {
          status: error.status,
          title: error.title,
          errors: error.errors,
          traceId: error.traceId
        })
        
        let errorMessage = 'An error occurred while sending reset instructions'
        let errorTitle = 'Request Failed'
        
        // معالجة errors من الـ API بناءً على الهيكل الذي رأيته
        if (error.errors) {
          errorTitle = 'Validation Error'
          
          // تجميع جميع رسائل الخطأ
          const errorMessages = []
          
          if (error.errors.email) {
            errorMessages.push(...error.errors.email)
          }
          if (error.errors.request) {
            errorMessages.push(...error.errors.request)
          }
          
          errorMessage = errorMessages.join(', ')
          
          // تحديث errors في formik لعرضها في الحقول
          if (error.errors.email) {
            formik.setFieldError('email', error.errors.email[0])
          }
        }
        else if (error.status === 400) {
          errorTitle = 'Invalid Request'
          errorMessage = 'Please check your email address and try again'
          
          if (error.detail) {
            errorMessage = error.detail
          }
        } 
        else if (error.status === 404) {
          errorTitle = 'Email Not Found'
          errorMessage = 'No account found with this email address'
        }
        else if (error.status === 429) {
          errorTitle = 'Too Many Requests'
          errorMessage = 'Please wait a few minutes before trying again'
        }
        else if (error.status === 500) {
          errorTitle = 'Server Error'
          errorMessage = 'Our server encountered an error. Please try again later.'
        }
        else if (error.message?.includes('Network Error')) {
          errorTitle = 'Connection Error'
          errorMessage = 'Cannot connect to the server. Please check your internet connection.'
        }
        
        await showAlert.error(errorTitle, errorMessage)
      } finally {
        setIsSubmitting(false)
      }
    }
  })

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

          <form id="forgot-password-form" className="space-y-6" onSubmit={formik.handleSubmit}>
            <div id="email-field">
              <label htmlFor="email" className="block text-sm font-semibold text-[#0F172A] mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FontAwesomeIcon 
                    icon={faEnvelope} 
                    className={`${formik.touched.email && formik.errors.email ? 'text-red-400' : 'text-gray-400'}`} 
                  />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className={`w-full pl-12 pr-4 py-3.5 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all ${
                    formik.touched.email && formik.errors.email
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10'
                      : 'border-gray-200 focus:border-[#6366F1] focus:ring-[#6366F1]/10'
                  }`}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={isSubmitting || isSuccess}
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <div className="mt-2 flex items-center space-x-2 text-red-600 text-sm bg-red-50 p-2 rounded-lg">
                  <FontAwesomeIcon icon={faExclamationTriangle} className="text-sm" />
                  <span>{formik.errors.email}</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSuccess || !formik.isValid}
              className={`w-full ${
                isSuccess
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#6366F1]'
              } text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100`}
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
              <div id="success-message" className="bg-green-50 border-2 border-green-200 rounded-xl p-4 mt-6 animate-fadeIn">
                <div className="flex items-start space-x-3">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-green-500 text-xl mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-900 mb-1">Email sent successfully!</p>
                    <p className="text-sm text-green-700">
                      Check your inbox for password reset instructions.
                      Don&apos;t forget to check your spam folder.
                    </p>
                    <p className="text-xs text-green-600 mt-2">
                      Didn&apos;t receive the email? 
                      <button
                        type="button"
                        onClick={() => formik.handleSubmit()}
                        className="ml-1 text-green-700 font-semibold hover:underline focus:outline-none"
                      >
                        Click here to resend
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-blue-50 border-2 border-blue-100 rounded-xl p-4">
              <div className="flex items-start space-x-2">
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-blue-500 mt-0.5" />
                <div>
                  <p className="text-sm text-blue-800 font-medium mb-1">Important Notes:</p>
                  <ul className="text-xs text-blue-700 space-y-1">
                    <li>• The password reset link will expire in 24 hours</li>
                    <li>• Make sure your email address is correctly spelled</li>
                    <li>• Check your spam folder if you don't see the email</li>
                  </ul>
                </div>
              </div>
            </div>
          </form>

          <div id="back-to-login" className="mt-8 text-center">
            <Link
              href="/customer-login"
              className="inline-flex items-center space-x-2 text-[#6366F1] font-semibold hover:text-[#8B5CF6] transition-colors hover:scale-105"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>Back to Login</span>
            </Link>
          </div>
        </div>

        <div id="help-section" className="mt-8 text-center">
          <p className="text-gray-600 text-sm mb-4">Still having trouble?</p>
          <div className="flex items-center justify-center space-x-6">
            <a
              href="mailto:support@botflow.com"
              className="inline-flex items-center space-x-2 text-[#6366F1] hover:text-[#8B5CF6] transition-colors hover:scale-105 px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="text-sm font-medium">Email Support</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center space-x-2 text-[#6366F1] hover:text-[#8B5CF6] transition-colors hover:scale-105 px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
          </div>
        </div>

        <div id="language-toggle" className="mt-8 flex justify-center">
          <button 
            className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105"
            disabled={isSubmitting}
          >
            <FontAwesomeIcon icon={faGlobe} className="text-[#6366F1]" />
            <span className="text-sm font-medium text-[#0F172A]">English</span>
            <FontAwesomeIcon icon={faChevronDown} className="text-gray-400 text-xs" />
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            By requesting a password reset, you agree to our{' '}
            <a href="/privacy" className="text-[#6366F1] hover:underline">Privacy Policy</a>
            {' '}and{' '}
            <a href="/terms" className="text-[#6366F1] hover:underline">Terms of Service</a>
          </p>
        </div>
      </div>
    </div>
  )
}