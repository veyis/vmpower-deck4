import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Choosing the Right Decking Material | VM Power Decks',
  description: 'Compare different decking materials including wood, composite, and PVC to find the best option for your outdoor space. Expert advice from VM Power Decks.',
  alternates: {
    canonical: 'https://www.vmpowerdecks.com/blog/choosing-the-right-decking-material',
  },
};

export default function ChoosingTheRightDeckingMaterialPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Choosing the Right Decking Material</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Selecting the right material for your deck is one of the most important decisions in the building process. 
          Each option has its own benefits, drawbacks, and aesthetic qualities. This guide will help you make an informed choice.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Pressure-Treated Wood</h2>
        <p>
          Pressure-treated lumber is the most common and economical decking material. It&apos;s treated to resist rot, 
          insects, and fungal decay, making it more durable than untreated wood.
        </p>
        <p className="mt-2"><strong>Pros:</strong> Affordable, readily available, easy to work with</p>
        <p><strong>Cons:</strong> Requires regular maintenance, can warp or crack, contains chemicals</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Cedar and Redwood</h2>
        <p>
          These natural woods contain oils and tannins that make them naturally resistant to rot and insects.
          They offer a beautiful, rich appearance that many homeowners prefer.
        </p>
        <p className="mt-2"><strong>Pros:</strong> Natural beauty, no chemicals, resistant to decay</p>
        <p><strong>Cons:</strong> More expensive than pressure-treated wood, requires maintenance</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Composite Decking</h2>
        <p>
          Made from a blend of wood fibers and recycled plastic, composite decking offers the look of wood 
          without much of the maintenance.
        </p>
        <p className="mt-2"><strong>Pros:</strong> Low maintenance, won&apos;t splinter or rot, long lifespan</p>
        <p><strong>Cons:</strong> Higher upfront cost, can fade over time, can get hot in direct sunlight</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">PVC (Vinyl) Decking</h2>
        <p>
          PVC decking contains no wood and is made entirely from plastic. It&apos;s highly resistant to moisture, 
          stains, and scratches.
        </p>
        <p className="mt-2"><strong>Pros:</strong> Virtually maintenance-free, won&apos;t rot or warp, long warranty</p>
        <p><strong>Cons:</strong> Most expensive option, can look less natural, can become brittle in cold climates</p>
        
        <div className="bg-gray-100 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Need Help Deciding?</h3>
          <p>
            Our experts at VM Power Decks can help you choose the perfect decking material for your specific needs, 
            budget, and local climate. Contact us for a free consultation.
          </p>
          <a href="/contact" className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
            Get Expert Advice
          </a>
        </div>
      </div>
    </div>
  );
} 