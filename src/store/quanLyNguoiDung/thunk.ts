import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginSchemaType, UpdateUserSchemaType } from "schema";
import { quanLyNguoiDungServices } from "services";
import { getAccessToken, sleep } from "utils";

export const loginThunk = createAsyncThunk(
    "quanLyNguoiDung/login",
    async (payload: LoginSchemaType, { rejectWithValue }) => {
        try {
            const data = await quanLyNguoiDungServices.login(payload);

            await sleep(2000);

            return data.data.content;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const getUserByTokenThunk = createAsyncThunk(
    "quanLyNguoiDung/getUserByToken",
    async (_, { rejectWithValue }) => {
        try {
            const token = getAccessToken();
            if (token) {
                const data = await quanLyNguoiDungServices.getUserByToken();
                return data.data.content;
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const updateUserThunk = createAsyncThunk(
    "quanLyNguoiDung/updateUser",
    async (payload: UpdateUserSchemaType, { rejectWithValue }) => {
        try {
            const data = await quanLyNguoiDungServices.updateUser(payload);
            await sleep(1000);
            return data.data.content;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
