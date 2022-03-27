import Content from "./Content";
import TagBox from "./TagBox";

interface IInfoProps {
    position: string,
    price: string,
    deposit: string,
    content: string
}

export default function Info({ position, price, deposit, content } : IInfoProps) {
    return (
        <div className="mx-[40px]">
            <TagBox
                position={position}
                price={price}
                deposit={deposit}
            />
            <Content
                content={content}
            />
        </div>
    )
}