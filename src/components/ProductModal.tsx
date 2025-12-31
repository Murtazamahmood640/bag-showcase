import { X, Star, ShoppingCart, Heart, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Product } from '@/data/products';
import { useToast } from '@/hooks/use-toast';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const { toast } = useToast();

  if (!isOpen) return null;

  const handleDownload = () => {
    const content = `
PRODUCT SPECIFICATION SHEET
===========================

${product.name}
Brand: ${product.brand}
Category: ${product.category.replace('-', ' ').toUpperCase()}

PRICE: $${product.price}${product.originalPrice ? ` (Original: $${product.originalPrice})` : ''}

DESCRIPTION:
${product.description}

SPECIFICATIONS:
- Material: ${product.specifications.material}
- Dimensions: ${product.specifications.dimensions}
- Weight: ${product.specifications.weight}
- Compartments: ${product.specifications.compartments}
- Color: ${product.specifications.color}
- Warranty: ${product.specifications.warranty}

RATINGS & REVIEWS:
- Rating: ${product.rating}/5 stars
- Total Reviews: ${product.reviews}

AVAILABILITY: ${product.inStock ? 'In Stock' : 'Out of Stock'}

---
For more information, visit www.bagbag.com
Contact: info@bagbag.com | +1 (555) 123-4567
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${product.name.replace(/\s+/g, '-')}-Specifications.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    toast({
      title: "Downloaded!",
      description: "Product specifications have been downloaded.",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card rounded-2xl shadow-luxury max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-muted rounded-full hover:bg-accent hover:text-primary-foreground transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
            />
            {product.originalPrice && (
              <span className="absolute top-4 left-4 bg-accent text-primary-foreground px-4 py-2 rounded-full font-semibold">
                {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
              </span>
            )}
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            <div>
              <span className="text-accent font-medium uppercase tracking-wider text-sm">
                {product.brand}
              </span>
              <h2 className="font-display text-3xl font-bold text-foreground mt-2">
                {product.name}
              </h2>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-accent fill-accent' : 'text-border'}`} 
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="font-display text-4xl font-bold text-foreground">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Specifications */}
            <div className="bg-muted rounded-xl p-4 space-y-3">
              <h3 className="font-display font-semibold text-foreground">Specifications</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-muted-foreground">Material:</span>
                  <p className="font-medium text-foreground">{product.specifications.material}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Dimensions:</span>
                  <p className="font-medium text-foreground">{product.specifications.dimensions}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Weight:</span>
                  <p className="font-medium text-foreground">{product.specifications.weight}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Compartments:</span>
                  <p className="font-medium text-foreground">{product.specifications.compartments}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Color:</span>
                  <p className="font-medium text-foreground">{product.specifications.color}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Warranty:</span>
                  <p className="font-medium text-foreground">{product.specifications.warranty}</p>
                </div>
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button variant="gold" size="lg" className="flex-1">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={handleDownload}>
                <Download className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
