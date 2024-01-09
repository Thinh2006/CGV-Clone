import styled from "styled-components";

export const Footer = () => {
    return (
        <FooterContainer>
            <div>
                <div className="hidden sm:block">
                    <div className="footer-top border-y-2 border-black py-1">
                        <div className="container">
                            <ul>
                                <li>
                                    <a className="dx">4DX</a>
                                </li>
                                <li>
                                    <a className="imax">Imax</a>
                                </li>
                                <li>
                                    <a className="starium">Starium</a>
                                </li>
                                <li>
                                    <a className="gold-class">Goldclass</a>
                                </li>
                                <li>
                                    <a className="lamour">L'amour</a>
                                </li>
                                <li>
                                    <a className="sweet">Sweetbox</a>
                                </li>
                                <li>
                                    <a className="dolby-atmos">Dolby Atmos</a>
                                </li>
                                <li>
                                    <a className="premium-cinema">
                                        Premium Cinema
                                    </a>
                                </li>
                                <li>
                                    <a className="screenx">Screenx</a>
                                </li>
                                <li>
                                    <a className="cine-foret">
                                        Cine &amp; Foret
                                    </a>
                                </li>
                                <li>
                                    <a className="cine-livingroom">
                                        Cine &amp; Living Room
                                    </a>
                                </li>
                                <li>
                                    <a className="cine-suite">Cine Suite</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-mid flex container py-5">
                        <div className="footer-introduction mr-28">
                            <h3>CGV Việt Nam</h3>
                            <ul>
                                <li>Giới Thiệu</li>
                                <li>Tiện Ích Online</li>
                                <li>Thẻ Quà Tặng</li>
                                <li>Tuyển Dụng</li>
                                <li>Liện Hệ Quảng Cáo CGV</li>
                                <li>Dành Cho Đối Tác</li>
                            </ul>
                        </div>
                        <div className="footer-regulation mr-28">
                            <h3>Điều khoản sử dụng</h3>
                            <ul>
                                <li>Điều Khoản Chung</li>
                                <li>Điều Khoản Giao Dịch</li>
                                <li>Chính Sách Thanh Toán</li>
                                <li>Chính Sách Bảo Mật</li>
                                <li>Câu Hỏi Thường Gặp</li>
                            </ul>
                        </div>
                        <div className="footer-contact mr-28">
                            <h3>Kết nối với chúng tôi</h3>
                            <div className="contact-logo flex">
                                <a
                                    href="https://www.facebook.com/cgvcinemavietnam"
                                    target="_blank"
                                >
                                    <img
                                        src="/images/logo-facebookpng-32204.png"
                                        alt=""
                                        className="h-[35px]"
                                    />
                                </a>
                                <a
                                    href="https://www.youtube.com/cgvvietnam"
                                    target="_blank"
                                >
                                    <img
                                        src="/images/youtube-logo-png-2082.png"
                                        alt=""
                                        className="h-[37px]"
                                    />
                                </a>
                                <a
                                    href="http://instagram.com/cgvcinemasvietnam"
                                    target="_blank"
                                >
                                    <img
                                        src="/images/logo-instagram-2441.png"
                                        alt=""
                                        className="h-[37px]"
                                    />
                                </a>
                                <a
                                    href="http://zalo.me/1884424922722396289"
                                    target="_blank"
                                >
                                    <img
                                        src="/images/zalo_logo.png"
                                        alt=""
                                        className="h-[37px]"
                                    />
                                </a>
                            </div>
                            <a
                                href="http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=30278"
                                target="_blank"
                            >
                                <img
                                    src="https://www.cgv.vn/skin/frontend/cgv/default/images/cong-thuong.PNG"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="cgv-customer">
                            <h3>Chăm sóc khách hàng</h3>
                            <ul>
                                <li>Hotline: 1900 6017</li>
                                <li>
                                    Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày
                                    bao gồm cả lễ tết)
                                </li>
                                <li>Email hỗ trợ: hoidap@cgv.vn</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom border-t-2 border-black py-3">
                        <div className="container flex">
                            <div className="cjcgv-logo">
                                <img
                                    src="/images/CI_logo_press_20220328_cgv_W-removebg-preview.png"
                                    alt=""
                                    className="w-[150px] h-[150px]"
                                />
                            </div>
                            <div className="cgv-address">
                                <h3>CÔNG TY TNHH CJ CGV VIỆT NAM</h3>
                                <p>
                                    Giấy Chứng nhận đăng ký doanh nghiệp:
                                    0303675393 đăng ký lần đầu ngày 31/7/2008,
                                    được cấp bởi Sở Kế hoạch và Đầu tư Thành phố
                                    Hồ Chí Minh
                                    <br />
                                    Địa chỉ: Lầu 2, số 7/28, Đường Thành Thái,
                                    Phường 14, Quận 10, Thành phố Hồ Chí Minh,
                                    Việt Nam
                                    <br />
                                    Đường dây nóng (Hotline): 1900 6017
                                    <br />
                                    COPYRIGHT 2017 CJ CGV VIETNAM CO., LTD. ALL
                                    RIGHTS RESERVED
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile footer */}
                <div
                    className="mobile-footer sm:hidden text-[#636363]"
                >
                    <ul className="mobile-top">
                        <li>Giới Thiệu</li>
                        <li>Tiện Ích Online</li>
                        <li>Thẻ Quà Tặng</li>
                        <li>Tuyển Dụng</li>
                        <li>Liện Hệ Quảng Cáo CGV</li>
                        <li>Dành Cho Đối Tác</li>
                        <li>Điều Khoản Chung</li>
                        <li>Điều Khoản Giao Dịch</li>
                        <li>Chính Sách Thanh Toán</li>
                        <li>Chính Sách Bảo Mật</li>
                        <li>Câu Hỏi Thường Gặp</li>
                    </ul>
                    <div className="mt-5">
                        <div className="contact-logo flex justify-center">
                            <a
                                href="https://www.facebook.com/cgvcinemavietnam"
                                target="_blank"
                            >
                                <img
                                    src="/images/logo-facebookpng-32204.png"
                                    alt=""
                                    className="h-[35px]"
                                />
                            </a>
                            <a
                                href="https://www.youtube.com/cgvvietnam"
                                target="_blank"
                            >
                                <img
                                    src="/images/youtube-logo-png-2082.png"
                                    alt=""
                                    className="h-[37px]"
                                />
                            </a>
                            <a
                                href="http://instagram.com/cgvcinemasvietnam"
                                target="_blank"
                            >
                                <img
                                    src="/images/logo-instagram-2441.png"
                                    alt=""
                                    className="h-[37px]"
                                />
                            </a>
                            <a
                                href="http://zalo.me/1884424922722396289"
                                target="_blank"
                            >
                                <img
                                    src="/images/zalo_logo.png"
                                    alt=""
                                    className="h-[37px]"
                                />
                            </a>
                        </div>
                        <a
                            className="flex justify-center"
                            href="http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=30278"
                            target="_blank"
                        >
                            <img
                                src="https://www.cgv.vn/skin/frontend/cgv/default/images/cong-thuong.PNG"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="text-center bg-[#e7e2e2] mt-5">
                        <h3>Chăm sóc khách hàng</h3>
                        <ul className="mobile-customer">
                            <li>Hotline: 1900 6017</li>
                            <li>
                                Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao
                                gồm cả lễ tết)
                            </li>
                            <li>Email hỗ trợ: hoidap@cgv.vn</li>
                        </ul>
                    </div>
                    <div className="text-center mb-5">
                        <div className="flex justify-center">
                            <img
                                src="/images/CI_logo_press_20220328_cgv_W-removebg-preview.png"
                                alt=""
                                className="w-[150px] h-[120px]"
                            />
                        </div>
                        <div className="leading-snug">
                            <h3>CÔNG TY TNHH CJ CGV VIỆT NAM</h3>
                            <p>
                                Giấy Chứng nhận đăng ký doanh nghiệp: 0303675393
                                đăng ký lần đầu ngày 31/7/2008, được cấp bởi Sở
                                Kế hoạch và Đầu tư Thành phố Hồ Chí Minh
                                <br />
                                Địa chỉ: Lầu 2, số 7/28, Đường Thành Thái,
                                Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt
                                Nam
                                <br />
                                Đường dây nóng (Hotline): 1900 6017
                                <br />
                                COPYRIGHT 2017 CJ CGV VIETNAM CO., LTD. ALL
                                RIGHTS RESERVED
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </FooterContainer>
    );
};

