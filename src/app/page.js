import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faRobot, faGlobe, faCheckCircle, 
  faSparkles, faArrowRight, faPlay,
  faShareNodes, faReplyAll, faChartLine,
  faLayerGroup, faBrain, faStar,
  faCalendar
} from '@fortawesome/free-solid-svg-icons'
import { 
  faShopify, faWordpress, faWix, 
  faSlack, faHubspot, faFacebook, 
  faTwitter, faLinkedin, faInstagram 
} from '@fortawesome/free-brands-svg-icons'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import TrustSection from '@/components/TrustSection'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import SocialProof from '@/components/SocialProof'
import Pricing from '@/components/Pricing'
import UseCases from '@/components/UseCases'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TrustSection />
      <HowItWorks />
      <Features />
      <SocialProof />
      <Pricing />
      <UseCases />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}