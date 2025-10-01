import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Zap, Target, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
// import { why_img } from "../../src/assets/3_Mawuli.png";
import whyimg from '@/assets/IMG_5991-300x200.jpg';

export default function WhySection() {
  const scrollToThematics = () => {
    document.getElementById('thematics')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="why" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-blue-900 font-medium text-lg">C'est quoi YEX2025</span>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Un catalyseur pour
            <span className="block text-blue-800">la jeunesse africaine</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              C'est une Conférence Internationale de la Jeunesse Africaine à l'endroit des jeunes, décideurs, startups, chercheurs, ONG et institutions qui se rassemblent pour apprendre, échanger et construire l'avenir de l'Afrique.
              {/* Avec plus de 60 % de sa population âgée de moins de 25 ans, l’Afrique détient la plus grande force démographique au monde.
              Cependant, face au chômage, au sous-emploi et au manque d’opportunités, cette jeunesse a besoin d'outils concrets pour réussir. */}
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Youth Explore 2025 est la réponse à ces défis. Notre mission est de fournir :
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Zap className="w-4 h-4 text-blue-900" />
                </div>
                <span className="text-gray-800">Des <span className="font-bold">compétences pratiques</span> adaptées au marché moderne.</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Target className="w-4 h-4 text-blue-900" />
                </div>
                <span className="text-gray-800">Des <span className="font-bold">informations claires</span> sur les opportunités (bourses, financements, incubateurs).</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Users className="w-4 h-4 text-blue-900" />
                </div>
                <span className="text-gray-800">Des <span className="font-bold">réseaux solides</span> pour réussir et s’intégrer durablement.</span>
              </li>
            </ul>
            <Button
              onClick={scrollToThematics}
              size="lg"
              className="bg-blue-800 hover:bg-blue-900 text-white"
            >
              Découvrir les thématiques <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[400px]"
          >
            {/* <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Jeunes professionnels africains"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
            /> */}
            <img 
              src={whyimg}
              alt="Jeunes professionnels africains"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}