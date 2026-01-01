// app/settings/page.js
'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRobot, faChevronDown, faUser, faLock, faShieldHalved,
  faBell, faGear, faGlobe, faUsers, faUserShield,
  faPlug, faWebhook, faCode, faChartPie, faCreditCard,
  faReceipt, faClockRotateLeft, faFileExport, faTrash,
  faArrowLeft, faUpload, faCopy, faArrowsRotate,
  faTriangleExclamation, faCrown
} from '@fortawesome/free-solid-svg-icons'
import { faBell as faBellRegular, faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'
import { faWebflow } from '@fortawesome/free-brands-svg-icons'

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState('workspace')
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [weeklyReports, setWeeklyReports] = useState(false)

  const accountItems = [
    { id: 'profile', label: 'Profile', icon: faUserRegular },
    { id: 'password', label: 'Password', icon: faLock },
    { id: '2fa', label: 'Two-Factor Authentication', icon: faShieldHalved },
    { id: 'notifications', label: 'Notifications', icon: faBellRegular }
  ]

  const workspaceItems = [
    { id: 'general', label: 'General', icon: faGear, isActive: activeSection === 'workspace' },
    { id: 'language', label: 'Language & Timezone', icon: faGlobe },
    { id: 'team', label: 'Team Members', icon: faUsers },
    { id: 'roles', label: 'Roles & Permissions', icon: faUserShield }
  ]

  const integrationsItems = [
    { id: 'apps', label: 'Connected Apps', icon: faPlug },
    { id: 'webhooks', label: 'Webhooks', icon: faWebflow },
    { id: 'api', label: 'API Keys', icon: faCode }
  ]

  const billingItems = [
    { id: 'plan', label: 'Current Plan', icon: faChartPie },
    { id: 'payment', label: 'Payment Methods', icon: faCreditCard },
    { id: 'invoices', label: 'Invoices', icon: faReceipt }
  ]

  const advancedItems = [
    { id: 'logs', label: 'Activity Logs', icon: faClockRotateLeft },
    { id: 'export', label: 'Export Data', icon: faFileExport },
    { id: 'delete', label: 'Delete Workspace', icon: faTrash, isDanger: true }
  ]

  const sections = [
    { 
      id: 'account', 
      title: 'Account', 
      items: accountItems 
    },
    { 
      id: 'workspace', 
      title: 'Workspace', 
      items: workspaceItems 
    },
    { 
      id: 'integrations', 
      title: 'Integrations', 
      items: integrationsItems 
    },
    { 
      id: 'billing', 
      title: 'Billing & Subscription', 
      items: billingItems 
    },
    { 
      id: 'advanced', 
      title: 'Advanced', 
      items: advancedItems 
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-72 bg-white border-r border-gray-200 h-screen overflow-y-auto fixed left-0 top-0">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faRobot} className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold text-[#0F172A]">BotFlow</span>
            </div>

            <div className="space-y-6">
              {sections.map((section) => (
                <div key={section.id} className="space-y-1">
                  <button 
                    className="flex items-center w-full text-left mb-3 text-[#0F172A] hover:bg-gray-50 rounded-lg p-2 transition"
                    onClick={() => setActiveSection(section.id)}
                  >
                    <FontAwesomeIcon 
                      icon={faChevronDown} 
                      className={`text-xs mr-3 text-gray-500 ${activeSection === section.id ? 'rotate-0' : '-rotate-90'} transition-transform`}
                    />
                    <span className="text-sm font-semibold">{section.title}</span>
                  </button>
                  
                  <div className="ml-8 space-y-2">
                    {section.items.map((item) => (
                      <a
                        key={item.id}
                        href="#"
                        className={`flex items-center py-2 px-3 rounded-lg transition ${
                          item.isActive
                            ? 'bg-indigo-50 border-l-4 border-[#6366F1]'
                            : 'text-gray-700 hover:bg-gray-50'
                        } ${item.isDanger ? 'text-red-600 hover:text-red-700' : ''}`}
                        onClick={(e) => {
                          e.preventDefault()
                          if (item.id === 'general') {
                            setActiveSection('workspace')
                          }
                        }}
                      >
                        <FontAwesomeIcon 
                          icon={item.icon} 
                          className={`mr-3 w-5 text-center ${
                            item.isActive 
                              ? 'text-[#6366F1]' 
                              : item.isDanger 
                                ? 'text-red-500' 
                                : 'text-gray-500'
                          }`} 
                        />
                        <span className={`text-sm ${item.isActive ? 'font-medium text-[#6366F1]' : ''}`}>
                          {item.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-72 p-8 bg-gray-50 flex-1">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <a className="hover:text-[#6366F1] transition" href="#">Settings</a>
                  <span className="mx-2">/</span>
                  <span className="font-medium text-[#0F172A]">Workspace</span>
                </div>
                <h1 className="text-3xl font-bold text-[#0F172A]">Workspace Settings</h1>
                <p className="text-gray-600 mt-2">Manage your workspace preferences and configuration</p>
              </div>
              <button className="flex items-center space-x-2 bg-white border border-gray-200 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition">
                <FontAwesomeIcon icon={faArrowLeft} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Back to Dashboard</span>
              </button>
            </div>

            {/* Workspace Name Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-[#0F172A] mb-1">Workspace Name</h2>
                <p className="text-sm text-gray-600">Update your workspace display name</p>
              </div>
              <div className="flex items-center space-x-4">
                <input 
                  type="text" 
                  defaultValue="My Awesome Workspace" 
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-[#0F172A] focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/20 outline-none transition" 
                />
                <button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Workspace Logo Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-[#0F172A] mb-1">Workspace Logo</h2>
                <p className="text-sm text-gray-600">Upload a logo to personalize your workspace</p>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center">
                  <FontAwesomeIcon icon={faRobot} className="text-white text-3xl" />
                </div>
                <div className="flex-1">
                  <div className="flex space-x-3">
                    <button className="bg-gray-100 text-[#0F172A] px-5 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition">
                      <FontAwesomeIcon icon={faUpload} className="mr-2" />Upload Logo
                    </button>
                    <button className="text-red-600 px-5 py-2.5 rounded-lg font-medium hover:bg-red-50 transition">
                      <FontAwesomeIcon icon={faTrash} className="mr-2" />Remove
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Recommended size: 200x200px. Max file size: 2MB</p>
                </div>
              </div>
            </div>

            {/* Brand Color Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-[#0F172A] mb-1">Brand Color</h2>
                <p className="text-sm text-gray-600">Customize the primary color for your workspace</p>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#6366F1] rounded-xl border-4 border-gray-100 shadow-sm"></div>
                  <div>
                    <input 
                      type="text" 
                      defaultValue="#6366F1" 
                      className="border border-gray-300 rounded-lg px-4 py-2 text-[#0F172A] font-mono text-sm w-32 focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/20 outline-none transition" 
                    />
                    <p className="text-xs text-gray-500 mt-1">HEX Color Code</p>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition">
                  Apply Color
                </button>
              </div>
            </div>

            {/* Language & Timezone Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-[#0F172A] mb-1">Language & Timezone</h2>
                <p className="text-sm text-gray-600">Set your preferred language and timezone</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">Language</label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#0F172A] focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/20 outline-none transition">
                    <option>English</option>
                    <option>العربية (Arabic)</option>
                    <option>Español</option>
                    <option>Français</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">Timezone</label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-[#0F172A] focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/20 outline-none transition">
                    <option>UTC +00:00 (GMT)</option>
                    <option>UTC +03:00 (Arabia Standard Time)</option>
                    <option>UTC -05:00 (Eastern Time)</option>
                    <option>UTC -08:00 (Pacific Time)</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition">
                  Save Preferences
                </button>
              </div>
            </div>

            {/* Custom Domain Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h2 className="text-lg font-bold text-[#0F172A]">Custom Domain</h2>
                    <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      <FontAwesomeIcon icon={faCrown} className="mr-1" />Pro
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Set up a custom domain for your workspace</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <input 
                  type="text" 
                  defaultValue="awesome-workspace-7k2m.botflow.app" 
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-[#0F172A] bg-gray-50 font-mono text-sm focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/20 outline-none transition" 
                  readOnly 
                />
                <button className="text-gray-600 px-4 py-2.5 rounded-lg hover:bg-gray-100 transition">
                  <FontAwesomeIcon icon={faCopy} />
                </button>
                <button className="text-gray-600 px-4 py-2.5 rounded-lg hover:bg-gray-100 transition">
                  <FontAwesomeIcon icon={faArrowsRotate} />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">Your workspace URL. Old links will redirect to any new domain you set.</p>
            </div>

            {/* Notification Preferences Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-[#0F172A] mb-1">Notification Preferences</h2>
                <p className="text-sm text-gray-600">Control how you receive workspace notifications</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div>
                    <p className="font-medium text-[#0F172A]">Email Notifications</p>
                    <p className="text-sm text-gray-600">Receive updates via email</p>
                  </div>
                  <ToggleSwitch checked={emailNotifications} onChange={setEmailNotifications} />
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div>
                    <p className="font-medium text-[#0F172A]">Push Notifications</p>
                    <p className="text-sm text-gray-600">Receive browser push notifications</p>
                  </div>
                  <ToggleSwitch checked={pushNotifications} onChange={setPushNotifications} />
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium text-[#0F172A]">Weekly Reports</p>
                    <p className="text-sm text-gray-600">Receive weekly performance summaries</p>
                  </div>
                  <ToggleSwitch checked={weeklyReports} onChange={setWeeklyReports} />
                </div>
              </div>
            </div>

            {/* Danger Zone Section */}
            <div className="bg-white rounded-xl border-2 border-red-200 p-6">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-red-600 mb-1">Danger Zone</h2>
                <p className="text-sm text-gray-600">Irreversible and destructive actions</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <div className="flex items-start">
                  <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-500 mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm font-semibold text-red-800 mb-1">Delete Workspace</p>
                    <p className="text-sm text-red-700">Once you delete your workspace, there is no going back. All data, bots, conversations, and settings will be permanently deleted.</p>
                  </div>
                </div>
              </div>
              <button className="bg-red-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-red-700 transition">
                <FontAwesomeIcon icon={faTrash} className="mr-2" />Delete Workspace
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

// Toggle Switch Component
function ToggleSwitch({ checked, onChange }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input 
        type="checkbox" 
        className="sr-only peer" 
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#6366F1]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6366F1]"></div>
    </label>
  )
}