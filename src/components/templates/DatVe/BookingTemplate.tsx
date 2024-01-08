import cn from "classnames";
import { Loading, Ticket } from "components";
import { useAuth } from "hooks";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch } from "store";
import { getBookingInfoThunk, quanLyDatVeActions } from "store/quanLyDatVe";
import styled from "styled-components";
import { SeatInfo } from "types";

export const BookingTemplate = () => {
    const { bookingInfo, isBookingFetching, checkedList } = useAuth();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { id } = useParams();
    useEffect(() => {
        dispatch(getBookingInfoThunk(id));
    }, [dispatch, id]);

    const totalSeat = bookingInfo?.danhSachGhe?.length;
    const availableSeat = bookingInfo?.danhSachGhe?.filter(
        (seat) => seat.daDat === false
    )?.length;

    const handleClicking = (seat: SeatInfo) => {
        const isChecked = checkedList.some((item) => item.maGhe === seat.maGhe);
        const isSameType = checkedList.length
            ? checkedList[0].loaiGhe === seat.loaiGhe
            : true;
        if (isChecked) {
            const filteredList = checkedList.filter(
                (filter) => filter.maGhe !== seat.maGhe
            );
            dispatch(quanLyDatVeActions.handleChecking(filteredList));
            return;
        } else if (checkedList.length < 8 && !seat.daDat && isSameType) {
            dispatch(quanLyDatVeActions.handleChecking([...checkedList, seat]));
        } else if (!isSameType) {
            toast.error("Vui lòng chọn cùng loại ghế");
        } else {
            toast.error("Chỉ có thể chọn tối đa 8 ghế");
        }
    };

    const checkSeat = () => {
        if (checkedList.length) {
            if (checkedList.length > 1) {
                for (const i of checkedList) {
                    const result = checkedList.some(
                        (item) =>
                            i.maGhe - 1 === item.maGhe ||
                            i.maGhe + 1 === item.maGhe
                    );
                    if (!result) {
                        toast.error(
                            "Vui lòng không chừa ghế trống bên trái hoặc bên phải của các ghế bạn đã chọn"
                        );
                        return;
                    } else if (result) {
                        navigate(`/payment/${id}`);
                    }
                }
            } else {
                navigate(`/payment/${id}`);
            }
        } else if (!checkedList.length) {
            toast.error("Vui lòng chọn ghế");
        }
    };

    if (!bookingInfo) return;
    const {
        thongTinPhim: {
            tenCumRap,
            ngayChieu,
            tenRap,
            gioChieu,
            hinhAnh,
            tenPhim,
        },
        danhSachGhe,
    } = bookingInfo;

    if (isBookingFetching) return <Loading />;

    return (
        <BookingContainer>
            <div>
                <div className="booking !my-28 border-2 border-[#d4d3c9]">
                    <h1 className="bg-black text-white text-center text-18 p-12 font-bold">
                        BOOKING ONLINE
                    </h1>
                    <div className="font-bold p-10 bg-[#fff0ce] leading-5">
                        <p>{`${tenCumRap} | ${tenRap} | Số ghế (${availableSeat}/${totalSeat})`}</p>
                        <p>{`${ngayChieu} ${gioChieu}`}</p>
                    </div>
                    <div className="seats mt-[35px] mb-10">
                        <img
                            src="/public/images/bg-screen.png"
                            className="w-full"
                        />
                        <div className="seats-list">
                            {danhSachGhe?.map((ghe) => (
                                <a
                                    key={ghe.maGhe}
                                    className={cn({
                                        booked: ghe.daDat,
                                        normal:
                                            ghe.loaiGhe === "Thuong" &&
                                            !ghe.daDat,
                                        vip:
                                            ghe.loaiGhe === "Vip" && !ghe.daDat,
                                        checked: checkedList.some(
                                            (item) => item.maGhe === ghe.maGhe
                                        ),
                                    })}
                                    onClick={() => handleClicking(ghe)}
                                >
                                    {ghe.tenGhe}
                                </a>
                            ))}
                        </div>
                        <div className="note grid grid-cols-2">
                            <div className="">
                                <a className="bg-[#b11500]"></a>
                                <span>Checked</span>
                            </div>
                            <div className="">
                                <a className="normal"></a>
                                <span>Thường</span>
                            </div>
                            <div className="">
                                <a className="booked"></a>
                                <span>Đã Chọn</span>
                            </div>
                            <div className="">
                                <a className="vip"></a>
                                <span>VIP</span>
                            </div>
                            <div className="">
                                <a className="booked !text-20">X</a>
                                <span>Không thể chọn</span>
                            </div>
                            <div className="">
                                <a className="bg-[#FF62B0]"></a>
                                <span>Sweetbox</span>
                            </div>
                        </div>
                    </div>
                    <Ticket
                        hinhAnh={hinhAnh}
                        tenPhim={tenPhim}
                        tenCumRap={tenCumRap}
                        gioChieu={gioChieu}
                        ngayChieu={ngayChieu}
                        tenRap={tenRap}
                        booking
                        checkedList={checkedList}
                        handleRight={checkSeat}
                    />
                </div>
            </div>
        </BookingContainer>
    );
};

const BookingContainer = styled.div`
    width: 980px;
    margin: 0 auto;
    .seats {
        .seats-list {
            width: 500px;
            margin: 60px auto 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 8px;
        }

        a {
            border: solid 1px black;
            width: 25px;
            height: 25px;
            font-size: 10px;
            display: flex;
            align-items: center;
            justify-content: center;

            &.booked {
                background-color: #bbb;
                color: white;
                border: none;
            }

            &.normal {
                border-color: #01c73c;
                cursor: pointer;
            }

            &.vip {
                border-color: var(--primary-color);
                cursor: pointer;
            }

            &.checked {
                background-color: #b11500;
            }
        }

        .note {
            width: 500px;
            margin: 0 auto;
            margin-top: 40px;

            div {
                display: flex;
                align-items: center;
                margin: 5px;

                span {
                    margin-left: 5px;
                }
            }
        }
    }

    /* Responsive */
    @media screen and (max-width: 1024px) {
        width: 100%;
        .seats .seats-list {
            width: auto;
        }
    }
`;
