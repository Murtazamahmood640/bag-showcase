import Layout from '@/components/Layout';
import { storeLocations } from '@/data/products';
import { CheckCircle, Award, Users, Globe, MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const features = [
    'Premium quality materials',
    'Handcrafted by skilled artisans',
    'Sustainable and eco-friendly practices',
    'Lifetime warranty on select products',
    '30-day money-back guarantee',
    'Exclusive member discounts',
  ];

  const stats = [
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Users, value: '50K+', label: 'Happy Customers' },
    { icon: Globe, value: '30+', label: 'Countries Served' },
    { icon: CheckCircle, value: '500+', label: 'Products' },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1600"
            alt="About BagBag"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative text-center text-primary-foreground animate-fade-up">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-primary-foreground/80">Our Story, Our Passion, Our Craft</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800"
                alt="Our Story"
                className="w-full h-[500px] object-cover rounded-2xl shadow-luxury"
              />
            </div>

            <div className="animate-slide-in-right animation-delay-200">
              <span className="text-accent font-medium uppercase tracking-widest text-sm">Our Story</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                Crafting Premium Bags Since 2009
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At BagBag, we believe that a bag is more than just an accessory – it's an extension 
                of your personality. Our journey began with a simple mission: to create exceptional 
                bags that combine timeless elegance with modern functionality.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Every bag in our collection is meticulously crafted using the finest materials, 
                sourced from sustainable suppliers around the world. Our skilled artisans bring 
                decades of experience to each piece, ensuring unparalleled quality and attention to detail.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-accent" />
                <p className="font-display text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Locations */}
      <section className="py-20 bg-gradient-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <span className="text-accent font-medium uppercase tracking-widest text-sm">Visit Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 section-title">
              Our Store Locations
            </h2>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Experience our bags in person at one of our premium retail locations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {storeLocations.map((location, index) => (
              <div 
                key={location.id}
                className="bg-card p-6 rounded-xl shadow-elegant animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">{location.name}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-foreground">{location.address}</p>
                      <p className="text-muted-foreground">{location.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                    <p className="text-foreground">{location.phone}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{location.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Have Questions?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We'd love to hear from you. Reach out to us for any inquiries or feedback.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
