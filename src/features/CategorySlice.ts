import { createAsyncThunk, createSlice, Slice } from "@reduxjs/toolkit";
// import { data } from "autoprefixer";
import axios from "axios";

const API_URL = "http://localhost:8080/api/category/";
const token = localStorage.getItem("token");

interface Category {
  data: any[];
}

const initialState: Category = {
  data: [],
};

export const getCategoriesAsync: any = createAsyncThunk(
  "category/Category",
  async (dispatch: any) => {
    try {
      const response = await axios.get(`${API_URL}`);
      getCategory(response.data);
      console.log(getCategory(response.data), "mama");
      // console.log(response.data, "mama");
    } catch (error) {
      console.log(error);
    }
  }
);

export const categorySlide: Slice<Category> = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategory: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: {},
});

export const { getCategory } = categorySlide.actions;
export default categorySlide;
