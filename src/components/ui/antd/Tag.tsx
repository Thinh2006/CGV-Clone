import { Tag as TagA, TagProps as TagPropsA } from "antd";

type TagProps = TagPropsA & {
    // Tag
};

export const Tag = (props: TagProps) => {
    return <TagA {...props} />;
};
