'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart, faEye, faRocket, faLightbulb,
  faUsers, faShieldHalved, faWandMagicSparkles,
  faHandshake, faChartLine, faTrophy,
  faStar, faMedal, faArrowRight, faCalendar
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  const coreValues = [
    {
      id: "value-innovation",
      icon: faLightbulb,
      title: "Innovation First",
      description: "We constantly push boundaries, embracing cutting-edge AI and automation technologies to stay ahead of the curve and deliver exceptional value.",
      fromColor: "#6366F1",
      toColor: "#8B5CF6"
    },
    {
      id: "value-customer",
      icon: faUsers,
      title: "Customer Obsession",
      description: "Our customers are at the heart of every decision. We listen, learn, and iterate based on real feedback to build solutions that truly matter.",
      fromColor: "#8B5CF6",
      toColor: "#EC4899"
    },
    {
      id: "value-integrity",
      icon: faShieldHalved,
      title: "Integrity & Trust",
      description: "We operate with transparency and honesty, protecting customer data with enterprise-grade security and maintaining the highest ethical standards.",
      fromColor: "#EC4899",
      toColor: "#6366F1"
    },
    {
      id: "value-simplicity",
      icon: faWandMagicSparkles,
      title: "Simplicity",
      description: "Complex technology should be simple to use. We design intuitive interfaces that anyone can master, without sacrificing powerful functionality.",
      fromColor: "#6366F1",
      toColor: "#8B5CF6"
    },
    {
      id: "value-collaboration",
      icon: faHandshake,
      title: "Collaboration",
      description: "We believe in the power of teamwork, both internally and with our customers, to create solutions that exceed expectations.",
      fromColor: "#8B5CF6",
      toColor: "#EC4899"
    },
    {
      id: "value-growth",
      icon: faChartLine,
      title: "Continuous Growth",
      description: "We're committed to learning, evolving, and improving every day, both as individuals and as a company serving our customers.",
      fromColor: "#EC4899",
      toColor: "#6366F1"
    }
  ]

  const journey = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Founded by a team of AI researchers and e-commerce entrepreneurs who saw the gap in affordable social media automation.",
      color: "#6366F1"
    },
    {
      year: "2021",
      title: "First 1,000 Users",
      description: "Launched beta version and onboarded our first thousand customers, learning invaluable lessons about real business needs.",
      color: "#8B5CF6"
    },
    {
      year: "2022",
      title: "AI Revolution",
      description: "Integrated advanced AI capabilities, enabling natural language understanding and context-aware responses at scale.",
      color: "#EC4899"
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Reached 10,000+ active users across 50+ countries, with multilingual support and 24/7 customer success.",
      color: "#6366F1"
    },
    {
      year: "2024",
      title: "The Future",
      description: "Continuing to innovate with new platform integrations, advanced analytics, and enterprise-grade features.",
      color: "#8B5CF6"
    }
  ]

  const leadership = [
    {
      id: "leader-1",
      name: "Michael Chen",
      role: "CEO & Co-Founder",
      description: "Former AI researcher at MIT with 15+ years in automation technology.",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
      roleColor: "#6366F1"
    },
    {
      id: "leader-2",
      name: "Sarah Johnson",
      role: "CTO & Co-Founder",
      description: "Engineering leader who built scalable systems at Google and Amazon.",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
      roleColor: "#8B5CF6"
    },
    {
      id: "leader-3",
      name: "David Martinez",
      role: "Chief Product Officer",
      description: "Product visionary with a track record of launching successful SaaS products.",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg",
      roleColor: "#EC4899"
    },
    {
      id: "leader-4",
      name: "Emily Roberts",
      role: "Chief Marketing Officer",
      description: "Growth expert who scaled multiple startups from zero to millions in revenue.",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
      roleColor: "#6366F1"
    }
  ]

  const stats = [
    {
      id: "stat-users",
      value: "10,000+",
      label: "Active Businesses",
      fromColor: "#6366F1",
      toColor: "#8B5CF6"
    },
    {
      id: "stat-conversations",
      value: "2M+",
      label: "Conversations Automated",
      fromColor: "#8B5CF6",
      toColor: "#EC4899"
    },
    {
      id: "stat-countries",
      value: "50+",
      label: "Countries Served",
      fromColor: "#EC4899",
      toColor: "#6366F1"
    },
    {
      id: "stat-satisfaction",
      value: "98%",
      label: "Customer Satisfaction",
      fromColor: "#6366F1",
      toColor: "#8B5CF6"
    }
  ]

  const awards = [
    {
      id: "award-1",
      title: "Best SaaS Product 2023",
      description: "TechCrunch Awards",
      icon: faTrophy,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-500"
    },
    {
      id: "award-2",
      title: "Top Rated on G2",
      description: "4.9/5 from 500+ reviews",
      icon: faStar,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-500"
    },
    {
      id: "award-3",
      title: "Fastest Growing Startup",
      description: "Forbes Cloud 100",
      icon: faRocket,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-500"
    },
    {
      id: "award-4",
      title: "Innovation Excellence",
      description: "AI Breakthrough Awards",
      icon: faMedal,
      bgColor: "bg-green-100",
      iconColor: "text-green-500"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section id="about-hero" className="pt-32 pb-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 h-[600px]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm mb-6">
            <span className="text-[#6366F1] font-semibold text-sm">
              <FontAwesomeIcon icon={faHeart} className="mr-2" />Our Story
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight mb-6">
            Building the Future of <span className="gradient-text">Customer Engagement</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to empower businesses of all sizes with intelligent automation that transforms how they connect with customers on social media.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision-mission" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div id="vision-card" className="bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] p-12 rounded-3xl shadow-2xl">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                <FontAwesomeIcon icon={faEye} className="text-white text-3xl" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-indigo-100 text-lg leading-relaxed mb-6">
                To become the world's most trusted platform for social media automation, enabling every business to deliver exceptional customer experiences at scale.
              </p>
              <p className="text-indigo-100 text-lg leading-relaxed">
                We envision a future where technology eliminates barriers between businesses and their customers, creating meaningful connections that drive growth and loyalty.
              </p>
            </div>
            <div id="mission-card" className="bg-gradient-to-br from-[#EC4899] to-[#8B5CF6] p-12 rounded-3xl shadow-2xl">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                <FontAwesomeIcon icon={faRocket} className="text-white text-3xl" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-pink-100 text-lg leading-relaxed mb-6">
                To democratize advanced automation technology, making it accessible and affordable for businesses worldwide, regardless of size or technical expertise.
              </p>
              <p className="text-pink-100 text-lg leading-relaxed">
                We're committed to continuous innovation, exceptional support, and building tools that genuinely solve real business challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="core-values" className="py-24 px-6 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div key={value.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${value.fromColor} 0%, ${value.toColor} 100%)`
                  }}
                >
                  <FontAwesomeIcon icon={value.icon} className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">The BotFlow Journey</h2>
              <div className="space-y-6">
                {journey.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 w-32 font-bold text-xl" style={{ color: item.color }}>
                      {item.year}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0F172A] text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[600px] overflow-hidden rounded-3xl shadow-2xl">
              <img 
                className="w-full h-full object-cover" 
                src="https://kroolo.com/_next/image?url=https%3A%2F%2Fd1x9j2lb4srxrw.cloudfront.net%2Fmedia%2Fhome%2Fpost%2Fimages%2Ffeature%2FThumbnails_yoEni2l.png&w=828&q=75" 
                alt="diverse team collaborating in modern office" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership-team" className="py-24 px-6 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600">The team driving innovation and growth</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {leadership.map((leader) => (
              <div key={leader.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center">
                <img 
                  src={leader.img} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" 
                  alt={leader.name}
                />
                <h3 className="text-xl font-bold text-[#0F172A] mb-1">{leader.name}</h3>
                <p className="font-semibold mb-3" style={{ color: leader.roleColor }}>{leader.role}</p>
                <p className="text-gray-600 text-sm mb-4">{leader.description}</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-[#6366F1] transition">
                    <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#6366F1] transition">
                    <FontAwesomeIcon icon={faTwitter} className="text-lg" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section id="company-stats" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">BotFlow by the Numbers</h2>
            <p className="text-xl text-gray-600">Our impact in measurable terms</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div 
                key={stat.id} 
                className="p-8 rounded-2xl shadow-lg text-center"
                style={{
                  background: `linear-gradient(135deg, ${stat.fromColor} 0%, ${stat.toColor} 100%)`
                }}
              >
                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                <p className="text-white/90 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section id="awards-recognition" className="py-24 px-6 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600">Honored by industry leaders</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {awards.map((award) => (
              <div key={award.id} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className={`w-20 h-20 ${award.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <FontAwesomeIcon icon={award.icon} className={`${award.iconColor} text-3xl`} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2">{award.title}</h3>
                <p className="text-gray-600 text-sm">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section id="join-us" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div 
            className="p-12 rounded-3xl shadow-2xl"
            style={{
              background: `linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)`
            }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
                <p className="text-white/90 text-lg mb-6 leading-relaxed">
                  We're always looking for talented, passionate individuals who want to make a real impact on how businesses connect with their customers.
                </p>
                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                  If you're excited about AI, automation, and building products that matter, we'd love to hear from you.
                </p>
                <a href="#" className="inline-block bg-white text-[#6366F1] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition">
                  View Open Positions <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </a>
              </div>
              <div className="h-[400px] overflow-hidden rounded-2xl">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://kumospace.mo.cloudinary.net/https://content.kumospace.com/hubfs/Workplace%20Definition%20Unpacked%20-%20Understanding%20Todays%20Work%20Environment/Diversity%20and%20inclusion%20in%20workplace%20as%20team%20acceptance%20tiny%20person%20concept%20stock%20illustration.jpg?tx=w_responsive:fallback-max-width_816;fallback-max-width-mobile_720" 
                  alt="happy diverse team working together" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of businesses already using BotFlow to automate their customer engagement
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition">
              Start Free Trial <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
            <a href="#" className="bg-white text-[#6366F1] border-2 border-[#6366F1] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#6366F1] hover:text-white transition">
              Schedule Demo <FontAwesomeIcon icon={faCalendar} className="ml-2" />
            </a>
          </div>
          <p className="text-gray-600 mt-6 text-sm">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}