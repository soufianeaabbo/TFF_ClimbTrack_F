// Permet d'utiliser les interactions React dans cette page Next.js
'use client';

// Importe l'action qui va gérer l'inscription
import { authRegisterAction } from '@/actions/auth.action';

// Permet de connecter le formulaire à notre action
import { useActionState } from 'react';

export default function RegisterPage() {

    // Connecte le formulaire à authRegisterAction
    // state       → contient notamment les erreurs retournées par l'action
    // handleSubmit → fonction qui sera appelée lors de l'envoi du formulaire
    // isPending   → true pendant que l'action est en cours
    const [state, handleSubmit, isPending] = useActionState(
        authRegisterAction,
        { error: null }
    );

    return (
        <div className="globaldiv min-h-screen flex items-center justify-between p-24">
            {/* div résumé de l'app */}
            <div className="divSTE  flex flex-col gap-9 w-100 p-7 rounded-2xl bg-white/10  " >
                <div className=" flex gap-3">
                    <div>GRIMPER -</div>
                    <div>PROGRESSER -</div>
                    <div>SE DEPASSER</div>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="text-5xl">Suis ton <span className="text-amber-600">évolution</span></div>
                    <div>CLimbreTrack t'aide à suivre tes séances, <br />
                        tes performances et taprogression, pour aller toujours plus haut
                    </div>
                </div>

                <div className="border-amber-500 flex flex-col gap-5 ">

                    <div className="flex gap-2">
                        <div className="border">icone</div>
                        <div>
                            <p>Suis tes progrès</p>
                            <p>Visualise ton évolution dans le temps</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="border">icone</div>
                        <div>
                            <p>Suis tes progrès</p>
                            <p>Visualise ton évolution dans le temps</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="border">icone</div>
                        <div>
                            <p>Suis tes progrès</p>
                            <p>Visualise ton évolution dans le temps</p>
                        </div>
                    </div>


                </div>



                <div>
                    " Petit à petit, <br />
                    on fait de grandes ascensions
                    <div className="HR"></div>
                </div>

                <div>
                    <p>ClimbTrack <br />
                        plus qu'un suivi, une passion</p>
                </div>


            </div>
            {/* div avec le form pour l'inscription */}
            <div className="maindiv  flex flex-col gap-10 w-180 p-15 rounded-2xl">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl ">CLIMB TRACK</h1>
                    <h2>
                        Crée un compte
                    </h2>
                </div>

                <form action={handleSubmit} className="flex flex-col gap-3" >
                    <div className="labelInput ">
                        <label htmlFor="prenom">Prénom </label>
                        <input name="prenom" className="border" type="text" />
                    </div>
                    <div className="labelInput">
                        <label htmlFor="nom">Nom </label>
                        <input name="nom" className="border" type="text" />
                    </div>
                    <div className="labelInput">
                        <label htmlFor="email">Email </label>
                        <input name="email" className="border" type="email" />
                    </div>
                    <div className="labelInput">
                        <label htmlFor="mdp">Mot de passe</label>
                        <input name="mdp" className="border" type="password" />
                    </div>

                    <button className="buttonMB mt-7" type='submit' disabled={isPending}>
                        {isPending ? 'Création...' : 'Créer mon compte'}
                        </button>

                </form>

                <div className=" border justify-around flex">
                    Déja un compte? <a href="../login">Se connecter</a>
                </div>
            </div>

        </div>

    )
}