import UpdateTime from "@components/UpdateTime";
import ActionFooterFeed from "./ActionFooterFeed";

interface IFooterFeedProps {
    timeago: string
}

export default function FooterFeed({ timeago }: IFooterFeedProps) {
    return (
        <div className="mx-[40px] flex justify-between">
            <ActionFooterFeed />
            <UpdateTime timeago={timeago} />
        </div>
    )
}