import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "components";
import { PATH } from "constant";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RegisterSchema, RegisterSchemaType } from "schema";
import { quanLyNguoiDungServices } from "services";
import styled from "styled-components";
import { handleError } from "utils";

export const RegisterTemplate = () => {

    const navigate = useNavigate()
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterSchemaType>({
        mode: "onChange",
        resolver: zodResolver(RegisterSchema),
    });

    const onSubmit:SubmitHandler<RegisterSchemaType> = async (value) => {
        try {
            await quanLyNguoiDungServices.register(value)
            toast.success('Đăng ký thành công')
            navigate(PATH.login)

        } catch(error) {
            handleError(error)
        }
    } 

    return (
        <RegisterContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="Tên"
                    placeholder="Tên"
                    id="name"
                    className="my-10 w-full border-2 p-4"
                    type="text"
                    name="hoTen"
                    register={register}
                    error={errors?.hoTen?.message}
                />
                <Input
                    label="Số điện thoại"
                    placeholder="Số điện thoại"
                    id="phone"
                    className="my-10 w-full border-2 p-4"
                    type="text"
                    name="soDt"
                    register={register}
                    error={errors?.soDt?.message}
                />
                <Input
                    label="Email"
                    placeholder="Email"
                    id="email"
                    className="my-10 w-full border-2 p-4"
                    type="text"
                    name="email"
                    register={register}
                    error={errors?.email?.message}
                />
                <Input
                    label="Tài khoản"
                    placeholder="Tài khoản"
                    id="account"
                    className="my-10 w-full border-2 p-4"
                    type="text"
                    name="taiKhoan"
                    register={register}
                    error={errors?.taiKhoan?.message}
                />
                <Input
                    label="Mật khẩu"
                    placeholder="Mật khẩu"
                    id="password"
                    className="my-10 w-full border-2 p-4"
                    type="password"
                    name="matKhau"
                    register={register}
                    error={errors?.matKhau?.message}
                />
                {/* <Input
                    label="Mã Nhóm"
                    placeholder="Mã nhóm"
                    id="groupID"
                    className="my-10 w-full border-2 p-4"
                    type="text"
                    name="maNhom"
                    register={register}
                    error={errors?.maNhom?.message}
                /> */}
                <Button
                    className="w-full !h-[48px] mt-20 !bg-[var(--primary-color)] !text-16"
                    htmlType="submit"
                    type="primary"
                    danger
                >
                    Đăng Ký
                </Button>
            </form>
        </RegisterContainer>
    );
};

const RegisterContainer = styled.div`
    /* Responsive */

    form {
        font-size: 18px;
    }

    @media screen and (min-width: 768px) {

        form {
            font-size: 15px;
        }
    }
`