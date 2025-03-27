import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deck Building Services in Pennsylvania | VM Power Decks',
  description: 'VM Power Decks provides premium deck building, restoration, and outdoor living services throughout Pennsylvania. Serving Allentown, Bethlehem, and surrounding areas.',
  alternates: {
    canonical: 'https://www.vmpowerdecks.com/locations/pennsylvania',
  },
};

export default function PennsylvaniaLocationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Deck Building Services in Pennsylvania</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          VM Power Decks is a leading provider of custom deck building and outdoor living solutions 
          throughout Pennsylvania. Our team combines expert craftsmanship with premium materials to 
          create beautiful, functional outdoor spaces that enhance your home and lifestyle.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Pennsylvania Service Areas</h2>
        <p>
          We proudly serve homeowners in the following Pennsylvania communities:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 list-disc pl-6 mt-2">
          <li>Allentown</li>
          <li>Bethlehem</li>
          <li>Easton</li>
          <li>Emmaus</li>
          <li>Whitehall</li>
          <li>Catasauqua</li>
          <li>Northampton</li>
          <li>Nazareth</li>
          <li>Hellertown</li>
          <li>Macungie</li>
          <li>Fogelsville</li>
          <li>And surrounding communities</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Services We Offer in Pennsylvania</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Custom Deck Design & Construction</h3>
            <p>
              We design and build custom decks tailored to your specific needs, preferences, and property. 
              From simple elevated platforms to elaborate multi-level outdoor living spaces, we bring your vision to life.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Deck Restoration & Repair</h3>
            <p>
              Extend the life of your existing deck with our comprehensive restoration services. 
              We address structural issues, replace damaged boards, and refresh the appearance of your outdoor space.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Outdoor Living Features</h3>
            <p>
              Enhance your deck with pergolas, outdoor kitchens, built-in seating, fire features, 
              and other elements that transform your deck into a complete outdoor living area.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Fence Installation</h3>
            <p>
              Complement your deck with a beautiful, functional fence that provides privacy, 
              security, and aesthetic appeal for your outdoor space.
            </p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose VM Power Decks in Pennsylvania</h2>
        <ul className="list-disc pl-6 mt-2">
          <li className="mb-2">
            <strong>Local Knowledge:</strong> We understand Pennsylvania&apos;s climate challenges and building requirements.
          </li>
          <li className="mb-2">
            <strong>Quality Materials:</strong> We use premium materials designed to withstand Pennsylvania&apos;s seasonal weather changes.
          </li>
          <li className="mb-2">
            <strong>Proper Licensing & Insurance:</strong> We maintain all necessary licenses and insurance for work in Pennsylvania.
          </li>
          <li className="mb-2">
            <strong>Personalized Service:</strong> We provide attentive, responsive service from initial consultation through project completion.
          </li>
        </ul>
        
        <div className="bg-gray-100 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Ready to Transform Your Pennsylvania Outdoor Space?</h3>
          <p>
            Contact VM Power Decks today to schedule a free consultation. We&apos;ll visit your property, 
            discuss your vision, and provide a detailed proposal for your project.
          </p>
          <a href="/contact" className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
            Schedule a Consultation
          </a>
        </div>
      </div>
    </div>
  );
} 