import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import yex2025 from '@/assets/yex2025logo.jpg'
import {
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  GraduationCap,
  Briefcase,
  CheckCircle,
  ArrowLeft,
  Calendar,
  Globe,
  Sparkles,
  Users,
  Heart
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import axios from 'axios';

export default function Inscription() {
  const API_URL = "http://127.0.0.1:8000/api/yes2025.v1.0.0";
  const [formData, setFormData] = useState({
    // Informations personnelles
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    // dateNaissance: '',
    // genre: '',

    // Localisation
    pays: '',
    ville: '',

    // Informations professionnelles
    // statut: '',
    organisation: '',
    // poste: '',
    // secteurActivite: '',
    // experienceProfessionnelle: '',

    // // Formation
    // niveauEtudes: '',
    domainEtudes: '',
    // etablissement: '',

    // Participation à la conférence
    // modeParticipation: '',
    motivations: '',
    // attentes: [],
    thematiquesInteret: [],

    // Projets et initiatives
    // aUnProjet: false,
    // descriptionProjet: '',
    // chercheFinancement: false,
    // typeFinancement: [],

    // Networking
    // souhaiteReseautage: true,
    // domainesReseautage: [],

    // Informations supplémentaires
    // commentaires: '',
    newsletterAccord: false,
    conditionsAccord: false,
    // partageInfosAccord: false
  });

  const [errors, setErrors] = useState({});

  //  const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setErrors({}); // reset erreurs

  //   try {
  //     await axios.post("http://localhost:8000/api/inscription", formData);
  //     alert("Inscription réussie !");
  //   } catch (error) {
  //     if (error.response && error.response.status === 422) {
  //       setErrors(error.response.data.errors); // Laravel renvoie errors
  //     }
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      // Préparer les données attendues par ton backend
      const payload = {
        prenom: formData.prenom,
        nom: formData.nom,
        email: formData.email,
        telephone: formData.telephone,
        pays: formData.pays,
        ville: formData.ville,
        organisation: formData.organisation,
        domaines: formData.secteurActivite ? [formData.secteurActivite] : [], // backend attend un array
        motivations: formData.motivations,
        thematiquesInteret: formData.thematiquesInteret,
        newsletterAccord: formData.newsletterAccord,
        conditionsAccord: formData.conditionsAccord,
        password: "youth explore 2025",
      };

      const response = await axios.post(`${API_URL}/inscription`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.data);

      // Si succès → afficher confirmation
      setIsSubmitted(true);
    } catch (error) {
      console.error("Erreur API:", error.response?.data || error.message);
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors); // Laravel renvoie errors
      }
      // alert("Une erreur est survenue : " + (error.response?.data?.message || "Vérifiez vos champs."));
    } finally {
      setIsSubmitting(false);
    }
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 3;

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (name, value, checked) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
        ? [...(prev[name] || []), value]
        : (prev[name] || []).filter(item => item !== value)
    }));
  };

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Simulation d'envoi
  //   setTimeout(() => {
  //     setIsSubmitted(true);
  //     setIsSubmitting(false);
  //   }, 2000);
  // };

  const getStepTitle = (step) => {
    const titles = {
      1: 'Informations personnelles',
      2: 'Profil professionnel',
      3: 'Finalisation',
      // 4: 'Participation et projets',
      // 5: 'Finalisation'
    };
    return titles[step];
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full"
        >
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Inscription confirmée !
              </h2>
              <p className="text-gray-600 mb-6">
                Merci pour votre inscription à Youth Explore 2025. Vous recevrez un email de confirmation avec tous les détails.
              </p>
              <Link to={"/"}>
                <Button className="bg-blue-700 hover:bg-blue-900 text-white">
                  Retour à l'accueil
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-indigo-200 p-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-6">
          <Link to={createPageUrl("Home")}>
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
          </Link>
          <div className="flex items-center space-x-2">
            <img src={yex2025} alt="yex2025 logo" className='w-[200px]' />
            {/* <div className="w-10 h-10 bg-gradient-to-r from-blue-800 to-indigo-900 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </div>
            <span className="text-xl font-bold text-blue-900">Youth Explore</span>
            <Badge className="bg-yellow-400 text-blue-900 border-yellow-500">2025</Badge> */}
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">
            Inscription à la Conférence
          </h1>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-100">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span>27 novembre 2025 de </span>
              <span>8H30 à 16h30</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>UNIPOD- Université de Lomé </span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Étape {currentStep} sur {totalSteps}</span>
            <span className="text-sm text-gray-600">{Math.round((currentStep / totalSteps) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-2 font-medium">
            {getStepTitle(currentStep)}
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto">
        <Card className="border-0 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white rounded-t-lg w-full h-[50px] flex items-center">
            <CardTitle className="flex items-center space-x-2">
              {currentStep === 1 && <User className="w-7 h-7" />}
              {currentStep === 2 && <Building className="w-5 h-5" />}
              {currentStep === 3 && <CheckCircle className="w-5 h-5" />}
              {/* {currentStep === 4 && <Heart className="w-5 h-5" />}
              {currentStep === 5 && <GraduationCap className="w-5 h-5" />} */}
              <span>{getStepTitle(currentStep)}</span>
            </CardTitle>
          </CardHeader>

          {errors.prenom && (
            <span style={{ color: "red" }}>{errors.prenom[0]}</span>
          )}
          {errors.nom && (
            <span style={{ color: "red" }}>{errors.nom[0]}</span>
          )}
          {errors.email && (
            <span style={{ color: "red" }}>{errors.email[0]}</span>
          )}
          {errors.telephone && (
            <span style={{ color: "red" }}>{errors.telephone[0]}</span>
          )}
          {errors.pays && (
            <span style={{ color: "red" }}>{errors.pays[0]}</span>
          )}
          {errors.ville && (
            <span style={{ color: "red" }}>{errors.ville[0]}</span>
          )}
          {errors && (
            <span style={{ color: "red" }}>{errors[0]}</span>
          )}
          {errors.prenom && (
            <span style={{ color: "red" }}>{errors.prenom[0]}</span>
          )}
          {errors.prenom && (
            <span style={{ color: "red" }}>{errors.prenom[0]}</span>
          )}
          {errors.prenom && (
            <span style={{ color: "red" }}>{errors.prenom[0]}</span>
          )}

          <CardContent className="p-8">
            <form onSubmit={handleSubmit}>
              {/* Étape 1: Informations personnelles */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="prenom">Prénoms *</Label>

                      <Input
                        id="prenom"
                        value={formData.prenom}
                        onChange={(e) => handleInputChange('prenom', e.target.value)}
                        placeholder="Votre prénom"
                        required
                      />
                      {errors.prenom && (
                        <span style={{ color: "red" }}>{errors.prenom[0]}</span>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="nom">Nom *</Label>
                      <Input
                        id="nom"
                        value={formData.nom}
                        onChange={(e) => handleInputChange('nom', e.target.value)}
                        placeholder="Votre nom de famille"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="telephone">Téléphone *</Label>
                      <Input
                        id="telephone"
                        value={formData.telephone}
                        onChange={(e) => handleInputChange('telephone', e.target.value)}
                        placeholder="+XXX XX XX XX XX"
                        required
                      />
                    </div>
                  </div>

                  {/* <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="dateNaissance">Date de naissance</Label>
                      <Input
                        id="dateNaissance"
                        type="date"
                        value={formData.dateNaissance}
                        onChange={(e) => handleInputChange('dateNaissance', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label>Genre</Label>
                      <Select onValueChange={(value) => handleInputChange('genre', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="homme">Homme</SelectItem>
                          <SelectItem value="femme">Femme</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div> */}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="pays">Pays de résidence *</Label>
                      <Select onValueChange={(value) => handleInputChange('pays', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez votre pays" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="benin">Bénin</SelectItem>
                          <SelectItem value="burkina">Burkina Faso</SelectItem>
                          <SelectItem value="cameroun">Cameroun</SelectItem>
                          <SelectItem value="togo">Togo</SelectItem>
                          <SelectItem value="senegal">Sénégal</SelectItem>
                          <SelectItem value="cote-ivoire">Côte d'Ivoire</SelectItem>
                          <SelectItem value="mali">Mali</SelectItem>
                          <SelectItem value="niger">Niger</SelectItem>
                          <SelectItem value="guinée">Guinée</SelectItem>
                          <SelectItem value="madagascar">Madagascar</SelectItem>
                          <SelectItem value="république démocratique du Congo (RDC)">République démocratique du Congo (RDC)</SelectItem>
                          <SelectItem value="gabon">Gabon</SelectItem>
                          <SelectItem value="tchad">Tchad</SelectItem>
                          <SelectItem value="république du Congo">République du Congo</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="ville">Ville *</Label>
                      <Input
                        id="ville"
                        value={formData.ville}
                        onChange={(e) => handleInputChange('ville', e.target.value)}
                        placeholder="Votre ville"
                        required
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Étape 2: Profil professionnel */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* <div>
                      <Label>Statut professionnel *</Label>
                      <Select onValueChange={(value) => handleInputChange('statut', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Votre statut actuel" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="etudiant">Étudiant</SelectItem>
                          <SelectItem value="employe">Employé</SelectItem>
                          <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                          <SelectItem value="freelance">Freelance</SelectItem>
                          <SelectItem value="chercheur">Chercheur</SelectItem>
                          <SelectItem value="demandeur-emploi">Demandeur d'emploi</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div> */}

                    <div>
                      <Label>Domaine d'activité *</Label>
                      <Select onValueChange={(value) => handleInputChange('secteurActivite', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez votre secteur" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem className="hover:bg-blue-700" value="technologie">Technologie & Numérique</SelectItem>
                          <SelectItem value="finance">Finance & Banque</SelectItem>
                          <SelectItem value="agriculture">Agriculture & Agrobusiness</SelectItem>
                          <SelectItem value="education">Éducation & Formation</SelectItem>
                          <SelectItem value="sante">Santé & Médical</SelectItem>
                          <SelectItem value="energie">Énergie & Environnement</SelectItem>
                          <SelectItem value="industrie">Industrie & Manufacturing</SelectItem>
                          <SelectItem value="commerce">Commerce & Retail</SelectItem>
                          <SelectItem value="media">Médias & Communication</SelectItem>
                          <SelectItem value="ong">ONG & Développement</SelectItem>
                          <SelectItem value="gouvernement">Secteur Public</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="organisation">Organisation / Entreprise</Label>
                      <Input
                        id="organisation"
                        value={formData.organisation}
                        onChange={(e) => handleInputChange('organisation', e.target.value)}
                        placeholder="Nom de votre organisation"
                      />
                    </div>
                    {/* <div>
                      <Label htmlFor="poste">Poste / Fonction</Label>
                      <Input
                        id="poste"
                        value={formData.poste}
                        onChange={(e) => handleInputChange('poste', e.target.value)}
                        placeholder="Votre fonction actuelle"
                      />
                    </div> */}
                  </div>

                  <div>
                    <Label className="mb-1" htmlFor="motivations">Motivations pour participer *</Label>
                    <Textarea
                      id="motivations"
                      value={formData.motivations}
                      onChange={(e) => handleInputChange('motivations', e.target.value)}
                      placeholder="Expliquez pourquoi vous souhaitez participer à Youth Explore 2025..."
                      rows={4}
                      required
                    />
                  </div>
                  {/* <div>
                    <Label>Expérience professionnelle</Label>
                    <RadioGroup 
                      value={formData.experienceProfessionnelle}
                      onValueChange={(value) => handleInputChange('experienceProfessionnelle', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="debutant" id="debutant" />
                        <Label htmlFor="debutant">Débutant (0-2 ans)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="intermediaire" id="intermediaire" />
                        <Label htmlFor="intermediaire">Intermédiaire (3-5 ans)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="confirme" id="confirme" />
                        <Label htmlFor="confirme">Confirmé (6-10 ans)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="expert" id="expert" />
                        <Label htmlFor="expert">Expert (10+ ans)</Label>
                      </div>
                    </RadioGroup>
                  </div> */}
                </motion.div>
              )}

              {/* Étape 3: Formation et éducation */}
              {/* {currentStep === 5 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <Label>Niveau d'études</Label>
                    <Select onValueChange={(value) => handleInputChange('niveauEtudes', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Votre niveau d'études" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bac">Baccalauréat</SelectItem>
                        <SelectItem value="bac-2">Bac+2 (BTS, DUT)</SelectItem>
                        <SelectItem value="bac-3">Bac+3 (Licence)</SelectItem>
                        <SelectItem value="bac-5">Bac+5 (Master)</SelectItem>
                        <SelectItem value="doctorat">Doctorat</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="domainEtudes">Domaine d'études</Label>
                      <Input
                        id="domainEtudes"
                        value={formData.domainEtudes}
                        onChange={(e) => handleInputChange('domainEtudes', e.target.value)}
                        placeholder="Ex: Informatique, Économie, etc."
                      />
                    </div>
                    <div>
                      <Label htmlFor="etablissement">Établissement</Label>
                      <Input
                        id="etablissement"
                        value={formData.etablissement}
                        onChange={(e) => handleInputChange('etablissement', e.target.value)}
                        placeholder="Nom de votre établissement"
                      />
                    </div>
                  </div>
                </motion.div>
              )} */}

              {/* Étape 4: Participation et projets */}
              {/* {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <Label>Mode de participation *</Label>
                    <RadioGroup 
                      value={formData.modeParticipation}
                      onValueChange={(value) => handleInputChange('modeParticipation', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="presentiel" id="presentiel" />
                        <Label htmlFor="presentiel">Présentiel (Lomé)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="virtuel" id="virtuel" />
                        <Label htmlFor="virtuel">Virtuel (en ligne)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="motivations">Motivations pour participer *</Label>
                    <Textarea
                      id="motivations"
                      value={formData.motivations}
                      onChange={(e) => handleInputChange('motivations', e.target.value)}
                      placeholder="Expliquez pourquoi vous souhaitez participer à Youth Explore 2025..."
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <Label>Thématiques qui vous intéressent le plus (sélection multiple)</Label>
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      {[
                        'Emploi et entrepreneuriat',
                        'Leadership et gouvernance',
                        'Éducation et innovation',
                        'Culture et diaspora',
                        'Financement et investissement',
                        'Technologie et numérique'
                      ].map((thematique) => (
                        <div key={thematique} className="flex items-center space-x-2">
                          <Checkbox
                            id={thematique}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange('thematiquesInteret', thematique, checked)
                            }
                          />
                          <Label htmlFor={thematique}>{thematique}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Checkbox
                        id="aUnProjet"
                        checked={formData.aUnProjet}
                        onCheckedChange={(checked) => handleInputChange('aUnProjet', checked)}
                      />
                      <Label htmlFor="aUnProjet">J'ai un projet ou une initiative</Label>
                    </div>

                    {formData.aUnProjet && (
                      <div className="space-y-4 ml-6">
                        <div>
                          <Label htmlFor="descriptionProjet">Description du projet</Label>
                          <Textarea
                            id="descriptionProjet"
                            value={formData.descriptionProjet}
                            onChange={(e) => handleInputChange('descriptionProjet', e.target.value)}
                            placeholder="Décrivez brièvement votre projet..."
                            rows={3}
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="chercheFinancement"
                            checked={formData.chercheFinancement}
                            onCheckedChange={(checked) => handleInputChange('chercheFinancement', checked)}
                          />
                          <Label htmlFor="chercheFinancement">Je cherche un financement</Label>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )} */}

              {/* Étape 5: Finalisation */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    {/* <Label>Domaines pour le networking (sélection multiple)</Label> */}
                    <Label>Thématiques d'intérêt * (sélectionnez une ou plusieurs)</Label>
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      {[
                        'Emploi et entrepreneuriat des jeunes',
                        'Éducation, innovation et transformation numérique',
                        'Culture, diaspora et mobilité internationale',
                        'Leadership et gouvernance inclusive',
                        'Développement durable et climat',
                        // 'Ressources humaines',
                        // 'Développement durable',
                        // 'Éducation',
                        // 'Santé'
                      ].map((domaine) => (
                        <div key={domaine} className="flex items-center space-x-2">
                          <Checkbox
                            id={domaine}
                            onCheckedChange={(checked) =>
                              handleCheckboxChange('thematiquesInteret', domaine, checked)
                            }
                          />
                          <Label htmlFor={domaine}>{domaine}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* <div>
                    <Label htmlFor="commentaires">Commentaires ou questions</Label>
                    <Textarea
                      id="commentaires"
                      value={formData.commentaires}
                      onChange={(e) => handleInputChange('commentaires', e.target.value)}
                      placeholder="Avez-vous des questions ou des commentaires particuliers ?"
                      rows={4}
                    />
                  </div> */}

                  <div className="border-t pt-6 space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="conditionsAccord"
                        checked={formData.conditionsAccord}
                        onCheckedChange={(checked) => handleInputChange('conditionsAccord', checked)}
                        required
                      />
                      <Label htmlFor="conditionsAccord" className="text-sm">
                        J'accepte les <span className="text-blue-600 underline cursor-pointer">conditions d'utilisation</span> et la <span className="text-blue-600 underline cursor-pointer">politique de confidentialité</span> *
                      </Label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="newsletterAccord"
                        checked={formData.newsletterAccord}
                        onCheckedChange={(checked) => handleInputChange('newsletterAccord', checked)}
                      />
                      <Label htmlFor="newsletterAccord" className="text-sm">
                        Je souhaite recevoir la newsletter et les informations sur les prochains événements
                      </Label>
                    </div>

                    {/* <div className="flex items-start space-x-2">
                      <Checkbox
                        id="partageInfosAccord"
                        checked={formData.partageInfosAccord}
                        onCheckedChange={(checked) => handleInputChange('partageInfosAccord', checked)}
                      />
                      <Label htmlFor="partageInfosAccord" className="text-sm">
                        J'accepte que mes informations soient partagées avec les partenaires pour des opportunités pertinentes
                      </Label>
                    </div> */}
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrevStep}
                  disabled={currentStep === 1}
                  className={currentStep === 1 ? 'invisible' : 'bg-blue-800 hover:bg-blue-900 text-white'}
                >
                  Précédent
                </Button>

                <div className="text-sm text-gray-500">
                  * Champs obligatoires
                </div>

                {currentStep < totalSteps ? (
                  <Button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-blue-800 hover:bg-blue-900 text-white"
                  >
                    Suivant
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={!formData.conditionsAccord || isSubmitting}
                    className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-blue-900 font-bold"
                  >
                    {isSubmitting ? 'Inscription en cours...' : 'Finaliser mon inscription'}
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}