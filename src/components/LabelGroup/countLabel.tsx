import React from "react";

interface IProps {
    label: string;
    value: number;
}

export default class CountLabel extends React.Component<IProps> {
    render() {
        const { label, value } = this.props;
        return (
            <div className="flex items-center mr-4">
                <p className="text-gray-400 text-lg">
                    <span className="font-bold mr-1">{value}</span>
                    {label}
                </p>
            </div>
        );
    }
}