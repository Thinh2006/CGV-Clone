import { CloseCircleOutlined } from "@ant-design/icons";
import { Modal } from "./antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "hooks";

type modalProps = {
    maPhim: number,
    modal: number,
    setModal: (value) => void,
}

export const ShowtimeModal = ({maPhim, modal, setModal}:modalProps) => {

    const { movieShowTime } = useAuth();
    const cgvShowTime =
        movieShowTime?.heThongRapChieu?.filter(
            (item) => item.maHeThongRap === "CGV"
        ) || [];
    const navigate = useNavigate();

    return (
        <Modal
            onCancel={() => setModal(null)}
            open={modal === maPhim}
            footer={false}
            closeIcon={
                <CloseCircleOutlined className="!text-[var(--primary-color)] text-30" />
            }
        >
            <div className="p-20 bg-[#fdfcf0] rounded-10">
                <h3 className="border-l-4 border-[var(--primary-color)] ps-6 font-bold ">
                    Lịch Chiếu
                </h3>
                <div className="border-t-2 border-[var(--primary-color)] my-6">
                    {cgvShowTime.length === 0 ? (
                        <span className="pt-8 inline-block text-red-400">
                            Rất tiếc, không có lịch chiếu cho phim này.
                        </span>
                    ) : (
                        cgvShowTime[0]?.cumRapChieu?.map((item) => (
                            <div className="my-28">
                                <h3 className="font-bold">{item.tenCumRap}</h3>
                                {item.lichChieuPhim.map((lichChieu) => (
                                    <a
                                        className="p-8 mr-10 border-gray-300 border-2 hover:border-red-300 mt-16 inline-block !text-black text-center"
                                        onClick={() =>
                                            navigate(
                                                `/booking/${lichChieu.maLichChieu}`
                                            )
                                        }
                                    >
                                        <p>
                                            {new Date(
                                                lichChieu.ngayChieuGioChieu
                                            ).toLocaleDateString()}
                                        </p>
                                        <p>
                                            {new Date(
                                                lichChieu.ngayChieuGioChieu
                                            ).toLocaleTimeString()}
                                        </p>
                                    </a>
                                ))}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </Modal>
    );
};
