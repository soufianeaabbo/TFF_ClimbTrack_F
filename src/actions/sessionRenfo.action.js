'use server';

import { getInfoUserAction } from './auth.action';


// Crée une nouvelle séance de renforcement
// puis ajoute tous les exercices sélectionnés dans cette séance
export async function createSessionRenfoAction(selectedExercices) {

    // Récupère l'utilisateur actuellement connecté
    const userConnected = await getInfoUserAction();

    if (!userConnected) {
        return {
            error: "Vous devez être connecté"
        };
    }


    // Vérifie qu'au moins un exercice a été sélectionné
    if (!selectedExercices || selectedExercices.length === 0) {
        return {
            error: "Sélectionnez au moins un exercice"
        };
    }


    // 1. Crée la séance de renforcement
    const sessionResponse = await fetch(
        `${process.env.URL_WEB_API}/session-renfo`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: userConnected.id
            })
        }
    );


    if (!sessionResponse.ok) {
        return {
            error: "Erreur lors de la création de la séance"
        };
    }


    // Récupère la séance créée
    const sessionRenfo = await sessionResponse.json();


    // 2. Pour chaque exercice sélectionné,
    // crée un ExerciceSession lié à cette même SessionRenfo
    // pour chaque exercice que l’utilisateur a coché, fais le POST qui crée son ExerciceSession
    for (const exerciceId of selectedExercices) {

        const exerciceResponse = await fetch(
            `${process.env.URL_WEB_API}/exercice-session`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    session_renfo_id: sessionRenfo.id,
                    exercice_id: exerciceId,

                    // Valeurs temporaires pour démarrer la séance
                    nombre_series: 1,
                    objectif_reps: 1
                })
            }
        );


        if (!exerciceResponse.ok) {
            return {
                error: "Erreur lors de l'ajout des exercices à la séance"
            };
        }
    }


    return {
        success: true,
        sessionId: sessionRenfo.id
    };
}