



export default function AscensionList() {

    return (
        <div className="max-h-80 overflow-y-auto flex flex-col  gap-5">
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

    );
}




import SessionInfo from "@/components/sessions/SessionInfo";
import AscensionList from "@/components/ascensions/AscensionList";

export default function SessionEnCours() {

    return (
        <div>

            {/* TITRE DE LA PAGE */}
            <div>
                <h1>Session en cours</h1>
                <p>Ajoute tes ascensions au fur et à mesure de ta session</p>
            </div>


            {/* INFORMATIONS DE LA SESSION */}
            <SessionInfo />


            {/* EN-TÊTE ASCENSIONS */}
            <div className="flex justify-between">
                <p>Ascensions</p>
                <p>Trier par : Heure</p>
            </div>


            {/* LISTE DES ASCENSIONS - cette partie pourra scroller */}
            <AscensionList />


            {/* AJOUTER UNE ASCENSION - reste hors du scroll */}
            <div>
                <p>+</p>
                <p>Ajouter une ascension</p>
            </div>


            {/* ACTIONS DE LA SESSION */}
            <div>
                <button>
                    Mettre en pause
                </button>

                <button>
                    Terminer la session
                </button>
            </div>

        </div>
    );
}