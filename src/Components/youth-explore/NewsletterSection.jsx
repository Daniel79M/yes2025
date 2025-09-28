
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Textarea is no longer used but kept in imports in case it's used elsewhere
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight, Users } from 'lucide-react'; // Some icons no longer used but kept in imports in case they're used elsewhere
import { motion } from 'framer-motion';

export default function NewsletterSection() {
  const [formData, setFormData] = useState({
    email: '',
    name: ''
    // organization and message fields are removed from the form
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ email: '', name: '' }); // Reset only the fields that exist
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <span className="text-yellow-400 font-medium text-lg">Pré-inscription</span>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ne manquez aucune actualité
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Inscrivez-vous dès maintenant et recevez toutes les informations exclusives 
            sur Youth Explore 2025.
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto">
          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-md">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Merci pour votre inscription !
                    </h4>
                    <p className="text-white/80">
                      Vous recevrez bientôt toutes les informations sur Youth Explore 2025.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                     <div className="grid md:grid-cols-2 gap-4">
                       <div>
                         <label className="block text-sm font-medium text-white/80 mb-2">
                           Nom complet *
                         </label>
                         <Input
                           name="name"
                           type="text"
                           required
                           value={formData.name}
                           onChange={handleChange}
                           placeholder="Votre nom et prénom"
                           className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
                         />
                       </div>
                       <div>
                         <label className="block text-sm font-medium text-white/80 mb-2">
                           Email *
                         </label>
                         <Input
                           name="email"
                           type="email"
                           required
                           value={formData.email}
                           onChange={handleChange}
                           placeholder="votre@email.com"
                           className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50"
                         />
                       </div>
                     </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-blue-900 font-bold py-3 text-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Je m'inscris
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
