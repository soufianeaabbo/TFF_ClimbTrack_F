'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function AddExerciceToSessionModal({ exercices, userConnected }) {


    const router = useRouter();
    const [currentSession, setCurrentSession] = useState(null);
    const [open, setOpen] = useState(false);
    const [exerciceSelected, setExerciceSelected] = useState(null);

    const [nombreSeries, setNombreSeries] = useState(3);
    const [objectifReps, setObjectifReps] = useState(8);
    const [charge, setCharge] = useState("");
    const [tempsRepos, setTempsRepos] = useState(120);

    useEffect(() => {
        // récupère la séance de renfo actuellement en cours de l'utilisateur connecté et la stocke dans currentSession.
        const getCurrentSession = async () => {

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_URL_WEB_API}/session-renfo/current/${userConnected.id}`
            );

            const data = await res.json();

            setCurrentSession(data);
        };

        if (userConnected) {
            getCurrentSession();
        }

    }, [userConnected]);



    const handleAddExercice = async () => {

        // envoie au backend l’exercice sélectionné avec ses séries, répétitions, charge et repos pour l’ajouter à la séance de renforcement actuellement en cours.

        if (!currentSession || !exerciceSelected) return;

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_URL_WEB_API}/exercice-session`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    session_renfo_id: currentSession.id,
                    exercice_id: exerciceSelected.id,
                    nombre_series: Number(nombreSeries),
                    objectif_reps: Number(objectifReps),
                    charge: charge === "" ? null : Number(charge),
                    temps_repos: Number(tempsRepos)
                })
            }
        );

        if (res.ok) {
            setOpen(false);
            setExerciceSelected(null);
            router.refresh();
        }
    };

    return (
        <>
            {/* BOUTON OUVRIR MODAL */}
            <button
                onClick={() => setOpen(true)}
                className="w-full mt-4 border border-amber-200 text-amber-600 rounded-lg py-3 font-medium hover:bg-amber-50 transition"
            >
                + Ajouter un exercice à la séance
            </button>



            {open && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">

                    <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 max-h-[90vh] overflow-y-auto">

                        {/* HEADER */}
                        <div className="flex justify-between items-start mb-6">

                            <div>
                                <h2 className="text-xl font-semibold">
                                    Ajouter un exercice
                                </h2>

                                <p className="text-sm text-gray-500 mt-1">
                                    Ajoute un exercice à ta séance en cours.
                                </p>
                            </div>

                            <button
                                onClick={() => {
                                    setOpen(false);
                                    setExerciceSelected(null);
                                }}
                                className="text-gray-400 hover:text-gray-700 text-xl cursor-pointer"
                            >
                                ✕
                            </button>

                        </div>


                        {/* form quand le user choisis un exo  */}
                        {exerciceSelected && (
                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">

                                <h3 className="font-semibold text-lg mb-4">
                                    {exerciceSelected.nom}
                                </h3>

                                <div className="grid grid-cols-2 gap-3">

                                    {/* SERIES */}
                                    <div>
                                        <label className="text-sm text-gray-500">
                                            Séries
                                        </label>


                                        <input
                                            type="number"
                                            value={nombreSeries}
                                            onChange={(e) => setNombreSeries(e.target.value)}
                                            className="w-full border border-gray-200 bg-white rounded-lg p-2 mt-1"
                                        />
                                    </div>


                                    {/* REPETITIONS */}
                                    <div>
                                        <label className="text-sm text-gray-500">
                                            Répétitions
                                        </label>


                                        <input
                                            type="number"
                                            value={objectifReps}
                                            onChange={(e) => setObjectifReps(e.target.value)}
                                            className="w-full border border-gray-200 bg-white rounded-lg p-2 mt-1"
                                        />
                                    </div>


                                    {/* CHARGE */}
                                    <div>
                                        <label className="text-sm text-gray-500">
                                            Charge (kg)
                                        </label>

                                        <input
                                            type="number"
                                            value={charge}
                                            onChange={(e) => setCharge(e.target.value)}
                                            className="w-full border border-gray-200 bg-white rounded-lg p-2 mt-1"
                                        />
                                    </div>


                                    {/* REPOS */}
                                    <div>
                                        <label className="text-sm text-gray-500">
                                            Repos (sec)
                                        </label>

                                        <input
                                            type="number"
                                            value={tempsRepos}
                                            onChange={(e) => setTempsRepos(e.target.value)}
                                            className="w-full border border-gray-200 bg-white rounded-lg p-2 mt-1"
                                        />
                                    </div>

                                </div>


                                {/* AJOUTER */}
                                <button
                                    onClick={handleAddExercice}
                                    className="w-full mt-4 bg-amber-500 text-white rounded-lg py-2 font-medium hover:bg-amber-600 cursor-pointer"
                                >
                                    Ajouter à la séance
                                </button>

                            </div>
                        )}


                        {/* LISTE DES EXERCICES */}
                        <div className="flex flex-col max-h-72 overflow-y-auto">

                            {exercices.map((exo) => (

                                <div
                                    key={exo.id}
                                    className="flex items-center justify-between border-b border-slate-100 py-4"
                                >

                                    <div>
                                        <p className="font-semibold">
                                            {exo.nom}
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            {exo.categorie}
                                        </p>
                                    </div>


                                    <button
                                        onClick={() => setExerciceSelected(exo)}
                                        className={`border px-4 py-2 rounded-lg cursor-pointer transition
                                        ${exerciceSelected?.id === exo.id
                                                ? "bg-amber-500 border-amber-500 text-white"
                                                : "border-amber-200 text-amber-600 hover:bg-amber-50"
                                            }
                                    `}
                                    >
                                        {exerciceSelected?.id === exo.id
                                            ? "Sélectionné"
                                            : "Choisir"
                                        }
                                    </button>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>
            )}
        </>
    );
}