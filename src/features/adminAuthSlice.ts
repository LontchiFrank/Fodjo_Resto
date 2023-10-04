import {
  createSlice,
  createAsyncThunk,
  AsyncThunk,
  Slice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { myAlert } from "../Components/Alert/myAlert";

const API_URL = "http://localhost:8080/api/admin";

interface Admin {
  authenticate: boolean;
  adminInfo: string;
  adminToken: string;
  loading: boolean;
  error: null;
}

const initialState: Admin = {
  authenticate: false,
  adminInfo: "",
  adminToken: "",
  loading: false,
  error: null,
};

export const signUpAdmin: any = createAsyncThunk(
  "registeruser",
  async (data) => {
    try {
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

export const signInAdmin: any = createAsyncThunk("LoginAdmin", async (data) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(data);
    const res: any = await axios.post(`${API_URL}/signin-admin`, body, config);
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
});

export const adminAuthSlide: Slice<Admin> = createSlice({
  name: "admin",
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
      state.adminToken = payload.data?.token;
      state.adminInfo = payload.data?.admin;

      // localStorage.setItem("msg", msg);
      localStorage.setItem("admin", JSON.stringify(state.adminInfo));
      localStorage.setItem("token", state.adminToken);
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

      state.adminInfo = payload.data;
      state.authenticate = true;
    },
    [signUpAdmin.rejected]: (state, action) => {
      state.loading = true;
      state.authenticate = false;
    },
  },
});

// export const { addToken, addUser, logout, addPoem } = authSlide.actions;

export default adminAuthSlide;
