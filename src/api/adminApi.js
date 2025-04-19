import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
    reducerPath : "adminApi",
    baseQuery : fetchBaseQuery({baseUrl : "http://localhost:3000/"}),
    endpoints : (builder)=>({
        getAccounts : builder.query({
            query : ()=> `accounts`,
            providesTags : ['accounts']
        }),
        getAccountById : builder.query({
            query : (id)=> `accounts/${id}`,
            providesTags : ["accounts"]
        }),
        addAccount : builder.mutation({
            query : (body)=> ({
                url : "accounts",
                method : "POST",
                body
            }),
            invalidatesTags : ['accounts']
        }),
        deleteAccount : builder.mutation({
            query : (id)=>({
                url : `accounts/${id}`,
                method : "DELETE"
            }),
            invalidatesTags : ["accounts"]
        }),
        updateAccount : builder.mutation({
            query : ({id,amount})=>({
                url : `accounts/${id}`,
                method : "PATCH",
                body : {amount}
            }),
            invalidatesTags : ["accounts"]
        })
    })
});

export const {useGetAccountsQuery,useGetAccountByIdQuery,useAddAccountMutation,useDeleteAccountMutation,useUpdateAccountMutation} = adminApi