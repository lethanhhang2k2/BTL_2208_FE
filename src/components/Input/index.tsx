import React from "react"

interface InputProps {
    type?: string,
    placeholder?: string,
    name: string,
}

export default class Input extends React.Component<InputProps, {}> {
    render() {
        const { type = "text", placeholder = "", name } = this.props;
        return (
            <div className="w-full bg-gray-150 rounded-lg h-fit">
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    className="w-full outline-none p-2 bg-transparent focus:outline-4 focus:outline-violet/40 rounded-lg"
                />
            </div>
        )
    }
}
