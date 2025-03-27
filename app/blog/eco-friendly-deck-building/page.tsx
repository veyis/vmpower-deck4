import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eco-Friendly Deck Building - Sustainable Practices | VM Power Decks',
  description: 'Learn about eco-friendly deck building practices and sustainable materials that reduce environmental impact while creating beautiful outdoor spaces.',
  alternates: {
    canonical: 'https://www.vmpowerdecks.com/blog/eco-friendly-deck-building',
  },
};

export default function EcoFriendlyDeckBuildingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Eco-Friendly Deck Building: Sustainable Practices</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          At VM Power Decks, we&apos;re committed to environmentally responsible building practices. 
          Eco-friendly deck building not only helps protect our planet but often results in a more 
          durable, beautiful outdoor space for you to enjoy.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Sustainable Decking Materials</h2>
        <p>
          One of the most important choices in eco-friendly deck building is selecting sustainable materials:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li className="mb-2">
            <strong>Reclaimed Wood:</strong> Using salvaged wood gives new life to existing materials and prevents 
            them from ending up in landfills. It also adds character and history to your deck.
          </li>
          <li className="mb-2">
            <strong>FSC-Certified Wood:</strong> Wood certified by the Forest Stewardship Council comes from 
            responsibly managed forests that provide environmental, social, and economic benefits.
          </li>
          <li className="mb-2">
            <strong>Composite Decking:</strong> Made from recycled plastic and wood fibers, composite decking 
            prevents these materials from entering landfills while creating a durable, low-maintenance deck surface.
          </li>
          <li className="mb-2">
            <strong>Bamboo:</strong> As one of the fastest-growing plants, bamboo is a highly renewable resource 
            that makes an excellent decking material with proper treatment.
          </li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Eco-Friendly Building Practices</h2>
        <p>
          Beyond materials, how we build matters too:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li className="mb-2">
            <strong>Minimal Site Disruption:</strong> We carefully plan our construction to minimize impact on 
            surrounding vegetation and soil.
          </li>
          <li className="mb-2">
            <strong>Waste Reduction:</strong> Precise measurements and careful planning help us minimize waste. 
            Any scraps are recycled or repurposed whenever possible.
          </li>
          <li className="mb-2">
            <strong>Non-Toxic Treatments:</strong> We use eco-friendly stains, sealants, and cleaning products 
            that won&apos;t harm the environment.
          </li>
          <li className="mb-2">
            <strong>Energy-Efficient Lighting:</strong> Solar-powered or LED lighting options reduce energy 
            consumption while illuminating your outdoor space.
          </li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Long-Term Benefits</h2>
        <p>
          Eco-friendly decking isn&apos;t just good for the planet—it offers practical benefits too:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li className="mb-2">
            <strong>Durability:</strong> Many sustainable materials are designed to last longer than traditional options.
          </li>
          <li className="mb-2">
            <strong>Lower Maintenance:</strong> Composite and other eco-friendly materials often require less 
            maintenance, saving time and resources.
          </li>
          <li className="mb-2">
            <strong>Health Benefits:</strong> Non-toxic materials and treatments mean fewer harmful chemicals 
            in your outdoor living space.
          </li>
          <li className="mb-2">
            <strong>Increased Home Value:</strong> Eco-friendly features are increasingly attractive to homebuyers.
          </li>
        </ul>
        
        <div className="bg-gray-100 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Ready for an Eco-Friendly Deck?</h3>
          <p>
            VM Power Decks specializes in sustainable outdoor living spaces. Contact us to discuss how we can 
            create an environmentally responsible deck that meets your needs and reflects your values.
          </p>
          <a href="/contact" className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
            Get a Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
} 