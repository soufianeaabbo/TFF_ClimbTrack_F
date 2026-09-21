'use server';

import { redirect } from 'next/navigation';

export async function createAscensionAction(formData) {

    // Transforme les données du formulaire en objet JavaScript
    const data = Object.fromEntries(formData);

    console.log("ASCENSION :", data);


    // Si l'ascension est réussie au premier essai → Flash
    // Sinon → Projet
    const typeRealisation =
        data.nombre_essais === "1" ? "flash" : "projet";


    // Envoie les informations de l'ascension au backend
    const res = await fetch(`${process.env.URL_WEB_API}/ascension`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        // Transforme les données en JSON pour les envoyer au backend
        body: JSON.stringify({
            session_id: data.session_id,
            type: data.type,
            nom: data.nom,
            cotation: data.cotation,
            secteur: data.secteur,
            couleur: data.couleur,
            resultat: data.resultat,
            nombre_essais: data.nombre_essais,
            type_realisation: typeRealisation,
            styles: data.styles,
            commentaire: data.commentaire
        })
    });

    // Si l'enregistrement de l'ascension a échoué
    if (!res.ok) {
        return {
            error: "Erreur lors de l'ajout de l'ascension"
        };
    }

    // retourne vers la session à laquelle elle appartient
    redirect(`/sessionencours/${data.session_id}`);


}