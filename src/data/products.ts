export interface Product {
  id: number;
  name: string;
  category: 'bags' | 'sling-bags' | 'backpacks' | 'handbags' | 'travel' | 'laptop-bags' | 'clutches';
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
    color: string;
    warranty: string;
  };
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  // Men's Bags
  {
    id: 1,
    name: "Executive Leather Briefcase",
    category: "bags",
    gender: "men",
    brand: "LuxeLeather",
    price: 249.99,
    originalPrice: 329.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600",
    description: "Premium leather briefcase designed for the modern professional. Features multiple compartments and a padded laptop sleeve.",
    specifications: {
      material: "Full-Grain Italian Leather",
      dimensions: "16\" x 12\" x 4\"",
      weight: "2.1 lbs",
      compartments: "3 main, laptop sleeve, 4 pockets",
      color: "Dark Brown",
      warranty: "5 Years"
    },
    rating: 4.9,
    reviews: 156,
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Urban Explorer Backpack",
    category: "backpacks",
    gender: "men",
    brand: "TrekMaster",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    description: "Durable canvas backpack with laptop compartment. Perfect for work or weekend adventures.",
    specifications: {
      material: "Waxed Canvas & Leather Trim",
      dimensions: "18\" x 12\" x 6\"",
      weight: "1.8 lbs",
      compartments: "2 main, laptop sleeve, 4 pockets",
      color: "Olive Green",
      warranty: "3 Years"
    },
    rating: 4.6,
    reviews: 89,
    inStock: true
  },
  {
    id: 3,
    name: "Professional Messenger Bag",
    category: "sling-bags",
    gender: "men",
    brand: "BizClass",
    price: 159.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600",
    description: "Professional messenger bag crafted from premium leather. Ideal for business professionals.",
    specifications: {
      material: "Full-Grain Leather",
      dimensions: "15\" x 11\" x 4\"",
      weight: "1.5 lbs",
      compartments: "2 main, tablet sleeve, organizer",
      color: "Cognac Brown",
      warranty: "5 Years"
    },
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: "Tech Pro Laptop Bag",
    category: "laptop-bags",
    gender: "men",
    brand: "TechStyle",
    price: 139.99,
    image: "https://images.unsplash.com/photo-1585916420730-d7f95e942d43?w=600",
    description: "Sleek laptop bag with modern design. Fits up to 15.6\" laptops with protective padding.",
    specifications: {
      material: "Premium PU Leather & Nylon",
      dimensions: "16\" x 11\" x 3\"",
      weight: "1.3 lbs",
      compartments: "Laptop sleeve, document pocket, organizer",
      color: "Black",
      warranty: "2 Years"
    },
    rating: 4.5,
    reviews: 98,
    inStock: true
  },
  {
    id: 5,
    name: "Adventure Hiking Backpack",
    category: "backpacks",
    gender: "men",
    brand: "ActiveGear",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=600",
    description: "High-capacity hiking backpack with hydration system compatibility and ergonomic design.",
    specifications: {
      material: "Ripstop Nylon",
      dimensions: "24\" x 14\" x 10\"",
      weight: "2.4 lbs",
      compartments: "Main, hydration sleeve, 6 pockets",
      color: "Navy Blue",
      warranty: "Lifetime"
    },
    rating: 4.7,
    reviews: 203,
    inStock: true
  },
  {
    id: 6,
    name: "Traveler's Weekender",
    category: "travel",
    gender: "men",
    brand: "Voyager",
    price: 219.99,
    originalPrice: 279.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    description: "Spacious weekender bag perfect for short trips. Features shoe compartment and multiple pockets.",
    specifications: {
      material: "Canvas & Leather Trim",
      dimensions: "22\" x 12\" x 10\"",
      weight: "2.8 lbs",
      compartments: "Main, shoe bag, 4 pockets",
      color: "Khaki",
      warranty: "3 Years"
    },
    rating: 4.8,
    reviews: 145,
    inStock: true
  },

  // Women's Bags
  {
    id: 7,
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
      compartments: "3 main, 2 interior pockets",
      color: "Red",
      warranty: "5 Years"
    },
    rating: 4.8,
    reviews: 234,
    inStock: true,
    featured: true
  },
  {
    id: 8,
    name: "Elegant Crossbody Bag",
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
      compartments: "1 main, card slots",
      color: "Blush Pink",
      warranty: "2 Years"
    },
    rating: 4.7,
    reviews: 178,
    inStock: true,
    featured: true
  },
  {
    id: 9,
    name: "Vintage Leather Satchel",
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
      compartments: "1 main, 3 interior pockets",
      color: "Tan",
      warranty: "5 Years"
    },
    rating: 4.9,
    reviews: 167,
    inStock: true
  },
  {
    id: 10,
    name: "Designer Clutch Purse",
    category: "clutches",
    gender: "women",
    brand: "ChicMode",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600",
    description: "Elegant designer clutch perfect for formal events. Features detachable chain strap.",
    specifications: {
      material: "Satin & Crystal Embellishments",
      dimensions: "10\" x 5\" x 2\"",
      weight: "0.4 lbs",
      compartments: "1 main, lipstick pocket",
      color: "Gold",
      warranty: "1 Year"
    },
    rating: 4.6,
    reviews: 89,
    inStock: true
  },
  {
    id: 11,
    name: "Boho Fringe Handbag",
    category: "handbags",
    gender: "women",
    brand: "HeritageStyle",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600",
    description: "Bohemian-style handbag with fringe details. Perfect for casual and festival wear.",
    specifications: {
      material: "Suede Leather",
      dimensions: "11\" x 10\" x 4\"",
      weight: "0.9 lbs",
      compartments: "1 main, zip pocket",
      color: "Camel",
      warranty: "2 Years"
    },
    rating: 4.5,
    reviews: 112,
    inStock: true
  },
  {
    id: 12,
    name: "Mini Backpack Purse",
    category: "backpacks",
    gender: "women",
    brand: "ChicMode",
    price: 69.99,
    originalPrice: 89.99,
    image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=600",
    description: "Cute mini backpack perfect for hands-free convenience. Stylish yet practical.",
    specifications: {
      material: "Faux Leather",
      dimensions: "10\" x 8\" x 4\"",
      weight: "0.6 lbs",
      compartments: "1 main, front pocket",
      color: "Black",
      warranty: "1 Year"
    },
    rating: 4.4,
    reviews: 156,
    inStock: true
  },

  // Unisex Bags
  {
    id: 13,
    name: "Premium Duffle Bag",
    category: "travel",
    gender: "unisex",
    brand: "Voyager",
    price: 279.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    description: "Premium travel duffle with wheels. Ideal for frequent travelers who demand quality.",
    specifications: {
      material: "Ballistic Nylon & Leather",
      dimensions: "24\" x 13\" x 12\"",
      weight: "4.5 lbs",
      compartments: "Main, 2 end pockets, shoe bag",
      color: "Charcoal",
      warranty: "Lifetime"
    },
    rating: 4.9,
    reviews: 198,
    inStock: true,
    featured: true
  },
  {
    id: 14,
    name: "Casual Canvas Tote",
    category: "bags",
    gender: "unisex",
    brand: "TrekMaster",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600",
    description: "Simple and durable canvas tote for everyday use. Eco-friendly and machine washable.",
    specifications: {
      material: "Organic Cotton Canvas",
      dimensions: "15\" x 16\" x 5\"",
      weight: "0.5 lbs",
      compartments: "1 main, interior pocket",
      color: "Natural",
      warranty: "1 Year"
    },
    rating: 4.3,
    reviews: 287,
    inStock: true
  },
  {
    id: 15,
    name: "Laptop Sleeve Bag",
    category: "laptop-bags",
    gender: "unisex",
    brand: "TechStyle",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1585916420730-d7f95e942d43?w=600",
    description: "Slim laptop sleeve with extra padding. Perfect for protecting your device on the go.",
    specifications: {
      material: "Neoprene & Microfiber",
      dimensions: "14\" x 10\" x 1\"",
      weight: "0.3 lbs",
      compartments: "1 main, accessory pocket",
      color: "Gray",
      warranty: "2 Years"
    },
    rating: 4.5,
    reviews: 312,
    inStock: true
  },
  {
    id: 16,
    name: "Gym Duffel Bag",
    category: "travel",
    gender: "unisex",
    brand: "ActiveGear",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    description: "Spacious gym bag with wet/dry compartments. Perfect for fitness enthusiasts.",
    specifications: {
      material: "Water-Resistant Polyester",
      dimensions: "20\" x 10\" x 10\"",
      weight: "1.2 lbs",
      compartments: "Main, wet pocket, shoe compartment",
      color: "Black/Red",
      warranty: "2 Years"
    },
    rating: 4.6,
    reviews: 243,
    inStock: true
  }
];

