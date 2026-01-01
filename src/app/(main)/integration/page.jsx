'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faRobot, faGlobe, faCheckCircle, faBolt, faArrowRight, faBook,
  faInbox, faChartLine, faUsers, faSync, faCode,
  faShieldHalved, faLock, faKey, faDatabase, faClock,
  faShoppingCart, faBriefcase, faHome, faCheck,
  faShareNodes, faLayerGroup, faWebhook,
  faLink
} from '@fortawesome/free-solid-svg-icons'
import { 
  faFacebook, faTwitter, faLinkedin, faInstagram,
  faFacebookMessenger, faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function IntegrationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header/Navbar */}
<Header />

      {/* Hero Section */}
      <section id="hero-integration" className="pt-32 pb-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-[600px]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm mb-6">
            <span className="text-[#8B5CF6] font-semibold text-sm">
              <FontAwesomeIcon icon={faShareNodes} className="mr-2" />Social Media Integration
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight mb-6">
            Connect All Your <span className="gradient-text">Social Channels</span> in One Place
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Seamlessly integrate Facebook Pages, Instagram Business accounts, and manage all conversations from a unified dashboard. No technical setup required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition">
              Connect Your Pages <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
            <a href="#" className="bg-white text-[#6366F1] px-8 py-4 rounded-lg font-semibold text-lg border-2 border-[#6366F1] hover:bg-[#6366F1] hover:text-white transition">
              View Documentation <FontAwesomeIcon icon={faBook} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section id="supported-platforms" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Supported Platforms</h2>
            <p className="text-xl text-gray-600">Connect the platforms your customers use most</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: faFacebook, 
                title: 'Facebook Pages', 
                desc: 'Connect unlimited business pages',
                color: 'bg-blue-600',
                bg: 'from-blue-50 to-blue-100',
                status: 'Active'
              },
              { 
                icon: faInstagram, 
                title: 'Instagram Business', 
                desc: 'Manage DMs and comments',
                color: 'bg-gradient-to-br from-purple-600 to-pink-600',
                bg: 'from-pink-50 to-purple-100',
                status: 'Active'
              },
              { 
                icon: faFacebookMessenger, 
                title: 'Messenger', 
                desc: 'Automate chat responses',
                color: 'bg-blue-500',
                bg: 'from-blue-50 to-indigo-100',
                status: 'Active'
              },
              { 
                icon: faWhatsapp, 
                title: 'WhatsApp Business', 
                desc: 'Coming soon',
                color: 'bg-green-600',
                bg: 'from-green-50 to-emerald-100',
                status: 'Soon'
              }
            ].map((platform, index) => (
              <div key={index} className={`bg-gradient-to-br ${platform.bg} p-8 rounded-2xl text-center hover:shadow-xl transition`}>
                <div className={`w-20 h-20 ${platform.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <FontAwesomeIcon icon={platform.icon} className="text-white text-4xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{platform.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{platform.desc}</p>
                <span className={`inline-block ${
                  platform.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                } px-3 py-1 rounded-full text-xs font-semibold`}>
                  {platform.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section id="integration-benefits" className="py-24 px-6 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Why Integrate Your Social Media?</h2>
            <p className="text-xl text-gray-600">Unlock powerful automation and insights</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: faInbox, title: 'Unified Inbox', desc: 'Manage all conversations from Facebook, Instagram, and Messenger in one centralized dashboard.' },
              { icon: faBolt, title: 'Instant Responses', desc: 'Automatically reply to comments, DMs, and messages within seconds using AI-powered bots.' },
              { icon: faRobot, title: 'Smart Automation', desc: 'Set up triggers based on keywords, comments, or actions to engage customers automatically.' },
              { icon: faChartLine, title: 'Cross-Platform Analytics', desc: 'Track engagement, response rates, and conversions across all connected platforms in one view.' },
              { icon: faUsers, title: 'Team Collaboration', desc: 'Assign conversations to team members and manage permissions across all social accounts.' },
              { icon: faSync, title: 'Real-Time Sync', desc: 'All messages, comments, and interactions sync instantly across platforms and devices.' }
            ].map((benefit, index) => {
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
                    <FontAwesomeIcon icon={benefit.icon} className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How Integration Works */}
      <section id="how-integration-works" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">How Integration Works</h2>
            <p className="text-xl text-gray-600">Connect your social accounts in minutes</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                { number: '1', title: 'Authorize Access', desc: 'Click "Connect" and log in to your Facebook/Instagram account. Grant BotFlow permission to manage messages and comments.' },
                { number: '2', title: 'Select Pages', desc: 'Choose which Facebook Pages and Instagram Business accounts you want to connect. You can add multiple accounts.' },
                { number: '3', title: 'Configure Settings', desc: 'Set up notification preferences, auto-reply rules, and team permissions for each connected account.' },
                { number: '4', title: 'Start Automating', desc: 'Your accounts are now connected! Create bots, set up workflows, and start automating customer conversations.' }
              ].map((step, index) => {
                const gradients = [
                  'from-[#6366F1] to-[#8B5CF6]',
                  'from-[#8B5CF6] to-[#EC4899]',
                  'from-[#EC4899] to-[#6366F1]',
                  'from-[#6366F1] to-[#8B5CF6]'
                ]
                
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white text-xl font-bold">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0F172A] mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="relative h-[500px] overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="social media integration dashboard"
                fill
                className="object-contain rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section id="integration-features" className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Advanced Integration Features</h2>
            <p className="text-xl text-gray-600">Enterprise-grade capabilities for growing businesses</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                icon: faLayerGroup, 
                title: 'Multi-Account Management', 
                desc: 'Connect unlimited Facebook Pages and Instagram accounts. Perfect for agencies managing multiple clients.',
                items: ['Unlimited page connections', 'Switch between accounts instantly', 'Bulk actions across accounts']
              },
              { 
                icon: faShieldHalved, 
                title: 'Permission Control', 
                desc: 'Granular control over what data BotFlow can access and manage on your social accounts.',
                items: ['Read/write message permissions', 'Comment management access', 'Page insights and analytics']
              },
{ 
  icon: faLink, // أو faNetworkWired أو faSignal
  title: 'Webhook Integration', 
  desc: 'Receive real-time notifications for new messages, comments, and interactions via webhooks.',
  items: ['Real-time event streaming', 'Custom endpoint configuration', 'Retry mechanism for failures']
},
              { 
                icon: faCode, 
                title: 'API Access', 
                desc: 'Build custom integrations using our RESTful API. Full documentation and SDKs available.',
                items: ['RESTful API endpoints', 'OAuth 2.0 authentication', 'Rate limiting and quotas']
              }
            ].map((feature, index) => {
              const gradients = [
                'from-[#6366F1] to-[#8B5CF6]',
                'from-[#8B5CF6] to-[#EC4899]',
                'from-[#EC4899] to-[#6366F1]',
                'from-[#6366F1] to-[#8B5CF6]'
              ]
              
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${gradients[index]} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <FontAwesomeIcon icon={feature.icon} className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0F172A] mb-2">{feature.title}</h3>
                      <p className="text-gray-600 mb-4">{feature.desc}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Integration Security */}
      <section id="integration-security" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="security shield icon"
                fill
                className="object-contain rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="inline-block bg-green-100 px-4 py-2 rounded-full mb-6">
                <span className="text-green-700 font-semibold text-sm">
                  <FontAwesomeIcon icon={faShieldHalved} className="mr-2" />Enterprise Security
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">Your Data is Safe & Secure</h2>
              <p className="text-xl text-gray-600 mb-8">We take security seriously. Your social media credentials and customer data are protected with industry-leading encryption and security practices.</p>
              <div className="space-y-4">
                {[
                  { icon: faLock, title: 'End-to-End Encryption', desc: 'All data transmitted between your accounts and our servers is encrypted using TLS 1.3.' },
                  { icon: faKey, title: 'OAuth 2.0 Authentication', desc: 'We never store your passwords. Authentication is handled securely through Facebook\'s OAuth flow.' },
                  { icon: faDatabase, title: 'Data Privacy Compliance', desc: 'Fully compliant with GDPR, CCPA, and Facebook\'s Platform Policy requirements.' },
                  { icon: faClock, title: 'Revoke Access Anytime', desc: 'You can disconnect any account instantly and revoke BotFlow\'s access from your dashboard.' }
                ].map((security, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={security.icon} className="text-green-600 text-lg" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0F172A] mb-1">{security.title}</h3>
                      <p className="text-gray-600 text-sm">{security.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Use Cases */}
      <section id="integration-use-cases" className="py-24 px-6 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Real-World Applications</h2>
            <p className="text-xl text-gray-600">See how businesses use social media integration</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: faShoppingCart, 
                title: 'E-commerce Stores', 
                desc: 'Automate order inquiries, product recommendations, and customer support across Instagram and Facebook.',
                gradient: 'from-blue-500 to-blue-600',
                items: ['Auto-reply to product comments', 'Track order status via DM', 'Send abandoned cart reminders']
              },
              { 
                icon: faBriefcase, 
                title: 'Marketing Agencies', 
                desc: 'Manage multiple client accounts from one dashboard with team permissions and white-label options.',
                gradient: 'from-purple-500 to-purple-600',
                items: ['Multi-client management', 'Team collaboration tools', 'Performance reporting']
              },
              { 
                icon: faHome, 
                title: 'Real Estate', 
                desc: 'Qualify leads, schedule viewings, and answer property questions instantly on social media.',
                gradient: 'from-pink-500 to-pink-600',
                items: ['Lead qualification bots', 'Viewing appointment booking', 'Property info auto-responses']
              }
            ].map((usecase, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className={`w-14 h-14 bg-gradient-to-br ${usecase.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  <FontAwesomeIcon icon={usecase.icon} className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{usecase.title}</h3>
                <p className="text-gray-600 mb-4">{usecase.desc}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {usecase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="integration-faq" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Integration FAQs</h2>
            <p className="text-xl text-gray-600">Common questions about social media integration</p>
          </div>
          <div className="space-y-4">
            {[
              { 
                question: 'How many accounts can I connect?', 
                answer: 'Starter plan allows 1 Facebook Page and 1 Instagram account. Pro plan allows up to 5 of each. Business plan offers unlimited connections.' 
              },
              { 
                question: 'Is my data secure when connecting accounts?', 
                answer: 'Yes. We use OAuth 2.0 authentication and never store your passwords. All data is encrypted in transit and at rest. You can revoke access anytime.' 
              },
              { 
                question: 'What permissions does BotFlow need?', 
                answer: 'We request permissions to read messages, send messages, read comments, and access basic page insights. You control what we can access.' 
              },
              { 
                question: 'Can I disconnect an account later?', 
                answer: 'Absolutely. You can disconnect any account from your dashboard instantly. All automation for that account will stop immediately.' 
              },
              { 
                question: 'Does integration work with personal profiles?', 
                answer: 'No. Due to Facebook\'s policies, we only support Facebook Pages and Instagram Business accounts, not personal profiles.' 
              },
              { 
                question: 'What happens if my token expires?', 
                answer: 'We\'ll notify you via email and dashboard alert. Simply re-authenticate your account to restore the connection and continue automation.' 
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-integration" className="py-24 px-6 bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#EC4899]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Connect Your Social Media?</h2>
          <p className="text-xl text-indigo-100 mb-8">Start automating your Facebook and Instagram conversations today. No credit card required.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-white text-[#6366F1] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition">
              Connect Your Pages <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
            <a href="#" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#6366F1] transition">
              View Documentation <FontAwesomeIcon icon={faBook} className="ml-2" />
            </a>
          </div>
          <p className="text-indigo-100 mt-6 text-sm">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </main>
  )
}