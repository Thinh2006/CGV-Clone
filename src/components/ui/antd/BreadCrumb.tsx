import {
    Breadcrumb as BreadcrumbA,
    BreadcrumbProps as BreadcrumbPropsA,
} from "antd";

type BreadcrumbProps = BreadcrumbPropsA & {
    //Breadcrumb
};

export const Breadcrumb = (props: BreadcrumbProps) => {
    return <BreadcrumbA {...props} />;
};
