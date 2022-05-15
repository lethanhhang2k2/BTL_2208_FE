import { useEffect, useState } from "react";
import { ThemeColor, UserExample } from "@AppTypes/user";
import GuyCard from "@components/GuyCard";
import BgEditLayout from "@layouts/AuthLayout/components/BgEditLayout";

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
<<<<<<< HEAD
            backgroundColor={bgColor.color}>
            <GuyCard theme={bgColor.color}/>
=======
            backgroundColor={bgColor.color}
        >
            <GuyCard user={user} />
>>>>>>> main
        </BgEditLayout>
    )
}