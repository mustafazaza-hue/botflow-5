'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeadset, faGlobe, faEnvelope,
  faComments, faTicket, faClock,
  faLocationDot, faPhone, faBook,
  faPaperPlane, faArrowRight, faCalendar,
  faChevronDown, faRobot
} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const supportChannels = [
    {
      id: "channel-whatsapp",
      icon: faWhatsapp,
      title: "WhatsApp",
      description: "Instant messaging support",
      color: "green",
      link: "https://wa.me/1234567890",
      actionText: "Chat Now"
    },
    {
      id: "channel-email",
      icon: faEnvelope,
      title: "Email",
      description: "Detailed inquiry support",
      color: "blue",
      link: "mailto:support@botflow.com",
      actionText: "Send Email"
    },
    {
      id: "channel-livechat",
      icon: faComments,
      title: "Live Chat",
      description: "Real-time assistance",
      color: "purple",
      link: "#",
      actionText: "Start Chat"
    },
    {
      id: "channel-ticket",
      icon: faTicket,
      title: "Support Ticket",
      description: "Track your requests",
      color: "pink",
      link: "#",
      actionText: "Create Ticket"
    }
  ]

  const contactInfo = [
    {
      icon: faClock,
      title: "Support Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM EST",
        "Weekend: 10:00 AM - 4:00 PM EST"
      ],
      gradient: "from-[#6366F1] to-[#8B5CF6]"
    },
    {
      icon: faLocationDot,
      title: "Office Location",
      details: [
        "123 Innovation Drive",
        "San Francisco, CA 94105",
        "United States"
      ],
      gradient: "from-[#8B5CF6] to-[#EC4899]"
    },
    {
      icon: faPhone,
      title: "Phone Support",
      details: [
        "US: +1 (555) 123-4567",
        "International: +1 (555) 987-6543"
      ],
      gradient: "from-[#EC4899] to-[#6366F1]"
    }
  ]

  const faqs = [
    {
      id: "faq-support-1",
      question: "How quickly will I receive a response?",
      answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, use our live chat for immediate assistance."
    },
    {
      id: "faq-support-2",
      question: "Do you offer phone support?",
      answer: "Yes! Phone support is available for Pro and Business plan customers. Starter plan users can access email and chat support."
    },
    {
      id: "faq-support-3",
      question: "Can I schedule a demo with your team?",
      answer: "Absolutely! Select 'Sales Question' in the form above or click the 'Schedule Demo' button to book a personalized walkthrough."
    },
    {
      id: "faq-support-4",
      question: "What languages do you support?",
      answer: "Our support team provides assistance in English and Arabic. Additional language support is available through our help center documentation."
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section id="hero-support" className="pt-32 pb-16 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 h-[400px]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm mb-6">
            <span className="text-[#6366F1] font-semibold text-sm">
              <FontAwesomeIcon icon={faHeadset} className="mr-2" />24/7 Support Available
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight mb-6">
            How Can We <span className="gradient-text">Help You?</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get in touch with our support team. We're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Quick Support Channels */}
      <section id="quick-channels" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-3">Quick Support Channels</h2>
            <p className="text-gray-600">Choose the best way to reach us</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {supportChannels.map((channel) => (
              <div 
                key={channel.id} 
                className={`group bg-gradient-to-br from-${channel.color}-50 to-${channel.color}-100 p-8 rounded-2xl border-2 border-${channel.color}-200 hover:border-${channel.color}-400 hover:shadow-xl transition cursor-pointer`}
              >
                <div className={`w-16 h-16 bg-${channel.color}-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                  <FontAwesomeIcon icon={channel.icon} className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{channel.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{channel.description}</p>
                <a href={channel.link} className={`text-${channel.color}-600 font-semibold hover:underline`}>
                  {channel.actionText} <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form-section" className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div id="form-container">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-[#0F172A] mb-3">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours</p>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#6366F1] focus:outline-none transition" 
                        placeholder="John" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#6366F1] focus:outline-none transition" 
                        placeholder="Doe" 
                        required 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#6366F1] focus:outline-none transition" 
                      placeholder="john@example.com" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#6366F1] focus:outline-none transition" 
                      placeholder="+1 (555) 000-0000" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select 
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#6366F1] focus:outline-none transition" 
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="technical">Technical Support</option>
                      <option value="billing">Billing & Payments</option>
                      <option value="feature">Feature Request</option>
                      <option value="sales">Sales Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      rows="5" 
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#6366F1] focus:outline-none transition resize-none" 
                      placeholder="Tell us how we can help you..." 
                      required 
                    />
                  </div>
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="agree" 
                      className="mt-1 mr-3 w-4 h-4 text-[#6366F1] border-gray-300 rounded focus:ring-[#6366F1]" 
                      required 
                    />
                    <label htmlFor="agree" className="text-sm text-gray-600">
                      I agree to the <a href="#" className="text-[#6366F1] hover:underline">Privacy Policy</a> and <a href="#" className="text-[#6366F1] hover:underline">Terms of Service</a>
                    </label>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition"
                  >
                    Send Message <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
                  </button>
                </form>
              </div>
            </div>
            <div id="contact-info-sidebar">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <FontAwesomeIcon icon={info.icon} className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#0F172A] mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-3">Need Immediate Help?</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Check out our comprehensive knowledge base for instant answers
                  </p>
                  <a href="#" className="inline-block bg-white text-[#6366F1] px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">
                    Visit Help Center <FontAwesomeIcon icon={faBook} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-support" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-3">Common Questions</h2>
            <p className="text-gray-600">Quick answers to questions you may have</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#6366F1] transition">
                <div className="flex justify-between items-start cursor-pointer">
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A] mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                  <FontAwesomeIcon icon={faChevronDown} className="text-gray-400 mt-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-support" className="py-16 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">Our team is ready to help you get started with BotFlow</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition">
              Start Free Trial <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
            <a href="#" className="bg-white text-[#6366F1] px-8 py-4 rounded-lg font-semibold text-lg border-2 border-[#6366F1] hover:bg-[#6366F1] hover:text-white transition">
              Schedule Demo <FontAwesomeIcon icon={faCalendar} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}