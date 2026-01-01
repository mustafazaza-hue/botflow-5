export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Connect Your Pages',
      description: 'Link your Facebook and Instagram accounts in seconds. No technical knowledge required.',
      gradient: 'from-[#6366F1] to-[#8B5CF6]'
    },
    {
      number: '2',
      title: 'Build Your Bot',
      description: 'Use our visual flow builder to create smart conversation paths. AI-powered suggestions included.',
      gradient: 'from-[#8B5CF6] to-[#EC4899]'
    },
    {
      number: '3',
      title: 'Watch It Convert',
      description: 'Your bot engages customers 24/7, qualifies leads, and drives sales automatically.',
      gradient: 'from-[#EC4899] to-[#6366F1]'
    }
  ]

  return (
    <section id="how-it-works" className="py-24 px-6 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Get started in 3 simple steps</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center mb-6`}>
                <span className="text-white text-2xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}