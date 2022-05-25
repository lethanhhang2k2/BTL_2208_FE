import { useEffect, useState, useContext, useRef } from "react";
import BgEditLayout from "@layouts/AuthLayout/components/BgEditLayout";
import { ThemeColor } from "@AppTypes/user"
import ButtonLink from "./ButtonLink";
import ColorOption from "./ColorOption";
import { UserContext } from "@hooks/UserManager";
import { getQRCode } from "@api/qrcode";
import { QRCode } from "react-qrcode-logo";

const FRONTEND_HOST = "http://localhost:3000"

const linkOptions = [
    {
        link: FRONTEND_HOST + "/quickcard/",
        content: "Link to quick card"
    },
    {
        link: FRONTEND_HOST + "/profile/",
        content: "Link to my profile"
    },
    {
        link: FRONTEND_HOST + "/quickcard/",
        content: "See my quick card"
    }
]

export default function Nametag() {
    const [bgColor, setBgColor] = useState({})
    const [currentOption, setCurrentOption] = useState(0);
    const { user } = useContext(UserContext)
    
    const downloadRef = useRef()

    useEffect(() => {
        setBgColor({
            id: user.theme,
            color: ThemeColor[user.theme]
        })

        getQRCode()
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
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

    const handleDownload = () => {
        const canvas = document.querySelector('.qrcode > canvas');

        console.log(canvas);
        const pngUrl = canvas.toDataURL("image/png")
                        .replace("image/png", "image/octet-stream");
        // downloadRef.download = user.id + "-QR.png";

        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `${linkOptions[currentOption].link + user.id}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    return (
        <BgEditLayout
            backgroundColor={bgColor.color}>
            <div className="flex w-2/3 h-fit justify-between">
                <div className="w-[300px] h-fit bg-white p-8 rounded-xl">
                    <div className="flex justify-center">
                        <div className="qrcode w-[236px] h-[236px]" style={{ background: bgColor.color }}>
                            <QRCode
                                value={linkOptions[currentOption].link + user.id}
                                eyeRadius={[
                                    { // top/left eye
                                        outer: [10, 10, 0, 10],
                                        inner: [0, 10, 10, 10],
                                    },
                                    [10, 10, 10, 0], // top/right eye
                                    [10, 0, 10, 10], // bottom/left
                                ]} 
                                size={216}
                                fgColor={bgColor.id}
                            />
                        </div>
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
                                    handleColor={() => handleClickColor({ id, color })}                                />
                            )
                        })}
                    </div>
                    <div>
                        <button ref={downloadRef} onClick={handleDownload} className={`bg-white py-2 px-4 rounded-full text-bg${bgColor.id} hover:shadow-md`}>
                            Download this code
                        </button>
                    </div>
                </div>
            </div>
        </BgEditLayout>
    )
}