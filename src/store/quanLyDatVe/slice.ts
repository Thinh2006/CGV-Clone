import { createSlice } from "@reduxjs/toolkit";
import { getBookingInfoThunk } from ".";
import { BookingInfo, SeatInfo } from "types";

type bookingInitialState = {
    bookingInfo?: BookingInfo;
    isBookingFetching?: boolean;
    checkedList?: SeatInfo[];
};

const initialState: bookingInitialState = {
    bookingInfo: undefined,
    isBookingFetching: false,
    checkedList: [],
};

const quanLyDatVeSlice = createSlice({
    name: "quanLyDatVe",
    initialState,
    reducers: {
        handleChecking: (state, { payload }) => {
            state.checkedList = payload;
        },
        resetChecking: () => {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBookingInfoThunk.fulfilled, (state, { payload }) => {
                state.bookingInfo = payload;
                state.isBookingFetching = false;
            })
            .addCase(getBookingInfoThunk.pending, (state) => {
                state.isBookingFetching = true;
            })
            .addCase(getBookingInfoThunk.rejected, (state) => {
                state.isBookingFetching = false;
            });
    },
});

export const { reducer: quanLyDatVeReducer, actions: quanLyDatVeActions } =
    quanLyDatVeSlice;
