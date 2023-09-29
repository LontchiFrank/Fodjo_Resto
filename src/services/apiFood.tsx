import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { foods } from '../models/food.model';

const API_URL = "http://localhost:8080/api/";

 export const foodApi =createApi({
    reducerPath:'foodApi', 
    baseQuery:fetchBaseQuery({baseUrl:`${API_URL}`}),
    endpoints:(builder)=>({
        getFoods:builder.query<foods[] , void>({
query:()=>'/food'
        })
    })
})


export const {useGetFoodsQuery} = foodApi;