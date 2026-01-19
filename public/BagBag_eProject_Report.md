# eProject Report
## BagBag - Online Bag Store Website

---

**Prepared by:** Aliraza Mahmood

**Project Title:** BagBag - Online Bag Store Website

**Date:** January 2026

**Technology Stack:** React, TypeScript, Tailwind CSS, Vite

---

## Table of Contents

1. Acknowledgements
2. eProject Synopsis
3. eProject Analysis
4. eProject Design
   - Data Flow Diagrams (DFDs)
   - FlowCharts
   - Process Diagrams
   - Database Design / Structure
5. Screenshots
6. Source Code with Comments
7. User Guide
8. Developer's Guide - Module Descriptions

---

## 1. Acknowledgements

I would like to express my sincere gratitude to all those who supported me throughout the development of this project.

First and foremost, I extend my heartfelt thanks to my instructors and mentors for their invaluable guidance, continuous support, and encouragement throughout the development process.

I am also grateful to the Lovable platform for providing an excellent development environment that made building this React-based web application seamless and efficient.

Special thanks to my peers and colleagues who provided feedback and suggestions that helped improve the overall quality of this project.

Finally, I would like to acknowledge the open-source community for providing the excellent tools and libraries (React, TypeScript, Tailwind CSS, shadcn/ui) that made this project possible.

**Aliraza Mahmood**
*January 2026*

---

## 2. eProject Synopsis

### Project Overview

**BagBag** is a modern, responsive e-commerce website designed for an online bag store. The website showcases a comprehensive collection of bags including handbags, backpacks, sling bags, travel bags, laptop bags, and clutches for both men and women.

### Objectives

1. Create an intuitive and visually appealing online platform for browsing bags
2. Provide easy navigation through various product categories
3. Separate sections for Men's and Women's collections
4. Display detailed product specifications and pricing
5. Showcase brand partnerships
6. Include a gallery for visual product exploration
7. Collect customer feedback
8. Provide complete contact and location information
9. Enable catalog download functionality
10. Highlight store facilities and services

### Target Audience

- Fashion-conscious individuals looking for quality bags
- Men and women of all age groups
- Business professionals seeking work bags
- Travelers needing luggage and travel accessories
- Students looking for backpacks and laptop bags

### Key Features

| Feature | Description |
|---------|-------------|
| Multi-page Architecture | Separate pages for each major section |
| Responsive Design | Works on desktop, tablet, and mobile devices |
| Product Categorization | Products organized by type and gender |
| Brand Showcase | Dedicated brand listing with descriptions |
| Interactive Gallery | Lightbox-enabled image gallery |
| Feedback System | Customer feedback form with ratings |
| Download Functionality | Product catalog PDF/DOC download |
| Store Locator | Multiple store location details |

---

## 3. eProject Analysis

### Requirements Analysis

Based on the given requirements, the following analysis was conducted:

#### Functional Requirements

| Req # | Requirement | Implementation |
|-------|-------------|----------------|
| 1 | Home Page with logo, header, and bag images | Hero section with product imagery |
| 2 | Links to navigate through various bag types | Navigation menu with dropdown |
| 3 | Separate Men and Women sections | Dedicated collection pages |
| 4 | Categorized bag links | Category navigation system |
| 5 | Specification and pricing with images | Product cards with details |
| 6 | Brand section | Dedicated Brands page |
| 7 | Gallery section | Interactive gallery with lightbox |
| 8 | Feedback form | Contact page feedback section |
| 9 | Sitemap, Gallery, About, Contact links | All pages implemented |
| 10 | Download as PDF/DOC | Catalog download functionality |
| 11 | Facilities/Advertisement section | Facilities section on home page |

#### Non-Functional Requirements

- **Performance**: Fast page loading with optimized images
- **Usability**: Intuitive navigation and user-friendly interface
- **Accessibility**: Semantic HTML and proper labeling
- **Responsiveness**: Mobile-first design approach
- **Maintainability**: Component-based architecture

### Technology Stack Analysis

| Technology | Purpose |
|------------|---------|
| React 18.3 | Frontend framework for building UI |
| TypeScript | Type-safe JavaScript for reliability |
| Tailwind CSS | Utility-first CSS framework |
| Vite | Build tool and development server |
| React Router DOM | Client-side routing |
| Lucide React | Icon library |
| shadcn/ui | UI component library |

