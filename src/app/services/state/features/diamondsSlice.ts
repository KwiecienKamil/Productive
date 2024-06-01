import { createSlice } from "@reduxjs/toolkit";

export interface Diamond {
  User_id: number | undefined;
  value: number;
}

interface diamondsState {
  diamonds: Diamond[];
}

const initialState: diamondsState = {
  diamonds: localStorage.getItem("diamonds")
    ? JSON.parse(localStorage.getItem("diamonds") || `[]`)
    : [],
};

export const diamondsSlice = createSlice({
  name: "diamond",
  initialState,
  reducers: {
    addDiamonds: (state, action) => {
      const newValue = state.diamonds + action.payload.value;
      state.diamonds = newValue;
      localStorage.setItem("diamonds", JSON.stringify(state.diamonds));
    },
  },
});

export default diamondsSlice.reducer;
export const { addDiamonds } = diamondsSlice.actions;
