
export default function DashboardPage() {

    return (
        <div className="min-h-screen bg-slate-50 px-10 py-8">

            <div className="max-w-7xl mx-auto">

                {/* ========================= */}
                {/* HEADER */}
                {/* ========================= */}

                <div className="flex items-center justify-between mb-8">

                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">
                            Salut Soufiane 👋
                        </h1>

                        <p className="text-gray-500 mt-1">
                            Voici un aperçu de ton activité et de ta progression.
                        </p>
                    </div>

                    <a
                        href="/creationSession"
                        className="bg-violet-500 hover:bg-violet-600 text-white px-5 py-3 rounded-xl font-medium transition shadow-sm"
                    >
                        + Nouvelle session
                    </a>

                </div>


                {/* ========================= */}
                {/* STATISTIQUES */}
                {/* ========================= */}

                <div className="grid grid-cols-4 gap-5 mb-6">

                    {/* SÉANCES */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">

                        <div className="flex justify-between items-start">

                            <div>
                                <p className="text-sm text-gray-500">
                                    Séances cette semaine
                                </p>

                                <p className="text-3xl font-bold text-slate-900 mt-2">
                                    3
                                </p>
                            </div>

                            <div className="w-10 h-10 bg-sky-50 text-sky-500 rounded-xl flex items-center justify-center font-bold">
                                S
                            </div>

                        </div>

                        <p className="text-xs text-sky-600 mt-4">
                            Activité de la semaine
                        </p>

                    </div>


                    {/* BLOCS */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">

                        <div className="flex justify-between items-start">

                            <div>
                                <p className="text-sm text-gray-500">
                                    Blocs réussis
                                </p>

                                <p className="text-3xl font-bold text-slate-900 mt-2">
                                    24
                                </p>
                            </div>

                            <div className="w-10 h-10 bg-green-50 text-green-500 rounded-xl flex items-center justify-center font-bold">
                                ✓
                            </div>

                        </div>

                        <p className="text-xs text-green-600 mt-4">
                            Sur tes dernières séances
                        </p>

                    </div>


                    {/* VOLUME */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">

                        <div className="flex justify-between items-start">

                            <div>
                                <p className="text-sm text-gray-500">
                                    Volume d'entraînement
                                </p>

                                <p className="text-3xl font-bold text-slate-900 mt-2">
                                    4h30
                                </p>
                            </div>

                            <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center font-bold">
                                +
                            </div>

                        </div>

                        <p className="text-xs text-amber-600 mt-4">
                            Escalade et renforcement
                        </p>

                    </div>


                    {/* PROGRESSION */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">

                        <div className="flex justify-between items-start">

                            <div>
                                <p className="text-sm text-gray-500">
                                    Progression globale
                                </p>

                                <p className="text-3xl font-bold text-slate-900 mt-2">
                                    +12%
                                </p>
                            </div>

                            <div className="w-10 h-10 bg-indigo-50 text-indigo-500 rounded-xl flex items-center justify-center font-bold">
                                ↗
                            </div>

                        </div>

                        <p className="text-xs text-indigo-600 mt-4">
                            Continue comme ça
                        </p>

                    </div>

                </div>


                {/* ========================= */}
                {/* CONTENU PRINCIPAL */}
                {/* ========================= */}

                <div className="grid grid-cols-3 gap-6 mb-6">


                    {/* COLONNE GAUCHE */}
                    <div className="flex flex-col gap-6">


                        {/* DERNIÈRE SÉANCE */}
                        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">

                            <div className="flex justify-between items-center mb-5">

                                <h2 className="text-lg font-semibold text-slate-900">
                                    Dernière séance
                                </h2>

                                <a
                                    href="/sessions"
                                    className="text-sm text-sky-600 font-medium"
                                >
                                    Voir tout
                                </a>

                            </div>


                            <div className="bg-sky-50 rounded-xl p-4">

                                <p className="font-semibold text-slate-900">
                                    Arkose Canal
                                </p>

                                <p className="text-sm text-gray-500 mt-1">
                                    25 septembre 2026
                                </p>


                                <div className="flex gap-6 mt-4">

                                    <div>
                                        <p className="text-lg font-semibold">
                                            20
                                        </p>

                                        <p className="text-xs text-gray-500">
                                            blocs
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-lg font-semibold">
                                            120 min
                                        </p>

                                        <p className="text-xs text-gray-500">
                                            durée
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* TRACTIONS */}
                        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">

                            <div className="flex items-center justify-between mb-5">

                                <div>
                                    <h2 className="text-lg font-semibold">
                                        Traction lestée
                                    </h2>

                                    <p className="text-sm text-gray-500">
                                        Progression récente
                                    </p>
                                </div>

                                <span className="bg-amber-50 text-amber-600 text-sm font-semibold px-3 py-1 rounded-lg">
                                    +20 kg
                                </span>

                            </div>


                            <div className="mb-2 flex justify-between text-sm">

                                <span className="text-gray-500">
                                    Objectif
                                </span>

                                <span className="font-medium">
                                    +35 kg
                                </span>

                            </div>


                            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">

                                <div className="w-[57%] h-full bg-amber-400 rounded-full"></div>

                            </div>

                            <p className="text-xs text-gray-400 mt-3">
                                57% de ton objectif
                            </p>

                        </div>

                    </div>


                    {/* ========================= */}
                    {/* MES EXERCICES */}
                    {/* ========================= */}

                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">

                        <div className="flex justify-between items-center mb-6">

                            <div>
                                <h2 className="text-lg font-semibold">
                                    Mes exercices
                                </h2>

                                <p className="text-sm text-gray-500 mt-1">
                                    Tes exercices récents
                                </p>
                            </div>

                            <a
                                href="/exo"
                                className="text-sm text-amber-600 font-medium"
                            >
                                Voir tout
                            </a>

                        </div>


                        <div className="flex flex-col">

                            <div className="py-4 border-b border-slate-100">

                                <p className="font-medium">
                                    Traction lestée
                                </p>

                                <p className="text-sm text-gray-500 mt-1">
                                    Dos
                                </p>

                            </div>


                            <div className="py-4 border-b border-slate-100">

                                <p className="font-medium">
                                    Pompes
                                </p>

                                <p className="text-sm text-gray-500 mt-1">
                                    Pectoraux
                                </p>

                            </div>


                            <div className="py-4">

                                <p className="font-medium">
                                    Gainage
                                </p>

                                <p className="text-sm text-gray-500 mt-1">
                                    Abdominaux
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* ========================= */}
                    {/* TOP BLOCS */}
                    {/* ========================= */}

                    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">

                        <div className="flex justify-between items-center mb-6">

                            <div>
                                <h2 className="text-lg font-semibold">
                                    Blocs récents
                                </h2>

                                <p className="text-sm text-gray-500 mt-1">
                                    Tes dernières ascensions
                                </p>
                            </div>

                            <a
                                href="/sessions"
                                className="text-sm text-green-600 font-medium"
                            >
                                Historique
                            </a>

                        </div>


                        <div className="flex flex-col gap-3">

                            <div className="flex justify-between items-center bg-green-50 p-4 rounded-xl">

                                <div>
                                    <p className="font-medium">
                                        Bloc #12
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        Arkose Canal
                                    </p>
                                </div>

                                <span className="font-semibold text-green-600">
                                    V5
                                </span>

                            </div>


                            <div className="flex justify-between items-center bg-sky-50 p-4 rounded-xl">

                                <div>
                                    <p className="font-medium">
                                        Bloc #8
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        Arkose Canal
                                    </p>
                                </div>

                                <span className="font-semibold text-sky-600">
                                    V4
                                </span>

                            </div>


                            <div className="flex justify-between items-center bg-amber-50 p-4 rounded-xl">

                                <div>
                                    <p className="font-medium">
                                        Bloc #4
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        Arkose Canal
                                    </p>
                                </div>

                                <span className="font-semibold text-amber-600">
                                    V3
                                </span>

                            </div>

                        </div>

                    </div>

                </div>


                {/* ======================================= */}
                {/* PLANNING */}
                {/* ======================================= */}

                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">

                    <div className="flex justify-between items-center mb-6">

                        <div>
                            <h2 className="text-xl font-semibold text-slate-900">
                                Planning de la semaine
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                Organise tes prochaines séances et jours de repos.
                            </p>
                        </div>


                        <button className="border border-indigo-200 text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-xl font-medium transition">
                            + Ajouter
                        </button>

                    </div>


                    {/* JOURS */}
                    <div className="grid grid-cols-7 gap-3">

                        {/* LUNDI */}
                        <div className="border border-slate-200 rounded-xl p-4 min-h-32">

                            <p className="text-xs text-gray-400 uppercase">
                                Lun
                            </p>

                            <p className="font-semibold mt-1">
                                21
                            </p>

                            <div className="mt-5 bg-slate-100 text-slate-500 rounded-lg p-2 text-sm">
                                Repos
                            </div>

                        </div>


                        {/* MARDI */}
                        <div className="border border-sky-200 bg-sky-50/40 rounded-xl p-4 min-h-32">

                            <p className="text-xs text-sky-500 uppercase">
                                Mar
                            </p>

                            <p className="font-semibold mt-1">
                                22
                            </p>

                            <div className="mt-5 bg-sky-100 text-sky-700 rounded-lg p-2 text-sm">
                                Escalade
                                <p className="text-xs mt-1">
                                    18:30
                                </p>
                            </div>

                        </div>


                        {/* MERCREDI */}
                        <div className="border border-slate-200 rounded-xl p-4 min-h-32">

                            <p className="text-xs text-gray-400 uppercase">
                                Mer
                            </p>

                            <p className="font-semibold mt-1">
                                23
                            </p>

                        </div>


                        {/* JEUDI */}
                        <div className="border border-amber-200 bg-amber-50/40 rounded-xl p-4 min-h-32">

                            <p className="text-xs text-amber-600 uppercase">
                                Jeu
                            </p>

                            <p className="font-semibold mt-1">
                                24
                            </p>

                            <div className="mt-5 bg-amber-100 text-amber-700 rounded-lg p-2 text-sm">
                                Renforcement
                                <p className="text-xs mt-1">
                                    17:00
                                </p>
                            </div>

                        </div>


                        {/* VENDREDI */}
                        <div className="border border-slate-200 rounded-xl p-4 min-h-32">

                            <p className="text-xs text-gray-400 uppercase">
                                Ven
                            </p>

                            <p className="font-semibold mt-1">
                                25
                            </p>

                        </div>


                        {/* SAMEDI */}
                        <div className="border border-sky-200 bg-sky-50/40 rounded-xl p-4 min-h-32">

                            <p className="text-xs text-sky-500 uppercase">
                                Sam
                            </p>

                            <p className="font-semibold mt-1">
                                26
                            </p>

                            <div className="mt-5 bg-sky-100 text-sky-700 rounded-lg p-2 text-sm">
                                Escalade
                                <p className="text-xs mt-1">
                                    15:00
                                </p>
                            </div>

                        </div>


                        {/* DIMANCHE */}
                        <div className="border border-slate-200 rounded-xl p-4 min-h-32">

                            <p className="text-xs text-gray-400 uppercase">
                                Dim
                            </p>

                            <p className="font-semibold mt-1">
                                27
                            </p>

                            <div className="mt-5 bg-slate-100 text-slate-500 rounded-lg p-2 text-sm">
                                Repos
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}