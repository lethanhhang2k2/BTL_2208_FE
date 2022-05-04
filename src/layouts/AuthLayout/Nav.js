import * as SWMIconPack from "react-swm-icon-pack";
import qrcode from "../../assets/images/qrcode.png";

export default function Nav() {
    return (
        <div className="flex">
            <div className="p-2 hover:border-b-2 hover:border-white hover:">
                <img src={qrcode} className="w-[28px] h-[28px]" />
            </div>
            <div className="p-2 hover:border-b-2">
                <SWMIconPack.Smartphone width="28px" height="28px" color="white" />
            </div>
            <div className="p-2 hover:border-b-2">
                <SWMIconPack.Edit3 width="28px" height="28px" color="white" />
            </div>
        </div>
    )
}