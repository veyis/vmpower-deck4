export interface Service {
  id: string
  name: string
  description: string
  longDescription: string
  features: string[]
  benefits: string[]
  image: string
  faqs: { question: string; answer: string }[]
  locations: string[]
}

export const sharedLocations = [
  'Allentown, PA',
  'Bethlehem, PA',
  'Northampton, PA',
  'Emmaus, PA',
  'Coplay, PA',
  'Fullerton, PA',
  'Hokendauqua, PA',
  'Whitehall, PA',
  'Stiles, PA',
  'Cementon, PA',
  'Bath, PA',
  'Freemansburg, PA',
  'Dorneyville, PA',
  'Laurys Station, PA',
  'Wescosville, PA',
  'Easton, PA',
  'Phillipsburg, NJ',
  'Nazareth, PA',
  'Hellertown, PA',
  'Macungie, PA',
  'Slatington, PA',
  'Trexlertown, PA',
  'Coopersburg, PA',
  'Pen Argyl, PA',
  'Palmerton, PA',
  'Quakertown, PA',
  'East Stroudsburg, PA',
  'Bangor, PA',
  'Wilson, PA',
  'Tatamy, PA',
  'Reading, PA',
  'Stroudsburg, PA',
  'Pottstown, PA',
  'Lansdale, PA',
  'Hazleton, PA',
  'Doylestown, PA',
  'Pottsville, PA',
  'Jim Thorpe, PA',
  'Souderton, PA',
  'Perkasie, PA',
  'Schnecksville, PA',
  'New Tripoli, PA',
  'Boyertown, PA',
  'Tamaqua, PA',
  'Fleetwood, PA',
  'Wilkes-Barre, PA',
  'King of Prussia, PA',
  'Norristown, PA',
  'Hershey, PA',
  'Lebanon, PA',
  'Mertztown, PA',
  'Moscow, PA',
  'Greentown, PA',
  'Drums, PA',
  'Leola, PA',
  'Newfoundland, PA',
  'Hopewell, NJ',
  'Akron, PA',
  'Lambertville, NJ',
  'Berwyn, PA',
]

