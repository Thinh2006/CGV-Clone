import { useAuth } from "hooks";
import styled from "styled-components";
import { UserBookingInfo } from "types";

export const TransactionHistoryTemplate = () => {
    const {
        userByToken: { thongTinDatVe },
    } = useAuth();
    console.log("thongTinDatVe", thongTinDatVe);

    return (
        <HistoryContainer>
            <div>
                <h2
                    className="bg-black text-white w-full text-center
                text-20 p-8 mb-10"
                >
                    LỊCH SỬ GIAO DỊCH
                </h2>
                <div className="">
                    <ul>
                        {thongTinDatVe?.map((element: UserBookingInfo) => (
                            <li className="booking_list border-[var(--primary-color)]">
                                <p>
                                    <span>Tên Cụm Rạp: </span>
                                    <span>{element.maVe}</span>
                                </p>
                                <p>
                                    <span>Ngày Đặt: </span>
                                    <span>
                                        {new Date(
                                            element.ngayDat
                                        ).toLocaleDateString()}
                                    </span>
                                </p>
                                <p>
                                    <span>Giờ Đặt: </span>
                                    <span>
                                        {new Date(
                                            element.ngayDat
                                        ).toLocaleTimeString()}
                                    </span>
                                </p>
                                <p>
                                    <span>Tên Phim: </span>
                                    <span>{element.tenPhim}</span>
                                </p>
                                <p>
                                    <span>Giá vé: </span>
                                    <span>{element.giaVe}</span>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </HistoryContainer>
    );
};

const HistoryContainer = styled.div`
    .booking_list {
        margin-top: 20px;
        border: 2px solid var(--primary-color);
        border-radius: 5px;
        padding: 10px;
        p {
            span:nth-child(2) {
                font-weight: bold;
            }
        }
    }
`;
