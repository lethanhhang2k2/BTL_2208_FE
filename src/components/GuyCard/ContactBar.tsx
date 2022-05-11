import React from "react"
import Icons from "@components/Icons"
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
                    <Icons iconName="mail" />
                </div>
                <div>
                    <Icons iconName="phone" />
                </div>
                <div>
                    <Icons iconName="messagesquaredots" />
                </div>
            </div>
        );
    }
}