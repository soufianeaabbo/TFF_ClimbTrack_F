'use server';
// Permet de rediriger l'utilisateur après une inscription réussie
import { redirect } from 'next/navigation';
import { getInfoUserAction } from './auth.action';

export async function ClimbSessionformAction(prevState, formData) {

    const data = Object.fromEntries(formData);
    console.log("DONNEES FORM :", data);


    if (!data.date || !data.lieu || !data.heure_debut) {
        return {
            error: 'Le formulaire est invalide'
        };
    }


    // Récupère l'utilisateur actuellement connecté
    const userConnected = await getInfoUserAction();


    // on met manuellement ce qu'on faisait dans le thunder avec le post etc
    const res = await fetch(`${process.env.URL_WEB_API}/session`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: userConnected.id,
            date: data.date,
            lieu: data.lieu,
            heure_debut: data.heure_debut,
            duree: data.duree,
            partenaire: data.partenaire,
            objectif: data.objectif,
            notes: data.notes,
        })
    });


    // Traitement de la requete
    // - En cas d'erreur
    if (!res.ok) {
        return {
            error: 'Erreur lors de la creation de la session'
        };
    }


    // Récupère la session que le backend vient de créer
    const sessionCreated = await res.json();

    console.log("SESSION CRÉÉE :", sessionCreated);



    //? Redirection en fin de traitement
    redirect(`/sessionencours/${sessionCreated.id}`);
}