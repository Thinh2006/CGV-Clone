import { z } from "zod";


export const RegisterSchema = z.object({
    hoTen: z.string().min(1,'Tên không được bỏ trống'),
    soDt: z.string().min(1 , 'Số điện thoại không được bỏ trống'),
    email: z.string().min(1, 'Email không được bỏ trống').email('Vui lòng nhập đúng email'),
    matKhau: z.string().min(1, 'Mật khẩu không được bỏ trống'),
    taiKhoan: z.string().min(1, 'Tài khoản không được bỏ trống'),
})

export type RegisterSchemaType = z.infer<typeof RegisterSchema>
