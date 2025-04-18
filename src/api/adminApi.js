import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
    reducerPath : "adminApi",
    baseQuery : fetchBaseQuery({baseUrl : "http://localhost:3000/"}),
    endpoints : (builder)=>({
        getAccounts : builder.query({
            query : ()=> `accounts`
        })
    })
});

export const {useGetAccountsQuery} = adminApi