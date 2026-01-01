import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShopify, faWordpress, faWix, faSlack, faHubspot } from '@fortawesome/free-brands-svg-icons'

export default function TrustSection() {
  const brands = [
    { icon: faShopify, name: 'Shopify' },
    { icon: faWordpress, name: 'WordPress' },
    { icon: faWix, name: 'Wix' },
    { icon: faSlack, name: 'Slack' },
    { icon: faHubspot, name: 'HubSpot' }
  ]

  return (
    <section id="trust-section" className="py-16 px-6 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-gray-500 font-medium mb-8">Trusted by 10,000+ businesses worldwide</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
          {brands.map((brand, index) => (
            <div key={index} className="flex justify-center">
              <FontAwesomeIcon icon={brand.icon} className="text-5xl text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}