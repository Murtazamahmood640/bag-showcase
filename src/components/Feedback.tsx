import { useState } from 'react';
import { Star, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Feedback = () => {
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast({
        title: "Please select a rating",
        description: "We'd love to know how we're doing!",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Thank you for your feedback!",
      description: "We appreciate you taking the time to share your thoughts.",
    });
    setFormData({ name: '', email: '', message: '' });
    setRating(0);
  };

  return (
    <section className="py-24 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <span className="text-accent font-medium uppercase tracking-widest text-sm">
              We Value Your Opinion
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 section-title">
              Share Your Feedback
            </h2>
            <p className="text-muted-foreground mt-6">
              Your feedback helps us improve and serve you better
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card p-8 md:p-12 rounded-2xl shadow-elegant animate-fade-up animation-delay-200">
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
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-foreground mb-2">
                Your Message
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                placeholder="Tell us about your experience..."
              />
            </div>

            <div className="text-center">
              <Button type="submit" variant="gold" size="lg">
                Submit Feedback
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
