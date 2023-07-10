import {
  createSlice,
  createAsyncThunk,
  AsyncThunk,
  Slice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { myAlert } from "../Components/Alert/myAlert";

const API_URL = "http://localhost:8080/api/user";

interface Admin {
  authenticate: boolean;
  userInfo: string;
  userToken: string;
  loading: boolean;
  error: null;
}

const initialState: Admin = {
  authenticate: false,
  userInfo: "",
  userToken: "",
  loading: false,
  error: null,
};

export const signUpAdmin: any = createAsyncThunk(
  "registeruser",
  async (data) => {
    try {
      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // };
      // const body = JSON.stringify(data);
      const res: any = await axios.post(`${API_URL}/signup-admin`, data);
      if (res.status == 200) {
        myAlert(true, "Created successfully");
      }
      console.log(res);
      return res;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return error.response.data.message;
      } else {
        return error.message;
      }
    }
  }
);

export const signInAdmin: any = createAsyncThunk(
  "auth/login-admin",
  async (data) => {
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
      if (res.status == "200") {
        myAlert(true, "Created successfully");
      }
      console.log(result);
      return result;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return error.response.data.message;
      } else {
        return error.message;
      }
    }
  }
);

export const authSlide: Slice<Admin> = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    //*************Login**************/
    [signInAdmin.pending]: (state) => {
      state.loading = true;
      state.authenticate = false;
      state.error = null;
      // localStorage.setItem("loading", state.loading);
    },
    [signInAdmin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.authenticate = true;
      state.userToken = payload.data?.token;
      state.userInfo = payload.data?.user;

      // localStorage.setItem("msg", msg);
      localStorage.setItem("user", JSON.stringify(state.userInfo));
      localStorage.setItem("token", state.userToken);
    },
    [signInAdmin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    //**************register***************** */

    [signUpAdmin.pending]: (state, action) => {
      state.loading = true;
    },
    [signUpAdmin.fulfilled]: (state, { payload }) => {
      console.log(payload, "hey nigga");
      state.loading = false;
      state.authenticate = true;
      state.userInfo = payload.data;
    },
    [signUpAdmin.rejected]: (state, action) => {
      state.loading = true;
      state.authenticate = false;
    },
  },
});

// export const { addToken, addUser, logout, addPoem } = authSlide.actions;

export default authSlide;