---

## 4. eProject Design

### 4.1 Data Flow Diagrams (DFDs)

#### Level 0 DFD - Context Diagram

```
+-------------+                    +------------------+
|             |                    |                  |
|    User     | ---- Requests ---> |    BagBag        |
|  (Customer) | <-- Products/Info- |    Website       |
|             |                    |                  |
+-------------+                    +------------------+
                                           |
                                           v
                                   +------------------+
                                   |   Product Data   |
                                   |   (products.ts)  |
                                   +------------------+
```

#### Level 1 DFD - Main Processes

```
                           +----------------+
                           |    User        |
                           +-------+--------+
                                   |
         +------------------------++-----------------------+
         |                         |                       |
         v                         v                       v
+------------------+    +------------------+    +------------------+
| Browse Products  |    | View Categories  |    | Submit Feedback  |
| (Index, Men,     |    | (CategoryPage)   |    | (ContactPage)    |
|  Women Pages)    |    |                  |    |                  |
+--------+---------+    +--------+---------+    +--------+---------+
         |                       |                       |
         v                       v                       v
+------------------+    +------------------+    +------------------+
| Product Data     |    | Category Filter  |    | Feedback Form    |
| Store            |    | Logic            |    | Processing       |
+------------------+    +------------------+    +------------------+
```

### 4.2 FlowCharts

#### Main Navigation Flow

```
                    +-------------------+
                    |      START        |
                    +--------+----------+
                             |
                             v
                    +-------------------+
                    |   Load Home Page  |
                    +--------+----------+
                             |
                             v
                    +-------------------+
                    | Display Header &  |
                    | Navigation Menu   |
                    +--------+----------+
                             |
          +------------------+------------------+
          |          |           |              |
          v          v           v              v
    +---------+ +----------+ +---------+ +----------+
    |  Men's  | | Women's  | |Category | |  Other   |
    |Collection| |Collection| | Pages  | |  Pages   |
    +---------+ +----------+ +---------+ +----------+
          |          |           |              |
          +------------------+------------------+
                             |
                             v
                    +-------------------+
                    | Display Products  |
                    | with Details      |
                    +--------+----------+
                             |
                             v
                    +-------------------+
                    |   User Actions    |
                    | (View, Download)  |
                    +--------+----------+
                             |
                             v
                    +-------------------+
                    |       END         |
                    +-------------------+
```

#### Product Viewing Flow

```
                    +-------------------+
                    |      START        |
                    +--------+----------+
                             |
                             v
                    +-------------------+
                    | User Views Product|
                    |      Card         |
                    +--------+----------+
                             |
                             v
                    +-------------------+
                    | Click Eye Icon?   |
                    +--------+----------+
                     Yes |       | No
                         v       v
           +----------------+  +----------------+
           | Open Product   |  | Continue       |
           | Modal          |  | Browsing       |
           +-------+--------+  +----------------+
                   |
                   v
           +----------------+
           | View Full      |
           | Specifications |
           +-------+--------+
                   |
                   v
           +----------------+
           | Download Specs?|
           +-------+--------+
            Yes |       | No
                v       v
      +--------------+  +-------------+
      | Generate TXT |  | Close Modal |
      | File         |  |             |
      +--------------+  +-------------+
                   |
                   v
           +----------------+
           |      END       |
           +----------------+
```

### 4.3 Process Diagrams

#### User Journey Process

```
+------------+     +------------+     +------------+     +------------+
|   Visit    | --> | Browse     | --> |   View     | --> |  Download  |
|  Website   |     | Categories |     |  Products  |     |  Catalog   |
+------------+     +------------+     +------------+     +------------+
                                            |
                                            v
                                     +------------+
                                     |  Submit    |
                                     |  Feedback  |
                                     +------------+
```

#### Component Interaction Process

```
+-------------------+
|     App.tsx       |
| (Route Provider)  |
+---------+---------+
          |
          v
+-------------------+
|   Layout.tsx      |
| (Header + Footer) |
+---------+---------+
          |
    +-----+-----+
    |           |
    v           v
+-------+   +-------+
|Header |   |Footer |
+-------+   +-------+
    |
    v
+-------------------+
|   Page Component  |
| (Index, Men, etc.)|
+---------+---------+
          |
          v
+-------------------+
|  ProductCard.tsx  |
| (Product Display) |
+---------+---------+
          |
          v
+-------------------+
| ProductModal.tsx  |
| (Product Details) |
+-------------------+
```

