import { CaretRightOutlined } from "@ant-design/icons";
import { Menu } from "components";
import { PATH } from "constant";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

export const AccountLayout = () => {
    const navigate = useNavigate();
    const items = [
        {
            label: <p className="text-[var(--primary-color)]">TÀI KHOẢN CGV</p>,
            key: "1",
            icon: (
                <CaretRightOutlined className="!text-[var(--primary-color)]" />
            ),
            children: [
                {
                    label: "THÔNG TIN CHUNG",
                    key: PATH.accountInfo,
                },
                {
                    label: "CHI TIẾT TÀI KHOẢN",
                    key: PATH.accountDetail,
                },
                {
                    label: "CÀI MẬT MÃ THANH TOÁN",
                    key: PATH.paymentPassword,
                },
                {
                    label: "THẺ THÀNH VIÊN",
                    key: PATH.notFound,
                },
                {
                    label: "ĐIỂM THƯỞNG",
                    key: PATH.notFound,
                },
                {
                    label: "THẺ QUÀ TẶNG",
                    key: PATH.notFound,
                },
                {
                    label: "VOUCHER",
                    key: PATH.notFound,
                },
                {
                    label: "COUPON",
                    key: PATH.notFound,
                },
                {
                    label: "LỊCH SỬ GIAO DỊCH",
                    key: PATH.notFound,
                },
            ],
        },
    ];

    return (
        <AccountContainer>
            <div>
                <div className="flex container mx-auto">
                    <div className="menu w-1/4 hidden md:block">
                        <h2 className="text-[var(--primary-color)] text-xl font-bold my-6">
                            TÀI KHOẢN CGV
                        </h2>
                        <ul>
                            <li>
                                <NavLink to={PATH.accountInfo}>
                                    THÔNG TIN CHUNG
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={PATH.accountDetail}>
                                    CHI TIẾT TÀI KHOẢN
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={PATH.paymentPassword}>
                                    CÀI MẬT MÃ THANH TOÁN
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={PATH.memberCard}>
                                    THẺ THÀNH VIÊN
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={PATH.prizePoint}>
                                    ĐIỂM THƯỞNG
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={PATH.giftCard}>
                                    THẺ QUÀ TẶNG
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={PATH.voucher}>VOUCHER</NavLink>
                            </li>
                            <li>
                                <NavLink to={PATH.coupon}>COUPON</NavLink>
                            </li>
                            <li>
                                <NavLink to={PATH.transactionHistory}>
                                    LỊCH SỬ GIAO DỊCH
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="content md:w-3/4 md:ml-20 mt-6 w-screen">
                        {/* Mobile menu */}
                        <Menu
                            mode="inline"
                            items={items}
                            className="!bg-transparent !text-12 md:hidden"
                            onClick={({ key }) => navigate(key)}
                        />

                        <Outlet />
                    </div>
                </div>
            </div>
        </AccountContainer>
    );
};

const AccountContainer = styled.div`
    .menu {
        li {
            background: url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/ribon_left-ccc.png)
                no-repeat;
            background-color: #ccc;
            color: #666;
            margin-top: 5px;
            padding: 7px 0px;
            padding-left: 18px;
            width: 100%;

            a {
                margin-left: 5px;
                font-weight: bold;
                font-size: 12px;

                &.active {
                    color: white;
                }
            }
        }

        li:has(.active) {
            background: url(https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/ribon_left.png)
                no-repeat;
            background-color: var(--primary-color);
            color: black;
        }
    }

    /* Responsive */

    @media screen and (min-width: 768px) {
        margin-top: 20px !important;
    }
`;
