
import SessionCard from "./SessionCard";
// import { useState } from "react";
import SessionDetailsModal from "./SessionDetailsModal";

import { getInfoUserAction } from "@/actions/auth.action";

export default async function SessionsList() {

   // Récupère les informations de l'utilisateur actuellement connecté
    const userConnected = await getInfoUserAction();


    if (!userConnected) {
    return (
        <p>Connectez-vous pour voir vos dernières séances.</p>
    );
}

    // Appelle le backend pour récupérer toutes les sessions
    // terminées appartenant à l'utilisateur connecté
    const res = await fetch(
        `${process.env.URL_WEB_API}/session/user/${userConnected.id}`,
        {
            method: "GET",
            cache: "no-store"
        }
    );

    // Transforme la réponse JSON en tableau JavaScript
    // Ce tableau contiendra toutes les sessions du user
    const sessions = await res.json();



    return (

        
    <div className="flex flex-col gap-4">

        {sessions.map((session) => (

            <div key={session.id} className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
                <div className="flex items-center justify-between">

                    <div className="text-center w-24">
                        <div className="text-2xl font-bold">
                            {new Date(session.date).getDate()}
                        </div>

                        <div className="text-sm text-gray-500">
                            {new Date(session.date).toLocaleDateString("fr-FR", {
                                month: "short",
                                year: "numeric"
                            })}
                        </div>
                    </div>


                    <div className="flex-1 px-6">

                        <h2 className="text-lg font-semibold">
                            {session.lieu}
                        </h2>

                        <div className="flex gap-6 mt-2 text-sm text-gray-500">

                            <span>
                                Durée : {session.duree} min
                            </span>

                            <span>
                                Partenaire : {session.partenaire || "Aucun"}
                            </span>

                            <span>
                                Objectif : {session.objectif}
                            </span>

                        </div>

                        {session.notes && (
                            <p className="text-sm text-gray-500 mt-3">
                                {session.notes}
                            </p>
                        )}

                    </div>


                    <SessionCard session={session} />

                </div>
            </div>

        ))}

    </div>
);
}