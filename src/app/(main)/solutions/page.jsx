'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faRobot, faShoppingCart, faClock, faUsers, 
  faCartShopping, faCheckCircle, faArrowRight, 
  faPlay, faStore, faShoppingBag, faCheck,
  faGlobe, faStore as faStoreIcon, faRobot as faRobot2,
  faBox, faTruck, faExchangeAlt, faHeadset
} from '@fortawesome/free-solid-svg-icons'
import { 
  faFacebook, faTwitter, faLinkedin, faInstagram,
  faShopify, faWordpress
} from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function EcommercePage() {
  const challenges = [
    {
      id: 1,
      icon: faClock,
      title: 'Slow Response Times',
      description: '70% of customers expect instant replies. Manual responses lose sales.',
      color: 'red',
      before: '4 hours',
      after: 'Instant'
    },
    {
      id: 2,
      icon: faUsers,
      title: 'Overwhelmed Support Team',
      description: 'Same questions repeatedly drain your team\'s productivity.',
      color: 'yellow',
      before: '500/day',
      after: '85%'
    },
    {
      id: 3,
      icon: faCartShopping,
      title: 'Abandoned Carts',
      description: 'Customers leave without completing purchases due to unanswered questions.',
      color: 'blue',
      before: '+32%',
      after: '+$15k/mo'
    }
  ]

  const features = [
    {
      id: 1,
      title: 'AI-Powered Product Recommendations',
      description: 'Your bot analyzes customer preferences and suggests relevant products automatically, increasing average order value by 28%.',
      type: 'Smart Recommendations',
      typeColor: 'primary',
      points: [
        'Personalized product suggestions based on browsing history',
        'Cross-sell and upsell automation',
        'Real-time inventory sync'
      ],
      image: '/images/ecommerce/ai-recommendations.jpg',
      icon: faShoppingCart,
      reverse: false
    },
    {
      id: 2,
      title: 'Automated Order Tracking & Updates',
      description: 'Reduce "Where\'s my order?" messages by 90%. Customers get instant updates on shipping status, delivery times, and more.',
      type: 'Order Management',
      typeColor: 'secondary',
      points: [
        'Real-time order status updates',
        'Automated shipping notifications',
        'Integration with major carriers (UPS, FedEx, DHL)'
      ],
      image: '/images/ecommerce/order-tracking.jpg',
      icon: faTruck,
      reverse: true
    },
    {
      id: 3,
      title: 'Smart Abandoned Cart Recovery',
      description: 'Automatically reach out to customers who left items in their cart with personalized messages and special offers.',
      type: 'Cart Recovery',
      typeColor: 'accent',
      points: [
        'Timed follow-up messages (1 hour, 24 hours, 3 days)',
        'Dynamic discount codes for cart completion',
        'A/B testing for recovery messages'
      ],
      image: '/images/ecommerce/cart-recovery.jpg',
      icon: faCartShopping,
      reverse: false
    },
    {
      id: 4,
      title: 'Instant FAQ & Support Responses',
      description: 'Answer common questions about shipping, returns, sizing, and policies instantly without human intervention.',
      type: 'Support Automation',
      typeColor: 'primary',
      points: [
        'Pre-built templates for common e-commerce queries',
        'Smart escalation to human agents when needed',
        'Multi-language support for global stores'
      ],
      image: '/images/ecommerce/support-automation.jpg',
      icon: faHeadset,
      reverse: true
    }
  ]

  const integrations = [
    {
      id: 1,
      name: 'Shopify',
      icon: faShopify,
      description: 'Full integration with products, orders, and inventory',
      color: 'green',
      image: '/images/ecommerce/shopify-integration.jpg'
    },
    {
      id: 2,
      name: 'WooCommerce',
      icon: faWordpress,
      description: 'WordPress e-commerce made easy',
      color: 'purple',
      image: '/images/ecommerce/woocommerce-integration.jpg'
    },
    {
      id: 3,
      name: 'Magento',
      icon: faStoreIcon,
      description: 'Enterprise-level e-commerce support',
      color: 'orange',
      image: '/images/ecommerce/magento-integration.jpg'
    },
    {
      id: 4,
      name: 'BigCommerce',
      icon: faShoppingBag,
      description: 'Scalable e-commerce platform integration',
      color: 'blue',
      image: '/images/ecommerce/bigcommerce-integration.jpg'
    }
  ]

  const caseStudies = [
    {
      id: 1,
      company: 'StyleHub Fashion',
      type: 'Online Fashion Retailer',
      description: '"BotFlow helped us handle Black Friday traffic without hiring extra support staff. Our conversion rate jumped 52% and customer satisfaction scores hit an all-time high."',
      avatar: '/images/avatars/fashion-retailer.jpg',
      stats: [
        { label: 'Higher Conversion', value: '52%', color: 'primary' },
        { label: 'Extra Revenue', value: '$89k', color: 'secondary' },
        { label: 'Auto-Resolved', value: '90%', color: 'accent' }
      ]
    },
    {
      id: 2,
      company: 'TechGear Pro',
      type: 'Electronics Store',
      description: '"We reduced support costs by 65% while improving response times from hours to seconds. The bot handles product specs, compatibility questions, and order tracking flawlessly."',
      avatar: '/images/avatars/electronics-retailer.jpg',
      stats: [
        { label: 'Cost Reduction', value: '65%', color: 'primary' },
        { label: 'More Orders', value: '3x', color: 'secondary' },
        { label: 'Response Time', value: 'Instant', color: 'accent' }
      ]
    }
  ]

  const pricingPlans = [
    {
      id: 1,
      name: 'Starter Store',
      description: 'For new online stores',
      price: '$49',
      features: [
        'Up to 2,000 conversations/month',
        'Basic product recommendations',
        'Order tracking automation',
        '1 store integration',
        'Email support'
      ],
      buttonText: 'Get Started',
      buttonClass: 'bg-gray-100 hover:bg-gray-200',
      highlight: false
    },
    {
      id: 2,
      name: 'Growth Store',
      description: 'For scaling businesses',
      price: '$129',
      features: [
        'Up to 15,000 conversations/month',
        'AI-powered recommendations',
        'Advanced cart recovery',
        '3 store integrations',
        'Analytics & reports',
        'Priority support'
      ],
      buttonText: 'Get Started',
      buttonClass: 'bg-white hover:bg-gray-100 text-primary',
      highlight: true
    },
    {
      id: 3,
      name: 'Enterprise',
      description: 'For large retailers',
      price: '$399',
      features: [
        'Unlimited conversations',
        'Custom AI training',
        'Multi-store management',
        'White-label options',
        'API access',
        'Dedicated account manager'
      ],
      buttonText: 'Contact Sales',
      buttonClass: 'bg-gray-100 hover:bg-gray-200',
      highlight: false
    }
  ]

  const faqs = [
    {
      question: 'How does BotFlow integrate with my store?',
      answer: 'Simple one-click integration with Shopify, WooCommerce, Magento, and other major platforms. No coding required.',
      icon: faExchangeAlt
    },
    {
      question: 'Can the bot handle multiple products?',
      answer: 'Yes! BotFlow syncs with your entire product catalog and can answer questions about thousands of products simultaneously.',
      icon: faBox
    },
    {
      question: 'What about returns and refunds?',
      answer: 'The bot can handle return requests, explain your policy, and generate return labels automatically based on your rules.',
      icon: faShoppingCart
    },
    {
      question: 'Does it work during sales events?',
      answer: 'Absolutely! BotFlow scales automatically to handle traffic spikes during Black Friday, Cyber Monday, and other high-volume periods.',
      icon: faClock
    },
    {
      question: 'Can I customize the bot\'s responses?',
      answer: 'Yes, you have full control over responses, tone, and conversation flows to match your brand voice.',
      icon: faRobot
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="hero-ecommerce" className="pt-32 pb-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 min-h-[700px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm mb-6">
                <span className="text-[#6366F1] font-semibold text-sm">
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />E-commerce Solution
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight mb-6">
                Turn Social Media Into Your <span className="gradient-text">Sales Engine</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Automate product inquiries, order tracking, and customer support on Facebook & Instagram. Boost conversions while you sleep.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="#" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition">
                  Start Free Trial <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </a>
                <a href="#" className="bg-white text-[#6366F1] px-8 py-4 rounded-lg font-semibold text-lg border-2 border-[#6366F1] hover:bg-[#6366F1] hover:text-white transition">
                  See Demo <FontAwesomeIcon icon={faPlay} className="ml-2" />
                </a>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold gradient-text">45%</div>
                  <div className="text-sm text-gray-600">Higher Conversion</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">3x</div>
                  <div className="text-sm text-gray-600">More Orders</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">24/7</div>
                  <div className="text-sm text-gray-600">Availability</div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 to-[#EC4899]/20"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faRobot} className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0F172A]">E-commerce Assistant</h3>
                      <p className="text-sm text-gray-600">AI-Powered Shopping Assistant</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-600">Customer: "Do you have this in size large?"</p>
                    </div>
                    <div className="bg-gradient-to-r from-[#6366F1]/10 to-[#8B5CF6]/10 p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-[#0F172A] font-medium">Bot: "Yes! Size L is in stock. Would you like me to check other colors too?"</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-600">Customer: "What's the shipping time?"</p>
                    </div>
                    <div className="bg-gradient-to-r from-[#6366F1]/10 to-[#8B5CF6]/10 p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-[#0F172A] font-medium">Bot: "2-3 business days with free shipping over $50!"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section id="ecommerce-challenges" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">E-commerce Challenges We Solve</h2>
            <p className="text-xl text-gray-600">Stop losing sales to slow response times</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge) => (
              <div 
                key={challenge.id} 
                className={`bg-gradient-to-br from-${challenge.color}-50 to-${
                  challenge.color === 'yellow' ? 'amber' : 
                  challenge.color === 'red' ? 'orange' : 
                  'indigo'
                }-50 p-8 rounded-2xl hover:shadow-xl transition duration-300`}
              >
                <div className={`w-14 h-14 bg-${challenge.color}-500 rounded-xl flex items-center justify-center mb-6`}>
                  <FontAwesomeIcon icon={challenge.icon} className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{challenge.title}</h3>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Before BotFlow</span>
                    <span className="text-sm font-bold text-red-600">{challenge.before}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">With BotFlow</span>
                    <span className="text-sm font-bold text-green-600">{challenge.after}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="ecommerce-features" className="py-24 px-6 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Built Specifically for E-commerce</h2>
            <p className="text-xl text-gray-600">Features that drive sales and reduce support costs</p>
          </div>
          <div className="space-y-24">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${feature.reverse ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={feature.reverse ? 'order-2 lg:order-1' : ''}>
                  <div className={`inline-block bg-${feature.typeColor}/10 px-4 py-2 rounded-full mb-4`}>
                    <span className={`text-${feature.typeColor} font-semibold text-sm`}>
                      <FontAwesomeIcon icon={feature.icon} className="mr-2" />
                      {feature.type}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-[#0F172A] mb-4">{feature.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3 mt-1" />
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`h-[400px] overflow-hidden rounded-2xl shadow-2xl relative ${feature.reverse ? 'order-1 lg:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 to-[#EC4899]/20 z-10"></div>
                  <div className="relative z-20 h-full flex items-center justify-center p-8">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl w-full max-w-md">
                      <div className="flex items-center mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-br from-${feature.typeColor} to-${
                          feature.typeColor === 'primary' ? '[#8B5CF6]' :
                          feature.typeColor === 'secondary' ? '[#EC4899]' :
                          '[#6366F1]'
                        } rounded-lg flex items-center justify-center mr-3`}>
                          <FontAwesomeIcon icon={feature.icon} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#0F172A]">{feature.type}</h4>
                          <p className="text-sm text-gray-600">Live Example</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-sm text-gray-600">Customer: Looking for recommendations...</p>
                        </div>
                        <div className={`bg-gradient-to-r from-${feature.typeColor}/10 to-${
                          feature.typeColor === 'primary' ? '[#8B5CF6]' :
                          feature.typeColor === 'secondary' ? '[#EC4899]' :
                          '[#6366F1]'
                        }/10 p-3 rounded-lg`}>
                          <p className="text-sm text-[#0F172A] font-medium">Bot: Based on your interests, I recommend...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="ecommerce-integrations" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Seamless E-commerce Integrations</h2>
            <p className="text-xl text-gray-600">Connect with your favorite platforms in one click</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {integrations.map((integration) => (
              <div 
                key={integration.id} 
                className={`bg-gradient-to-br from-${integration.color}-50 to-${
                  integration.color === 'green' ? 'emerald' :
                  integration.color === 'purple' ? 'violet' :
                  integration.color === 'orange' ? 'red' : 'cyan'
                }-50 p-8 rounded-2xl text-center hover:shadow-xl transition duration-300 hover:scale-[1.02]`}
              >
                <div className={`w-16 h-16 bg-${integration.color}-600 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <FontAwesomeIcon icon={integration.icon} className="text-white text-3xl" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{integration.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{integration.description}</p>
                <div className="mt-4">
                  <span className="inline-block bg-white text-xs font-medium px-3 py-1 rounded-full text-gray-700">
                    One-click Setup
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="ecommerce-success-stories" className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">E-commerce Success Stories</h2>
            <p className="text-xl text-gray-600">Real results from real online stores</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
                    <FontAwesomeIcon icon={faStore} className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A]">{study.company}</h3>
                    <p className="text-sm text-gray-500">{study.type}</p>
                  </div>
                </div>
                <div className="relative mb-6">
                  <div className="absolute -left-2 top-0 text-6xl text-gray-100 font-serif">"</div>
                  <p className="text-gray-600 leading-relaxed pl-8 relative z-10">{study.description}</p>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                  {study.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-2xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="ecommerce-pricing" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">E-commerce Pricing</h2>
            <p className="text-xl text-gray-600">Plans designed for online stores of all sizes</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`${plan.highlight 
                  ? 'bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] p-8 rounded-2xl shadow-2xl transform scale-105 relative z-10' 
                  : 'bg-white border-2 border-gray-200 p-8 rounded-2xl hover:border-[#6366F1] hover:shadow-xl transition duration-300'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#EC4899] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold ${plan.highlight ? 'text-white' : 'text-[#0F172A]'} mb-2`}>
                    {plan.name}
                  </h3>
                  <p className={plan.highlight ? 'text-indigo-100 mb-4' : 'text-gray-600 mb-4'}>
                    {plan.description}
                  </p>
                  <div className={`text-5xl font-bold ${plan.highlight ? 'text-white' : 'text-[#0F172A]'} mb-2`}>
                    {plan.price}
                  </div>
                  <p className={plan.highlight ? 'text-indigo-100' : 'text-gray-500'}>per month</p>
                </div>
                <ul className="space-y-3 mb-8">
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
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition duration-300 ${
                    plan.highlight 
                      ? 'bg-white text-[#6366F1] hover:bg-gray-100 hover:shadow-lg' 
                      : 'bg-gray-100 hover:bg-gray-200 text-[#0F172A]'
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="ecommerce-faq" className="py-24 px-6 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">E-commerce FAQs</h2>
            <p className="text-xl text-gray-600">Common questions from online store owners</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mr-4 mt-1">
                    <FontAwesomeIcon icon={faq.icon} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="ecommerce-cta" className="py-24 px-6 bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#EC4899]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to 3x Your E-commerce Sales?</h2>
          <p className="text-xl text-indigo-100 mb-8">Join 5,000+ online stores already automating their customer conversations</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="#" className="bg-white text-[#6366F1] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition duration-300 hover:scale-105">
              Start Free Trial <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
            <a href="#" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#6366F1] transition duration-300 hover:scale-105">
              See Live Demo <FontAwesomeIcon icon={faPlay} className="ml-2" />
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-indigo-100">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
              <span>No credit card needed</span>
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