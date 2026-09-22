import { createExerciceAction } from "@/actions/exercice.action";
import ExercicesList from "../../../components/exerciceCompoonent/exerciceList";
import NewRenfoSessionModal from "../../../components/exerciceCompoonent/newRenfoSessionModal";
import { getInfoUserAction } from "@/actions/auth.action";
import CurrentRenfoSession from "../../../components/exerciceCompoonent/currentRenfoSession";
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

            <div className="mb-6">
                <h1 className="text-3xl font-bold">
                    Exercices
                </h1>

                <p className="text-gray-500 mt-1">
                    Renforce-toi pour grimper plus fort.
                </p>
            </div>

            <div className="flex gap-3 mb-6">
                <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">
                    Bibliothèque
                </button>

                <button className="bg-white border border-slate-200 px-6 py-3 rounded-lg">
                    + Nouvel exercice
                </button>

                <NewRenfoSessionModal exercices={exercices}></NewRenfoSessionModal>
            </div>

            <div className="grid grid-cols-[1.1fr_1fr] gap-6">

                <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold">
                            Bibliothèque d'exercices
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            Retrouve tous les exercices que tu as enregistrés.
                        </p>
                    </div>

                    <div className="flex gap-3 mb-6">
                        <input
                            type="text"
                            placeholder="Rechercher un exercice..."
                            className="flex-1 border border-slate-200 rounded-lg px-4 py-3 outline-none"
                        />

                        <select className="border border-slate-200 rounded-lg px-4">
                            <option>Toutes les catégories</option>
                            <option>Dos</option>
                            <option>Pectoraux</option>
                            <option>Épaules</option>
                            <option>Jambes</option>
                            <option>Gainage</option>
                        </select>
                    </div>

                    <ExercicesList></ExercicesList>

                    <div className="flex justify-between items-center mt-6">
                        <p className="text-sm text-gray-500">
                            6 exercices
                        </p>

                        <div className="flex gap-2">
                            <button className="border border-slate-200 rounded-lg px-3 py-2">
                                ‹
                            </button>

                            <button className="bg-blue-500 text-white rounded-lg px-3 py-2">
                                1
                            </button>

                            <button className="border border-slate-200 rounded-lg px-3 py-2">
                                ›
                            </button>
                        </div>
                    </div>

                </div>


                <div className="flex flex-col gap-6">

                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">

                        <h2 className="text-xl font-semibold">
                            Ajouter un exercice
                        </h2>

                        <p className="text-sm text-gray-500 mt-1 mb-6">
                            Enregistre un nouvel exercice dans ta bibliothèque.
                        </p>

                        <form action={createExerciceAction} className="flex flex-col gap-5">

                            <div className="grid grid-cols-2 gap-4">

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="nom">Nom de l'exercice</label>

                                    <input
                                        name="nom"
                                        type="text"
                                        placeholder="Ex : Tractions lestées"
                                        className="border border-slate-200 rounded-lg px-4 py-3"/>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="nom">Catégorie</label>

                                    <select name="categorie" className="border border-slate-200 rounded-lg px-4 py-3">
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
                            {/* <div className="flex flex-col gap-2">
                                <label>Notes</label>

                                <textarea
                                    placeholder="Ajouter une note..."
                                    className="border border-slate-200 rounded-lg px-4 py-3 min-h-20"
                                />
                            </div> */}

                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-3 font-medium"
                            >
                                + Ajouter l'exercice
                            </button>

                        </form>

                    </div>


                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">

                        <div className="flex justify-between items-center mb-5">

                            <div>
                                <h2 className="text-xl font-semibold">
                                    Ma séance du jour
                                </h2>

                                <p className="text-sm text-gray-500 mt-1">
                                    Coche tes exercices au fur et à mesure.
                                </p>
                            </div>

                            <p className="text-sm text-gray-500">
                                21 septembre 2026
                            </p>

                        </div>


                        <CurrentRenfoSession></CurrentRenfoSession>
                        <button className="w-full mt-4 border border-blue-200 text-blue-600 rounded-lg py-3 font-medium hover:bg-blue-50">
                            + Ajouter un exercice à la séance
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}