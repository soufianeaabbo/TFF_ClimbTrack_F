export default function SessionEnCours() {

    return (
        <div className="flex justify-center h-full">

            <div className="flex flex-col items-center justify-center border w-7/8 gap-5  ">
                <div className="bg-green-400 w-full">
                    <h2>Session en cours</h2>
                    <p>Ajoute tes ascensions au fur et à mesure de ta session</p>
                </div>

                <div className="bg-red-300 h-40 w-full">
                    div avec les donnéer du formulaire
                </div>

                <div className="bg-blue-400  flex flex-col gap-5 w-full max-h-00 overflow-y-auto">
                    <div className="flex gap justify-between p-2">
                        <div>
                            <p>Ascension (4)</p>
                        </div>
                        <div className="flex">
                            <p>Trier par :</p>
                            <p>Heure</p>
                        </div>
                    </div>


                    <div className="max-h-80 overflow-y-auto flex flex-col  gap-5"
                    >

                        <div className="sectionascension flex bg-amber-300  justify-around p-2 items-center">
                            <div>19:42</div>
                            <div>Bloc</div>
                            <div>
                                <div>Le toit Jaune</div>
                                <div>Secteur le toit</div>
                            </div>
                            <div>V4</div>
                            <div>3 essaie</div>
                            <div>Reussis</div>
                            <div>Flash</div>
                            <div>...</div>

                        </div>
                        <div className="sectionascension flex bg-amber-300  justify-around p-2 items-center">
                            <div>19:42</div>
                            <div>Bloc</div>
                            <div>
                                <div>Le toit Jaune</div>
                                <div>Secteur le toit</div>
                            </div>
                            <div>V4</div>
                            <div>3 essaie</div>
                            <div>Reussis</div>
                            <div>Flash</div>
                            <div>...</div>

                        </div>
                        <div className="sectionascension flex bg-amber-300  justify-around p-2 items-center">
                            <div>19:42</div>
                            <div>Bloc</div>
                            <div>
                                <div>Le toit Jaune</div>
                                <div>Secteur le toit</div>
                            </div>
                            <div>V4</div>
                            <div>3 essaie</div>
                            <div>Reussis</div>
                            <div>Flash</div>
                            <div>...</div>

                        </div>
                        <div className="sectionascension flex bg-amber-300  justify-around p-2 items-center">
                            <div>19:42</div>
                            <div>Bloc</div>
                            <div>
                                <div>Le toit Jaune</div>
                                <div>Secteur le toit</div>
                            </div>
                            <div>V4</div>
                            <div>3 essaie</div>
                            <div>Reussis</div>
                            <div>Flash</div>
                            <div>...</div>

                        </div>
                    </div>




                    <div className="sectionascension bg-amber-300 flex flex-col items-center justify-center ">
                        <div>➕</div>
                        <div><a href="/ascension">Ajouter une ascension</a></div>
                        <div>ajouter une ascension en mode div vide si il veut ajouter un autres bloc/voie a sa session</div>

                    </div>

                    <div className="flex justify-around">
                        <button className="border p-2">Mettre en pause</button>
                        <button className="border p-2">Terminer la session</button>
                    </div>

                </div>
            </div>
        </div>


    )
}