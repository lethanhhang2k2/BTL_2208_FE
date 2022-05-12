import React from "react";
import { ReactComponent as User1 } from "@icons/user1.svg";
import { ReactComponent as Mail } from "@icons/mail.svg";
import { ReactComponent as Phone } from "@icons/phone.svg";
import { ReactComponent as MessageSquareDots } from "@icons/messagesquaredots.svg";
import { ReactComponent as Location1 } from "@icons/location1.svg";
import { ReactComponent as TrendingUp } from "@icons/trendingup.svg";
import { ReactComponent as InfoCircle } from "@icons/infocircle.svg";
import { ReactComponent as Coin } from "@icons/coin.svg";
import { ReactComponent as Filters3 } from "@icons/filters3.svg";
import { ReactComponent as Bell } from "@icons/bell.svg";
import { ReactComponent as Explore } from "@icons/explore.svg";
import { ReactComponent as Home2 } from "@icons/home2.svg";
import { ReactComponent as MessageCircleLines } from "@icons/messagecirclelines.svg";
import { ReactComponent as PlusCircle } from "@icons/pluscircle.svg";
import { ReactComponent as Edit3 } from "@icons/edit3.svg";
import { ReactComponent as Smartphone } from "@icons/smartphone.svg";
import { ReactComponent as Wallet } from "@icons/wallet.svg";
import { ReactComponent as ChevronSmallRight } from "@icons/chevronsmallright.svg";
import { ReactComponent as ChevronSmallLeft } from "@icons/chevronsmallleft.svg";
import { ReactComponent as MenuHorizontal } from "@icons/menuhorizontal.svg";
import { ReactComponent as Bookmark } from "@icons/bookmark.svg";
import { ReactComponent as Share1 } from "@icons/share1.svg";
import "./index.scss";

interface IconsProps {
    iconName: IconName
    color?: string,
    stroke?: string,
    size?: string,
    strokeWidth?: string
}

export enum IconName {
    User1 = "User1",
    Mail = "Mail",
    Phone = "Phone",
    MessageSquareDots = "Messagesquaredots",
    TrendingUp = "Trendingup",
    Location1 = "Location1",
    InfoCircle = "Infocircle",
    Coin = "Coin",
    Filters3 = "Filters3",
    Bell = "Bell",
    Explore = "Explore",
    Home2 = "Home2",
    MessageCircleLines = "Messagecirclelines",
    PlusCircle = "Pluscircle",
    Edit3 = "Edit3",
    Smartphone = "Smartphone",
    Wallet = "Wallet",
    ChevronSmallRight = "Chevronsmallright",
    ChevronSmallLeft = "Chevronsmallleft",
    MenuHorizontal = "Menuhorizontal",
    Bookmark = "Bookmark",
    Share1 = "Share1"
}

const IconList = {
    [IconName.User1]: User1,
    [IconName.Mail]: Mail,
    [IconName.Phone]: Phone,
    [IconName.MessageSquareDots]: MessageSquareDots,
    [IconName.TrendingUp]: TrendingUp,
    [IconName.Location1]: Location1,
    [IconName.InfoCircle]: InfoCircle,
    [IconName.Coin]: Coin,
    [IconName.Filters3]: Filters3,
    [IconName.Bell]: Bell,
    [IconName.Explore]: Explore,
    [IconName.Home2]: Home2,
    [IconName.MessageCircleLines]: MessageCircleLines,
    [IconName.PlusCircle]: PlusCircle,
    [IconName.Edit3]: Edit3,
    [IconName.Smartphone]: Smartphone,
    [IconName.Wallet]: Wallet,
    [IconName.ChevronSmallRight]: ChevronSmallRight,
    [IconName.ChevronSmallLeft]: ChevronSmallLeft,
    [IconName.MenuHorizontal]: MenuHorizontal,
    [IconName.Bookmark]: Bookmark,
    [IconName.Share1]: Share1
}
export default class Icons extends React.Component<IconsProps, {}> {
    render() {
        const { iconName, stroke = "#001a72", size = "24px", strokeWidth = "1.5", ...props } = this.props;
        const Component = IconList[iconName];
        return (
            <Component stroke={stroke} width={size} height={size} strokeWidth={strokeWidth} {...props} />
        );
    }
}