import { useEffect, useState } from "react";
import { ThemeColor } from "../../types/user";
import GuyCard from "../../components/GuyCard";
import ThingCard from "../../components/ThingCard";
import BgEditLayout from "../../layouts/AuthLayout/BgEditLayout";

const motels = [
    {
        name: "Chung cư mini tại cầu giấy",
        owner: "Toro Toro",
        address: "Mai Dịch",
        fee: "2tr",
        describe: "Gần ĐHQG.",
        illuHref: "https://o.rada.vn/data/image/2020/02/25/adorable-home-bedroom-3.jpg",
        status: "Đã phê duyệt"
    },
    {
        name: "Chung cư mini tại cầu giấy",
        owner: "Toro Toro",
        address: "Mai Dịch",
        fee: "2tr",
        describe: "Gần ĐHQG.",
        illuHref: "https://o.rada.vn/data/image/2020/02/25/adorable-home-bedroom-3.jpg",
        status: "Chưa phê duyệt"
    }
]

export default function QuickCardEdit({ user = { theme: "red" } }) {
    const [bgColor, setBgColor] = useState({})

    useEffect(() => {
        setBgColor({
            id: user.theme,
            color: ThemeColor.Violet
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
            <div className="flex w-3/4 justify-between">
                <div className="w-1/3">
                    <GuyCard />
                </div>
                <div className="w-3/5 h-3/4 py-2 flex flex-col justify-between">
                    <div className="text-3xl text-white">
                        Quick link helps people have an overview about you
                    </div>
                    <div className="border-2 border-solid border-white rounded-full w-3/5">
                        <input className="focus:outline-none bg-transparent p-2 text-white w-full mx-2" type="text"></input>
                    </div>
                    <div className="flex h-2/3 w-full justify-between">
                        {motels.map(motel => <ThingCard motel={motel} />)}
                    </div>
                </div>
            </div>
        </BgEditLayout>
    )
}