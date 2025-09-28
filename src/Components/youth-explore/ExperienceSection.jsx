import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Lightbulb, Target, Sparkles, Heart, Network, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  const experiences = [
    {
      icon: Star,
      emoji: '🌟',
      title: 'Inspirez-vous',
      description: 'Découvrez les success stories de jeunes africains qui transforment leurs communautés.',
      gradient: 'from-yellow-400 to-amber-500',
      bgGradient: 'from-yellow-50 to-amber-50'
    },
    {
      icon: Users,
      emoji: '🤝',
      title: 'Connectez-vous',
      description: 'Nouez des partenariats stratégiques avec ONG, entreprises, incubateurs et institutions.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Lightbulb,
      emoji: '💡',
      title: 'Apprenez & agissez',
      description: 'Participez à des ateliers pratiques sur l\'entrepreneuriat, l\'emploi, le numérique et le leadership.',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      icon: Target,
      emoji: '🌍',
      title: 'Saisissez des opportunités',
      description: 'Accédez à des programmes de bourses, d\'incubation et de financement.',
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-50 to-purple-50'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            <span className="text-blue-900 font-medium text-lg">Pourquoi Participer ?</span>
            <Sparkles className="w-6 h-6 text-yellow-500" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Une expérience
            <span className="block text-blue-800">incontournable</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une journée intensive d'apprentissage, de networking et de découvertes 
            pour façonner votre avenir professionnel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className={`h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${experience.bgGradient} hover:-translate-y-2 group`}>
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${experience.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                    <div className="text-3xl">{experience.emoji}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {experience.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {experience.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}