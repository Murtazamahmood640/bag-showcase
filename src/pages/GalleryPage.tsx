import { useState } from 'react';
import Layout from '@/components/Layout';
import { galleryImages, categories } from '@/data/products';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };
  
  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const filterOptions = [
    { id: 'all', name: 'All' },
    ...categories.filter(c => galleryImages.some(img => img.category === c.id))
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-gradient-cream">
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <span className="text-accent font-medium uppercase tracking-widest text-sm">Explore</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-2 mb-4">Our Gallery</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Browse through our stunning collection of premium bags captured in beautiful detail.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {filterOptions.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="relative overflow-hidden rounded-xl cursor-pointer group animate-fade-up aspect-square"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground font-display text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                    {image.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-6 text-primary-foreground hover:text-accent transition-colors"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>
          
          <div className="max-w-4xl mx-4">
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-luxury"
            />
            <p className="text-center text-primary-foreground mt-4 font-display text-xl">
              {filteredImages[selectedImage].alt}
            </p>
          </div>
          
          <button
            onClick={nextImage}
            className="absolute right-6 text-primary-foreground hover:text-accent transition-colors"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-foreground">
            {selectedImage + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default GalleryPage;
