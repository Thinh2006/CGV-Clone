import { Button } from "components";
import { PATH } from "constant";
import { useAuth } from "hooks";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const AccountInfoTemplate = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    return (
        <InfoContainer>
            <div className="info text-[13px]">
                <h2
                    className="bg-black text-white w-full text-center
                text-20 p-8 mb-10"
                >
                    THÔNG TIN CHUNG
                </h2>
                <div className="info_top flex justify-between w-full">
                    <div className="avatar ">
                        <div className="main-content w-fit text-center">
                            <img src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/icon-profile-cgv.png" />
                            <Button className="mt-10 !bg-[#9d9b9b] !text-white">
                                Thay đổi
                            </Button>
                        </div>
                        <div className="mt-20">
                            <span className="font-bold">
                                Xin chào {user?.hoTen},
                            </span>
                            <br />
                            <span className="text-[#7f7f7f]">
                                Với trang này, bạn sẽ quản lý được tất cả thông
                                tin tài khoản của mình.
                            </span>
                        </div>
                    </div>
                    <div className="barcode text-center">
                        <div className="font-bold">Thẻ thành viên</div>
                        <img
                            src="https://www.webarcode.com/barcode/image.php?code=9992372403829368&amp;style=196&amp;type=C128B&amp;width=220&amp;height=80&amp;xres=1&amp;font=3"
                            alt="Barcode."
                        ></img>
                    </div>
                </div>
                <div className="info_box flex mt-20">
                    <div className="box_title w-1/3 border-r border-black">
                        <p className="flex items-center">
                            <span>Cấp Độ Thẻ</span>
                            <span className="box_img"></span>
                        </p>
                        <p className="mt-1 flex">
                            <span>Tổng Chi Tiêu</span>
                            <span className="ml-24 font-bold text-[#595959]">
                                0 đ
                            </span>
                        </p>
                        <p className="mt-3 flex">
                            <span>Điểm CGV</span>
                            <span className="ml-[47px] font-bold text-[#595959]">
                                0 đ
                            </span>
                        </p>
                    </div>
                    <div className="box-component w-[134px]">
                        <p>Thẻ quà tặng</p>
                        <p className="box-component-item">0 đ</p>
                        <div className="flex justify-center">
                            <Button>Xem</Button>
                        </div>
                    </div>
                    <div className="box-component mt-">
                        <p>Voucher</p>
                        <p className="box-component-item">0</p>
                        <Button>Xem</Button>
                    </div>
                    <div className="box-component">
                        <p>Coupon</p>
                        <p className="box-component-item">0</p>
                        <Button>0</Button>
                    </div>
                    <div className="box-component !border-none w-[145px]">
                        <p>Thẻ thành viên</p>
                        <p className="box-component-item">0</p>
                        <div className="flex justify-center">
                            <Button>1</Button>
                        </div>
                    </div>
                </div>
                <div className="info_footer mt-11 mb-28">
                    <h3 className="font-bold text-16 border-b border-[#cccccc] pb-10">
                        Thông tin tài khoản
                    </h3>
                    <div className="footer-content mt-10">
                        <span>LIÊN HỆ</span>
                        <Button
                            className="mt-10 !bg-[#9d9b9b] !text-white ml-[40px]"
                            onClick={() => navigate(PATH.accountDetail)}
                        >
                            Thay đổi
                        </Button>
                        <p>{`Tên: ${user?.hoTen}`}</p>
                        <p>{`Điện thoại : ${user?.soDT}`}</p>
                        <p>{`Email : ${user?.email}`}</p>
                    </div>
                </div>
            </div>
        </InfoContainer>
    );
};

const InfoContainer = styled.div`
    .info_top {
        .avatar {
            img {
                border-radius: 50%;
                width: 120px;
                height: 120px;
                border: 2px solid #676565;
            }
        }
        .barcode {
            img {
                min-width: 220px;
            }
        }
    }

    .info_box {
        border: 1px solid silver;
        border-radius: 10px;
        padding: 5px;
        width: 100%;

        .box-component {
            padding-left: 20px;
            padding-right: 20px;
            text-align: center;
            border-right: solid 1px black;

            .box-component-item {
                font-weight: bold;
                color: #595959;
                margin-top: 12px;
            }

            button {
                margin-top: 12px;
            }
        }

        button {
            background: #2f95ec;
            padding: 6px 25px !important;
            color: #fff !important;
            font-size: 12px;
            height: 25px;
            font-weight: bold;
            display: flex;
            align-items: center;
        }

        .box_img {
            display: inline-block;
            background: url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/level-cgv-member.png);
            background-repeat: no-repeat;
            width: 36px;
            height: 32px;
            background-position: -102px 1px;
            margin-left: 30px;
        }
    }

    .info_footer {
        p {
            margin-top: 8px;
            color: #7f7f7f;
        }
    }

    @media screen and (max-width: 640px) {
        .info_box {
            padding: 0px;

            .box-component {
                padding: 0px;
            }
        }
    }
`;
