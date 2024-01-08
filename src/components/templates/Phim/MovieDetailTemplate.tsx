import { LikeFilled } from "@ant-design/icons";
import { Breadcrumb, ShowtimeModal, Tag, TicketButton } from "components";
import { useAuth } from "hooks";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import cn from "classnames";

export const MovieDetailTemplate = () => {
    const { movieDetail: movie } = useAuth();
    const breadCrumbMenu = [
        {
            title: (
                <Link to="/">
                    <img src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-cgv-bread-home.png" />
                </Link>
            ),
        },
        {
            title: <span className="text-black">Phim</span>,
        },
        {
            title: <span className="font-bold">Phim Đang Chiếu</span>,
        },
        {
            title: (
                <span className="underline font-bold uppercase">
                    {movie?.tenPhim}
                </span>
            ),
        },
    ];
    const [modal, setModal] = useState(null);
    const [content, setContent] = useState(0);

    return (
        <DetailContainer>
            <div>
                <div className="bg-[#f1f0e5] border-b-[#cacac0] border-2">
                    <div className="container center pt-3">
                        <Breadcrumb items={breadCrumbMenu} separator=">" />
                    </div>
                </div>
                <div className="bg-[var(--body-color)] py-8 mt-28">
                    <div className="max-w-screen-lg mx-auto px-2 lg:px-0">
                        {/* Title  */}
                        <div className="flex justify-between items-end border-b-[3px] border-black pb-1">
                            <h1 className="text-[28px] mb-10">Nội Dung Phim</h1>
                        </div>

                        {/* Detail */}
                        <div className="flex py-6 w-full mt-20">
                            <div className="md:w-1/5 w-1/3">
                                <div className="card relative pb-14">
                                    <img
                                        src={movie?.hinhAnh}
                                        alt={movie?.biDanh}
                                        className="w-full h-50 px-10 sm:px-0 sm:h-[290px]"
                                    />
                                </div>
                            </div>
                            <div className="sm:w-4/5 sm:pl-8 mt-5 sm:mt-0">
                                <h1 className="text-2xl mb-2 uppercase border-b border-[#d9d6c8] pb-3">
                                    {movie?.tenPhim}
                                </h1>
                                <p>
                                    <span className="font-bold text-[13px]">
                                        Ngày khởi chiếu:{" "}
                                    </span>
                                    {movie?.ngayKhoiChieu.slice(0, 10)}
                                </p>
                                <p>
                                    <span className="font-bold text-[13px]">
                                        Đánh giá:{" "}
                                    </span>
                                    {movie?.danhGia} / 10
                                </p>
                                <p>
                                    <span className="font-bold text-[13px]">
                                        Ngôn ngữ:{" "}
                                    </span>
                                    Tiếng Anh với phụ đề tiếng Việt
                                </p>
                                <div className="cursor-pointer mt-10 flex items-center">
                                    <Tag
                                        icon={<LikeFilled />}
                                        color="#1877f2"
                                        style={{ height: 20 }}
                                    >
                                        Like
                                    </Tag>
                                    {movie?.sapChieu ? null : (
                                        <TicketButton
                                            setModal={setModal}
                                            maPhim={movie?.maPhim}
                                        />
                                    )}

                                    <ShowtimeModal
                                        maPhim={movie?.maPhim}
                                        modal={modal}
                                        setModal={setModal}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className={cn(
                                { detail: !content, trailer: content },
                                "red-ribbon"
                            )}
                        >
                            <ul className={"text-center my-28"}>
                                <li onClick={() => setContent(0)}>
                                    <span>Chi tiết</span>
                                </li>
                                <li>|</li>
                                <li onClick={() => setContent(1)}>
                                    <span>Trailer</span>
                                </li>
                            </ul>
                            <p>{movie?.moTa}</p>
                            <iframe
                                src={movie?.trailer}
                                allowFullScreen
                                style={{ width: 550, height: 300 }}
                                className="mx-auto"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </DetailContainer>
    );
};

const DetailContainer = styled.div`
    .red-ribbon {
        li {
            display: inline-block;
            background-repeat: no-repeat !important;
            background-color: #e71a0f !important;
            height: 40px;
            line-height: 40px;
            color: #fff;
            cursor: pointer;
        }

        li:first-child {
            background: url(https://www.cgv.vn/skin/frontend/cgv/default/images/ribon_left_menu.gif);
            background-position: left;
            padding: 0 10px 0 25px;

            img {
                display: inline-block;
                margin-right: 15px;
            }
        }
        li:last-child {
            background: url(https://www.cgv.vn/skin/frontend/cgv/default/images/ribon_right.gif);
            background-position: right;
            padding: 0 25px 0 10px;
        }

        &.detail {
            li:first-child {
                font-weight: bold;
                ::before {
                    content: url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-icon-finger.png);
                    margin-right: 10px;
                }
            }
            iframe {
                display: none;
            }
        }

        &.trailer {
            li:last-child {
                font-weight: bold;
                ::before {
                    content: url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-icon-finger.png);
                    margin-right: 10px;
                }
            }
            p {
              display: none;
            }
        }
    }
`;
