import { createSlice } from "@reduxjs/toolkit";
import { CinemaComplex, MovieShowtime } from "types";
import { getComlexListThunk, getMovieShowTimeThunk } from "./thunk";

type cinemaInitialState = {
    cinemaComplexList?: CinemaComplex[];
    movieShowTime?: MovieShowtime;
};

const initialState: cinemaInitialState = {
    cinemaComplexList: undefined,
    movieShowTime: undefined,
};

const quanLyRapSlice = createSlice({
    name: "quanLyRap",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getComlexListThunk.fulfilled, (state, { payload }) => {
                state.cinemaComplexList = payload;
            })
            .addCase(getMovieShowTimeThunk.fulfilled, (state, { payload }) => {
                state.movieShowTime = payload;
            })
    },
});

export const { reducer: quanLyRapReducer, actions: quanLyRapActions } =
    quanLyRapSlice;
