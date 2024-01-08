import { PATH } from "constant"
import { NavLink, Outlet } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
    Navigation,
    Pagination,
    Mousewheel,
    Keyboard,
    Autoplay,
} from "swiper/modules";
import styled from "styled-components";

export const AuthLayout = () => {
  return (
    <AuthContainer>
        <div>
            <div className="flex container !my-28 mx-auto md:w-full w-[90%]">
                <div className="form md:w-[50%] w-full">
                    <div className="form-title bg-[var(--primary-color)] text-[#ddd] text-18 font-bold flex justify-evenly mb-5">
                        <div className="login">
                            <NavLink to={PATH.login}>ĐĂNG NHẬP</NavLink>
                        </div>
                        <div className="register">
                            <NavLink to={PATH.register}>ĐĂNG KÝ</NavLink>
                        </div>
                    </div>
                    <div className="form-content">
                        <Outlet/>
                    </div>
                </div>
                <div className="promotions w-[45%] ml-20 md:block hidden">
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        autoplay={true}
                        modules={[
                            Navigation,
                            Pagination,
                            Mousewheel,
                            Keyboard,
                            Autoplay,
                        ]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img
                                src="https://www.cgv.vn/media/wysiwyg/2020/1.jpg"
                                alt=""
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://www.cgv.vn/media/wysiwyg/2020/2.jpg"
                                alt=""
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://www.cgv.vn/media/wysiwyg/2020/3.jpg"
                                alt=""
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </AuthContainer>
  )
}

const AuthContainer = styled.div`
    .form{
        a{
            padding-top: 15px;
            padding-bottom: 15px;
            display: inline-block;
        }

        a.active{
            color: white;
            border-bottom: solid 3px; 
        }

    }
    .promotions {
        .swiper{
            .swiper-button-next:after, .swiper-button-prev:after{
                color: #cc977d;
                font-size: 18px;
                font-weight: bold;
            }
            .swiper-pagination-bullet{
                width: 15px;
                height: 15px;
            }
            .swiper-pagination-bullet-active{
                background-color: var(--primary-color);
            }
            .swiper-slide img{
                border: solid 1px #ccc;
            }
        }
    }

    /* Responsive */

    @media screen and (min-width: 768px) {
        .form {
            .form-title {
                font-size: 15px;
            }
        }
    }
`