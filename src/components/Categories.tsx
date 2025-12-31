import { categories } from '@/data/products';

const Categories = () => {
  const categoryImages = {
    bags: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
    'sling-bags': 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400',
    backpacks: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    handbags: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400',
    travel: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400',
  };

  return (
    <section id="categories" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-accent font-medium uppercase tracking-widest text-sm">
            Browse By
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 section-title">
            Categories
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Explore our diverse collection of bags organized by style and purpose
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-square hover-lift">
                <img
                  src={categoryImages[category.id as keyof typeof categoryImages]}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground">
                  <span className="text-4xl mb-2">{category.icon}</span>
                  <h3 className="font-display text-xl font-semibold">{category.name}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
