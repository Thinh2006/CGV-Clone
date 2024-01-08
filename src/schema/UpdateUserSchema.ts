import { z } from "zod";

export const UpdateUserSchema = z.object({
    hoTen: z.string().min(1, "Tên không được bỏ trống"),
    soDt: z.string().min(1, "Số điện thoại không được bỏ trống"),
    email: z
        .string()
        .min(1, "Email không được bỏ trống")
        .email("Vui lòng nhập đúng email"),
    matKhau: z.string().min(1, "Mật khẩu không được bỏ trống"),
    taiKhoan: z.string().min(1, "Tài khoản không được bỏ trống"),
    maNhom: z.string(),
    maLoaiNguoiDung: z.string(),
});

export type UpdateUserSchemaType = z.infer<typeof UpdateUserSchema>;
