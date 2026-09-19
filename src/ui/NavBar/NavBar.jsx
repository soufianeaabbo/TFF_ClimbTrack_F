'use client';

import { usePathname } from "next/navigation";

import {
    House,
    CalendarDays,
    Dumbbell,
    ChartNoAxesColumnIncreasing,
    Plus,
    Mountain,
    Timer,
    User
} from "lucide-react";

import Link from 'next/link';


//! Exemple d'implementation client pour ne pas faire basculer toutes les pages en rendu dynamique (ƒ).
//? Alternative possible : Mettre en place le prerendering (PPR) et définir la NavBar en composant Server
//? Documentation → https://nextjs.org/docs/app/glossary#partial-prerendering-ppr

export default function NavBar() {

    const pathname = usePathname();


    return (

        <nav className="p-5 w-72 border">

            <ul className="flex flex-col gap-5 w-full">

                <li>
                    <Link
                        href="/dashboard"
                        className={`flex items-center gap-4 w-full px-4 py-3 rounded-lg text-lg ${pathname === "/dashboard"
                                ? "bg-slate-100 text-slate-700"
                                : "text-gray-700"
                            }`}
                    >
                        <House size={22} className="text-slate-600" />
                        Tableau de bord
                    </Link>
                </li>

                <li>
                    <Link
                        href="/sessions"
                        className={`flex items-center gap-4 w-full px-4 py-3 rounded-lg text-lg ${pathname === "/sessions"
                                ? "bg-sky-100 text-sky-600"
                                : "text-gray-700"
                            }`}
                    >
                        <CalendarDays size={22} className="text-sky-500" />
                        Séances
                    </Link>
                </li>

                <li>
                    <Link
                        href="/exo"
                        className={`flex items-center gap-4 w-full px-4 py-3 rounded-lg text-lg ${pathname === "/exo"
                                ? "bg-amber-100 text-amber-600"
                                : "text-gray-700"
                            }`}
                    >
                        <Dumbbell size={22} className="text-amber-500" />
                        Exercices & Renfo
                    </Link>
                </li>

                <li>
                    <Link
                        href="/progression"
                        className={`flex items-center gap-4 w-full px-4 py-3 rounded-lg text-lg ${pathname === "/progression"
                                ? "bg-green-100 text-green-600"
                                : "text-gray-700"
                            }`}
                    >
                        <ChartNoAxesColumnIncreasing size={22} className="text-green-500" />
                        Progression
                    </Link>
                </li>

                <li>
                    <Link
                        href="/creationSession"
                        className={`flex items-center gap-4 w-full px-4 py-3 rounded-lg text-lg ${pathname === "/creationSession"
                                ? "bg-violet-100 text-violet-600"
                                : "text-gray-700"
                            }`}
                    >
                        <Plus size={22} className="text-violet-500" />
                        Nouvelle session
                    </Link>
                </li>

                {/* TEMPORAIRE */}
                <li>
                    <Link
                        href="/ascension"
                        className={`flex items-center gap-4 w-full px-4 py-3 rounded-lg text-lg ${pathname === "/ascension"
                                ? "bg-blue-100 text-blue-600"
                                : "text-gray-700"
                            }`}
                    >
                        <Mountain size={22} className="text-blue-500" />
                        Ajouter une ascension
                    </Link>
                </li>

                {/* TEMPORAIRE */}
                <li>
                    <Link
                        href="/sessionencours/3"
                        className={`flex items-center gap-4 w-full px-4 py-3 rounded-lg text-lg ${pathname.startsWith("/sessionencours")
                                ? "bg-red-100 text-red-500"
                                : "text-gray-700"
                            }`}
                    >
                        <Timer size={22} className="text-red-400" />
                        Session en cours
                    </Link>
                </li>

                <li>
                    <Link
                        href="/profil"
                        className={`flex items-center gap-4 w-full px-4 py-3 rounded-lg text-lg ${pathname === "/profil"
                                ? "bg-slate-100 text-slate-700"
                                : "text-gray-700"
                            }`}
                    >
                        <User size={22} className="text-slate-600" />
                        Mon profil
                    </Link>
                </li>

            </ul>

        </nav>
        // <nav className='S p-5 bg-red-50 '>

        //     <ul className=' bg-green-500 h-200 justify-between flex flex-col'>
        //         <li>
        //             <Link href="/">Dashboard/Acceuil</Link>
        //         </li>

        //         <li>
        //             <Link href="/login">Se connectez</Link>
        //         </li>

        //         <li>
        //             <Link href="/register">Crée un compte</Link>
        //         </li>

        //         <li>
        //             <Link href="/creationSession">Créé une SESSION</Link>
        //         </li>
        //         <li>
        //             <Link href="/ascension">Ajouter une Ascension</Link>
        //         </li>
        //         <li>
        //             <Link href="/exo">Exo et renfo</Link>
        //         </li>
        //         <li>
        //             <Link href="/">Calendrier</Link>
        //         </li>
        //     </ul>

        // </nav>

    );
}