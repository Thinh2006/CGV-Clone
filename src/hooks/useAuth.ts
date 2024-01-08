import { useSelector } from "react-redux";
import { RootState } from "store";

export const useAuth = () => {
    const { isFetching, accessToken, userLogin, userByToken } = useSelector(
        (state: RootState) => state.quanLyNguoiDung
    );

    const { movieList, isFetchingMovieList, bannerList, movieDetail, isFetchingMovieDetail } = useSelector(
        (state: RootState) => state.quanLyPhim
    );

    const { cinemaComplexList, movieShowTime } = useSelector(
        (state: RootState) => state.quanLyRap
    );

    const { bookingInfo, isBookingFetching, checkedList } = useSelector(
        (state: RootState) => state.quanLyDatVe
    );

    return {
        isFetching,
        accessToken,
        user: userLogin,
        userByToken,
        movieList,
        isFetchingMovieList,
        bannerList,
        cinemaComplexList,
        movieShowTime,
        bookingInfo,
        isBookingFetching,
        checkedList,
        movieDetail,
        isFetchingMovieDetail,
    };
};
