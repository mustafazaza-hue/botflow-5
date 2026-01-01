import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses',
      price: '$29',
      features: [
        '1 Facebook Page',
        '1 Instagram Account',
        '1,000 conversations/month',
        'Basic analytics',
        'Email support'
      ],
      isPopular: false
    },
    {
      name: 'Professional',
      description: 'For growing businesses',
      price: '$79',
      features: [
        '5 Facebook Pages',
        '5 Instagram Accounts',
        '10,000 conversations/month',
        'Advanced analytics',
        'AI-powered responses',
        'Priority support'
      ],
      isPopular: true
    },
    {
      name: 'Business',
      description: 'For large enterprises',
      price: '$199',
      features: [
        'Unlimited pages',
        'Unlimited conversations',
        'Custom analytics',
        'Team collaboration',
        'API access',
        'Dedicated support'
      ],
      isPopular: false
    }
  ]

  return (
    <section id="pricing" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 mb-8">Choose the perfect plan for your business</p>
          <div className="inline-flex bg-gray-100 p-1 rounded-lg">
            <button className="px-6 py-2 bg-white rounded-lg font-semibold text-[#0F172A] shadow-sm">Monthly</button>
            <button className="px-6 py-2 text-gray-600 rounded-lg font-semibold">Yearly <span className="text-xs text-green-600 ml-1">Save 20%</span></button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`${
                plan.isPopular 
                  ? 'bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] p-8 rounded-2xl shadow-2xl transform scale-105 relative' 
                  : 'bg-white border-2 border-gray-200 p-8 rounded-2xl hover:border-[#6366F1] hover:shadow-xl transition'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#EC4899] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <h3 className={`text-2xl font-bold ${plan.isPopular ? 'text-white' : 'text-[#0F172A]'} mb-2`}>
                {plan.name}
              </h3>
              <p className={`${plan.isPopular ? 'text-indigo-100' : 'text-gray-600'} mb-6`}>
                {plan.description}
              </p>
              
              <div className="mb-6">
                <span className={`text-5xl font-bold ${plan.isPopular ? 'text-white' : 'text-[#0F172A]'}`}>
                  {plan.price}
                </span>
                <span className={plan.isPopular ? 'text-indigo-100' : 'text-gray-600'}>
                  /month
                </span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <FontAwesomeIcon 
                      icon={faCheck} 
                      className={plan.isPopular ? 'text-white mr-3 mt-1' : 'text-green-500 mr-3 mt-1'} 
                    />
                    <span className={plan.isPopular ? 'text-white' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#" 
                className={`block w-full text-center py-3 rounded-lg font-semibold transition ${
                  plan.isPopular 
                    ? 'bg-white text-[#6366F1] hover:bg-gray-100' 
                    : 'bg-gray-100 text-[#0F172A] hover:bg-gray-200'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}