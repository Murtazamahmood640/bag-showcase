import { ShoppingBag, Facebook, Twitter, Instagram, Youtube, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const { toast } = useToast();
  
  const handleDownload = () => {
    // Create a downloadable catalog content
    const catalogContent = `
BagBag - Premium Bag Collection Catalog 2024

===========================================
ABOUT BAGBAG
===========================================
At BagBag, we believe that a bag is more than just an accessory – it's an extension of your personality. Since 2009, we've been crafting exceptional bags that combine timeless elegance with modern functionality.

===========================================
OUR COLLECTION
===========================================

1. CLASSIC LEATHER TOTE - $189.99
   Brand: LuxeLeather
   Material: Genuine Italian Leather
   Dimensions: 14" x 12" x 5"
   Perfect for everyday use

2. URBAN EXPLORER BACKPACK - $129.99
   Brand: TrekMaster
   Material: Waxed Canvas & Leather Trim
   Dimensions: 18" x 12" x 6"
   Perfect for work or weekend adventures

3. EXECUTIVE MESSENGER - $159.99
   Brand: BizClass
   Material: Full-Grain Leather
   Dimensions: 15" x 11" x 4"
   Ideal for business professionals

4. VINTAGE SATCHEL - $219.99
   Brand: HeritageStyle
   Material: Aged Leather
   Dimensions: 12" x 9" x 4"
   A timeless piece for the modern woman

5. SPORT PRO BACKPACK - $89.99
   Brand: ActiveGear
   Material: Ripstop Nylon
   Dimensions: 20" x 13" x 8"
   Perfect for gym and outdoor activities

6. ELEGANT CROSSBODY - $79.99
   Brand: ChicMode
   Material: Quilted Leather
   Dimensions: 8" x 6" x 3"
   Perfect for evening events

7. TRAVELER'S DUFFLE - $249.99
   Brand: Voyager
   Material: Ballistic Nylon & Leather
   Dimensions: 22" x 12" x 11"
   For frequent travelers

8. MINIMALIST LAPTOP BAG - $139.99
   Brand: TechStyle
   Material: Premium PU Leather
   Dimensions: 16" x 11" x 3"
   Fits up to 15" laptops

===========================================
STORE LOCATIONS
===========================================
Main Store: 123 Fashion Street, New York, NY 10001
Phone: +1 (555) 123-4567
Email: info@bagbag.com
Hours: Mon-Fri: 9AM - 8PM, Sat-Sun: 10AM - 6PM

===========================================
OUR SERVICES
===========================================
✓ Free Shipping on orders over $100
✓ 30-Day Easy Returns
✓ Lifetime Warranty
✓ 24/7 Customer Support
✓ Gift Wrapping Available

===========================================
CONTACT US
===========================================
Website: www.bagbag.com
Email: support@bagbag.com
Phone: +1 (555) 123-4567

Thank you for choosing BagBag!
    `.trim();

    const blob = new Blob([catalogContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'BagBag-Catalog-2024.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    toast({
      title: "Catalog Downloaded!",
      description: "Your catalog has been downloaded successfully.",
    });
  };

  const footerLinks = {
    shop: [
      { name: 'All Bags', href: '#categories' },
      { name: 'Men\'s Collection', href: '#men' },
      { name: 'Women\'s Collection', href: '#women' },
      { name: 'Backpacks', href: '#backpacks' },
      { name: 'New Arrivals', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Story', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#' },
      { name: 'Shipping Info', href: '#' },
      { name: 'Returns', href: '#' },
      { name: 'Size Guide', href: '#' },
    ],
    sitemap: [
      { name: 'Home', href: '#home' },
      { name: 'Products', href: '#men' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'Brands', href: '#brands' },
      { name: 'Contact', href: '#contact' },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold mb-2">Subscribe to our Newsletter</h3>
              <p className="text-primary-foreground/70">Get exclusive offers and updates directly to your inbox</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent outline-none"
              />
              <Button variant="gold">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display text-2xl font-bold">
                Bag<span className="text-accent">Bag</span>
              </span>
            </a>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Crafting premium bags since 2009. We believe in quality, sustainability, and timeless design.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Site Map</h4>
            <ul className="space-y-3">
              {footerLinks.sitemap.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={handleDownload}
            >
              <Download className="w-4 h-4 mr-2" />
              Catalog
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 BagBag. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
