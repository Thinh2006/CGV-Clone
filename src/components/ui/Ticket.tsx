import cn from "classnames";
import styled from "styled-components";
import { SeatInfo } from "types";

type ticketProps = {
    hinhAnh: string;
    tenPhim: string;
    tenCumRap: string;
    gioChieu: string;
    ngayChieu: string;
    tenRap: string;
    booking?: boolean;
    checkedList: SeatInfo[];
    handleLeft?: () => void;
    handleRight: () => void;
};

export const Ticket = ({
    hinhAnh,
    tenPhim,
    tenCumRap,
    gioChieu,
    ngayChieu,
    tenRap,
    checkedList,
    booking,
    handleLeft,
    handleRight,
}: ticketProps) => {
    const sortedList = [...checkedList].sort(
        (a, b) => parseInt(a.tenGhe) - parseInt(b.tenGhe)
    );
    const formatNumber = (number: number) =>
        number.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
            minimumFractionDigits: 2,
        });
    let total = 0;
    checkedList.forEach((item) => (total += item.giaVe));

    return (
        <TicketContainer>
            <div className="footer">
                <div className="footer-top"></div>
                <div className="footer-mid flex gap-28 my-8 text-[#cccccc]">
                    <a className="footer-left" onClick={() => handleLeft()}></a>
                    <div className="footer-between lg:flex gap-28">
                        <img src={hinhAnh} />
                        <span className="w-[100px]">
                            {tenPhim.toUpperCase()}
                        </span>
                        <div>
                            <p>
                                <span>Rạp</span>
                                <span>{tenCumRap}</span>
                            </p>
                            <p>
                                <span>Suất chiếu</span>
                                <span>{` ${gioChieu}, ${ngayChieu}`}</span>
                            </p>
                            <p>
                                <span>Phòng chiếu</span>
                                <span>{tenRap}</span>
                            </p>
                            <p
                                className={cn({
                                    "!hidden": !checkedList.length,
                                })}
                            >
                                <span>Ghế</span>
                                <span>
                                    {checkedList[0]?.loaiGhe === "Thuong"
                                        ? "Thường"
                                        : "Vip"}
                                    <br />
                                    {sortedList?.map(
                                        (seat, index) =>
                                            (index ? ", " : "") + seat.tenGhe
                                    )}
                                </span>
                            </p>
                        </div>
                        <div className="footer-price">
                            <p>
                                <span>Giá vé</span>
                                <span>
                                    {formatNumber(checkedList[0]?.giaVe || 0)}
                                </span>
                                <span className="info-icon">
                                    <img
                                        src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/icon-info-combo.png"
                                        className="!w-16 !h-16 cursor-pointer"
                                    />
                                </span>
                                <div
                                    className={cn("price-detail", {
                                        "!hidden": !checkedList.length,
                                    })}
                                >
                                    <p>
                                        {`${
                                            checkedList[0]?.loaiGhe === "Thuong"
                                                ? "Thường"
                                                : "Vip"
                                        } 
                                                x ${checkedList.length}`}
                                    </p>
                                </div>
                            </p>
                            <p>
                                <span>Combo</span>
                                <span>{formatNumber(0)}</span>
                            </p>
                            <p>
                                <span>Tổng</span>
                                <span>{formatNumber(total || 0)}</span>
                            </p>
                        </div>
                    </div>
                    <a
                        className={cn("footer-right", {
                            "booking-right": booking,
                        })}
                        onClick={() => handleRight()}
                    ></a>
                </div>
                <div className="footer-bottom"></div>
            </div>
            ;
        </TicketContainer>
    );
};

const TicketContainer = styled.div`
    .footer {
        background-color: black;
        margin-top: 30px;
        .footer-top,
        .footer-bottom {
            background: url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-top-seatmap.png);
            background-repeat: repeat-x;
            width: 100%;
            height: 8px;
        }
        .footer-left {
            background: url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-cgv-button-process.png);
            background-position: -152px 0;
            width: 106px;
            height: 106px;
            display: inline-block;
            margin-left: 3px;
            cursor: pointer;

            &:hover {
                opacity: 0.8;
            }
        }

        .footer-price {
            position: relative;

            .price-detail {
                display: none;
                position: absolute;
                z-index: 10;
                top: 20px;
                right: -100px;
                border: 2px solid var(--primary-color);
                width: 200px;
                padding: 8px;
                background-color: #f6f6f6;
                color: black;
                font-weight: bold;
            }

            .info-icon:hover ~ .price-detail {
                display: block;
            }
        }

        .footer-right {
            background: url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-cgv-button-process.png);
            background-position: -151px -110px;
            width: 106px;
            height: 106px;
            display: inline-block;
            margin-right: 3px;
            cursor: pointer;

            &.booking-right {
                background-position: -151px -441px;
            }

            &:hover {
                opacity: 0.8;
            }
        }

        img {
            width: 74px;
            height: 108px;
        }

        .footer-mid p {
            display: flex;
            span:nth-child(1) {
                width: 70px;
                display: inline-block;
            }

            span:nth-child(2) {
                font-weight: bold;
                width: 150px;
            }
        }
    }

    /* Responsive */
    @media screen and (max-width: 1024px) {
        width: 100%;

        .footer {
            .footer-between {
                img {
                    margin: 0 auto;
                }
            }
            .footer-mid {
                justify-content: center;
            }
            .footer-left,
            .footer-right {
                margin: auto 0;
            }
        }
    }

    @media screen and (max-width: 680px) {
        .footer {
            .footer-between {
                width: 200px;
                text-align: center;

                p {
                    margin: 15px 0;
                }
            }
        }
    }
`;
