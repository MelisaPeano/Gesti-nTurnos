import { useState, useEffect } from 'react'
import NavContainer from './NavContainer';
import BurguerButton from './BurgerButton';
import BgDiv from './BgDiv';
import Links from './Links';
import { Link } from 'react-router-dom';
import carro2 from '../../assets/card2.png'
import { useSelector } from 'react-redux'
import UserLogout from '../Profile/UserLogout';
function NavBar() {
    const [cliked, setCliked] = useState(false)
    const user = useSelector((state) => state.user.user.payload);
    console.log('User:', user)
    // Nota: Aplico este useEffect para que la navbar se quede en su lugar.
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setCliked(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const handleClick = () => {
        if (window.innerWidth <= 768) {
            setCliked(!cliked);
            setTimeout(() => setCliked(false), 2000);
        }
    }
    return (
        <>
            <NavContainer>
                <div className="logo-container">
                    <img src={carro2}></img>
                    <h2>Tu taller <span>Amigo</span></h2>
                </div>
                <Links className={cliked ? 'active' : ''}>
                    {!user ? (
                        <>
                        <Link onClick={handleClick} to="/login">Iniciar Sesión</Link>
                        <Link onClick={handleClick} to="/users/register">Regístrarse</Link>
                        </>
                    ) : (
                        <>
                            <Link onClick={handleClick} to={`/users/${user.id}`}>Ver mis Turnos</Link>
                            <Link onClick={handleClick} to="/miProfile">Mi Perfil</Link>
                            <Link onClick={handleClick} to="/Home">Home</Link>
                            <Link onClick={() => {
                                UserLogout()
                            }}>Cerrar Sesión</Link>
                        </>
                    )}
                </Links>
                <div className="burguer" >
                    <BurguerButton cliked={cliked} handleClick={handleClick} />
                </div>
                <BgDiv className={`initial ${cliked ? 'active' : ''}`}></BgDiv>
            </NavContainer>
        </>
    )
}
export default NavBar;