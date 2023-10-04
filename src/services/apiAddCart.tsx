import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface PostCart {
    id:string,
  quantity: string
  location: string
  tel: string
  price:number

}
export const API_URL = "http://localhost:8080/api/addCart";

const getTokenFromLocalStorage = localStorage.getItem('token');


export const postCartApi = createApi({
    reducerPath: 'postsCartApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}`,prepareHeaders:(headers,{getState})=>{
const token = JSON.stringify(localStorage.getItem('token'));

console.log(token)
if(token){
  headers.set('auth-token', `Bearer ${token}`)
  return headers
} 
} }),
    tagTypes: ['Posts'],
    endpoints: (build) => ({
      addCart: build.mutation<void  , PostCart>({
       query: cart=>({
        url:'/add-cart',
        method:'POST',
        body:cart
       })
      } ),
      updateCart: build.mutation<void  , PostCart>({
        
        query: ({id,...rest})=>({
            url:`/add-cart/${id}`,
            method:'PUT',
            body:rest
        }),
    }),
   deleteCart: build.mutation<void  , string>({
        query: (id)=>({
            url:`/addCart/${id}`,
            method:'DELETE',
        }),
    }),

    }),
  })
  
  export const {
 useAddCartMutation,
 useUpdateCartMutation,
 useDeleteCartMutation
  } = postCartApi
  
  
  