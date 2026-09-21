import {
    MapPin,
    CalendarDays,
    Clock3,
    Timer,
    Users,
    Target
} from "lucide-react";

export default async function SessionInfo({ id }) {

    // Demande au backend la session correspondant à l'id reçu
    const res = await fetch(`${process.env.URL_WEB_API}/session/${id}`);

    // Transforme la réponse JSON en objet JavaScript
    const session = await res.json();

    console.log("SESSION RÉCUPÉRÉE :", session);
    return (


        <div className="flex flex-col gap-4">

            <div className="flex justify-between ">

                <div className="flex-1 flex items-center gap-2 border-r p-2  ">
                    <div>
                        <MapPin size={30} className="text-blue-600" />
                    </div>
                    <div>
                        <p className="text-gray-500">Lieu </p>
                        <p>{session.lieu}</p>
                    </div>
                </div>



                <div className=" flex-1 flex items-center gap-2 border-r p-2">
                    <div>
                        <CalendarDays size={30} className="text-blue-600" />
                    </div>
                    <div>
                        <p className="text-gray-500">Date : </p>
                        <p> {new Date(session.date).toLocaleDateString("fr-BE")}</p>
                    </div>
                </div>



                <div className=" flex-1 flex items-center gap-2 border-r p-2">
                    <div>
                        <Clock3 size={30} className="text-red-500" />
                    </div>
                    <div>
                        <p className="text-gray-500">Heure </p>
                        <p>{session.heure_debut ? session.heure_debut.slice(0, 5) : "--:--"}</p>
                    </div>
                </div>



                <div className=" flex-1 flex items-center gap-2 border-r p-2">
                    <div>
                        <Timer size={30} className="text-red-500" />
                    </div>
                    <div>
                        <p className="text-gray-500">Durée  </p>
                        <p>{session.duree} min</p>
                    </div>
                </div>




                <div className=" flex-1 flex items-center gap-2 border-r p-2">
                    <div>
                        <Users size={30} className="text-blue-600" />
                    </div>
                    <div>
                        <p className="text-gray-500">Partenaire</p>
                        <p> {session.partenaire}</p>
                    </div>
                </div>




                <div className=" flex-1 flex items-center gap-2  p-2">
                    <div>
                        <Target size={30} className="text-red-500" />
                    </div>
                    <div>
                        <p className="text-gray-500">Objectif </p>
                        <p> {session.objectif} ascensions</p>
                    </div>
                </div>

            </div>

            <div className="w-full">
                <p>Note</p>
                <div className="w-full bg-blue-50 border border-blue-100 rounded-lg p-3">
                    {session.notes || "-"}
                </div>
            </div>

        </div>



    );
}