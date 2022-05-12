export enum Size { Small = "14px", Medium = "" };

interface IUpdateTimeProps {
    time_ago: string,
    size?: Size
}
export default function UpdateTime({ time_ago, size = Size.Medium }: IUpdateTimeProps) {
    return (
        <p className={`text-gray-160 text-[${size}]`}>
            {time_ago}
        </p>
    )
}