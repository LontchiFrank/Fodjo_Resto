import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Category } from '../models/category.model';

const API_URL = "http://localhost:8080/api/";

 export const categoryApi =createApi({
    reducerPath:'categoryApi', 
    baseQuery:fetchBaseQuery({baseUrl:`${API_URL}`}),
    endpoints:(builder)=>({
        getCategory:builder.query<Category[] , void>({
query:()=>'/category'
        })
        
    })
})


export const {useGetCategoryQuery} = categoryApi;