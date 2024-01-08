import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "antd";
import { Input } from "components";
import { PATH } from "constant";
import { useAuth } from "hooks";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
    UpdateUserSchema,
    UpdateUserSchemaType,
} from "schema/UpdateUserSchema";
import { useAppDispatch } from "store";
import { updateUserThunk } from "store/quanLyNguoiDung";
import { handleError } from "utils";

export const AccountDetailTemplate = () => {
    const { user, isFetching } = useAuth();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<UpdateUserSchemaType>({
        mode: "onChange",
        resolver: zodResolver(UpdateUserSchema),
    });

    const onSubmit: SubmitHandler<UpdateUserSchemaType> = async (value) => {
        const {
            hoTen,
            matKhau,
            soDt,
            email,
            maLoaiNguoiDung,
            maNhom,
            taiKhoan,
        } = value;
        const changedValue = {
            hoTen,
            matKhau,
            soDt,
            email,
            maLoaiNguoiDung:
                maLoaiNguoiDung === "Khách hàng" ? "KhachHang" : "QuanTri",
            maNhom,
            taiKhoan,
        };
        try {
            await dispatch(updateUserThunk(changedValue))
                .unwrap()
                .then(() => toast.success("Cập nhật thành công"));
        } catch (error) {
            handleError(error);
        }
    };

    useEffect(() => {
        reset({ ...user, soDt: user?.soDT });
    }, [reset, user]);

    return (
        <div className="detail">
            <h2
                className="bg-black text-white w-full text-center
                text-20 p-8 mb-10"
            >
                THAY ĐỔI THÔNG TIN
            </h2>
            <div className="detail_form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="detail_content flex">
                        <div className="w-1/2 mr-3">
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
                                label="Điện thoại"
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
                                value={user?.email}
                                className="hidden"
                                type="text"
                                name="email"
                                register={register}
                            />
                            <p>{user?.email}</p>
                        </div>
                        <div className="w-1/2">
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
                                label="Mật khẩu cũ"
                                placeholder="Mật khẩu"
                                id="password"
                                className="my-10 w-full border-2 p-4"
                                type="password"
                                name="matKhau"
                                register={register}
                                error={errors?.matKhau?.message}
                            />
                        </div>
                    </div>
                    <div className="detail_footer">
                        <h3 className="font-bold text-14 border-b border-[#cccccc] pb-10 mt-16">
                            Thông tin tùy chọn
                        </h3>
                        <div className="footer_content mt-16 grid grid-cols-2">
                            <div className="text-12">
                                <p className="font-bold">Số thẻ thành viên</p>
                                <p>1992-3644-0315-9365</p>
                            </div>
                            <div className="">
                                <label className="font-bold">
                                    Rạp yêu thích
                                </label>
                                <br />
                                <select className="mt-4 border-black border-solid border-2">
                                    <option value="">CGV Aeon Canary</option>
                                    <option value="">CGV Lotte An Hòa</option>
                                    <option value="">CGV Aeon Tân Bình</option>
                                    <option value="">CGV BigC Đồng Nai</option>
                                    <option value="">CGV BigC Cái Răng</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <Button
                            className="mt-20 !bg-[var(--primary-color)] !text-13 !px-6 !py-2 font-bold"
                            htmlType="submit"
                            type="primary"
                            danger
                            loading={isFetching}
                        >
                            LƯU LẠI
                        </Button>
                    </div>
                    <div className="text-[var(--primary-color)]">
                        <p className="cursor-pointer">
                            <a onClick={() => navigate(PATH.accountInfo)}>
                                {"<< Quay lại"}
                            </a>
                        </p>
                        <p className="mt-20">* Thông tin bắt buộc</p>
                    </div>
                </form>
            </div>
        </div>
    );
};
