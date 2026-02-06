import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faRobot, faMessage, faCode, faSpinner } from '@fortawesome/free-solid-svg-icons';

const BotFormModal = ({ bot, onSave, onClose, isLoading, pages = [] }) => {
  const [selectedPages, setSelectedPages] = useState(bot?.pageIds || []);

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Bot name is required')
      .min(3, 'Name must be at least 3 characters')
      .max(100, 'Name must be less than 100 characters'),
    description: Yup.string()
      .max(500, 'Description must be less than 500 characters'),
    welcomeMessage: Yup.string()
      .required('Welcome message is required')
      .max(1000, 'Welcome message is too long'),
    fallbackMessage: Yup.string()
      .required('Fallback message is required')
      .max(1000, 'Fallback message is too long'),
    flowConfiguration: Yup.string()
      .required('Flow configuration is required'),
    isAutoResponder: Yup.boolean(),
  });

  const formik = useFormik({
    initialValues: {
      name: bot?.name || '',
      description: bot?.description || '',
      welcomeMessage: bot?.welcomeMessage || 'Hello! How can I help you today?',
      fallbackMessage: bot?.fallbackMessage || "I'm sorry, I didn't understand that. Could you please rephrase?",
      flowConfiguration: bot?.flowConfiguration || '{}',
      isAutoResponder: bot?.isAutoResponder || false,
    },
    validationSchema,
    onSubmit: async (values) => {
      const botData = {
        ...values,
        pageIds: selectedPages,
      };
      await onSave(botData);
    },
  });

  const togglePageSelection = (pageId) => {
    setSelectedPages(prev =>
      prev.includes(pageId)
        ? prev.filter(id => id !== pageId)
        : [...prev, pageId]
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={faRobot} className="text-indigo-600 text-2xl" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {bot ? 'Edit Bot' : 'Create New Bot'}
                </h2>
                <p className="text-sm text-gray-500">
                  {bot ? 'Update your bot configuration' : 'Configure your new chatbot'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition"
              disabled={isLoading}
            >
              <FontAwesomeIcon icon={faTimes} className="text-xl" />
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <form onSubmit={formik.handleSubmit}>
            <div className="space-y-6">
              {/* Basic Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bot Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      disabled={isLoading}
                      className={`block w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                        formik.touched.name && formik.errors.name
                          ? 'border-red-300'
                          : 'border-gray-300'
                      } ${isLoading ? 'bg-gray-50' : ''}`}
                      placeholder="e.g., Customer Support Bot"
                    />
                    {formik.touched.name && formik.errors.name && (
                      <p className="mt-1 text-sm text-red-600">{formik.errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      disabled={isLoading}
                      rows="2"
                      className={`block w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                        formik.touched.description && formik.errors.description
                          ? 'border-red-300'
                          : 'border-gray-300'
                      } ${isLoading ? 'bg-gray-50' : ''}`}
                      placeholder="Describe what this bot does..."
                    />
                    {formik.touched.description && formik.errors.description && (
                      <p className="mt-1 text-sm text-red-600">{formik.errors.description}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Connected Pages */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Connected Pages</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Select which pages this bot will handle messages from
                </p>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {pages.length === 0 ? (
                    <p className="text-sm text-gray-400 p-3 border border-gray-200 rounded-lg">
                      No pages available. Connect pages first from the Pages section.
                    </p>
                  ) : (
                    pages.map(page => (
                      <label
                        key={page.id}
                        className={`flex items-center p-3 border rounded-lg cursor-pointer transition ${
                          selectedPages.includes(page.id)
                            ? 'border-indigo-500 bg-indigo-50'
                            : 'border-gray-200 hover:border-gray-300'
                        } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedPages.includes(page.id)}
                          onChange={() => !isLoading && togglePageSelection(page.id)}
                          disabled={isLoading}
                          className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                        />
                        <div className="ml-3">
                          <span className="font-medium text-gray-900">{page.name}</span>
                          <p className="text-sm text-gray-500">{page.platform}</p>
                        </div>
                      </label>
                    ))
                  )}
                </div>
              </div>

              {/* Messages */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <FontAwesomeIcon icon={faMessage} className="mr-2" />
                  Messages
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Welcome Message *
                    </label>
                    <textarea
                      name="welcomeMessage"
                      value={formik.values.welcomeMessage}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      disabled={isLoading}
                      rows="3"
                      className={`block w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                        formik.touched.welcomeMessage && formik.errors.welcomeMessage
                          ? 'border-red-300'
                          : 'border-gray-300'
                      } ${isLoading ? 'bg-gray-50' : ''}`}
                      placeholder="What should the bot say when starting a conversation?"
                    />
                    {formik.touched.welcomeMessage && formik.errors.welcomeMessage && (
                      <p className="mt-1 text-sm text-red-600">{formik.errors.welcomeMessage}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fallback Message *
                    </label>
                    <textarea
                      name="fallbackMessage"
                      value={formik.values.fallbackMessage}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      disabled={isLoading}
                      rows="3"
                      className={`block w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                        formik.touched.fallbackMessage && formik.errors.fallbackMessage
                          ? 'border-red-300'
                          : 'border-gray-300'
                      } ${isLoading ? 'bg-gray-50' : ''}`}
                      placeholder="What should the bot say when it doesn't understand?"
                    />
                    {formik.touched.fallbackMessage && formik.errors.fallbackMessage && (
                      <p className="mt-1 text-sm text-red-600">{formik.errors.fallbackMessage}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Advanced Settings */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <FontAwesomeIcon icon={faCode} className="mr-2" />
                  Advanced Settings
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Flow Configuration (JSON) *
                    </label>
                    <textarea
                      name="flowConfiguration"
                      value={formik.values.flowConfiguration}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      disabled={isLoading}
                      rows="4"
                      className={`block w-full px-3 py-2 border rounded-lg font-mono text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                        formik.touched.flowConfiguration && formik.errors.flowConfiguration
                          ? 'border-red-300'
                          : 'border-gray-300'
                      } ${isLoading ? 'bg-gray-50' : ''}`}
                      placeholder='{"nodes": [], "edges": []}'
                    />
                    {formik.touched.flowConfiguration && formik.errors.flowConfiguration && (
                      <p className="mt-1 text-sm text-red-600">{formik.errors.flowConfiguration}</p>
                    )}
                    <p className="mt-1 text-xs text-gray-500">
                      Enter valid JSON configuration for your bot's conversation flow
                    </p>
                  </div>

                  <div className={`flex items-center justify-between p-3 border rounded-lg ${
                    isLoading ? 'bg-gray-50 border-gray-200' : 'border-gray-200'
                  }`}>
                    <div>
                      <span className="font-medium text-gray-900">Auto Responder</span>
                      <p className="text-sm text-gray-500">Automatically respond to messages</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => !isLoading && formik.setFieldValue('isAutoResponder', !formik.values.isAutoResponder)}
                      disabled={isLoading}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                        formik.values.isAutoResponder ? 'bg-indigo-600' : 'bg-gray-200'
                      } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                          formik.values.isAutoResponder ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Footer Buttons */}
        <div className="border-t border-gray-200 p-6">
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={formik.handleSubmit}
              disabled={isLoading || !formik.isValid}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {isLoading ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
                  Saving...
                </>
              ) : bot ? (
                'Update Bot'
              ) : (
                'Create Bot'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotFormModal;