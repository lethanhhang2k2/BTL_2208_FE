import UpdateTime from "@components/UpdateTime";
import ActionFooterFeed from "./ActionFooterFeed";

interface IFooterFeedProps {
    createAt: Date
}

export default function FooterFeed({ createAt }: IFooterFeedProps) {
    return (
        <div className="px-[20px] flex justify-between border-t-2 border-gray-100 pt-2">
            <ActionFooterFeed />
            <UpdateTime createAt={createAt} />
        </div>
    )
}