### 4.4 Database Design / Structure

Since this is a frontend-only application, data is stored in TypeScript files. Below is the data structure:

#### Product Data Structure

```typescript
interface Product {
  id: number;                    // Unique identifier
  name: string;                  // Product name
  category: CategoryType;        // Category (bags, backpacks, etc.)
  gender: 'men' | 'women' | 'unisex';  // Target gender
  brand: string;                 // Brand name
  price: number;                 // Current price
  originalPrice?: number;        // Original price (for discounts)
  image: string;                 // Image URL
  description: string;           // Product description
  specifications: {
    material: string;            // Material used
    dimensions: string;          // Size dimensions
    weight: string;              // Product weight
    compartments: string;        // Number of compartments
    color: string;               // Available color
    warranty: string;            // Warranty period
  };
  rating: number;                // Customer rating (1-5)
  reviews: number;               // Number of reviews
  inStock: boolean;              // Availability status
  featured?: boolean;            // Featured product flag
}
```

#### Brand Data Structure

```typescript
interface Brand {
  id: string;           // Unique identifier
  name: string;         // Brand name
  logo: string;         // Logo abbreviation
  description: string;  // Brand description
  products: number;     // Number of products
  image: string;        // Brand image URL
}
```

#### Category Data Structure

```typescript
interface Category {
  id: string;           // Category identifier
  name: string;         // Display name
  icon: string;         // Emoji icon
  description: string;  // Category description
}
```

#### Store Location Structure

```typescript
interface StoreLocation {
  id: number;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}
```

#### ER Diagram (Conceptual)

```
+-------------+       +-------------+       +-------------+
|   PRODUCT   |       |   BRAND     |       |  CATEGORY   |
+-------------+       +-------------+       +-------------+
| id (PK)     |       | id (PK)     |       | id (PK)     |
| name        |       | name        |       | name        |
| category(FK)|------>| logo        |       | icon        |
| gender      |       | description |       | description |
| brand (FK)  |------>| products    |       +-------------+
| price       |       | image       |
| image       |       +-------------+
| description |
| specs       |
| rating      |
| reviews     |
+-------------+
       |
       | 1:N
       v
+-------------+
|   GALLERY   |
+-------------+
| id (PK)     |
| src         |
| alt         |
| category(FK)|
+-------------+
```

---

## 5. Screenshots

### 5.1 Home Page
*The home page features a hero section with a featured bag image, navigation menu, and call-to-action buttons.*

**Key Elements:**
- Logo (BagBag)
- Navigation menu with dropdown for categories
- Hero section with "New Collection 2024" badge
- Statistics (500+ Products, 50K+ Customers, 8+ Brands)
- Customer rating card
- Facilities section

### 5.2 Categories Section
*Grid layout displaying all bag categories with icons.*

**Categories Displayed:**
- Bags 👜
- Sling Bags 👝
- Backpacks 🎒
- Handbags 👛
- Travel Bags 🧳
- Laptop Bags 💼
- Clutches ✨

### 5.3 Product Cards
*Each product card displays:*
- Product image with hover effects
- Discount badge (if applicable)
- Brand name
- Rating and reviews
- Product name
- Brief description
- Material and dimensions
- Price (with original price if discounted)
- Add to Cart button

### 5.4 Men's Collection Page
*Dedicated page showing all men's products with:*
- Filter options (All, Bags, Backpacks, etc.)
- Sort options (Featured, Price, Rating)
- Product grid with cards

### 5.5 Women's Collection Page
*Similar layout to Men's collection with women's products.*

### 5.6 Gallery Page
*Interactive gallery with:*
- Category filter buttons
- Lightbox view for full-size images
- Navigation arrows
- Image alt descriptions

### 5.7 Contact Page
*Contact page featuring:*
- Contact information (phone, email, address)
- Contact form
- Feedback form with star rating
- Query submission section
- Download catalog button

### 5.8 Sitemap Page
*Complete site structure overview with links to all pages.*

---

## 6. Source Code with Comments

### 6.1 Main Application Entry (App.tsx)

