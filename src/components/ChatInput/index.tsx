import Icons from "@components/Icons";
import React, { useState } from "react";

interface IChatInput {
    handleSendMsg: (msg: string) => void
}

export default function ChatInput({ handleSendMsg }: IChatInput) {
    const [value, setValue] = useState("")

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter") {
            setValue("")
            handleSendMsg(value)
        }   
    }

    return (
        <div className="px-2 border-2 border-gray-150 border-solid rounded-full w-full">
            <input
                value={value}
                type="text"
                placeholder="Lời nhắn..."
                className="outline-none bg-transparent p-2 w-full"
                onKeyDown={handleKeyDown}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}