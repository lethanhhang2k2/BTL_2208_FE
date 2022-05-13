import { useEffect, useState, useContext } from "react";
import BgEditLayout from "@layouts/AuthLayout/components/BgEditLayout";
import { ThemeColor } from "@AppTypes/user"
import ButtonLink from "./ButtonLink";
import ColorOption from "./ColorOption";
import { UserContext } from "@hooks/UserManager";

const linkOptions = [
    {
        content: "Link to quick card"
    },
    {
        content: "Link to my profile"
    },
    {
        content: "See my quick card"
    }
]

export default function Nametag() {
    const [bgColor, setBgColor] = useState({})
    const [currentOption, setCurrentOption] = useState(0);
    const {user} = useContext(UserContext)

    useEffect(() => {
        setBgColor({
            id: user.theme,
            color: ThemeColor.Violet
        })
    }, [])

    const handleClickColor = (color) => {
        console.log(color);
        if (bgColor.id !== color.id) {
            setBgColor(color)
        }
    }

    const handleOption = (index) => {
        if (index !== currentOption) setCurrentOption(index)
    }

    return (
        <BgEditLayout
            backgroundColor={bgColor.color}>
            <div className="flex w-3/5 h-fit justify-between">
                <div className="w-[300px] h-fit bg-white p-8 rounded-xl">
                    <div className="flex justify-center">
                        <div className="w-[236px] h-[236px]" style={{ background: bgColor.color }}></div>
                    </div>
                    <p className={`italic text-[2rem] font-qr text-center text-bg${bgColor.id}`}>
                        {user.username}
                    </p>
                </div>

                <div className="w-4/6 flex flex-col justify-between py-2">
                    <div className="text-[36px] text-white">
                        QR code helps people follow you quickly
                    </div>
                    <div className="text-[16px] text-white w-4/5">
                        People can scan your QR code with their smartphone’s camera to see your profile. Download and print your QR code, then stick it on your products, posters and more.
                    </div>
                    <div className="flex justify-between w-4/6">
                        {linkOptions.map((option, index) => {
                            return (
                                <ButtonLink
                                    key={index}
                                    contentButton={option.content}
                                    handleOptionLink={() => handleOption(index)}
                                    active={index === currentOption}
                                />
                            )
                        })}
                    </div>
                    <div className="flex w-1/4 justify-between">
                        {Object.entries(ThemeColor).map(([id, color]) => {
                            return (
                                <ColorOption
                                    key={id}
                                    color={color}
                                    borderWidth={id === bgColor.id ? "4" : "2"}
                                    handleColor={() => handleClickColor({ id, color })}
                                />
                            )
                        })}
                    </div>
                    <div>
                        <button className={`bg-white py-2 px-4 rounded-full text-bg${bgColor.id} hover:shadow-md`}>
                            Download this code
                        </button>
                    </div>
                </div>
            </div>
        </BgEditLayout>
    )
}