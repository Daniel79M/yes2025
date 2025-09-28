import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const speakers = [
  {
    name: 'Amina Diallo',
    title: 'CEO, Innovatech Africa',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Kwame Nkrumah Jr.',
    title: 'Expert en Leadership Panafricain',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Fatima Zahra',
    title: 'Directrice, Fonds pour l\'Éducation',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'David Okoro',
    title: 'Fondateur, AgriFuture',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
  },
];

export default function IntervenantsSection() {
  return (
    <section id="intervenants" className="py-20 bg-white">
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
            <span className="text-blue-900 font-medium text-lg">Nos Intervenants</span>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Des experts
            <span className="block text-blue-800">pour vous inspirer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rencontrez des leaders d'opinion, des innovateurs et des pionniers qui façonnent l'avenir de l'Afrique.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-0 text-center">
                  <div className="relative">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-64 object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                       <h3 className="text-xl font-bold text-white">
                         {speaker.name}
                       </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-blue-800 font-semibold mb-4">{speaker.title}</p>
                    <div className="flex justify-center space-x-4">
                      <a href="#" className="text-gray-400 hover:text-blue-600">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-blue-600">
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}