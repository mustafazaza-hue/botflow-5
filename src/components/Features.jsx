import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faRobot, faShareNodes, faReplyAll, 
  faChartLine, faLayerGroup, faBrain, 
  faArrowRight 
} from '@fortawesome/free-solid-svg-icons'

export default function Features() {
  const features = [
    {
      icon: faRobot,
      title: "Chatbot Automation",
      description: "Build intelligent bots that understand context and respond naturally to customer queries.",
      color: "primary"
    },
    {
      icon: faShareNodes,
      title: "Social Media Integration",
      description: "Seamlessly connect Facebook, Instagram, and manage all conversations in one place.",
      color: "secondary"
    },
    {
      icon: faReplyAll,
      title: "Auto Replies & Flows",
      description: "Create dynamic conversation flows with triggers, conditions, and personalized responses.",
      color: "accent"
    },
    {
      icon: faChartLine,
      title: "Analytics & Reports",
      description: "Track engagement, conversion rates, and ROI with detailed analytics dashboards.",
      color: "primary"
    },
    {
      icon: faLayerGroup,
      title: "Multi-Page Management",
      description: "Manage multiple Facebook and Instagram accounts from a single dashboard.",
      color: "secondary"
    },
    {
      icon: faBrain,
      title: "AI-Powered Responses",
      description: "Let AI generate natural, context-aware responses that feel human and engaging.",
      color: "accent"
    }
  ]

  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600">Everything you need to automate customer engagement</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description, color }) {
  const gradientClass = {
    primary: 'from-[#6366F1] to-[#8B5CF6]',
    secondary: 'from-[#8B5CF6] to-[#EC4899]',
    accent: 'from-[#EC4899] to-[#6366F1]'
  }[color]

  const textColor = {
    primary: 'text-[#6366F1]',
    secondary: 'text-[#8B5CF6]',
    accent: 'text-[#EC4899]'
  }[color]

  const borderColor = {
    primary: 'hover:border-[#6366F1]',
    secondary: 'hover:border-[#8B5CF6]',
    accent: 'hover:border-[#EC4899]'
  }[color]

  return (
    <div className={`group p-8 rounded-2xl border-2 border-gray-100 ${borderColor} hover:shadow-xl transition`}>
      <div className={`w-14 h-14 bg-gradient-to-br ${gradientClass} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition`}>
        <FontAwesomeIcon icon={icon} className="text-white text-2xl" />
      </div>
      <h3 className="text-xl font-bold text-[#0F172A] mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className={`${textColor} font-semibold hover:underline`}>
        Learn more <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
      </a>
    </div>
  )
}