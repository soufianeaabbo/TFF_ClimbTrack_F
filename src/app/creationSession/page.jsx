import Link from "next/link";

export default function CreateSession() {

    return (
        <>
            <div className="flex flex-col min-h-[100vh] items-center justify-center border">

                <div className="flex flex-col gap-5">
                    <div className="flex flex-col  ">
                        <h1>Créer une Seance</h1>
                        <p>Renseigne les informations de ta séance pour commencer à enregistrer tes blocs et voies</p>
                    </div>

                    <div className="infoApercus flex gap-5  ">
                        <div className="formCreeSession border bg-amber-300 p-5 rounded-xl ">

                            <form action="" className="gap-10 flex flex-col">
                                <div className="infoG flex flex-col gap-5">
                                    <div className="">
                                        <h4>Informations générales </h4>
                                        <p>Ou et quand tu grimpes ?</p>
                                    </div>

                                    <div className="flex gap-5">
                                        <div className="flex flex-col">
                                            <label htmlFor="">Date :</label>
                                            <input className="border" type="text" />
                                        </div>

                                        <div className="flex flex-col">
                                            <label htmlFor="">Lieu/Salle* :</label>
                                            <input className="border" type="text" />
                                        </div>
                                    </div>

                                    <div className="flex gap-5">
                                        <div className="flex flex-col">
                                            <label htmlFor="">Type d'éscalade :</label>
                                            <input className="border" type="text" />
                                        </div>

                                        <div className="flex flex-col">
                                            <label htmlFor="">Heure de début* :</label>
                                            <input className="border" type="text" />
                                        </div>
                                    </div>
                                </div>


                                <hr />
                                <div className="infoO flex flex-col gap-5 ">
                                    <div>
                                        <h4>Informations générales</h4>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="flex flex-col">
                                            <label htmlFor="">Durée prévue :</label>
                                            <input className="border" type="text" />
                                        </div>

                                        <div className="flex flex-col">
                                            <label htmlFor="">Partenaire de grimpe :</label>
                                            <input className="border" type="text" />
                                        </div>
                                    </div>

                                    <div className="flex gap-5">
                                        <div className="flex flex-col">
                                            <label htmlFor="">Objectif de la séance :</label>
                                            <input className="border" type="text" />
                                        </div>

                                        <div className="flex flex-col">
                                            <label htmlFor="">notes :</label>
                                            <input className="border" type="text" />
                                        </div>
                                    </div>
                                </div>

                                <Link href="/sessionencours">
                                    <button className="bg-red-500">Démarrer la session</button>
                                </Link>

                                {/* <button className="bg-cyan-900">Démarrer la session</button> */}

                            </form>
                        </div>


                        <div className="apercu flex flex-col gap-5  " >

                            <div className="apercus border p-5 flex flex-col gap-3 rounded-xl">
                                <div>
                                    <h2>Apercu</h2>
                                    <p>Un petit aperçu de ta futur séance</p>
                                </div>

                                <div>
                                    image de la salle peut etre icic
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

                            <div className="border p-5 rounded-xl">
                                <h2>Conseil</h2>
                                <p>Tu pourras modifier ces infos ...</p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}