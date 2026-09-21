import SessionsList from "../../../components/sessionComponent/sessionsList";

export default function Sessions() {
    return (
        <div className="min-h-screen bg-slate-50 px-10 py-10">

            <div className="mb-8">
                <h1 className="text-3xl font-bold">
                    Mes séances
                </h1>

                <p className="text-gray-500 mt-1">
                    Retrouve toutes tes séances d'escalade et suis ta progression dans le temps.
                </p>
            </div>

            <div className="grid grid-cols-[2fr_1fr] gap-6">

                <div className="flex flex-col gap-4 max-h-[75vh] overflow-y-auto pr-2">

                    <div className="max-h-[75vh] overflow-y-auto pr-2">
                        <SessionsList />
                    </div>

                </div>

                <div className="flex flex-col gap-5">

                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
                        <h2 className="font-semibold text-lg mb-6">
                            Statistiques générales
                        </h2>

                        <div className="grid grid-cols-2 gap-6">

                            <div>
                                <p className="text-2xl font-bold">
                                    12
                                </p>
                                <p className="text-sm text-gray-500">
                                    séances au total
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-bold">
                                    218
                                </p>
                                <p className="text-sm text-gray-500">
                                    ascensions réalisées
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-bold">
                                    68%
                                </p>
                                <p className="text-sm text-gray-500">
                                    taux de réussite moyen
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-bold">
                                    4
                                </p>
                                <p className="text-sm text-gray-500">
                                    salles différentes
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
                        <h2 className="font-semibold text-lg mb-5">
                            Répartition des cotations
                        </h2>

                        <div className="flex flex-col gap-4">

                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <span className="flex-1">V2</span>
                                <span className="font-medium">32%</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="flex-1">V3</span>
                                <span className="font-medium">28%</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                <span className="flex-1">V4</span>
                                <span className="font-medium">23%</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <span className="flex-1">V5</span>
                                <span className="font-medium">12%</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-slate-800"></div>
                                <span className="flex-1">V6+</span>
                                <span className="font-medium">5%</span>
                            </div>

                        </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
                        <h2 className="font-semibold text-lg mb-5">
                            Salles les plus fréquentées
                        </h2>

                        <div className="flex flex-col gap-4">

                            <div className="flex justify-between">
                                <span>Arkose Canal</span>
                                <span className="font-semibold">6</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Arkose Nation</span>
                                <span className="font-semibold">3</span>
                            </div>

                            <div className="flex justify-between">
                                <span>BeBloc</span>
                                <span className="font-semibold">2</span>
                            </div>

                            <div className="flex justify-between">
                                <span>New Rock</span>
                                <span className="font-semibold">1</span>
                            </div>

                        </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                        <h2 className="font-semibold text-blue-600 mb-2">
                            Conseil
                        </h2>

                        <p className="text-sm text-gray-600">
                            Varie les styles de blocs et les cotations pour continuer à progresser.
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
}