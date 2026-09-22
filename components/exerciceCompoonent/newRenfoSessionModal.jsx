"use client";

import { useState } from "react";
import { createSessionRenfoAction } from "@/actions/sessionRenfo.action";

export default function NewRenfoSessionModal({ exercices }) {


    // Démarre une nouvelle séance avec les exercices sélectionnés
    const handleStartSession = async () => {

        const result = await createSessionRenfoAction(selectedExercices);

        if (result?.error) {
            console.log(result.error);
            return;
        }

        // Ferme le modal quand la séance a bien été créée
        setOpen(false);
    };

    const [open, setOpen] = useState(false);

    const [selectedExercices, setSelectedExercices] = useState([]);



    const handleSelectExercice = (exoId) => {

        // Vérifie si l'exercice est déjà sélectionné
        const exerciceExiste = selectedExercices.find(
            (exo) => exo.exercice_id === exoId
        );

        if (exerciceExiste) {

            // S'il est déjà sélectionné, on le retire
            setSelectedExercices(
                selectedExercices.filter(
                    (exo) => exo.exercice_id !== exoId
                )
            );

        } else {

            // Sinon on l'ajoute avec ses valeurs par défaut
            setSelectedExercices([
                ...selectedExercices,
                {
                    exercice_id: exoId,
                    nombre_series: 3,
                    objectif_reps: 8,
                    charge: "",
                    temps_repos: 120
                }
            ]);
        }
    };

    const handleChangeExercice = (exoId, champ, valeur) => {

        setSelectedExercices(
            selectedExercices.map((exo) => {

                if (exo.exercice_id === exoId) {
                    return {
                        ...exo,
                        [champ]: valeur
                    };
                }

                return exo;
            })
        );
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="bg-white border border-slate-200 px-6 py-3 rounded-lg"
            >
                + Nouvelle séance
            </button>

            {open && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

                    <div className="bg-white w-full max-w-xl rounded-xl shadow-lg p-6">

                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h2 className="text-xl font-semibold">
                                    Nouvelle séance
                                </h2>

                                <p className="text-sm text-gray-500 mt-1">
                                    Choisis les exercices de ta séance.
                                </p>
                            </div>

                            <button
                                onClick={() => setOpen(false)}
                                className="text-gray-500 text-xl"
                            >
                                ✕
                            </button>
                        </div>


                        <div className="flex flex-col">

                            <div className="flex flex-col max-h-[60vh] overflow-y-auto pr-2">

                                {exercices.map((exo) => {

                                    const exerciceSelectionne = selectedExercices.find(
                                        (selected) => selected.exercice_id === exo.id
                                    );

                                    return (
                                        <div
                                            key={exo.id}
                                            className="border-b border-slate-200 py-4"
                                        >

                                            <label className="flex items-center gap-3">

                                                <input
                                                    type="checkbox"
                                                    checked={!!exerciceSelectionne}
                                                    onChange={() => handleSelectExercice(exo.id)}
                                                />

                                                <div>
                                                    <p className="font-semibold">
                                                        {exo.nom}
                                                    </p>

                                                    <p className="text-sm text-gray-500">
                                                        {exo.categorie}
                                                    </p>
                                                </div>

                                            </label>

                                            {/* Si exerciceSelectionne existe, affiche les champs. */}
                                            {exerciceSelectionne && (

                                                <div className="grid grid-cols-4 gap-3 mt-4 ml-7">

                                                    <div>
                                                        <label className="text-xs text-gray-500">
                                                            Séries
                                                        </label>

                                                        <input
                                                            type="number"
                                                            min="1"
                                                            value={exerciceSelectionne.nombre_series}
                                                            onChange={(e) =>
                                                                handleChangeExercice(
                                                                    exo.id,
                                                                    "nombre_series",
                                                                    e.target.value
                                                                )
                                                            }
                                                            className="w-full border border-slate-200 rounded-lg px-3 py-2"
                                                        />
                                                    </div>


                                                    <div>
                                                        <label className="text-xs text-gray-500">
                                                            Reps
                                                        </label>

                                                        <input
                                                            type="number"
                                                            min="1"
                                                            value={exerciceSelectionne.objectif_reps}
                                                            onChange={(e) =>
                                                                handleChangeExercice(
                                                                    exo.id,
                                                                    "objectif_reps",
                                                                    e.target.value
                                                                )
                                                            }
                                                            className="w-full border border-slate-200 rounded-lg px-3 py-2"
                                                        />
                                                    </div>


                                                    <div>
                                                        <label className="text-xs text-gray-500">
                                                            Charge (kg)
                                                        </label>

                                                        <input
                                                            type="number"
                                                            value={exerciceSelectionne.charge}
                                                            onChange={(e) =>
                                                                handleChangeExercice(
                                                                    exo.id,
                                                                    "charge",
                                                                    e.target.value
                                                                )
                                                            }
                                                            className="w-full border border-slate-200 rounded-lg px-3 py-2"
                                                        />
                                                    </div>


                                                    <div>
                                                        <label className="text-xs text-gray-500">
                                                            Repos (sec)
                                                        </label>

                                                        <input
                                                            type="number"
                                                            min="0"
                                                            value={exerciceSelectionne.temps_repos}
                                                            onChange={(e) =>
                                                                handleChangeExercice(
                                                                    exo.id,
                                                                    "temps_repos",
                                                                    e.target.value
                                                                )
                                                            }
                                                            className="w-full border border-slate-200 rounded-lg px-3 py-2"
                                                        />
                                                    </div>

                                                </div>

                                            )}

                                        </div>
                                    );
                                })}

                            </div>
                        </div>
                        

                        <div className="flex justify-end gap-3 mt-6">

                            <button
                                onClick={() => setOpen(false)}
                                className="border border-slate-200 px-5 py-3 rounded-lg"
                            >
                                Annuler
                            </button>


                            <button
                                onClick={handleStartSession}
                                className="bg-blue-500 text-white px-5 py-3 rounded-lg"
                            >
                                Démarrer la séance
                            </button>
                        </div>

                    </div>

                </div>
            )}
        </>
    );
}