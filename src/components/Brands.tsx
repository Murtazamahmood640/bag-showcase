import { brands } from '@/data/products';

const Brands = () => {
  return (
    <section id="brands" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-accent font-medium uppercase tracking-widest text-sm">
            Trusted By
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Our Premium Brands
          </h2>
          <p className="text-primary-foreground/70 mt-6 max-w-2xl mx-auto">
            We partner with the world's finest bag manufacturers to bring you exceptional quality
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 text-center hover-lift animate-fade-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 mx-auto bg-accent text-primary-foreground rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="font-display text-2xl font-bold">{brand.logo}</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{brand.name}</h3>
              <p className="text-primary-foreground/60 text-sm">{brand.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
