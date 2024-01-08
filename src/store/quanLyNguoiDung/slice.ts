import { createSlice } from "@reduxjs/toolkit";
import { UserByAccessToken, UserLogin, UserUpdate } from "types";
import { getAccessToken } from "utils";
import { getUserByTokenThunk, loginThunk, updateUserThunk } from ".";
import { toast } from "react-toastify";

type userInintialState = {
    userLogin?: UserLogin | UserByAccessToken | UserUpdate;
    accessToken?: string;
    isFetching?: boolean;
    userByToken?: UserByAccessToken;
};

const initialState: userInintialState = {
    accessToken: getAccessToken(),
    isFetching: false,
};

const quanLyNguoiDungSlice = createSlice({
    name: "quanLyNguoiDung",
    initialState,
    reducers: {
        logOut: (state) => {
            state.userLogin = undefined;
            state.accessToken = undefined;
            localStorage.removeItem("ACCESSTOKEN");
            toast.success("Đăng xuất thành công");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.fulfilled, (state, { payload }) => {
                localStorage.setItem("ACCESSTOKEN", payload.accessToken);
                state.accessToken = payload.accessToken;
                state.userLogin = payload;
                state.isFetching = false;
            })
            .addCase(loginThunk.rejected, (state) => {
                state.isFetching = false;
            })
            .addCase(loginThunk.pending, (state) => {
                state.isFetching = true;
            })
            .addCase(getUserByTokenThunk.fulfilled, (state, { payload }) => {
                state.userLogin = payload;
                state.userByToken = payload;
            })
            .addCase(updateUserThunk.fulfilled, (state, { payload }) => {
                state.userLogin = payload;
                state.isFetching = false;
            })
            .addCase(updateUserThunk.pending, (state) => {
                state.isFetching = true;
            })
            .addCase(updateUserThunk.rejected, (state) => {
                state.isFetching = false;
            });
    },
});

export const {
    reducer: quanLyNguoiDungReducer,
    actions: quanLyNguoiDungActions,
} = quanLyNguoiDungSlice;
