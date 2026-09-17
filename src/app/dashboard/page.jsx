
export default function DashboardPage() {

    return (
        <div className="flex flex-col p-5 justify-center items-center ">

                <div>
                    <a href="/creationSession"> + Nouvelle session</a>
                </div>

            <div className="p-5 border flex flex-col gap-5 w-7/8">

                <div className="border">
                    <p>Salut Soufiane</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>

                <div className="border flex gap-2 bg-red-50 justify-between">
                    <div className="border w-1/4">Séances cette semaine</div>
                    <div className="border w-1/4">Blocs réussis</div>
                    <div className="border w-1/4">volume d'entrainement</div>
                    <div className="border w-1/4"> progression global</div>
                </div>



                <div className="border flex gap-2 bg-red-100">
                    <div className="border w-1/3 h-80">
                        <div className="border h-1/2">Dernières séance</div>
                        <div className="border h-1/2">progression traction lestée</div>
                    </div>
                    <div className="border w-1/3">Mes exercices</div>
                    <div className="border w-1/3">Top blocs récents</div>
                </div>


                <div className=" p-5 calendrier h-50 border">
                    <div className="border">
                        Calendrier
                    </div>
                    <div className="border flex">

                        <div className="w-1/7" >
                            <div className="border">lundi</div>
                            <div className="border">Repos</div>
                        </div>
                        <div className="w-1/7" >
                            <div className="border">mardi</div>
                            <div className="border">Repos</div>
                        </div>
                        <div className="w-1/7" >
                            <div className="border">mardi</div>
                            <div className="border">Repos</div>
                        </div>
                        <div className="w-1/7" >
                            <div className="border">mardi</div>
                            <div className="border">Repos</div>
                        </div>
                        <div className="w-1/7" >
                            <div className="border">mardi</div>
                            <div className="border">Repos</div>
                        </div>
                        <div className="w-1/7" >
                            <div className="border ">mardi</div>
                            <div className="border">Repos</div>
                        </div>
                        <div className="w-1/7" >
                            <div className="border">mardi</div>
                            <div className="border">Repos</div>
                        </div>
                     
                   
                    </div>


                </div>

            </div>
        </div>




    )
}