import { useAuth } from "hooks";
import { useEffect, useState } from "react";
import { useAppDispatch } from "store";
import { getComlexListThunk } from "store/quanLyRap";
import styled from "styled-components";

export const CinemasTemplate = () => {
    const { cinemaComplexList } = useAuth();
    const [complex, setComplex] = useState(null);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getComlexListThunk());
    }, [dispatch]);

    return (
        <CinemaContainer>
            <div>
                <div className="container !my-7 mx-auto">
                    <div className="top"></div>
                    <div className="mid">
                        <h1 className="lg:text-[48px] text-3xl">CGV CINEMAS IN SAIGON</h1>
                        <div>
                            <ul className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 text-white py-20 border-y-2 border-[#727171]">
                                {cinemaComplexList?.map((complex) => (
                                    <li
                                        className="my-8 text-[#dbdbdb] cursor-pointer hover:text-[var(--primary-color)]"
                                        key={complex.maCumRap}
                                    >
                                        <a
                                            onClick={() => {
                                                setComplex(complex.danhSachRap);
                                            }}
                                        >
                                            {complex.tenCumRap.trim().slice(6)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Danh sach cum rap */}
                        <div>
                            <ul className="grid grid-cols-5 mt-6">
                                {complex &&
                                    complex?.map((cinema) => (
                                        <li
                                            className="my-8 text-[#dbdbdb] cursor-pointer"
                                            key={cinema.maRap}
                                        >
                                            <a>{`Rạp ${cinema.maRap}`}</a>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                    <div className="bot"></div>
                </div>
            </div>
        </CinemaContainer>
    );
};

const CinemaContainer = styled.div`
    .top {
        background: url(https://www.cgv.vn/skin/frontend/cgv/default/images/cinema-showtimes-favorite-top.png);
        width: 100%;
        height: 43px;
    }
    .mid {
        background: url(https://www.cgv.vn/skin/frontend/cgv/default/images/cinema-showtimes-favorite-center.png);
        text-align: center;
        padding: 40px;

        h1 {
            color: #717171;
            font-weight: bold;
            text-shadow: 2px 2px 2px #b9b9b9;
            margin-bottom: 50px;
        }
    }
    .bot {
        background: url(https://www.cgv.vn/skin/frontend/cgv/default/images/cinema-showtimes-favorite-bottom.png);
        width: 100%;
        height: 43px;
    }
`;