import { ReactNode } from "react";

export default function Content({ content }: { content: ReactNode }) {
    return (
        <div>
            {content}
        </div>
    )
}