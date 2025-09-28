
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Users, Globe, Mic, Lightbulb, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function KeyInfoSection() {
  const keyStats = [
    { icon: MapPin, label: 'Lieu', value: 'Lomé + diffusion en ligne', color: 'text-red-600', bg: 'bg-red-100' },
    { icon: Calendar, label: 'Date', value: '27 novembre 2025', color: 'text-blue-600', bg: 'bg-blue-100' },
    { icon: Clock, label: 'Durée', value: '1 journée complète', color: 'text-green-600', bg: 'bg-green-100' },
    { icon: Users, label: 'Participants', value: '200 jeunes & professionnels', color: 'text-purple-600', bg: 'bg-purple-100' },
    { icon: Globe, label: 'Pays représentés', value: '5 pays africains', color: 'text-yellow-600', bg: 'bg-yellow-100' },
    { icon: Mic, label: 'Intervenants', value: '6 experts inspirants', color: 'text-indigo-600', bg: 'bg-indigo-100' },
    { icon: Lightbulb, label: 'Panels', value: '3 sessions de haut niveau', color: 'text-teal-600', bg: 'bg-teal-100' },
    { icon: Target, label: 'Opportunités', value: '+500 partagées', color: 'text-pink-600', bg: 'bg-pink-100' }
  ];

  const expectedResults = [
    {
      number: '3',
      title: 'Panels de haut niveau',
      description: 'Sessions strategiques avec des leaders d\'opinion'
    },
    {
      number: '6',
      title: 'Intervenants inspirants',
      description: 'Experts, coachs et représentants d\'institutions'
    },
    {
      number: '500+',
      title: 'Opportunités partagées',
      description: 'Bourses, financements et programmes d\'incubation'
    }
  ];

  return (
    <section id="info" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
            <span className="text-blue-900 font-medium text-lg">Informations Clés</span>
            <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            L'essentiel à savoir sur
            <span className="block text-blue-800">Youth Explore 2025</span>
          </h2>
        </motion.div>

        {/* Key Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group bg-white">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${stat.bg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">
                    {stat.label}
                  </h3>
                  <p className="text-lg font-bold text-gray-900">
                    {stat.value}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Expected Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Résultats attendus
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {expectedResults.map((result, index) => (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
                  {result.number}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {result.title}
                </h4>
                <p className="text-gray-600">
                  {result.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-blue-800 to-indigo-900 text-white rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ensemble, faisons de Youth Explore 2025 un tournant pour la jeunesse africaine
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Ne manquez pas cette opportunité unique de façonner votre avenir et celui de l'Afrique.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-blue-900 font-bold"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Je réserve ma place
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
