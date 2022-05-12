import Content from "./components/Content";
import TagBox from "./components/TagBox";
import { DataTag } from "@AppTypes/tag";

interface IInfoProps {
    data_tags?: DataTag[],
    content?: string
}

export default function Info({ data_tags, content }: IInfoProps) {
    return (
        <div className="mx-[20px] mb-3">
            <TagBox data_tag={data_tags} />
            <Content
                content={content}
            />
        </div>
    )
}