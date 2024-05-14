import { createSlice } from "@reduxjs/toolkit";

export interface User {
  id: number | undefined;
  Username: string | undefined;
}

interface usersState {
  users: User[];
}

const initialState: usersState = {
  users: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || `[]`)
    : [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
});

export default userSlice.reducer;
export const { addUser } = userSlice.actions;
