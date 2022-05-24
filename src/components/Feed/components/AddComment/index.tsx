import { CommentExample, CommentProperty } from "@AppTypes/comment"
import { useState } from "react"

interface IProps {
    handleAddComment: (c: string) => void,
}

export default function AddComment({ handleAddComment }: IProps) {
    const [value, setValue] = useState<string>("")

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter") {
            setValue("")
            handleAddComment(value)
        }   
    }
    
    return (
        <div className="m-2 mt-0">
            <div className="bg-gray-100 rounded-lg">
                <input
                    type="text"
                    className="w-full py-2 px-3 bg-transparent outline-none"
                    placeholder="Add a comment..."
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
            </div>
        </div>
    )
}