export const services: Service[] = [
  {
    id: 'deck-construction',
    name: 'Deck Construction & Installation',
    description:
      'Transform your Pennsylvania or New Jersey home with our custom deck construction and installation services.',
    longDescription:
      "At VM Power Deck, we specialize in creating beautiful, durable decks tailored to the unique climate and lifestyle of Pennsylvania and New Jersey homeowners. Our expert team uses high-quality materials and innovative designs to bring your dream outdoor space to life. Whether you're looking for a cozy retreat in the Poconos or a spacious entertainment area in the Lehigh Valley, we have the skills and experience to deliver exceptional results.",
    features: [
      'Custom deck design and planning',
      'High-quality material selection (including pressure-treated lumber, cedar, and composite decking)',
      'Professional installation by licensed and insured contractors',
      'Compliance with PA and NJ building codes and standards',
      'Variety of railing options (wood, vinyl, aluminum, cable)',
      'Built-in seating and storage solutions',
      'Deck lighting installation for safety and ambiance',
      'Integration with existing landscaping',
    ],
    benefits: [
      "Increase your home's value and curb appeal",
      'Create additional outdoor living space for relaxation and entertainment',
      'Enjoy low-maintenance outdoor areas with proper material selection',
      'Customize your outdoor space to fit your lifestyle and preferences',
      'Extend your living area for three-season enjoyment in PA and NJ climates',
    ],
    image: '/images/deck31.webp',
    faqs: [
      {
        question:
          'How long does it take to build a deck in Pennsylvania or New Jersey?',
        answer:
          'The timeline for deck construction can vary depending on the size and complexity of the project. On average, a standard deck can take 1-2 weeks from start to finish. However, larger or more intricate designs may take 3-4 weeks or more. We always provide a detailed timeline during the planning phase.',
      },
      {
        question: 'Do I need a permit to build a deck in PA or NJ?',
        answer:
          'Yes, most municipalities in Pennsylvania and New Jersey require permits for deck construction. Our team is familiar with local regulations and will handle all necessary permitting processes for you, ensuring your project is fully compliant with local building codes.',
      },
      {
        question:
          'What types of decking materials work best for the PA and NJ climate?',
        answer:
          "Given the varying weather conditions in Pennsylvania and New Jersey, we recommend materials that can withstand both hot summers and cold winters. Composite decking is an excellent choice for its durability and low maintenance. Cedar and pressure-treated lumber are also popular options. We'll help you choose the best material based on your specific location and preferences.",
      },
      {
        question:
          'Can I add features like stairs, railings, and built-in seating to my deck?',
        answer:
          'Absolutely! We offer a wide range of custom features to enhance your deck, including stairs, railings, and built-in seating. Our team will work with you to design and build the perfect outdoor space tailored to your needs and preferences.',
      },
      {
        question: 'What is the cost of deck construction in PA or NJ?',
        answer:
          'The cost of deck construction can vary significantly based on factors such as size, material, and complexity. We provide detailed, itemized quotes during the planning phase, ensuring transparency and clarity throughout the process.',
      },
    ],
    locations: sharedLocations,
  },
  {
    id: 'deck-restoration',
    name: 'Deck Restoration & Repair',
    description:
      'Revitalize your aging deck with our expert restoration and repair services in Pennsylvania and New Jersey.',
    longDescription:
      "VM Power Deck specializes in breathing new life into old and weathered decks across Pennsylvania and New Jersey. Our comprehensive deck restoration and repair services address structural issues, replace damaged boards, and apply protective finishes to extend the life and beauty of your outdoor space. We understand the unique challenges posed by the Northeast's climate and tailor our solutions to ensure your deck remains safe, beautiful, and functional for years to come.",
    features: [
      'Comprehensive deck inspection and assessment',
      'Structural repairs and reinforcement',
      'Board replacement and refinishing',
      'Staining and sealing services with weather-resistant products',
      'Upgrade options for improved functionality and aesthetics',
      'Repair of stairs, railings, and built-in features',
      'Power washing and deep cleaning',
      'Environmentally friendly restoration techniques',
    ],
    benefits: [
      'Extend the life of your existing deck',
      'Improve safety and structural integrity',
      'Enhance the appearance of your outdoor space',
      "Increase your home's value with a well-maintained deck",
      'Save money compared to full deck replacement',
      'Adapt your deck to changing needs and preferences',
    ],
    image: '/images/deck17.webp',
    faqs: [
      {
        question: 'How often should I have my deck inspected in PA or NJ?',
        answer:
          'We recommend having your deck professionally inspected every 1-2 years, especially given the harsh winters and humid summers in Pennsylvania and New Jersey. Regular inspections can catch potential issues early, saving you money on more extensive repairs down the line.',
      },
      {
        question: 'Can you repair my deck if it has extensive water damage?',
        answer:
          "Yes, we can repair decks with water damage, which is common in our region due to heavy rains and snow. The extent of the repair depends on the severity of the damage. In some cases, we may need to replace affected boards or structural elements. We'll provide a thorough assessment and recommend the most cost-effective solution.",
      },
      {
        question: 'How long does deck restoration take in PA and NJ?',
        answer:
          'The duration of a deck restoration project can vary depending on the size of your deck and the extent of repairs needed. Typically, a standard restoration can take 2-5 days. However, more extensive projects may take up to 2 weeks. We always work efficiently to minimize disruption to your home life.',
      },
      {
        question: 'What is the cost of deck restoration in PA or NJ?',
        answer:
          'The cost of deck restoration can vary based on the size of your deck and the complexity of repairs. We provide detailed, itemized quotes during the planning phase, ensuring transparency and clarity throughout the process.',
      },
      {
        question: 'Do you offer warranties on your work?',
        answer:
          'Yes, we offer comprehensive warranties on both our workmanship and the materials we use. The specific terms vary by project and materials chosen.',
      },
      {
        question: 'Are you licensed and insured?',
        answer:
          'Absolutely. VM Power Deck is fully licensed and insured in both Pennsylvania and New Jersey for your peace of mind.',
      },
    ],

    locations: sharedLocations,
  },
  {
    id: 'deck-features',
    name: 'Deck Features & Custom Enhancements',
    description:
      'Elevate your deck with our custom features and enhancements in Pennsylvania and New Jersey.',
    longDescription:
      'Take your deck to the next level with our range of custom features and enhancements. From built-in seating to pergolas and outdoor kitchens, we can help you create the perfect outdoor entertaining space. We work with clients across Pennsylvania and New Jersey to design and build unique deck features that complement their homes and lifestyles.',
    features: [
      'Built-in seating and storage solutions',
      'Pergolas and shade structures',
      'Outdoor kitchen integration',
      'Custom lighting designs',
      'Privacy screens and wind barriers',
      'Decorative post caps and balusters',
      'Custom railing designs',
      'Specialty finishes and stains',
    ],
    benefits: [
      'Increased functionality and usability of your deck',
      'Enhanced aesthetic appeal and curb appeal',
      'Creation of a unique and personalized outdoor space',
      'Improved comfort and enjoyment of your outdoor living area',
      'Increased property value',
    ],
    image: '/images/deck43.webp',
    faqs: [
      {
        question: 'What are some popular deck features in PA and NJ?',
        answer:
          'Popular deck features in Pennsylvania and New Jersey include built-in seating, pergolas for shade, outdoor kitchens for entertaining, and custom lighting for ambiance. We can help you choose features that best suit your needs and budget.',
      },
      {
        question: 'Can you integrate existing features into my deck design?',
        answer:
          "Yes, we can seamlessly integrate existing features into your new deck design. We'll work with you to create a cohesive and functional outdoor space that complements your existing landscaping and home.",
      },
      {
        question: 'What is the cost of adding custom features to my deck?',
        answer:
          'The cost of adding custom features to your deck varies depending on the complexity and materials used. We provide detailed cost estimates during the design phase, ensuring transparency and clarity throughout the process.',
      },
      {
        question: 'Do you offer warranties on your work?',
        answer:
          'Yes, we offer comprehensive warranties on both our workmanship and the materials we use. The specific terms vary by project and materials chosen.',
      },
      {
        question: 'Are you licensed and insured?',
        answer:
          'Absolutely. VM Power Deck is fully licensed and insured in both Pennsylvania and New Jersey for your peace of mind.',
      },
    ],
    locations: sharedLocations,
  },
  {
    id: 'outdoor-living',
    name: 'Outdoor Living & Backyard Additions',
    description:
      'Create a luxurious outdoor retreat with our comprehensive outdoor living solutions in Pennsylvania and New Jersey.',
    longDescription:
      'Transform your entire backyard into a personal oasis with our outdoor living and backyard addition services. We design and build cohesive outdoor spaces that seamlessly blend with your home and lifestyle. Our expertise extends across Pennsylvania and New Jersey, allowing us to create outdoor retreats tailored to the unique characteristics of each region.',
    features: [
      'Comprehensive backyard design and planning',
      'Patio and deck combinations',
      'Outdoor fireplaces and fire pits',
      'Water features and ponds',
      'Landscaping and hardscaping integration',
      'Outdoor audio/visual system installation',
      'Pergola and gazebo construction',
      'Custom lighting and electrical work',
    ],
    benefits: [
      'Increased usable outdoor space',
      'Enhanced curb appeal and property value',
      'Creation of a relaxing and enjoyable outdoor retreat',
      'Improved functionality and entertainment options',
      'Increased home comfort and enjoyment',
    ],
    image: '/images/deck40.webp',
    faqs: [
      {
        question: 'What are some popular outdoor living features in PA and NJ?',
        answer:
          'Popular outdoor living features in Pennsylvania and New Jersey include patios, decks, fire pits, and water features. We can help you design a space that complements your home and lifestyle.',
      },
      {
        question: 'Do you handle all aspects of the outdoor living project?',
        answer:
          'Yes, we handle all aspects of your outdoor living project, from initial design and planning to final construction and landscaping. We work with trusted subcontractors to ensure a seamless and high-quality experience.',
      },
      {
        question: 'What is the typical timeline for an outdoor living project?',
        answer:
          "The timeline for an outdoor living project varies depending on the size and complexity of the project. We provide a detailed timeline during the planning phase, ensuring you're informed every step of the way.",
      },
      {
        question: 'Do you offer warranties on your work?',
        answer:
          'Yes, we offer comprehensive warranties on both our workmanship and the materials we use. The specific terms vary by project and materials chosen.',
      },
      {
        question: 'Are you licensed and insured?',
        answer:
          'Absolutely. VM Power Deck is fully licensed and insured in both Pennsylvania and New Jersey for your peace of mind.',
      },
    ],
    locations: sharedLocations,
  },
  {
    id: 'fence-installation',
    name: 'Fence Installation & Repair',
    description:
      "Enhance your property's security and curb appeal with our professional fence services in Pennsylvania and New Jersey.",
    longDescription:
      'Our fence installation and repair services provide both functionality and aesthetic appeal. We offer a wide range of fencing options to suit your needs, whether for privacy, security, or decoration. We serve clients throughout Pennsylvania and New Jersey, ensuring compliance with local regulations and building codes.',
    features: [
      'Various fencing material options (wood, vinyl, metal)',
      'Custom fence designs',
      'Gate installation and automation',
      'Fence repair and maintenance',
      'Property line assessment',
      'Compliance with local regulations',
      'Professional installation by experienced crews',
      'High-quality materials and workmanship',
    ],
    benefits: [
      'Enhanced property security and privacy',
      'Increased curb appeal and property value',
      'Improved safety for children and pets',
      'Protection from the elements',
      'Defined property boundaries',
      'Variety of styles and materials to choose from',
    ],
    image: '/images/deck32.webp',
    faqs: [
      {
        question: 'What types of fences do you install in PA and NJ?',
        answer:
          'We install a wide variety of fences, including wood, vinyl, and metal. We can help you choose the best type of fence for your needs and budget.',
      },
      {
        question: 'Do you handle all aspects of fence installation?',
        answer:
          "Yes, we handle all aspects of fence installation, from initial design and planning to final construction and cleanup. We'll work with you to ensure the fence meets your specific needs and complies with local regulations.",
      },
      {
        question: 'What is the typical timeline for fence installation?',
        answer:
          "The timeline for fence installation varies depending on the size and complexity of the project. We provide a detailed timeline during the planning phase, ensuring you're informed every step of the way.",
      },
      {
        question: 'Do you offer warranties on your work?',
        answer:
          'Yes, we offer comprehensive warranties on both our workmanship and the materials we use. The specific terms vary by project and materials chosen.',
      },
      {
        question: 'Are you licensed and insured?',
        answer:
          'Absolutely. VM Power Deck is fully licensed and insured in both Pennsylvania and New Jersey for your peace of mind.',
      },
    ],
    locations: sharedLocations,
  },
  {
    id: 'patio-installation',
    name: 'Patio Design & Installation',
    description:
      'Transform your backyard into a stylish, inviting space with our custom patio services in Pennsylvania and New Jersey.',
    longDescription:
      'Create the perfect outdoor living area with our custom patio design and installation services. We use high-quality materials and expert craftsmanship to build patios that are both beautiful and durable. We serve clients across Pennsylvania and New Jersey, offering a wide range of design options to suit various tastes and budgets.',
    features: [
      'Custom patio design',
      'Various material options (concrete, pavers, natural stone)',
      'Outdoor kitchen and bar areas',
      'Fire pit and fireplace integration',
      'Drainage solutions',
      'Seamless integration with existing landscape',
      'Professional installation and project management',
      'High-quality materials and workmanship',
    ],
    benefits: [
      'Increased outdoor living space',
      'Enhanced curb appeal and property value',
      'Creation of a relaxing and enjoyable outdoor area',
      'Improved functionality and entertainment options',
      'Durable and low-maintenance construction',
    ],
    image: '/images/deck42.webp',
    faqs: [
      {
        question: 'What types of patio materials do you use in PA and NJ?',
        answer:
          'We use a variety of patio materials, including concrete, pavers, and natural stone. We can help you choose the best material for your needs and budget.',
      },
      {
        question: 'Do you handle all aspects of patio installation?',
        answer:
          "Yes, we handle all aspects of patio installation, from initial design and planning to final construction and cleanup. We'll work with you to ensure the patio meets your specific needs and complies with local regulations.",
      },
      {
        question: 'What is the typical timeline for patio installation?',
        answer:
          "The timeline for patio installation varies depending on the size and complexity of the project. We provide a detailed timeline during the planning phase, ensuring you're informed every step of the way.",
      },
      {
        question: 'Do you offer warranties on your work?',
        answer:
          'Yes, we offer comprehensive warranties on both our workmanship and the materials we use. The specific terms vary by project and materials chosen.',
      },
      {
        question: 'Are you licensed and insured?',
        answer:
          'Absolutely. VM Power Deck is fully licensed and insured in both Pennsylvania and New Jersey for your peace of mind.',
      },
    ],
    locations: sharedLocations,
  },
  {
    id: 'deck-maintenance',
    name: 'Deck Maintenance & Cleaning',
    description:
      'Keep your deck pristine and safe with our comprehensive maintenance and cleaning services in Pennsylvania and New Jersey.',
    longDescription:
      "Regular maintenance is key to preserving the beauty and integrity of your deck. Our maintenance and cleaning services help protect your investment and keep your outdoor space looking its best year-round. We offer services throughout Pennsylvania and New Jersey, tailored to the specific needs of our region's climate.",
    features: [
      'Deep cleaning and power washing',
      'Stain and sealant application',
      'Minor repairs and board replacement',
      'Inspection for potential issues',
      'Seasonal maintenance packages',
      'Eco-friendly cleaning solutions',
      'Expert advice on deck care and maintenance',
      'Preventative maintenance to extend deck life',
    ],
    benefits: [
      'Extended deck lifespan',
      'Improved appearance and curb appeal',
      'Prevention of costly repairs',
      'Enhanced safety and structural integrity',
      'Peace of mind knowing your deck is well-maintained',
      'Protection against weather damage',
    ],
    image: '/images/deck14.webp',
    faqs: [
      {
        question: 'How often should I have my deck cleaned in PA or NJ?',
        answer:
          'We recommend having your deck cleaned at least once a year, ideally in the spring or fall. More frequent cleaning may be necessary depending on usage and weather conditions.',
      },
      {
        question: 'What types of cleaning solutions do you use?',
        answer:
          "We use eco-friendly cleaning solutions that are safe for your family, pets, and the environment. These solutions effectively remove dirt, grime, and mildew without harming your deck's finish.",
      },
      {
        question: 'What is included in your seasonal maintenance packages?',
        answer:
          'Our seasonal maintenance packages typically include a thorough cleaning, inspection for damage, minor repairs, and application of stain or sealant. We customize packages to meet your specific needs and budget.',
      },
      {
        question: 'Do you offer warranties on your work?',
        answer:
          'Yes, we offer comprehensive warranties on both our workmanship and the materials we use. The specific terms vary by project and materials chosen.',
      },
      {
        question: 'Are you licensed and insured?',
        answer:
          'Absolutely. VM Power Deck is fully licensed and insured in both Pennsylvania and New Jersey for your peace of mind.',
      },
    ],
    locations: sharedLocations,
  },
]
