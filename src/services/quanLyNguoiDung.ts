import { apiInstance } from "constant";
import { LoginSchemaType, RegisterSchemaType } from "schema";
import { UpdateUserSchemaType } from "schema";
import { UserByAccessToken, UserLogin, UserUpdate } from "types";

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_NGUOI_DUNG_API,
});

export const quanLyNguoiDungServices = {
    register: (data: RegisterSchemaType) => api.post("/DangKy", data),
    login: (data: LoginSchemaType) =>
        api.post<ApiResponse<UserLogin>>("/DangNhap", data),
    getUserByToken: () =>
        api.post<ApiResponse<UserByAccessToken>>("/ThongTinTaiKhoan"),
    updateUser: (data: UpdateUserSchemaType) =>
        api.put<ApiResponse<UserUpdate>>("/CapNhatThongTinNguoiDung", data),
};
