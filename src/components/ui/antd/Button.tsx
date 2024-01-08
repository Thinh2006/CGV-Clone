import { Button as ButtonA, ButtonProps as ButtonPropsA } from "antd";

type ButtonProps = ButtonPropsA & {
  // Define your own props
};

export const Button = (props: ButtonProps) => {
    return <ButtonA {...props} />;
};
