import { useState } from 'react';
import Layout from '@/components/Layout';
import { storeLocations } from '@/data/products';
import { MapPin, Phone, Mail, Clock, Send, Star, MessageSquare, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  
  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Feedback Form State
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  // Query Form State
  const [queryForm, setQueryForm] = useState({
    name: '',
    email: '',
    orderNumber: '',
    query: '',
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast({
        title: "Please select a rating",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Thank you for your feedback!",
      description: "We appreciate you taking the time to share your thoughts.",
    });
    setFeedbackForm({ name: '', email: '', message: '' });
    setRating(0);
  };

  const handleQuerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Query Submitted!",
      description: "Our support team will respond within 24-48 hours.",
    });
    setQueryForm({ name: '', email: '', orderNumber: '', query: '' });
  };

  const handleDownloadCatalog = () => {
    const catalogContent = `
BAGBAG - COMPLETE PRODUCT CATALOG 2024
======================================

ABOUT US
--------
BagBag is your premier destination for premium bags and accessories.
Since 2009, we've been crafting exceptional bags that combine timeless
elegance with modern functionality.

STORE LOCATIONS
---------------
${storeLocations.map(loc => `
${loc.name}
${loc.address}, ${loc.city}
Phone: ${loc.phone}
Hours: ${loc.hours}
`).join('')}

CATEGORIES
----------
• Bags - Classic handbags and totes for everyday use
• Sling Bags - Crossbody and messenger bags
• Backpacks - For work, travel, and adventure
• Handbags - Designer handbags for fashion-forward individuals
• Travel Bags - Luggage and duffels for your journeys
• Laptop Bags - Protective bags for your tech devices
• Clutches - Elegant clutches for special occasions

OUR BRANDS
----------
• LuxeLeather - Premium leather goods since 1985
• TrekMaster - Adventure-ready gear
• BizClass - Professional excellence
• HeritageStyle - Timeless craftsmanship
• ActiveGear - Built for performance
• ChicMode - Fashion forward designs
• Voyager - Travel in style
• TechStyle - Modern functionality

SERVICES
--------
✓ Free Shipping on orders over $100
✓ 30-Day Easy Returns
✓ Lifetime Warranty on select products
✓ 24/7 Customer Support
✓ Gift Wrapping Available
✓ Secure Payment Gateway

CONTACT INFORMATION
-------------------
Website: www.bagbag.com
Email: info@bagbag.com
Phone: +1 (555) 123-4567
Support: support@bagbag.com

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
      description: "The complete catalog has been downloaded.",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-gradient-cream">
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <span className="text-accent font-medium uppercase tracking-widest text-sm">Get In Touch</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-2 mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-up">
              <div className="bg-card p-6 rounded-xl shadow-elegant">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Visit Us</h3>
                    <p className="text-muted-foreground text-sm">123 Fashion Avenue</p>
                    <p className="text-muted-foreground text-sm">New York, NY 10001</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-elegant">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Call Us</h3>
                    <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground text-sm">+1 (555) 987-6543</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-elegant">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Email Us</h3>
                    <p className="text-muted-foreground text-sm">info@bagbag.com</p>
                    <p className="text-muted-foreground text-sm">support@bagbag.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-elegant">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Working Hours</h3>
                    <p className="text-muted-foreground text-sm">Mon-Fri: 9AM - 8PM</p>
                    <p className="text-muted-foreground text-sm">Sat-Sun: 10AM - 6PM</p>
                  </div>
                </div>
              </div>

              {/* Download Catalog */}
              <div className="bg-primary p-6 rounded-xl text-primary-foreground">
                <h3 className="font-display font-semibold mb-2">Download Catalog</h3>
                <p className="text-primary-foreground/70 text-sm mb-4">
                  Get our complete product catalog with all details.
                </p>
                <Button variant="gold" onClick={handleDownloadCatalog}>
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-up animation-delay-200">
              <div className="bg-card p-8 rounded-2xl shadow-elegant">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-accent" />
                  Send us a Message
                </h2>
                <form onSubmit={handleContactSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                    <input
                      type="text"
                      required
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-2">Your Message</label>
                    <textarea
                      required
                      rows={5}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <Button type="submit" variant="gold" size="lg">
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-16 bg-gradient-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 animate-fade-up">
              <span className="text-accent font-medium uppercase tracking-widest text-sm">We Value Your Opinion</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 section-title">
                Share Your Feedback
              </h2>
            </div>

            <form onSubmit={handleFeedbackSubmit} className="bg-card p-8 rounded-2xl shadow-elegant animate-fade-up animation-delay-200">
              {/* Rating Stars */}
              <div className="text-center mb-8">
                <p className="text-foreground font-medium mb-4">Rate your experience</p>
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-10 h-10 transition-colors ${
                          star <= (hoveredRating || rating)
                            ? 'text-accent fill-accent'
                            : 'text-border'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={feedbackForm.name}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={feedbackForm.email}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">Your Feedback</label>
                <textarea
                  required
                  rows={4}
                  value={feedbackForm.message}
                  onChange={(e) => setFeedbackForm({ ...feedbackForm, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent outline-none resize-none"
                  placeholder="Tell us about your experience..."
                />
              </div>

              <div className="text-center">
                <Button type="submit" variant="gold" size="lg">
                  Submit Feedback
                  <Star className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Queries Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 animate-fade-up">
              <span className="text-accent font-medium uppercase tracking-widest text-sm">Need Help?</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 section-title">
                Submit a Query
              </h2>
              <p className="text-muted-foreground mt-4">
                Have questions about your order or our products? Let us know.
              </p>
            </div>

            <form onSubmit={handleQuerySubmit} className="bg-card p-8 rounded-2xl shadow-elegant animate-fade-up animation-delay-200">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={queryForm.name}
                    onChange={(e) => setQueryForm({ ...queryForm, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={queryForm.email}
                    onChange={(e) => setQueryForm({ ...queryForm, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">Order Number (Optional)</label>
                <input
                  type="text"
                  value={queryForm.orderNumber}
                  onChange={(e) => setQueryForm({ ...queryForm, orderNumber: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent outline-none"
                  placeholder="e.g., ORD-12345"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">Your Query</label>
                <textarea
                  required
                  rows={4}
                  value={queryForm.query}
                  onChange={(e) => setQueryForm({ ...queryForm, query: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent outline-none resize-none"
                  placeholder="Describe your query in detail..."
                />
              </div>

              <div className="text-center">
                <Button type="submit" variant="gold" size="lg">
                  Submit Query
                  <MessageSquare className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
