export const RestrictedSection = ({setIsLogin}) => {
    return(

        <section>
            <p>Bem vindo, você está logad.</p>
            <button onClick={() => setIsLogin(false)}>Logout</button>
        </section>               
    )
};