
export default function LoginPage(){
    
    return(
        <>
        <h1>
           Se Connectez
        </h1>

        <form action="">

            <div>
                <label htmlFor="">Prénom :</label>
                <input className="border" type="text" />
            </div>

            <div>
                <label htmlFor="">Nom :</label>
                <input className="border" type="text" />
            </div>

            <div className="text-2xl">
                <label htmlFor="">Email :</label>
                <input className="border" type="text" />
            </div>


        </form>
        </>
    )
}