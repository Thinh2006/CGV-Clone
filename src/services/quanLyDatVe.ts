import { apiInstance } from "constant";
import { BookingInfo, BookingTicket } from "types";

const api = apiInstance({ baseURL: import.meta.env.VITE_QUAN_LY_DAT_VE_API });

export const quanLyDatVeServices = {
    getBookingInfo: (query) =>
        api.get<ApiResponse<BookingInfo>>(`/LayDanhSachPhongVe${query}`),
    bookTicket: (data: BookingTicket) =>
        api.post<ApiResponse<string>>("/DatVe", data),
};
