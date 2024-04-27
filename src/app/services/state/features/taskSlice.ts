import { createSlice } from "@reduxjs/toolkit";

export interface Task {
  id: string | undefined;
  title: string | undefined;
  doneDate: string | undefined;
}

interface tasksState {
  tasks: Task[];
}

const initialState: tasksState = {
  tasks: localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks") || `[]`)
    : [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.tasks.push(action.payload);

      localStorage.setItem("products", JSON.stringify(state.tasks));
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.tasks.filter(
        (item) => item.id !== action.payload.id
      );
      state.tasks = updatedCart;
      localStorage.setItem("products", JSON.stringify(state.tasks));
    },
  },
});

export default taskSlice.reducer;
export const { addToCart, removeFromCart } = taskSlice.actions;
