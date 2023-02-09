import { createSlice } from "@reduxjs/toolkit";

const initAuthstate = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initAuthstate,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;