export default function ProgressionPage() {

    return (
        <div className="min-h-screen bg-slate-50 px-10 py-8">

            <div className="max-w-7xl mx-auto">

                {/* ================================= */}
                {/* HEADER */}
                {/* ================================= */}

                <div className="flex justify-between items-start mb-8">

                    <div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-9 bg-green-500 rounded-full"></div>

                            <h1 className="text-3xl font-bold text-slate-900">
                                Progression
                            </h1>
                        </div>

                        <p className="text-gray-500 mt-2 ml-5">
                            Analyse ton évolution en escalade au fil de tes séances.
                        </p>
                    </div>


                    <div className="bg-white border border-slate-200 rounded-xl p-1 flex gap-1">

                        <button className="px-4 py-2 text-sm rounded-lg text-gray-500">
                            7 jours
                        </button>

                        <button className="px-4 py-2 text-sm rounded-lg bg-green-500 text-white font-medium">
                            30 jours
                        </button>

                        <button className="px-4 py-2 text-sm rounded-lg text-gray-500">
                            3 mois
                        </button>

                        <button className="px-4 py-2 text-sm rounded-lg text-gray-500">
                            6 mois
                        </button>

                    </div>

                </div>


                {/* ================================= */}
                {/* COMPARAISON DES PÉRIODES */}
                {/* ================================= */}

                <div className="grid grid-cols-[2fr_1fr] gap-6 mb-6">

                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">

                        <div className="flex justify-between items-center mb-6">

                            <div>
                                <p className="text-xs font-semibold text-green-600 uppercase">
                                    Période actuelle
                                </p>

                                <p className="font-semibold mt-1">
                                    24 août — 22 septembre 2026
                                </p>
                            </div>

                            <div className="text-sm text-gray-400">
                                comparée aux 30 jours précédents
                            </div>

                        </div>


                        <div className="grid grid-cols-3 gap-5">

                            <div className="bg-green-50 rounded-xl p-5">
                                <p className="text-sm text-gray-500">
                                    Blocs tentés
                                </p>

                                <p className="text-3xl font-bold mt-2">
                                    57
                                </p>

                                <p className="text-xs text-green-600 mt-2">
                                    ↑ 36%
                                </p>
                            </div>


                            <div className="bg-sky-50 rounded-xl p-5">
                                <p className="text-sm text-gray-500">
                                    Blocs réussis
                                </p>

                                <p className="text-3xl font-bold mt-2">
                                    34
                                </p>

                                <p className="text-xs text-sky-600 mt-2">
                                    ↑ 14 réussites
                                </p>
                            </div>


                            <div className="bg-amber-50 rounded-xl p-5">
                                <p className="text-sm text-gray-500">
                                    Taux de réussite
                                </p>

                                <p className="text-3xl font-bold mt-2">
                                    59%
                                </p>

                                <p className="text-xs text-amber-600 mt-2">
                                    ↑ 11 points
                                </p>
                            </div>

                        </div>

                    </div>


                    {/* RÉSUMÉ */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">

                        <h2 className="font-semibold text-lg mb-5">
                            En résumé
                        </h2>


                        <div className="flex flex-col gap-4">

                            <div className="flex justify-between">
                                <span className="text-gray-500">
                                    Taux de réussite
                                </span>

                                <span className="font-semibold text-green-600">
                                    +11 pts
                                </span>
                            </div>


                            <div className="flex justify-between">
                                <span className="text-gray-500">
                                    Essais moyens
                                </span>

                                <span className="font-semibold text-green-600">
                                    -20%
                                </span>
                            </div>


                            <div className="flex justify-between">
                                <span className="text-gray-500">
                                    Volume
                                </span>

                                <span className="font-semibold text-green-600">
                                    +36%
                                </span>
                            </div>


                            <div className="flex justify-between">
                                <span className="text-gray-500">
                                    Meilleure cotation
                                </span>

                                <span className="font-semibold">
                                    V6
                                </span>
                            </div>

                        </div>

                    </div>

                </div>


                {/* ================================= */}
                {/* INDICATEURS */}
                {/* ================================= */}

                <h2 className="text-lg font-semibold mb-4">
                    Indicateurs clés
                </h2>


                <div className="grid grid-cols-4 gap-5 mb-6">

                    {/* TAUX RÉUSSITE */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">

                        <p className="text-sm text-gray-500">
                            Taux de réussite
                        </p>

                        <div className="flex items-end gap-3 mt-2">

                            <p className="text-3xl font-bold">
                                59%
                            </p>

                            <p className="text-sm text-green-600 mb-1">
                                ↑ 11 pts
                            </p>

                        </div>


                        <div className="mt-6">

                            <div className="flex items-end gap-1 h-16">

                                <div className="flex-1 bg-green-100 h-[30%] rounded-t"></div>
                                <div className="flex-1 bg-green-200 h-[45%] rounded-t"></div>
                                <div className="flex-1 bg-green-200 h-[40%] rounded-t"></div>
                                <div className="flex-1 bg-green-300 h-[60%] rounded-t"></div>
                                <div className="flex-1 bg-green-300 h-[55%] rounded-t"></div>
                                <div className="flex-1 bg-green-400 h-[75%] rounded-t"></div>
                                <div className="flex-1 bg-green-500 h-[85%] rounded-t"></div>

                            </div>

                        </div>

                    </div>


                    {/* ESSAIS */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">

                        <p className="text-sm text-gray-500">
                            Essais moyens par réussite
                        </p>

                        <div className="flex items-end gap-3 mt-2">

                            <p className="text-3xl font-bold">
                                3,2
                            </p>

                            <p className="text-sm text-green-600 mb-1">
                                ↓ 20%
                            </p>

                        </div>

                        <p className="text-sm text-gray-400 mt-6">
                            Période précédente
                        </p>

                        <p className="font-semibold mt-1">
                            4 essais
                        </p>

                    </div>


                    {/* VOLUME */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">

                        <p className="text-sm text-gray-500">
                            Volume
                        </p>

                        <div className="flex items-end gap-3 mt-2">

                            <p className="text-3xl font-bold">
                                57
                            </p>

                            <p className="text-sm text-green-600 mb-1">
                                ↑ 36%
                            </p>

                        </div>

                        <p className="text-sm text-gray-400 mt-6">
                            Blocs tentés sur la période
                        </p>

                    </div>


                    {/* FLASH */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">

                        <p className="text-sm text-gray-500">
                            Flashs
                        </p>

                        <div className="flex items-end gap-3 mt-2">

                            <p className="text-3xl font-bold">
                                11
                            </p>

                            <p className="text-sm text-green-600 mb-1">
                                ↑ 83%
                            </p>

                        </div>

                        <p className="text-sm text-gray-400 mt-6">
                            Réussis au premier essai
                        </p>

                    </div>

                </div>


                {/* ================================= */}
                {/* DEUXIÈME LIGNE */}
                {/* ================================= */}

                <div className="grid grid-cols-3 gap-6 mb-6">


                    {/* RÉUSSITE PAR COTATION */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">

                        <h2 className="font-semibold text-lg mb-6">
                            Réussite par cotation
                        </h2>


                        <div className="flex flex-col gap-4">

                            {[
                                ["V2", "100%", "100%"],
                                ["V3", "85%", "85%"],
                                ["V4", "64%", "64%"],
                                ["V5", "52%", "52%"],
                                ["V6", "30%", "30%"],
                                ["V7+", "12%", "12%"]
                            ].map(([grade, value, width]) => (

                                <div key={grade}>

                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="font-medium">
                                            {grade}
                                        </span>

                                        <span className="text-gray-500">
                                            {value}
                                        </span>
                                    </div>

                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">

                                        <div
                                            className="h-full bg-green-500 rounded-full"
                                            style={{ width }}
                                        ></div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>


                    {/* COTATION MAX */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">

                        <h2 className="font-semibold text-lg">
                            Plus haute cotation réussie
                        </h2>


                        <div className="mt-8">

                            <div className="flex items-end gap-3">

                                <p className="text-5xl font-bold text-green-600">
                                    V6
                                </p>

                                <p className="text-green-600 mb-2">
                                    ↑ 1 niveau
                                </p>

                            </div>

                            <p className="text-gray-500 mt-2">
                                contre V5 sur la période précédente
                            </p>

                        </div>


                        <div className="mt-10">

                            <p className="text-sm text-gray-500 mb-3">
                                Évolution
                            </p>

                            <div className="flex items-end gap-2 h-24">

                                <div className="flex-1 bg-green-100 h-[25%] rounded-t"></div>
                                <div className="flex-1 bg-green-200 h-[25%] rounded-t"></div>
                                <div className="flex-1 bg-green-200 h-[40%] rounded-t"></div>
                                <div className="flex-1 bg-green-300 h-[40%] rounded-t"></div>
                                <div className="flex-1 bg-green-400 h-[65%] rounded-t"></div>
                                <div className="flex-1 bg-green-500 h-[85%] rounded-t"></div>

                            </div>

                        </div>

                    </div>


                    {/* STYLES */}
                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">

                        <h2 className="font-semibold text-lg mb-6">
                            Styles dominants
                        </h2>


                        <div className="flex flex-col gap-5">

                            <div>
                                <div className="flex justify-between mb-2">
                                    <span>Dalle</span>
                                    <span className="font-semibold">78%</span>
                                </div>

                                <div className="h-2 bg-slate-100 rounded-full">
                                    <div className="w-[78%] h-full bg-green-500 rounded-full"></div>
                                </div>
                            </div>


                            <div>
                                <div className="flex justify-between mb-2">
                                    <span>Dévers</span>
                                    <span className="font-semibold">61%</span>
                                </div>

                                <div className="h-2 bg-slate-100 rounded-full">
                                    <div className="w-[61%] h-full bg-green-400 rounded-full"></div>
                                </div>
                            </div>


                            <div>
                                <div className="flex justify-between mb-2">
                                    <span>Puissance</span>
                                    <span className="font-semibold">58%</span>
                                </div>

                                <div className="h-2 bg-slate-100 rounded-full">
                                    <div className="w-[58%] h-full bg-green-400 rounded-full"></div>
                                </div>
                            </div>


                            <div>
                                <div className="flex justify-between mb-2">
                                    <span>Vertical</span>
                                    <span className="font-semibold">55%</span>
                                </div>

                                <div className="h-2 bg-slate-100 rounded-full">
                                    <div className="w-[55%] h-full bg-green-300 rounded-full"></div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>


                {/* ================================= */}
                {/* INFORMATION FUTURE FEATURE */}
                {/* ================================= */}

                <div className="bg-green-50 border border-green-100 rounded-2xl p-6">

                    <div className="flex justify-between items-center">

                        <div>
                            <h2 className="font-semibold text-green-700">
                                Analyse avancée de la progression
                            </h2>

                            <p className="text-sm text-gray-600 mt-1">
                                Les statistiques détaillées et la comparaison dynamique
                                des périodes seront disponibles dans une prochaine évolution de ClimbTrack.
                            </p>
                        </div>

                        <span className="bg-white border border-green-200 text-green-600 px-4 py-2 rounded-xl text-sm font-medium">
                            À venir
                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
}