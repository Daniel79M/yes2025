import React, { useState, useEffect } from 'react';
// import { User } from '@/entities/User';
// import { Inscription } from '@/entities/Inscription';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Shield, ShieldOff, Loader2, ServerCrash, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';

export default function AdminDashboard() {
  const [inscriptions, setInscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkAuthAndFetchData = async () => {
      try {
        const currentUser = await User.me();
        if (currentUser && currentUser.role === 'admin') {
          setIsAuthorized(true);
          const data = await Inscription.list('-created_date');
          setInscriptions(data);
        } else {
          setIsAuthorized(false);
        }
      } catch (err) {
        console.error("Authentication or data fetching error:", err);
        setError("Une erreur s'est produite. Veuillez réessayer plus tard.");
      } finally {
        setLoading(false);
      }
    };

    checkAuthAndFetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <Loader2 className="w-16 h-16 text-blue-800 animate-spin mb-4" />
        <p className="text-lg text-gray-700">Chargement en cours...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-4 text-center">
        <ServerCrash className="w-16 h-16 text-red-600 mb-4" />
        <h2 className="text-2xl font-bold text-red-800 mb-2">Erreur</h2>
        <p className="text-gray-700">{error}</p>
        <Link to={createPageUrl("Home")} className="mt-6">
          <Button variant="destructive">Retour à l'accueil</Button>
        </Link>
      </div>
    );
  }

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 p-4 text-center">
        <ShieldOff className="w-16 h-16 text-yellow-600 mb-4" />
        <h2 className="text-2xl font-bold text-yellow-800 mb-2">Accès Refusé</h2>
        <p className="text-gray-700">Vous n'avez pas les autorisations nécessaires pour accéder à cette page.</p>
        <Link to={createPageUrl("Home")} className="mt-6">
          <Button>Retour à l'accueil</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <Shield className="w-8 h-8 mr-3 text-blue-800" />
                Tableau de bord - Inscriptions
            </h1>
            <Link to={createPageUrl("Home")}>
                <Button variant="outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Retour au site
                </Button>
            </Link>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Liste des participants inscrits ({inscriptions.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Nom Complet</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Pays</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Participation</TableHead>
                    <TableHead>Date d'inscription</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {inscriptions.map((inscription) => (
                    <TableRow key={inscription.id}>
                        <TableCell className="font-medium">{inscription.prenom} {inscription.nom}</TableCell>
                        <TableCell>{inscription.email}</TableCell>
                        <TableCell>{inscription.pays}</TableCell>
                        <TableCell>{inscription.statut}</TableCell>
                        <TableCell>
                        <Badge variant={inscription.modeParticipation === 'presentiel' ? 'default' : 'secondary'}>
                            {inscription.modeParticipation}
                        </Badge>
                        </TableCell>
                        <TableCell>{new Date(inscription.created_date).toLocaleDateString()}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </div>
            {inscriptions.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <p>Aucune inscription pour le moment.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}