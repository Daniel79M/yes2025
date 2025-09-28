
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Globe, 
  Lightbulb, 
  Target, 
  Heart,
  Star,
  Rocket,
  Network,
  GraduationCap,
  Briefcase,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';
// Assuming react-router-dom is used for client-side routing, given the 'Link to=' syntax in the outline.
import { Link } from 'react-router-dom'; 
// import { createPageUrl } from 'utils';
import HeroSection from '../Components/youth-explore/HeroSection';
import WhySection from '../Components/youth-explore/WhySection';
import ExperienceSection from '../Components/youth-explore/ExperienceSection';
import ThematicsSection from '../Components/youth-explore/ThematicsSection';
import IntervenantsSection from '../Components/youth-explore/IntervenantsSection';
import AudienceSection from '../Components/youth-explore/AudienceSection';
import KeyInfoSection from '../Components/youth-explore/KeyInfoSection';
import PartnersSection from '../Components/youth-explore/PartnersSection';
import NewsletterSection from '../Components/youth-explore/NewsletterSection';
import yex2025 from '@/assets/yex2025logo.jpg'


export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  // Helper function to create page URLs, as implied by the outline
  // This local definition is removed to use the one from @/utils

  useEffect(() => {
    const handleScroll = () => {
      // Note: The 'contact' section is still listed here for scroll tracking,
      // even though the 'S'inscrire' button now navigates to a different page.
      // The outline did not specify changes to this array.
      const sections = ['hero', 'why', 'thematics', 'intervenants', 'partners', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src={yex2025} alt="yex2025 logo" className='w-[200px]'/>
              {/* <div className="w-10 h-10 bg-gradient-to-r from-blue-800 to-indigo-900 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </div> */}
              {/* <span className="text-xl font-bold text-blue-900">Youth Explore</span>
              <Badge className="bg-yellow-400 text-blue-900 border-yellow-500">2025</Badge> */}
            </div>
            
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Accueil' },
                { id: 'why', label: 'À Propos' },
                { id: 'thematics', label: 'Thématiques' },
                { id: 'intervenants', label: 'Intervenants' },
                { id: 'partners', label: 'Partenaires' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-700 ${
                    activeSection === item.id ? 'text-blue-700 border-b-2 border-yellow-500' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* The 'S'inscrire' button is now wrapped with a Link component for navigation */}
            <Link to={"/inscription"}>
              <Button 
                className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-blue-900 font-bold"
              >
                S'inscrire
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 bg-gray-50">
        <HeroSection />
        <WhySection />
        <ExperienceSection />
        <ThematicsSection />
        <IntervenantsSection />
        <AudienceSection />
        <KeyInfoSection />
        <PartnersSection />
        <NewsletterSection />
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-blue-900" />
              </div>
              <span className="text-2xl font-bold">Youth Explore 2025</span>
            </div>
            <p className="text-gray-300 mb-8">
              La Conférence Internationale de la Jeunesse Africaine
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <div className="flex items-center space-x-2 text-gray-300">
                <Calendar className="w-5 h-5 text-yellow-400" />
                <span>27 novembre 2025</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span>Lomé + En ligne</span>
              </div>
            </div>
            <p className="text-gray-400">
              © 2025 Youth Explore. Tous droits réservés. Inspiré par <a href="https://afri-carrieres.com/yex2025/" className="underline hover:text-yellow-400">YEX2025</a>.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
