import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyDatVeServices } from "services/quanLyDatVe";
import { BookingTicket } from "types";

export const getBookingInfoThunk = createAsyncThunk(
    "quanLyDatVe/getBookingInfo",
    async (payload: string, { rejectWithValue }) => {
        try {
            const data = await quanLyDatVeServices.getBookingInfo(
                `?MaLichChieu=${payload}`
            );
            return data.data.content;
        } catch (error) {
            rejectWithValue(error);
        }
    }
);

export const bookTicketThunk = createAsyncThunk(
    "quanLyDatVe/bookTicket",
    async (payload:BookingTicket, { rejectWithValue }) => {
        try {
            const data = await quanLyDatVeServices.bookTicket(payload);
            return data.data.content;
        } catch (error) {
            rejectWithValue(error);
        }
    }
);
