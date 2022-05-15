import React from "react";

interface IProps {
    itemIndex: number;
    title: string,
    isActive: boolean,
    onClick?: (selectedIndex: number) => void;
}

export default class Tab extends React.Component<IProps> {
    handleClick = (selectedIndex: number) => {
        this.props.onClick && this.props.onClick(selectedIndex);
    }

    render() {
        const { itemIndex, title, isActive } = this.props;
    
        return (
            <div className={"font-semibold p-1 px-3 rounded-2xl cursor-pointer mx-2 transition-all " +
                (isActive ? "bg-white shadow-lg text-gray-600 font-bold" : "text-gray-400")}
                onClick={this.handleClick.bind(this, itemIndex)}>
                {title}
            </div >
        )
    }
}