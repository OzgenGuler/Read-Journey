// src/redux/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, getCurrentUser } from "./authOperations";

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        // Token ve User'ı kaydet
        localStorage.setItem("readjourney-token", action.payload.token);
        localStorage.setItem(
          "readjourney-user",
          JSON.stringify(action.payload.user),
        );
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        // Token ve User'ı kaydet
        localStorage.setItem("readjourney-token", action.payload.token);
        localStorage.setItem(
          "readjourney-user",
          JSON.stringify(action.payload.user),
        );
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Logout
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
        // Her ikisini de temizle
        localStorage.removeItem("readjourney-token");
        localStorage.removeItem("readjourney-user");
      })
      .addCase(logout.rejected, (state) => {
        // Logout başarısız olsa bile kullanıcıyı çıkar
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        // Her ikisini de temizle
        localStorage.removeItem("readjourney-token");
        localStorage.removeItem("readjourney-user");
      })
      // Get Current User
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload; // { name, email }
        state.isLoggedIn = true;
        // User bilgisini güncelle
        localStorage.setItem(
          "readjourney-user",
          JSON.stringify(action.payload),
        );
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.isLoading = false;
        state.token = null;
        state.isLoggedIn = false;
        // Her ikisini de temizle
        localStorage.removeItem("readjourney-token");
        localStorage.removeItem("readjourney-user");
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
