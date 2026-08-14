export type Residence = {
  id: string;
  name: string;
  type: string;
  bedrooms: number;
  area: string; // e.g. "98-118 m²"
  terrace: string;
  description: string;
  features: string[];
  heroImage: string;
  gallery: string[];
  floorPlan: string;
};

export const residencesData: Residence[] = [
  {
    id: "garden-residence",
    name: "Garden Residence",
    type: "Ground Floor",
    bedrooms: 2,
    area: "98–118 m²",
    terrace: "Private garden",
    description: "Designed for seamless indoor-outdoor living, the Garden Residences offer expansive private green spaces directly accessible from the main living areas, perfect for enjoying the Mediterranean climate.",
    features: [
      "Private garden",
      "Underground parking",
      "Storage",
      "Underfloor heating",
      "Smart-home preparation",
      "Energy-efficient windows",
      "Aerothermal climate system"
    ],
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
    ],
    floorPlan: "/images/floorplan-placeholder.jpg"
  },
  {
    id: "terrace-residence",
    name: "Terrace Residence",
    type: "Mid Floor",
    bedrooms: 3,
    area: "126–164 m²",
    terrace: "Large terrace",
    description: "Elevated above the gardens, these residences feature generous sheltered terraces that serve as an extension of the living room, offering shade in summer and warmth in winter.",
    features: [
      "Large covered terrace",
      "Underground parking",
      "Storage",
      "Underfloor heating",
      "Smart-home preparation",
      "Energy-efficient windows",
      "Aerothermal climate system"
    ],
    heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
    ],
    floorPlan: "/images/floorplan-placeholder.jpg"
  },
  {
    id: "sky-residence",
    name: "Sky Residence",
    type: "High Floor",
    bedrooms: 3,
    area: "158–202 m²",
    terrace: "Panoramic terrace",
    description: "Positioned to maximize natural light and views, the Sky Residences offer sweeping vistas of the surrounding landscape and coastline from their expansive panoramic terraces.",
    features: [
      "Panoramic terrace",
      "Underground parking (2 spaces)",
      "Storage",
      "Underfloor heating",
      "Smart-home preparation",
      "Energy-efficient windows",
      "Aerothermal climate system"
    ],
    heroImage: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=2070&auto=format&fit=crop"
    ],
    floorPlan: "/images/floorplan-placeholder.jpg"
  },
  {
    id: "penthouse",
    name: "Penthouse",
    type: "Top Floor",
    bedrooms: 4,
    area: "210–246 m²",
    terrace: "Private rooftop",
    description: "The crown jewels of Alora Residences. The Penthouses offer unparalleled privacy, exceptional ceiling heights, and magnificent private rooftop terraces with space for a plunge pool and outdoor kitchen.",
    features: [
      "Private rooftop terrace",
      "Plunge pool preparation",
      "Underground parking (2 spaces)",
      "Storage",
      "Underfloor heating",
      "Smart-home preparation",
      "Energy-efficient windows",
      "Aerothermal climate system"
    ],
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1974&auto=format&fit=crop"
    ],
    floorPlan: "/images/floorplan-placeholder.jpg"
  }
];

export const amenitiesData = [
  {
    id: "pool",
    title: "Saltwater Pool",
    description: "An open-air pool surrounded by Mediterranean landscaping.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "wellness",
    title: "Wellness",
    description: "Private sauna, treatment room and relaxation area.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "gym",
    title: "Gym",
    description: "A calm, naturally lit fitness studio for residents.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: "landscaping",
    title: "Landscaping",
    description: "Native planting creates privacy and strengthens the connection with nature.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "parking",
    title: "Parking",
    description: "Secure underground parking with EV charging preparation.",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2070&auto=format&fit=crop"
  }
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop"
];
