import { logout } from "../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DetailStyle from "../MyAppointments/DetailStyles";
 const UserLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user.payload)
    console.log(user)
    const handleLogout = () => {
        if(user && user.login === true){ {
            dispatch(logout());
            navigate('/login');
        } 
          console.log('User not logged in');
        }
        
      }
    return (
      <>
      <DetailStyle>
    <button
        onClick={handleLogout}
      >Cerrar Sesión</button>
      </DetailStyle>
    </>
    )
}
 export default UserLogout