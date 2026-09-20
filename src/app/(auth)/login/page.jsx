'use client';

// Importe l'action qui va gérer l'inscription
import { authLoginAction } from '@/actions/auth.action';

// Permet de connecter le formulaire à notre action
import { useActionState } from 'react';

export default function LoginPage() {
    // Connecte le formulaire à authRegisterAction
    // state       → contient notamment les erreurs retournées par l'action
    // handleSubmit → fonction qui sera appelée lors de l'envoi du formulaire
    // isPending   → true pendant que l'action est en cours
    const [state, handleSubmit, isPending] = useActionState(
        authLoginAction,
        { error: null }
    );
    return (
        <div className="flex justify-center">
            <div className="maindiv  flex flex-col gap-10 w-180 p-15 rounded-2xl" >
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl ">CLIMB TRACK</h1>
                    <h2>
                        Content de te revoir
                    </h2>
                </div>
                <form action={handleSubmit} className="flex flex-col gap-3" >

                    <div className="labelInput">
                        <label htmlFor="">Email </label>
                        <input className="border" type="text" name='email' />
                    </div>

                    <div className="labelInput">
                        <label htmlFor="">Mot de passe</label>
                        <input className="border" type="password" name='mdp' />
                    </div>

                    <button className="buttonMB mt-7" type='submit' disabled={isPending}>
                        {isPending ? 'Création...' : 'Se connecter'}
                    </button>
                </form>
                <div className=" border justify-around flex">
                    Pas encore de compte? <a href="/register">Crée un compte</a>
                </div>
            </div>


        </div>
    )
}