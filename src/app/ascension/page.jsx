
export default function CreateAscension() {

    

    return (
        <>
            <div className="flex flex-col min-h-[100vh] items-center justify-center border">

                <div className="flex flex-col gap-5">
                    <div className="flex flex-col  ">
                        <h1>Ajouter une Ascension</h1>
                        <p>Enregistre les détails de ce bloc ou de cette voie.</p>
                        
                    </div>

                    <div className="infoApercus flex gap-5  ">


                        <div className="apercu flex flex-col gap-5 bg-red-400 w-90 " >

                            <div className="infobloc border p-5 flex flex-col gap-3 rounded-xl">

                                <div>
                                    <h2>Information de l'acension</h2>
                                </div>

                                <form action="">

                                    <div>
                                        <label htmlFor="">Type d'escalade</label>
                                        <select name="" id="">
                                            <option value="bloc">bloc</option>
                                            <option value="voie">voie</option>
                                        </select>
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
                                        <label  htmlFor="">Couleur</label>
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




                                </form>


                            </div>



                        </div>


                        <div className="ResultTry flex flex-col gap-5 bg-blue-300 w-90 " >

                            <div className="apercus border p-5 flex flex-col gap-3 rounded-xl">
                                <div>
                                    <h2>Résultats</h2>
                                </div>

                                <div className="">
                                    <div className="flex justify-between border-b ">
                                        <p>date</p>
                                        <p>9 septembre 2026</p>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="flex justify-between border-b">
                                        <p>LIEU</p>
                                        <p>Arkose Nation</p>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="flex justify-between border-b">
                                        <p>Type</p>
                                        <p>Bloc</p>
                                    </div>
                                </div>

                                <div className=" ">
                                    <div className="flex justify-between border-b ">
                                        <p>Heure de début</p>
                                        <p>18:30</p>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="flex justify-between border-b">
                                        <p>Durée prévue</p>
                                        <p>--</p>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="flex justify-between border-b">
                                        <p>Objectif</p>
                                        <p>Aucun</p>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="flex justify-between ">
                                        <p>Partenaire</p>
                                        <p>--</p>
                                    </div>
                                </div>

                            </div>



                        </div>

                        <div className="apercu flex flex-col gap-5  bg-amber-300 " >

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

                            <div className="flex justify-around">
                                <button>Annuler</button>
                                <button><a href="/sessionencours">Enregistrer</a></button>
                            </div>



                        </div>

                        

                    </div>
                </div>

            </div>
        </>
    )
}