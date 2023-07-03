import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { myAlert } from "../Components/Alert/myAlert";

const API_URL = "https://localhost:8080/api/user/login";

interface Customer {
  authenticate: null;
  userInfo: string;
  userToken: string;
  loading: boolean;
  error: null;
}

const initialState: Customer = {
  authenticate: null,
  userInfo: "",
  userToken: "",
  loading: false,
  error: null,
};

export const signUpUser = createAsyncThunk("registeruser", async (data) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // const body = JSON.stringify(data);
    const res: any = await axios.post(`${API_URL}/signup`, data, config);
    if (res.status == 200) {
      myAlert(true, "Created successfully");
    }
    return res.json();
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return error.response.data.message;
    } else {
      return error.message;
    }
  }
});
