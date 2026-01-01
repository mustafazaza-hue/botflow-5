'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faRobot, faCheckCircle, faBolt, faArrowRight, faPlay, faCalendar,
  faInfinity, faShieldHalved, faClock, faCheckDouble, 
  faChartLine, faEye, faUsers, faFileChartLine, faListCheck,
  faHeartPulse, faUserLock, faCopy, faBuilding, faStore,
  faCartShopping, faGlobe, faLock, faShield, faCertificate,
  faHistory, faCheck, faXmark, faCircleCheck, faCircleXmark,
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons'
import { 
  faFacebook, faInstagram 
} from '@fortawesome/free-brands-svg-icons'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MultiPagePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section id="hero-section" className="pt-32 pb-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-[600px]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm mb-6">
            <span className="text-[#8B5CF6] font-semibold text-sm">
              <FontAwesomeIcon icon={faLayerGroup} className="mr-2" />Multi-Page Management
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight mb-6">
            Manage All Your Social Pages from <span className="gradient-text">One Dashboard</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Scale your social media presence effortlessly. Connect unlimited Facebook and Instagram accounts, manage conversations, and automate responses across all your pages from a single, unified platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition">
              Start Free Trial <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
            <a href="#" className="bg-white text-[#6366F1] px-8 py-4 rounded-lg font-semibold text-lg border-2 border-[#6366F1] hover:bg-[#6366F1] hover:text-white transition">
              Watch Demo <FontAwesomeIcon icon={faPlay} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview-section" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl font-bold text-[#0F172A] mb-6">Centralized Control for All Your Social Accounts</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Whether you manage 5 pages or 500, BotFlow&apos;s Multi-Page Management gives you complete visibility and control. Switch between accounts instantly, monitor performance, and ensure consistent customer engagement across all your social media properties.
              </p>
              <div className="space-y-4">
                {[
                  { icon: faInfinity, title: 'Unlimited Pages', desc: 'Connect as many Facebook Pages and Instagram accounts as you need without restrictions.', gradient: 'from-[#6366F1] to-[#8B5CF6]' },
                  { icon: faBolt, title: 'Instant Switching', desc: 'Toggle between pages seamlessly with our intuitive interface designed for speed.', gradient: 'from-[#8B5CF6] to-[#EC4899]' },
                  { icon: faShieldHalved, title: 'Secure Connections', desc: 'Enterprise-grade security with OAuth 2.0 authentication and encrypted data storage.', gradient: 'from-[#EC4899] to-[#6366F1]' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                      <FontAwesomeIcon icon={item.icon} className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0F172A] mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] overflow-hidden">
              <img 
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3516410965-cd707a0cb1d81ecc4146.png"
                alt="modern dashboard showing multiple social media accounts"
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section id="key-benefits" className="py-24 px-6 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Why Multi-Page Management Matters</h2>
            <p className="text-xl text-gray-600">The competitive advantages of centralized social media control</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: faClock, title: 'Save 15+ Hours Per Week', desc: 'Stop logging in and out of multiple accounts. Manage everything from one place and reclaim valuable time for strategic work.', gradient: 'from-[#6366F1] to-[#8B5CF6]' },
              { icon: faCheckDouble, title: 'Ensure Brand Consistency', desc: 'Apply the same bot flows, responses, and automation rules across all pages to maintain a unified brand voice.', gradient: 'from-[#8B5CF6] to-[#EC4899]' },
              { icon: faChartLine, title: 'Scale Without Limits', desc: 'Whether you\'re managing 10 pages or 1,000, our infrastructure scales effortlessly with your business growth.', gradient: 'from-[#EC4899] to-[#6366F1]' },
              { icon: faEye, title: 'Complete Oversight', desc: 'Get a bird\'s-eye view of all your social properties with real-time status indicators and performance metrics.', gradient: 'from-[#6366F1] to-[#8B5CF6]' },
              { icon: faUsers, title: 'Team Collaboration', desc: 'Assign specific pages to team members with granular permissions and track who\'s managing what.', gradient: 'from-[#8B5CF6] to-[#EC4899]' },
              { icon: faChartLine, title: 'Unified Reporting', desc: 'Generate comprehensive reports across all pages or drill down into individual account performance.', gradient: 'from-[#EC4899] to-[#6366F1]' }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <FontAwesomeIcon icon={benefit.icon} className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works-multipage" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">How Multi-Page Management Works</h2>
            <p className="text-xl text-gray-600">Simple setup, powerful results</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="order-2 lg:order-1 relative h-[400px] overflow-hidden">
              <img 
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f32086247a-b649d7b2afc9d4a48650.png"
                alt="Facebook and Instagram connection interface"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              {[
                { number: '1', title: 'Connect Your Accounts', desc: 'Click "Add Page" and authenticate with Facebook or Instagram. Our secure OAuth integration connects your accounts in seconds without storing your passwords.', gradient: 'from-[#6366F1] to-[#8B5CF6]' },
                { number: '2', title: 'Organize Your Pages', desc: 'Group pages by brand, region, or any custom category. Use labels and tags to keep everything organized as you scale.', gradient: 'from-[#8B5CF6] to-[#EC4899]' },
                { number: '3', title: 'Manage from One Place', desc: 'Switch between pages instantly, apply automation rules, monitor conversations, and track performance—all from your unified dashboard.', gradient: 'from-[#EC4899] to-[#6366F1]' }
              ].map((step, index) => (
                <div key={index} className="flex items-start mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                    <span className="text-white text-xl font-bold">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Detail */}
      <section id="features-detail" className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Advanced Multi-Page Features</h2>
            <p className="text-xl text-gray-600">Professional tools for enterprise-level management</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              { 
                icon: faListCheck, 
                title: 'Bulk Actions', 
                desc: 'Apply changes to multiple pages simultaneously. Update bot settings, deploy new flows, or adjust response templates across your entire page portfolio with a single click.',
                gradient: 'from-[#6366F1] to-[#8B5CF6]',
                items: ['Deploy bots to multiple pages at once', 'Update response templates in bulk', 'Schedule maintenance windows']
              },
              { 
                icon: faHeartPulse, 
                title: 'Health Monitoring', 
                desc: 'Real-time status indicators show connection health, bot activity, and potential issues. Get instant alerts if any page experiences problems or requires attention.',
                gradient: 'from-[#8B5CF6] to-[#EC4899]',
                items: ['Real-time connection status', 'Automated health checks', 'Instant error notifications']
              },
              { 
                icon: faUserLock, 
                title: 'Granular Permissions', 
                desc: 'Control who can access which pages with role-based permissions. Assign team members to specific pages or groups, ensuring security and proper access control at scale.',
                gradient: 'from-[#EC4899] to-[#6366F1]',
                items: ['Page-level access control', 'Custom role creation', 'Activity audit logs']
              },
              { 
                icon: faCopy, 
                title: 'Page Templates', 
                desc: 'Create master templates with pre-configured bots, flows, and settings. When adding new pages, apply templates instantly instead of configuring everything from scratch.',
                gradient: 'from-[#6366F1] to-[#8B5CF6]',
                items: ['Pre-configured bot templates', 'One-click deployment', 'Template library sharing']
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mr-4`}>
                    <FontAwesomeIcon icon={feature.icon} className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F172A]">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.desc}</p>
                <ul className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3 mt-1" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases-multipage" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Perfect for Every Business Model</h2>
            <p className="text-xl text-gray-600">See how different industries leverage multi-page management</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                icon: faBuilding, 
                title: 'Digital Agencies', 
                desc: 'Manage all your clients\' social pages from one dashboard. White-label the interface, assign team members to specific accounts, and deliver exceptional service at scale.',
                gradient: 'from-[#6366F1] to-[#8B5CF6]',
                bg: 'from-primary/10 to-secondary/10',
                border: 'border-primary/20',
                items: ['20-50 client pages', '5-10 team members with role-based access', 'Custom templates per client vertical']
              },
              { 
                icon: faStore, 
                title: 'Multi-Location Businesses', 
                desc: 'Perfect for franchises, retail chains, and businesses with multiple locations. Maintain brand consistency while allowing local customization for each location.',
                gradient: 'from-[#8B5CF6] to-[#EC4899]',
                bg: 'from-secondary/10 to-accent/10',
                border: 'border-secondary/20',
                items: ['10-100+ location pages', 'Centralized brand control with local flexibility', 'Regional managers with location-specific access']
              },
              { 
                icon: faCartShopping, 
                title: 'E-commerce Brands', 
                desc: 'Manage pages for different product lines, regional markets, or brand variations. Sync inventory updates and promotional campaigns across all channels simultaneously.',
                gradient: 'from-[#EC4899] to-[#6366F1]',
                bg: 'from-accent/10 to-primary/10',
                border: 'border-accent/20',
                items: ['5-20 brand/product pages', 'Automated product catalog sync', 'Unified customer support inbox']
              },
              { 
                icon: faGlobe, 
                title: 'Enterprise Organizations', 
                desc: 'Handle complex organizational structures with department-specific pages, regional offices, and subsidiary brands—all with enterprise-grade security and compliance.',
                gradient: 'from-[#6366F1] to-[#EC4899]',
                bg: 'from-primary/10 to-accent/10',
                border: 'border-primary/20',
                items: ['50-500+ pages across divisions', 'SSO integration and advanced security', 'Custom compliance workflows']
              }
            ].map((usecase, index) => (
              <div key={index} className={`bg-gradient-to-br ${usecase.bg} p-8 rounded-2xl border-2 ${usecase.border}`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${usecase.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <FontAwesomeIcon icon={usecase.icon} className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">{usecase.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{usecase.desc}</p>
                <div className="bg-white p-4 rounded-xl">
                  <p className="text-sm font-semibold text-[#0F172A] mb-2">Typical Setup:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {usecase.items.map((item, itemIndex) => (
                      <li key={itemIndex}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison-section" className="py-24 px-6 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Before vs. After BotFlow</h2>
            <p className="text-xl text-gray-600">See the transformation in your workflow</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-red-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faXmark} className="text-red-500 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A]">Without Multi-Page Management</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Log in and out of multiple accounts daily',
                  'Manually replicate settings across pages',
                  'Inconsistent customer experiences',
                  'Difficult to track overall performance',
                  'Team members lack proper oversight',
                  'Scaling becomes exponentially harder'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FontAwesomeIcon icon={faCircleXmark} className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 p-8 rounded-2xl border-2 border-[#6366F1]">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faCheck} className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A]">With BotFlow Multi-Page</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Single dashboard for all accounts',
                  'Deploy changes to all pages with one click',
                  'Consistent brand voice everywhere',
                  'Unified analytics and reporting',
                  'Granular team permissions and oversight',
                  'Effortless scaling to hundreds of pages'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Security */}
      <section id="integration-security" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#0F172A] mb-6">Enterprise-Grade Security & Compliance</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We take security seriously. Your social media accounts represent your brand, and we protect them with the same level of security used by Fortune 500 companies.
              </p>
              <div className="space-y-6">
                {[
                  { icon: faLock, title: 'OAuth 2.0 Authentication', desc: 'We never store your Facebook or Instagram passwords. All connections use secure OAuth tokens that can be revoked anytime.', gradient: 'from-[#6366F1] to-[#8B5CF6]' },
                  { icon: faShield, title: 'End-to-End Encryption', desc: 'All data in transit and at rest is encrypted using AES-256 encryption, the same standard used by banks.', gradient: 'from-[#8B5CF6] to-[#EC4899]' },
                  { icon: faCertificate, title: 'SOC 2 & GDPR Compliant', desc: 'Our infrastructure meets the highest industry standards for data protection and privacy compliance.', gradient: 'from-[#EC4899] to-[#6366F1]' },
                  { icon: faHistory, title: 'Audit Logs & Activity Tracking', desc: 'Complete visibility into who accessed what and when, with detailed audit trails for compliance.', gradient: 'from-[#6366F1] to-[#8B5CF6]' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                      <FontAwesomeIcon icon={item.icon} className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0F172A] mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-12 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: faFacebook, text1: 'Facebook Partner', text2: 'Official Integration', color: 'text-[#6366F1]' },
                  { icon: faInstagram, text1: 'Instagram Partner', text2: 'Official Integration', color: 'text-[#EC4899]' },
                  { icon: faShieldHalved, text1: 'SOC 2 Type II', text2: 'Certified Secure', color: 'text-green-500' },
                  { icon: faGlobe, text1: 'GDPR Ready', text2: 'EU Compliant', color: 'text-[#8B5CF6]' }
                ].map((cert, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl text-center">
                    <FontAwesomeIcon icon={cert.icon} className={`text-4xl ${cert.color} mb-3`} />
                    <p className="font-semibold text-[#0F172A]">{cert.text1}</p>
                    <p className="text-sm text-gray-600 mt-1">{cert.text2}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-white p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-[#0F172A]">Uptime Status</span>
                  <span className="text-green-500 font-bold">99.99%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full" style={{ width: '99.99%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-2">Last 30 days average</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials-multipage" className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real results from businesses using multi-page management</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                text: '"Managing 40+ client pages used to take our team 20 hours per week. Now it takes 3. The ROI is incredible and our clients love the consistent service quality."',
                name: 'Jennifer Williams',
                role: 'CEO, SocialBoost Agency',
                image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg'
              },
              { 
                text: '"We have 85 franchise locations. BotFlow\'s multi-page management lets us maintain brand standards while giving franchisees the autonomy they need. Game changer."',
                name: 'Robert Thompson',
                role: 'CMO, FitZone Franchises',
                image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg'
              },
              { 
                text: '"We run 12 brand pages across different markets. Being able to deploy promotional campaigns to all pages simultaneously while tracking performance individually is exactly what we needed."',
                name: 'Emily Rodriguez',
                role: 'Director of Digital, StyleCo',
                image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg'
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

      {/* FAQ */}
      <section id="faq-multipage" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Multi-Page Management FAQ</h2>
            <p className="text-xl text-gray-600">Common questions about managing multiple pages</p>
          </div>
          <div className="space-y-4">
            {[
              { 
                question: 'How many pages can I connect?', 
                answer: 'On our Starter plan, you can connect 1 Facebook Page and 1 Instagram account. Pro plan supports 5 of each, and Business plan offers unlimited connections.' 
              },
              { 
                question: 'Can I organize pages into groups or categories?', 
                answer: 'Yes! You can create custom groups, apply labels, and organize pages by client, brand, region, or any structure that fits your business needs.' 
              },
              { 
                question: 'What happens if a page connection breaks?', 
                answer: 'You\'ll receive instant notifications via email and in-app alerts. Our dashboard shows real-time connection status, and reconnecting takes just one click.' 
              },
              { 
                question: 'Can different team members access different pages?', 
                answer: 'Absolutely! You can assign team members to specific pages or page groups with customizable permission levels for each assignment.' 
              },
              { 
                question: 'How do bulk actions work?', 
                answer: 'Select multiple pages from your dashboard, then choose an action like "Deploy Bot," "Update Settings," or "Apply Template." Changes are applied simultaneously to all selected pages.' 
              },
              { 
                question: 'Is there a limit on switching between pages?', 
                answer: 'No limits! Switch between pages as often as you need. The interface is optimized for quick navigation even with hundreds of connected pages.' 
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition">
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-24 px-6 bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#EC4899]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Simplify Your Multi-Page Management?</h2>
          <p className="text-xl text-indigo-100 mb-8">Start managing all your social pages from one powerful dashboard. No credit card required.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="#" className="bg-white text-[#6366F1] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition">
              Start Free Trial <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
            <a href="#" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#6366F1] transition">
              Schedule Demo <FontAwesomeIcon icon={faCalendar} className="ml-2" />
            </a>
          </div>
          <p className="text-indigo-100 text-sm">14-day free trial • No credit card required • Cancel anytime</p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { number: '500+', label: 'Agencies Trust Us' },
              { number: '50K+', label: 'Pages Connected' },
              { number: '99.99%', label: 'Uptime Guarantee' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <p className="text-indigo-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}