export type UserLogin = {
    taiKhoan: string;
    hoTen: string;
    email: string;
    soDT: string;
    maNhom: string;
    maLoaiNguoiDung: "KhachHang" | "QuanTri";
    accessToken: string;
};

export type UserByAccessToken = Omit<UserLogin, "accessToken"> & {
    thongTinDatVe: [];
    loaiNguoiDung: {
        maLoaiNguoiDung: "KhachHang" | "QuanTri";
        tenLoai: string;
    };
};

export type UserUpdate = Omit<UserLogin, "accessToken" | "maLoaiNguoiDung"> & {
    matKhau: string;
    maLoaiNguoiDung: "Khách hàng" | "Quản trị";
    loaiNguoiDung: null;
    thongTinDatVe: null;
};

export type UserBookingInfo = {
    maVe: number;
    ngayDat: string;
    tenPhim: string;
    hinhAnh: string;
    giaVe: number;
    thoiLuongPhim: number;
};
