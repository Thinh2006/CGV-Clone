import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimServices } from "services";
import { sleep } from "utils";

export const getMovieListThunk = createAsyncThunk(
    "quanLyPhim/getMovieList",
    async (_, { rejectWithValue }) => {
        try {
            const data7 = await quanLyPhimServices.getMovieList("?maNhom=GP07");
            const data9 = await quanLyPhimServices.getMovieList("?maNhom=GP09");
            const data11 = await quanLyPhimServices.getMovieList(
                "?maNhom=GP11"
            );

            const data = [
                ...data7.data.content,
                ...data9.data.content,
                ...data11.data.content,
            ];

            await sleep(500);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const getBannerListThunk = createAsyncThunk(
    "quanLyPhim/getBannerList",
    async (_, { rejectWithValue }) => {
        try {
            const data = await quanLyPhimServices.getBannerList();
            return data.data.content;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const getMovieDetailThunk = createAsyncThunk(
    "quanLyPhim/getMovieDetail",
    async (payload: number, { rejectWithValue }) => {
        try {
            const data = await quanLyPhimServices.getMovieDetail(
                `?MaPhim=${payload}`
            );
            return data.data.content;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
