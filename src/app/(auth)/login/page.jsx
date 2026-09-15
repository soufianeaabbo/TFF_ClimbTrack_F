
export default function LoginPage() {

    return (

        <div className="flex justify-center">


            <div className="maindiv  flex flex-col gap-10 w-180 p-15 rounded-2xl" >

                <div className="flex flex-col gap-2">

                    <h1 className="text-2xl ">CLIMB TRACK</h1>
                    <h2>
                        Content de te revoir 
                    </h2>

                </div>



                <form className="flex flex-col gap-3" action="">

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
                    Pas encore de compte? <a href="/register">Crée un compte</a>
                </div>
            </div>


        </div>
    )
}