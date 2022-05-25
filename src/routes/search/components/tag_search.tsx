import React from "react";

interface IProps {
    content: string,
    isChecked?: boolean,
    onClick?: () => void
}
export default class TagSearch extends React.Component<IProps>{
    render() {
        const { content, isChecked = false, onClick } = this.props;
        return (
            <div className={
                "w-fit p-2 py-1 rounded-2xl border-2 border-blue-200 m-1 cursor-pointer hover:bg-blue-200 hover:text-white font-bold text-blue-500 " +
                (isChecked ? "bg-blue-200 font-bold text-blue-500 " : "")}
                onClick={onClick}>
                {content}
            </div>
        )
    }
}