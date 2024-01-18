import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyRapServices } from "services";
import { sleep } from "utils";

export const getComlexListThunk = createAsyncThunk(
    "quanLyRap/getCinemaComlexList",
    async (_, { rejectWithValue }) => {
        try {
            const data = await quanLyRapServices.getCinemaComlexList(
                "?maHeThongRap=CGV"
            );
            await sleep(1000);
            return data.data.content;
        } catch (error) {
            rejectWithValue(error);
        }
    }
);

// export const getSystemShowtimeThunk = createAsyncThunk(
//     "quanLyRap/getSystemShowtimeThunk",
//     async (_, { rejectWithValue }) => {
//         try {
//             const data1 = await quanLyRapServices.getSystemShowTime(
//                 `?maHeThongRap=CGV`,
//                 `&maNhom=GP07`
//             );
//             const data2 = await quanLyRapServices.getSystemShowTime(
//                 `?maHeThongRap=CGV`,
//                 `&maNhom=GP09`
//             );
//             const data3 = await quanLyRapServices.getSystemShowTime(
//                 `?maHeThongRap=CGV`,
//                 `&maNhom=GP11`
//             );
//             const data = [
//                 ...data1.data.content,
//                 ...data2.data.content,
//                 ...data3.data.content,
//             ];
//             return data;
//         } catch (error) {
//             rejectWithValue(error);
//         }
//     }
// );

export const getMovieShowTimeThunk = createAsyncThunk(
    "quanLyRap/getMovieShowTime",
    async (payload: number, { rejectWithValue }) => {
        try {
            const data = await quanLyRapServices.getMovieShowTime(
                `?MaPhim=${payload}`
            );
            return data.data.content;
        } catch (error) {
            rejectWithValue(error);
        }
    }
);
