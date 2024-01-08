import { combineReducers } from "@reduxjs/toolkit";
import { quanLyNguoiDungReducer } from "./quanLyNguoiDung/slice";
import { quanLyPhimReducer } from "./quanLyPhim";
import { quanLyRapReducer } from "./quanLyRap/slice";
import { quanLyDatVeReducer } from "./quanLyDatVe";


export const rootReducer = combineReducers({
    quanLyNguoiDung: quanLyNguoiDungReducer,
    quanLyPhim: quanLyPhimReducer,
    quanLyRap: quanLyRapReducer,
    quanLyDatVe: quanLyDatVeReducer,
})