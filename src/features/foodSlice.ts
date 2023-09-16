import { createAsyncThunk, createSlice, Slice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { myAlert } from "../Components/Alert/myAlert";

const API_URL = "http://localhost:8080/api/food/";
const token = localStorage.getItem("token");
const config = {
  headers: {
    "Content-Type": "multipart/form-data",
    "auth-token": token,
  },
};

let arrays: any[];

interface Food {
  data: any[];
  loading: boolean;
  authenticate: null | boolean;
}
const initialState: Food = {
  data: [],
  loading: false,
  authenticate: null,
};

export const createFoodAsync: any = createAsyncThunk(
  "food/createFood",
  async (data) => {
    try {
      const token = localStorage.getItem("token");
      const res: any = await axios.post(`${API_URL}new-food`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          "auth-token": token,
        },
      });
      createFood(res.data);
      console.log({ res });
      if (res.status == "200") {
        myAlert(true, "Created successfully");
        window.location.reload();
      }
      console.log(token, "haha");
    } catch (error) {
      // throw new Error(error);

      console.log(error);
    }
  }
);

export const editFoodAsync: any = createAsyncThunk(
  "food/editFood",
  async (data: any) => {
    try {
      const response: any = await axios.put(
        `${API_URL}${data.id}`,
        data.info,
        config
      );
      editFood(response.data);
      if (response.status == "200") {
        myAlert(true, "Edited successfully");
        window.location.reload();
      }
    } catch (error: any) {
      console.log(error);
    }
  }
);
export const deleteFoodAsync: any = createAsyncThunk(
  "food/deleteFood",
  async (data: any) => {
    try {
      console.log(data);
      const response: any = await axios.delete(`${API_URL}${data}`, config);
      deleteFood(response);
      if (response.status == "200") {
        myAlert(true, "Deleted successfully");
        window.location.reload();
      } else {
        myAlert(false, "Failed to Delete");
      }
    } catch (error: any) {
      console.log(error);
    }
  }
);

export const foodSlide: Slice<Food> = createSlice({
  name: "food",
  initialState,
  reducers: {
    getFood: (state, action) => {
      state.data = action.payload;
    },
    createFood: (state, { payload }) => {
      state.data = [{ ...payload }, ...state.data];
    },
    getPrivateFood: (state, action) => {
      state.data = action.payload;
    },
    editFood: (state, action) => {
      state.data = arrays.map((item: any) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    deleteFood: (state, action) => {
      state.data = arrays.filter((item) => item.id !== action.payload.id);
    },
  },
  extraReducers: {
    [createFoodAsync.pending]: (state: any) => {
      state.loading = true;
      state.authenticate = false;
    },
    [createFoodAsync.fulfilled]: (state: any) => {
      state.loading = false;
      state.authenticate = true;
    },
    [editFoodAsync.pending]: (state) => {
      state.loading = true;
      state.authenticate = false;
    },
    [editFoodAsync.fulfilled]: (state) => {
      state.loading = false;
      state.authenticate = true;
    },
    [deleteFoodAsync.pending]: (state) => {
      state.loading = true;
      state.authenticate = false;
    },
    [deleteFoodAsync.fulfilled]: (state) => {
      state.loading = false;
      state.authenticate = true;
    },
  },
});

export const getPrivateFoodAsync: any =
  (data: any) => async (dispatch: any) => {
    try {
      const response = await axios.get(`${API_URL}userfood`, config);
      dispatch(getPrivateFood(response.data));
    } catch (error: any) {
      throw new Error(error);
    }
  };

export const getAllFoodAsync: any = (data: any) => async (dispatch: any) => {
  try {
    const response = await axios.get(`${API_URL}`);
    dispatch(getFood(response.data));
  } catch (error: any) {
    throw new Error(error);
  }
};

export const { getFood, createFood, editFood, deleteFood, getPrivateFood } =
  foodSlide.actions;
export default foodSlide;
