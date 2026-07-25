import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/axios";

const login = createAsyncThunk(
  "eCommerceApi/login",
  async ({ username, password }) => {
    const response = await api.post("/auth/login", { username, password });
    return response.data;
  },
);

const defaultState = {
  token: "",
  user: null,
  status: "idle",
  error: null,
};

const authCredentials = JSON.parse(
  localStorage.getItem("auth-credentials") ?? "null",
);

const initialState = {
  ...defaultState,
  ...authCredentials,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (currentState) => {
      currentState.token = "";
      currentState.user = null;
      currentState.status = "idle";
      currentState.error = null;
    },
    resetLoginStatus: (currentState) => {
      currentState.status = "idle";
      currentState.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (currentState) => {
        currentState.status = "pending";
        currentState.error = null;
      })
      .addCase(login.fulfilled, (currentState, action) => {
        currentState.token = action.payload.accessToken;
        currentState.user = {
          id: action.payload.id,
          username: action.payload.username,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          image: action.payload.image,
          gender: action.payload.gender,
        };
        currentState.status = "fulfilled";
        currentState.error = null;
      })
      .addCase(login.rejected, (currentState) => {
        currentState.status = "rejected";
      });
  },
});

export { login };
export const { logout, resetLoginStatus } = authSlice.actions;
export default authSlice.reducer;
