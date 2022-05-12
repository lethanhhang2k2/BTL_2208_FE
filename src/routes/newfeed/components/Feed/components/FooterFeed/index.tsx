import UpdateTime from "@components/UpdateTime";
import ActionFooterFeed from "./ActionFooterFeed";

interface IFooterFeedProps {
    time_ago: string
}

export default function FooterFeed({ time_ago }: IFooterFeedProps) {
    return (
        <div className="px-[20px] flex justify-between border-t-2 border-gray-100 pt-2">
            <ActionFooterFeed />
            <UpdateTime time_ago={time_ago} />
        </div>
    )
}