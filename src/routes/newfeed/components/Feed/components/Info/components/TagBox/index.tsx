import Tag from "./Tag";
import Icons, { IconName } from "@components/Icons";
import { DataTag, TagType } from "@AppTypes/tag";

interface ITagBoxProps {
    data_tag?: DataTag[];
}

function renderTagType(tag: DataTag) {
    switch (tag.type) {
        case TagType.Position:
            return (<Tag iconName={IconName.Location1} value={tag.value} />)
        case TagType.Price:
            return (<Tag iconName={IconName.Coin} value={tag.value} />)
        case TagType.Deposit:
            return (<Tag iconName={IconName.Wallet} value={tag.value} />)
        default: 
            return (<span />)
    }
}

export default function TagBox({ data_tag }: ITagBoxProps) {
    return (
        <div className="flex mb-2">
            {data_tag?.map((tag: DataTag) => renderTagType(tag))}
        </div>
    )
}