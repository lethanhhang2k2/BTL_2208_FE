import { useState, useEffect } from "react"

export enum Size { Small = "14px", Medium = "" };

interface IUpdateTimeProps {
    createAt: Date,
    size?: Size
}

export default function UpdateTime({ createAt, size = Size.Medium }: IUpdateTimeProps) {
    const calcTimeAgo = (start: Date): string => {
        const t = Date.now() - start.getTime()
        const seconds = Math.floor(t / 1000)
        const minutes = Math.floor(seconds / 60)
        const hours = Math.floor(minutes / 60)
        const days = Math.floor(hours / 24)
        const months = Math.floor(days / 30)
        const years = Math.floor(months / 12)
        if (minutes < 60) {
            return `${minutes} phút trước`
        } else if (hours < 24) {
            return `${hours} giờ trước`
        } else if (days < 30) {
            return `${days} ngày trước`
        } else if (months < 12) {
            return `${months} tháng trước`
        } else {
            return `${years} năm trước`
        }
    }
    const [timeAgo, setAgo] = useState<string>(calcTimeAgo(createAt));

    useEffect(() => {
        const interval = setInterval(() => {
            setAgo(calcTimeAgo(new Date()));
        }, 60000);
        return () => clearInterval(interval);
    }, [])

    return (
        <p className={`text-gray-160 text-[${size}]`}>
            {timeAgo}
        </p>
    )
}