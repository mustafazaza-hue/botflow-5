'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faRobot, faBriefcase, faUsers, faPalette, faChartLine,
  faTag, faBuilding, faUsersGear, faFileChartLine,
  faCheck, faCheckCircle, faArrowRight, faCalendar,
  faStar, faBook, faGraduationCap, faDownload, faGlobe
} from '@fortawesome/free-solid-svg-icons'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function AgenciesPage() {
  const [clients, setClients] = useState(20)
  const [price, setPrice] = useState(299)

  const calculateRevenue = () => {
    const monthlyRevenue = clients * price
    const annualRevenue = monthlyRevenue * 12
    const profit = annualRevenue - 6000 // Assuming $499/month Agency Pro plan
    
    return {
      monthly: monthlyRevenue.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
      annual: annualRevenue.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
      profit: profit.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }
  }

  const revenue = calculateRevenue()

  const challenges = [
    {
      id: 1,
      icon: faUsers,
      title: 'Managing Multiple Clients',
      description: 'Juggling dozens of client accounts across different platforms wastes valuable time.',
      gradient: 'from-red-50 to-orange-50',
      iconBg: 'bg-red-500',
      solution: 'Unified dashboard for all clients'
    },
    {
      id: 2,
      icon: faPalette,
      title: 'Brand Consistency',
      description: 'Generic tools make it hard to maintain your agency\'s professional brand identity.',
      gradient: 'from-blue-50 to-indigo-50',
      iconBg: 'bg-blue-500',
      solution: 'Full white-label customization'
    },
    {
      id: 3,
      icon: faChartLine,
      title: 'Proving ROI',
      description: 'Clients demand clear metrics and tangible results from your automation services.',
      gradient: 'from-purple-50 to-pink-50',
      iconBg: 'bg-purple-500',
      solution: 'Client-ready analytics reports'
    }
  ]

  const features = [
    {
      id: 1,
      title: 'White-Label Branding',
      description: 'Present BotFlow as your own product. Custom domain, logo, colors, and email notifications - all branded with your agency identity.',
      icon: faTag,
      gradient: 'from-[#6366F1] to-[#8B5CF6]',
      points: [
        'Custom domain (clients.youragency.com)',
        'Your logo and brand colors throughout',
        'Branded email notifications',
        'Remove all BotFlow branding'
      ],
      iconColor: 'text-[#6366F1]'
    },
    {
      id: 2,
      title: 'Multi-Client Management',
      description: 'Manage unlimited client workspaces from a single agency dashboard. Switch between clients instantly without logging out.',
      icon: faBuilding,
      gradient: 'from-[#8B5CF6] to-[#EC4899]',
      points: [
        'Unlimited client workspaces',
        'One-click workspace switching',
        'Centralized billing management',
        'Client usage analytics'
      ],
      iconColor: 'text-[#8B5CF6]'
    },
    {
      id: 3,
      title: 'Team Collaboration',
      description: 'Assign team members to specific clients with granular permissions. Track who\'s working on what and maintain quality control.',
      icon: faUsersGear,
      gradient: 'from-[#EC4899] to-[#6366F1]',
      points: [
        'Role-based access control',
        'Client-specific team assignments',
        'Activity logs and audit trails',
        'Internal notes and comments'
      ],
      iconColor: 'text-[#EC4899]'
    },
    {
      id: 4,
      title: 'Client Reporting',
      description: 'Generate beautiful, branded reports that showcase the value you\'re delivering. Automated monthly reports save hours of work.',
      icon: faChartLine,
      gradient: 'from-[#6366F1] to-[#8B5CF6]',
      points: [
        'Branded PDF reports',
        'Automated monthly delivery',
        'Custom metrics and KPIs',
        'Client portal access'
      ],
      iconColor: 'text-[#6366F1]'
    }
  ]

  const workflowSteps = [
    {
      id: 1,
      title: 'Onboard Client',
      description: 'Create client workspace in 2 minutes with pre-built templates',
      gradient: 'from-[#6366F1] to-[#8B5CF6]'
    },
    {
      id: 2,
      title: 'Connect Pages',
      description: 'Link client\'s social media accounts with one-click authorization',
      gradient: 'from-[#8B5CF6] to-[#EC4899]'
    },
    {
      id: 3,
      title: 'Deploy Bots',
      description: 'Use templates or build custom automation flows for their needs',
      gradient: 'from-[#EC4899] to-[#6366F1]'
    },
    {
      id: 4,
      title: 'Monitor & Report',
      description: 'Track performance and send automated monthly reports',
      gradient: 'from-[#6366F1] to-[#8B5CF6]'
    }
  ]

  const pricingPlans = [
    {
      id: 'agency-plan-starter',
      name: 'Agency Starter',
      description: 'Perfect for boutique agencies',
      price: '$199',
      period: '/month',
      features: [
        'Up to 10 client workspaces',
        'White-label branding',
        '5 team members',
        'Basic reporting',
        'Email support'
      ],
      buttonText: 'Get Started',
      buttonClass: 'bg-gray-100 hover:bg-gray-200',
      highlight: false
    },
    {
      id: 'agency-plan-pro',
      name: 'Agency Pro',
      description: 'For growing agencies',
      price: '$499',
      period: '/month',
      features: [
        'Up to 50 client workspaces',
        'Full white-label + custom domain',
        'Unlimited team members',
        'Advanced reporting & analytics',
        'Priority support',
        'Client portal access'
      ],
      buttonText: 'Get Started',
      buttonClass: 'bg-white hover:bg-gray-100 text-[#6366F1]',
      highlight: true
    },
    {
      id: 'agency-plan-enterprise',
      name: 'Agency Enterprise',
      description: 'For large agencies',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited client workspaces',
        'Enterprise white-labeling',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantee',
        '24/7 dedicated support'
      ],
      buttonText: 'Contact Sales',
      buttonClass: 'bg-gray-100 hover:bg-gray-200',
      highlight: false
    }
  ]

  const testimonials = [
    {
      id: 1,
      quote: '"BotFlow\'s white-label solution allowed us to offer chatbot automation as a premium service. We onboarded 30 clients in the first quarter and increased our MRR by 250%. The multi-client dashboard is a game-changer."',
      name: 'Alex Thompson',
      role: 'Founder, Digital Growth Agency',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg',
      gradient: 'from-indigo-50 to-purple-50'
    },
    {
      id: 2,
      quote: '"The automated reporting feature saves us 20+ hours every month. Our clients love the detailed analytics, and we love how easy it is to manage everything from one dashboard. Best investment we\'ve made this year."',
      name: 'Jessica Parker',
      role: 'CEO, Social Media Masters',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg',
      gradient: 'from-pink-50 to-purple-50'
    }
  ]

  const resources = [
    {
      id: 1,
      title: 'Sales Kit',
      description: 'Pre-made proposals, case studies, and pitch decks to close more clients.',
      icon: faBook,
      iconBg: 'bg-blue-500',
      gradient: 'from-blue-50 to-indigo-50',
      linkText: 'Download Kit',
      linkColor: 'text-blue-600'
    },
    {
      id: 2,
      title: 'Training Portal',
      description: 'Video tutorials and certification program for your team members.',
      icon: faGraduationCap,
      iconBg: 'bg-purple-500',
      gradient: 'from-purple-50 to-pink-50',
      linkText: 'Start Learning',
      linkColor: 'text-purple-600'
    },
    {
      id: 3,
      title: 'Agency Community',
      description: 'Connect with other agencies, share strategies, and get exclusive tips.',
      icon: faUsers,
      iconBg: 'bg-pink-500',
      gradient: 'from-pink-50 to-orange-50',
      linkText: 'Join Community',
      linkColor: 'text-pink-600'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section id="hero-section" className="pt-32 pb-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-[700px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm mb-6">
                <span className="text-[#6366F1] font-semibold text-sm">
                  <FontAwesomeIcon icon={faBriefcase} className="mr-2" />For Marketing Agencies
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight mb-6">
                Scale Your Agency with <span className="gradient-text">White-Label</span> Automation
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Manage multiple client accounts effortlessly. Deliver premium chatbot automation services with your branding while we handle the technology.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="#" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition">
                  Start Agency Trial <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </a>
                <a href="#" className="bg-white text-[#6366F1] px-8 py-4 rounded-lg font-semibold text-lg border-2 border-[#6366F1] hover:bg-[#6366F1] hover:text-white transition">
                  Schedule Demo <FontAwesomeIcon icon={faCalendar} className="ml-2" />
                </a>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                  <span>White-label solution</span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                  <span>Unlimited client accounts</span>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 to-[#EC4899]/10 rounded-2xl"></div>
              <div className="relative z-10 p-8 h-full flex items-center justify-center">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl w-full max-w-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faBuilding} className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0F172A]">Agency Dashboard</h3>
                      <p className="text-sm text-gray-600">Multi-Client Management</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Digital Growth Agency</span>
                      <span className="text-sm font-semibold text-green-500">Active</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Social Media Masters</span>
                      <span className="text-sm font-semibold text-green-500">Active</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Brand Boosters Inc</span>
                      <span className="text-sm font-semibold text-yellow-500">Pending</span>
                    </div>
                    <div className="text-center pt-2">
                      <span className="text-xs text-gray-500">+ 15 more clients</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section id="agency-challenges" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Built for Agency Success</h2>
            <p className="text-xl text-gray-600">Everything you need to scale your automation services</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge) => (
              <div 
                key={challenge.id} 
                className={`bg-gradient-to-br ${challenge.gradient} p-8 rounded-2xl`}
              >
                <div className={`w-14 h-14 ${challenge.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                  <FontAwesomeIcon icon={challenge.icon} className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{challenge.title}</h3>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <div className="flex items-center text-green-600 font-semibold">
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                  <span>{challenge.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="agency-features" className="py-24 px-6 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Agency-Specific Features</h2>
            <p className="text-xl text-gray-600">Tools designed specifically for marketing agencies</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {features.slice(0, 2).map((feature) => (
              <div key={feature.id} className="bg-white p-10 rounded-2xl shadow-xl">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  <FontAwesomeIcon icon={feature.icon} className="text-white text-3xl" />
                </div>
                <h3 className="text-3xl font-bold text-[#0F172A] mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <FontAwesomeIcon icon={faCheck} className={`${feature.iconColor} mr-3 mt-1`} />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {features.slice(2, 4).map((feature) => (
              <div key={feature.id} className="bg-white p-10 rounded-2xl shadow-xl">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  <FontAwesomeIcon icon={feature.icon} className="text-white text-3xl" />
                </div>
                <h3 className="text-3xl font-bold text-[#0F172A] mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <FontAwesomeIcon icon={faCheck} className={`${feature.iconColor} mr-3 mt-1`} />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow-section" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Streamlined Agency Workflow</h2>
            <p className="text-xl text-gray-600">From onboarding to reporting - everything simplified</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {workflowSteps.map((step) => (
              <div key={step.id} className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white text-3xl font-bold">{step.id}</span>
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-comparison" className="py-24 px-6 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Agency Pricing</h2>
            <p className="text-xl text-gray-600">Flexible plans that scale with your agency</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`${plan.highlight 
                  ? 'bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] p-8 rounded-2xl shadow-2xl transform scale-105 relative' 
                  : 'bg-white border-2 border-gray-200 p-8 rounded-2xl hover:shadow-xl transition'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#EC4899] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
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

      {/* Testimonials Section */}
      <section id="testimonials-agencies" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">What Agencies Say</h2>
            <p className="text-xl text-gray-600">Trusted by leading marketing agencies worldwide</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className={`bg-gradient-to-br ${testimonial.gradient} p-10 rounded-2xl`}
              >
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-400 text-xl" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center mr-4">
                    <span className="text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-dark text-lg">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="roi-calculator" className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Calculate Your Agency ROI</h2>
            <p className="text-xl text-gray-600">See how much revenue you can generate</p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Number of Clients</label>
                <input 
                  type="number" 
                  value={clients}
                  onChange={(e) => setClients(parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#6366F1] focus:outline-none text-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">Price per Client/Month</label>
                <input 
                  type="number" 
                  value={price}
                  onChange={(e) => setPrice(parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#6366F1] focus:outline-none text-lg"
                />
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] p-8 rounded-xl text-white">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-sm opacity-90 mb-2">Monthly Revenue</div>
                  <div className="text-4xl font-bold">{revenue.monthly}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm opacity-90 mb-2">Annual Revenue</div>
                  <div className="text-4xl font-bold">{revenue.annual}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm opacity-90 mb-2">Your Profit</div>
                  <div className="text-4xl font-bold">{revenue.profit}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="agency-resources" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Agency Resources</h2>
            <p className="text-xl text-gray-600">Everything you need to succeed</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div 
                key={resource.id} 
                className={`bg-gradient-to-br ${resource.gradient} p-8 rounded-2xl hover:shadow-xl transition`}
              >
                <div className={`w-14 h-14 ${resource.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                  <FontAwesomeIcon icon={resource.icon} className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a href="#" className={`${resource.linkColor} font-semibold hover:underline`}>
                  {resource.linkText} <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-24 px-6 bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#EC4899]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Scale Your Agency?</h2>
          <p className="text-xl text-indigo-100 mb-8">Join 500+ agencies already offering chatbot automation as a premium service</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="#" className="bg-white text-[#6366F1] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition">
              Start Agency Trial <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
            <a href="#" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#6366F1] transition">
              Schedule Demo <FontAwesomeIcon icon={faCalendar} className="ml-2" />
            </a>
          </div>
          <p className="text-indigo-100 text-sm">14-day free trial • White-label included • No credit card required</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}