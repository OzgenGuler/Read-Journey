// src/redux/auth/authOperations.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/readJourneyApi";

// Register
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/users/signup", credentials);
      console.log("Register Response:", data); // DEBUG

      // Backend response'unu kontrol et
      const payload = {
        token: data.token,
        user: {
          name: data.name || credentials.name,
          email: data.email || credentials.email,
        },
      };
      console.log("Register Payload:", payload); // DEBUG

      return payload;
    } catch (error) {
      console.error("Register Error:", error.response?.data); // DEBUG
      return rejectWithValue(
        error.response?.data?.message || "Registration failed",
      );
    }
  },
);

// Login
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/users/signin", credentials);
      console.log("Login Response:", data); // DEBUG

      const payload = {
        token: data.token,
        user: {
          name: data.name,
          email: data.email,
        },
      };
      console.log("Login Payload:", payload); // DEBUG

      return payload;
    } catch (error) {
      console.error("Login Error:", error.response?.data); // DEBUG
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  },
);

// Logout
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await api.post("/users/signout");
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Logout failed");
    }
  },
);

// Get current user
export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token;

    if (!token) {
      return rejectWithValue("No token found");
    }

    try {
      const { data } = await api.get("/users/current");
      // Backend'den gelen yapı: { name, email }
      return {
        name: data.name,
        email: data.email,
      };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to get user",
      );
    }
  },
);
