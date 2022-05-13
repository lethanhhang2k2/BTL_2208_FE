import { useEffect, useState } from "react";
import { ThemeColor, UserExample } from "../../types/user";
import GuyCard from "../../components/GuyCard";
import BgEditLayout from "../../layouts/AuthLayout/components/BgEditLayout";

export default function QuickCard({ user = { theme: "red" } }) {
    const [bgColor, setBgColor] = useState({})

    useEffect(() => {
        setBgColor({
            id: user.theme,
            color: ThemeColor.Violet
        })
    }, [])

    return (
        <BgEditLayout
            user={UserExample}
            backgroundColor={bgColor.color}
        >
            <GuyCard />
        </BgEditLayout>
    )
}