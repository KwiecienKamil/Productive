"use client";

import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./features/taskSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { doneDateSlice } from "./features/doneDateSlice";

export const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
    doneDate: doneDateSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
