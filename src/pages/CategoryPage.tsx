import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import { Filter, ChevronRight } from 'lucide-react';

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [genderFilter, setGenderFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  const category = categories.find(c => c.id === categoryId);
  
  const categoryProducts = products.filter(product => {
    const categoryMatch = product.category === categoryId;
    const genderMatch = genderFilter === 'all' || product.gender === genderFilter || product.gender === 'unisex';
    return categoryMatch && genderMatch;
  });

  const sortedProducts = [...categoryProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  if (!category) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Category Not Found</h1>
          <Link to="/" className="text-accent hover:underline">Return to Home</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-accent">Home</Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link to="/category/bags" className="text-muted-foreground hover:text-accent">Categories</Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium">{category.name}</span>
          </div>
        </div>
      </div>

      {/* Category Header */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 animate-fade-up">
            <span className="text-6xl mb-4 block">{category.icon}</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">{category.name}</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">{category.description}</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pt-8 border-t border-border">
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground mr-2">Filter by:</span>
              {['all', 'men', 'women'].map(gender => (
                <button
                  key={gender}
                  onClick={() => setGenderFilter(gender)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all capitalize ${
                    genderFilter === gender ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {gender === 'all' ? 'All' : gender}
                </button>
              ))}
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg bg-muted border border-border text-foreground"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground mb-6">
            Showing {sortedProducts.length} products
          </p>

          {/* Products Grid */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {sortedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No products found in this category.</p>
              <Link to="/" className="text-accent hover:underline mt-4 inline-block">
                Browse all products
              </Link>
            </div>
          )}

          {/* Other Categories */}
          <div className="mt-16 pt-12 border-t border-border">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Explore Other Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {categories.filter(c => c.id !== categoryId).map(cat => (
                <Link
                  key={cat.id}
                  to={`/category/${cat.id}`}
                  className="bg-card rounded-xl p-4 text-center hover-lift shadow-elegant"
                >
                  <span className="text-3xl mb-2 block">{cat.icon}</span>
                  <h3 className="font-medium text-foreground text-sm">{cat.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CategoryPage;
