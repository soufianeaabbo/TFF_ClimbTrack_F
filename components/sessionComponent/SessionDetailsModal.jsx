"use client";

import { useEffect, useState } from "react";

export default function SessionDetailsModal({ session, onClose }) {

    // Stocke les ascensions récupérées depuis le backend
    const [ascensions, setAscensions] = useState([]);

    useEffect(() => {

        // Récupère les ascensions appartenant à la session sélectionnée
        async function getAscensions() {

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_URL_WEB_API}/ascension/session/${session.id}`
            );

            const data = await res.json();

            console.log("SESSION ID :", session.id);
console.log("ASCENSIONS :", data);

            setAscensions(data);
        }

        getAscensions();

    }, [session.id]);


    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <div className="bg-white rounded-xl shadow-xl w-[850px] max-h-[85vh] overflow-y-auto p-7">

                {/* En-tête */}
                <div className="flex justify-between items-start border-b border-slate-200 pb-5">

                    <div>
                        <h2 className="text-2xl font-bold">
                            {session.lieu}
                        </h2>

                        <p className="text-gray-500 mt-1">
                            {new Date(session.date).toLocaleDateString("fr-FR")}
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-black cursor-pointer text-xl"
                    >
                        ✕
                    </button>

                </div>


                {/* Informations de la séance */}
                <div className="grid grid-cols-3 gap-4 py-6">

                    <div className="bg-slate-50 rounded-lg p-4">
                        <p className="text-sm text-gray-500">
                            Durée
                        </p>

                        <p className="font-semibold mt-1">
                            {session.duree} min
                        </p>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4">
                        <p className="text-sm text-gray-500">
                            Partenaire
                        </p>

                        <p className="font-semibold mt-1">
                            {session.partenaire || "Aucun"}
                        </p>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4">
                        <p className="text-sm text-gray-500">
                            Objectif
                        </p>

                        <p className="font-semibold mt-1">
                            {session.objectif || "Aucun"}
                        </p>
                    </div>

                </div>


                {/* Notes */}
                {session.notes && (
                    <div className="mb-6">
                        <p className="text-sm text-gray-500 mb-1">
                            Notes
                        </p>

                        <p>
                            {session.notes}
                        </p>
                    </div>
                )}


                {/* Ascensions */}
                <div>

                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold">
                            Ascensions
                        </h3>

                        <span className="text-sm text-gray-500">
                            {ascensions.length} ascension(s)
                        </span>
                    </div>


                    <div className="flex flex-col gap-3">

                        {ascensions.length === 0 ? (

                            <p className="text-gray-500 text-center py-6">
                                Aucune ascension enregistrée.
                            </p>

                        ) : (

                            ascensions.map((ascension) => (

                                <div
                                    key={ascension.id}
                                    className={`grid grid-cols-5 items-center text-center p-4 border rounded-xl ${
                                        ascension.resultat
                                            ? "bg-green-50 border-green-200"
                                            : "bg-red-50 border-red-200"
                                    }`}
                                >

                                    <div>
                                        <p className="text-xs text-gray-500">
                                            Type
                                        </p>

                                        <p className="font-medium capitalize">
                                            {ascension.type}
                                        </p>
                                    </div>


                                    <div>
                                        <p className="text-xs text-gray-500">
                                            Cotation
                                        </p>

                                        <p className="font-semibold">
                                            {ascension.cotation}
                                        </p>
                                    </div>


                                    <div>
                                        <p className="text-xs text-gray-500">
                                            Essais
                                        </p>

                                        <p className="font-medium">
                                            {ascension.nombre_essais}
                                        </p>
                                    </div>


                                    <div>
                                        <p className="text-xs text-gray-500">
                                            Réalisation
                                        </p>

                                        <p className="font-medium">
                                            {ascension.type_realisation || "-"}
                                        </p>
                                    </div>


                                    <div>
                                        <p className="text-xs text-gray-500">
                                            Résultat
                                        </p>

                                        <p className="font-semibold">
                                            {ascension.resultat
                                                ? "✓ Réussi"
                                                : "✕ Échoué"}
                                        </p>
                                    </div>

                                </div>

                            ))

                        )}

                    </div>

                </div>

            </div>

        </div>
    );
}