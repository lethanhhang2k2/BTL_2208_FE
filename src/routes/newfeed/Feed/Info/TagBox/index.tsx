import Tag from "./Tag";
import Icons, { IconName } from "../../../../../components/Icons";

interface ITagBoxProps {
    position?: string,
    price?: string,
    deposit?: string
}

export default function TagBox({
    position,
    price,
    deposit
}: ITagBoxProps) {
    return (
        <div className="flex mb-4">
            <Tag>
                <Icons iconName={IconName.Location1} color="white" />
                <p>{position}</p>
            </Tag>
            <Tag>
                <Icons iconName={IconName.Coin} color="white" />
                <p>{price}</p>
            </Tag>
            <Tag>
                <Icons iconName={IconName.Wallet} color="white" />
                <p>{deposit}</p>
            </Tag>
        </div>
    )
}