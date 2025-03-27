import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deck Building Services in New Jersey | VM Power Decks',
  description: 'VM Power Decks offers expert deck construction, outdoor living spaces, and renovation services throughout New Jersey. Quality craftsmanship and premium materials.',
  alternates: {
    canonical: 'https://www.vmpowerdecks.com/locations/new-jersey',
  },
};

export default function NewJerseyLocationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Deck Building Services in New Jersey</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          VM Power Decks is proud to serve homeowners throughout New Jersey with premium deck building, 
          outdoor living spaces, and renovation services. Our team brings years of experience and a commitment 
          to quality craftsmanship to every project in the Garden State.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our New Jersey Service Areas</h2>
        <p>
          We provide our comprehensive deck and outdoor living services to the following areas in New Jersey:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 list-disc pl-6 mt-2">
          <li>Princeton</li>
          <li>Morristown</li>
          <li>Montclair</li>
          <li>Summit</li>
          <li>Westfield</li>
          <li>Ridgewood</li>
          <li>Hoboken</li>
          <li>Jersey City</li>
          <li>Cherry Hill</li>
          <li>Haddonfield</li>
          <li>Moorestown</li>
          <li>And surrounding communities</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Services We Offer in New Jersey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Custom Deck Design & Construction</h3>
            <p>
              From simple platform decks to elaborate multi-level designs, we create custom outdoor 
              spaces tailored to your specific needs and property.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Deck Restoration & Repair</h3>
            <p>
              Revitalize your existing deck with our comprehensive restoration services, 
              addressing structural issues, surface damage, and aesthetic concerns.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Outdoor Living Spaces</h3>
            <p>
              Create a complete outdoor living area with pergolas, outdoor kitchens, 
              fire features, and integrated seating areas.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Patio Design & Installation</h3>
            <p>
              Complement your deck with a beautiful patio using pavers, natural stone, 
              or stamped concrete for a cohesive outdoor space.
            </p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose VM Power Decks in New Jersey</h2>
        <ul className="list-disc pl-6 mt-2">
          <li className="mb-2">
            <strong>Local Expertise:</strong> We understand New Jersey&apos;s climate, building codes, and permit requirements.
          </li>
          <li className="mb-2">
            <strong>Premium Materials:</strong> We use only high-quality, durable materials suited to New Jersey&apos;s weather conditions.
          </li>
          <li className="mb-2">
            <strong>Fully Licensed & Insured:</strong> We maintain all necessary licenses and insurance for work in New Jersey.
          </li>
          <li className="mb-2">
            <strong>Exceptional Customer Service:</strong> From initial consultation to final walkthrough, we prioritize clear communication and customer satisfaction.
          </li>
        </ul>
        
        <div className="bg-gray-100 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Ready to Start Your New Jersey Deck Project?</h3>
          <p>
            Contact VM Power Decks today to schedule a free consultation. We&apos;ll discuss your vision, 
            provide expert recommendations, and deliver a detailed quote for your project.
          </p>
          <a href="/contact" className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
            Get a Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
} 