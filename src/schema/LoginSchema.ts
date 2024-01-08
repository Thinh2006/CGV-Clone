import { z } from "zod";

export const LoginSchema = z.object({
    taiKhoan: z.string().min(1, 'Vui lòng nhập tài khoản'),
    matKhau: z.string().min(1, 'Vui lòng nhập mật khẩu')
})

export type LoginSchemaType = z.infer<typeof LoginSchema>