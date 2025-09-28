
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Handshake, TrendingUp, Users, Mail, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PartnersSection() {
  const partnershipLevels = [
    {
      title: 'Partenaire Institutionnel',
      icon: Building,
      benefits: ['Logo en première page', 'Intervention en panel', 'Stand privilégié', 'Rapport post-événement'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Partenaire Corporate',
      icon: TrendingUp,
      benefits: ['Visibilité premium', 'Networking exclusif', 'Présentation d\'opportunités', 'Accès base participants'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Partenaire Technique',
      icon: Users,
      benefits: ['Animation d\'atelier', 'Partage d\'expertise', 'Recrutement de talents', 'Collaboration projets'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Partenaire Média',
      icon: Handshake,
      benefits: ['Couverture événement', 'Contenu exclusif', 'Interviews leaders', 'Visibilité croisée'],
      color: 'from-yellow-500 to-red-500'
    }
  ];

  const benefits = [
    'Associer votre image à un événement panafricain majeur',
    'Valoriser vos actions en faveur de la jeunesse et du développement',
    'Bénéficier d\'une visibilité auprès de centaines de jeunes, startups et décideurs',
    'Créer des synergies avec ONG, entreprises et institutions présentes'
  ];

  const handleContactPartnership = () => {
    window.location.href = 'mailto:partenariats@youthexplore.com?subject=Demande de partenariat Youth Explore 2025';
  };

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-blue-900 font-medium text-lg">Nos Partenaires</span>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Devenir partenaire de
            <span className="block text-blue-800">Youth Explore 2025</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rejoignez-nous en tant que partenaire et investissez dans l'avenir 
            de la jeunesse africaine tout en valorisant votre organisation.
          </p>
        </motion.div>

        {/* Partnership Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
            >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Pourquoi devenir partenaire ?
                </h3>
                {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
                ))}
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <Card className="bg-blue-800 text-white rounded-2xl shadow-2xl">
                    <CardContent className="p-10 text-center">
                        <h3 className="text-2xl font-bold mb-4">Prêt à rejoindre l'aventure ?</h3>
                        <p className="text-lg opacity-90 mb-6">
                            Contactez-nous pour découvrir les opportunités de partenariat et créer ensemble un impact durable.
                        </p>
                        <Button
                            onClick={handleContactPartnership}
                            size="lg"
                            className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-blue-900 font-bold"
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            Devenir partenaire
                        </Button>
                    </CardContent>
                </Card>
            </motion.div>
        </div>

        {/* Current Partners Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Ils nous font confiance
          </h3>
          <div className="bg-gray-100 rounded-2xl p-12 text-center">
             <div className="flex justify-center items-center gap-x-12 gap-y-8 flex-wrap">
                <p className="text-gray-500 italic">Affichage des logos de nos partenaires...</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