```tsx
/**
 * App.tsx - Main Application Component
 * 
 * This component sets up the React Router configuration for the BagBag website.
 * It defines all the routes and maps them to their respective page components.
 * 
 * Author: Aliraza Mahmood
 */

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Page imports
import Index from "./pages/Index";
import MenCollection from "./pages/MenCollection";
import WomenCollection from "./pages/WomenCollection";
import CategoryPage from "./pages/CategoryPage";
import BrandsPage from "./pages/BrandsPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SitemapPage from "./pages/SitemapPage";
import NotFound from "./pages/NotFound";

// Create Query Client for React Query (data fetching library)
const queryClient = new QueryClient();

/**
 * Main App Component
 * Wraps the entire application with necessary providers and defines routes
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Toast notifications */}
      <Toaster />
      <Sonner />
      
      {/* Router setup */}
      <BrowserRouter>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Index />} />
          
          {/* Collection Pages */}
          <Route path="/men" element={<MenCollection />} />
          <Route path="/women" element={<WomenCollection />} />
          
          {/* Category Pages - Dynamic route with category ID */}
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          
          {/* Static Pages */}
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          
          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

### 6.2 Header Component (Header.tsx)

```tsx
/**
 * Header.tsx - Navigation Header Component
 * 
 * This component provides the main navigation for the website including:
 * - Logo
 * - Navigation links
 * - Category dropdown
 * - Search, User, and Cart icons
 * - Mobile responsive menu
 * 
 * Author: Aliraza Mahmood
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User, ChevronDown } from 'lucide-react';

const Header = () => {
  // State for scroll effect
  const [isScrolled, setIsScrolled] = useState(false);
  
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State for category dropdown
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  
  // Get current location for active link highlighting
  const location = useLocation();

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links configuration
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Men', href: '/men' },
    { name: 'Women', href: '/women' },
    { 
      name: 'Categories', 
      href: '#',
      dropdown: [
        { name: 'All Bags', href: '/category/bags' },
        { name: 'Sling Bags', href: '/category/sling-bags' },
        { name: 'Backpacks', href: '/category/backpacks' },
        { name: 'Handbags', href: '/category/handbags' },
        { name: 'Travel Bags', href: '/category/travel' },
        { name: 'Laptop Bags', href: '/category/laptop-bags' },
        { name: 'Clutches', href: '/category/clutches' },
      ]
    },
    { name: 'Brands', href: '/brands' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Check if link is currently active
  const isActive = (href: string) => location.pathname === href;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-elegant' : 'bg-background'
    }`}>
      {/* Header content - Logo, Navigation, Actions */}
    </header>
  );
};

export default Header;
```

### 6.3 ProductCard Component (ProductCard.tsx)

```tsx
/**
 * ProductCard.tsx - Product Display Card Component
 * 
 * This component displays individual product information including:
 * - Product image with hover effects
 * - Quick action buttons (Heart, Cart, View)
 * - Discount badge
 * - Product details (name, brand, rating, price)
 * - Specifications preview
 * - Add to Cart button
 * 
 * Author: Aliraza Mahmood
 */

import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Product } from '@/data/products';
import { useState } from 'react';
import ProductModal from './ProductModal';

// Props interface for type safety
interface ProductCardProps {
  product: Product;  // Product data object
  index?: number;    // Index for animation delay
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  // State to control product modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="product-card group bg-card rounded-xl overflow-hidden"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[3/4]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay with action buttons */}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30">
            {/* Heart (Wishlist), Cart, and View buttons */}
          </div>

