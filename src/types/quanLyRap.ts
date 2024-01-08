import { Movie } from "./quanLyPhim";

// Cinema
type Cinema = {
    maRap: number;
    tenRap: string;
};

export type CinemaComplex = {
    maCumRap: string;
    tenCumRap: string;
    diaChi: string;
    danhSachRap: Cinema[];
};

// Lay Thong Tin Lich Chieu Theo He Thong Rap
type ShowTimeBySystemInfo = Cinema & {
    maLichChieu: number;
    ngayChieuGioChieu: string;
    giaVe: number;
};

type MovieBySystem = {
    lstLichChieuTheoPhim: ShowTimeBySystemInfo[];
    maPhim: string;
    tenPhim: string;
    hinhAnh: string;
    hot: boolean
    dangChieu: boolean
    sapChieu: boolean
};

type ComplexBySystem = {
    danhSachPhim: MovieBySystem[]
    maCumRap: string;
    tenCumRap: string;
    diaChi: string;
    hinhAnh: string;
};

export type MovieShowtimeBySystem = {
    lstCumRap: ComplexBySystem[];
    maHeThongRap: string;
    tenHeThongRap: string;
    logo: string;
};

// Lay Thong Tin Lich Chieu Theo Phim
type ShowtimeByMovieInfo = {
    maLichChieu: string;
    maRap: string
    tenRap: string
    ngayChieuGioChieu: string
    giaVe: number
    thoiLuong: number
};

type ComplexByMovie = {
    lichChieuPhim: ShowtimeByMovieInfo[];
    maCumRap: string;
    tenCumRap: string;
    hinhAnh: string;
    diaChi: string
};

type SystemByMovie = {
    cumRapChieu: ComplexByMovie[];
    maHeThongRap: string;
    tenHeThongRap: string;
    logo: string
};

export type MovieShowtime = Movie & {
    heThongRapChieu: SystemByMovie[];
};
