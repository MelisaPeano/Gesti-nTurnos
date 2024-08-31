import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'


export const uploadProfilePictureAction = createAsyncThunk(
    'user/uploadProfilePictureAction',
    async ({ userId, formData }, { rejectWithValue }) => {
      try {
        const response = await axios.post(`http://localhost:3000/users/upload/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
        
       });
        return response.data.profilePicturePath;

       } catch (error) {
        console.error('Error uploading profile picture:', error.message);
        return rejectWithValue(error.response ? error.response.data : error.message);
      }
    
      },
  );
   
  export const fetchAppointments = createAsyncThunk(
    'user/fetchAppointments',
    async (userId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:3000/users/${userId}`);
            return response.data.detail.appointment;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);


const initialState = {
    login: false,
    user: {
        id: null,
        name: null,
        email: null,
        birthdate: null,
        nDni: null,
        appointment: [],
        profilePicturePath: null
    },
    error: null,
    status: 'idle' 
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        setUser: (state, action) => {
            state.user = action.payload;

        },
        filterUser: (state, action) => {
            state.user.appointment = action.payload.appointment || [];
        },

        logout: (state) => {
          state.user = initialState.user;
          state.login = false;
        },
        setProfilePicture:(state, action) => {
          state.user.profilePicturePath = action.payload
          },
       

    },
      }
)


export const { setUser, filterUser, logout, setProfilePicture} = userSlice.actions;
export default userSlice.reducer;