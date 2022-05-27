import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    currentUser: null
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    }
  }
});

export const { setToken, setCurrentUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
