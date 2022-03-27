interface IUpdateTimeProps {
    timeago: string
}
export default function UpdateTime({ timeago } : IUpdateTimeProps) {
    return (
        <p className="text-gray-160">
            { timeago }
        </p>
    )
}