import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper/modules";
import { useAuth } from "hooks";
import { useAppDispatch } from "store";
import { useEffect, useState } from "react";
import {
    getBannerListThunk,
    getMovieDetailThunk,
    getMovieListThunk,
} from "store/quanLyPhim";
import { Modal, ShowtimeModal, TicketButton } from "components";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Loading } from "components/ui/Loading";
import { useNavigate } from "react-router-dom";

export const HomeTemplate = () => {
    const { movieList, isFetchingMovieList, bannerList } = useAuth();
    const nowShowingList = movieList?.filter(
        (movie) => movie.dangChieu === true
    );
    const dispatch = useAppDispatch();
    const [modal, setModal] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getMovieListThunk());
        dispatch(getBannerListThunk());
    }, [dispatch]);

    // Trailer Popup
    const [visible, setVisible] = useState(null);
    const handleOpen = (index) => {
        setVisible(index);
    };
    const handleClose = () => {
        setVisible(null);
    };

    if (isFetchingMovieList) return <Loading />;

    return (
        <HomeContainer>
            <div>
                <div className="home-menu container py-4 border-b border-black hidden lg:block">
                    <ul className="py-4 border-black border-b">
                        <li>
                            <a className="home-menu-1"></a>
                        </li>
                        <li>
                            <a className="home-menu-2"></a>
                        </li>
                        <li>
                            <a className="home-menu-3"></a>
                        </li>
                        <li>
                            <a className="home-menu-4"></a>
                        </li>
                        <li>
                            <a className="home-menu-5"></a>
                        </li>
                        <li>
                            <a className="home-menu-6"></a>
                        </li>
                        <li>
                            <a className="home-menu-7"></a>
                        </li>
                    </ul>
                </div>
                <div className="home-carousel !mt-14">
                    <div className="mx-auto container">
                        <Swiper
                            cssMode={true}
                            navigation={true}
                            pagination={true}
                            keyboard={true}
                            autoplay={true}
                            modules={[
                                Navigation,
                                Pagination,
                                Keyboard,
                                Autoplay,
                            ]}
                            className="mySwiper"
                        >
                            {bannerList?.map((banner) => (
                                <SwiperSlide key={banner.maBanner}>
                                    <img src={banner.hinhAnh} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="home-selection !my-28 lg:mx-auto lg:w-[980px]">
                    <div className="selection-title text-center">
                        <img
                            src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/h3_movie_selection.gif"
                            alt=""
                            className="inline-block "
                        />
                    </div>
                    <div className="selection-content mx-auto container">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={5}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                            breakpoints={{
                                0: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                            }}
                        >
                            {nowShowingList?.map((movie, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <img src={movie.hinhAnh} />
                                        <div className="overlay hidden">
                                            <div
                                                className="play"
                                                onClick={() => {
                                                    handleOpen(index);
                                                }}
                                            ></div>
                                            <div className="title">
                                                <h2 className="uppercase">
                                                    {movie.tenPhim}
                                                </h2>
                                                <div className="title-content flex justify-evenly items-center mt-10">
                                                    <button
                                                        onClick={() => {
                                                            dispatch(
                                                                getMovieDetailThunk(
                                                                    movie.maPhim
                                                                )
                                                            );
                                                            navigate(
                                                                `/${movie.tenPhim}`
                                                            );
                                                        }}
                                                    >
                                                        XEM CHI TIẾT
                                                    </button>
                                                    <TicketButton
                                                        setModal={setModal}
                                                        maPhim={movie.maPhim}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <ShowtimeModal
                                            maPhim={movie.maPhim}
                                            modal={modal}
                                            setModal={setModal}
                                        />
                                        <Modal
                                            bodyStyle={{ height: 350 }}
                                            onCancel={handleClose}
                                            open={visible === index}
                                            width={700}
                                            footer={null}
                                            destroyOnClose={true}
                                            closeIcon={
                                                <CloseCircleOutlined className="!text-[var(--primary-color)] text-30" />
                                            }
                                        >
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={movie.trailer}
                                                allowFullScreen
                                            />
                                        </Modal>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
                <div className="home-event container mx-auto">
                    <div className="event-title text-center">
                        <img
                            src="https://www.cgv.vn/skin/frontend/cgv/default/images/h3_event.gif"
                            alt=""
                            className="inline-block"
                        />
                    </div>
                    <ul className="text-center mt-28">
                        <li>
                            <img src="https://www.cgv.vn/skin/frontend/cgv/default/images/ico_finger.png" />
                            <span>Thành viên CGV</span>
                        </li>
                        <li>|</li>
                        <li>
                            <span>Tin Mới & Ưu Đãi</span>
                        </li>
                    </ul>
                    <div className="event-content mt-28">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={5}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                            breakpoints={{
                                0: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                            }}
                        >
                            <SwiperSlide>
                                <img
                                    src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/4/240x201-uu.jpg"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/0/2023_happy_wed_75k_000_240x201.png"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/b/i/birthday_popcorn_box_240x201.png"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/u/2/u22_2023_special_cinemas_240x201_1.png"
                                    alt=""
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="home-services flex border-y-2 border-black container gap-5 !my-7 py-7 text-center mx-auto">
                    <div className="p-[3px] border-black border-2 h-[252px]">
                        <img
                            src="https://www.cgv.vn/media/wysiwyg/2023/214x245.jpg"
                            alt=""
                        />
                    </div>
                    <div className="p-[3px] border-black border-2">
                        <img
                            src="https://www.cgv.vn/media/wysiwyg/2023/062023/u22_072023_496x267.png"
                            alt=""
                        />
                    </div>
                    <div className="p-[3px] border-black border-2 h-[252px]">
                        <img
                            src="https://www.cgv.vn/media/wysiwyg/2023/thue-rap.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </HomeContainer>
    );
};

const HomeContainer = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    .home-menu {
        li {
            display: inline-block;
        }
        a {
            background: url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-header-transparent-home.png);
            height: 90px;
            width: 139px;
            display: inline-block;
            cursor: pointer;
            border-right: solid black 1px;
        }
        .home-menu-1 {
            background-position: 10px 0;
        }
        .home-menu-2 {
            background-position: -140px 0;
        }
        .home-menu-3 {
            background-position: -280px 0;
        }
        .home-menu-4 {
            background-position: -420px 0;
        }
        .home-menu-5 {
            background-position: -560px 0;
        }
        .home-menu-6 {
            background-position: -700px 0;
        }
        .home-menu-7 {
            background-position: -830px 0;
            border-right: none;
        }
    }
    .home-carousel {
        background: url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg_c_bricks.png);

        .swiper-slide {
            cursor: pointer;
        }

        .swiper-slide img {
            height: 551px;
        }
    }
    .home-selection {
        .selection-title {
            background: url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg_h3_line.jpg);
            background-repeat: repeat-x;
            background-position: center;
        }
        .selection-content {
            .swiper {
                width: 100%;
                height: 100%;
                margin: 20px auto;
            }

            .swiper-slide {
                text-align: center;
                font-size: 18px;
                background: #fff;

                /* Center slide text vertically */
                display: flex;
                justify-content: center;
                align-items: center;
                width: 240px;
                height: 355px;
                position: relative;
            }

            .swiper-slide:hover .overlay {
                display: block;
            }

            .swiper-slide img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .play {
                background: url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg-transparent-grey.png);
                height: 355px;
                width: 240px;
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                cursor: pointer;
                z-index: 10;
            }

            .title {
                background: url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg-black-transparent.png);
                position: absolute;
                bottom: 0;
                left: 0;
                z-index: 999;
                width: 100%;
                color: white;
                padding: 10px 0px;
                font-weight: bold;
                font-size: 15px;

                button {
                    display: flex;
                    padding: 7px 8px;
                    border-radius: 5px;
                    background: var(--primary-color);
                    font-size: 13px;
                }

                img {
                    width: 26px;
                    height: 20px;
                    margin-right: 2px;
                }
            }
        }
    }
    .home-event {
        .event-title {
            background: url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg_h3_line.jpg);
            background-repeat: repeat-x;
            background-position: center;
        }

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
    }

    .home-services {
        div {
            cursor: pointer;
            height: auto;
        }
        div:hover {
            opacity: 0.8;
        }
    }

    // Responsive

    @media screen and (max-width: 768px) {
        .home-selection {
            .selection-title {
                img {
                    width: 40%;
                }
            }
        }

        .home-event {
            .event-title {
                img {
                    width: 15%;
                }
            }
        }
    }

    @media screen and (max-width: 1024px) {
        .home-carousel {
            .swiper-slide {
                img {
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
`;
