import React from "react";
import { ReactComponent as User1 } from "../../assets/icons/user1.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as MessageSquareDots } from "../../assets/icons/messagesquaredots.svg";
import { ReactComponent as Location1 } from "../../assets/icons/location1.svg";
import { ReactComponent as TrendingUp } from "../../assets/icons/trendingup.svg";
import { ReactComponent as InfoCircle } from "../../assets/icons/infocircle.svg";
import { ReactComponent as Coin } from "../../assets/icons/coin.svg";
import { ReactComponent as Filters3 } from "../../assets/icons/filters3.svg";
import { ReactComponent as Bell } from "../../assets/icons/bell.svg";
import { ReactComponent as Explore } from "../../assets/icons/explore.svg";
import { ReactComponent as Home2 } from "../../assets/icons/home2.svg";
import { ReactComponent as MessageCircleLines } from "../../assets/icons/messagecirclelines.svg";
import { ReactComponent as PlusCircle } from "../../assets/icons/pluscircle.svg";
import { ReactComponent as Edit3 } from "../../assets/icons/edit3.svg";
import { ReactComponent as Smartphone } from "../../assets/icons/smartphone.svg";
import { ReactComponent as Wallet } from "../../assets/icons/wallet.svg";
import { ReactComponent as ChevronSmallRight } from "../../assets/icons/chevronsmallright.svg";
import { ReactComponent as ChevronSmallLeft } from "../../assets/icons/chevronsmallleft.svg";
import { ReactComponent as MenuHorizontal } from "../../assets/icons/menuhorizontal.svg";
import { ReactComponent as Bookmark } from "../../assets/icons/bookmark.svg";
import { ReactComponent as Share1 } from "../../assets/icons/share1.svg";


interface IconsProps {
    iconName: string
    color?: string
}

export enum IconName {
    User1 = "user1",
    Mail = "mail",
    Phone = "phone",
    MessageSquareDots = "messagesquaredots",
    TrendingUp = "trendingup",
    Location1 = "location1",
    InfoCircle = "infocircle",
    Coin = "coin",
    Filters3 = "filters3",
    Bell = "bell",
    Explore = "explore",
    Home2 = "home2",
    MessageCircleLines = "messagecirclelines",
    PlusCircle = "pluscircle",
    Edit3 = "edit3",
    Smartphone = "smartphone",
    Wallet = "wallet",
    ChevronSmallRight = "chevronsmallright",
    ChevronSmallLeft = "chevronsmallleft",
    MenuHorizontal = "menuhorizontal",
    Bookmark = "bookmark",
    Share1 = "share1"
}

export default class Icons extends React.Component<IconsProps, {}> {
    render() {
        return (
            <div>
                {this.props.iconName === IconName.User1 && <User1 fill={this.props.color} />}
                {this.props.iconName === IconName.Mail && <Mail fill={this.props.color} />}
                {this.props.iconName === IconName.Phone && <Phone fill={this.props.color} />}
                {this.props.iconName === IconName.MessageSquareDots && <MessageSquareDots fill={this.props.color} />}
                {this.props.iconName === IconName.TrendingUp && <TrendingUp fill={this.props.color} />}
                {this.props.iconName === IconName.Location1 && <Location1 fill={this.props.color} />}
                {this.props.iconName === IconName.InfoCircle && <InfoCircle fill={this.props.color} />}
                {this.props.iconName === IconName.Coin && <Coin fill={this.props.color} />}
                {this.props.iconName === IconName.Filters3 && <Filters3 fill={this.props.color} />}
                {this.props.iconName === IconName.Bell && <Bell fill={this.props.color} />}
                {this.props.iconName === IconName.Explore && <Explore fill={this.props.color} />}
                {this.props.iconName === IconName.Home2 && <Home2 fill={this.props.color} />}
                {this.props.iconName === IconName.MessageCircleLines && <MessageCircleLines fill={this.props.color} />}
                {this.props.iconName === IconName.PlusCircle && <PlusCircle fill={this.props.color} />}
                {this.props.iconName === IconName.Edit3 && <Edit3 fill={this.props.color} />}
                {this.props.iconName === IconName.Smartphone && <Smartphone fill={this.props.color} />}
                {this.props.iconName === IconName.Wallet && <Wallet fill={this.props.color} />}
                {this.props.iconName === IconName.ChevronSmallRight && <ChevronSmallRight fill={this.props.color} />}
                {this.props.iconName === IconName.ChevronSmallLeft && <ChevronSmallLeft fill={this.props.color} />}
                {this.props.iconName === IconName.MenuHorizontal && <MenuHorizontal fill={this.props.color} />}
                {this.props.iconName === IconName.Bookmark && <Bookmark fill={this.props.color} />}
                {this.props.iconName === IconName.Share1 && <Share1 fill={this.props.color} />}
            </div>
        );
    }
}