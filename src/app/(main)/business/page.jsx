'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faRobot, faStore, faClock, faWallet, faUsers,
  faBolt, faDollarSign, faUserPlus, faCalendarCheck,
  faTruck, faStar, faLanguage, faCheck, faCheckCircle,
  faCircleXmark, faCircleCheck, faXmark, faArrowRight,
  faTag, faPhone, faGlobe
} from '@fortawesome/free-solid-svg-icons'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SmallBusinessPage() {
  const challenges = [
    {
      id: 1,
      icon: faClock,
      title: 'Limited Time',
      description: 'You\'re juggling operations, sales, marketing, and customer service. There aren\'t enough hours in the day.',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-500'
    },
    {
      id: 2,
      icon: faWallet,
      title: 'Tight Budget',
      description: 'Hiring a full customer service team isn\'t realistic. You need affordable solutions that actually work.',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-500'
    },
    {
      id: 3,
      icon: faUsers,
      title: 'Customer Expectations',
      description: 'Customers expect instant responses 24/7, but you can\'t be online all the time.',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-500'
    }
  ]

  const benefits = [
    {
      id: 1,
      title: '24/7 Customer Service',
      description: 'Your bot never sleeps. Answer customer questions instantly, even at 3 AM on weekends.',
      icon: faRobot,
      gradient: 'from-[#6366F1] to-[#8B5CF6]'
    },
    {
      id: 2,
      title: 'Fraction of the Cost',
      description: 'Starting at just $29/month—less than hiring one part-time employee. No training costs, no benefits.',
      icon: faDollarSign,
      gradient: 'from-[#8B5CF6] to-[#EC4899]'
    },
    {
      id: 3,
      title: 'Set Up in Minutes',
      description: 'No technical skills needed. Our simple interface gets you up and running in under 15 minutes.',
      icon: faBolt,
      gradient: 'from-[#EC4899] to-[#6366F1]'
    }
  ]

  const features = [
    {
      id: 'feature-instant-responses',
      title: 'Instant Responses',
      description: 'Answer common questions automatically. Your bot handles FAQs, pricing, hours, and more—instantly.',
      icon: faBolt,
      gradient: 'from-[#6366F1] to-[#8B5CF6]',
      borderColor: 'hover:border-[#6366F1]'
    },
    {
      id: 'feature-lead-capture',
      title: 'Lead Capture',
      description: 'Collect customer information automatically. Build your email list while you sleep.',
      icon: faUserPlus,
      gradient: 'from-[#8B5CF6] to-[#EC4899]',
      borderColor: 'hover:border-[#8B5CF6]'
    },
    {
      id: 'feature-appointment-booking',
      title: 'Appointment Booking',
      description: 'Let customers book appointments directly through chat. Reduce no-shows with automatic reminders.',
      icon: faCalendarCheck,
      gradient: 'from-[#EC4899] to-[#6366F1]',
      borderColor: 'hover:border-[#EC4899]'
    },
    {
      id: 'feature-order-tracking',
      title: 'Order Tracking',
      description: 'Automate order status updates. Reduce "Where\'s my order?" messages by 90%.',
      icon: faTruck,
      gradient: 'from-[#6366F1] to-[#8B5CF6]',
      borderColor: 'hover:border-[#6366F1]'
    },
    {
      id: 'feature-product-recommendations',
      title: 'Product Recommendations',
      description: 'Suggest products based on customer questions. Increase average order value automatically.',
      icon: faStar,
      gradient: 'from-[#8B5CF6] to-[#EC4899]',
      borderColor: 'hover:border-[#8B5CF6]'
    },
    {
      id: 'feature-multi-language',
      title: 'Multi-Language Support',
      description: 'Serve customers in English and Arabic. Expand your market without hiring translators.',
      icon: faLanguage,
      gradient: 'from-[#EC4899] to-[#6366F1]',
      borderColor: 'hover:border-[#EC4899]'
    }
  ]

  const successStories = [
    {
      id: 1,
      quote: '"I was answering the same questions 50 times a day. BotFlow freed up 15 hours a week so I could focus on growing my business. Sales are up 60%!"',
      name: 'Maria Rodriguez',
      role: 'Owner, Bella Boutique',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg'
    },
    {
      id: 2,
      quote: '"As a solo entrepreneur, I can\'t be online 24/7. BotFlow handles night inquiries and I wake up to qualified leads. Game changer!"',
      name: 'James Wilson',
      role: 'Founder, FitLife Coaching',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg'
    },
    {
      id: 3,
      quote: '"I was skeptical about bots, but setup was so easy! Now my customers get instant answers and I save $2,000/month compared to hiring help."',
      name: 'Ahmed Hassan',
      role: 'Owner, Tech Repair Shop',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg'
    }
  ]

  const withoutBotFlow = [
    { label: 'Customer response time', value: '2-24 hours' },
    { label: 'Hours spent on support/week', value: '20+ hours' },
    { label: 'Monthly cost (your time)', value: '$1,600+' },
    { label: 'Missed opportunities', value: 'Countless', color: 'text-red-500' }
  ]

  const withBotFlow = [
    { label: 'Customer response time', value: 'Instant', color: 'text-green-600' },
    { label: 'Hours spent on support/week', value: '5 hours', color: 'text-green-600' },
    { label: 'Monthly cost', value: '$29-79', color: 'text-green-600' },
    { label: 'Conversion rate increase', value: '+45%', color: 'text-green-600' }
  ]

  const pricingPlans = [
    {
      id: 'starter-plan',
      badge: 'Perfect for Solo Entrepreneurs',
      name: 'Starter',
      description: 'Everything you need to get started',
      price: '$29',
      period: '/month',
      features: [
        '1 Facebook Page + 1 Instagram',
        '1,000 conversations/month',
        'Unlimited bots & flows',
        'Basic analytics',
        'Email support'
      ],
      buttonText: 'Start Free Trial',
      buttonClass: 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white hover:shadow-xl',
      highlight: false
    },
    {
      id: 'pro-plan',
      badge: 'Best for Growing Businesses',
      name: 'Professional',
      description: 'Scale your customer service',
      price: '$79',
      period: '/month',
      features: [
        '5 Pages + 5 Instagram accounts',
        '10,000 conversations/month',
        'AI-powered responses',
        'Advanced analytics & reports',
        'Team collaboration (3 users)',
        'Priority support'
      ],
      buttonText: 'Start Free Trial',
      buttonClass: 'bg-white text-[#6366F1] hover:bg-gray-100',
      highlight: true
    }
  ]

  const comparisonTable = [
    {
      feature: 'Monthly Cost',
      hiringStaff: '$2,000+',
      freelancers: '$500-1,500',
      botflow: '$29-79',
      botflowHighlight: true
    },
    {
      feature: '24/7 Availability',
      hiringStaff: false,
      freelancers: false,
      botflow: true,
      botflowHighlight: false
    },
    {
      feature: 'Instant Responses',
      hiringStaff: false,
      freelancers: false,
      botflow: true,
      botflowHighlight: false
    },
    {
      feature: 'Setup Time',
      hiringStaff: 'Weeks',
      freelancers: 'Days',
      botflow: '15 Minutes',
      botflowHighlight: true
    },
    {
      feature: 'Scalability',
      hiringStaff: 'Difficult',
      freelancers: 'Moderate',
      botflow: 'Instant',
      botflowHighlight: true
    }
  ]

  const faqs = [
    {
      question: 'I\'m not tech-savvy. Is BotFlow really easy to use?',
      answer: 'Yes! If you can use Facebook, you can use BotFlow. Our drag-and-drop builder is designed for non-technical users. Plus, we have video tutorials and support to help you every step of the way.'
    },
    {
      question: 'What if customers ask questions my bot can\'t answer?',
      answer: 'Your bot will automatically escalate complex questions to you. You\'ll get a notification and can take over the conversation manually. Over time, you can train your bot to handle more questions.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Absolutely! No contracts, no commitments. Cancel anytime with one click. We\'re confident you\'ll love BotFlow, so we don\'t lock you in.'
    },
    {
      question: 'Will my customers know they\'re talking to a bot?',
      answer: 'You decide! You can be transparent and add a friendly "I\'m a bot" message, or make it seamless. Our AI responses are natural enough that many customers won\'t notice the difference.'
    },
    {
      question: 'How long does setup take?',
      answer: 'Most small businesses are up and running in under 15 minutes. Connect your accounts, create a few simple responses, and you\'re live. You can always add more complexity later.'
    },
    {
      question: 'What if I need help?',
      answer: 'We\'re here for you! Email support is included with all plans. Professional plan users get priority support. We also have a comprehensive help center with guides and videos.'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section id="hero-section" className="pt-32 pb-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-[650px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm mb-6">
                <span className="text-[#6366F1] font-semibold text-sm">
                  <FontAwesomeIcon icon={faStore} className="mr-2" />For Small Businesses
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight mb-6">
                Compete with <span className="gradient-text">Big Brands</span> on Any Budget
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Level the playing field. Deliver enterprise-grade customer service without the enterprise budget. Automate your social media and focus on what matters most—growing your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition">
                  Start Free Trial <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </a>
                <a href="#" className="bg-white text-[#6366F1] px-8 py-4 rounded-lg font-semibold text-lg border-2 border-[#6366F1] hover:bg-[#6366F1] hover:text-white transition">
                  See Pricing <FontAwesomeIcon icon={faTag} className="ml-2" />
                </a>
              </div>
            </div>
            <div className="relative h-[450px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 to-[#EC4899]/10 rounded-2xl"></div>
              <div className="relative z-10 p-8 h-full flex items-center justify-center">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl w-full max-w-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faRobot} className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0F172A]">Small Business Assistant</h3>
                      <p className="text-sm text-gray-600">Always Available Support</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Customer: "What are your opening hours?"</p>
                    </div>
                    <div className="bg-gradient-to-r from-[#6366F1]/10 to-[#8B5CF6]/10 p-3 rounded-lg">
                      <p className="text-sm text-[#0F172A] font-medium">Bot: "We're open Mon-Fri 9AM-6PM, Sat 10AM-4PM. Can I help with anything specific?"</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Customer: "Do you offer delivery?"</p>
                    </div>
                    <div className="bg-gradient-to-r from-[#6366F1]/10 to-[#8B5CF6]/10 p-3 rounded-lg">
                      <p className="text-sm text-[#0F172A] font-medium">Bot: "Yes! Free delivery within 5km. Want me to check your address?"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section id="challenges-section" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">We Understand Your Challenges</h2>
            <p className="text-xl text-gray-600">Running a small business means wearing many hats</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-100">
                <div className={`w-16 h-16 ${challenge.iconBg} rounded-xl flex items-center justify-center mb-6`}>
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
      <section id="solution-section" className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Your Affordable Automation Solution</h2>
            <p className="text-xl text-gray-600">BotFlow gives you enterprise capabilities at small business prices</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="h-[400px] overflow-hidden rounded-2xl shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 to-[#EC4899]/20"></div>
              <div className="relative z-10 p-8 h-full flex items-center justify-center">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl w-full">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mr-3">
                      <FontAwesomeIcon icon={faRobot} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F172A]">Automated Support</h4>
                      <p className="text-sm text-gray-600">Live Chat Example</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-600">Customer: Looking for information...</p>
                    </div>
                    <div className="bg-gradient-to-r from-[#6366F1]/10 to-[#8B5CF6]/10 p-3 rounded-lg">
                      <p className="text-sm text-[#0F172A] font-medium">Bot: I can help with that! Here are the details...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#0F172A] mb-6">Work Smarter, Not Harder</h3>
              <div className="space-y-6">
                {benefits.map((benefit) => (
                  <div key={benefit.id} className="flex items-start">
                    <div className={`w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                      <FontAwesomeIcon icon={benefit.icon} className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#0F172A] mb-2">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-for-small-biz" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Features Built for Small Businesses</h2>
            <p className="text-xl text-gray-600">Everything you need, nothing you don't</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className={`bg-white p-8 rounded-2xl border-2 border-gray-100 ${feature.borderColor} hover:shadow-xl transition`}
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

      {/* Success Stories */}
      <section id="success-stories" className="py-24 px-6 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Small Businesses, Big Results</h2>
            <p className="text-xl text-gray-600">Real stories from business owners like you</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{story.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center mr-4">
                    <span className="text-white font-bold">
                      {story.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-dark">{story.name}</div>
                    <div className="text-sm text-gray-500">{story.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="roi-calculator" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">See Your Potential ROI</h2>
            <p className="text-xl text-gray-600">Calculate how much time and money BotFlow can save you</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-12 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center">
                  <FontAwesomeIcon icon={faCircleXmark} className="text-red-500 mr-3" />
                  Without BotFlow
                </h3>
                <div className="space-y-4">
                  {withoutBotFlow.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg">
                      <p className="text-gray-600 mb-2">{item.label}</p>
                      <p className={`text-2xl font-bold ${item.color || 'text-dark'}`}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-green-500 mr-3" />
                  With BotFlow
                </h3>
                <div className="space-y-4">
                  {withBotFlow.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border-2 border-green-500">
                      <p className="text-gray-600 mb-2">{item.label}</p>
                      <p className={`text-2xl font-bold ${item.color}`}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <div className="bg-white p-8 rounded-2xl inline-block shadow-lg">
                <p className="text-gray-600 mb-2">Your Monthly Savings</p>
                <p className="text-5xl font-bold gradient-text mb-4">$1,500+</p>
                <p className="text-sm text-gray-500">Plus increased revenue from better customer service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="small-biz-pricing" className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Pricing That Makes Sense</h2>
            <p className="text-xl text-gray-600">Start small, scale as you grow</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`${plan.highlight 
                  ? 'bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] p-8 rounded-2xl shadow-2xl relative' 
                  : 'bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-200'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#EC4899] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className={`inline-block ${plan.highlight ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-600'} px-4 py-1 rounded-full text-sm font-semibold mb-4`}>
                  {plan.badge}
                </div>
                <h3 className={`text-3xl font-bold ${plan.highlight ? 'text-white' : 'text-dark'} mb-2`}>
                  {plan.name}
                </h3>
                <p className={plan.highlight ? 'text-indigo-100 mb-6' : 'text-gray-600 mb-6'}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${plan.highlight ? 'text-white' : 'text-dark'}`}>
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
                <p className={`text-center text-sm ${plan.highlight ? 'text-indigo-100' : 'text-gray-500'} mt-4`}>
                  {plan.highlight ? '14-day free trial included' : 'No credit card required'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison-section" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Why Small Businesses Choose BotFlow</h2>
            <p className="text-xl text-gray-600">Compare us to traditional solutions</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white">
                <tr>
                  <th className="p-6 text-left text-lg font-bold">Feature</th>
                  <th className="p-6 text-center text-lg font-bold">Hiring Staff</th>
                  <th className="p-6 text-center text-lg font-bold">Freelancers</th>
                  <th className="p-6 text-center text-lg font-bold bg-[#EC4899]">BotFlow</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonTable.map((row, index) => (
                  <tr key={index}>
                    <td className="p-6 font-semibold text-[#0F172A]">{row.feature}</td>
                    <td className="p-6 text-center text-gray-600">
                      {typeof row.hiringStaff === 'boolean' ? (
                        row.hiringStaff ? (
                          <FontAwesomeIcon icon={faCheck} className="text-green-600 text-xl" />
                        ) : (
                          <FontAwesomeIcon icon={faXmark} className="text-red-500 text-xl" />
                        )
                      ) : (
                        row.hiringStaff
                      )}
                    </td>
                    <td className="p-6 text-center text-gray-600">
                      {typeof row.freelancers === 'boolean' ? (
                        row.freelancers ? (
                          <FontAwesomeIcon icon={faCheck} className="text-green-600 text-xl" />
                        ) : (
                          <FontAwesomeIcon icon={faXmark} className="text-red-500 text-xl" />
                        )
                      ) : (
                        row.freelancers
                      )}
                    </td>
                    <td className={`p-6 text-center ${row.botflowHighlight ? 'bg-green-50' : ''}`}>
                      {typeof row.botflow === 'boolean' ? (
                        row.botflow ? (
                          <FontAwesomeIcon icon={faCheck} className="text-green-600 text-xl" />
                        ) : (
                          <FontAwesomeIcon icon={faXmark} className="text-red-500 text-xl" />
                        )
                      ) : row.botflowHighlight ? (
                        <span className="text-green-600 font-bold">{row.botflow}</span>
                      ) : (
                        row.botflow
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
      <section id="faq-small-biz" className="py-24 px-6 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Common Questions</h2>
            <p className="text-xl text-gray-600">Everything small business owners ask us</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="final-cta" className="py-24 px-6 bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#EC4899]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Grow Your Small Business?</h2>
          <p className="text-xl text-indigo-100 mb-8">Join thousands of small business owners who are saving time and increasing sales with BotFlow</p>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8 inline-block">
            <div className="flex flex-wrap justify-center gap-8 text-white">
              <div>
                <div className="text-4xl font-bold mb-2">$29</div>
                <div className="text-indigo-100">Starting price</div>
              </div>
              <div className="border-l border-white/30"></div>
              <div>
                <div className="text-4xl font-bold mb-2">14 Days</div>
                <div className="text-indigo-100">Free trial</div>
              </div>
              <div className="border-l border-white/30"></div>
              <div>
                <div className="text-4xl font-bold mb-2">15 Min</div>
                <div className="text-indigo-100">Setup time</div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="#" className="bg-white text-[#6366F1] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition">
              Start Your Free Trial <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
            <a href="#" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#6366F1] transition">
              Talk to Sales <FontAwesomeIcon icon={faPhone} className="ml-2" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-indigo-100 text-sm">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
              <span>Setup in 15 minutes</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}