import { useEffect, useState } from "react";
import { ThemeColor, UserExample } from "../../types/user";
import GuyCard from "../../components/GuyCard";
import BgEditLayout from "../../layouts/AuthLayout/BsEditLayout/BgEditLayout";

export default function QuickCard({ user = { ...UserExample } }) {
    const [bgColor, setBgColor] = useState({})

    useEffect(() => {
        setBgColor({
            id: user.theme,
            color: ThemeColor[user.theme]
        })
    }, [])

    return (
        <BgEditLayout
            user={UserExample}
            backgroundColor={bgColor.color}
        >
            <GuyCard user={user} />
        </BgEditLayout>
    )
}