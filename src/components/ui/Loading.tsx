import { Skeleton } from "antd";

export const Loading = () => {
    return (
        <div className="container !my-28">
            {[...Array(3)].map((_, index) => (
                <Skeleton key={index} />
            ))}
        </div>
    );
};
