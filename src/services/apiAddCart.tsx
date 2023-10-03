import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface PostCart {
    id:string,
  quantity: string
  location: string
  tel: string
  price:number

}
export const API_URL = "http://localhost:8080/api/addCart";

export const getTokenFromLocalStorage = () => {
    return localStorage.getItem('token');
};


export const postCartApi = createApi({
    reducerPath: 'postsCartApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}` }),
    tagTypes: ['Posts'],
    endpoints: (build) => ({
      addCart: build.mutation<void  , PostCart>({
       query: cart=>({
        url:'/add-cart',
        method:'POST',
        headers:{
            // "Content-Type": "application/json",
            Authorization: `${getTokenFromLocalStorage}`,
          },
        body:cart
       })
      }),
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
  
  
  