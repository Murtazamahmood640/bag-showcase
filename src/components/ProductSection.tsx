import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';

interface ProductSectionProps {
  title: string;
  subtitle: string;
  gender: 'men' | 'women' | 'all';
  id: string;
}

const ProductSection = ({ title, subtitle, gender, id }: ProductSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProducts = products.filter((product) => {
    const genderMatch = gender === 'all' || product.gender === gender || product.gender === 'unisex';
    const categoryMatch = activeCategory === 'all' || product.category === activeCategory;
    return genderMatch && categoryMatch;
  }).slice(0, 4);

  const categoryFilters = [
    { id: 'all', name: 'All' },
    { id: 'bags', name: 'Bags' },
    { id: 'sling-bags', name: 'Sling Bags' },
    { id: 'backpacks', name: 'Backpacks' },
    { id: 'handbags', name: 'Handbags' },
  ];

  return (
    <section id={id} className="py-24 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <span className="text-accent font-medium uppercase tracking-widest text-sm">
            {subtitle}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 section-title">
            {title}
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up animation-delay-100">
          {categoryFilters.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-foreground hover:bg-muted'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-up">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
