type MovieInfo = {
    maLichChieu: number;
    tenCumRap: string;
    tenRap: string;
    diaChi: string;
    tenPhim: string;
    hinhAnh: string;
    ngayChieu: string;
    gioChieu: string;
};

export type SeatInfo = {
    maGhe: number;
    tenGhe: string;
    maRap: number;
    loaiGhe: string;
    stt: string;
    giaVe: number;
    daDat: boolean;
    taiKhoanNguoiDat: string;
};

export type BookingInfo = {
    thongTinPhim: MovieInfo;
    danhSachGhe: SeatInfo[];
};

// Dat ve
type Ticket = {
    maGhe: number;
    giaVe?: number;
};

export type BookingTicket = {
    maLichChieu: number;
    danhSachVe: Ticket[];
};
