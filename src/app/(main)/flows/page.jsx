'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faRobot, faCheckCircle, faBolt, faArrowRight, faPlay,
  faClock, faBrain, faChartLine, faReplyAll,
  faKey, faCodeBranch, faUserTag, faImage, faUserHeadset,
  faMagnet, faHeadset, faShoppingCart, faCalendarCheck,
  faUsers, faDollarSign, faTimes, faCheck,
  faEnvelope, faDatabase
} from '@fortawesome/free-solid-svg-icons'
import { 
  faFacebook, faInstagram 
} from '@fortawesome/free-brands-svg-icons'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function FlowsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section id="hero-section" className="pt-32 pb-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-[650px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm mb-6">
                <span className="text-[#EC4899] font-semibold text-sm">
                  <FontAwesomeIcon icon={faReplyAll} className="mr-2" />Smart Automation
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight mb-6">
                Auto Replies & <span className="gradient-text">Intelligent Flows</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Create dynamic conversation flows that respond intelligently to customer queries. Build sophisticated automation sequences with triggers, conditions, and personalized responses that work 24/7.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="#" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition">
                  Build Your First Flow <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </a>
                <a href="#" className="bg-white text-[#6366F1] px-8 py-4 rounded-lg font-semibold text-lg border-2 border-[#6366F1] hover:bg-[#6366F1] hover:text-white transition">
                  See Examples <FontAwesomeIcon icon={faPlay} className="ml-2" />
                </a>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                  <span>Visual flow builder</span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                  <span>No coding required</span>
                </div>
              </div>
            </div>
            <div className="relative h-[450px] overflow-hidden">
              <img 
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3516410965-cd707a0cb1d81ecc4146.png"
                alt="visual flow builder interface"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="value-proposition" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Why Auto Replies & Flows?</h2>
            <p className="text-xl text-gray-600">Transform customer interactions with intelligent automation</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: faClock, 
                title: 'Instant Response Time', 
                desc: 'Respond to customer inquiries within seconds, 24/7. Never miss a lead or leave a customer waiting again.',
                gradient: 'from-[#6366F1] to-[#8B5CF6]',
                bg: 'from-indigo-50 to-purple-50'
              },
              { 
                icon: faBrain, 
                title: 'Smart Personalization', 
                desc: 'Deliver personalized responses based on user behavior, preferences, and previous interactions for better engagement.',
                gradient: 'from-[#8B5CF6] to-[#EC4899]',
                bg: 'from-purple-50 to-pink-50'
              },
              { 
                icon: faChartLine, 
                title: 'Higher Conversion Rates', 
                desc: 'Guide prospects through your sales funnel automatically with targeted messages that convert visitors into customers.',
                gradient: 'from-[#EC4899] to-[#6366F1]',
                bg: 'from-pink-50 to-indigo-50'
              }
            ].map((benefit, index) => (
              <div key={index} className={`bg-gradient-to-br ${benefit.bg} p-8 rounded-2xl`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  <FontAwesomeIcon icon={benefit.icon} className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">How Auto Replies Work</h2>
            <p className="text-xl text-gray-600">Set up intelligent automation in minutes</p>
          </div>
          
          {/* Step 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="h-[400px] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f32086247a-b649d7b2afc9d4a48650.png"
                alt="trigger configuration interface"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Step 1
              </div>
              <h3 className="text-3xl font-bold text-[#0F172A] mb-4">Set Up Triggers</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Define what activates your auto-reply: specific keywords, comment patterns, direct messages, or user actions. Our smart detection understands context and intent.
              </p>
              <ul className="space-y-3">
                {[
                  'Keyword-based triggers',
                  'Comment detection on posts',
                  'Direct message automation',
                  'Time-based conditions'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#6366F1] mr-3 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Step 2
              </div>
              <h3 className="text-3xl font-bold text-[#0F172A] mb-4">Design Conversation Flows</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Use our visual flow builder to create multi-step conversations. Add conditions, branches, and decision points to guide users through personalized journeys.
              </p>
              <ul className="space-y-3">
                {[
                  'Drag-and-drop flow builder',
                  'Conditional logic & branching',
                  'Multi-step sequences',
                  'User input collection'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#8B5CF6] mr-3 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 h-[400px] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/0e8bf66063-6033ea4bd61e66c3e38f.png"
                alt="conversation flow diagram"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="h-[400px] overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f853a70d32-b5fd3836736c8fcb63ea.png"
                alt="analytics dashboard"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-gradient-to-r from-[#EC4899] to-[#6366F1] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Step 3
              </div>
              <h3 className="text-3xl font-bold text-[#0F172A] mb-4">Optimize & Scale</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Monitor performance with real-time analytics. See what works, optimize your flows, and scale your automation across multiple pages and accounts.
              </p>
              <ul className="space-y-3">
                {[
                  'Real-time performance tracking',
                  'A/B testing capabilities',
                  'Conversion rate optimization',
                  'Multi-account deployment'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-[#EC4899] mr-3 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section id="features-deep-dive" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need for advanced automation</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: faKey, title: 'Keyword Triggers', desc: 'Detect specific keywords and phrases in comments and messages to trigger relevant automated responses.', gradient: 'from-[#6366F1] to-[#8B5CF6]', bg: 'from-indigo-50 to-white', border: 'hover:border-[#6366F1]' },
              { icon: faCodeBranch, title: 'Conditional Logic', desc: 'Create sophisticated flows with if-then conditions, branching paths, and dynamic decision points.', gradient: 'from-[#8B5CF6] to-[#EC4899]', bg: 'from-purple-50 to-white', border: 'hover:border-[#8B5CF6]' },
              { icon: faUserTag, title: 'Dynamic Variables', desc: 'Personalize responses with user names, locations, previous interactions, and custom data fields.', gradient: 'from-[#EC4899] to-[#6366F1]', bg: 'from-pink-50 to-white', border: 'hover:border-[#EC4899]' },
              { icon: faClock, title: 'Time-Based Rules', desc: 'Set business hours, delays between messages, and schedule automated follow-ups at optimal times.', gradient: 'from-[#6366F1] to-[#8B5CF6]', bg: 'from-indigo-50 to-white', border: 'hover:border-[#6366F1]' },
              { icon: faImage, title: 'Rich Media Support', desc: 'Send images, videos, GIFs, buttons, and quick replies to create engaging interactive experiences.', gradient: 'from-[#8B5CF6] to-[#EC4899]', bg: 'from-purple-50 to-white', border: 'hover:border-[#8B5CF6]' },
              { icon: faHeadset, title: 'Human Handoff', desc: 'Seamlessly transfer conversations to human agents when needed with full context and history.', gradient: 'from-[#EC4899] to-[#6366F1]', bg: 'from-pink-50 to-white', border: 'hover:border-[#EC4899]' }
            ].map((feature, index) => (
              <div key={index} className={`bg-gradient-to-br ${feature.bg} p-8 rounded-2xl border-2 border-transparent ${feature.border} transition`}>
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  <FontAwesomeIcon icon={feature.icon} className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases-section" className="py-20 px-6 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Real-World Use Cases</h2>
            <p className="text-xl text-gray-600">See how businesses use auto replies to grow</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                icon: faMagnet, 
                title: 'Lead Generation', 
                desc: 'Automatically capture leads from comments and DMs. Qualify prospects with smart questions and route hot leads to your sales team instantly.',
                gradient: 'from-[#6366F1] to-[#8B5CF6]',
                bg: 'bg-indigo-50',
                quote: '"We increased lead capture by 340% using auto-reply flows on our Facebook ads." - Sarah, Marketing Manager'
              },
              { 
                icon: faHeadset, 
                title: 'Customer Support', 
                desc: 'Answer FAQs instantly, provide order status updates, and resolve common issues 24/7 without human intervention.',
                gradient: 'from-[#8B5CF6] to-[#EC4899]',
                bg: 'bg-purple-50',
                quote: '"Reduced support tickets by 60% and improved response time from hours to seconds." - Mike, Support Lead'
              },
              { 
                icon: faShoppingCart, 
                title: 'E-commerce Sales', 
                desc: 'Send product recommendations, share discount codes, track orders, and recover abandoned carts through automated conversations.',
                gradient: 'from-[#EC4899] to-[#6366F1]',
                bg: 'bg-pink-50',
                quote: '"Recovered 23% of abandoned carts with automated follow-up flows." - Emma, E-commerce Owner'
              },
              { 
                icon: faCalendarCheck, 
                title: 'Appointment Booking', 
                desc: 'Let customers book consultations, demos, or services directly through automated conversations with calendar integration.',
                gradient: 'from-[#6366F1] to-[#8B5CF6]',
                bg: 'bg-indigo-50',
                quote: '"Filled 85% of our appointment slots through Instagram auto-replies." - John, Real Estate Agent'
              }
            ].map((usecase, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${usecase.gradient} rounded-lg flex items-center justify-center mr-4`}>
                    <FontAwesomeIcon icon={usecase.icon} className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F172A]">{usecase.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{usecase.desc}</p>
                <div className={`${usecase.bg} p-4 rounded-lg`}>
                  <p className="text-sm text-gray-700 italic">{usecase.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Efficiency Metrics */}
      <section id="efficiency-metrics" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">The Efficiency Advantage</h2>
            <p className="text-xl text-gray-600">Numbers that speak for themselves</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: faBolt, value: '98%', label: 'Faster Response Time', gradient: 'from-[#6366F1] to-[#8B5CF6]' },
              { icon: faUsers, value: '5x', label: 'More Conversations Handled', gradient: 'from-[#8B5CF6] to-[#EC4899]' },
              { icon: faChartLine, value: '65%', label: 'Higher Conversion Rate', gradient: 'from-[#EC4899] to-[#6366F1]' },
              { icon: faDollarSign, value: '80%', label: 'Cost Reduction', gradient: 'from-[#6366F1] to-[#8B5CF6]' }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${metric.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <FontAwesomeIcon icon={metric.icon} className="text-white text-3xl" />
                </div>
                <div className="text-5xl font-bold gradient-text mb-2">{metric.value}</div>
                <p className="text-gray-600 font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison-section" className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Manual vs Automated</h2>
            <p className="text-xl text-gray-600">See the difference automation makes</p>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 bg-gray-50">
                <div className="flex items-center mb-6">
                  <FontAwesomeIcon icon={faRobot} className="text-gray-400 text-3xl mr-4" />
                  <h3 className="text-2xl font-bold text-gray-700">Manual Responses</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Hours to respond to messages',
                    'Limited to business hours only',
                    'Inconsistent messaging',
                    'High labor costs',
                    'Missed opportunities',
                    'No scalability'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <FontAwesomeIcon icon={faTimes} className="text-red-500 mr-3 mt-1" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6]">
                <div className="flex items-center mb-6">
                  <FontAwesomeIcon icon={faRobot} className="text-white text-3xl mr-4" />
                  <h3 className="text-2xl font-bold text-white">Auto Replies</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Instant responses (< 1 second)',
                    '24/7 availability',
                    'Consistent brand voice',
                    'Cost-effective automation',
                    'Never miss a lead',
                    'Infinite scalability'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <FontAwesomeIcon icon={faCheck} className="text-green-300 mr-3 mt-1" />
                      <span className="text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="integration-section" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Works With Your Tools</h2>
            <p className="text-xl text-gray-600">Seamless integration with platforms you already use</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: faFacebook, title: 'Facebook Pages', desc: 'Full Messenger integration', color: 'text-[#6366F1]', bg: 'from-indigo-50 to-white', border: 'hover:border-[#6366F1]' },
              { icon: faInstagram, title: 'Instagram', desc: 'DMs & comments automation', color: 'text-[#8B5CF6]', bg: 'from-purple-50 to-white', border: 'hover:border-[#8B5CF6]' },
              { icon: faEnvelope, title: 'Email Marketing', desc: 'Sync with your campaigns', color: 'text-[#EC4899]', bg: 'from-pink-50 to-white', border: 'hover:border-[#EC4899]' },
              { icon: faDatabase, title: 'CRM Systems', desc: 'Automatic lead syncing', color: 'text-[#6366F1]', bg: 'from-indigo-50 to-white', border: 'hover:border-[#6366F1]' }
            ].map((integration, index) => (
              <div key={index} className={`bg-gradient-to-br ${integration.bg} p-6 rounded-xl text-center border-2 border-transparent ${integration.border} transition`}>
                <FontAwesomeIcon icon={integration.icon} className={`text-5xl ${integration.color} mb-4`} />
                <h4 className="font-bold text-[#0F172A] mb-2">{integration.title}</h4>
                <p className="text-sm text-gray-600">{integration.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials-section" className="py-20 px-6 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real results from real businesses</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                text: '"The auto-reply flows saved us 20 hours per week. We can now handle 10x more customer inquiries with the same team size."',
                name: 'Alex Thompson',
                role: 'CEO, StyleShop',
                image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg'
              },
              { 
                text: '"Our lead conversion rate jumped from 12% to 45% after implementing smart auto-reply sequences. Game changer!"',
                name: 'Maria Rodriguez',
                role: 'Marketing Director, PropTech',
                image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg'
              },
              { 
                text: '"Set it up in 30 minutes and saw results immediately. Customer satisfaction scores went up 35% in the first month."',
                name: 'James Wilson',
                role: 'Owner, FitLife Gym',
                image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-9.jpg'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faCheckCircle} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-[#0F172A]">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-24 px-6 bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#EC4899]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Automate Your Conversations?</h2>
          <p className="text-xl text-indigo-100 mb-8">Start building intelligent auto-reply flows today and watch your engagement soar</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="#" className="bg-white text-[#6366F1] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition">
              Start Free Trial <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
            <a href="#" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#6366F1] transition">
              See Demo Flow <FontAwesomeIcon icon={faPlay} className="ml-2" />
            </a>
          </div>
          <p className="text-indigo-100 text-sm">No credit card required • 14-day free trial • Setup in minutes</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}