import SessionInfo from "../../../../components/sessionencoursComponent/sessionInfo";
import { Plus } from "lucide-react";
import { CalendarDays, Pencil, ChevronRight } from "lucide-react";
import Link from "next/link"

import { endSessionAction } from "@/actions/climbSession.action";
import AscensionList from "../../../../components/ascensionComponent/ascensionList";

export default async function SessionEnCours({ params }) {



    // Récupère l'id présent dans l'URL
    // Exemple : /sessionencours/5 → id = 5
    const { id } = await params;



    return (
        <div className="justepourlefon flex justify-center h-full">


            <div className="flex flex-col justify-center  w-7/8 gap-5  ">

                <div className="flex items-center gap-2 text-sm p-5">
                    <span className="text-gray-500">Séances</span>
                    <ChevronRight size={16} className="text-gray-400" />
                    <span className="text-gray-800">Session en cours</span>
                </div>


                <div className="w-full flex items-center gap-5 p-5  ">
                    <div className="bg-blue-100 p-3 rounded-lg">
                        <CalendarDays size={50} className="text-blue-500" />
                    </div>
                    <div className="">
                        <h2 className="text-4xl font-bold">Session en cours</h2>
                        <p>Ajoute tes ascensions au fur et à mesure de ta session</p>
                    </div>
                </div>


                <div className="bg-white rounded-2xl p-5 w-full shadow-2xl">

                    <div className="flex justify-between p-2">
                        <div className="flex gap-2">
                            <div>
                                <CalendarDays size={24} className="text-blue-600" />
                            </div>
                            <div>Information de la session</div>
                        </div>
                        <button className="flex items-center gap-2 px-3 py-2 boutonModifierRouge">
                            <Pencil size={14} />
                            Modifier la session
                        </button>
                    </div>


                    <SessionInfo id={id}></SessionInfo>
                </div>

                <div className="bg-white rounded-2xl shadow-2xl p-5  flex flex-col gap-5 w-full max-h-00 overflow-y-auto">
                    <div className="flex gap justify-between p-2">
                        <div>
                            <p>Ascension (4)</p>
                        </div>
                        <div className="flex">
                            <p>Trier par :</p>
                            <p>Heure</p>
                        </div>
                    </div>




                        <AscensionList sessionId={id} />
                 

                    <div className="border-2 border-dashed border-blue-200 rounded-xl p-5 flex flex-col items-center justify-center gap-1">

                        {/* Petit + bleu */}
                        <div className="bg-blue-100 rounded-full p-2">
                            <Plus size={22} className="text-blue-500" />
                        </div>

                        <Link
                            href={`/ascension/${id}`}
                            className="text-blue-600 font-semibold"
                        >
                            Ajouter une ascension
                        </Link>

                        <p className="text-sm text-gray-400">
                            Ajoute une ascension en mode bloc ou voie à ta session.
                        </p>

                    </div>



                    <div className="flex justify-around">
                        <button className="border p-2 boutonModifierRouge">Mettre en pause</button>
                        {/* bind permet d'envoyer l'id de la session actuelle à endSessionAction lors du clic */}
                        <form action={endSessionAction.bind(null, id)}>
                            <button className="border p-2 boutonModifierRouge">Terminer la session</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>


    )
}