import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Radio, RadioChangeEvent, Space } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAppDispatch } from "store";
import {
    bookTicketThunk,
    getBookingInfoThunk,
    quanLyDatVeActions,
} from "store/quanLyDatVe";
import { BookingTicket } from "types";
import { useAuth } from "hooks";
import { handleError } from "utils";
import { Ticket } from "components";

export const PaymentTemplate = () => {
    const { bookingInfo, checkedList } = useAuth();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [value, setValue] = useState<number>(0);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getBookingInfoThunk(id));
    }, [dispatch, id]);

    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };

    let tong = 0;
    checkedList.forEach((item) => (tong += item.giaVe));

    const formatNumber = (number: number) =>
        number.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
            minimumFractionDigits: 2,
        });

    const checkoutMethod = [
        {
            value: 1,
            imgPath:
                "https://www.cgv.vn/media/catalog/product/placeholder/default/atm_icon.png",
            title: "ATM Card (Thẻ nội địa)",
        },
        {
            value: 2,
            imgPath:
                "https://www.cgv.vn/media/catalog/product/placeholder/default/visa-mastercard-icon.png",
            title: "Thẻ quốc tế (Visa, Master, Amex, JCB)",
        },
        {
            value: 3,
            imgPath:
                "https://www.cgv.vn/media/catalog/product/placeholder/default/momo_icon.png",
            title: "MoMo - Nhập MMCGV -5k/bill, Vé 9K Bạn Mới",
        },
        {
            value: 4,
            imgPath:
                "https://www.cgv.vn/media/catalog/product/placeholder/default/icon-HOT-96x96.png",
            title: "ZaloPay: Bạn Mới vé 14k - Bạn Thân vé 84K",
        },
    ];

    if (!bookingInfo) return;
    const {
        thongTinPhim: {
            tenCumRap,
            ngayChieu,
            tenRap,
            gioChieu,
            hinhAnh,
            tenPhim,
            maLichChieu,
        },
        danhSachGhe,
    } = bookingInfo;

    const gheList = checkedList.map((element) => ({
        maGhe: element.maGhe,
        giaVe: element.giaVe,
    }));
    const data: BookingTicket = {
        maLichChieu: maLichChieu,
        danhSachVe: gheList,
    };

    const finalCheckSeat = () => {
        dispatch(getBookingInfoThunk(id));
        for (const i of checkedList) {
            const check = danhSachGhe.some(
                (item) => item.daDat && item.maGhe === i.maGhe
            );
            if (check) return check;
        }
    };

    const checkMethod = () => {
        if (!value) {
            toast.error("Vui lòng chọn phương thức thanh toán");
        } else if (finalCheckSeat()) {
            toast.error(
                "Một trong các ghế bạn chọn đã được đặt, vui lòng chọn ghế khác"
            );
        } else {
            dispatch(bookTicketThunk(data))
                .unwrap()
                .then(() => {
                    toast.success("Đặt vé thành công");
                    navigate("/");
                    dispatch(quanLyDatVeActions.resetChecking());
                })
                .catch((error) => handleError(error));
        }
    };

    return (
        <PaymentContainer>
            <div className="max-w-screen-lg mx-auto py-[30px] px-2 lg:px-0">
                <h1 className="bg-[#231d1c] text-white font-bold text-lg text-center p-1.5">
                    THANH TOÁN
                </h1>
                <div className="my-[30px] sm:flex gap-5">
                    <div className="sm:w-8/12">
                        <div className="text-sm">
                            <div className="step-title">
                                <h4>
                                    Bước 1: <span>GIẢM GIÁ</span>
                                </h4>
                                <div
                                    className="flex items-center font-bold text-sm cursor-pointer"
                                    onClick={() => setValue(0)}
                                >
                                    <ReloadOutlined />
                                    <p className="ml-1">Đặt lại</p>
                                </div>
                            </div>
                            <p className="text-sm mt-2.5 mb-3.5">
                                Hiện tại tính năng thanh toán bằng Voucher,
                                Coupon, Điểm trên Website đang bảo trì, để sử
                                dụng vui lòng tải/cập nhật ứng dụng CGV mới nhất
                                để tiếp tục.
                            </p>
                            <p className="bg-[#fff1ce] px-4 py-1.5">Đối tác</p>
                            <p className="bg-[#fff1ce] px-4 py-1.5 mt-1.5">
                                Mã khuyến mãi
                            </p>
                        </div>
                        <div className="mt-5">
                            <div className="step-title">
                                <h4>
                                    Bước 2: <span>HÌNH THỨC THANH TOÁN</span>
                                </h4>
                            </div>
                            <div className="bg-[#fff1ce] mt-1.5 px-4">
                                <Radio.Group onChange={onChange} value={value}>
                                    <Space direction="vertical">
                                        {checkoutMethod.map((radio) => (
                                            <Radio
                                                key={radio.value}
                                                value={radio.value}
                                                className="py-0.5"
                                            >
                                                <div className="flex items-center">
                                                    <img
                                                        src={radio.imgPath}
                                                        alt={radio.title}
                                                        className="w-[37px] h-[37px] mr-10"
                                                    />
                                                    <span className="font-bold">
                                                        {radio.title}
                                                    </span>
                                                </div>
                                            </Radio>
                                        ))}
                                    </Space>
                                </Radio.Group>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-4/12 mt-4 sm:mt-0">
                        <div className="text-sm">
                            <div className="checkout-table">
                                <h4 className="row">Tổng cộng</h4>
                                <div className="row">
                                    <div className=" grid grid-cols-4 font-normal">
                                        <div className="">STD</div>
                                        <div className="col-span-2">
                                            {formatNumber(tong)}
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className="row total">
                                    {formatNumber(tong)}
                                </div>
                            </div>

                            <div className="checkout-table">
                                <h4 className="row">Khuyến mãi</h4>
                                <div className="row total">
                                    {formatNumber(0)}
                                </div>
                            </div>

                            <div className="checkout-table">
                                <h4 className="row subtotal">
                                    Tổng số tiền thanh toán
                                </h4>
                                <div className="row total">
                                    {formatNumber(tong)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Ticket
                    checkedList={checkedList}
                    hinhAnh={hinhAnh}
                    tenPhim={tenPhim}
                    tenCumRap={tenCumRap}
                    gioChieu={gioChieu}
                    ngayChieu={ngayChieu}
                    tenRap={tenRap}
                    handleLeft={() => navigate(`/booking/${maLichChieu}`)}
                    handleRight={checkMethod}
                />
            </div>
        </PaymentContainer>
    );
};

const PaymentContainer = styled.div`
    width: 980px;
    margin: 0 auto;

    .step-title {
        display: flex;
        justify-content: space-between;
        padding: 6px 16px;
        background-color: #bcbdc0;
        border: 2px solid #9d9fa2;
        h4 {
            font-style: italic;
        }
        span {
            font-weight: bold;
            font-style: normal;
            font-size: 16px;
        }
    }

    .checkout-table {
        background-color: #fff1ce;
        text-align: center;
        font-weight: 700;
        margin-bottom: 20px;

        .row {
            padding: 10px;
            border: 1px solid #d4d3c9;
            &.subtotal {
                background-color: #e71a0f;
                color: #fff;
            }
        }

        .total {
            background-color: #d0cece;
            font-size: 16px;
        }
    }

    /* Responsive */
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`;
