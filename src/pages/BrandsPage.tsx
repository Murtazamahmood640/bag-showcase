import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { brands, products } from '@/data/products';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BrandsPage = () => {
  const getProductCountByBrand = (brandName: string) => {
    return products.filter(p => p.brand === brandName).length;
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-gradient-cream">
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <span className="text-accent font-medium uppercase tracking-widest text-sm">Our Partners</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-2 mb-4">Premium Brands</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We partner with the world's finest bag manufacturers to bring you exceptional quality and timeless designs.
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <div
                key={brand.id}
                className="bg-card rounded-2xl overflow-hidden shadow-elegant hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-accent text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-display text-lg font-bold">{brand.logo}</span>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">{brand.name}</h3>
                      <p className="text-sm text-muted-foreground">{getProductCountByBrand(brand.name)} Products</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{brand.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Products
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Want to Partner with Us?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            We're always looking for quality brands to add to our collection. Reach out to discuss partnership opportunities.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg">
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default BrandsPage;
