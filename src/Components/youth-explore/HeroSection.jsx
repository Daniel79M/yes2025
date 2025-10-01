
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; // Keep Badge import for now, might be removed later if not used
import { Calendar, MapPin, Globe, Play, ArrowRight, Sparkles, Clock } from 'lucide-react'; // Keep Sparkles and Play for now, might be removed later if not used
import { motion } from 'framer-motion';
import { createPageUrl } from '@/utils';

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetDate = new Date('2025-11-27').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToInscription = () => {
    window.location.href = createPageUrl("Inscription");
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="Conference background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/80"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge (removed as per new design) */}
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent text-8xl">
              Youth Explore
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 text-white/90">
              YEX2025
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-4 font-medium"
          >
            La Conférence Internationale de la Jeunesse Africaine
          </motion.h2>

          {/* Theme */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-4xl mx-auto italic"
          >
            « Saisir les opportunités dans un monde en mutation : compétences, leadership et résilience »
          </motion.p>

          {/* Event Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="flex items-center space-x-2 text-white/90">
              <Calendar className="w-6 h-6 text-yellow-400" />
              <span className="font-semibold">27 novembre 2025</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <MapPin className="w-6 h-6 text-yellow-400" />
              <span className="font-semibold">UNIPOD,Lomé</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Clock className="w-6 h-6 text-yellow-400" />
              <span className="font-semibold">08:30 AM-6:00 PM</span>
            </div>
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto mb-12"
          >
            {[
              { label: 'Jours', value: timeLeft.days },
              { label: 'Heures', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Secondes', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">
                  {item.value || 0}
                </div>
                <div className="text-sm text-white/80">{item.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-blue-900 font-bold px-8 py-4 text-lg shadow-lg"
              onClick={scrollToInscription}
            >
              Je m'inscris maintenant
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            {/* Second button removed as per new design */}
          </motion.div>
          {/* Stats removed as per new design */}
        </div>
      </div>
      {/* Scroll Indicator removed as per new design */}
    </section>
  );
}
