import { RouteObject } from "react-router-dom";
import { AuthLayout, MainLayout } from "components";
import {
    Account,
    AccountDetail,
    AccountInfo,
    Home,
    Login,
    Register,
    PaymentPassword,
    NotFound,
    NowShowing,
    ComingSoon,
    Cinemas,
    Booking,
    Payment,
    MovieDetail,
} from "pages";
import { PATH } from "constant";
import { TransactionHistory } from "pages";

export const router: RouteObject[] = [
    {
        element: <MainLayout />,
        path: "/",
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                element: <Account />,
                children: [
                    {
                        index: true,
                        element: <AccountInfo />,
                        path: PATH.accountInfo,
                    },
                    {
                        element: <AccountDetail />,
                        path: PATH.accountDetail,
                    },
                    {
                        element: <PaymentPassword />,
                        path: PATH.paymentPassword,
                    },
                    {
                        element: <NotFound />,
                        path: PATH.memberCard,
                    },
                    {
                        element: <NotFound />,
                        path: PATH.prizePoint,
                    },
                    {
                        element: <NotFound />,
                        path: PATH.giftCard,
                    },
                    {
                        element: <NotFound />,
                        path: PATH.voucher,
                    },
                    {
                        element: <NotFound />,
                        path: PATH.coupon,
                    },
                    {
                        element: <TransactionHistory />,
                        path: PATH.transactionHistory,
                    },
                ],
            },
            {
                element: <NowShowing />,
                path: PATH.nowShowing,
            },
            {
                element: <ComingSoon />,
                path: PATH.comingSoon,
            },
            {
                element: <MovieDetail />,
                path: PATH.movieDetail
            },
            {
                element: <Booking />,
                path: PATH.booking,
            },
            {
                element: <Payment />,
                path: PATH.payment,
            },
            {
                element: <Cinemas />,
                path: PATH.cinemas,
            },
            {
                element: <NotFound />,
                path: PATH.notFound,
            },
            {
                element: <AuthLayout />,
                children: [
                    {
                        element: <Login />,
                        path: PATH.login,
                    },
                    {
                        element: <Register />,
                        path: PATH.register,
                    },
                ],
            },
        ],
    },
];
