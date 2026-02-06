'use client'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faEnvelope, faUserTag, faMessage, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { SYSTEM_COLORS, COLOR_SCHEME } from '@/api/team'

const InviteMemberModal = ({ isOpen, onClose, onSubmit, roles }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      role: roles.length > 0 ? roles[0].name : 'Viewer',
      message: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Please enter a valid email address')
        .required('Email address is required'),
      role: Yup.string()
        .required('Please select a role'),
      message: Yup.string()
        .max(500, 'Message cannot exceed 500 characters')
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await onSubmit(values)
        formik.resetForm()
      } catch (error) {
        console.error('Error submitting form:', error)
      } finally {
        setSubmitting(false)
      }
    }
  })

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-sm"
          onClick={onClose}
        ></div>

        {/* Modal panel */}
        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-gray-200">
          {/* Header */}
          <div className="px-8 pt-8 pb-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Invite Team Member</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Send an invitation to join your team
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition p-2 hover:bg-gray-100 rounded-xl"
              >
                <FontAwesomeIcon icon={faTimes} className="text-lg" />
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={formik.handleSubmit}>
            <div className="px-8 py-6 space-y-6">
              {/* Email field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <FontAwesomeIcon 
                    icon={faEnvelope} 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
                  />
                  <input
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition ${
                      formik.touched.email && formik.errors.email
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                        : 'border-gray-200'
                    }`}
                    placeholder="team.member@company.com"
                  />
                </div>
                {formik.touched.email && formik.errors.email && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                    {formik.errors.email}
                  </p>
                )}
              </div>

              {/* Role field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Team Role
                </label>
                <div className="relative">
                  <FontAwesomeIcon 
                    icon={faUserTag} 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" 
                  />
                  <select
                    name="role"
                    value={formik.values.role}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition appearance-none bg-white"
                  >
                    {roles.map((role) => (
                      <option key={role.id} value={role.name}>
                        {role.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {formik.touched.role && formik.errors.role && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                    {formik.errors.role}
                  </p>
                )}
              </div>

              {/* Message field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FontAwesomeIcon icon={faMessage} className="mr-2 text-gray-400" />
                  Personal Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  rows="4"
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition ${
                    formik.touched.message && formik.errors.message
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                      : 'border-gray-200'
                  }`}
                  placeholder="Welcome to our team! You'll be working on exciting projects..."
                  maxLength="500"
                />
                <div className="flex justify-between mt-2">
                  {formik.touched.message && formik.errors.message ? (
                    <p className="text-sm text-red-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                      {formik.errors.message}
                    </p>
                  ) : (
                    <div></div>
                  )}
                  <span className={`text-xs ${
                    formik.values.message.length > 480 
                      ? 'text-amber-600' 
                      : 'text-gray-400'
                  }`}>
                    {formik.values.message.length}/500 characters
                  </span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition font-medium hover:border-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="px-6 py-3 text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:shadow-lg transition font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center hover:shadow-indigo-500/25"
              >
                {formik.isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                    Send Invitation
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default InviteMemberModal