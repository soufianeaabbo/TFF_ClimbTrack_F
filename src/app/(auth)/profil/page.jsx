
export default function Profil() {
    return (
        <div className="min-h-screen bg-slate-50 p-8">

            {/* TITRE */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Mon profil</h1>
                <p className="text-gray-500">
                    Gère tes informations personnelles.
                </p>
            </div>

            <div className="grid grid-cols-[2fr_1fr] gap-6">

                {/* INFORMATIONS PERSONNELLES */}
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">

                    <h2 className="text-xl font-semibold mb-6">
                        Informations personnelles
                    </h2>

                    <div className="grid grid-cols-2 gap-5">

                        <div>
                            <label className="block text-sm mb-2">
                                Prénom
                            </label>

                            <input
                                type="text"
                                defaultValue="Soufiane"
                                className="w-full border border-slate-200 rounded-lg p-3"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-2">
                                Nom
                            </label>

                            <input
                                type="text"
                                defaultValue="Aabbo"
                                className="w-full border border-slate-200 rounded-lg p-3"
                            />
                        </div>

                        <div className="col-span-2">
                            <label className="block text-sm mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                defaultValue="soufiane.aabbo@email.com"
                                className="w-full border border-slate-200 rounded-lg p-3"
                            />
                        </div>

                        <div className="col-span-2">
                            <label className="block text-sm mb-2">
                                Date de naissance
                            </label>

                            <input
                                type="date"
                                className="w-full border border-slate-200 rounded-lg p-3"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-2">
                                Taille
                            </label>

                            <input
                                type="number"
                                defaultValue="169"
                                className="w-full border border-slate-200 rounded-lg p-3"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-2">
                                Poids
                            </label>

                            <input
                                type="number"
                                defaultValue="63"
                                className="w-full border border-slate-200 rounded-lg p-3"
                            />
                        </div>

                    </div>

                    <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg">
                        Enregistrer les modifications
                    </button>

                </div>


                {/* COLONNE DROITE */}
                <div className="flex flex-col gap-6">

                    {/* RESUME */}
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">

                        <h2 className="text-xl font-semibold mb-5">
                            Résumé du compte
                        </h2>

                        <div className="flex flex-col gap-4 text-sm">

                            <div className="flex justify-between">
                                <span className="text-gray-500">Membre depuis</span>
                                <span className="font-medium">12 mai 2026</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-500">Séances réalisées</span>
                                <span className="font-medium">37</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-500">Blocs enregistrés</span>
                                <span className="font-medium">156</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-500">Exercices enregistrés</span>
                                <span className="font-medium">89</span>
                            </div>

                        </div>

                    </div>


                    {/* OBJECTIF */}
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">

                        <h2 className="text-xl font-semibold mb-5">
                            Objectif actuel
                        </h2>

                        <p className="font-semibold mb-3">
                            Traction lestée +35 kg
                        </p>

                        <div className="flex items-center gap-3">

                            <div className="w-full h-2 bg-slate-200 rounded-full">
                                <div className="w-[77%] h-2 bg-blue-500 rounded-full"></div>
                            </div>

                            <span className="text-sm">
                                77%
                            </span>

                        </div>

                        <p className="text-sm text-gray-500 mt-3">
                            Échéance : Décembre 2026
                        </p>

                        <button className="text-blue-500 mt-5">
                            Modifier
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}