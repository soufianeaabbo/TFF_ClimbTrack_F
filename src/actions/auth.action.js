'use server';
// Permet de rediriger l'utilisateur après une inscription réussie
import { redirect } from 'next/navigation';
// Permet de gérer les cookies côté serveur
import { cookies } from 'next/headers';

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


export async function authLoginAction(prevState, formData) {

    const data = Object.fromEntries(formData);


    if (!data.mdp || !data.email) {
        return {
            error: 'Le formulaire est invalide'
        };
    }



    // on met manuellement ce qu'on faisait dans le thunder avec le post etc
    const res = await fetch(`${process.env.URL_WEB_API}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: data.email,
            mdp: data.mdp
        })
    });


    // Traitement de la requete
    // - En cas d'erreur
    if (!res.ok) {
        return {
            error: 'Email ou mot de passe incorrect'
        };
    }


    // Récupère le token envoyé par le back et le stocke dans un cookie pour garder l'utilisateur connecté

    // Récupère la réponse du backend
    // Elle contient { token, user }
    const loginData = await res.json();

    // Récupère le gestionnaire de cookies de Next.js
    const cookieStore = await cookies();

    // Enregistre le token JWT dans un cookie
    cookieStore.set('token', loginData.token, {
        httpOnly: true,
        sameSite: 'lax',
        path: '/'
    });

    // Récupère le token envoyé par le back et le stocke dans un cookie pour garder l'utilisateur connecté



    //? Redirection en fin de traitement
    redirect('/');
}

export async function authLogoutAction() {

    // Récupère le gestionnaire de cookies de Next.js
    const cookieStore = await cookies();

    // Supprime le cookie qui contient notre JWT
    // Sans ce token, le site ne peut plus identifier l'utilisateur
    cookieStore.delete('token');

    // Une fois déconnecté, renvoie vers la page de connexion
    redirect('/login');
}


export async function getInfoUserAction() {

    // Récupère les cookies
    const cookieStore = await cookies();

    // Récupère le cookie qui contient notre JWT
    const token = cookieStore.get('token');

    // Si aucun token n'existe, aucun utilisateur n'est connecté
    if (!token) {
        return null;
    }

    const res = await fetch(`${process.env.URL_WEB_API}/auth/infoUser`, {
        method: 'GET',
        headers: {
            // Comme dans Thunder Client : "Bearer + token"
            'Authorization': `Bearer ${token.value}`
        }
    });

    // Transforme la réponse du backend en objet JavaScript
    const userConnected = await res.json();

    // Renvoie les infos de l'utilisateur connecté
    return userConnected;




}