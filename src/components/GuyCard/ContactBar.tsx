import React from "react"
import Icons, { IconName } from "@components/Icons"
import messenger_logo from "../../assets/images/messengerlogo.jpg"
import zalo_logo from "../../assets/images/zalologo.png"

export default class ContactBar extends React.Component {
    render() {
        return (
            <div className="flex w-3/5 justify-between">
                <div>
                    <img src={messenger_logo} className="h-[24px] w-[24px]" />
                </div>
                <div>
                    <img src={zalo_logo} className="h-[24px] w-[24px]" />
                </div>
                <div>
                    <Icons iconName={IconName.Mail} />
                </div>
                <div>
                    <Icons iconName={IconName.Phone} />
                </div>
                <div>
                    <Icons iconName={IconName.MessageSquareDots} />
                </div>
            </div>
        );
    }
}