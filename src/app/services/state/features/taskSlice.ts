import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

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
        (task) => task.id !== action.payload.id
      );
      state.tasks = updatedCart;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    doneDate: (state, action) => {
      const currentTask = state.tasks.find(
        (task) => task.id === action.payload.id
      );
      if (currentTask?.doneDates.length === 0) {
        currentTask?.doneDates.push(dayjs().format("DD-MM-YY"));
      } else {
      }
      if (
        currentTask?.doneDates.filter(
          (date) => date === dayjs().format("DD-MM-YY")
        )
      ) {
        alert("XD");
      } else {
        currentTask?.doneDates.push(dayjs().format("DD-MM-YY"));
      }

      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export default taskSlice.reducer;
export const { addTask, removeTask, doneDate } = taskSlice.actions;
