import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import Layout from '@/components/Layout';
import { products, categories, brands } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Truck, Shield, RefreshCw, Headphones, CreditCard, Gift } from 'lucide-react';

const facilities = [
  { icon: Truck, title: 'Free Shipping', description: 'On orders over $100' },
  { icon: Shield, title: 'Secure Payment', description: '100% secure checkout' },
  { icon: RefreshCw, title: 'Easy Returns', description: '30-day returns' },
  { icon: Headphones, title: '24/7 Support', description: 'Always here to help' },
  { icon: CreditCard, title: 'Flexible Payment', description: 'Multiple options' },
  { icon: Gift, title: 'Gift Wrapping', description: 'Free packaging' },
];

const Index = () => {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);
  const menProducts = products.filter(p => p.gender === 'men').slice(0, 4);
  const womenProducts = products.filter(p => p.gender === 'women').slice(0, 4);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-cream">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span className="text-sm font-medium text-foreground">New Collection 2024</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Discover Your Perfect{' '}
                <span className="text-gradient">Bag</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Explore our curated collection of premium bags crafted with exceptional materials 
                and timeless designs. From everyday essentials to statement pieces.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/category/bags">
                  <Button variant="hero" size="xl">
                    Shop Now
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/gallery">
                  <Button variant="outline" size="xl">
                    View Gallery
                  </Button>
                </Link>
              </div>

              <div className="flex gap-8 pt-8 border-t border-border">
                <div>
                  <p className="font-display text-3xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Premium Products</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-foreground">50K+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-foreground">8+</p>
                  <p className="text-sm text-muted-foreground">Luxury Brands</p>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in-right animation-delay-200">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800"
                  alt="Premium Leather Bag"
                  className="w-full h-[600px] object-cover rounded-2xl shadow-luxury"
                />
                
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-elegant animate-float">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Star className="w-8 h-8 text-accent fill-accent" />
                    </div>
                    <div>
                      <p className="font-display text-2xl font-bold text-foreground">4.9</p>
                      <p className="text-sm text-muted-foreground">Customer Rating</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">
                  Up to 40% Off
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-accent/20 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {facilities.map((facility, index) => (
              <div key={facility.title} className="text-center group animate-fade-up" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="w-14 h-14 mx-auto bg-background rounded-full flex items-center justify-center mb-3 group-hover:bg-accent transition-colors duration-300">
                  <facility.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{facility.title}</h3>
                <p className="text-xs text-muted-foreground">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <span className="text-accent font-medium uppercase tracking-widest text-sm">Browse By</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 section-title">Categories</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="group animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="bg-card rounded-xl p-6 text-center hover-lift shadow-elegant">
                  <span className="text-4xl mb-3 block">{category.icon}</span>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <span className="text-accent font-medium uppercase tracking-widest text-sm">Best Sellers</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 section-title">Featured Products</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Men's Collection Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div className="animate-fade-up">
              <span className="text-accent font-medium uppercase tracking-widest text-sm">For Him</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">Men's Collection</h2>
            </div>
            <Link to="/men">
              <Button variant="outline">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {menProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Women's Collection Preview */}
      <section className="py-20 bg-gradient-cream">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div className="animate-fade-up">
              <span className="text-accent font-medium uppercase tracking-widest text-sm">For Her</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">Women's Collection</h2>
            </div>
            <Link to="/women">
              <Button variant="outline">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {womenProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Brands Preview */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <span className="text-accent font-medium uppercase tracking-widest text-sm">Trusted Partners</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">Our Premium Brands</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {brands.slice(0, 4).map((brand, index) => (
              <div
                key={brand.id}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto bg-accent text-primary-foreground rounded-full flex items-center justify-center mb-4">
                  <span className="font-display text-xl font-bold">{brand.logo}</span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-1">{brand.name}</h3>
                <p className="text-primary-foreground/60 text-sm">{brand.products} Products</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/brands">
              <Button variant="heroOutline">
                View All Brands
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-chocolate-light rounded-3xl p-12 md:p-16 text-center text-primary-foreground animate-fade-up">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Ready to Find Your Perfect Bag?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Browse our complete collection and discover bags crafted with passion and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/category/bags">
                <Button variant="gold" size="xl">
                  Shop All Bags
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
