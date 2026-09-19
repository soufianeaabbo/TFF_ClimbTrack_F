
import { Mountain } from "lucide-react";


export default function CreateAscension() {

    const tableStyle = ["Dalle", "Dévers", "Vertical", "Toit", "Coordination", "Force", "Technique", "Équilibre", "Puissance", "Crimps", "Slopers", "Compression", "Dynamique", "Statique", "Autre"]


    return (
        <>
            <div className="justepourlefon flex flex-col min-h-[100vh] items-center justify-center  ">

                <div className="flex flex-col gap-5  p-5 w-7/8 ">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>Séances</span>
                        <span>›</span>
                        <span>Session en cours</span>
                        <span>›</span>
                        <span className="text-gray-700 font-medium">
                            Ajouter une ascension
                        </span>
                    </div>

                    <div className="flex items-center gap-4 ">

                        {/* Petit carré bleu avec l'icône */}
                        <div className="bg-blue-100 p-3 rounded-lg">
                            <Mountain size={24} className="text-blue-500" />
                        </div>

                        <div>
                            <h1 className="text-xl font-bold">
                                Ajouter une Ascension
                            </h1>

                            <p className="text-sm text-gray-500">
                                Enregistrer les détails de ce bloc ou de cette voie.
                            </p>
                        </div>

                    </div>


                    <div className="infoApercus flex gap-5 border items-start bg-white/50 border-white rounded-3xl p-5 shadow-sm ">

                        <div className="infobloc  p-5 flex flex-col gap-3 w-3/4  rounded-xl">

                            <form action="" className="flex  gap-5">

                                <div className="w-1/2 infoescalade flex flex-col gap-5 justify-between rounded-2xl p-5 box bg-white shadow-2xl ">
                                    <div>
                                        <h2>Information de l'acension</h2>
                                    </div>

                                    <div>
                                        <label htmlFor="">Type d'escalade*</label>
                                        <div className="flex gap-3">

                                            {/* BLOC */}
                                            <label className="flex-1 cursor-pointer">
                                                <input type="radio" name="type" value="bloc" className="peer hidden" defaultChecked />
                                                <div className="border rounded-lg p-4 text-center peer-checked:bg-[#087FE7] peer-checked:border-cyan-500 border-cyan-500">
                                                    🧗 Bloc
                                                </div>
                                            </label>


                                            {/* VOIE */}
                                            <label className="flex-1 cursor-pointer">
                                                <input type="radio" name="type" value="voie" className="peer hidden" />
                                                <div className="border rounded-lg p-4 text-center peer-checked:bg-[#087FE7] peer-checked:border-cyan-500 border-cyan-500">
                                                    🧗 Voie
                                                </div>
                                            </label>

                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="">Nom du bloc/voie</label>
                                        <input className="border" type="text" placeholder="ex : Le Toit Jaune" />
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="">Cotation</label>
                                        <select className="border" name="grade">
                                            <option value="">Choisir une cotation</option>
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

                                    <div className="flex flex-col">
                                        <label htmlFor="">Secteur/mur</label>
                                        <select className="border" name="grade">
                                            <option value="">Choisir une cotation</option>
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

                                    <div className="flex flex-col">
                                        <label htmlFor="">Couleur</label>
                                        <select className="border" name="grade">
                                            <option value="">Choisir une cotation</option>
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

                                    <div className="flex flex-col">
                                        <label htmlFor="">Commentaire</label>
                                        <input className="border" type="text" />
                                    </div>

                                </div>


                                <div className="w-1/2 resultats flex flex-col gap-5 rounded-2xl p-5 bg-white shadow-2xl">

                                    <div>
                                        <h2>Résultats et essais</h2>
                                    </div>


                                    <div>
                                        <label htmlFor="">Résultats</label>
                                        <div className="flex gap-3">

                                            {/* BLOC */}
                                            <label className="flex-1 cursor-pointer">
                                                <input type="radio" name="type" value="reussi" className="peer hidden " defaultChecked />
                                                <div className="border rounded-lg p-4 text-center peer-checked:bg-[#087FE7] peer-checked:border-cyan-500 border-cyan-500">
                                                    ✅ Réussi
                                                </div>
                                            </label>


                                            {/* VOIE */}
                                            <label className="flex-1 cursor-pointer">
                                                <input type="radio" name="type" value="echouer" className="peer hidden" />
                                                <div className="border rounded-lg p-4 text-center peer-checked:bg-[#087FE7] peer-checked:border-cyan-500 border-cyan-500">
                                                    ❌ Échoué
                                                </div>
                                            </label>

                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="">Nombre d'essais*</label>
                                        <input type="number" className="border" />
                                    </div>


                                    <div className="flex flex-col">
                                        <label htmlFor="">Méthode</label>
                                        <select name="" id="" className="">
                                            <option value="">Flash</option>
                                            <option value="">à vue</option>
                                            <option value="">à projet</option>
                                        </select>
                                    </div>

                                    <div className="border border-gray-800 rounded-xl p-4">

                                        <p className="mb-3 font-semibold">
                                            Style du bloc <span className="text-gray-400 font-normal">(optionnel)</span>
                                        </p>
                                        <div className="grid grid-cols-3 gap-2">
                                            {tableStyle.map((style) => (
                                                <label key={style} className="cursor-pointer">

                                                    {/* Checkbox cachée */}
                                                    <input
                                                        type="checkbox"
                                                        name="styles"
                                                        value={style}
                                                        className="peer hidden"
                                                    />

                                                    {/* Bouton visible */}
                                                    <div
                                                        className=" border  rounded-md px-3 py-2 text-sm text-center peer-checked:bg-[#087FE7] peer-checked:border-cyan-500 border-cyan-500"
                                                    >
                                                        {style}
                                                    </div>

                                                </label>

                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex justify-around gap-5">
                                        <button className="border border-[#E2E8F0] bg-white rounded-lg w-1/3">Annuler</button>
                                        <button className="bg-[#087FE7] text-white rounded-lg px-6 py-3 w-2/3"><a href="/sessionencours">Enregistrer</a></button>
                                    </div>
                                </div>






                            </form>

                        </div>


                        <div className="apercu flex flex-col gap-5 rounded-2xl p-5 bg-white shadow-2xl" >

                            <div className="apercus border p-5 flex flex-col gap-3 rounded-xl">
                                <div>
                                    <h2>Apercu</h2>
                                </div>

                                <div className="bg-red-300 w-80 h-50">

                                </div>

                                <div className="">
                                    <div className="flex justify-between border-b ">
                                        <p>Type</p>
                                        <p>Bloc</p>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="flex justify-between border-b">
                                        <p>Secteur</p>
                                        <p>Le toit</p>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="flex justify-between border-b">
                                        <p>couleur</p>
                                        <p>jaune</p>
                                    </div>
                                </div>

                                <div className=" ">
                                    <div className="flex justify-between border-b ">
                                        <p>Résultats</p>
                                        <p>réussi</p>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="flex justify-between border-b">
                                        <p>Essais</p>
                                        <p>4</p>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="flex justify-between border-b">
                                        <p>méthode</p>
                                        <p>flash</p>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="flex justify-between ">
                                        <p>Style</p>
                                        <p>dévers</p>
                                    </div>
                                </div>

                            </div>





                        </div>


                    </div>




                </div>

            </div>
        </>
    )
}