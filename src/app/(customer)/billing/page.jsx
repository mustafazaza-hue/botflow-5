// app/billing/page.js
'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRobot, faHome, faComments, faShareNodes,
  faChartLine, faBullhorn, faUsers, faCreditCard,
  faCog, faClipboardList, faQuestionCircle, faChevronDown,
  faBell, faGlobe, faHistory, faCrown, faCalendarCheck,
  faBolt, faCheckCircle, faArrowUp, faTimes, faEdit,
  faPlus, faDownload, faRocket, faBuilding, faCheck
} from '@fortawesome/free-solid-svg-icons'
import { faCcVisa } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import Sidebar from '@/components/Sidebar'

export default function BillingPage() {
  const [autoRenewEnabled, setAutoRenewEnabled] = useState(true)

  const currentPlan = {
    name: 'Professional Plan',
    price: '$79',
    period: '/month',
    status: 'Active',
    nextBilling: 'March 15, 2024',
    usage: '5,847 / 10,000',
    autoRenew: autoRenewEnabled ? 'Enabled' : 'Disabled',
    features: [
      '5 Facebook Pages',
      '5 Instagram Accounts',
      '10,000 conversations/month',
      'Advanced analytics',
      'AI-powered responses',
      'Priority support'
    ]
  }

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      icon: faRocket,
      iconColor: 'text-gray-600',
      iconBg: 'bg-gray-100',
      features: [
        '1 Facebook Page',
        '1 Instagram Account',
        '1,000 conversations/month',
        'Basic analytics'
      ],
      buttonText: 'Downgrade',
      buttonStyle: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'For growing businesses',
      icon: faCrown,
      iconColor: 'text-white',
      iconBg: 'bg-white/20',
      features: [
        '5 Facebook Pages',
        '5 Instagram Accounts',
        '10,000 conversations/month',
        'Advanced analytics'
      ],
      buttonText: 'Current Plan',
      buttonStyle: 'bg-white text-[#6366F1] hover:bg-gray-100',
      isCurrent: true
    },
    {
      id: 'business',
      name: 'Business',
      price: '$199',
      period: '/month',
      description: 'For large enterprises',
      icon: faBuilding,
      iconColor: 'text-white',
      iconBg: 'bg-gradient-to-br from-[#EC4899] to-[#6366F1]',
      features: [
        'Unlimited pages',
        'Unlimited conversations',
        'Custom analytics',
        'Team collaboration'
      ],
      buttonText: 'Upgrade',
      buttonStyle: 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:shadow-lg'
    }
  ]

  const paymentMethod = {
    type: 'visa',
    lastFour: '4242',
    holder: 'John Doe',
    expires: '12/25',
    isPrimary: true
  }

  const billingAddress = {
    company: 'BotFlow Technologies Inc.',
    address: '123 Tech Street, Suite 100',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94102',
    country: 'United States'
  }

  const invoices = [
    {
      id: 'INV-2024-001',
      date: 'Feb 15, 2024',
      description: 'Professional Plan - Monthly',
      amount: '$79.00',
      status: 'Paid',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 'INV-2024-002',
      date: 'Jan 15, 2024',
      description: 'Professional Plan - Monthly',
      amount: '$79.00',
      status: 'Paid',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 'INV-2023-012',
      date: 'Dec 15, 2023',
      description: 'Professional Plan - Monthly',
      amount: '$79.00',
      status: 'Paid',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 'INV-2023-011',
      date: 'Nov 15, 2023',
      description: 'Starter Plan - Monthly',
      amount: '$29.00',
      status: 'Paid',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 'INV-2023-010',
      date: 'Oct 15, 2023',
      description: 'Starter Plan - Monthly',
      amount: '$29.00',
      status: 'Paid',
      statusColor: 'bg-green-100 text-green-800'
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <Sidebar activeItem="billing" />

      {/* Header */}
      <div className="fixed top-0 left-64 right-0 h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 z-10">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-[#0F172A]">Billing & Subscription</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-500 hover:text-[#6366F1] transition">
            <FontAwesomeIcon icon={faBell} className="text-xl" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#EC4899] rounded-full"></span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-[#6366F1] px-3 py-2 rounded-lg transition">
            <FontAwesomeIcon icon={faGlobe} />
            <span className="text-sm font-medium">EN</span>
          </button>
          <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
            <img 
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" 
              className="w-9 h-9 rounded-full" 
              alt="User" 
            />
            <div className="text-sm">
              <div className="font-semibold text-[#0F172A]">John Doe</div>
              <div className="text-xs text-gray-500">Owner</div>
            </div>
            <FontAwesomeIcon icon={faChevronDown} className="text-gray-400 text-xs" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 pt-16">
        <div className="p-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold text-[#0F172A]">Current Plan</h2>
              <button className="text-[#6366F1] text-sm font-semibold hover:underline flex items-center">
                <FontAwesomeIcon icon={faHistory} className="mr-2" />View billing history
              </button>
            </div>
            <p className="text-gray-600">Manage your subscription and billing details</p>
          </div>

          {/* Current Plan Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] p-8 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <h3 className="text-3xl font-bold">Professional Plan</h3>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">Active</span>
                  </div>
                  <p className="text-indigo-100 text-lg mb-6">Everything you need to scale your business</p>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-5xl font-bold">$79</span>
                    <span className="text-xl text-indigo-100">/month</span>
                  </div>
                </div>
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center">
                  <FontAwesomeIcon icon={faCrown} className="text-white text-3xl" />
                </div>
              </div>
            </div>
            
            <div className="p-8">
              {/* Plan Details */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faCalendarCheck} className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Next billing date</div>
                    <div className="text-lg font-semibold text-[#0F172A]">March 15, 2024</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faChartLine} className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Usage this month</div>
                    <div className="text-lg font-semibold text-[#0F172A]">5,847 / 10,000</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faBolt} className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Auto-renew</div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-semibold text-[#0F172A]">
                        {autoRenewEnabled ? 'Enabled' : 'Disabled'}
                      </span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={autoRenewEnabled}
                          onChange={() => setAutoRenewEnabled(!autoRenewEnabled)}
                          className="sr-only peer" 
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#6366F1] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6366F1]"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plan Features */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-[#0F172A] mb-4">Plan Features</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentPlan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between">
                <button className="px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-lg font-semibold hover:shadow-lg transition">
                  <FontAwesomeIcon icon={faArrowUp} className="mr-2" />Upgrade Plan
                </button>
                <button className="px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-lg font-semibold hover:border-gray-300 transition">
                  <FontAwesomeIcon icon={faTimes} className="mr-2" />Cancel Subscription
                </button>
              </div>
            </div>
          </div>

          {/* Plan Comparison */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {plans.map((plan) => (
              <div 
                key={plan.id} 
                className={`bg-white rounded-2xl shadow-sm p-6 transition ${
                  plan.isCurrent 
                    ? 'bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] text-white transform scale-105 relative' 
                    : 'border-2 border-gray-100 hover:border-[#6366F1] hover:shadow-lg'
                }`}
              >
                {plan.isCurrent && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#EC4899] text-white px-4 py-1 rounded-full text-xs font-bold">
                    CURRENT PLAN
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-xl font-bold ${plan.isCurrent ? '' : 'text-[#0F172A]'}`}>
                    {plan.name}
                  </h3>
                  <div className={`w-12 h-12 ${plan.iconBg} rounded-xl flex items-center justify-center`}>
                    <FontAwesomeIcon icon={plan.icon} className={plan.iconColor} />
                  </div>
                </div>
                
                <p className={`mb-4 ${plan.isCurrent ? 'text-indigo-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.isCurrent ? '' : 'text-[#0F172A]'}`}>
                    {plan.price}
                  </span>
                  <span className={plan.isCurrent ? 'text-indigo-100' : 'text-gray-600'}>
                    {plan.period}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <FontAwesomeIcon 
                        icon={faCheck} 
                        className={`mr-2 ${plan.isCurrent ? 'text-white' : 'text-green-500'}`} 
                      />
                      <span className={plan.isCurrent ? '' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition ${plan.buttonStyle}`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>

          {/* Payment Method & Billing Address */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Payment Method */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-[#0F172A]">Payment Method</h3>
                <button className="text-[#6366F1] text-sm font-semibold hover:underline">
                  <FontAwesomeIcon icon={faPlus} className="mr-1" />Add New
                </button>
              </div>
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 text-white mb-4">
                <div className="flex items-center justify-between mb-8">
                  <FontAwesomeIcon icon={faCcVisa} className="text-4xl" />
                  {paymentMethod.isPrimary && (
                    <span className="text-xs font-semibold bg-white/20 px-2 py-1 rounded">Primary</span>
                  )}
                </div>
                <div className="text-xl font-mono tracking-wider mb-4">•••• •••• •••• {paymentMethod.lastFour}</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Card Holder</div>
                    <div className="text-sm font-semibold">{paymentMethod.holder}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Expires</div>
                    <div className="text-sm font-semibold">{paymentMethod.expires}</div>
                  </div>
                </div>
              </div>
              <button className="w-full py-3 border-2 border-gray-200 text-gray-700 rounded-lg font-semibold hover:border-gray-300 transition">
                <FontAwesomeIcon icon={faEdit} className="mr-2" />Update Payment Method
              </button>
            </div>

            {/* Billing Address */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-[#0F172A]">Billing Address</h3>
                <button className="text-[#6366F1] text-sm font-semibold hover:underline">
                  <FontAwesomeIcon icon={faEdit} className="mr-1" />Edit
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Company</div>
                  <div className="text-base font-medium text-[#0F172A]">{billingAddress.company}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Address</div>
                  <div className="text-base font-medium text-[#0F172A]">{billingAddress.address}</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">City</div>
                    <div className="text-base font-medium text-[#0F172A]">{billingAddress.city}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">State</div>
                    <div className="text-base font-medium text-[#0F172A]">{billingAddress.state}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">ZIP Code</div>
                    <div className="text-base font-medium text-[#0F172A]">{billingAddress.zipCode}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Country</div>
                    <div className="text-base font-medium text-[#0F172A]">{billingAddress.country}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Invoice History */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-1">Invoice History</h3>
                  <p className="text-sm text-gray-600">Download and view your past invoices</p>
                </div>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition">
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />Export All
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Invoice ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {invoices.map((invoice) => (
                    <tr key={invoice.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <span className="text-sm font-mono text-gray-900">#{invoice.id}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">{invoice.date}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-900">{invoice.description}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-semibold text-gray-900">{invoice.amount}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${invoice.statusColor}`}>
                          <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
                          {invoice.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-[#6366F1] hover:text-[#8B5CF6] transition">
                          <FontAwesomeIcon icon={faDownload} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="p-6 border-t border-gray-100 flex items-center justify-between">
              <div className="text-sm text-gray-600">Showing 5 of 24 invoices</div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition">
                  Previous
                </button>
                <button className="px-3 py-2 bg-[#6366F1] text-white rounded-lg text-sm font-medium hover:bg-[#8B5CF6] transition">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}