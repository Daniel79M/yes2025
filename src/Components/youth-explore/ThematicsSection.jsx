
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Crown, Laptop, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThematicsSection() {
  const thematics = [
    {
      icon: Briefcase,
      title: 'Emploi et entrepreneuriat des jeunes',
      description: 'Encourager l\'esprit entrepreneurial et développer l\'employabilité pour créer des opportunités durables.',
      gradient: 'from-emerald-500 to-teal-500',
      pattern: '🚀'
    },
    {
      icon: Crown,
      title: 'Leadership et gouvernance inclusive',
      description: 'Former les futurs leaders et promouvoir la transparence pour une gouvernance participative.',
      gradient: 'from-purple-500 to-violet-500',
      pattern: '👑'
    },
    {
      icon: Laptop,
      title: 'Éducation, innovation et numérique',
      description: 'Révolutionner l\'éducation et stimuler l\'innovation technologique pour l\'avenir.',
      gradient: 'from-blue-500 to-indigo-500',
      pattern: '💻'
    },
    {
      icon: Globe,
      title: 'Culture, diaspora et mobilité internationale',
      description: 'Valoriser l\'identité africaine et ouvrir des portes à l\'international.',
      gradient: 'from-yellow-500 to-pink-500', // Changed from orange-500
      pattern: '🌍'
    }
  ];

  return (
    <section id="thematics" className="py-20 bg-gray-50"> {/* Changed bg-white to bg-gray-50 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-blue-800 rounded-full"></div> {/* Changed bg-blue-500 to bg-blue-800 */}
            <span className="text-blue-900 font-medium text-lg">Nos Thématiques</span> {/* Changed text and color */}
            <div className="w-3 h-3 bg-blue-800 rounded-full"></div> {/* Changed bg-blue-500 to bg-blue-800 */}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Des axes stratégiques pour {/* Changed text */}
            <span className="block text-blue-800">bâtir un futur solide</span> {/* Changed text-blue-600 to text-blue-800 */}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chaque thématique est conçue pour vous donner des outils concrets 
            et des perspectives d'avenir dans votre domaine.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {thematics.map((theme, index) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden bg-white"> {/* Added border and bg-white */}
                <div className={`h-2 bg-gradient-to-r ${theme.gradient}`}></div>
                <CardContent className="p-8 relative">
                  <div className="absolute top-4 right-4 text-4xl opacity-10 group-hover:opacity-20 transition-opacity">
                    {theme.pattern}
                  </div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${theme.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <theme.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors"> {/* Changed group-hover:text-blue-600 to group-hover:text-blue-800 */}
                    {theme.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {theme.description}
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