export const brands = [
  { 
    id: "luxeleather",
    name: "LuxeLeather", 
    logo: "LL", 
    description: "Premium leather goods since 1985. Crafting luxury bags with Italian craftsmanship.",
    products: 45,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400"
  },
  { 
    id: "trekmaster",
    name: "TrekMaster", 
    logo: "TM", 
    description: "Adventure-ready gear for explorers. Durable and functional outdoor bags.",
    products: 32,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400"
  },
  { 
    id: "bizclass",
    name: "BizClass", 
    logo: "BC", 
    description: "Professional excellence for business travelers. Sophisticated work bags.",
    products: 28,
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400"
  },
  { 
    id: "heritagestyle",
    name: "HeritageStyle", 
    logo: "HS", 
    description: "Timeless craftsmanship with vintage aesthetics. Classic designs that never fade.",
    products: 38,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400"
  },
  { 
    id: "activegear",
    name: "ActiveGear", 
    logo: "AG", 
    description: "Built for performance and active lifestyles. Sports and outdoor bags.",
    products: 52,
    image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=400"
  },
  { 
    id: "chicmode",
    name: "ChicMode", 
    logo: "CM", 
    description: "Fashion forward designs for the modern woman. Trendy and stylish bags.",
    products: 64,
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400"
  },
  { 
    id: "voyager",
    name: "Voyager", 
    logo: "VY", 
    description: "Travel in style with premium luggage and travel bags. For the frequent traveler.",
    products: 41,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400"
  },
  { 
    id: "techstyle",
    name: "TechStyle", 
    logo: "TS", 
    description: "Modern functionality meets sleek design. Tech-friendly bags and accessories.",
    products: 29,
    image: "https://images.unsplash.com/photo-1585916420730-d7f95e942d43?w=400"
  }
];

