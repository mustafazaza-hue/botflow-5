import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export default function SocialProof() {
  const testimonials = [
    {
      text: '"BotFlow transformed our customer service. We\'re now handling 3x more inquiries with the same team size."',
      name: 'Michael Chen',
      role: 'CEO, TechStore',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg'
    },
    {
      text: '"The ROI was immediate. Our conversion rate increased by 45% in the first month alone."',
      name: 'Sarah Johnson',
      role: 'Marketing Director, StyleHub',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg'
    },
    {
      text: '"Easy to set up, powerful features, and excellent support. Highly recommend for any business."',
      name: 'David Martinez',
      role: 'Founder, RealtyPro',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg'
    }
  ]

  const stats = [
    { number: '10K+', text: 'Active Users' },
    { number: '2M+', text: 'Conversations Automated' },
    { number: '98%', text: 'Customer Satisfaction' }
  ]

  return (
    <section id="social-proof" className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600">See what our customers say about us</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-5xl font-bold gradient-text mb-2">{stat.number}</div>
              <p className="text-gray-600 font-medium">{stat.text}</p>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
  )
}