
import { Mountain } from "lucide-react";
import { createAscensionAction } from "@/actions/ascension.action";

export default async function CreateAscension({ params }) {

    const tableStyle = ["Dalle", "Dévers", "Vertical", "Toit", "Coordination", "Force", "Technique", "Équilibre", "Puissance", "Crimps", "Slopers", "Compression", "Dynamique", "Statique", "Autre"]


    const { id } = await params;

    return (
    <div className="min-h-screen bg-slate-50 px-8 py-10">

        <div className="max-w-6xl mx-auto">

            {/* FIL D'ARIANE */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <span>Séances</span>
                <span>›</span>
                <span>Session en cours</span>
                <span>›</span>
                <span className="text-gray-700 font-medium">
                    Ajouter une ascension
                </span>
            </div>


            {/* TITRE */}
            <div className="flex items-center gap-4 mb-8">

                <div className="bg-blue-100 p-3 rounded-xl">
                    <Mountain size={24} className="text-blue-500" />
                </div>

                <div>
                    <h1 className="text-2xl font-bold text-slate-900">
                        Ajouter une ascension
                    </h1>

                    <p className="text-sm text-gray-500">
                        Enregistre les informations de ton bloc ou de ta voie.
                    </p>
                </div>

            </div>


            {/* FORMULAIRE */}
            <form
                action={createAscensionAction}
                className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden"
            >

                <input
                    type="hidden"
                    name="session_id"
                    value={id}
                />


                <div className="grid grid-cols-2">


                    {/* ============================= */}
                    {/* COLONNE GAUCHE */}
                    {/* ============================= */}

                    <div className="p-8 border-r border-slate-200">

                        <div className="mb-7">
                            <p className="text-xs font-semibold text-blue-500 uppercase mb-1">
                                Étape 1
                            </p>

                            <h2 className="text-xl font-bold text-slate-900">
                                Informations de l'ascension
                            </h2>
                        </div>


                        <div className="flex flex-col gap-6">


                            {/* TYPE */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Type d'escalade *
                                </label>

                                <div className="grid grid-cols-2 gap-3">

                                    <label className="cursor-pointer">

                                        <input
                                            type="radio"
                                            name="type"
                                            value="bloc"
                                            className="peer hidden"
                                            defaultChecked
                                        />

                                        <div className="border border-slate-200 rounded-xl p-3 text-center transition peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-500 hover:border-blue-300">
                                            🧗 Bloc
                                        </div>

                                    </label>


                                    <label className="cursor-pointer">

                                        <input
                                            type="radio"
                                            name="type"
                                            value="voie"
                                            className="peer hidden"
                                        />

                                        <div className="border border-slate-200 rounded-xl p-3 text-center transition peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-500 hover:border-blue-300">
                                            🧗 Voie
                                        </div>

                                    </label>

                                </div>
                            </div>


                            {/* NOM */}
                            <div>
                                <label
                                    htmlFor="nom"
                                    className="block text-sm font-medium text-slate-700 mb-2"
                                >
                                    Nom du bloc / voie
                                </label>

                                <input
                                    id="nom"
                                    name="nom"
                                    type="text"
                                    placeholder="Ex : Le Toit Jaune"
                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                                />
                            </div>


                            {/* COTATION + SECTEUR */}
                            <div className="grid grid-cols-2 gap-4">

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Cotation
                                    </label>

                                    <select
                                        name="cotation"
                                        className="w-full border border-slate-200 rounded-xl px-4 py-3 bg-white outline-none focus:border-blue-500"
                                    >
                                        <option value="">Choisir</option>
                                        <option value="V0">V0</option>
                                        <option value="V1">V1</option>
                                        <option value="V2">V2</option>
                                        <option value="V3">V3</option>
                                        <option value="V4">V4</option>
                                        <option value="V5">V5</option>
                                        <option value="V6">V6</option>
                                        <option value="V7+">V7+</option>
                                    </select>
                                </div>


                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Secteur / mur
                                    </label>

                                    <select
                                        name="secteur"
                                        className="w-full border border-slate-200 rounded-xl px-4 py-3 bg-white outline-none focus:border-blue-500"
                                    >
                                        <option value="">Choisir</option>
                                        <option value="Devers">Devers</option>
                                        <option value="dalle">Dalle</option>
                                        <option value="arete">Arête</option>
                                        <option value="diedre">Dièdre</option>
                                        <option value="toit">Toit</option>
                                        <option value="vertical">Vertical</option>
                                    </select>
                                </div>

                            </div>


                            {/* COULEUR */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Couleur
                                </label>

                                <select
                                    name="couleur"
                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 bg-white outline-none focus:border-blue-500"
                                >
                                    <option value="">Choisir une couleur</option>
                                    <option value="Jaune">Jaune</option>
                                    <option value="Vert">Vert</option>
                                    <option value="BLeu">Bleu</option>
                                    <option value="Rouge">Rouge</option>
                                    <option value="Noire">Noire</option>
                                    <option value="Mauve">Mauve</option>
                                </select>
                            </div>


                            {/* COMMENTAIRE */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Commentaire
                                </label>

                                <textarea
                                    name="commentaire"
                                    rows="3"
                                    placeholder="Une remarque sur cette ascension..."
                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 resize-none outline-none focus:border-blue-500"
                                />
                            </div>

                        </div>

                    </div>


                    {/* ============================= */}
                    {/* COLONNE DROITE */}
                    {/* ============================= */}

                    <div className="p-8">

                        <div className="mb-7">
                            <p className="text-xs font-semibold text-blue-500 uppercase mb-1">
                                Étape 2
                            </p>

                            <h2 className="text-xl font-bold text-slate-900">
                                Résultat et caractéristiques
                            </h2>
                        </div>


                        <div className="flex flex-col gap-6">


                            {/* RESULTAT */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Résultat
                                </label>

                                <div className="grid grid-cols-2 gap-3">

                                    <label className="cursor-pointer">

                                        <input
                                            type="radio"
                                            name="resultat"
                                            value="true"
                                            className="peer hidden"
                                            defaultChecked
                                        />

                                        <div className="border border-slate-200 rounded-xl p-3 text-center transition peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-500">
                                            ✓ Réussi
                                        </div>

                                    </label>


                                    <label className="cursor-pointer">

                                        <input
                                            type="radio"
                                            name="resultat"
                                            value="false"
                                            className="peer hidden"
                                        />

                                        <div className="border border-slate-200 rounded-xl p-3 text-center transition peer-checked:bg-red-500 peer-checked:text-white peer-checked:border-red-500">
                                            ✕ Échoué
                                        </div>

                                    </label>

                                </div>
                            </div>


                            {/* ESSAIS */}
                            <div>
                                <label
                                    htmlFor="nombre_essais"
                                    className="block text-sm font-medium text-slate-700 mb-2"
                                >
                                    Nombre d'essais *
                                </label>

                                <select
                                    name="nombre_essais"
                                    id="nombre_essais"
                                    required
                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 bg-white outline-none focus:border-blue-500"
                                >
                                    <option value="">Sélectionner</option>
                                    <option value="1">Flash — 1 essai</option>
                                    <option value="2">2 essais</option>
                                    <option value="3">3 essais</option>
                                    <option value="4">4 essais</option>
                                    <option value="5">5 essais</option>
                                    <option value="6">6 essais</option>
                                    <option value="7">7 essais</option>
                                    <option value="8">8 essais</option>
                                    <option value="9">9 essais</option>
                                    <option value="10">10+ essais</option>
                                </select>
                            </div>


                            {/* STYLES */}
                            <div>

                                <div className="mb-3">
                                    <p className="text-sm font-medium text-slate-700">
                                        Style du bloc
                                    </p>

                                    <p className="text-xs text-gray-400">
                                        Tu peux sélectionner plusieurs styles.
                                    </p>
                                </div>


                                <div className="grid grid-cols-3 gap-2">

                                    {tableStyle.map((style) => (

                                        <label
                                            key={style}
                                            className="cursor-pointer"
                                        >

                                            <input
                                                type="checkbox"
                                                name="styles"
                                                value={style}
                                                className="peer hidden"
                                            />

                                            <div className="border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-center transition hover:border-blue-300 peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-500">
                                                {style}
                                            </div>

                                        </label>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* BAS DU FORMULAIRE */}
                <div className="border-t border-slate-200 bg-slate-50 px-8 py-5 flex items-center justify-between">

                    <p className="text-sm text-gray-400">
                        Les champs avec * sont obligatoires.
                    </p>


                    <div className="flex gap-3">

                        <button
                            type="button"
                            className="border border-slate-200 bg-white text-slate-600 rounded-xl px-6 py-3 hover:bg-slate-100"
                        >
                            Annuler
                        </button>

                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl px-8 py-3"
                        >
                            Enregistrer l'ascension
                        </button>

                    </div>

                </div>

            </form>

        </div>

    </div>
);
}