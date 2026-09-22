// Permet d'utiliser les interactions React dans cette page Next.js
'use client';
import Link from "next/link";

// Importe l'action qui va gérer l'inscription
import { ClimbSessionformAction } from "@/actions/climbSession.action";
import { useActionState } from 'react';


export default function CreateSession() {

    // Connecte le formulaire à authRegisterAction
    // state       → contient notamment les erreurs retournées par l'action
    // handleSubmit → fonction qui sera appelée lors de l'envoi du formulaire
    // isPending   → true pendant que l'action est en cours
    const [state, handleSubmit, isPending] = useActionState(
        ClimbSessionformAction,
        { error: null }
    );




    return (
    <div className="min-h-screen bg-slate-50 px-10 py-10">

        <div className="max-w-4xl mx-auto">

            {/* HEADER */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">
                    Créer une séance
                </h1>

                <p className="text-gray-500 mt-1">
                    Renseigne les informations de ta séance pour commencer à enregistrer tes blocs et voies.
                </p>
            </div>


            {/* CARTE FORMULAIRE */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">

                <form
                    action={handleSubmit}
                    className="flex flex-col gap-8"
                >

                    {/* PREMIÈRE PARTIE */}
                    <div>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Informations générales
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            Où et quand tu grimpes ?
                        </p>
                    </div>


                    <div className="grid grid-cols-2 gap-6">

                        {/* DATE */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="date"
                                className="text-sm font-medium text-slate-700"
                            >
                                Date
                            </label>

                            <input
                                id="date"
                                name="date"
                                type="date"
                                className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            />
                        </div>


                        {/* LIEU */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="lieu"
                                className="text-sm font-medium text-slate-700"
                            >
                                Lieu / Salle *
                            </label>

                            <input
                                id="lieu"
                                name="lieu"
                                type="text"
                                placeholder="Ex : Arkose Canal"
                                className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            />
                        </div>


                        {/* HEURE */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="heure_debut"
                                className="text-sm font-medium text-slate-700"
                            >
                                Heure de début *
                            </label>

                            <input
                                id="heure_debut"
                                name="heure_debut"
                                type="time"
                                className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            />
                        </div>

                    </div>


                    {/* SEPARATION */}
                    <div className="border-t border-slate-200"></div>


                    {/* DEUXIÈME PARTIE */}
                    <div>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Détails de la séance
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            Ces informations sont facultatives.
                        </p>
                    </div>


                    <div className="grid grid-cols-2 gap-6">

                        {/* DURÉE */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="duree"
                                className="text-sm font-medium text-slate-700"
                            >
                                Durée prévue
                            </label>

                            <input
                                id="duree"
                                name="duree"
                                type="number"
                                placeholder="Ex : 120 min"
                                className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            />
                        </div>


                        {/* PARTENAIRE */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="partenaire"
                                className="text-sm font-medium text-slate-700"
                            >
                                Partenaire de grimpe
                            </label>

                            <input
                                id="partenaire"
                                name="partenaire"
                                type="text"
                                placeholder="Optionnel"
                                className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            />
                        </div>


                        {/* OBJECTIF */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="objectif"
                                className="text-sm font-medium text-slate-700"
                            >
                                Objectif de la séance
                            </label>

                            <input
                                id="objectif"
                                name="objectif"
                                type="text"
                                placeholder="Objectif : 20 blocs"
                                className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            />
                        </div>


                        {/* NOTES */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="notes"
                                className="text-sm font-medium text-slate-700"
                            >
                                Notes
                            </label>

                            <input
                                id="notes"
                                name="notes"
                                type="text"
                                placeholder="Optionnel"
                                className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            />
                        </div>

                    </div>


                    {/* ERREUR */}
                    {state?.error && (
                        <p className="text-sm text-red-500">
                            {state.error}
                        </p>
                    )}


                    {/* BOUTON */}
                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg transition disabled:opacity-50"
                    >
                        {isPending
                            ? "Création..."
                            : "Démarrer la session"
                        }
                    </button>

                </form>

            </div>

        </div>

    </div>
);
}