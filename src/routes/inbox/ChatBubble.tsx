interface IChatBubble {
    content: string
}

export default function ChatBubble({ content }: IChatBubble) {
    return (
        <div className={`border-2 border-gray-150 border-solid p-2 w-fit max-w-[240px] break-words mx-2" ${content.length > 40 ? "rounded-[20px]" : "rounded-full"}`}>
            {content}
        </div>
    )
}