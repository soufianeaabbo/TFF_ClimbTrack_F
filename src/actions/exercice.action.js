'use server';
import { redirect } from 'next/navigation';
import { getInfoUserAction } from './auth.action';


import { revalidatePath } from "next/cache";

export async function createExerciceAction(formData) {

    const data = Object.fromEntries(formData);
    console.log("DONNEES FORM :", data);


    if (!data.nom || !data.categorie) {
        return {
            error: 'Le formulaire est invalide'
        };
    }
    
        // Récupère l'utilisateur actuellement connecté
        const userConnected = await getInfoUserAction();

    if (!userConnected) {
        return {
            error: "Vous devez être connecté"
        };
    }



    // on met manuellement ce qu'on faisait dans le thunder avec le post etc
    const res = await fetch(`${process.env.URL_WEB_API}/exercice`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: userConnected.id,
            nom: data.nom,
            categorie: data.categorie,

        })
    });

    // Traitement de la requete
    // - En cas d'erreur
    if (!res.ok) {
        return {
            error: `Erreur lors de l'ajout de l'exercice a la bibliothèque`
        };
    }


revalidatePath('/exo');

    //? Redirection en fin de traitement
    redirect(`/exo`);
}


export async function endSessionRenfoAction(sessionId) {

    const res = await fetch(
        `${process.env.URL_WEB_API}/session-renfo/${sessionId}`,
        {
            method: 'PATCH'
        }
    );

    if (!res.ok) {
        return {
            error: "Erreur lors de la fin de la séance"
        };
    }

    revalidatePath('/exo');

    return {
        success: true
    };
}