'use client';

// Importe l'action qui va gérer l'inscription
import { authLoginAction } from '@/actions/auth.action';

import Link from "next/link";
// Permet de connecter le formulaire à notre action
import { useActionState } from 'react';

export default function LoginPage() {
    // Connecte le formulaire à authRegisterAction
    // state       → contient notamment les erreurs retournées par l'action
    // handleSubmit → fonction qui sera appelée lors de l'envoi du formulaire
    // isPending   → true pendant que l'action est en cours
    const [state, handleSubmit, isPending] = useActionState(
        authLoginAction,
        { error: null }
    );
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">

            <div className="w-full max-w-5xl min-h-[600px] bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden grid md:grid-cols-2">

                {/* PARTIE GAUCHE */}
                <div className="bg-blue-50 p-12 flex flex-col justify-between">

                    <div>
                        <div className="inline-flex items-center gap-2 bg-white border border-blue-100 px-4 py-2 rounded-full">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>

                            <span className="font-semibold text-slate-800">
                                ClimbTrack
                            </span>
                        </div>
                    </div>


                    <div>
                        <h1 className="text-4xl font-bold text-slate-900 leading-tight">
                            Grimpe.
                            <br />
                            Progresse.
                            <br />
                            Recommence.
                        </h1>

                        <p className="text-gray-500 mt-5 max-w-sm leading-relaxed">
                            Enregistre tes séances, suis tes ascensions
                            et garde un œil sur ta progression.
                        </p>
                    </div>


                    <p className="text-sm text-gray-400">
                        Ton suivi d'escalade, simplement.
                    </p>

                </div>


                {/* PARTIE DROITE */}
                <div className="p-12 flex flex-col justify-center">

                    <div className="mb-8">
                        <p className="text-sm font-medium text-blue-500 mb-2">
                            CONNEXION
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900">
                            Content de te revoir
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Entre tes identifiants pour accéder à ton espace.
                        </p>
                    </div>


                    <form
                        action={handleSubmit}
                        className="flex flex-col gap-5"
                    >

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
                                type="email"
                                name="email"
                                placeholder="exemple@email.com" className=" w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none transition focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50
                            "
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
                                type="password"
                                name="mdp"
                                placeholder="••••••••"
                                className=" w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none transition focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50
                            "
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


                        {/* SUBMIT */}
                        <button
                            type="submit"
                            disabled={isPending}
                            className="
                            w-full
                            bg-blue-500
                            hover:bg-blue-600
                            text-white
                            font-semibold
                            py-3.5
                            rounded-xl
                            mt-2
                            transition
                            shadow-sm
                            disabled:opacity-50
                        "
                        >
                            {isPending ? "Connexion..." : "Se connecter"}
                        </button>

                    </form>


                    {/* REGISTER */}
                    <div className="mt-8 pt-6 border-t border-slate-100 text-center">

                        <p className="text-sm text-gray-500">
                            Nouveau sur ClimbTrack ?{" "}

                            <Link
                                href="/register"
                                className="text-blue-500 font-semibold hover:text-blue-600"
                            >
                                Créer un compte
                            </Link>
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}