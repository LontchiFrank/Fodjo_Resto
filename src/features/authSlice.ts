import {
  createSlice,
  createAsyncThunk,
  AsyncThunk,
  Slice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { myAlert } from "../Components/Alert/myAlert";

const API_URL = "http://localhost:8080/api/user";

interface Customer {
  authenticate: boolean;
  userInfo: string;
  userToken: string;
  loading: boolean;
  error: null;
}

const initialState: Customer = {
  authenticate: false,
  userInfo: "",
  userToken: "",
  loading: false,
  error: null,
};

export const signUpUser: any = createAsyncThunk(
  "registeruser",
  async (data) => {
    try {
      const res: any = await axios.post(`${API_URL}/signup`, data);
      if (res.status == 200) {
        myAlert(true, "Created successfully");
      }
      console.log(res);
      return res;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return (
        myAlert(false,`${error.response.data.message}`)
        )
      }
       else {
        return (
          myAlert(false,`${error.response.data.message}`)
        );
      }
    }
  }
);

export const signInUser: any = createAsyncThunk("LoginUser", async (data) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(data);
    const res: any = await axios.post(`${API_URL}/login`, body, config);
    console.log(res, "res");
    const result = await res;
    console.log(res)
    if (res.status == "200") {
      myAlert(true, "Login successfully");
      
    }
    console.log(result);
    return result;
  } 
  catch (error: any) {
console.log(error.response.data)
    myAlert(false,`${error.response.data}`)
  }
});

export const authSlide: Slice<Customer> = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    //*************Login**************/
    [signInUser.pending]: (state) => {
      state.loading = true;
      state.authenticate = false;
      state.error = null;
      // localStorage.setItem("loading", state.loading);
    },
    [signInUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.authenticate = true;
      state.userToken = payload?.data?.token;
      state.userInfo = payload?.data?.user;

      // localStorage.setItem("msg", msg);
      if(state.userInfo) localStorage.setItem("user", JSON.stringify(state.userInfo));
      if(state.userToken) localStorage.setItem("token", state.userToken);
    },
    [signInUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    //**************register***************** */

    [signUpUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signUpUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.authenticate = true;
      state.userInfo = payload.data;
    },
    [signUpUser.rejected]: (state, action) => {
      state.loading = true;
      state.authenticate = false;
    },
  },
});

// export const { addToken, addUser, logout, addPoem } = authSlide.actions;

export default authSlide;
