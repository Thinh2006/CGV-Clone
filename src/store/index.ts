import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { useDispatch } from "react-redux";
import { getUserByTokenThunk } from "./quanLyNguoiDung";

export const store = configureStore({
    reducer: rootReducer
})

store.dispatch(getUserByTokenThunk())

type AppDispatch = (typeof store)['dispatch']

export const useAppDispatch: () => AppDispatch = useDispatch 

export type RootState = ReturnType<(typeof store)['getState']> 