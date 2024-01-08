import { MenuOutlined } from "@ant-design/icons";
import { PATH } from "constant";
import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { quanLyNguoiDungActions } from "store/quanLyNguoiDung";
import { styled } from "styled-components";
import { Menu } from ".";
import { quanLyDatVeActions } from "store/quanLyDatVe";

export const Header = () => {
    const navigate = useNavigate();
    const { accessToken, user } = useAuth();
    const dispatch = useDispatch();

    const hambugerMenu = [
        {
            key: "menu",
            label: "Menu",
            icon: <MenuOutlined />,
            children: [
                {
                    key: "phim",
                    label: "PHIM",
                    children: [
                        {
                            key: PATH.nowShowing,
                            label: "Phim Đang Chiếu",
                        },
                        {
                            key: PATH.comingSoon,
                            label: "Phim sắp chiếu",
                        },
                    ],
                },
                {
                    key: "rapcgv",
                    label: "RẠP CGV",
                    children: [
                        {
                            key: PATH.cinemas,
                            label: "Tất Cả Các Rạp",
                        },
                        {
                            key: PATH.notFound,
                            label: "Rạp Đặc Biệt",
                        },
                        {
                            key: PATH.notFound,
                            label: "Rạp 3D",
                        },
                    ],
                },
                {
                    key: "thanhvien",
                    label: "THÀNH VIÊN",
                    children: [
                        accessToken
                            ? null
                            : {
                                  key: PATH.login,
                                  label: "Tài Khoản CGV",
                              },
                        {
                            key: PATH.notFound,
                            label: "Quyền Lợi",
                        },
                    ],
                },
                {
                    key: PATH.notFound,
                    label: "CULTUREPLEX",
                },
            ],
        },
        {
            key: "ticket",
            icon: (
                <img
                    src="https://cgv-booking-demo.vercel.app/image/icon_ticket25.png"
                    alt=""
                />
            ),
        },
    ];

    return (
        <HeaderContainer>
            <div>
                <div className="menu-top justify-end gap-28 max-w-screen-lg !mt-3 container flex">
                    <div className="top-content hidden sm:flex gap-28">
                        <div className="flex gap-2 items-center cursor-pointer">
                            <img
                                src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/icon_promotion25.png"
                                alt=""
                            />
                            <a onClick={() => navigate(PATH.notFound)}>
                                TIN MỚI VÀ ƯU ĐÃI
                            </a>
                        </div>
                        <div className="flex gap-2 items-center cursor-pointer">
                            <img
                                src="https://cgv-booking-demo.vercel.app/image/icon_ticket25.png"
                                alt=""
                            />
                            <a
                                onClick={() => {
                                    if (accessToken) {
                                        navigate(PATH.accountInfo);
                                    } else {
                                        navigate(PATH.login);
                                    }
                                }}
                            >
                                VÉ CỦA TÔI
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img
                            src="https://cgv-booking-demo.vercel.app/image/icon_login25.png"
                            alt=""
                        />
                        {!accessToken ? (
                            <a
                                onClick={() => navigate(PATH.login)}
                                className="cursor-pointer"
                            >
                                ĐĂNG NHẬP/ ĐĂNG KÝ
                            </a>
                        ) : (
                            <span>
                                <a
                                    onClick={() => {
                                        navigate(PATH.accountInfo);
                                    }}
                                    className="cursor-pointer"
                                >
                                    {`XIN CHÀO, ${user?.hoTen?.toUpperCase()}! `}
                                </a>
                                <a
                                    onClick={() => {
                                        navigate("/");
                                        dispatch(
                                            quanLyNguoiDungActions.logOut()
                                        );
                                        dispatch(
                                            quanLyDatVeActions.resetChecking()
                                        );
                                    }}
                                    className="cursor-pointer hover:underline"
                                >
                                    THOÁT
                                </a>
                            </span>
                        )}
                    </div>
                    <div className="flex items-center">
                        <div className="vietnamese">VN</div>
                        <div className="english">EN</div>
                    </div>
                </div>
                <div className="header-menu">
                    <div className="container h-full flex justify-center">
                        <a
                            onClick={() => {
                                navigate("/");
                                dispatch(quanLyDatVeActions.resetChecking());
                            }}
                            className="logo h-full flex items-center cursor-pointer"
                        >
                            <img
                                src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png"
                                alt=""
                            />
                        </a>
                        <div className="hidden md:flex">
                            <div className="menu-list">
                                <ul>
                                    <li className="movie-list">
                                        PHIM
                                        <div className="dropdown">
                                            <a
                                                onClick={() =>
                                                    navigate(PATH.nowShowing)
                                                }
                                            >
                                                Phim Đang Chiếu
                                            </a>
                                            <a
                                                onClick={() =>
                                                    navigate(PATH.comingSoon)
                                                }
                                            >
                                                Phim Sắp Chiếu
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        RẠP CV
                                        <div className="dropdown">
                                            <a
                                                onClick={() =>
                                                    navigate(PATH.cinemas)
                                                }
                                            >
                                                Tất Cả Các Rạp
                                            </a>
                                            <a href="#">Rạp Đặc Biệt</a>
                                            <a href="#">Rạp 3D</a>
                                        </div>
                                    </li>
                                    <li>
                                        THÀNH VIÊN
                                        <div className="dropdown">
                                            <a
                                                onClick={() => {
                                                    if (accessToken) {
                                                        navigate(
                                                            PATH.accountInfo
                                                        );
                                                    } else {
                                                        navigate(PATH.login);
                                                    }
                                                }}
                                            >
                                                Tài Khoản CGV
                                            </a>
                                            <a href="#">Quyền Lợi</a>
                                        </div>
                                    </li>
                                    <li>
                                        CULTUREPLEX
                                        <div className="dropdown">
                                            <a href="#">Quầy Online</a>
                                            <a href="#">Thuê Rạp & Vé Nhóm</a>
                                            <a href="#">E-CGV</a>
                                            <a href="#">CGV EGift</a>
                                            <a href="#">CGV Rules</a>
                                        </div>
                                    </li>
                                    <li>
                                        TUYỂN DỤNG
                                        <img
                                            src="https://www.cgv.vn/skin//frontend/cgv/default/images/hot-jobs.png"
                                            alt=""
                                        />
                                        <div className="dropdown">
                                            <a href="#">Tuyển Dụng</a>
                                            <a href="#">Khối Văn Phòng</a>
                                            <a href="#">Khối Cụm Rạp</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-kenhcine flex items-end h-[80px]">
                                <a href="#">
                                    <img
                                        src="https://www.cgv.vn/media/wysiwyg/2019/AUG/kenhcine.gif"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="menu-ticket cursor-pointer">
                                <a onClick={() => navigate(PATH.nowShowing)}>
                                    <img
                                        src="https://www.cgv.vn/media/wysiwyg/news-offers/mua-ve_ngay.png"
                                        alt=""
                                        className="mt-14"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="hamburger-menu md:hidden">
                    <Menu
                        items={hambugerMenu}
                        mode="horizontal"
                        className="w-full"
                        onClick={({ key }) => navigate(key)}
                    />
                </div>
            </div>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    .vietnamese {
        background-color: var(--primary-color);
        padding: 2px 10px;
        border-radius: 5px 0px 0px 5px;
        color: white;
        cursor: pointer;
    }
    .english {
        background-color: var(--secondary-color);
        padding: 2px 10px;
        border-radius: 0px 5px 5px 0px;
        color: white;
    }

    .header-menu {
        background: url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-top.png);
        width: 100%;
        height: 135px;
        margin-top: 12px;
        background-size: contain;

        .logo:hover {
            opacity: 0.8;
        }
    }

    .menu-list {
        align-items: end;
        display: flex;
        height: 75%;
        margin-left: 20px;

        li {
            display: inline-block;
            margin-left: 30px;
            font-weight: bold;
            position: relative;
            cursor: pointer;
            transition: all 0.3s ease-out;

            img {
                display: inline-block;
            }

            .dropdown {
                display: none;
                position: absolute;
                background: url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg_menu_hover.png);
                min-width: 220px;
                z-index: 999;
                padding: 3px;
                border: solid #828282 4px;
            }

            &:hover .dropdown {
                display: block;
            }

            a {
                color: white;
                padding: 12px 16px;
                text-decoration: none;
                display: block;
            }

            a:hover {
                color: var(--primary-color);
            }
        }
    }

    //Responsive
    @media screen and (max-width: 768px) {
        .menu-top {
            gap: 0px;

            a {
                font-size: 12px;
                gap: 20px;
            }
        }

        .hamburger-menu {
            ul {
                background-color: var(--bg-color);
            }

            li {
                width: 50%;
                text-align: center;
                color: var(--secondary-color);

                .ant-menu-submenu-title {
                    display: flex;
                    justify-content: center;
                }

                svg {
                    width: 30px;
                    height: 30px;
                }
            }
        }
    }
`;
