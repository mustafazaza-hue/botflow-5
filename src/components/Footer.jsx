const { faFacebook, faTwitter, faLinkedin, faInstagram } = require("@fortawesome/free-brands-svg-icons");
const { faRobot } = require("@fortawesome/free-solid-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");

export default function Footer() {
  return (  
      <footer id="footer" className="bg-[#0F172A] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faRobot} className="text-white text-xl" />
                </div>
                <span className="text-xl font-bold">BotFlow</span>
              </div>
              <p className="text-gray-400 mb-6">
                Automate your social media conversations and grow your business 24/7 with AI-powered chatbots.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-[#1E293B] rounded-full flex items-center justify-center hover:bg-[#6366F1] transition">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="w-10 h-10 bg-[#1E293B] rounded-full flex items-center justify-center hover:bg-[#6366F1] transition">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="w-10 h-10 bg-[#1E293B] rounded-full flex items-center justify-center hover:bg-[#6366F1] transition">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#" className="w-10 h-10 bg-[#1E293B] rounded-full flex items-center justify-center hover:bg-[#6366F1] transition">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="/automation" className="text-gray-400 hover:text-white transition">Features</a></li>
                <li><a href="/pricing" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                <li><a href="/real-estate" className="text-gray-400 hover:text-white transition">Use Cases</a></li>
                <li><a href="/integration" className="text-gray-400 hover:text-white transition">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="/help-center" className="text-gray-400 hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">API Reference</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2026 Nexus Company. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
  );
}