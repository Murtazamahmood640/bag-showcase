import { Truck, Shield, RefreshCw, Headphones, CreditCard, Gift } from 'lucide-react';

const facilities = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Free delivery on orders over $100',
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: '100% secure payment gateway',
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    description: '30-day hassle-free returns',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round the clock customer service',
  },
  {
    icon: CreditCard,
    title: 'Flexible Payment',
    description: 'Multiple payment options available',
  },
  {
    icon: Gift,
    title: 'Gift Wrapping',
    description: 'Complimentary gift packaging',
  },
];

const Facilities = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={facility.title}
              className="text-center group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto bg-background rounded-full flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
                <facility.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">{facility.title}</h3>
              <p className="text-sm text-muted-foreground">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
