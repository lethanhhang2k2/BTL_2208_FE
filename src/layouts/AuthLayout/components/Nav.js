import Icons, { IconName } from "@components/Icons";
import qrcode from "@images/qrcode.png";

export default function Nav() {
    return (
        <div className="flex">
            <div className="p-2 border-b-2 hover:border-white border-transparent cursor-pointer">
                <img src={qrcode} alt="qrcode" className="w-[28px] h-[28px]" />
            </div>
            <div className="p-2 border-b-2 hover:border-white border-transparent cursor-pointer">
                <Icons iconName={IconName.Smartphone} color="white" />
            </div>
            <div className="p-2 border-b-2 hover:border-white border-transparent cursor-pointer">
                <Icons iconName={IconName.Edit3} color="white" />
            </div>
        </div>
    )
}