          {/* Discount Badge */}
          {product.originalPrice && (
            <span className="bg-accent text-primary-foreground">
              {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>

        {/* Product Details Section */}
        <div className="p-5 space-y-3">
          {/* Brand and Rating */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-accent">{product.brand}</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span>{product.rating}</span>
              <span>({product.reviews})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="font-display text-lg font-semibold">{product.name}</h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground">{product.description}</p>

          {/* Specifications Preview */}
          <div className="text-xs text-muted-foreground">
            <p><span className="font-medium">Material:</span> {product.specifications.material}</p>
            <p><span className="font-medium">Dimensions:</span> {product.specifications.dimensions}</p>
          </div>

          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between pt-2 border-t">
            <div>
              <span className="font-display text-xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm line-through">${product.originalPrice}</span>
              )}
            </div>
            <Button size="sm" variant="gold">Add to Cart</Button>
          </div>
        </div>
      </div>

      {/* Product Modal for detailed view */}
      <ProductModal 
        product={product} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default ProductCard;
```

### 6.4 Product Data Structure (products.ts)

```typescript
/**
 * products.ts - Product Data Store
 * 
 * This file contains all product data, brand information, categories,
 * gallery images, and store locations used throughout the website.
 * 
 * Author: Aliraza Mahmood
 */

// Product Type Definition
export interface Product {
  id: number;                    // Unique product identifier
  name: string;                  // Product display name
  category: 'bags' | 'sling-bags' | 'backpacks' | 'handbags' | 'travel' | 'laptop-bags' | 'clutches';
  gender: 'men' | 'women' | 'unisex';  // Target audience
  brand: string;                 // Brand name
  price: number;                 // Current selling price
  originalPrice?: number;        // Original price (for showing discounts)
  image: string;                 // Product image URL
  description: string;           // Product description
  specifications: {              // Detailed specifications
    material: string;
    dimensions: string;
    weight: string;
    compartments: string;
    color: string;
    warranty: string;
  };
  rating: number;                // Average customer rating
  reviews: number;               // Total number of reviews
  inStock: boolean;              // Availability status
  featured?: boolean;            // Featured product flag
}

// Products Array - All products in the store
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
    description: "Premium leather briefcase designed for the modern professional.",
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
  // ... more products
];

// Brands Array - All brands available
export const brands = [
  { 
    id: "luxeleather",
    name: "LuxeLeather", 
    logo: "LL", 
    description: "Premium leather goods since 1985.",
    products: 45,
    image: "https://images.unsplash.com/photo-..."
  },
  // ... more brands
];

// Categories Array - Product categories
export const categories = [
  { id: 'bags', name: 'Bags', icon: '👜', description: 'Classic handbags and totes' },
  { id: 'sling-bags', name: 'Sling Bags', icon: '👝', description: 'Crossbody and messenger bags' },
  { id: 'backpacks', name: 'Backpacks', icon: '🎒', description: 'Comfortable backpacks' },
  { id: 'handbags', name: 'Handbags', icon: '👛', description: 'Designer handbags' },
  { id: 'travel', name: 'Travel Bags', icon: '🧳', description: 'Luggage and duffels' },
  { id: 'laptop-bags', name: 'Laptop Bags', icon: '💼', description: 'Protective bags for tech' },
  { id: 'clutches', name: 'Clutches', icon: '✨', description: 'Elegant clutches' }
];

// Gallery Images Array
export const galleryImages = [
  { id: 1, src: 'https://...', alt: 'Red Leather Tote', category: 'handbags' },
  // ... more images
];

// Store Locations Array
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
  // ... more locations
];
```

---

## 7. User Guide

### 7.1 Introduction

Welcome to BagBag - your one-stop destination for premium bags! This user guide will help you navigate and use all the features of our website.

### 7.2 Getting Started

1. Open your web browser (Chrome, Firefox, Safari, or Edge recommended)
2. Navigate to the BagBag website URL
3. The home page will load with the main navigation and featured products

### 7.3 Navigation

#### Header Navigation
The header contains the following links:
- **Home**: Returns to the main landing page
- **Men**: Browse men's bag collection
- **Women**: Browse women's bag collection
- **Categories**: Dropdown menu to filter by bag type
- **Brands**: View all available brands
- **Gallery**: Browse product images
- **About Us**: Learn about BagBag
- **Contact**: Get in touch with us

#### Mobile Navigation
On mobile devices:
1. Tap the menu icon (☰) in the top right
2. Navigation links will appear in a dropdown
3. Tap any link to navigate
4. Tap the X to close the menu

### 7.4 Browsing Products

#### On the Home Page
1. Scroll down to see featured products
2. View Men's and Women's collection previews
3. Click "View All" to see full collections

#### Using Category Filters
1. Hover over "Categories" in the navigation
2. Click on a specific category (e.g., Backpacks)
3. All products in that category will be displayed

#### Filtering and Sorting
1. On collection pages, use the filter buttons at the top
2. Click category buttons to filter (All, Bags, Backpacks, etc.)
3. Use the sort dropdown to sort by:
   - Featured
   - Price: Low to High
   - Price: High to Low
   - Rating

### 7.5 Viewing Product Details

#### Quick View
1. Hover over any product card
2. Click the eye icon (👁) that appears
3. A modal will open with full product details

#### Product Information Displayed
- Product image
- Brand name
- Product name
- Star rating and review count
- Description
- Full specifications (material, dimensions, weight, etc.)
- Price (with discount if applicable)
- Stock availability

### 7.6 Using the Gallery

1. Click "Gallery" in the navigation
2. View all product images in a grid layout
3. Use category filter buttons to filter images
4. Click any image to open lightbox view
5. Use arrows or keyboard to navigate between images
6. Click X or outside the image to close

### 7.7 Submitting Feedback

1. Navigate to the Contact page
2. Scroll to the "Share Your Feedback" section
3. Fill in your details:
   - Your Name
   - Email Address
   - Rating (click 1-5 stars)
   - Your feedback message
4. Click "Submit Feedback"

### 7.8 Downloading the Catalog

1. Navigate to the Contact page
2. Find the "Download Catalog" section
3. Click the "Download Full Catalog" button
4. The catalog will download as a file

#### Downloading Product Specifications
1. Open any product's quick view modal
2. Click the "Download Specifications" button
3. A text file with product details will download

### 7.9 Finding Store Locations

1. Navigate to the About Us page
2. Scroll to the "Visit Our Stores" section
3. View all store addresses, phone numbers, and hours

### 7.10 Using the Site Map

1. Click "Site Map" in the footer
2. View the complete website structure
3. Click any link to navigate directly to that page

### 7.11 Tips for Best Experience

- Use a modern browser for best performance
- Enable JavaScript for full functionality
- For image galleries, allow pop-ups
- Use landscape mode on tablets for better product viewing

---

## 8. Developer's Guide - Module Descriptions

### 8.1 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui base components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Page footer
│   ├── Layout.tsx       # Page layout wrapper
│   ├── ProductCard.tsx  # Product display card
│   └── ProductModal.tsx # Product detail modal
├── pages/               # Route page components
│   ├── Index.tsx        # Home page
│   ├── MenCollection.tsx
│   ├── WomenCollection.tsx
│   ├── CategoryPage.tsx
│   ├── BrandsPage.tsx
│   ├── GalleryPage.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── SitemapPage.tsx
│   └── NotFound.tsx
├── data/                # Static data files
│   └── products.ts      # Products, brands, categories
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── App.tsx              # Main app with routing
├── main.tsx             # Entry point
└── index.css            # Global styles
```

### 8.2 Module Descriptions

#### 8.2.1 App.tsx (Main Application Module)

**Purpose**: Serves as the root component and configures all application routes.

**Dependencies**:
- react-router-dom: Client-side routing
- @tanstack/react-query: Data fetching and caching
- All page components

**Key Functions**:
- Sets up React Query client
- Configures BrowserRouter with all routes
- Provides global context providers (Tooltip, Toast)

**Routes Defined**:
| Path | Component | Description |
|------|-----------|-------------|
| / | Index | Home page |
| /men | MenCollection | Men's products |
| /women | WomenCollection | Women's products |
| /category/:categoryId | CategoryPage | Dynamic category |
| /brands | BrandsPage | Brand listing |
| /gallery | GalleryPage | Image gallery |
| /about | AboutPage | About us |
| /contact | ContactPage | Contact form |
| /sitemap | SitemapPage | Site structure |
| * | NotFound | 404 page |

---

#### 8.2.2 Layout.tsx (Layout Wrapper Module)

**Purpose**: Provides consistent page structure with header and footer.

**Props Interface**:
```typescript
interface LayoutProps {
  children: React.ReactNode;  // Page content
}
```

**Structure**:
```
<div>
  <Header />          {/* Fixed navigation header */}
  <main>
    {children}        {/* Page-specific content */}
  </main>
  <Footer />          {/* Page footer */}
</div>
```

**Usage**:
```tsx
<Layout>
  <YourPageContent />
</Layout>
```

---

#### 8.2.3 Header.tsx (Navigation Module)

**Purpose**: Provides main navigation with responsive design.

**State Variables**:
| State | Type | Purpose |
|-------|------|---------|
| isScrolled | boolean | Track scroll for styling |
| isMobileMenuOpen | boolean | Mobile menu toggle |
| isCategoryOpen | boolean | Category dropdown state |

**Features**:
- Fixed position with scroll effect
- Logo with home link
- Navigation links with active states
- Category dropdown with sub-links
- Action buttons (Search, User, Cart)
- Mobile-responsive hamburger menu

**Event Handlers**:
- `handleScroll`: Updates isScrolled state
- `setIsMobileMenuOpen`: Toggles mobile menu
- `setIsCategoryOpen`: Toggles category dropdown

---

#### 8.2.4 Footer.tsx (Footer Module)

**Purpose**: Displays footer with links, contact info, and newsletter.

**Sections**:
1. About section with description
2. Quick Links navigation
3. Categories links
4. Contact information
5. Newsletter subscription
6. Copyright and social links

---

#### 8.2.5 ProductCard.tsx (Product Display Module)

**Purpose**: Displays individual product in a card format.

**Props Interface**:
```typescript
interface ProductCardProps {
  product: Product;   // Product data object
  index?: number;     // Animation delay index
}
```

**Features**:
- Image with hover zoom effect
- Quick action buttons on hover
- Discount percentage calculation
- Featured badge
- Rating display with stars
- Specifications preview
- Price display with original price
- Opens ProductModal on view click

**Discount Calculation**:
```typescript
Math.round((1 - product.price / product.originalPrice) * 100)
```

---

#### 8.2.6 ProductModal.tsx (Product Detail Module)

**Purpose**: Full-screen modal showing detailed product information.

**Props Interface**:
```typescript
interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}
```

**Features**:
- Full specifications display
- Large product image
- Download specifications as text file
- Add to cart functionality
- Wishlist button
- Close button and backdrop click

**Download Function**:
```typescript
const downloadSpecs = () => {
  const specs = `Product: ${product.name}\n...`;
  const blob = new Blob([specs], { type: 'text/plain' });
  // Creates download link
};
```

---

#### 8.2.7 Index.tsx (Home Page Module)

**Purpose**: Main landing page with all homepage sections.

**Sections**:
1. **Hero Section**: Main banner with CTA
2. **Facilities Section**: Service highlights grid
3. **Categories Section**: Category cards grid
4. **Featured Products**: Best seller products
5. **Men's Collection Preview**: 4 products with "View All"
6. **Women's Collection Preview**: 4 products with "View All"
7. **Brands Section**: Brand showcase
8. **CTA Section**: Final call to action

**Data Filtering**:
```typescript
const featuredProducts = products.filter(p => p.featured).slice(0, 4);
const menProducts = products.filter(p => p.gender === 'men').slice(0, 4);
const womenProducts = products.filter(p => p.gender === 'women').slice(0, 4);
```

---

#### 8.2.8 MenCollection.tsx / WomenCollection.tsx (Collection Pages)

**Purpose**: Display filtered products by gender.

**State Variables**:
- `selectedCategory`: Current category filter
- `sortBy`: Current sort option

**Filter Options**:
- All
- Bags
- Sling Bags
- Backpacks
- Travel Bags
- Laptop Bags

**Sort Options**:
- Featured
- Price: Low to High
- Price: High to Low
- Rating

**Filtering Logic**:
```typescript
const filteredProducts = products
  .filter(p => p.gender === 'men')
  .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
  .sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      default: return b.featured ? 1 : -1;
    }
  });
```

---

#### 8.2.9 CategoryPage.tsx (Dynamic Category Page)

**Purpose**: Display products by category with dynamic routing.

**URL Parameter**: `:categoryId` (from react-router-dom useParams)

**Features**:
- Dynamic page title based on category
- Category description display
- Gender filter (All, Men, Women)
- Sort functionality
- Back to categories link

**Example Route**: `/category/backpacks`

---

#### 8.2.10 GalleryPage.tsx (Gallery Module)

**Purpose**: Image gallery with lightbox functionality.

**State Variables**:
- `selectedCategory`: Filter category
- `lightboxImage`: Currently viewed image index
- `isLightboxOpen`: Lightbox visibility

**Features**:
- Category filter buttons
- Responsive image grid
- Lightbox modal with navigation
- Keyboard navigation support
- Image counter display

**Lightbox Controls**:
- Previous/Next arrows
- Click outside to close
- X button to close
- Keyboard: Left/Right arrows, Escape

---

#### 8.2.11 ContactPage.tsx (Contact Module)

**Purpose**: Contact information and forms.

**Sections**:
1. **Contact Info Cards**: Phone, Email, Address
2. **Contact Form**: Name, Email, Subject, Message
3. **Feedback Form**: Name, Email, Rating Stars, Feedback
4. **Queries Section**: FAQ and query submission
5. **Download Catalog**: PDF download button

**Form Handling**:
```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Form validation and submission
  toast({ title: "Success", description: "Message sent!" });
};
```

**Star Rating Implementation**:
```typescript
{[1, 2, 3, 4, 5].map((star) => (
  <Star
    key={star}
    onClick={() => setRating(star)}
    className={star <= rating ? 'fill-accent text-accent' : ''}
  />
))}
```

---

#### 8.2.12 AboutPage.tsx (About Us Module)

**Purpose**: Company information and store locations.

**Sections**:
1. Hero with company tagline
2. Our Story section
3. Mission Statement
4. Key Features grid (6 features)
5. Store Locations cards

---

#### 8.2.13 SitemapPage.tsx (Site Map Module)

**Purpose**: Complete website structure overview.

**Link Categories**:
- Main Pages
- Collections
- Categories (all category links)
- Additional Links

---

#### 8.2.14 products.ts (Data Module)

**Purpose**: Central data store for all product-related data.

**Exports**:
| Export | Type | Description |
|--------|------|-------------|
| products | Product[] | All products (16 items) |
| brands | Brand[] | All brands (8 items) |
| categories | Category[] | All categories (7 items) |
| galleryImages | GalleryImage[] | Gallery images (12 items) |
| storeLocations | StoreLocation[] | Store locations (4 items) |

**Adding New Products**:
```typescript
// Add to products array
{
  id: 17,  // Unique ID
  name: "New Product Name",
  category: "bags",  // Must match category id
  gender: "unisex",  // men, women, or unisex
  brand: "BrandName",
  price: 99.99,
  // ... other required fields
}
```

---

### 8.3 Styling Architecture

#### CSS Organization (index.css)

**CSS Variables** (Design Tokens):
```css
:root {
  --background: 0 0% 100%;
  --foreground: 30 10% 15%;
  --primary: 30 30% 20%;
  --accent: 45 100% 50%;
  --muted: 30 10% 96%;
  /* ... more tokens */
}
```

#### Tailwind Configuration (tailwind.config.ts)

**Custom Colors**:
```typescript
colors: {
  chocolate: {
    DEFAULT: 'hsl(var(--primary))',
    light: 'hsl(30 30% 30%)',
    dark: 'hsl(30 30% 15%)',
  },
  gold: {
    DEFAULT: 'hsl(var(--accent))',
    light: 'hsl(45 100% 60%)',
  }
}
```

**Custom Animations**:
- fade-up
- fade-in
- slide-in-right
- float

---

### 8.4 Adding New Features

#### Adding a New Page

1. Create component in `src/pages/NewPage.tsx`
2. Add route in `App.tsx`:
   ```tsx
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add navigation link in `Header.tsx`
4. Add footer link in `Footer.tsx`
5. Update `SitemapPage.tsx`

#### Adding a New Product

1. Open `src/data/products.ts`
2. Add new product object to `products` array
3. Ensure unique `id` value
4. Match `category` to existing category ids
5. Provide all required fields

#### Adding a New Category

1. Add to `categories` array in `products.ts`
2. Add dropdown item in `Header.tsx` navLinks
3. Products with matching category will appear automatically

---

### 8.5 Build and Deployment

#### Development Server
```bash
npm run dev
```

#### Production Build
```bash
npm run build
```

#### Preview Production Build
```bash
npm run preview
```

---

## Appendix

### A. Technology References

- React: https://react.dev/
- TypeScript: https://www.typescriptlang.org/
- Tailwind CSS: https://tailwindcss.com/
- Vite: https://vitejs.dev/
- React Router: https://reactrouter.com/
- shadcn/ui: https://ui.shadcn.com/
- Lucide Icons: https://lucide.dev/

### B. Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### C. Version Information

- React: 18.3.1
- TypeScript: 5.x
- Tailwind CSS: 3.x
- Vite: 5.x

---

**End of Document**

*© 2026 BagBag - All Rights Reserved*
*Prepared by: Aliraza Mahmood*
