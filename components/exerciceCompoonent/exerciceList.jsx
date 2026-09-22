
// import { useState } from "react";


import { getInfoUserAction } from "@/actions/auth.action";

export default async function ExercicesList() {

    // Récupère les informations de l'utilisateur actuellement connecté
    const userConnected = await getInfoUserAction();


    if (!userConnected) {
        return (
            <p>Connectez-vous pour voir votre liste d'exercice.</p>
        );
    }

    // Appelle le backend pour récupérer toutes les exercices
    // terminées appartenant à l'utilisateur connecté
    const res = await fetch(
        `${process.env.URL_WEB_API}/exercice/user/${userConnected.id}`,
        {
            method: "GET",
            cache: "no-store"
        }
    );

    // Transforme la réponse JSON en tableau JavaScript

    // Ce tableau contiendra toutes les exo du user
    const exercices = await res.json();



    return (

        <div className="flex flex-col">

            {exercices.map((exo)=> (

            <div key={exo.id} className="flex items-center justify-between border-b border-slate-200 py-4">
                <div>
                    <p className="font-semibold">
                        {exo.nom}
                    </p>
                    <p className="text-sm text-gray-500">
                        {exo.categorie}
                    </p>
                </div>

                <div className="text-sm text-gray-500">
                    Dernière séance : 15 sept. 2026
                </div>
            </div>
                
            ))

            }

        </div>


    );
}