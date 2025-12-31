import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800', alt: 'Leather Tote Bag' },
  { src: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800', alt: 'Canvas Backpack' },
  { src: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800', alt: 'Messenger Bag' },
  { src: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800', alt: 'Vintage Satchel' },
  { src: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800', alt: 'Crossbody Bag' },
  { src: 'https://images.unsplash.com/photo-1622260614153-03223fb72052?w=800', alt: 'Sport Backpack' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };
  
  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-accent font-medium uppercase tracking-widest text-sm">
            Explore
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 section-title">
            Our Gallery
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Browse through our stunning collection of premium bags
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg cursor-pointer group animate-fade-up ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  index === 0 ? 'h-full min-h-[400px]' : 'aspect-square'
                }`}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-primary-foreground font-display text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

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
            
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-luxury"
            />
            
            <button
              onClick={nextImage}
              className="absolute right-6 text-primary-foreground hover:text-accent transition-colors"
            >
              <ChevronRight className="w-12 h-12" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
