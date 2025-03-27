import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Outdoor Living Trends | VM Power Decks',
  description: 'Discover the latest trends in outdoor living spaces, from multi-level decks to outdoor kitchens and sustainable materials. Get inspired for your next project.',
  alternates: {
    canonical: 'https://www.vmpowerdecks.com/blog/outdoor-living-trends',
  },
};

export default function OutdoorLivingTrendsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Top Outdoor Living Trends</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Outdoor living spaces have evolved significantly in recent years, with homeowners seeking to create 
          functional extensions of their indoor living areas. Here are the top trends we&apos;re seeing in outdoor living spaces.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Multi-Level Decks</h2>
        <p>
          Multi-level decks create distinct zones for different activities, such as dining, lounging, and cooking. 
          They add visual interest and can help navigate sloped yards while maximizing usable space.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Outdoor Kitchens</h2>
        <p>
          Beyond the basic grill, outdoor kitchens now include features like built-in refrigerators, 
          pizza ovens, sinks, and bar areas. These spaces make outdoor entertaining more convenient and enjoyable.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Fire Features</h2>
        <p>
          Fire pits and fireplaces extend the usability of outdoor spaces into cooler months. 
          They create a natural gathering spot and add ambiance to evening entertaining.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Integrated Lighting</h2>
        <p>
          Strategic lighting enhances safety and ambiance. Trends include recessed deck lights, 
          string lights, and LED lighting integrated into railings and stairs.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Sustainable Materials</h2>
        <p>
          Eco-friendly decking materials made from recycled content or sustainably harvested wood 
          are increasingly popular as homeowners become more environmentally conscious.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Covered Spaces</h2>
        <p>
          Pergolas, gazebos, and retractable awnings provide protection from the elements, 
          allowing outdoor spaces to be enjoyed regardless of weather conditions.
        </p>
        
        <div className="bg-gray-100 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Ready to Update Your Outdoor Space?</h3>
          <p>
            VM Power Decks can help you incorporate these trends into your outdoor living area. 
            Our design team stays current with the latest innovations to create spaces that are both 
            beautiful and functional.
          </p>
          <a href="/contact" className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
} 