import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  return (
    <div 
      className="product-card group bg-card hover-lift animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
          <button className="w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-lg hover:bg-accent hover:text-primary-foreground transition-all hover:scale-110">
            <Heart className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-lg hover:bg-accent hover:text-primary-foreground transition-all hover:scale-110">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-lg hover:bg-accent hover:text-primary-foreground transition-all hover:scale-110">
            <Eye className="w-5 h-5" />
          </button>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.originalPrice && (
            <span className="bg-accent text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
              Sale
            </span>
          )}
          <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full capitalize">
            {product.gender}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
            {product.brand}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm font-medium text-foreground">{product.rating}</span>
            <span className="text-sm text-muted-foreground">({product.reviews})</span>
          </div>
        </div>

        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
          {product.name}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-foreground">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <Button size="sm" variant="gold">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
