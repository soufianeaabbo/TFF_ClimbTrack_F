'use server';
// Permet de rediriger l'utilisateur après une inscription réussie
import { redirect } from 'next/navigation';

export async function authRegisterAction(prevState, formData) {

    const data = Object.fromEntries(formData);


    if (!data.prenom || !data.nom || !data.email || !data.mdp) {
        return {
            error: 'Le formulaire est invalide'
        };
    }



    // on met manuellement ce qu'on faisait dans le thunder avec le post etc
    const res = await fetch(`${process.env.URL_WEB_API}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prenom: data.prenom,
            nom: data.nom,
            email: data.email,
            mdp: data.mdp
        })
    });


      // Traitement de la requete
    // - En cas d'erreur
    if (!res.ok) {
        return {
            error: 'Erreur lors de la création du compte'
        };
    }



    //? Redirection en fin de traitement
    redirect('/login');
}