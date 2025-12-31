export interface Product {
  id: number;
  name: string;
  category: 'bags' | 'sling-bags' | 'backpacks' | 'handbags' | 'travel';
  gender: 'men' | 'women' | 'unisex';
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  specifications: {
    material: string;
    dimensions: string;
    weight: string;
    compartments: string;
  };
  rating: number;
  reviews: number;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Leather Tote",
    category: "bags",
    gender: "women",
    brand: "LuxeLeather",
    price: 189.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
    description: "Elegant leather tote bag perfect for everyday use. Features premium Italian leather with gold-tone hardware.",
    specifications: {
      material: "Genuine Italian Leather",
      dimensions: "14\" x 12\" x 5\"",
      weight: "1.2 lbs",
      compartments: "3 main, 2 interior pockets"
    },
    rating: 4.8,
    reviews: 124,
    inStock: true
  },
  {
    id: 2,
    name: "Urban Explorer Backpack",
    category: "backpacks",
    gender: "unisex",
    brand: "TrekMaster",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    description: "Durable canvas backpack with laptop compartment. Perfect for work or weekend adventures.",
    specifications: {
      material: "Waxed Canvas & Leather Trim",
      dimensions: "18\" x 12\" x 6\"",
      weight: "1.8 lbs",
      compartments: "2 main, laptop sleeve, 4 pockets"
    },
    rating: 4.6,
    reviews: 89,
    inStock: true
  },
  {
    id: 3,
    name: "Executive Messenger",
    category: "sling-bags",
    gender: "men",
    brand: "BizClass",
    price: 159.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600",
    description: "Professional messenger bag crafted from premium leather. Ideal for business professionals.",
    specifications: {
      material: "Full-Grain Leather",
      dimensions: "15\" x 11\" x 4\"",
      weight: "1.5 lbs",
      compartments: "2 main, tablet sleeve, organizer"
    },
    rating: 4.9,
    reviews: 156,
    inStock: true
  },
  {
    id: 4,
    name: "Vintage Satchel",
    category: "handbags",
    gender: "women",
    brand: "HeritageStyle",
    price: 219.99,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600",
    description: "Handcrafted vintage-style satchel with brass buckles. A timeless piece for the modern woman.",
    specifications: {
      material: "Aged Leather",
      dimensions: "12\" x 9\" x 4\"",
      weight: "1.1 lbs",
      compartments: "1 main, 3 interior pockets"
    },
    rating: 4.7,
    reviews: 67,
    inStock: true
  },
  {
    id: 5,
    name: "Sport Pro Backpack",
    category: "backpacks",
    gender: "men",
    brand: "ActiveGear",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=600",
    description: "Lightweight sports backpack with ventilated back panel. Perfect for gym and outdoor activities.",
    specifications: {
      material: "Ripstop Nylon",
      dimensions: "20\" x 13\" x 8\"",
      weight: "0.9 lbs",
      compartments: "2 main, shoe compartment, hydration sleeve"
    },
    rating: 4.5,
    reviews: 203,
    inStock: true
  },
  {
    id: 6,
    name: "Elegant Crossbody",
    category: "sling-bags",
    gender: "women",
    brand: "ChicMode",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=600",
    description: "Stylish crossbody bag with chain strap. Perfect for evening events and casual outings.",
    specifications: {
      material: "Quilted Leather",
      dimensions: "8\" x 6\" x 3\"",
      weight: "0.5 lbs",
      compartments: "1 main, card slots"
    },
    rating: 4.8,
    reviews: 178,
    inStock: true
  },
  {
    id: 7,
    name: "Traveler's Duffle",
    category: "travel",
    gender: "unisex",
    brand: "Voyager",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    description: "Spacious travel duffle with wheels. Premium construction for frequent travelers.",
    specifications: {
      material: "Ballistic Nylon & Leather",
      dimensions: "22\" x 12\" x 11\"",
      weight: "4.2 lbs",
      compartments: "1 main, 2 end pockets, shoe bag"
    },
    rating: 4.9,
    reviews: 92,
    inStock: true
  },
  {
    id: 8,
    name: "Minimalist Laptop Bag",
    category: "bags",
    gender: "men",
    brand: "TechStyle",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    description: "Sleek laptop bag with modern design. Fits up to 15\" laptops with protective padding.",
    specifications: {
      material: "Premium PU Leather",
      dimensions: "16\" x 11\" x 3\"",
      weight: "1.3 lbs",
      compartments: "Laptop sleeve, document pocket, organizer"
    },
    rating: 4.6,
    reviews: 145,
    inStock: true
  }
];

export const brands = [
  { name: "LuxeLeather", logo: "LL", description: "Premium leather goods since 1985" },
  { name: "TrekMaster", logo: "TM", description: "Adventure-ready gear" },
  { name: "BizClass", logo: "BC", description: "Professional excellence" },
  { name: "HeritageStyle", logo: "HS", description: "Timeless craftsmanship" },
  { name: "ActiveGear", logo: "AG", description: "Built for performance" },
  { name: "ChicMode", logo: "CM", description: "Fashion forward designs" },
  { name: "Voyager", logo: "VY", description: "Travel in style" },
  { name: "TechStyle", logo: "TS", description: "Modern functionality" }
];

export const categories = [
  { id: 'bags', name: 'Bags', icon: '👜' },
  { id: 'sling-bags', name: 'Sling Bags', icon: '👝' },
  { id: 'backpacks', name: 'Backpacks', icon: '🎒' },
  { id: 'handbags', name: 'Handbags', icon: '👛' },
  { id: 'travel', name: 'Travel Bags', icon: '🧳' }
];
