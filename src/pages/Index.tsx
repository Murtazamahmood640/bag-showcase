import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import ProductSection from '@/components/ProductSection';
import Brands from '@/components/Brands';
import Gallery from '@/components/Gallery';
import Facilities from '@/components/Facilities';
import About from '@/components/About';
import Feedback from '@/components/Feedback';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Facilities />
      <Categories />
      <ProductSection
        id="men"
        title="Men's Collection"
        subtitle="For Him"
        gender="men"
      />
      <ProductSection
        id="women"
        title="Women's Collection"
        subtitle="For Her"
        gender="women"
      />
      <Brands />
      <Gallery />
      <About />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
