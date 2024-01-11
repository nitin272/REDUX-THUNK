import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
  users: [],
};

// Async thunk for fetching users
export const fetchUsers = createAsyncThunk('users', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

// User data slice
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setInitialData: (state, action) => {
      state.users = [...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

// Extracted actions and reducer
export const { setInitialData } = userSlice.actions;
export const userReducer = userSlice.reducer;
export const selectUsers = (state) => state.userReducer.users;
