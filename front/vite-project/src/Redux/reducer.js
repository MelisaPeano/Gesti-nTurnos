import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'


export const uploadProfilePictureAction = createAsyncThunk(
    'user/uploadProfilePictureAction',
    async ({ userId, formData, token }, { rejectWithValue }) => {
      try {
        const response = await axios.post(`http://localhost:3000/users/upload/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
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
    async (userId, token , { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:3000/users/${userId}`, {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
              }
            });
            const sortedAppointments = response.data.detail.appointment.sort((a, b) => new Date(b.date) - new Date(a.date));
            const isActive = sortedAppointments.sort((a, b) => {
                if (a.status === "active" && b.status !== "active") return -1;
                if (a.status !== "active" && b.status === "active") return 1;
                return 0;
            });
            return isActive;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    },
  );

  export const fetchAllUsers = createAsyncThunk(
      'user/allUsers',
      async (token, { rejectWithValue }) => {
          try {
              const response = await axios.get(`http://localhost:3000/users`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'multipart/form-data'
                }})
              return response.data;
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
        profilePicturePath: null,
        role: null
    },
    token: null,
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
        setToken: (state, action) => {
          state.token = action.payload; 
      },
        filterUser: (state, action) => {
            state.user.appointment = action.payload.appointment || [];
        },

        logout: (state) => {
          state.user = initialState.user;
          state.login = false;
          state.token = null;
        },
        setProfilePicture:(state, action) => {
          state.user.profilePicturePath = action.payload
          },
        roleUser: (state, action) => {
            state.user.role = action.payload

    }
    }})



export const { setUser, setToken, filterUser, logout, setProfilePicture} = userSlice.actions;
export default userSlice.reducer;