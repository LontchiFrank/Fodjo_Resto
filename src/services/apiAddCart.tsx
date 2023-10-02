import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface PostCart {
    id:string,
  quantity: string
  location: string
  tel: number
  price:number

}

export const postCartApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    tagTypes: ['Posts'],
    endpoints: (build) => ({
      addCart: build.mutation<void  , PostCart>({
       query: cart=>({
        url:'/addCart',
        method:'POST',
        body:cart
       })
      }),
      updateCart: build.mutation<void  , PostCart>({
        query: ({id,...rest})=>({
            url:`/addCart/${id}`,
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
 
  } = postCartApi
  
  
  