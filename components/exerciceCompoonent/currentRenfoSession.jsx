import { getInfoUserAction } from "@/actions/auth.action";

export default async function CurrentRenfoSession() {

    // Récupère l'utilisateur connecté
    const userConnected = await getInfoUserAction();

    if (!userConnected) {
        return (
            <p className="text-gray-500">
                Connectez-vous pour voir votre séance.
            </p>
        );
    }


    // Récupère la séance de renforcement actuellement en cours
    const sessionResponse = await fetch(
        `${process.env.URL_WEB_API}/session-renfo/current/${userConnected.id}`,
        {
            method: "GET",
            cache: "no-store"
        }
    );

    const sessionRenfo = await sessionResponse.json();


    // S'il n'y a aucune séance en cours
    if (!sessionRenfo || !sessionRenfo.id) {
        return (
            <p className="text-gray-500 py-4">
                Aucune séance en cours.
            </p>
        );
    }


    // Récupère tous les exercices liés à cette séance
    const exercicesResponse = await fetch(
        `${process.env.URL_WEB_API}/exercice-session/session/${sessionRenfo.id}`,
        {
            method: "GET",
            cache: "no-store"
        }
    );

    const exercicesSession = await exercicesResponse.json();


    return (
        <div className="flex flex-col">

            {exercicesSession.map((exoSession) => (

                <div
                    key={exoSession.id}
                    className="grid grid-cols-[40px_1fr_1fr] items-center border-b border-slate-200 py-4"
                >
                    <input type="checkbox" />

                    <div>
                        <p className="font-semibold">
                            {exoSession.exercice.nom}
                        </p>

                        <p className="text-sm text-gray-500">
                            {exoSession.exercice.categorie}
                        </p>
                    </div>

                    <p className="text-gray-500">
                        {exoSession.nombre_series} × {exoSession.objectif_reps}

                        {exoSession.charge !== null && (
                            <> @ {exoSession.charge} kg</>
                        )}
                    </p>

                </div>

            ))}

        </div>
    );
}