import {
    Breadcrumb,
    Button,
    Card,
    ShowtimeModal,
    Skeleton,
    TicketButton,
} from "components";
import { PATH } from "constant";
import { useAuth } from "hooks";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "store";
import { getMovieDetailThunk, getMovieListThunk } from "store/quanLyPhim";

export const NowShowingTemplate = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { isFetchingMovieList, movieList } = useAuth();

    const [visibility, setVisibility] = useState(false);
    const [modal, setModal] = useState(null);

    const nowShowingList = movieList?.filter(
        (movie) => movie.dangChieu === true
    );

    useEffect(() => {
        dispatch(getMovieListThunk());
    }, [dispatch]);

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
            title: <span className="underline font-bold">Phim Đang Chiếu</span>,
        },
    ];

    if (isFetchingMovieList) {
        return (
            <div>
                <div className="bg-[#f1f0e5] border-b-[#cacac0] border-2">
                    <div className="container center pt-3">
                        <Breadcrumb items={breadCrumbMenu} separator=">" />
                    </div>
                </div>
                <div className="container !mt-28">
                    <div className="py-14 md:block hidden border-b-2 border-black">
                        <h1 className="text-[38px] mb-10">Phim Đang Chiếu</h1>
                        <a
                            className="text-20 text-[#666] flex justify-end cursor-pointer"
                            onClick={() => {
                                navigate(PATH.comingSoon);
                            }}
                        >
                            Phim Sắp Chiếu
                        </a>
                    </div>
                    <div className="grid md:grid-cols-4 grid-cols-3">
                        {[...Array(10)].map(() => {
                            return (
                                <Card className="!w-300 !mt-20 !mx-10">
                                    <Skeleton.Image className="!w-full !h-60" />
                                    <Skeleton.Input className="!w-full mt-4" />
                                    <Skeleton.Input className="!w-full mt-4" />
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="bg-[#f1f0e5] border-b-[#cacac0] border-2">
                <div className="container center pt-3">
                    <Breadcrumb items={breadCrumbMenu} separator=">" />
                </div>
            </div>
            <div className="!mt-28 container">
                <div className="py-14 md:block hidden border-b-2 border-black">
                    <h1 className="text-[38px] mb-10">Phim Đang Chiếu</h1>
                    <a
                        className="text-20 text-[#666] flex justify-end cursor-pointer"
                        onClick={() => {
                            navigate(PATH.comingSoon);
                        }}
                    >
                        Phim Sắp Chiếu
                    </a>
                </div>

                {/* NowShowing Mobile Menu */}
                <div className="flex bg-[#333] text-white justify-between px-6 md:hidden">
                    <h1 className="my-4 leading-10 text-30">PHIM ĐANG CHIẾU</h1>
                    <span
                        className="text-18 items-center my-auto cursor-pointer"
                        onClick={() => setVisibility(!visibility)}
                    >
                        +
                    </span>
                </div>
                {visibility && (
                    <div className="bg-[#333] text-white px-6 border-t-white border md:hidden">
                        <h1
                            className="leading-10 text-16 cursor-pointer hover:underline"
                            onClick={() => navigate(PATH.comingSoon)}
                        >
                            PHIM SẮP CHIẾU
                        </h1>
                    </div>
                )}

                {/* Movie List */}
                <div>
                    <div className="grid lg:grid-cols-4 grid-cols-3 md:gap-[30px] gap-10 md:border-b-2 border-black">
                        {nowShowingList?.map((movie) => {
                            return (
                                <Card
                                    key={movie.maPhim}
                                    hoverable
                                    cover={
                                        <img
                                            src={movie.hinhAnh}
                                            style={{
                                                height: 270,
                                                borderRadius: 7,
                                            }}
                                            onClick={() => {
                                                dispatch(
                                                    getMovieDetailThunk(
                                                        movie.maPhim
                                                    )
                                                );
                                                navigate(`/${movie.tenPhim}`);
                                            }}
                                        />
                                    }
                                    className="!my-20 !bg-transparent"
                                >
                                    <Card.Meta
                                        title={movie.tenPhim}
                                        description={movie.moTa.substring(
                                            0,
                                            70
                                        )}
                                        style={{ height: 140 }}
                                    />
                                    <div className="mt-5 md:flex items-center gap-4">
                                        <Button className="!bg-[#1877f2] !flex !text-white items-center gap-4 !p-0 !h-20 !text-12">
                                            <img
                                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/FEppCFCt76d.png"
                                                className="!text-black"
                                            />
                                            <span>Like</span>
                                            <span>271</span>
                                        </Button>
                                        <TicketButton
                                            maPhim={movie.maPhim}
                                            setModal={setModal}
                                        />
                                    </div>
                                    <ShowtimeModal
                                        maPhim={movie.maPhim}
                                        modal={modal}
                                        setModal={setModal}
                                    />
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
