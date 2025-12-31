import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { categories, brands } from '@/data/products';
import { ChevronRight } from 'lucide-react';

const SitemapPage = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', href: '/' },
        { name: "Men's Collection", href: '/men' },
        { name: "Women's Collection", href: '/women' },
        { name: 'All Brands', href: '/brands' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
      ]
    },
    {
      title: 'Categories',
      links: categories.map(cat => ({
        name: cat.name,
        href: `/category/${cat.id}`
      }))
    },
    {
      title: 'Brands',
      links: brands.map(brand => ({
        name: brand.name,
        href: '/brands'
      }))
    },
    {
      title: 'Support',
      links: [
        { name: 'FAQ', href: '#' },
        { name: 'Shipping Information', href: '#' },
        { name: 'Returns & Exchanges', href: '#' },
        { name: 'Size Guide', href: '#' },
        { name: 'Track Your Order', href: '#' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'Refund Policy', href: '#' },
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-gradient-cream">
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <span className="text-accent font-medium uppercase tracking-widest text-sm">Navigation</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-2 mb-4">Site Map</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Find everything you need on our website quickly and easily.
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapSections.map((section, index) => (
              <div 
                key={section.title}
                className="bg-card p-6 rounded-xl shadow-elegant animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h2 className="font-display text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.href}
                        className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
                      >
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-12 p-8 bg-primary rounded-2xl text-primary-foreground text-center animate-fade-up">
            <h2 className="font-display text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-primary-foreground/70 mb-6">
              Contact our support team and we'll be happy to help you navigate our website.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-accent/90 transition-colors"
            >
              Contact Support
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SitemapPage;
