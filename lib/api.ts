import { cache } from 'react'
import type { BlogPost, Project, TeamMember } from '@/types'

export const getBlogPosts = cache(async (): Promise<BlogPost[]> => {
  // Simulating an API call or database query
  return [
    {
      id: 'post-1',
      title: 'Building the Perfect Deck for Your Pennsylvania Home',
      date: '2024-03-08',
      excerpt:
        "Learn about the key considerations for building a deck that can withstand Pennsylvania's weather and enhance your outdoor living space.",
      content: `
        <p>When it comes to building the perfect deck for your Pennsylvania home, there are several factors to consider. The Keystone State's diverse climate, with its hot summers and cold winters, demands a deck that can withstand various weather conditions while providing a beautiful and functional outdoor living space.</p>

        <h2>Choose the Right Materials</h2>
        <p>Selecting appropriate materials is crucial for a long-lasting deck in Pennsylvania. Consider these options:</p>
        <ul>
          <li>Pressure-treated lumber: Affordable and resistant to rot and insects</li>
          <li>Cedar or redwood: Naturally resistant to decay and insects, with a beautiful appearance</li>
          <li>Composite decking: Low-maintenance and highly durable, perfect for withstanding Pennsylvania's climate extremes</li>
        </ul>

        <h2>Design for Pennsylvania's Climate</h2>
        <p>Your deck design should account for the state's weather patterns:</p>
        <ul>
          <li>Proper drainage to prevent water accumulation</li>
          <li>Adequate ventilation to reduce moisture buildup</li>
          <li>Snow load considerations for winter months</li>
        </ul>

        <h2>Incorporate Pennsylvania-Inspired Features</h2>
        <p>Enhance your deck with elements that complement the state's natural beauty:</p>
        <ul>
          <li>Native plant landscaping</li>
          <li>Stone accents reminiscent of the Pocono Mountains</li>
          <li>Pergolas or shade structures for hot summer days</li>
        </ul>

        <p>By considering these factors, you can create a deck that not only withstands Pennsylvania's climate but also provides a beautiful outdoor retreat for years to come.</p>
      `,
      readTime: 5,
      image: '/images/deck17.webp',
      author: 'John Hamilton',
      tags: ['Decks', 'Design', 'Pennsylvania'],
    },
    {
      id: 'post-2',
      title: 'Deck Maintenance Tips for New Jersey Homeowners',
      date: '2024-02-15',
      excerpt:
        "Discover essential maintenance tips to keep your deck looking its best and extend its lifespan in New Jersey's climate.",
      content: `
        <p>As a New Jersey homeowner, maintaining your deck is crucial to ensure its longevity and beauty. The Garden State's coastal climate, with its humidity and salt air, can take a toll on outdoor structures. Here are some essential maintenance tips to keep your deck in top condition.</p>

        <h2>Regular Cleaning</h2>
        <p>Clean your deck at least twice a year to prevent dirt, mold, and mildew buildup:</p>
        <ul>
          <li>Use a power washer or a stiff-bristled brush with a deck cleaner</li>
          <li>Pay special attention to areas between deck boards</li>
          <li>Allow the deck to dry completely before applying any treatments</li>
        </ul>

        <h2>Inspect and Repair</h2>
        <p>Conduct thorough inspections to catch and address issues early:</p>
        <ul>
          <li>Check for loose, warped, or damaged boards</li>
          <li>Tighten any loose screws or replace rusted fasteners</li>
          <li>Look for signs of rot, especially in areas that remain damp</li>
        </ul>

        <h2>Seal and Stain</h2>
        <p>Protect your deck from New Jersey's weather extremes:</p>
        <ul>
          <li>Apply a water-repellent sealer every 2-3 years</li>
          <li>Consider using a stain with UV protection to prevent fading</li>
          <li>Choose products designed for your deck's material (wood, composite, etc.)</li>
        </ul>

        <h2>Prepare for Seasons</h2>
        <p>Take steps to protect your deck during different seasons:</p>
        <ul>
          <li>Remove leaves and debris in the fall to prevent staining</li>
          <li>Clear snow carefully in the winter to avoid scratching the surface</li>
          <li>Trim nearby trees and bushes to reduce shade and moisture retention</li>
        </ul>

        <p>By following these maintenance tips, you can ensure that your deck remains a beautiful and functional part of your New Jersey home for years to come.</p>
      `,
      readTime: 3,
      image: '/images/deck72.webp',

      author: 'Jane Harper',
      tags: ['Decks', 'Maintenance', 'New Jersey'],
    },
    {
      id: 'post-3',
      title: 'Choosing the Right Decking Material for Your Outdoor Project',
      date: '2024-01-22',
      excerpt:
        'Explore the various decking materials available and learn how to choose the best option for your needs and budget.',
      content: `
        <p>When planning your outdoor deck project, one of the most important decisions you'll make is choosing the right decking material. With numerous options available, each with its own set of pros and cons, it's essential to consider factors such as durability, maintenance, aesthetics, and cost. Let's explore some popular decking materials to help you make an informed decision.</p>

        <h2>Pressure-Treated Lumber</h2>
        <p>Pros:</p>
        <ul>
          <li>Affordable</li>
          <li>Widely available</li>
          <li>Resistant to rot and insects</li>
        </ul>
        <p>Cons:</p>
        <ul>
          <li>Requires regular maintenance (staining, sealing)</li>
          <li>Can warp, crack, or splinter over time</li>
          <li>Contains chemicals that some homeowners prefer to avoid</li>
        </ul>

        <h2>Cedar and Redwood</h2>
        <p>Pros:</p>
        <ul>
          <li>Naturally beautiful appearance</li>
          <li>Resistant to rot and insects</li>
          <li>Doesn't contain chemical treatments</li>
        </ul>
        <p>Cons:</p>
        <ul>
          <li>More expensive than pressure-treated lumber</li>
          <li>Requires regular maintenance to maintain appearance</li>
          <li>Can be prone to scratches and dents</li>
        </ul>

        <h2>Composite Decking</h2>
        <p>Pros:</p>
        <ul>
          <li>Low maintenance</li>
          <li>Durable and long-lasting</li>
          <li>Resistant to fading, staining, and scratching</li>
          <li>Available in a wide range of colors and styles</li>
        </ul>
        <p>Cons:</p>
        <ul>
          <li>More expensive upfront cost</li>
          <li>Can get hot in direct sunlight</li>
          <li>May look less natural than wood</li>
        </ul>

        <h2>PVC (Vinyl) Decking</h2>
        <p>Pros:</p>
        <ul>
          <li>Extremely low maintenance</li>
          <li>Resistant to mold, mildew, and insects</li>
          <li>Doesn't splinter or warp</li>
        </ul>
        <p>Cons:</p>
        <ul>
          <li>Higher upfront cost</li>
          <li>Can look and feel less natural than wood</li>
          <li>May become brittle in extremely cold climates</li>
        </ul>

        <h2>Aluminum Decking</h2>
        <p>Pros:</p>
        <ul>
          <li>Extremely durable and long-lasting</li>
          <li>Low maintenance</li>
          <li>Fireproof and slip-resistant</li>
        </ul>
        <p>Cons:</p>
        <ul>
          <li>Highest upfront cost</li>
          <li>Can be noisy when walked on</li>
          <li>Limited color and style options</li>
        </ul>

        <p>When choosing your decking material, consider factors such as your local climate, budget, desired aesthetics, and how much time you're willing to spend on maintenance. By carefully weighing these factors, you can select the perfect decking material for your outdoor project that will provide years of enjoyment and value to your home.</p>
      `,
      readTime: 7,
      image: '/images/deck16.webp',
      author: 'Mike Johnson',
      tags: ['Decks', 'Materials', 'Design'],
    },
  ]
})

export const getProjects = cache(async (): Promise<Project[]> => {
  // Import projects from data file
  const { projects } = await import('@/data/projects')
  return projects
})

export const getTeamMembers = cache(async (): Promise<TeamMember[]> => {
  // Simulating an API call or database query
  return [
    {
      name: 'John Doe',
      role: 'Founder & Lead Designer',
      image: '/images/placeholder.svg',
      bio: 'With over 20 years of experience in outdoor design, John brings creativity and expertise to every project.',
    },
    {
      name: 'Jane Smith',
      role: 'Senior Project Manager',
      image: '/images/placeholder.svg',
      bio: 'Jane ensures that every project is completed on time and exceeds client expectations.',
    },
    {
      name: 'Mike Johnson',
      role: 'Master Carpenter',
      image: '/images/placeholder.svg',
      bio: "Mike's craftsmanship and attention to detail bring our designs to life with precision and quality.",
    },
  ]
})
