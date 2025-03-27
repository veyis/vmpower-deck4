import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deck Building Services in Allentown, PA | VM Power Decks',
  description: 'VM Power Decks offers premium deck construction, restoration, and outdoor living services in Allentown, PA. Local experts with quality craftsmanship.',
  alternates: {
    canonical: 'https://www.vmpowerdecks.com/locations/allentown',
  },
};

export default function AllentownLocationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Deck Building Services in Allentown, PA</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          VM Power Decks is Allentown&apos;s trusted provider of custom deck building and outdoor living solutions. 
          As local experts, we understand the unique needs of Allentown homeowners and deliver exceptional results 
          that enhance your property and lifestyle.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Allentown Deck Building Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Custom Deck Design</h3>
            <p>
              We create personalized deck designs that complement your Allentown home&apos;s architecture 
              and maximize your outdoor space. Our designs account for your property&apos;s unique features 
              and your specific preferences.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Deck Construction</h3>
            <p>
              Our skilled craftsmen build your deck with precision and attention to detail, 
              using premium materials that withstand Allentown&apos;s seasonal weather changes.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Deck Restoration</h3>
            <p>
              Revitalize your existing deck with our comprehensive restoration services. 
              We address weather damage, structural issues, and aesthetic concerns to extend your deck&apos;s life.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Outdoor Living Spaces</h3>
            <p>
              Transform your Allentown backyard with complete outdoor living solutions, 
              including pergolas, outdoor kitchens, fire features, and integrated seating areas.
            </p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Allentown Homeowners Choose VM Power Decks</h2>
        <ul className="list-disc pl-6 mt-2">
          <li className="mb-2">
            <strong>Local Expertise:</strong> We understand Allentown&apos;s building codes, permit requirements, and climate considerations.
          </li>
          <li className="mb-2">
            <strong>Quality Materials:</strong> We use premium decking materials designed to withstand Pennsylvania&apos;s seasonal weather.
          </li>
          <li className="mb-2">
            <strong>Exceptional Craftsmanship:</strong> Our skilled team delivers meticulous workmanship on every project.
          </li>
          <li className="mb-2">
            <strong>Transparent Process:</strong> We provide clear communication, detailed quotes, and regular updates throughout your project.
          </li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Popular Deck Styles in Allentown</h2>
        <p>
          Allentown homes feature diverse architectural styles, and we design decks that complement each one:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li className="mb-2">
            <strong>Traditional Elevated Decks:</strong> Perfect for Allentown&apos;s sloped properties and colonial-style homes.
          </li>
          <li className="mb-2">
            <strong>Multi-Level Designs:</strong> Create distinct zones for dining, lounging, and entertaining.
          </li>
          <li className="mb-2">
            <strong>Covered Decks:</strong> Extend your outdoor season with protection from Allentown&apos;s variable weather.
          </li>
          <li className="mb-2">
            <strong>Deck and Patio Combinations:</strong> Blend different outdoor living elements for a comprehensive backyard retreat.
          </li>
        </ul>
        
        <div className="bg-gray-100 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Ready to Enhance Your Allentown Home?</h3>
          <p>
            Contact VM Power Decks today to schedule a free consultation at your Allentown property. 
            We&apos;ll discuss your vision, assess your space, and provide expert recommendations for your deck project.
          </p>
          <a href="/contact" className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
            Get a Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
} 