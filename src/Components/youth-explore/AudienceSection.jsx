import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, GraduationCap, Users, Briefcase, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function AudienceSection() {
  const audiences = [
    {
      icon: Rocket,
      title: 'Jeunes entrepreneurs & porteurs de projets',
      description: 'Développez vos idées et trouvez les ressources pour les concrétiser',
      color: 'text-yellow-600',
      bg: 'bg-yellow-100'
    },
    {
      icon: GraduationCap,
      title: 'Étudiants & chercheurs',
      description: 'Découvrez les opportunités académiques et professionnelles',
      color: 'text-blue-600',
      bg: 'bg-blue-100'
    },
    {
      icon: Users,
      title: 'Associations & organisations de jeunesse',
      description: 'Renforcez vos capacités et élargissez votre impact',
      color: 'text-green-600',
      bg: 'bg-green-100'
    },
    {
      icon: Briefcase,
      title: 'Décideurs publics & privés',
      description: 'Investissez dans l\'avenir et créez des synergies durables',
      color: 'text-purple-600',
      bg: 'bg-purple-100'
    },
    {
      icon: Building,
      title: 'Partenaires techniques & financiers',
      description: 'Connectez-vous avec les talents de demain',
      color: 'text-indigo-600',
      bg: 'bg-indigo-100'
    }
  ];

  return (
    <section id="audience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-blue-900 font-medium text-lg">Pour Qui ?</span>
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Une conférence pour
            <span className="block text-blue-800">tous les acteurs du changement</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Que vous soyez étudiant, entrepreneur, décideur ou partenaire, 
            cette conférence est votre passerelle vers l'avenir.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group bg-gray-50/50">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${audience.bg} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <audience.icon className={`w-8 h-8 ${audience.color}`} />
                  </div>
                  <h3 className="text-md font-bold text-gray-900">
                    {audience.title}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-blue-800 text-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">
            Vous vous reconnaissez dans un de ces profils ?
          </h3>
          <p className="text-lg opacity-90 mb-6">
            Rejoignez-nous pour une expérience transformatrice qui boostera votre carrière 
            et élargira vos horizons.
          </p>
          <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-blue-900 font-bold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Réserver ma place
            </Button>
        </motion.div>
      </div>
    </section>
  );
}