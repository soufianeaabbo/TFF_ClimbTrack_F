// Permet d'utiliser les interactions React dans cette page Next.js
'use client';

import Link from "next/link";

// Importe l'action qui va gérer l'inscription
import { authRegisterAction } from '@/actions/auth.action';

// Permet de connecter le formulaire à notre action
import { useActionState } from 'react';

export default function RegisterPage() {

    // Connecte le formulaire à authRegisterAction
    // state       → contient notamment les erreurs retournées par l'action
    // handleSubmit → fonction qui sera appelée lors de l'envoi du formulaire
    // isPending   → true pendant que l'action est en cours
    const [state, handleSubmit, isPending] = useActionState(
        authRegisterAction,
        { error: null }
    );

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-10">

            <div className="w-full max-w-5xl bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden grid md:grid-cols-[0.85fr_1.15fr]">

                {/* PARTIE GAUCHE */}
                <div className="bg-indigo-50 p-10 flex flex-col justify-between">

                    <div>
                        <div className="inline-flex items-center gap-2 bg-white border border-indigo-100 px-4 py-2 rounded-full">
                            <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>

                            <span className="font-semibold text-slate-800">
                                ClimbTrack
                            </span>
                        </div>
                    </div>


                    <div className="my-14">

                        <h1 className="text-4xl font-bold text-slate-900 leading-tight">
                            Commence à suivre
                            <br />
                            <span className="text-indigo-600">
                                ta progression.
                            </span>
                        </h1>

                        <p className="text-gray-500 mt-5 leading-relaxed">
                            Enregistre tes séances d'escalade, tes ascensions
                            et tes entraînements pour garder une trace de ta progression.
                        </p>


                        <div className="flex flex-col gap-5 mt-10">

                            <div className="flex items-center gap-4">

                                <div className="w-10 h-10 rounded-xl bg-white border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                                    01
                                </div>

                                <div>
                                    <p className="font-semibold text-slate-800">
                                        Enregistre tes séances
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        Garde l'historique de tes sessions.
                                    </p>
                                </div>

                            </div>


                            <div className="flex items-center gap-4">

                                <div className="w-10 h-10 rounded-xl bg-white border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                                    02
                                </div>

                                <div>
                                    <p className="font-semibold text-slate-800">
                                        Suis tes ascensions
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        Cotations, essais et réussites.
                                    </p>
                                </div>

                            </div>


                            <div className="flex items-center gap-4">

                                <div className="w-10 h-10 rounded-xl bg-white border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                                    03
                                </div>

                                <div>
                                    <p className="font-semibold text-slate-800">
                                        Analyse ta progression
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        Visualise ton évolution dans le temps.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>


                    <p className="text-sm text-indigo-400 font-medium">
                        Grimpe. Progresse. Recommence.
                    </p>

                </div>


                {/* FORMULAIRE */}
                <div className="p-10 md:p-12 flex flex-col justify-center">

                    <div className="mb-8">

                        <p className="text-sm font-semibold text-indigo-500 mb-2">
                            INSCRIPTION
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900">
                            Crée ton compte
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Quelques informations et tu peux commencer à enregistrer tes séances.
                        </p>

                    </div>


                    <form
                        action={handleSubmit}
                        className="flex flex-col gap-5"
                    >

                        {/* PRÉNOM + NOM */}
                        <div className="grid grid-cols-2 gap-4">

                            <div className="flex flex-col gap-2">

                                <label
                                    htmlFor="prenom"
                                    className="text-sm font-medium text-slate-700"
                                >
                                    Prénom
                                </label>

                                <input
                                    id="prenom"
                                    name="prenom"
                                    type="text"
                                    placeholder="Ton prénom"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none transition focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
                                />

                            </div>


                            <div className="flex flex-col gap-2">

                                <label
                                    htmlFor="nom"
                                    className="text-sm font-medium text-slate-700"
                                >
                                    Nom
                                </label>

                                <input
                                    id="nom"
                                    name="nom"
                                    type="text"
                                    placeholder="Ton nom"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none transition focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
                                />

                            </div>

                        </div>


                        {/* EMAIL */}
                        <div className="flex flex-col gap-2">

                            <label
                                htmlFor="email"
                                className="text-sm font-medium text-slate-700"
                            >
                                Adresse email
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="exemple@email.com"
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none transition focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
                            />

                        </div>


                        {/* MOT DE PASSE */}
                        <div className="flex flex-col gap-2">

                            <label
                                htmlFor="mdp"
                                className="text-sm font-medium text-slate-700"
                            >
                                Mot de passe
                            </label>

                            <input
                                id="mdp"
                                name="mdp"
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none transition focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
                            />

                        </div>


                        {/* ERREUR */}
                        {state?.error && (
                            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                                <p className="text-sm text-red-500">
                                    {state.error}
                                </p>
                            </div>
                        )}


                        {/* BOUTON */}
                        <button
                            type="submit"
                            disabled={isPending}
                            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3.5 rounded-xl mt-2 transition shadow-sm disabled:opacity-50"
                        >
                            {isPending
                                ? "Création..."
                                : "Créer mon compte"
                            }
                        </button>

                    </form>


                    {/* CONNEXION */}
                    <div className="mt-8 pt-6 border-t border-slate-100 text-center">

                        <p className="text-sm text-gray-500">
                            Déjà un compte ?{" "}

                            <Link href="/login" className="text-purple-700">
                                Se connecter
                            </Link>
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}