const FooterContainer = styled.div`
    margin-top: 20px;
    background: url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-bottom-footer.jpg);
    background-position: bottom;
    background-repeat: repeat-x;
    padding-bottom: 120px;

    h3 {
        font-weight: bold;
        color: #636363;
        margin-bottom: 10px;
    }
    .footer-top {
        ul {
            list-style: none;
        }
        li {
            display: inline-block;

            a {
                background: url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/brand-type-film-footer_ver2.png);
                background-size: cover;
                height: 28px;
                display: inline-block;
                text-indent: -9999px;
                cursor: pointer;
                background-repeat: no-repeat;
                white-space: nowrap;
            }

            .dx {
                width: 45px;
                background-position: -391px 5px;
            }
            .imax {
                width: 77px;
                background-position: -160px 5px;
            }
            .starium {
                width: 57px;
                background-position: -236px 5px;
            }
            .gold-class {
                width: 105px;
                background-position: -292px 5px;
            }
            .lamour {
                width: 83px;
                background-position: -82px 5px;
            }
            .sweet {
                width: 86px;
                background-position: 2px 3px;
            }
            .dolby-atmos {
                width: 40px;
                background-position: -572px 3px;
            }
            .premium-cinema {
                width: 115px;
                background-position: -435px 2px;
            }
            .screenx {
                width: 74px;
                background-position: -604px 2px;
            }
            .cine-foret {
                width: 113px;
                background-position: -675px 3px;
            }
            .cine-livingroom {
                width: 110px;
                background-position: -785px 3px;
            }
            .cine-suite {
                width: 73px;
                background-position: -891px 2px;
            }
        }
    }
    .footer-mid {
        ul {
            line-height: 25px;
        }

        .footer-introduction,
        .footer-regulation,
        .footer-contact {
            width: 22%;
            li {
                cursor: pointer;
            }
        }
    }

    .footer-bottom {
        line-height: 20px;
    }

    /* Responsive */
    @media screen and (max-width: 640px){
        background: none;
        padding: 0;
    }

    /* Mobile footer */
    .mobile-footer {
        .mobile-top {
            li {
                border-bottom: 1px solid #e1e1e1;
                padding: 8px 0px;
                font-size: 14px;
                cursor: pointer;
            }
        }
        .mobile-customer {
            li {
                padding: 2px 0px;
            }
        }
    }
`;
