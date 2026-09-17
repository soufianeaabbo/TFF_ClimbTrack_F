'use client';


import Link from 'next/link';


//! Exemple d'implementation client pour ne pas faire basculer toutes les pages en rendu dynamique (ƒ).
//? Alternative possible : Mettre en place le prerendering (PPR) et définir la NavBar en composant Server
//? Documentation → https://nextjs.org/docs/app/glossary#partial-prerendering-ppr

export default function NavBar() {


    return (


            <nav className='S p-5 bg-red-50 '>

                <ul className=' bg-green-500 h-200 justify-between flex flex-col'>
                    <li>
                        <Link href="/">Dashboard/Acceuil</Link>
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
                        <Link href="/ascension">Ajouter une Ascension</Link>
                    </li>
                    <li>
                        <Link href="/exo">Exo et renfo</Link>
                    </li>
                    <li>
                        <Link href="/">Calendrier</Link>
                    </li>
                </ul>

            </nav>
      
    );
}