export default function FAQ() {
  const faqs = [
    {
      id: 1,
      question: 'Do I need technical skills to use BotFlow?',
      answer: 'No technical skills required! Our visual flow builder makes it easy for anyone to create powerful chatbots.'
    },
    {
      id: 2,
      question: 'Can I try BotFlow before purchasing?',
      answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required.'
    },
    {
      id: 3,
      question: 'Which social media platforms do you support?',
      answer: 'Currently, we support Facebook Pages and Instagram Business accounts with more platforms coming soon.'
    },
    {
      id: 4,
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Absolutely! You can change your plan at any time, and we\'ll prorate the charges accordingly.'
    },
    {
      id: 5,
      question: 'What kind of support do you offer?',
      answer: 'We provide email support for all plans, priority support for Pro users, and dedicated support for Business customers.'
    }
  ]

  return (
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}