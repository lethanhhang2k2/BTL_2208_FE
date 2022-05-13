import Icons, { IconName } from "@components/Icons";
import React from "react";

interface IProps {
    icon: IconName
    value: string | number;
    is_small?: boolean
}

export default class IconLabel extends React.Component<IProps> {
    render() {
        const { icon, value, is_small = false } = this.props;
        return (
            <div className="flex items-center mr-4">
                <Icons iconName={icon} stroke={(is_small) ? "#6b7280" : "#6b7280"} size={(is_small) ? "18px" : "24px"} />
                <p className={`font-semibold mx-1 ` + ((is_small) ? "text-sm text-gray-300" : "text-gray-400")}>{value}</p>
            </div>
        );
    }
}