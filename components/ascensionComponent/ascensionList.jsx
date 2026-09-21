


export default async function AscensionList({ sessionId }) {


    // je récup tout les ascension liée a une session
    const res = await fetch(
        `${process.env.URL_WEB_API}/ascension/session/${sessionId}`
    );


    const ascensions = await res.json();

    console.log("ASCENSIONS DE LA SESSION :", ascensions);


    return (

<div className="max-h-80 overflow-y-auto flex flex-col gap-3 p-1">

    {ascensions.map((ascension) => (
        <div
            key={ascension.id}
            className={`grid grid-cols-7 items-center text-center px-5 py-4 border rounded-xl shadow-sm ${
                ascension.resultat
                    ? "bg-green-50 border-green-200"
                    : "bg-red-50 border-red-200"
            }`}
        >
            {/* Type */}
            <div className="capitalize">
                {ascension.type}
            </div>

            {/* Nom + secteur */}
            <div>
                <div className="font-medium">
                    {ascension.nom}
                </div>

                <div className="text-sm text-gray-500">
                    Secteur : {ascension.secteur}
                </div>
            </div>

            {/* Cotation */}
            <div className="font-medium">
                {ascension.cotation}
            </div>

            {/* Nombre d'essais */}
            <div>
                {ascension.nombre_essais} essai
            </div>

            {/* Résultat */}
            <div
                className={
                    ascension.resultat
                        ? "text-green-600 font-medium"
                        : "text-red-500 font-medium"
                }
            >
                {ascension.resultat ? "✓ Réussi" : "✕ Échoué"}
            </div>

            {/* Flash / Projet */}
            <div className="capitalize">
                {ascension.type_realisation}
            </div>

            {/* Menu */}
            <div>
                ...
            </div>
        </div>
    ))}

</div>









    );
}




// import SessionInfo from "@/components/sessions/SessionInfo";

// export default function SessionEnCours() {

//     return (
//         <div>

//             {/* TITRE DE LA PAGE */}
//             <div>
//                 <h1>Session en cours</h1>
//                 <p>Ajoute tes ascensions au fur et à mesure de ta session</p>
//             </div>


//             {/* INFORMATIONS DE LA SESSION */}
//             <SessionInfo />


//             {/* EN-TÊTE ASCENSIONS */}
//             <div className="flex justify-between">
//                 <p>Ascensions</p>
//                 <p>Trier par : Heure</p>
//             </div>


//             {/* LISTE DES ASCENSIONS - cette partie pourra scroller */}
//             <AscensionList />


//             {/* AJOUTER UNE ASCENSION - reste hors du scroll */}
//             <div>
//                 <p>+</p>
//                 <p>Ajouter une ascension</p>
//             </div>


//             {/* ACTIONS DE LA SESSION */}
//             <div>
//                 <button>
//                     Mettre en pause
//                 </button>

//                 <button>
//                     Terminer la session
//                 </button>
//             </div>

//         </div>
//     );
// }