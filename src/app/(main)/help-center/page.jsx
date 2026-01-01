'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRobot, faGaugeHigh, faComments, faChartLine,
  faCircleQuestion, faGlobe, faBell, faGear,
  faBook, faGraduationCap, faTicket,
  faRocket, faBrain, faChartBar, faShareNodes,
  faPlay, faServer, faDatabase,
  faSearch, faChevronRight, faLightbulb,
  faEye, faPlug, faCreditCard,
  faCheckCircle, faSpinner
} from '@fortawesome/free-solid-svg-icons'
import { faBell as faBellRegular } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const quickLinks = [
    {
      id: 'documentation',
      icon: faBook,
      title: 'Documentation',
      description: 'Complete guides and API references',
      bgColor: 'bg-[#6366F1]/10',
      hoverBgColor: 'hover:bg-[#6366F1]',
      iconColor: 'text-[#6366F1]',
      hoverIconColor: 'group-hover:text-white'
    },
    {
      id: 'tutorials',
      icon: faGraduationCap,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      bgColor: 'bg-[#8B5CF6]/10',
      hoverBgColor: 'hover:bg-[#8B5CF6]',
      iconColor: 'text-[#8B5CF6]',
      hoverIconColor: 'group-hover:text-white'
    },
    {
      id: 'forum',
      icon: faComments,
      title: 'Community Forum',
      description: 'Connect with other users',
      bgColor: 'bg-[#EC4899]/10',
      hoverBgColor: 'hover:bg-[#EC4899]',
      iconColor: 'text-[#EC4899]',
      hoverIconColor: 'group-hover:text-white'
    },
    {
      id: 'ticket',
      icon: faTicket,
      title: 'Submit Ticket',
      description: 'Get personalized support',
      bgColor: 'bg-green-500/10',
      hoverBgColor: 'hover:bg-green-500',
      iconColor: 'text-green-500',
      hoverIconColor: 'group-hover:text-white'
    }
  ]

  const categories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: faRocket,
      fromColor: '#6366F1',
      toColor: '#8B5CF6',
      articles: [
        { title: 'Quick Start Guide' },
        { title: 'Account Setup' },
        { title: 'Connecting Social Media' },
        { title: 'First Bot Creation' }
      ],
      totalArticles: 12
    },
    {
      id: 'bot-builder',
      title: 'Bot Builder',
      icon: faRobot,
      fromColor: '#8B5CF6',
      toColor: '#EC4899',
      articles: [
        { title: 'Visual Flow Builder' },
        { title: 'Triggers & Conditions' },
        { title: 'AI Response Setup' },
        { title: 'Testing Your Bot' }
      ],
      totalArticles: 18
    },
    {
      id: 'conversations',
      title: 'Conversations',
      icon: faComments,
      fromColor: '#EC4899',
      toColor: '#6366F1',
      articles: [
        { title: 'Managing Inbox' },
        { title: 'Assigning to Team' },
        { title: 'Manual Override' },
        { title: 'Conversation History' }
      ],
      totalArticles: 15
    },
    {
      id: 'analytics',
      title: 'Analytics & Reports',
      icon: faChartLine,
      fromColor: '#10B981',
      toColor: '#06B6D4',
      articles: [
        { title: 'Understanding Metrics' },
        { title: 'Custom Reports' },
        { title: 'Export Data' },
        { title: 'Conversion Tracking' }
      ],
      totalArticles: 10
    },
    {
      id: 'integrations',
      title: 'Integrations',
      icon: faPlug,
      fromColor: '#F59E0B',
      toColor: '#EF4444',
      articles: [
        { title: 'Facebook Integration' },
        { title: 'Instagram Integration' },
        { title: 'Webhooks Setup' },
        { title: 'API Documentation' }
      ],
      totalArticles: 14
    },
    {
      id: 'billing',
      title: 'Billing & Plans',
      icon: faCreditCard,
      fromColor: '#3B82F6',
      toColor: '#06B6D4',
      articles: [
        { title: 'Plan Comparison' },
        { title: 'Upgrade/Downgrade' },
        { title: 'Payment Methods' },
        { title: 'Invoices & Receipts' }
      ],
      totalArticles: 8
    }
  ]

  const popularArticles = [
    {
      id: 'article-1',
      icon: faLightbulb,
      title: 'How to create your first chatbot in 5 minutes',
      description: 'Step-by-step guide to building and deploying your first bot',
      views: '2,451',
      bgColor: 'bg-[#6366F1]/10',
      hoverBgColor: 'hover:bg-[#6366F1]',
      iconColor: 'text-[#6366F1]'
    },
    {
      id: 'article-2',
      icon: faBrain,
      title: 'Understanding AI-powered responses',
      description: 'Learn how our AI generates natural conversation responses',
      views: '1,892',
      bgColor: 'bg-[#8B5CF6]/10',
      hoverBgColor: 'hover:bg-[#8B5CF6]',
      iconColor: 'text-[#8B5CF6]'
    },
    {
      id: 'article-3',
      icon: faChartBar,
      title: 'Tracking and improving bot performance',
      description: 'Use analytics to optimize your chatbot\'s effectiveness',
      views: '1,673',
      bgColor: 'bg-[#EC4899]/10',
      hoverBgColor: 'hover:bg-[#EC4899]',
      iconColor: 'text-[#EC4899]'
    },
    {
      id: 'article-4',
      icon: faShareNodes,
      title: 'Connecting multiple social media accounts',
      description: 'Manage Facebook and Instagram from one dashboard',
      views: '1,521',
      bgColor: 'bg-green-500/10',
      hoverBgColor: 'hover:bg-green-500',
      iconColor: 'text-green-500'
    }
  ]

  const videoTutorials = [
    {
      id: 'video-1',
      title: 'Getting Started with BotFlow',
      description: 'Complete walkthrough of the platform',
      duration: '5:32',
      gradient: 'from-[#6366F1] to-[#8B5CF6]',
      playIconColor: 'text-[#6366F1]'
    },
    {
      id: 'video-2',
      title: 'Building Your First Bot',
      description: 'Visual flow builder tutorial',
      duration: '8:15',
      gradient: 'from-[#8B5CF6] to-[#EC4899]',
      playIconColor: 'text-[#8B5CF6]'
    },
    {
      id: 'video-3',
      title: 'Advanced Analytics Setup',
      description: 'Track and optimize performance',
      duration: '6:48',
      gradient: 'from-[#EC4899] to-[#6366F1]',
      playIconColor: 'text-[#EC4899]'
    }
  ]

  const supportOptions = [
    {
      id: 'support-ticket',
      icon: faTicket,
      title: 'Submit a Ticket',
      description: 'Get personalized help from our support team',
      gradient: 'from-[#6366F1] to-[#8B5CF6]',
      buttonText: 'Open Ticket'
    },
    {
      id: 'support-chat',
      icon: faComments,
      title: 'Live Chat',
      description: 'Chat with us in real-time for quick answers',
      gradient: 'from-[#8B5CF6] to-[#EC4899]',
      buttonText: 'Start Chat'
    },
    {
      id: 'support-email',
      icon: faComments,
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond within 24h',
      gradient: 'from-[#EC4899] to-[#6366F1]',
      buttonText: 'Send Email'
    }
  ]

  const systemStatus = [
    { service: 'API Services', icon: faServer, status: 'Operational' },
    { service: 'Bot Processing', icon: faRobot, status: 'Operational' },
    { service: 'Social Media Integration', icon: faShareNodes, status: 'Operational' },
    { service: 'Database', icon: faDatabase, status: 'Operational' }
  ]

  return (
    <div className="bg-gray-50">
      <nav id="header" className="fixed w-full top-0 z-50 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-9 h-9 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faRobot} className="text-white text-lg" />
              </div>
              <span className="text-lg font-bold text-[#0F172A]">BotFlow</span>
            </Link>
            <div className="hidden lg:flex items-center space-x-1">
              <a href="#" className="px-3 py-2 text-gray-600 hover:text-[#6366F1] hover:bg-gray-50 rounded-lg font-medium transition">
                <FontAwesomeIcon icon={faGaugeHigh} className="mr-2" />Dashboard
              </a>
              <a href="#" className="px-3 py-2 text-gray-600 hover:text-[#6366F1] hover:bg-gray-50 rounded-lg font-medium transition">
                <FontAwesomeIcon icon={faRobot} className="mr-2" />Bots
              </a>
              <a href="#" className="px-3 py-2 text-gray-600 hover:text-[#6366F1] hover:bg-gray-50 rounded-lg font-medium transition">
                <FontAwesomeIcon icon={faComments} className="mr-2" />Conversations
              </a>
              <a href="#" className="px-3 py-2 text-gray-600 hover:text-[#6366F1] hover:bg-gray-50 rounded-lg font-medium transition">
                <FontAwesomeIcon icon={faChartLine} className="mr-2" />Analytics
              </a>
              <a href="/help" className="px-3 py-2 bg-[#6366F1]/10 text-[#6366F1] rounded-lg font-semibold">
                <FontAwesomeIcon icon={faCircleQuestion} className="mr-2" />Help Center
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="text-gray-600 hover:text-[#6366F1] px-3 py-2 rounded-lg font-medium transition">
              <FontAwesomeIcon icon={faGlobe} className="mr-2" />EN
            </button>
            <button className="relative p-2 text-gray-600 hover:text-[#6366F1] rounded-lg transition">
              <FontAwesomeIcon icon={faBellRegular} className="text-xl" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#EC4899] rounded-full"></span>
            </button>
            <button className="p-2 text-gray-600 hover:text-[#6366F1] rounded-lg transition">
              <FontAwesomeIcon icon={faGear} className="text-xl" />
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                className="w-full h-full rounded-full object-cover"
                alt="User"
              />
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <div className="bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#EC4899] text-white px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">How can we help you?</h1>
            <p className="text-lg text-indigo-100 mb-8">Search our knowledge base or browse categories below</p>
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search for articles, guides, or tutorials..."
                className="w-full px-6 py-4 pr-12 rounded-xl text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-white/30 shadow-xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#6366F1] text-white px-6 py-2 rounded-lg hover:bg-[#6366F1]/90 transition">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </div>

        <div id="quick-links-section" className="max-w-7xl mx-auto px-6 -mt-8">
          <div className="grid md:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <a
                key={link.id}
                href="#"
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition group"
              >
                <div className={`w-12 h-12 ${link.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:${link.hoverBgColor} group-hover:scale-110 transition`}>
                  <FontAwesomeIcon
                    icon={link.icon}
                    className={`${link.iconColor} text-xl ${link.hoverIconColor}`}
                  />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2">{link.title}</h3>
                <p className="text-sm text-gray-600">{link.description}</p>
              </a>
            ))}
          </div>
        </div>

        <div id="categories-section" className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Browse by Category</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition"
              >
                <div
                  className="p-4"
                  style={{
                    background: `linear-gradient(to right, ${category.fromColor}, ${category.toColor})`
                  }}
                >
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <FontAwesomeIcon icon={category.icon} className="mr-3" />
                    {category.title}
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.articles.map((article, index) => (
                      <li key={index}>
                        <a href="#" className="flex items-center justify-between text-gray-700 hover:text-[#6366F1] transition group">
                          <span className="group-hover:translate-x-1 transition">{article.title}</span>
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            className="text-gray-400 group-hover:text-[#6366F1]"
                          />
                        </a>
                      </li>
                    ))}
                    <li>
                      <a href="#" className="text-[#6366F1] font-semibold hover:underline text-sm">
                        View all {category.totalArticles} articles →
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="popular-articles-section" className="max-w-7xl mx-auto px-6 py-16 bg-white">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Popular Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {popularArticles.map((article) => (
              <a
                key={article.id}
                href="#"
                className="flex items-start p-6 border border-gray-200 rounded-xl hover:border-[#6366F1] hover:shadow-lg transition group"
              >
                <div className={`w-12 h-12 ${article.bgColor} rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:${article.hoverBgColor} transition`}>
                  <FontAwesomeIcon
                    icon={article.icon}
                    className={`${article.iconColor} text-xl group-hover:text-white`}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] mb-2 group-hover:text-[#6366F1] transition">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{article.description}</p>
                  <span className="text-xs text-gray-500">
                    <FontAwesomeIcon icon={faEye} className="mr-1" />
                    {article.views} views
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div id="video-tutorials-section" className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-8">Video Tutorials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {videoTutorials.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition"
              >
                <div className={`relative h-48 bg-gradient-to-br ${video.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition cursor-pointer">
                      <FontAwesomeIcon icon={faPlay} className={`${video.playIconColor} text-xl ml-1`} />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#0F172A] mb-2">{video.title}</h3>
                  <p className="text-sm text-gray-600">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="support-options-section" className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Still Need Help?</h2>
            <p className="text-lg text-gray-600">Our support team is here for you</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {supportOptions.map((option) => (
              <div
                key={option.id}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${option.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <FontAwesomeIcon icon={option.icon} className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <a
                  href="#"
                  className={`inline-block bg-gradient-to-r ${option.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition`}
                >
                  {option.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div id="system-status-section" className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#0F172A]">System Status</h2>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-green-600 font-semibold">All Systems Operational</span>
              </div>
            </div>
            <div className="space-y-4">
              {systemStatus.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={service.icon} className="text-gray-600 mr-3" />
                    <span className="font-medium text-[#0F172A]">{service.service}</span>
                  </div>
                  <span className="text-green-600 font-semibold">{service.status}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href="#" className="text-[#6366F1] font-semibold hover:underline">
                View Status History →
              </a>
            </div>
          </div>
        </div>
      </div>

<Footer />
    </div>
  )
}