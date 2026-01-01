import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCalendar } from '@fortawesome/free-solid-svg-icons'

export default function CTASection() {
  return (
    <section id="cta-section" className="py-24 px-6 bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#EC4899]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Transform Your Customer Engagement?</h2>
        <p className="text-xl text-indigo-100 mb-8">Join 10,000+ businesses already automating their social media conversations</p>
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
  )
}