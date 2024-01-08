import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "components";
import { PATH } from "constant";
import { useAuth } from "hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginSchema, LoginSchemaType } from "schema";
import { useAppDispatch } from "store";
import { loginThunk } from "store/quanLyNguoiDung";
import styled from "styled-components";
import { handleError } from "utils";

export const LoginTemplate = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<LoginSchemaType>({
        mode: "onChange",
        resolver: zodResolver(LoginSchema),
    });

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { isFetching } = useAuth();

    const onSubmit: SubmitHandler<LoginSchemaType> = async (values) => {
        dispatch(loginThunk(values))
            .unwrap()
            .then(() => {
                toast.success("Đăng nhập thành công");
                navigate(PATH.accountInfo);
            })
            .catch((error) => {
                handleError(error);
            });
    };
    return (
        <LoginContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <Button
                    className="w-full !h-[48px] mt-20 !bg-[var(--primary-color)] !text-16"
                    htmlType="submit"
                    type="primary"
                    danger
                    loading={isFetching}
                >
                    Đăng Nhập
                </Button>
            </form>
        </LoginContainer>
    );
};

const LoginContainer = styled.div`
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