export const categories = [
  { id: 'bags', name: 'Bags', icon: '👜', description: 'Classic handbags and totes for everyday use' },
  { id: 'sling-bags', name: 'Sling Bags', icon: '👝', description: 'Crossbody and messenger bags for hands-free convenience' },
  { id: 'backpacks', name: 'Backpacks', icon: '🎒', description: 'Comfortable backpacks for work, travel, and adventure' },
  { id: 'handbags', name: 'Handbags', icon: '👛', description: 'Designer handbags for fashion-forward individuals' },
  { id: 'travel', name: 'Travel Bags', icon: '🧳', description: 'Luggage and duffels for your journeys' },
  { id: 'laptop-bags', name: 'Laptop Bags', icon: '💼', description: 'Protective bags for your tech devices' },
  { id: 'clutches', name: 'Clutches', icon: '✨', description: 'Elegant clutches for special occasions' }
];

export const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800', alt: 'Red Leather Tote', category: 'handbags' },
  { id: 2, src: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800', alt: 'Canvas Backpack', category: 'backpacks' },
  { id: 3, src: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800', alt: 'Leather Messenger', category: 'sling-bags' },
  { id: 4, src: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800', alt: 'Vintage Satchel', category: 'handbags' },
  { id: 5, src: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800', alt: 'Pink Crossbody', category: 'sling-bags' },
  { id: 6, src: 'https://images.unsplash.com/photo-1622260614153-03223fb72052?w=800', alt: 'Hiking Backpack', category: 'backpacks' },
  { id: 7, src: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800', alt: 'Gold Clutch', category: 'clutches' },
  { id: 8, src: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800', alt: 'Boho Handbag', category: 'handbags' },
  { id: 9, src: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800', alt: 'Brown Messenger', category: 'sling-bags' },
  { id: 10, src: 'https://images.unsplash.com/photo-1585916420730-d7f95e942d43?w=800', alt: 'Laptop Bag', category: 'laptop-bags' },
  { id: 11, src: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=800', alt: 'Mini Backpack', category: 'backpacks' },
  { id: 12, src: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800', alt: 'Canvas Tote', category: 'bags' },
];

export const storeLocations = [
  {
    id: 1,
    name: "BagBag Flagship Store",
    address: "123 Fashion Avenue, Manhattan",
    city: "New York, NY 10001",
    phone: "+1 (555) 123-4567",
    hours: "Mon-Sat: 10AM-9PM, Sun: 11AM-7PM",
    coordinates: { lat: 40.7128, lng: -74.0060 }
  },
  {
    id: 2,
    name: "BagBag Beverly Hills",
    address: "456 Rodeo Drive",
    city: "Beverly Hills, CA 90210",
    phone: "+1 (555) 234-5678",
    hours: "Mon-Sat: 10AM-8PM, Sun: 12PM-6PM",
    coordinates: { lat: 34.0736, lng: -118.4004 }
  },
  {
    id: 3,
    name: "BagBag Chicago",
    address: "789 Michigan Avenue",
    city: "Chicago, IL 60611",
    phone: "+1 (555) 345-6789",
    hours: "Mon-Sat: 10AM-8PM, Sun: 11AM-6PM",
    coordinates: { lat: 41.8781, lng: -87.6298 }
  },
  {
    id: 4,
    name: "BagBag Miami",
    address: "321 Ocean Drive",
    city: "Miami Beach, FL 33139",
    phone: "+1 (555) 456-7890",
    hours: "Mon-Sun: 10AM-10PM",
    coordinates: { lat: 25.7617, lng: -80.1918 }
  }
];
