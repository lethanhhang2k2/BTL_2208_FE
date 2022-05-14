import { AvatarSize, UserProperty } from "@AppTypes/user";
import Avatar from "@components/Avatar";
import ChatBubble from "./ChatBubble";

interface IOtherBubble {
    other: UserProperty,
    content: string
}

export default function OtherBubble({ other, content }: IOtherBubble) {
    return (
        <div className="flex items-end justify-start py-1 relative">
            <Avatar user={other} size={AvatarSize.SSmall} />
            <ChatBubble content={content} />
        </div>
    )
}