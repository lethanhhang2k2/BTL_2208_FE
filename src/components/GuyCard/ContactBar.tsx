import React from "react"
import Icons, { IconName } from "@components/Icons"
import messenger_logo from "@images/messengerlogo.jpg"
import zalo_logo from "@images/zalologo.png"
import IconButton from "@components/IconButton"

export default class ContactBar extends React.Component {
    render() {
        return (
            <div className="flex justify-between">
                <IconButton>
                    <img src={messenger_logo} className="w-[24px]" />
                </IconButton>
                <IconButton>
                    <img src={zalo_logo} className="w-[24px]" />
                </IconButton>
                <IconButton>
                    <Icons iconName={IconName.Mail} />
                </IconButton>
                <IconButton>
                    <Icons iconName={IconName.Phone} />
                </IconButton>
                <IconButton>
                    <Icons iconName={IconName.MessageSquareDots} />
                </IconButton>
            </div>
        );
    }
}