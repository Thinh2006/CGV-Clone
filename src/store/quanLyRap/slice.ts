import { createSlice } from "@reduxjs/toolkit";
import { CinemaComplex, MovieShowtime } from "types";
import { getComlexListThunk, getMovieShowTimeThunk } from "./thunk";

type cinemaInitialState = {
    cinemaComplexList?: CinemaComplex[];
    movieShowTime?: MovieShowtime;
    isCinemasFetching?: boolean;
};

const initialState: cinemaInitialState = {
    cinemaComplexList: undefined,
    movieShowTime: undefined,
    isCinemasFetching: false,
};

const quanLyRapSlice = createSlice({
    name: "quanLyRap",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getComlexListThunk.fulfilled, (state, { payload }) => {
                state.cinemaComplexList = payload;
                state.isCinemasFetching = false;
            })
            .addCase(getComlexListThunk.rejected, (state) => {
                state.isCinemasFetching = false;
            })
            .addCase(getComlexListThunk.pending, (state) => {
                state.isCinemasFetching = true;
            })
            .addCase(getMovieShowTimeThunk.fulfilled, (state, { payload }) => {
                state.movieShowTime = payload;
            });
    },
});

export const { reducer: quanLyRapReducer, actions: quanLyRapActions } =
    quanLyRapSlice;
