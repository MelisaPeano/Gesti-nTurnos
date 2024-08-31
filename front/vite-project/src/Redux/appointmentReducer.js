import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const appointmentApi = createApi({
    reducerPath: "appointmentApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    
    endpoints: (builder) => ({
        cancelAppoinment: builder.mutation({
            query: (idApp) => ({
                url: `appointments/cancel/${idApp}`,
                method: "PUT",
            })
        })
        
    }),
})

export const {useCancelAppoinmentMutation } = appointmentApi;