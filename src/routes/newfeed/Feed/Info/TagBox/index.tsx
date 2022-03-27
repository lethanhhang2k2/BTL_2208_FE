import Tag from "./Tag";
import * as SWMIconPack from "react-swm-icon-pack";

interface ITagBoxProps {
    position: string,
    price: string,
    deposit: string
}

export default function TagBox({
    position,
    price,
    deposit
} : ITagBoxProps) {
    return (
        <div className="flex mb-4">
            <Tag>
                <SWMIconPack.Location1 color="white" />
                <p>{ position }</p>
            </Tag>
            <Tag>
                <SWMIconPack.Coin color="white" />
                <p>{ price }</p>
            </Tag>
            <Tag>
                <SWMIconPack.Wallet color="white" />
                <p>{ deposit }</p>
            </Tag>
        </div>
    )
}