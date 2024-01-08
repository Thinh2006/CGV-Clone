import { Modal as ModalA, ModalProps as ModalPropsA } from "antd";

type ModalProps = {
    (props: ModalPropsA) : JSX.Element
};

export const Modal: ModalProps = (props) => {
    return <ModalA {...props} />;
};
