export default function Exercices() {
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

                <button className="bg-white border border-slate-200 px-6 py-3 rounded-lg">
                    Ma séance
                </button>
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

                    <div className="flex flex-col">

                        <div className="flex items-center justify-between border-b border-slate-200 py-4">
                            <div>
                                <p className="font-semibold">
                                    Tractions lestées
                                </p>
                                <p className="text-sm text-gray-500">
                                    Dos
                                </p>
                            </div>

                            <div className="text-sm text-gray-500">
                                Dernière séance : 15 sept. 2026
                            </div>
                        </div>

                        <div className="flex items-center justify-between border-b border-slate-200 py-4">
                            <div>
                                <p className="font-semibold">
                                    Pompes
                                </p>
                                <p className="text-sm text-gray-500">
                                    Pectoraux
                                </p>
                            </div>

                            <div className="text-sm text-gray-500">
                                Dernière séance : 10 sept. 2026
                            </div>
                        </div>

                        <div className="flex items-center justify-between border-b border-slate-200 py-4">
                            <div>
                                <p className="font-semibold">
                                    Développé couché
                                </p>
                                <p className="text-sm text-gray-500">
                                    Pectoraux
                                </p>
                            </div>

                            <div className="text-sm text-gray-500">
                                Dernière séance : 8 sept. 2026
                            </div>
                        </div>

                        <div className="flex items-center justify-between border-b border-slate-200 py-4">
                            <div>
                                <p className="font-semibold">
                                    Élévations latérales
                                </p>
                                <p className="text-sm text-gray-500">
                                    Épaules
                                </p>
                            </div>

                            <div className="text-sm text-gray-500">
                                Dernière séance : 5 sept. 2026
                            </div>
                        </div>

                        <div className="flex items-center justify-between border-b border-slate-200 py-4">
                            <div>
                                <p className="font-semibold">
                                    Gainage
                                </p>
                                <p className="text-sm text-gray-500">
                                    Gainage
                                </p>
                            </div>

                            <div className="text-sm text-gray-500">
                                Dernière séance : 3 sept. 2026
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4">
                            <div>
                                <p className="font-semibold">
                                    Leg curls
                                </p>
                                <p className="text-sm text-gray-500">
                                    Jambes
                                </p>
                            </div>

                            <div className="text-sm text-gray-500">
                                Dernière séance : 1 sept. 2026
                            </div>
                        </div>

                    </div>

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

                        <form className="flex flex-col gap-5">

                            <div className="grid grid-cols-2 gap-4">

                                <div className="flex flex-col gap-2">
                                    <label>Nom de l'exercice</label>

                                    <input
                                        type="text"
                                        placeholder="Ex : Tractions lestées"
                                        className="border border-slate-200 rounded-lg px-4 py-3"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label>Catégorie</label>

                                    <select className="border border-slate-200 rounded-lg px-4 py-3">
                                        <option>Sélectionner une catégorie</option>
                                        <option>Dos</option>
                                        <option>Pectoraux</option>
                                        <option>Épaules</option>
                                        <option>Jambes</option>
                                        <option>Gainage</option>
                                    </select>
                                </div>

                            </div>

                            <div className="grid grid-cols-4 gap-4">

                                <div className="flex flex-col gap-2">
                                    <label>Charge (kg)</label>

                                    <input
                                        type="number"
                                        placeholder="20"
                                        className="border border-slate-200 rounded-lg px-3 py-3"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label>Répétitions</label>

                                    <input
                                        type="number"
                                        placeholder="8"
                                        className="border border-slate-200 rounded-lg px-3 py-3"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label>Séries</label>

                                    <input
                                        type="number"
                                        placeholder="4"
                                        className="border border-slate-200 rounded-lg px-3 py-3"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label>Repos</label>

                                    <input
                                        type="number"
                                        placeholder="180 sec"
                                        className="border border-slate-200 rounded-lg px-3 py-3"
                                    />
                                </div>

                            </div>

                            <div className="flex flex-col gap-2">
                                <label>Notes</label>

                                <textarea
                                    placeholder="Ajouter une note..."
                                    className="border border-slate-200 rounded-lg px-4 py-3 min-h-20"
                                />
                            </div>

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


                        <div className="flex flex-col">

                            <div className="grid grid-cols-[40px_1fr_1fr] items-center border-b border-slate-200 py-4">
                                <input type="checkbox" />

                                <p className="font-semibold">
                                    Tractions lestées
                                </p>

                                <p className="text-gray-500">
                                    4 × 6 @ +20 kg
                                </p>
                            </div>

                            <div className="grid grid-cols-[40px_1fr_1fr] items-center border-b border-slate-200 py-4">
                                <input type="checkbox" />

                                <p className="font-semibold">
                                    Développé couché
                                </p>

                                <p className="text-gray-500">
                                    4 × 8 @ 60 kg
                                </p>
                            </div>

                            <div className="grid grid-cols-[40px_1fr_1fr] items-center border-b border-slate-200 py-4">
                                <input type="checkbox" />

                                <p className="font-semibold">
                                    Élévations latérales
                                </p>

                                <p className="text-gray-500">
                                    3 × 12 @ 8 kg
                                </p>
                            </div>

                            <div className="grid grid-cols-[40px_1fr_1fr] items-center py-4">
                                <input type="checkbox" />

                                <p className="font-semibold">
                                    Gainage
                                </p>

                                <p className="text-gray-500">
                                    3 × 1 min
                                </p>
                            </div>

                        </div>

                        <button className="w-full mt-4 border border-blue-200 text-blue-600 rounded-lg py-3 font-medium hover:bg-blue-50">
                            + Ajouter un exercice à la séance
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}