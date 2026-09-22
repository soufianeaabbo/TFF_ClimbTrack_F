'use client';

// Récupère les infos de l'utilisateur connecté
import { authLogoutAction } from '@/actions/auth.action';
import { getInfoUserAction } from "@/actions/auth.action";
import { usePathname } from "next/navigation";

import {
    House,
    CalendarDays,
    Dumbbell,
    ChartNoAxesColumnIncreasing,
    Plus,
    Mountain,
    Timer,
    User,
    LogOut,
    LogIn
} from "lucide-react";

import Link from 'next/link';


//! Exemple d'implementation client pour ne pas faire basculer toutes les pages en rendu dynamique (ƒ).
//? Alternative possible : Mettre en place le prerendering (PPR) et définir la NavBar en composant Server
//? Documentation → https://nextjs.org/docs/app/glossary#partial-prerendering-ppr

export default function NavBar({ userConnected, currentSession }) {

    const pathname = usePathname();



    return (
        <nav className="w-72 min-h-screen border-r border-slate-200 bg-white p-4 flex flex-col">
            {/* LOGO */}
            <Link
                href="/"
                className="flex items-center gap-3 px-3 pt-3 mb-10 group"
            >
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg group-hover:bg-slate-700 transition-colors">
                    C
                </div>

                <div>
                    <p className="font-bold text-xl text-slate-900">
                        ClimbTrack
                    </p>

                    <p className="text-xs text-slate-400">
                        Suis ta progression
                    </p>
                </div>
            </Link>


            {/* NAVIGATION */}
            <ul className="flex flex-col gap-2 w-full">

                {/* DASHBOARD */}
                <li>
                    <Link
                        href="/dashboard"
                        className={`flex items-center gap-4 w-full px-4 py-3 rounded-xl text-lg transition-colors
                        ${pathname === "/dashboard"
                                ? "bg-slate-100 text-slate-700"
                                : "text-gray-700 hover:bg-slate-100"
                            }`}
                    >
                        <House
                            size={22}
                            className="text-slate-600"
                        />

                        Tableau de bord
                    </Link>
                </li>


                {/* SESSIONS */}
                <li>
                    <Link
                        href="/sessions"
                        className={`flex items-center gap-4 w-full px-4 py-3 rounded-xl text-lg transition-colors
                        ${pathname === "/sessions"
                                ? "bg-sky-100 text-sky-600"
                                : "text-gray-700 hover:bg-sky-50 hover:text-sky-600"
                            }`}
                    >
                        <CalendarDays
                            size={22}
                            className="text-sky-500"
                        />

                        Sessions
                    </Link>
                </li>


                {/* EXERCICES */}
                <li>
                    <Link
                        href="/exo"
                        className={`flex items-center gap-4 w-full px-4 py-3 rounded-xl text-lg transition-colors
                        ${pathname === "/exo"
                                ? "bg-amber-100 text-amber-600"
                                : "text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                            }`}
                    >
                        <Dumbbell
                            size={22}
                            className="text-amber-500"
                        />

                        Exercices & Renfo
                    </Link>
                </li>


                {/* PROGRESSION */}
                <li>
                    <Link
                        href="/progression"
                        className={`flex items-center gap-4 w-full px-4 py-3 rounded-xl text-lg transition-colors
                        ${pathname === "/progression"
                                ? "bg-green-100 text-green-600"
                                : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                            }`}
                    >
                        <ChartNoAxesColumnIncreasing
                            size={22}
                            className="text-green-500"
                        />

                        Progression
                    </Link>
                </li>


                {/* NOUVELLE SESSION */}
                <li>
                    <Link
                        href="/creationSession"
                        className={`flex items-center gap-4 w-full px-4 py-3 rounded-xl text-lg transition-colors
                        ${pathname === "/creationSession"
                                ? "bg-violet-100 text-violet-600"
                                : "text-gray-700 hover:bg-violet-50 hover:text-violet-600"
                            }`}
                    >
                        <Plus
                            size={22}
                            className="text-violet-500"
                        />

                        Nouvelle session
                    </Link>
                </li>


                {/* SESSION EN COURS */}
                {currentSession && (
                    <li>
                        <Link
                            href={`/sessionencours/${currentSession.id}`}
                            className="flex items-center gap-4 w-full px-4 py-3 rounded-xl text-lg text-violet-600 bg-violet-50 hover:bg-violet-100 transition-colors"
                        >
                            <Mountain size={22} />

                            Session en cours
                        </Link>
                    </li>
                )}

            </ul>


            {/* POUSSE LE PROFIL EN BAS */}
            <div className="mt-auto border-t border-slate-100 pt-4">

                {userConnected ? (
                    <div className="flex flex-col gap-1">

                        {/* PROFIL */}
                        <Link
                            href="/profil"
                            className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                        >
                            <User
                                size={21}
                                className="text-indigo-500"
                            />

                            <span className="text-lg">
                                {userConnected.prenom}
                            </span>
                        </Link>


                        {/* DÉCONNEXION */}
                        <form action={authLogoutAction}>

                            <button
                                type="submit"
                                className="flex items-center gap-4 w-full px-4 py-3 rounded-xl text-slate-600 hover:bg-red-50 hover:text-red-500 transition-colors cursor-pointer"
                            >
                                <LogOut
                                    size={21}
                                    className="text-red-400"
                                />

                                <span className="text-lg">
                                    Se déconnecter
                                </span>
                            </button>

                        </form>

                    </div>

                ) : (

                    <Link
                        href="/login"
                        className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    >
                        <LogIn
                            size={21}
                            className="text-indigo-500"
                        />

                        <span className="text-lg">
                            Se connecter
                        </span>
                    </Link>

                )}

            </div>

        </nav>
    );


}