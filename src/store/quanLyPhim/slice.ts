import { createSlice } from "@reduxjs/toolkit";
import { Banner, Movie } from "types";
import { getBannerListThunk, getMovieDetailThunk, getMovieListThunk } from ".";

type movieInitialState = {
    movieList?: Movie[];
    isFetchingMovieList?: boolean;
    bannerList?: Banner[];
    movieDetail?: Movie;
    isFetchingMovieDetail?: boolean;
};

const initialState: movieInitialState = {
    movieList: undefined,
    isFetchingMovieList: false,
    bannerList: undefined,
    movieDetail: undefined,
    isFetchingMovieDetail: false,
};

const quanLyPhimSlice = createSlice({
    name: "quanLyPhim",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovieListThunk.pending, (state) => {
                state.isFetchingMovieList = true;
            })
            .addCase(getMovieListThunk.fulfilled, (state, { payload }) => {
                state.movieList = payload;
                state.isFetchingMovieList = false;
            })
            .addCase(getMovieListThunk.rejected, (state) => {
                state.isFetchingMovieList = false;
            })
            .addCase(getBannerListThunk.fulfilled, (state, { payload }) => {
                state.bannerList = payload;
            })
            .addCase(getMovieDetailThunk.fulfilled, (state, { payload }) => {
                state.movieDetail = payload;
                state.isFetchingMovieDetail = false;
            })
            .addCase(getMovieDetailThunk.rejected, (state) => {
                state.isFetchingMovieDetail = false;
            })
            .addCase(getMovieDetailThunk.pending, (state) => {
                state.isFetchingMovieDetail = true;
            });
    },
});

export const { reducer: quanLyPhimReducer, actions: quanLyPhimActions } =
    quanLyPhimSlice;
