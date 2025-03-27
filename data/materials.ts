export interface MaterialBrand {
  name: string
  features: string
}

export interface MaterialCategory {
  name: string
  description: string
  image: string
  brands: MaterialBrand[]
}

export const materialCategories: MaterialCategory[] = [
  {
    name: 'Composite Decking',
    description:
      'A blend of wood fibers and recycled plastics, offering durability and minimal upkeep.',
    image: '/images/deck72.webp',
    brands: [
      {
        name: 'Trex',
        features:
          'Industry leader, made from 95% recycled materials, fade-resistant, available in multiple styles.',
      },
      {
        name: 'TimberTech (AZEK)',
        features:
          'PVC and composite options, superior scratch resistance, premium wood-like aesthetics.',
      },
      {
        name: 'Fiberon',
        features:
          'Colorfast technology, 50-year stain &amp; fade warranty, eco-friendly materials.',
      },
      {
        name: 'MoistureShield',
        features:
          'Can be installed in wet areas, even underwater, with CoolDeck Technology to reduce heat.',
      },
      {
        name: 'Deckorators',
        features:
          'Mineral-based composite for enhanced strength and slip resistance.',
      },
      {
        name: 'DuraLife',
        features:
          'Advanced hidden fastening system, moisture-resistant capped composite.',
      },
    ],
  },
  {
    name: 'Wood Decking',
    description:
      'A timeless choice with natural beauty, requiring regular maintenance.',
    image: '/images/deck21.webp',
    brands: [
      {
        name: 'YellaWood',
        features:
          'Premium pressure-treated wood, resistant to insects and rot.',
      },
      {
        name: 'Ipe Woods USA',
        features:
          'Hardwoods like Ipe, Cumaru, and Tigerwood, offering extreme durability.',
      },
      {
        name: 'Thompson&apos;s WaterSeal',
        features: 'Pre-treated lumber with UV and water protection.',
      },
      {
        name: 'Real Cedar',
        features:
          'Naturally resistant to insects and rot, known for its lightweight yet strong properties.',
      },
      {
        name: 'Advantage Lumber',
        features:
          'Specializing in exotic hardwoods, including Garapa and Massaranduba.',
      },
      {
        name: 'Kebony',
        features:
          'Sustainably modified wood, offering the elegance of tropical hardwood with less maintenance.',
      },
    ],
  },
]

export const comparisonData = [
  {
    material: 'Pressure-Treated Wood',
    lifespan: '10-15 years',
    maintenance: 'High',
    cost: 'Low',
    bestFor: 'Budget-conscious homeowners',
    durability: 3,
    ecoFriendly: 2,
  },
  {
    material: 'Composite Decking',
    lifespan: '25-30 years',
    maintenance: 'Low',
    cost: 'Medium-High',
    bestFor: 'Homeowners seeking low-maintenance and durability',
    durability: 4,
    ecoFriendly: 4,
  },
  {
    material: 'Wood Decking (Hardwood)',
    lifespan: '20-25 years',
    maintenance: 'Medium',
    cost: 'Medium-High',
    bestFor:
      'Homeowners who appreciate natural beauty and are willing to maintain it',
    durability: 4,
    ecoFriendly: 3,
  },
]
