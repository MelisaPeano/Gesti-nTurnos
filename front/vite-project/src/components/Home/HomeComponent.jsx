import { useNavigate } from "react-router-dom";
import portada from "../../assets/portada.jpg"
import HomeStyles from "./HomeStyles";
const HomeComponent = () => {
    const Navigate = useNavigate()
    const handleClick = () => {
        Navigate('/services');
    }
    return (
        <>
            <HomeStyles>
                <div>
                    <img className="img" src={portada}></img>
                </div>
                <div className="text">
                    <h1> Bienvenido a AUTOFIX</h1>
                    <p>La mejor opción para tu vehiculo</p>
                    <button onClick={handleClick} >Nuestros Servicios</button>
                </div>
            </HomeStyles>
        </>
    )
}
export default HomeComponent;