import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export default function UseCases() {
  const useCases = [
    {
      id: 'ecommerce',
      title: 'For E-commerce',
      description: 'Automate order tracking, product recommendations, and customer support to boost sales 24/7.',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/f32086247a-b649d7b2afc9d4a48650.png'
    },
    {
      id: 'realestate',
      title: 'For Real Estate',
      description: 'Qualify leads, schedule viewings, and answer property questions instantly to close deals faster.',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/0e8bf66063-6033ea4bd61e66c3e38f.png'
    },
    {
      id: 'agencies',
      title: 'For Agencies',
      description: 'Manage multiple client accounts efficiently with white-label solutions and team collaboration tools.',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/f853a70d32-b5fd3836736c8fcb63ea.png'
    },
    {
      id: 'small-business',
      title: 'For Small Businesses',
      description: 'Compete with larger brands by providing instant, personalized customer service at scale.',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/119dcd5096-03f90575fcc19a9635b7.png'
    }
  ]

  return (
    <section id="use-cases" className="py-24 px-6 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Built for Your Industry</h2>
          <p className="text-xl text-gray-600">Tailored solutions for every business type</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase) => (
            <div key={useCase.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="h-48 overflow-hidden rounded-xl mb-6 relative">
                <Image 
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-3">{useCase.title}</h3>
              <p className="text-gray-600 mb-4">{useCase.description}</p>
              <a href="#" className="text-[#6366F1] font-semibold hover:underline">
                Learn more <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}