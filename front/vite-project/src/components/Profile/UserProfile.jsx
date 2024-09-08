import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { uploadProfilePictureAction} from "../../redux/reducer";
import UserStyle from "./UserStyles";
const UserProfile = () => {
  const dispatch = useDispatch();
  const [profilePicture, setProfilePicture] = useState(null);
  const [userDetail, setUserDetail] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const user = useSelector((state) => state.user?.user?.payload?.user?.id)
  console.log(user)
  useEffect(() => {
    if (user) {
      const fetchUserProfile = async () => {
        try {
          if (!user) {
            console.log('no hay usuario')
          }
          if (user) {
            const response = await axios.get(`http://localhost:3000/users/${user}`)
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
  }, [dispatch, user]);
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
          dispatch(uploadProfilePictureAction({ userId: user, formData }));
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else {
      alert('Por favor, selecciona una imagen');
    }
  };
  return (
    <div>
      <UserStyle>
        <div>
          {console.log(profilePicture)}
          {profilePicture ? (
            <img type="file" name="profilePicture" src={`http://localhost:3000${profilePicture}`} alt="Profile" />
          ) : (
            <p>No profile picture available</p>
          )}
        </div>
        <h1>¡Bienvenido {userDetail.name} a tu perfil de usuario!</h1>
        <p>Cambiar tu Foto de perfil </p>
        <br/>
   
          <form className="form" onSubmit={handleSubmit}>
            <input type="file" accept="image/*" onChange={handleFileChange}/>
            <br/>
            <br/>
            <button type="submit">Subir</button>
            <button>Ver Mis datos</button>
          </form>
      </UserStyle>
       </div>
  );
}
export default UserProfile;