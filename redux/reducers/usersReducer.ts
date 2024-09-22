import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiEndpoint = "http://localhost:3000/api";

export interface User {
  id: number | null;
  name: string | null;
  email: string | null;
  age: number | null;
}

interface UsersState {
  users: User[];
  loading: boolean;
  errorMessage: string | null;
  curUser: User | null;
  userId: string | null;
  error: boolean;
}

interface UserRes {
  message: string;
  user: { id: string };
}

const initialState: UsersState = {
  users: [],
  curUser: null,
  loading: false,
  errorMessage: null,
  userId: null,
  error: false,
};

// Async thunk for fetching users
export const fetchUsers = createAsyncThunk<User[]>(
  "users/fetchUsers",
  async () => {
    try {
      const response = await axios.get(`${apiEndpoint}/users`);
      const data = (await response.data) as User[];
      console.log(data);
      return data;
    } catch (err) {
      throw Error(`Something went wrong! ${err}`);
    }
  }
);

// Async thunk for fetching user by Id
export const fetchUserById = createAsyncThunk<User | null, string>(
  "users/fetchUserById",
  async (userId) => {
    try {
      const response = await axios.get(`${apiEndpoint}/users/${userId}`);
      const data = (await response.data) as User;
      console.log(data);
      return data;
    } catch (err) {
      throw Error(`Something went wrong! ${err}`);
    }
  }
);

export const createUser = createAsyncThunk<string, Partial<User>>(
  "users/createUser",
  async (userData) => {
    try {
      const response = await axios.post(`${apiEndpoint}/users`, userData);
      const data = (await response.data) as UserRes;
      console.log(data);
      return data.user.id;
    } catch (err) {
      throw Error(`Something went wrong! ${err}`);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error.message || "Failed to fetch users";
        state.error=true
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.curUser = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error.message || "Failed to fetch user";
        state.error=true
      })
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.userId = action.payload;
        state.loading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error.message || "Failed to fetch user";
        state.error=true
      })
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      });
  },
});

export default usersSlice.reducer;
