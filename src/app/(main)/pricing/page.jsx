'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faRobot, faTag, faRocket, faCrown, faBuilding, faCheck, 
  faGlobe, faArrowRight, faPlay, faCalendar, faEnvelope,
  faShieldHalved, faHeadset, faRotateLeft, faCheckCircle,
  faTimes, faChevronDown, faRobot as faRobot2, faXmark,
  faLayerGroup, faInfinity, faBolt, faLock, faCertificate,
  faHistory
} from '@fortawesome/free-solid-svg-icons'
import { 
  faFacebook, faTwitter, faLinkedin, faInstagram 
} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'


export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  const pricingPlans = {
    starter: {
      monthly: 29,
      yearly: 278,
      features: [
        '1 Facebook Page',
        '1 Instagram Account',
        '1,000 conversations/month',
        'Basic bot builder',
        'Basic analytics',
        'Email support',
        '2 team members'
      ]
    },
    professional: {
      monthly: 79,
      yearly: 758,
      features: [
        '5 Facebook Pages',
        '5 Instagram Accounts',
        '10,000 conversations/month',
        'Advanced bot builder',
        'AI-powered responses',
        'Advanced analytics & reports',
        'Priority support',
        '10 team members',
        'Campaign automation'
      ]
    },
    business: {
      monthly: 199,
      yearly: 1910,
      features: [
        'Unlimited pages',
        'Unlimited conversations',
        'Enterprise bot builder',
        'Advanced AI features',
        'Custom analytics & dashboards',
        'Dedicated account manager',
        'Unlimited team members',
        'API access & webhooks',
        'White-label options',
        'Custom integrations'
      ]
    }
  }

  const faqItems = [
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! All plans come with a 14-day free trial. No credit card required to start. You can explore all features and decide which plan works best for you.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Absolutely! You can cancel your subscription at any time from your account settings. There are no cancellation fees or long-term commitments.'
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate the charges accordingly.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. For Business plans, we also offer invoicing options.'
    },
    {
      question: 'What happens if I exceed my conversation limit?',
      answer: 'If you exceed your monthly conversation limit, we\'ll notify you in advance. You can either upgrade to a higher plan or purchase additional conversation credits.'
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer: 'Yes! Save 20% when you choose annual billing. This discount is automatically applied when you select the yearly payment option.'
    },
    {
      question: 'Do you offer discounts for nonprofits or educational institutions?',
      answer: 'Yes! We offer special pricing for verified nonprofit organizations and educational institutions. Contact our sales team for more information.'
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'Your data remains accessible for 30 days after cancellation. You can export all your conversation history and analytics before the account is permanently deleted.'
    }
  ]

  const comparisonFeatures = [
    { name: 'Facebook Pages', starter: '1', professional: '5', business: 'Unlimited' },
    { name: 'Instagram Accounts', starter: '1', professional: '5', business: 'Unlimited' },
    { name: 'Monthly Conversations', starter: '1,000', professional: '10,000', business: 'Unlimited' },
    { name: 'Team Members', starter: '2', professional: '10', business: 'Unlimited' },
    { name: 'Bot Builder', starter: true, professional: true, business: true },
    { name: 'AI-Powered Responses', starter: false, professional: true, business: true },
    { name: 'Campaign Automation', starter: false, professional: true, business: true },
    { name: 'Advanced Analytics', starter: false, professional: true, business: true },
    { name: 'API Access', starter: false, professional: false, business: true },
    { name: 'White-Label', starter: false, professional: false, business: true },
    { name: 'Dedicated Support', starter: false, professional: false, business: true }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
<Header />

      {/* Hero Section */}
      <section id="pricing-hero" className="pt-32 pb-16 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm mb-6">
            <span className="text-[#6366F1] font-semibold text-sm">
              <FontAwesomeIcon icon={faTag} className="mr-2" />Simple & Transparent
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6">Choose Your Perfect Plan</h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            No hidden fees. No surprises. Cancel anytime. Start with a 14-day free trial.
          </p>
          <div className="inline-flex bg-white p-1.5 rounded-xl shadow-lg">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-8 py-3 rounded-lg font-semibold shadow-sm transition ${!isYearly ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white' : 'text-gray-600 hover:text-[#6366F1]'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-8 py-3 rounded-lg font-semibold transition ${isYearly ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white' : 'text-gray-600 hover:text-[#6366F1]'}`}
            >
              Yearly <span className="text-xs text-green-600 ml-2 bg-green-50 px-2 py-1 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing-plans" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Starter Plan */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="p-8 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#0F172A]">Starter</h3>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faRocket} className="text-blue-600 text-xl" />
                  </div>
                </div>
                <p className="text-gray-600 mb-6">Perfect for small businesses getting started</p>
                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-5xl font-bold text-[#0F172A]">
                      ${isYearly ? pricingPlans.starter.yearly : pricingPlans.starter.monthly}
                    </span>
                    <span className="text-gray-600 ml-2">/{isYearly ? 'year' : 'month'}</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    {isYearly ? 'Save $70 compared to monthly' : 'or $278/year (save $70)'}
                  </p>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {pricingPlans.starter.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <FontAwesomeIcon icon={faCheck} className="text-green-600 text-xs" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-[#0F172A] py-3.5 rounded-xl font-semibold transition-all duration-300">
                  Start Free Trial
                </button>
                <p className="text-center text-xs text-gray-500 mt-3">No credit card required</p>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#EC4899] rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#EC4899] text-white px-6 py-2 text-sm font-bold rounded-bl-2xl">
                MOST POPULAR
              </div>
              <div className="p-8 border-b border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">Professional</h3>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faCrown} className="text-white text-xl" />
                  </div>
                </div>
                <p className="text-indigo-100 mb-6">For growing businesses that need more</p>
                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-5xl font-bold text-white">
                      ${isYearly ? pricingPlans.professional.yearly : pricingPlans.professional.monthly}
                    </span>
                    <span className="text-indigo-100 ml-2">/{isYearly ? 'year' : 'month'}</span>
                  </div>
                  <p className="text-sm text-indigo-100">
                    {isYearly ? 'Save $190 compared to monthly' : 'or $758/year (save $190)'}
                  </p>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {pricingPlans.professional.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <FontAwesomeIcon icon={faCheck} className="text-white text-xs" />
                      </div>
                      <span className="text-white font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-white text-[#6366F1] py-3.5 rounded-xl font-semibold hover:shadow-xl transition-all duration-300">
                  Start Free Trial
                </button>
                <p className="text-center text-xs text-indigo-100 mt-3">Most popular choice</p>
              </div>
            </div>

            {/* Business Plan */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="p-8 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#0F172A]">Business</h3>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faBuilding} className="text-purple-600 text-xl" />
                  </div>
                </div>
                <p className="text-gray-600 mb-6">For large teams and enterprises</p>
                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-5xl font-bold text-[#0F172A]">
                      ${isYearly ? pricingPlans.business.yearly : pricingPlans.business.monthly}
                    </span>
                    <span className="text-gray-600 ml-2">/{isYearly ? 'year' : 'month'}</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    {isYearly ? 'Save $478 compared to monthly' : 'or $1,910/year (save $478)'}
                  </p>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {pricingPlans.business.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <FontAwesomeIcon icon={faCheck} className="text-green-600 text-xs" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white py-3.5 rounded-xl font-semibold hover:shadow-xl transition-all duration-300">
                  Contact Sales
                </button>
                <p className="text-center text-xs text-gray-500 mt-3">Custom enterprise pricing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison-table" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Compare All Features</h2>
            <p className="text-xl text-gray-600">Find the perfect plan for your business needs</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-bold text-[#0F172A]">Features</th>
                  <th className="text-center py-4 px-6 font-bold text-[#0F172A]">Starter</th>
                  <th className="text-center py-4 px-6 font-bold text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-t-xl">Professional</th>
                  <th className="text-center py-4 px-6 font-bold text-[#0F172A]">Business</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-gray-700">{feature.name}</td>
                    <td className="text-center py-4 px-6 text-gray-600">
                      {typeof feature.starter === 'boolean' ? (
                        feature.starter ? (
                          <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                        ) : (
                          <FontAwesomeIcon icon={faTimes} className="text-gray-300" />
                        )
                      ) : (
                        feature.starter
                      )}
                    </td>
                    <td className="text-center py-4 px-6 text-gray-600 bg-gradient-to-r from-[#6366F1]/10 to-[#8B5CF6]/10">
                      {typeof feature.professional === 'boolean' ? (
                        feature.professional ? (
                          <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                        ) : (
                          <FontAwesomeIcon icon={faTimes} className="text-gray-300" />
                        )
                      ) : (
                        feature.professional
                      )}
                    </td>
                    <td className="text-center py-4 px-6 text-gray-600">
                      {typeof feature.business === 'boolean' ? (
                        feature.business ? (
                          <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                        ) : (
                          <FontAwesomeIcon icon={faTimes} className="text-gray-300" />
                        )
                      ) : (
                        feature.business
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="pricing-faq" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Pricing FAQs</h2>
            <p className="text-xl text-gray-600">Common questions about our pricing</p>
          </div>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                  <FontAwesomeIcon icon={faChevronDown} className="text-gray-400 mt-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section id="enterprise-cta" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#6366F1]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8B5CF6]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-4">Need a Custom Solution?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Looking for enterprise features, custom integrations, or volume pricing? Our team is here to help build the perfect solution for your organization.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="bg-white text-[#0F172A] px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition inline-flex items-center">
                  <FontAwesomeIcon icon={faCalendar} className="mr-2" /> Schedule a Call
                </a>
                <a href="#" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#0F172A] transition inline-flex items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section id="trust-badges" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faShieldHalved} className="text-green-600 text-2xl" />
              </div>
              <h3 className="font-bold text-[#0F172A] mb-2">Secure & Compliant</h3>
              <p className="text-sm text-gray-600">GDPR & SOC 2 certified</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faHeadset} className="text-blue-600 text-2xl" />
              </div>
              <h3 className="font-bold text-[#0F172A] mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-600">Always here to help</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faRotateLeft} className="text-purple-600 text-2xl" />
              </div>
              <h3 className="font-bold text-[#0F172A] mb-2">30-Day Guarantee</h3>
              <p className="text-sm text-gray-600">Money-back guarantee</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faRocket} className="text-pink-600 text-2xl" />
              </div>
              <h3 className="font-bold text-[#0F172A] mb-2">Instant Setup</h3>
              <p className="text-sm text-gray-600">Go live in minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="final-cta" className="py-20 px-6 bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#EC4899]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Start Your Free Trial Today</h2>
          <p className="text-xl text-indigo-100 mb-8">No credit card required. No setup fees. Cancel anytime.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="#" className="bg-white text-[#6366F1] px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition inline-flex items-center">
              Start Free Trial <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
            <a href="#" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#6366F1] transition inline-flex items-center">
              Watch Demo <FontAwesomeIcon icon={faPlay} className="ml-2" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-indigo-100 text-sm">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
<Footer />
    </main>
  )
}