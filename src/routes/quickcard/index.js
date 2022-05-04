import { useEffect, useState } from "react";
import theme from "../../assets/theme";
import GuyCard from "../../components/GuyCard";
import BgEditLayout from "../../layouts/AuthLayout/BgEditLayout";

export default function QuickCard({ user = { theme: "red" } }) {
    const [bgColor, setBgColor] = useState({})

    useEffect(() => {
        setBgColor({
            id: user.theme,
            color: theme[user.theme]
        })
    }, [])

    return (
        <BgEditLayout
            user={{
                id: 111,
                username: "hang",
                avtHref: "https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-hoat-hinh-de-thuong-cute-dep-nhat.jpg",
                distance: 3.9,
                address: "Thanh Xuan",
                role: "Admin"
            }}
            backgroundColor={bgColor.color}
        >
            <GuyCard />
        </BgEditLayout>
    )
}