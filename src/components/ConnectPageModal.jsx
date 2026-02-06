import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faKeybase } from '@fortawesome/free-brands-svg-icons'
import { faLinkSlash, faTimes } from '@fortawesome/free-solid-svg-icons'
// import { faTimes, faFacebook, faInstagram, faLink, faKey } from '@fortawesome/free-solid-svg-icons'

const ConnectPageModal = ({ platform, onConnect, onClose, isLoading }) => {
  const [step, setStep] = useState(1)
  const [selectedBots, setSelectedBots] = useState([])

  const validationSchema = Yup.object({
    accessToken: Yup.string()
      .required('Access token is required')
      .min(10, 'Token seems too short'),
    platform: Yup.string()
      .required('Platform is required')
      .oneOf(['facebook', 'instagram'], 'Invalid platform'),
  })

  const formik = useFormik({
    initialValues: {
      platform: platform || '',
      accessToken: '',
      webhookUrl: '',
      pageName: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      const pageData = {
        ...values,
        botIds: selectedBots,
      }
      await onConnect(pageData)
    },
  })

  const platformConfig = {
    facebook: {
      name: 'Facebook',
      icon: faFacebookF,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      instructions: [
        'Go to your Facebook Developer Portal',
        'Create or select your app',
        'Get Page Access Token with required permissions',
        'Paste the token below'
      ]
    },
    instagram: {
      name: 'Instagram',
      icon: faInstagram,
      color: 'text-pink-600',
      bgColor: 'bg-pink-100',
      instructions: [
        'Connect your Facebook Page to Instagram',
        'Go to Meta Business Suite',
        'Get Instagram Access Token',
        'Paste the token below'
      ]
    }
  }

  const config = platformConfig[platform] || platformConfig.facebook

  // قائمة البوتات الوهمية (ستأتي من API في الحقيقة)
  const availableBots = [
    { id: 'bot-1', name: 'Customer Support Bot' },
    { id: 'bot-2', name: 'Sales Assistant Bot' },
    { id: 'bot-3', name: 'FAQ Bot' },
  ]

  const handleBotToggle = (botId) => {
    setSelectedBots(prev =>
      prev.includes(botId)
        ? prev.filter(id => id !== botId)
        : [...prev, botId]
    )
  }

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-2">How to get your Access Token:</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          {config.instructions.map((instruction, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              {instruction}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Page Access Token *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faKeybase} className="text-gray-400" />
          </div>
          <input
            type="text"
            name="accessToken"
            value={formik.values.accessToken}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your access token here"
            className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              formik.touched.accessToken && formik.errors.accessToken
                ? 'border-red-300'
                : 'border-gray-300'
            }`}
          />
        </div>
        {formik.touched.accessToken && formik.errors.accessToken && (
          <p className="mt-1 text-sm text-red-600">{formik.errors.accessToken}</p>
        )}
        <p className="mt-1 text-xs text-gray-500">
          This token will be securely encrypted and stored
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Custom Page Name (Optional)
        </label>
        <input
          type="text"
          name="pageName"
          value={formik.values.pageName}
          onChange={formik.handleChange}
          placeholder="e.g., Main Support Page"
          className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold text-gray-900 mb-4">Assign Bots to This Page</h4>
        <p className="text-sm text-gray-600 mb-4">
          Select which bots should handle messages from this page
        </p>
        
        <div className="space-y-3">
          {availableBots.map(bot => (
            <label
              key={bot.id}
              className={`flex items-center p-4 border rounded-lg cursor-pointer transition ${
                selectedBots.includes(bot.id)
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <input
                type="checkbox"
                checked={selectedBots.includes(bot.id)}
                onChange={() => handleBotToggle(bot.id)}
                className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <div className="ml-3">
                <span className="font-medium text-gray-900">{bot.name}</span>
                <p className="text-sm text-gray-500 mt-1">
                  Handles customer inquiries and support
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Webhook URL (Optional)
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faLinkSlash} className="text-gray-400" />
          </div>
          <input
            type="url"
            name="webhookUrl"
            value={formik.values.webhookUrl}
            onChange={formik.handleChange}
            placeholder="https://your-webhook-url.com"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <p className="mt-1 text-xs text-gray-500">
          For receiving real-time updates from the platform
        </p>
      </div>
    </div>
  )

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className={`w-12 h-12 ${config.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                <FontAwesomeIcon icon={config.icon} className={`${config.color} text-2xl`} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Connect {config.name} Page</h2>
                <p className="text-sm text-gray-500">Step {step} of 2</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition"
            >
              <FontAwesomeIcon icon={faTimes} className="text-xl" />
            </button>
          </div>
          
          {/* Progress Steps */}
          <div className="flex items-center mt-6">
            {[1, 2].map((stepNum) => (
              <div key={stepNum} className="flex items-center flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  stepNum < step ? 'bg-blue-100 text-blue-600' :
                  stepNum === step ? 'bg-blue-600 text-white' :
                  'bg-gray-100 text-gray-400'
                }`}>
                  {stepNum}
                </div>
                {stepNum < 2 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    stepNum < step ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <form onSubmit={formik.handleSubmit}>
            {step === 1 ? renderStep1() : renderStep2()}
          </form>
        </div>

        {/* Footer Buttons */}
        <div className="border-t border-gray-200 p-6">
          <div className="flex justify-between">
            {step === 1 ? (
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
              >
                Cancel
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
              >
                Back
              </button>
            )}
            
            <div className="flex space-x-3">
              {step === 1 && (
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!formik.values.accessToken || formik.errors.accessToken}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              )}
              
              {step === 2 && (
                <button
                  type="submit"
                  onClick={formik.handleSubmit}
                  disabled={isLoading || selectedBots.length === 0}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Connecting...' : 'Connect Page'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectPageModal