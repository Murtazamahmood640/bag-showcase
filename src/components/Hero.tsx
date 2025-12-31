import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-cream">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
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
              <Button variant="hero" size="xl">
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl">
                View Collection
              </Button>
            </div>

            {/* Stats */}
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
                <p className="font-display text-3xl font-bold text-foreground">15+</p>
                <p className="text-sm text-muted-foreground">Luxury Brands</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right animation-delay-200">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800"
                alt="Premium Leather Bag"
                className="w-full h-[600px] object-cover rounded-2xl shadow-luxury"
              />
              
              {/* Floating Card */}
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

              {/* Price Tag */}
              <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">
                Up to 40% Off
              </div>
            </div>

            {/* Decorative Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-accent/20 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
