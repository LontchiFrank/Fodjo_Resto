import { configureStore } from "@reduxjs/toolkit";
import adminAuthSlide from "../features/adminAuthSlice";
import authSlide from "../features/authSlice";
import categorySlide from "../features/CategorySlice";
import foodSlide from "../features/foodSlice";

// ...

export const store = configureStore({
  reducer: {
    users: authSlide.reducer,
    admins: adminAuthSlide.reducer,
    categoryList: categorySlide.reducer,
    food: foodSlide.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
