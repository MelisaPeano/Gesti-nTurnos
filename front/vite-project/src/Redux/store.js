import {configureStore} from '@reduxjs/toolkit';
import  userReducer  from './reducer';
import { appointmentApi } from './appointmentReducer';



const store = configureStore({
    reducer: {
       user: userReducer,
       [appointmentApi.reducerPath]: appointmentApi.reducer
    }, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(appointmentApi.middleware)
})

export default store