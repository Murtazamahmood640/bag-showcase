import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const features = [
    'Premium quality materials',
    'Handcrafted by skilled artisans',
    'Sustainable and eco-friendly practices',
    'Lifetime warranty on all products',
    '30-day money-back guarantee',
    'Exclusive member discounts',
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-slide-in-left">
            <img
              src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800"
              alt="About BagBag"
              className="w-full h-[500px] object-cover rounded-2xl shadow-luxury"
            />
            <div className="absolute -bottom-8 -right-8 bg-accent text-primary-foreground p-8 rounded-2xl shadow-elegant">
              <p className="font-display text-4xl font-bold">15+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-slide-in-right animation-delay-200">
            <span className="text-accent font-medium uppercase tracking-widest text-sm">
              About Us
            </span>
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

            <Button variant="hero">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
