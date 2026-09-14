
export default function RegisterPage() {

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



                <form className="flex flex-col gap-3" action="">

                    <div className="labelInput ">
                        <label htmlFor="">Prénom </label>
                        <input className="border" type="text" />
                    </div>

                    <div className="labelInput">
                        <label htmlFor="">Nom </label>
                        <input className="border" type="text" />
                    </div>

                    <div className="labelInput">
                        <label htmlFor="">Email </label>
                        <input className="border" type="text" />
                    </div>

                    <div className="labelInput">
                        <label htmlFor="">Mot de passe</label>
                        <input className="border" type="text" />
                    </div>

                    <button className="buttonMB mt-7">Créer mon compte</button>
                </form>
                <div className=" border justify-around flex">
                    Déja un compte? <a href="../login">Se connecter</a>
                </div>
            </div>

        </div>

    )
}