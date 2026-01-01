'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faRobot, faBuilding, faClock, faUsers, faCalendarXmark, 
  faComments, faFilter, faCalendarCheck, faHome, faVideo,
  faCalculator, faList, faDatabase, faChartPie, faStar,
  faCheck, faArrowRight, faPlay, faCalendar, faCheckCircle,
  faGlobe
} from '@fortawesome/free-solid-svg-icons'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RealEstatePage() {
  const stats = [
    { id: 'stat-leads', value: '3.5x', label: 'More Qualified Leads' },
    { id: 'stat-response', value: '24/7', label: 'Instant Responses' },
    { id: 'stat-viewings', value: '85%', label: 'Viewing Booking Rate' },
    { id: 'stat-time', value: '70%', label: 'Time Saved' }
  ]

  const challenges = [
    {
      id: 1,
      icon: faClock,
      title: 'Missed Inquiries',
      description: 'Potential buyers contact you outside business hours and never hear back, losing deals to faster competitors.',
      borderColor: 'border-red-500',
      bgColor: 'bg-red-100',
      iconColor: 'text-red-500'
    },
    {
      id: 2,
      icon: faUsers,
      title: 'Unqualified Leads',
      description: 'Spending hours answering basic questions from unqualified prospects instead of closing deals.',
      borderColor: 'border-orange-500',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-500'
    },
    {
      id: 3,
      icon: faCalendarXmark,
      title: 'Scheduling Chaos',
      description: 'Back-and-forth messages trying to schedule property viewings, wasting valuable time.',
      borderColor: 'border-yellow-500',
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-500'
    }
  ]

  const solutions = [
    {
      id: 1,
      title: 'Never Miss a Lead Again',
      description: 'Your AI-powered bot responds instantly to every inquiry on Facebook and Instagram, 24/7. Capture lead details, answer property questions, and keep prospects engaged even when you\'re sleeping.',
      type: 'Instant Lead Capture',
      gradient: 'from-[#6366F1] to-[#8B5CF6]',
      icon: faComments,
      points: [
        'Instant responses to property inquiries',
        'Automatic lead information collection',
        'Smart follow-up sequences'
      ],
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/0e8bf66063-6033ea4bd61e66c3e38f.png',
      reverse: false
    },
    {
      id: 2,
      title: 'Qualify Leads Automatically',
      description: 'Let your bot ask the right questions to identify serious buyers. Filter by budget, location preferences, property type, and timeline to focus only on qualified prospects.',
      type: 'Smart Qualification',
      gradient: 'from-[#8B5CF6] to-[#EC4899]',
      icon: faFilter,
      points: [
        'Budget and financing status verification',
        'Location and property type preferences',
        'Purchase timeline assessment'
      ],
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/3516410965-cd707a0cb1d81ecc4146.png',
      reverse: true
    },
    {
      id: 3,
      title: 'Book Viewings Instantly',
      description: 'Your bot integrates with your calendar to schedule property viewings automatically. No more back-and-forth messages. Buyers book available slots instantly, and you get notified.',
      type: 'Automated Scheduling',
      gradient: 'from-[#EC4899] to-[#6366F1]',
      icon: faCalendarCheck,
      points: [
        'Real-time calendar synchronization',
        'Automatic viewing confirmations',
        'SMS and email reminders'
      ],
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/f853a70d32-b5fd3836736c8fcb63ea.png',
      reverse: false
    }
  ]

  const features = [
    {
      id: 'feature-property-info',
      title: 'Property Information Bot',
      description: 'Answer questions about square footage, amenities, HOA fees, and neighborhood details instantly.',
      icon: faHome,
      gradient: 'from-[#6366F1] to-[#8B5CF6]'
    },
    {
      id: 'feature-virtual-tours',
      title: 'Virtual Tour Sharing',
      description: 'Automatically send virtual tour links, photos, and videos based on buyer preferences.',
      icon: faVideo,
      gradient: 'from-[#8B5CF6] to-[#EC4899]'
    },
    {
      id: 'feature-mortgage',
      title: 'Mortgage Calculator',
      description: 'Provide instant mortgage estimates and connect buyers with lenders automatically.',
      icon: faCalculator,
      gradient: 'from-[#EC4899] to-[#6366F1]'
    },
    {
      id: 'feature-multi-listing',
      title: 'Multi-Listing Support',
      description: 'Manage conversations for multiple properties across different social media accounts.',
      icon: faList,
      gradient: 'from-[#6366F1] to-[#8B5CF6]'
    },
    {
      id: 'feature-crm',
      title: 'CRM Integration',
      description: 'Sync leads directly to your existing CRM system for seamless follow-up workflows.',
      icon: faDatabase,
      gradient: 'from-[#8B5CF6] to-[#EC4899]'
    },
    {
      id: 'feature-analytics-re',
      title: 'Lead Source Analytics',
      description: 'Track which properties and posts generate the most qualified leads and conversions.',
      icon: faChartPie,
      gradient: 'from-[#EC4899] to-[#6366F1]'
    }
  ]

  const workflowSteps = [
    {
      id: 1,
      title: 'Prospect Discovers Listing',
      description: 'Buyer sees your property post on Facebook or Instagram and comments or sends a message.',
      gradient: 'from-[#6366F1] to-[#8B5CF6]',
      align: 'right'
    },
    {
      id: 2,
      title: 'Bot Engages Instantly',
      description: 'Your bot responds within seconds with property details, photos, and relevant information.',
      gradient: 'from-[#8B5CF6] to-[#EC4899]',
      align: 'left'
    },
    {
      id: 3,
      title: 'Qualification Questions',
      description: 'Bot asks about budget, timeline, financing, and preferences to qualify the lead.',
      gradient: 'from-[#EC4899] to-[#6366F1]',
      align: 'right'
    },
    {
      id: 4,
      title: 'Viewing Scheduled',
      description: 'Qualified buyer books a viewing directly through the bot with your available time slots.',
      gradient: 'from-[#6366F1] to-[#8B5CF6]',
      align: 'left'
    },
    {
      id: 5,
      title: 'You Close the Deal',
      description: 'Focus on showing properties and closing deals with pre-qualified, interested buyers.',
      gradient: 'from-[#8B5CF6] to-[#EC4899]',
      align: 'right'
    }
  ]

  const pricingPlans = [
    {
      id: 'plan-agent',
      category: 'SOLO AGENT',
      name: 'Professional',
      description: 'Perfect for individual agents',
      price: '$79',
      period: '/month',
      features: [
        '5 property listings',
        'Unlimited conversations',
        'Calendar integration',
        'Lead qualification',
        'Basic analytics'
      ],
      buttonText: 'Get Started',
      buttonClass: 'bg-gray-100 hover:bg-gray-200',
      highlight: false
    },
    {
      id: 'plan-team',
      category: 'SMALL TEAM',
      name: 'Team',
      description: 'For small agencies & teams',
      price: '$199',
      period: '/month',
      features: [
        '25 property listings',
        'Unlimited conversations',
        '5 team members',
        'Advanced analytics',
        'CRM integration',
        'Priority support'
      ],
      buttonText: 'Get Started',
      buttonClass: 'bg-white hover:bg-gray-100 text-[#6366F1]',
      highlight: true
    },
    {
      id: 'plan-brokerage',
      category: 'BROKERAGE',
      name: 'Enterprise',
      description: 'For large brokerages',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited listings',
        'Unlimited team members',
        'White-label solution',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 support'
      ],
      buttonText: 'Contact Sales',
      buttonClass: 'bg-gray-100 hover:bg-gray-200',
      highlight: false
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section id="hero-section" className="pt-32 pb-20 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 h-[650px] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#6366F1] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#EC4899] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-white font-semibold text-sm">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />Real Estate Solution
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Transform Your Real Estate Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-300">Automated Lead Generation</span>
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Capture, qualify, and convert property leads 24/7. Schedule viewings instantly, answer buyer questions, and close deals faster with intelligent automation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="bg-white text-[#6366F1] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition">
                Start Free Trial <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
              <a href="#" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#6366F1] transition">
                Watch Demo <FontAwesomeIcon icon={faPlay} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section id="challenges-section" className="py-24 px-6 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Real Estate Challenges We Solve</h2>
            <p className="text-xl text-gray-600">Common pain points facing real estate professionals</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge) => (
              <div 
                key={challenge.id} 
                className={`bg-white p-8 rounded-2xl shadow-lg border-l-4 ${challenge.borderColor}`}
              >
                <div className={`w-14 h-14 ${challenge.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                  <FontAwesomeIcon icon={challenge.icon} className={`${challenge.iconColor} text-2xl`} />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution-section" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">How BotFlow Transforms Your Real Estate Business</h2>
            <p className="text-xl text-gray-600">Intelligent automation designed specifically for real estate professionals</p>
          </div>
          <div className="space-y-20">
            {solutions.map((solution) => (
              <div 
                key={solution.id} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${solution.reverse ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={solution.reverse ? 'order-2 lg:order-1' : ''}>
                  <div className={`inline-block bg-gradient-to-r ${solution.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
                    <FontAwesomeIcon icon={solution.icon} className="mr-2" />
                    {solution.type}
                  </div>
                  <h3 className="text-3xl font-bold text-[#0F172A] mb-4">{solution.title}</h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="space-y-3">
                    {solution.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3 mt-1" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`h-[400px] overflow-hidden rounded-2xl shadow-2xl ${solution.reverse ? 'order-1 lg:order-2' : ''}`}>
                  <img 
                    className="w-full h-full object-cover" 
                    src={solution.image} 
                    alt={solution.title} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-real-estate" className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Real Estate-Specific Features</h2>
            <p className="text-xl text-gray-600">Built for agents, brokers, and property managers</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  <FontAwesomeIcon icon={feature.icon} className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section id="success-story" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Real Results from Real Estate Professionals</h2>
            <p className="text-xl text-gray-600">See how agencies and agents are winning with BotFlow</p>
          </div>
          <div className="bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] p-12 rounded-3xl shadow-2xl text-white">
            <div className="flex items-center mb-8">
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-300 text-xl ml-1" />
              ))}
            </div>
            <blockquote className="text-2xl lg:text-3xl font-light mb-8 leading-relaxed">
              &quot;BotFlow completely transformed how we handle leads. We went from missing 60% of after-hours inquiries to capturing every single one. Our viewing booking rate increased by 85%, and we closed 3x more deals in the first quarter.&quot;
            </blockquote>
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-300 to-pink-300 flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">DM</span>
              </div>
              <div>
                <div className="font-bold text-xl">David Martinez</div>
                <div className="text-indigo-200">Founder & CEO, RealtyPro Estates</div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-[#6366F1] mb-2">+250%</div>
              <p className="text-gray-700 font-medium">Lead Capture Increase</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-[#8B5CF6] mb-2">85%</div>
              <p className="text-gray-700 font-medium">Viewing Conversion Rate</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-[#EC4899] mb-2">3x</div>
              <p className="text-gray-700 font-medium">More Deals Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow-section" className="py-24 px-6 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Your Automated Real Estate Workflow</h2>
            <p className="text-xl text-gray-600">From first contact to closed deal</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#6366F1] via-[#8B5CF6] to-[#EC4899] hidden lg:block"></div>
            <div className="space-y-12">
              {workflowSteps.map((step) => (
                <div key={step.id} className="grid lg:grid-cols-2 gap-8 items-center">
                  {step.align === 'right' ? (
                    <>
                      <div className="lg:text-right">
                        <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
                          <div className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center mb-4 lg:ml-auto`}>
                            <span className="text-white text-xl font-bold">{step.id}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-[#0F172A] mb-3">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                      <div></div>
                    </>
                  ) : (
                    <>
                      <div></div>
                      <div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                          <div className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center mb-4`}>
                            <span className="text-white text-xl font-bold">{step.id}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-[#0F172A] mb-3">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-real-estate" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Pricing for Real Estate Professionals</h2>
            <p className="text-xl text-gray-600 mb-8">Plans designed for agents, brokers, and agencies</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`${plan.highlight 
                  ? 'bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] p-8 rounded-2xl shadow-2xl transform scale-105 relative' 
                  : 'bg-white border-2 border-gray-200 p-8 rounded-2xl hover:border-[#6366F1] hover:shadow-xl transition'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#EC4899] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className={`text-sm font-semibold ${plan.highlight ? 'text-indigo-100' : 'text-[#6366F1]'} mb-2`}>
                  {plan.category}
                </div>
                <h3 className={`text-2xl font-bold ${plan.highlight ? 'text-white' : 'text-[#0F172A]'} mb-2`}>
                  {plan.name}
                </h3>
                <p className={plan.highlight ? 'text-indigo-100 mb-6' : 'text-gray-600 mb-6'}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${plan.highlight ? 'text-white' : 'text-[#0F172A]'}`}>
                    {plan.price}
                  </span>
                  <span className={plan.highlight ? 'text-indigo-100' : 'text-gray-600'}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FontAwesomeIcon 
                        icon={faCheck} 
                        className={plan.highlight ? 'text-white mr-3 mt-1' : 'text-green-500 mr-3 mt-1'} 
                      />
                      <span className={plan.highlight ? 'text-white' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#" 
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition ${plan.buttonClass}`}
                >
                  {plan.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-24 px-6 bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#EC4899]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to 3x Your Real Estate Leads?</h2>
          <p className="text-xl text-indigo-100 mb-8">Join hundreds of successful agents and brokers already using BotFlow</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="#" className="bg-white text-[#6366F1] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition">
              Start Free Trial <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
            <a href="#" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#6366F1] transition">
              Schedule Demo <FontAwesomeIcon icon={faCalendar} className="ml-2" />
            </a>
          </div>
          <p className="text-indigo-100 text-sm">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}