import { createSlice } from "@reduxjs/toolkit";

export interface Task {
  id: number | undefined;
  title: string | undefined;
  doneDates: string[];
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
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    removeTask: (state, action) => {
      const updatedCart = state.tasks.filter(
        (item) => item.id !== action.payload.id
      );
      state.tasks = updatedCart;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export default taskSlice.reducer;
export const { addTask, removeTask } = taskSlice.actions;
