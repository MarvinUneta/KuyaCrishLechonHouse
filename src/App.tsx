import { Hero } from './components/Hero';
import { BenefitsSection } from './components/BenefitsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { NavigationBar } from './components/NavigationBar';
import { SiteFooter } from './components/SiteFooter';
import { useSiteContent } from './hooks/useSiteContent';
import './index.css';

function App() {
  const { content } = useSiteContent();

  return (
    <div className="landing-page">
      <NavigationBar />
      
      <div className="landing-page">
        <Hero hero={content.hero} />

        <main>
          <BenefitsSection services={content.services} menu={content.menu} />
          <TestimonialsSection testimonials={content.testimonials} />
        </main>
        
        <SiteFooter contact={content.contact} />
      </div>
    </div>
  );
}

export default App;
