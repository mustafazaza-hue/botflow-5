'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faRobot, faGlobe, faCheckCircle, faBolt, faArrowRight, faPlay,
  faClock, faArrowsSpin, faChartLine, faPencilRuler, faSliders,
  faVial, faRocket, faComments, faUserCircle, faPeopleArrows,
  faPuzzlePiece, faUserCheck, faHeadset, faCalendarCheck,
  faShoppingCart, faCheck, faStar, faCalendar
} from '@fortawesome/free-solid-svg-icons'
import { 
  faFacebook, faTwitter, faLinkedin, faInstagram 
} from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default function AutomationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header/Navbar */}
<Header />

      {/* Hero Section */}
      <section id="hero-section" className="pt-32 pb-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-[600px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <span className="text-[#6366F1] font-semibold text-sm">
                <FontAwesomeIcon icon={faRobot} className="mr-2" />Chatbot Automation
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight mb-6">
              Intelligent Bots That <span className="gradient-text">Work 24/7</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Build sophisticated chatbots that understand context, handle complex conversations, and convert visitors into customers automatically—no coding required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition">
                Start Building Free <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
              <a href="#" className="bg-white text-[#6366F1] px-8 py-4 rounded-lg font-semibold text-lg border-2 border-[#6366F1] hover:bg-[#6366F1] hover:text-white transition">
                Watch Demo <FontAwesomeIcon icon={faPlay} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition - Part 1 */}
      <section id="value-proposition" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl font-bold text-[#0F172A] mb-6">Why Chatbot Automation Matters</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Modern customers expect instant responses, 24/7 availability, and personalized experiences. Manual customer service can&apos;t scale to meet these demands—but intelligent chatbots can.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <FontAwesomeIcon icon={faClock} className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-2">Instant Response Times</h3>
                    <p className="text-gray-600">Answer customer queries in milliseconds, reducing wait times from hours to seconds.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <FontAwesomeIcon icon={faArrowsSpin} className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-2">Scale Effortlessly</h3>
                    <p className="text-gray-600">Handle thousands of conversations simultaneously without hiring additional staff.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#EC4899] to-[#6366F1] rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <FontAwesomeIcon icon={faChartLine} className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-2">Increase Conversions</h3>
                    <p className="text-gray-600">Guide prospects through the sales funnel with personalized recommendations and timely follow-ups.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
              <Image 
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3516410965-cd707a0cb1d81ecc4146.png"
                alt="advanced chatbot interface"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Value Proposition - Part 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl order-2 lg:order-1">
              <Image 
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f32086247a-b649d7b2afc9d4a48650.png"
                alt="visual flow builder interface"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-[#0F172A] mb-6">Build Complex Bots Without Code</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our visual flow builder makes it easy to create sophisticated conversation paths, add conditional logic, and integrate with your existing tools—all without writing a single line of code.
              </p>
              <div className="space-y-4">
                {[
                  'Drag-and-drop interface for easy bot building',
                  'Pre-built templates for common use cases',
                  'Conditional logic and branching paths',
                  'AI-powered response suggestions',
                  'Real-time testing and preview'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xl mr-3" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="key-features" className="py-24 px-6 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Powerful Automation Features</h2>
            <p className="text-xl text-gray-600">Everything you need to create intelligent chatbots</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: faComments, title: 'Natural Language Processing', desc: 'Understand customer intent and context with advanced NLP that goes beyond simple keyword matching.' },
              { icon: faBolt, title: 'Smart Triggers', desc: 'Activate bots based on keywords, user actions, time delays, or custom conditions you define.' },
              { icon: faUserCircle, title: 'Dynamic Personalization', desc: 'Use customer data to personalize responses and create unique experiences for each user.' },
              { icon: faPeopleArrows, title: 'Human Handoff', desc: 'Seamlessly transfer complex queries to your team when human intervention is needed.' },
              { icon: faGlobe, title: 'Multilingual Support', desc: 'Create bots in multiple languages including English and Arabic with full RTL support.' },
              { icon: faPuzzlePiece, title: 'Third-Party Integrations', desc: 'Connect with CRMs, email platforms, payment gateways, and hundreds of other tools.' }
            ].map((feature, index) => {
              const gradients = [
                'from-[#6366F1] to-[#8B5CF6]',
                'from-[#8B5CF6] to-[#EC4899]',
                'from-[#EC4899] to-[#6366F1]',
                'from-[#6366F1] to-[#8B5CF6]',
                'from-[#8B5CF6] to-[#EC4899]',
                'from-[#EC4899] to-[#6366F1]'
              ]
              
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                  <div className={`w-14 h-14 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center mb-6`}>
                    <FontAwesomeIcon icon={feature.icon} className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases-automation" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Chatbot Use Cases</h2>
            <p className="text-xl text-gray-600">See how businesses use automation to grow</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                icon: faUserCheck, 
                title: 'Lead Qualification', 
                desc: 'Automatically qualify leads by asking the right questions and routing high-value prospects to your sales team.',
                color: 'primary',
                items: ['Capture contact information', 'Assess budget and timeline', 'Score leads automatically']
              },
              { 
                icon: faHeadset, 
                title: 'Customer Support', 
                desc: 'Resolve common issues instantly with automated responses, FAQs, and guided troubleshooting flows.',
                color: 'secondary',
                items: ['Answer FAQs automatically', 'Guide users through solutions', 'Reduce support ticket volume']
              },
              { 
                icon: faCalendarCheck, 
                title: 'Appointment Booking', 
                desc: 'Let customers book appointments, consultations, or demos directly through automated conversations.',
                color: 'accent',
                items: ['Check availability in real-time', 'Send confirmation and reminders', 'Sync with calendar systems']
              },
              { 
                icon: faShoppingCart, 
                title: 'Product Recommendations', 
                desc: 'Guide customers to the perfect product with personalized recommendations based on their needs and preferences.',
                color: 'primary',
                items: ['Ask qualifying questions', 'Suggest relevant products', 'Facilitate purchase directly']
              }
            ].map((useCase, index) => {
              const bgGradients = [
                'from-indigo-50 to-purple-50',
                'from-purple-50 to-pink-50',
                'from-pink-50 to-indigo-50',
                'from-indigo-50 to-pink-50'
              ]
              
              const borderColors = {
                primary: 'border-[#6366F1]/20 hover:border-[#6366F1]',
                secondary: 'border-[#8B5CF6]/20 hover:border-[#8B5CF6]',
                accent: 'border-[#EC4899]/20 hover:border-[#EC4899]'
              }
              
              const textColors = {
                primary: 'text-[#6366F1]',
                secondary: 'text-[#8B5CF6]',
                accent: 'text-[#EC4899]'
              }

              return (
                <div key={index} className={`bg-gradient-to-br ${bgGradients[index]} p-8 rounded-2xl border-2 ${borderColors[useCase.color]} transition`}>
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={useCase.icon} className={`${textColors[useCase.color]} text-xl`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#0F172A] mb-2">{useCase.title}</h3>
                      <p className="text-gray-600">{useCase.desc}</p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-2">
                    {useCase.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center text-sm text-gray-700">
                        <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works-automation" className="py-24 px-6 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">How Chatbot Automation Works</h2>
            <p className="text-xl text-gray-600">From concept to deployment in minutes</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: faPencilRuler, title: '1. Design Your Flow', desc: 'Map out conversation paths using our visual flow builder with drag-and-drop simplicity.' },
              { icon: faSliders, title: '2. Configure Triggers', desc: 'Set up triggers based on keywords, user actions, or specific conditions to activate your bot.' },
              { icon: faVial, title: '3. Test & Refine', desc: 'Preview your bot in real-time, test different scenarios, and optimize for better performance.' },
              { icon: faRocket, title: '4. Deploy & Monitor', desc: 'Launch your bot with one click and monitor performance with detailed analytics dashboards.' }
            ].map((step, index) => {
              const gradients = [
                'from-[#6366F1] to-[#8B5CF6]',
                'from-[#8B5CF6] to-[#EC4899]',
                'from-[#EC4899] to-[#6366F1]',
                'from-[#6366F1] to-[#8B5CF6]'
              ]
              
              return (
                <div key={index} className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <FontAwesomeIcon icon={step.icon} className="text-white text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">The Impact of Automation</h2>
            <p className="text-xl text-gray-600">Real results from real businesses</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '90%', title: 'Faster Response Times', desc: 'Average reduction in customer wait times' },
              { number: '60%', title: 'Cost Reduction', desc: 'Lower customer service costs' },
              { number: '45%', title: 'Higher Conversions', desc: 'Increase in lead-to-customer rate' },
              { number: '95%', title: 'Customer Satisfaction', desc: 'Users satisfied with bot interactions' }
            ].map((stat, index) => {
              const bgGradients = [
                'from-indigo-50 to-purple-50',
                'from-purple-50 to-pink-50',
                'from-pink-50 to-indigo-50',
                'from-indigo-50 to-purple-50'
              ]
              
              return (
                <div key={index} className={`bg-gradient-to-br ${bgGradients[index]} p-8 rounded-2xl text-center`}>
                  <div className="text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                  <p className="text-gray-700 font-medium mb-2">{stat.title}</p>
                  <p className="text-sm text-gray-600">{stat.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials-automation" className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Success stories from businesses like yours</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                text: '"Our chatbot handles 80% of customer inquiries automatically. It\'s like having a 24/7 support team that never sleeps."',
                name: 'James Wilson',
                role: 'Operations Manager, RetailCo',
                image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg'
              },
              { 
                text: '"We saw a 50% increase in qualified leads within the first month. The automation is a game-changer."',
                name: 'Emma Thompson',
                role: 'Sales Director, PropTech',
                image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg'
              },
              { 
                text: '"The visual flow builder is incredibly intuitive. We built our first bot in under an hour without any technical help."',
                name: 'Carlos Rodriguez',
                role: 'Founder, StartupHub',
                image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-9.jpg'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center">
                  <Image 
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
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
          <p className="text-xl text-indigo-100 mb-8">Join thousands of businesses using intelligent chatbots to scale their customer engagement</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-white text-[#6366F1] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition">
              Start Free Trial <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
            <a href="#" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#6366F1] transition">
              Schedule Demo <FontAwesomeIcon icon={faCalendar} className="ml-2" />
            </a>
          </div>
          <p className="text-indigo-100 mt-6 text-sm">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
<Footer />
    </main>
  )
}