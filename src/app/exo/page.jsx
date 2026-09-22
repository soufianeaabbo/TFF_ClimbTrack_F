import { createExerciceAction } from "@/actions/exercice.action";
import ExercicesList from "../../../components/exerciceCompoonent/exerciceList";
import NewRenfoSessionModal from "../../../components/exerciceCompoonent/newRenfoSessionModal";
import { getInfoUserAction } from "@/actions/auth.action";
import CurrentRenfoSession from "../../../components/exerciceCompoonent/currentRenfoSession";
import RenfoSessionHistory from "../../../components/exerciceCompoonent/renfoSessionHistory";
import AddExerciceToSessionModal from "../../../components/exerciceCompoonent/addExerciceToSessionModal";
// import CurrentRenfoSession from "../../../components/exerciceCompoonent/CurrentRenfoSession";

export default async function Exercices() {


 const userConnected = await getInfoUserAction();

    let exercices = [];

    if (userConnected) {
        const res = await fetch(
            `${process.env.URL_WEB_API}/exercice/user/${userConnected.id}`,
            {
                method: "GET",
                cache: "no-store"
            }
        );

        exercices = await res.json();
    }


    return (
    <div className="min-h-screen bg-slate-50 px-10 py-8">

        {/* HEADER */}
        <div className="mb-6">
            <h1 className="text-3xl font-bold text-slate-900">
                Exercices
            </h1>

            <p className="text-gray-500 mt-1">
                Renforce-toi pour grimper plus fort.
            </p>
        </div>


        {/* NAVIGATION DE LA PAGE */}
        <div className="flex gap-3 mb-6">

            <button className="bg-amber-500 text-white px-6 py-3 rounded-xl font-medium shadow-sm">
                Bibliothèque
            </button>

            <NewRenfoSessionModal exercices={exercices} />

        </div>


        <div className="grid grid-cols-[1.1fr_1fr] gap-6">

            {/* ========================================= */}
            {/* BIBLIOTHÈQUE */}
            {/* ========================================= */}

            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">

                <div className="mb-6">
                    <div className="flex items-center gap-3">

                        <div className="w-2 h-8 bg-amber-400 rounded-full"></div>

                        <h2 className="text-xl font-semibold text-slate-900">
                            Bibliothèque d'exercices
                        </h2>

                    </div>

                    <p className="text-sm text-gray-500 mt-2 ml-5">
                        Retrouve tous les exercices que tu as enregistrés.
                    </p>
                </div>


                {/* RECHERCHE */}
                <div className="flex gap-3 mb-6">

                    <input
                        type="text"
                        placeholder="Rechercher un exercice..."
                        className="
                            flex-1
                            border border-slate-200
                            rounded-lg
                            px-4 py-3
                            outline-none
                            focus:border-amber-400
                            focus:ring-2
                            focus:ring-amber-100
                        "
                    />

                    <select
                        className="
                            border border-slate-200
                            rounded-lg
                            px-4
                            outline-none
                            focus:border-amber-400
                        "
                    >
                        <option>Toutes les catégories</option>
                        <option>Dos</option>
                        <option>Pectoraux</option>
                        <option>Épaules</option>
                        <option>Jambes</option>
                        <option>Gainage</option>
                    </select>

                </div>


                {/* LISTE */}
                <ExercicesList />


                {/* PAGINATION */}
                <div className="flex justify-between items-center mt-6">

                    <p className="text-sm text-gray-500">
                        6 exercices
                    </p>

                    <div className="flex gap-2">

                        <button className="border border-slate-200 rounded-lg px-3 py-2 hover:bg-slate-50">
                            ‹
                        </button>

                        <button className="bg-amber-500 text-white rounded-lg px-3 py-2">
                            1
                        </button>

                        <button className="border border-slate-200 rounded-lg px-3 py-2 hover:bg-slate-50">
                            ›
                        </button>

                    </div>

                </div>

            </div>


            {/* ========================================= */}
            {/* COLONNE DROITE */}
            {/* ========================================= */}

            <div className="flex flex-col gap-6">


                {/* AJOUTER UN EXERCICE */}
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">

                    <div className="flex items-center gap-3">

                        <div className="w-2 h-8 bg-amber-400 rounded-full"></div>

                        <h2 className="text-xl font-semibold text-slate-900">
                            Ajouter un exercice
                        </h2>

                    </div>

                    <p className="text-sm text-gray-500 mt-2 mb-6 ml-5">
                        Enregistre un nouvel exercice dans ta bibliothèque.
                    </p>


                    <form
                        action={createExerciceAction}
                        className="flex flex-col gap-5"
                    >

                        <div className="grid grid-cols-2 gap-4">

                            {/* NOM */}
                            <div className="flex flex-col gap-2">

                                <label
                                    htmlFor="nom"
                                    className="text-sm font-medium text-slate-700"
                                >
                                    Nom de l'exercice
                                </label>

                                <input
                                    name="nom"
                                    type="text"
                                    placeholder="Ex : Tractions lestées"
                                    className="
                                        border border-slate-200
                                        rounded-lg
                                        px-4 py-3
                                        outline-none
                                        focus:border-amber-400
                                        focus:ring-2
                                        focus:ring-amber-100
                                    "
                                />

                            </div>


                            {/* CATÉGORIE */}
                            <div className="flex flex-col gap-2">

                                <label
                                    htmlFor="categorie"
                                    className="text-sm font-medium text-slate-700"
                                >
                                    Catégorie
                                </label>

                                <select
                                    name="categorie"
                                    className="
                                        border border-slate-200
                                        rounded-lg
                                        px-4 py-3
                                        outline-none
                                        focus:border-amber-400
                                        focus:ring-2
                                        focus:ring-amber-100
                                    "
                                >
                                    <option>Sélectionner une catégorie</option>
                                    <option value="Dos">Dos</option>
                                    <option value="Pectoraux">Pectoraux</option>
                                    <option value="Épaules">Épaules</option>
                                    <option value="Jambes">Jambes</option>
                                    <option value="Gainage">Gainage</option>
                                    <option value="Autres">Autres</option>
                                </select>

                            </div>

                        </div>


                        {/* BOUTON */}
                        <button
                            type="submit"
                            className="
                                bg-amber-500
                                hover:bg-amber-600
                                text-white
                                rounded-lg
                                py-3
                                font-medium
                                transition
                            "
                        >
                            + Ajouter l'exercice
                        </button>

                    </form>

                </div>


                {/* ========================================= */}
                {/* SÉANCE DU JOUR */}
                {/* ========================================= */}

                <div className="bg-white border border-amber-100 rounded-2xl shadow-sm p-6">

                    <div className="flex justify-between items-center mb-5">

                        <div>

                            <div className="flex items-center gap-3">

                                <div className="w-2 h-8 bg-amber-400 rounded-full"></div>

                                <h2 className="text-xl font-semibold text-slate-900">
                                    Ma séance du jour
                                </h2>

                            </div>

                            <p className="text-sm text-gray-500 mt-2 ml-5">
                                Coche tes exercices au fur et à mesure.
                            </p>

                        </div>


                        <div className="bg-amber-50 text-amber-700 px-3 py-2 rounded-lg text-sm font-medium">
                            21 septembre 2026
                        </div>

                    </div>


                    <CurrentRenfoSession />


                    <AddExerciceToSessionModal exercices={exercices} userConnected={userConnected} />
                   

                </div>


                {/* ========================================= */}
                {/* HISTORIQUE */}
                {/* ========================================= */}

                <div className="rounded-2xl">
                    <RenfoSessionHistory />
                </div>

            </div>

        </div>

    </div>
);
}