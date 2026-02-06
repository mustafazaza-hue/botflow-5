'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShieldHalved, faEnvelope, faLock, faKey,
  faCircleInfo, faRightToBracket, faTriangleExclamation,
  faArrowLeft, faGlobe, faCircleQuestion, faHeadset,
  faEye, faEyeSlash, faSpinner, faExclamationCircle,
  faUserShield
} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { authApi } from '@/api/auth'
import { showAlert } from '@/utils/sweetAlert'

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const router = useRouter()

  // إزالة التوكن القديم عند دخول صفحة الأدمن
  useEffect(() => {
    // نزيل التوكن القديم لأننا سنسجل دخول كأدمن جديد
    const token = localStorage.getItem('auth_token');
    if (token) {
      console.log('🧹 Removing previous token for admin login');
      localStorage.removeItem('auth_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user_data');
    }
  }, []);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Admin email is required')
      .matches(/.*@.*/, 'Must be a valid email address'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    twoFactorCode: Yup.string()
      .matches(/^\d{6}$/, 'Must be a 6-digit code')
      .required('Two-factor code is required'),
    rememberDevice: Yup.boolean()
  })

  const formik = useFormik({
    initialValues: {
      email: 'admin@botflow.com',
      password: 'Admin@123456',
      twoFactorCode: '',
      rememberDevice: true
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsAuthenticating(true)
      showAlert.loading('Verifying admin credentials...')
      
      try {
        const adminLoginData = {
          email: values.email.trim(),
          password: values.password,
          twoFactorCode: values.twoFactorCode,
          rememberDevice: values.rememberDevice
        }

        console.log('📤 Sending admin login request:', adminLoginData)
        
        // استدعاء API تسجيل دخول الأدمن
        const response = await authApi.adminLogin(adminLoginData)
        
        showAlert.close()
        
        console.log('✅ Admin login successful response:', response)
        
        await showAlert.success(
          'Admin Access Granted!', 
          `Welcome ${response.fullName || response.email}`
        )
        
        // إعادة التوجيه لـ admin dashboard
        router.push('/super-dashboard')
        
      } catch (error) {
        showAlert.close()
        
        console.error('🔥 Admin login error:', error)
        
        let errorMessage = 'An error occurred during authentication'
        let errorTitle = 'Authentication Failed'
        
        // التحقق من هيكل الخطأ
        if (error.response?.status === 401) {
          errorTitle = 'Unauthorized Access'
          
          if (error.response?.data?.detail) {
            errorMessage = error.response.data.detail
          } else if (error.response?.data?.title) {
            errorMessage = error.response.data.title
          } else {
            errorMessage = 'Invalid admin credentials or 2FA code'
          }
          
          // إعادة تعيين كلمة المرور وكود 2FA للمحاولة التالية
          formik.setFieldValue('password', '')
          formik.setFieldValue('twoFactorCode', '')
          
          // التركيز على حقل كود 2FA
          document.getElementById('admin-2fa')?.focus()
        } 
        else if (error.response?.status === 403) {
          errorTitle = 'Access Denied'
          errorMessage = 'Admin privileges required'
        }
        else if (error.response?.status === 400) {
          errorTitle = 'Validation Error'
          
          if (error.response?.data?.errors) {
            const errors = error.response.data.errors
            if (errors.email) errorMessage = errors.email[0]
            else if (errors.password) errorMessage = errors.password[0]
            else if (errors.twoFactorCode) errorMessage = errors.twoFactorCode[0]
            else errorMessage = 'Please check all fields'
          } else if (error.response?.data?.detail) {
            errorMessage = error.response.data.detail
          } else if (error.response?.data?.message) {
            errorMessage = error.response.data.message
          } else {
            errorMessage = 'Invalid request format'
          }
        }
        else if (error.response?.status === 429) {
          errorTitle = 'Too Many Attempts'
          errorMessage = 'Too many failed login attempts. Please try again later.'
        }
        else if (error.response?.status === 500) {
          errorTitle = 'Server Error'
          errorMessage = 'Administration server encountered an error'
        }
        else if (error.message?.includes('Network Error')) {
          errorTitle = 'Connection Error'
          errorMessage = 'Cannot connect to admin server. Please check your connection.'
        }
        else if (error.message) {
          errorMessage = error.message
        }
        
        await showAlert.error(errorTitle, errorMessage)
        
        // إعادة تعيين الحقول بعد الخطأ
        setTimeout(() => {
          if (error.response?.status === 401) {
            formik.setFieldValue('password', '')
            formik.setFieldValue('twoFactorCode', '')
          }
        }, 100)
        
      } finally {
        setIsAuthenticating(false)
      }
    }
  })

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  // تلقائي توليد نموذج اختبار لأدمن (للتطوير فقط)
  const fillTestAdminCredentials = () => {
    if (process.env.NODE_ENV === 'development') {
      formik.setValues({
        email: 'admin@botflow.com',
        password: 'Admin@123456',
        twoFactorCode: '197779',
        rememberDevice: true
      })
      console.log('✅ Test credentials filled')
    }
  }

  return (
    <div id="admin-login-container" className="flex items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="w-full max-w-md">
        <div id="admin-login-card" className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center transform hover:scale-105 transition">
                <FontAwesomeIcon icon={faUserShield} className="text-white text-3xl" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Admin Access</h1>
            <p className="text-gray-500">Secure login for system administrators</p>
          </div>

          {process.env.NODE_ENV === 'development' && (
            <div className="mb-6 p-3 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-xs text-purple-700 text-center">
                <FontAwesomeIcon icon={faCircleInfo} className="mr-1" />
                Development Mode: Admin testing enabled
              </p>
            </div>
          )}

          <form id="admin-login-form" className="space-y-6" onSubmit={formik.handleSubmit}>
            <div id="admin-email-field">
              <label htmlFor="admin-email" className="block text-sm font-semibold text-gray-700 mb-2">
                Admin Email Address
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
                  id="admin-email"
                  name="email"
                  className={`w-full pl-11 pr-4 py-3.5 border-2 rounded-xl focus:outline-none focus:ring-4 transition ${
                    formik.touched.email && formik.errors.email
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10'
                      : 'border-gray-200 focus:border-[#6366F1] focus:ring-[#6366F1]/10'
                  }`}
                  placeholder="admin@botflow.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={isAuthenticating}
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <div className="mt-2 flex items-center space-x-2 text-red-600 text-sm">
                  <FontAwesomeIcon icon={faExclamationCircle} className="text-sm" />
                  <span>{formik.errors.email}</span>
                </div>
              )}
            </div>

            <div id="admin-password-field">
              <label htmlFor="admin-password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FontAwesomeIcon 
                    icon={faLock} 
                    className={`${formik.touched.password && formik.errors.password ? 'text-red-400' : 'text-gray-400'}`} 
                  />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="admin-password"
                  name="password"
                  className={`w-full pl-11 pr-12 py-3.5 border-2 rounded-xl focus:outline-none focus:ring-4 transition ${
                    formik.touched.password && formik.errors.password
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10'
                      : 'border-gray-200 focus:border-[#6366F1] focus:ring-[#6366F1]/10'
                  }`}
                  placeholder="••••••••••••"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={isAuthenticating}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                  onClick={togglePassword}
                  disabled={isAuthenticating}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className="mt-2 flex items-center space-x-2 text-red-600 text-sm">
                  <FontAwesomeIcon icon={faExclamationCircle} className="text-sm" />
                  <span>{formik.errors.password}</span>
                </div>
              )}
            </div>

            <div id="admin-2fa-field">
              <label htmlFor="admin-2fa" className="block text-sm font-semibold text-gray-700 mb-2">
                Two-Factor Authentication Code
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FontAwesomeIcon 
                    icon={faKey} 
                    className={`${formik.touched.twoFactorCode && formik.errors.twoFactorCode ? 'text-red-400' : 'text-gray-400'}`} 
                  />
                </div>
                <input
                  type="text"
                  id="admin-2fa"
                  name="twoFactorCode"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className={`w-full pl-11 pr-4 py-3.5 border-2 rounded-xl focus:outline-none focus:ring-4 transition ${
                    formik.touched.twoFactorCode && formik.errors.twoFactorCode
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10'
                      : 'border-gray-200 focus:border-[#6366F1] focus:ring-[#6366F1]/10'
                  }`}
                  placeholder="000000"
                  maxLength="6"
                  value={formik.values.twoFactorCode}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '')
                    formik.setFieldValue('twoFactorCode', value)
                  }}
                  onBlur={formik.handleBlur}
                  disabled={isAuthenticating}
                />
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-500">
                  <FontAwesomeIcon icon={faCircleInfo} className="mr-1" />
                  Enter the 6-digit code from your authenticator app
                </p>
                {formik.touched.twoFactorCode && formik.errors.twoFactorCode && (
                  <span className="text-xs text-red-600">{formik.errors.twoFactorCode}</span>
                )}
              </div>
            </div>

            <div id="admin-remember-field" className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberDevice"
                  className="w-4 h-4 text-[#6366F1] border-gray-300 rounded focus:ring-[#6366F1] focus:ring-2"
                  checked={formik.values.rememberDevice}
                  onChange={formik.handleChange}
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

            {process.env.NODE_ENV === 'development' && (
              <button
                type="button"
                onClick={fillTestAdminCredentials}
                className="w-full py-2 text-sm text-purple-600 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition"
              >
                Fill Test Admin Credentials
              </button>
            )}

            <button
              type="submit"
              id="admin-login-button"
              disabled={isAuthenticating || !formik.isValid}
              className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white py-3.5 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-[1.02] transition transform disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
            >
              {isAuthenticating ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faRightToBracket} />
                  <span>Access Admin Panel</span>
                </>
              )}
            </button>

            <div id="admin-security-notice" className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start">
                <FontAwesomeIcon icon={faShieldHalved} className="text-amber-500 mt-0.5 mr-3" />
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
              className="inline-flex items-center text-[#6366F1] font-semibold hover:text-[#8B5CF6] transition hover:scale-105"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Go to Customer Login
            </a>
          </div>
        </div>

        <div id="admin-language-selector" className="mt-6 flex justify-center">
          <div className="bg-white rounded-xl shadow-md px-4 py-2 flex items-center space-x-3">
            <FontAwesomeIcon icon={faGlobe} className="text-gray-400" />
            <button 
              className="text-sm font-semibold text-[#0F172A] hover:text-[#6366F1] transition"
              disabled={isAuthenticating}
            >
              English
            </button>
            <span className="text-gray-300">|</span>
            <button 
              className="text-sm font-semibold text-gray-400 hover:text-[#6366F1] transition"
              disabled={isAuthenticating}
            >
              العربية
            </button>
          </div>
        </div>

        <div id="admin-help-links" className="mt-6 flex justify-center space-x-6 text-sm">
          <a 
            href="/help" 
            className="text-gray-500 hover:text-[#6366F1] transition flex items-center hover:scale-105"
            disabled={isAuthenticating}
          >
            <FontAwesomeIcon icon={faCircleQuestion} className="mr-1" />
            Help Center
          </a>
          <a 
            href="/contact" 
            className="text-gray-500 hover:text-[#6366F1] transition flex items-center hover:scale-105"
            disabled={isAuthenticating}
          >
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