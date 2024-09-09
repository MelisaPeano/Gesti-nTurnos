import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { uploadProfilePictureAction, fetchAllUsers} from "../../Redux/reducer";
import UserStyle from "./UserStyles";
import { useNavigate } from "react-router-dom";
const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState(null);
  const token = useSelector((state) => state.user.token);
  const [userDetail, setUserDetail] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState({});
  console.log(data)
  const user = useSelector((state) => state.user.user.payload.user.id)
  useEffect(() => {
    if (user) {
      const fetchUserProfile = async () => {
        try {
          if (!user) {
            console.log('no hay usuario')
          }
          if (user) {
            console.log(user)
            const response = await axios.get(`http://localhost:3000/users/${user}`, {
              headers: {
              Authorization: `Bearer ${token}`,
            },
            })
            console.log(response.data.detail)
            if (response.data.detail) {
              setProfilePicture(response.data.detail.profilePicturePath);
              setUserDetail(response.data.detail);
            }
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      }
      fetchUserProfile();
    }
  }, [dispatch, user, token]);

  const date = new Date(userDetail.birthdate);
  const formattedDate = date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedFile && user) {
      const formData = new FormData();
      formData.append("profilePicture", selectedFile);
      try {
        if (user) {
          dispatch(uploadProfilePictureAction({ userId: user, formData, token }));
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else {
      alert('Por favor, selecciona una imagen');
    }
  };

    const handleClickAllUsers = async () => {
      console.log(token)
      const result = await dispatch(fetchAllUsers(token)); // despaché la acción
      if(fetchAllUsers.fulfilled.match(result)){ // verfifico si se completo correctamente
        setData(result.payload); // valor si fue exitoso
        console.log(result.payload)
        navigate('/users', { state: result.payload });
      }
      else{
        console.error('Error fetching users:', result.payload || result.error.message);
      }

    }
  return (

    <div>
    <UserStyle>
        <div>
          <h1 className="title">¡Bienvenido {userDetail.name} a tu perfil de usuario!</h1>
          {console.log(profilePicture)}
          {profilePicture ? (
            <img type="file" name="profilePicture" src={`http://localhost:3000${profilePicture}`} alt="Profile" />
          ) : (
            <p>No profile picture available</p>
          )}
          <p><span>Nombre: </span>{userDetail.name}</p>
            <p><span>Email: </span>{userDetail.email}</p>
            <p><span>Fecha de nacimiento: </span>{formattedDate}</p>
            <p><span>Dni: </span>{userDetail.nDni}</p>
        </div>
          <div className="div">
            <h1>Cambiar tu Foto de perfil </h1>

            <form className="form" onSubmit={handleSubmit}>
              <input type="file" accept="image/*" onChange={handleFileChange}/>
              <br/>
              <br/>
              <button type="submit">Subir</button>
            </form>
     
            {userDetail.role === 'admin' && <button onClick={handleClickAllUsers} type="submit">Ver todos los Usuarios</button>}
          </div>
   
      </UserStyle>
       </div>
  );
}
export default UserProfile;