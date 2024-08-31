import portada from "../../assets/portada.jpg"
import HomeStyles from "./HomeStyles";
const HomeComponent = () => {
    return (
        <>
            <HomeStyles>
                <div>
                    <img className="img" src={portada}></img>
                </div>
                <div className="text">
                    <p>
                        Bienvenido a AUTOFIX <br/>
                        <br/>
                        Tu mejor opción para el cuidado de tu auto.
                    </p>
                
                </div>
            </HomeStyles>
        </>
    )
}
export default HomeComponent;