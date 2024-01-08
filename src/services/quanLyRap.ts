import { apiInstance } from "constant";
import { CinemaComplex, MovieShowtime } from "types";

const api = apiInstance({ baseURL: import.meta.env.VITE_QUAN_LY_RAP_API });

export const quanLyRapServices = {
    getCinemaComlexList: (query = "") =>
        api.get<ApiResponse<CinemaComplex[]>>(
            `/LayThongTinCumRapTheoHeThong${query}`
        ),
    // getSystemShowTime: (maHeThong = "", maNhom = "") =>
    //     api.get<ApiResponse<MovieShowtimeBySystem[]>>(
    //         `/LayThongTinLichChieuHeThongRap${maHeThong}${maNhom}`
    //     ),
    getMovieShowTime: (query) =>
        api.get<ApiResponse<MovieShowtime>>(
            `/LayThongTinLichChieuPhim${query}`
        ),
};
