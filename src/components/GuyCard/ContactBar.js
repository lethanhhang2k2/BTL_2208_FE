import messengerlogo from "../../assets/images/messengerlogo.jpg"
import zalologo from "../../assets/images/zalologo.png"
import * as SWMIconPack from "react-swm-icon-pack";

export default function ContactBar() {
    return (
        <div className="flex w-3/5 justify-between">
            <div>
                <img src={messengerlogo} className="h-[24px] w-[24px]" />
            </div>
            <div>
                <img src={zalologo} className="h-[24px] w-[24px]" />
            </div>
            <div>
                <SWMIconPack.Mail />
            </div>
            <div>
                <SWMIconPack.Phone />
            </div>
            <div>
                <SWMIconPack.MessageSquareDots />
            </div>
        </div>
    )
}