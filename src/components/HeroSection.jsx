import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faArrowRight, faPlay, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="hero-section" className="pt-32 pb-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 h-[700px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <span className="text-[#6366F1] font-semibold text-sm">
                <FontAwesomeIcon icon={faBolt} className="mr-2" />AI-Powered Automation
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight mb-6">
              Automate Customer Conversations on <span className="gradient-text">Social Media</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your Facebook & Instagram into 24/7 sales machines. Smart bots that engage, qualify, and convert customers automatically.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#" className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition">
                Start Free Trial <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
              <a href="#" className="bg-white text-[#6366F1] px-8 py-4 rounded-lg font-semibold text-lg border-2 border-[#6366F1] hover:bg-[#6366F1] hover:text-white transition">
                Watch Demo <FontAwesomeIcon icon={faPlay} className="ml-2" />
              </a>
            </div>
            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                <span>14-day free trial</span>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] overflow-hidden">
            <Image 
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3516410965-cd707a0cb1d81ecc4146.png"
              alt="modern dashboard interface showing chatbot automation"
              fill
              className="object-contain rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}