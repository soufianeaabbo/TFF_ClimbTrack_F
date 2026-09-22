import { getInfoUserAction } from "@/actions/auth.action";

export default async function RenfoSessionHistory() {

    const userConnected = await getInfoUserAction();

    if (!userConnected) {
        return null;
    }

    const res = await fetch(
        `${process.env.URL_WEB_API}/session-renfo/user/${userConnected.id}`,
        {
            method: "GET",
            cache: "no-store"
        }
    );

    const sessions = await res.json();

    console.log("SESSIONS RENFO :", sessions);


    const dernieresSessions = sessions
        .filter((session) => session.terminee === true)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);

    console.log("DERNIERES SESSIONS :", dernieresSessions);

    const sessionsAvecExercices = await Promise.all(
    dernieresSessions.map(async (session) => {

        const resExercices = await fetch(
            `${process.env.URL_WEB_API}/exercice-session/session/${session.id}`,
            {
                method: "GET",
                cache: "no-store"
            }
        );

        const exercices = await resExercices.json();

        return {
            ...session,
            exercices: exercices
        };
    })
);
console.log("SESSIONS AVEC EXERCICES :", sessionsAvecExercices);

    return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold">
            Dernières séances
        </h2>

        <div className="flex flex-col mt-4">
            {sessionsAvecExercices.map((session) => (
                <div
                    key={session.id}
                    className="border-b border-slate-200 py-4"
                >
                    <p className="font-semibold">
                        {new Date(session.date).toLocaleDateString("fr-BE")}
                    </p>

                    {session.exercices.map((exoSession) => (
                        <div
                            key={exoSession.id}
                            className="flex justify-between mt-2"
                        >
                            <span>
                                {exoSession.exercice.nom}
                            </span>

                            <span className="text-gray-500">
                                {exoSession.nombre_series} × {exoSession.objectif_reps}

                                {exoSession.charge !== null && (
                                    <> @ {exoSession.charge} kg</>
                                )}
                            </span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
);
}