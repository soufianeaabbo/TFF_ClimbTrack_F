'use client';


import Link from 'next/link';


//! Exemple d'implementation client pour ne pas faire basculer toutes les pages en rendu dynamique (ƒ).
//? Alternative possible : Mettre en place le prerendering (PPR) et définir la NavBar en composant Server
//? Documentation → https://nextjs.org/docs/app/glossary#partial-prerendering-ppr

export default function NavBar() {


    return (
        <nav className='flex flex-row gap-6'>
            <ul className='flex flex-row gap-1'>
                <li>
                    <Link href="/">Accueil</Link>
                </li>
                <li>
                    <Link href="/login">Se connectez</Link>
                </li>
                <li>
                    <Link href="/register">Crée un compte</Link>
                </li>
                <li>
                    <Link href="/creationSession">Créé une SESSION</Link>
                </li>
                <li>
                    <Link href="/fleur/v3">Fleurs (v3)</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
           
        </nav>
    );
}