import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deck Building Services in Catasauqua, PA | VM Power Decks',
  description: 'VM Power Decks provides custom deck building, restoration, and outdoor living services in Catasauqua, PA. Quality craftsmanship from local experts.',
  alternates: {
    canonical: 'https://www.vmpowerdecks.com/locations/catasauqua',
  },
};

export default function CatasauquaLocationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Deck Building Services in Catasauqua, PA</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          VM Power Decks is proud to serve the Catasauqua community with premium deck building and 
          outdoor living solutions. Our local team understands the unique character of Catasauqua homes 
          and delivers custom outdoor spaces that enhance your property value and lifestyle.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Deck Services for Catasauqua Homes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Custom Deck Design & Construction</h3>
            <p>
              We create personalized deck designs that complement your Catasauqua home&apos;s architecture 
              and meet your specific needs. Our construction process emphasizes quality materials and 
              meticulous craftsmanship.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Deck Renovation & Repair</h3>
            <p>
              Revitalize your existing deck with our comprehensive restoration services. 
              We address structural issues, replace damaged components, and refresh the appearance 
              of your outdoor space.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Complete Outdoor Living Spaces</h3>
            <p>
              Transform your Catasauqua backyard with integrated outdoor living features, including 
              pergolas, outdoor kitchens, fire pits, and custom seating areas.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Deck Maintenance Programs</h3>
            <p>
              Protect your investment with our seasonal maintenance services, designed to keep 
              your deck looking beautiful and functioning properly year after year.
            </p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Catasauqua Residents Choose VM Power Decks</h2>
        <ul className="list-disc pl-6 mt-2">
          <li className="mb-2">
            <strong>Local Presence:</strong> As part of the Catasauqua community, we understand local building requirements and neighborhood aesthetics.
          </li>
          <li className="mb-2">
            <strong>Premium Materials:</strong> We use high-quality decking materials selected for their durability in Pennsylvania&apos;s climate.
          </li>
          <li className="mb-2">
            <strong>Expert Craftsmanship:</strong> Our skilled team delivers precise, detailed work on every project.
          </li>
          <li className="mb-2">
            <strong>Personalized Service:</strong> We provide attentive, responsive customer service from initial consultation through project completion.
          </li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Deck Solutions for Catasauqua&apos;s Unique Homes</h2>
        <p>
          Catasauqua features a variety of home styles, from historic properties to newer constructions. 
          We design decks that complement each unique architectural style:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li className="mb-2">
            <strong>Historic Home Decks:</strong> Thoughtfully designed additions that respect and enhance the character of older Catasauqua homes.
          </li>
          <li className="mb-2">
            <strong>Contemporary Designs:</strong> Clean lines and modern materials for newer properties in the area.
          </li>
          <li className="mb-2">
            <strong>Tiered Decks:</strong> Perfect solutions for Catasauqua&apos;s varied terrain and sloped yards.
          </li>
          <li className="mb-2">
            <strong>Compact Spaces:</strong> Efficient designs that maximize smaller Catasauqua properties.
          </li>
        </ul>
        
        <div className="bg-gray-100 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Ready to Enhance Your Catasauqua Home?</h3>
          <p>
            Contact VM Power Decks today to schedule a free consultation at your Catasauqua property. 
            We&apos;ll discuss your vision, assess your space, and provide expert recommendations for your deck project.
          </p>
          <a href="/contact" className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
            Schedule Your Consultation
          </a>
        </div>
      </div>
    </div>
  );
} 