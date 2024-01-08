import { useAppDispatch } from "store";
import { Button } from ".";
import { getMovieShowTimeThunk } from "store/quanLyRap";

type buttonProps = {
    setModal: (value) => void;
    maPhim: number;
};

export const TicketButton = ({ setModal, maPhim }: buttonProps) => {
    const dispatch = useAppDispatch();

    return (
        <Button
            className="!flex !px-0 items-center !bg-[var(--primary-color)] !text-white !font-bold !mt-2"
            onClick={() => {
                dispatch(getMovieShowTimeThunk(maPhim));
                setModal(maPhim);
            }}
        >
            <img
                src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cate-booking.png"
                alt=""
            />
            <span>Mua vé</span>
        </Button>
    );
};
