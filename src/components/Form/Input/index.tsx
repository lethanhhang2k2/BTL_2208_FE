import React from "react"
import Label from "@components/Form/Label"
interface InputProps {
    type?: string,
    placeholder?: string,
    name: string,
    label: string,
    disable?: boolean,
    required?: boolean,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

interface InputState {
    value: string
}
export default class Input extends React.Component<InputProps, InputState> {
    constructor(props: InputProps) {
        super(props)
        this.state = {
            value: props.value || ""
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            value: e.target.value,
        });

        if (this.props.onChange) {
            this.props.onChange(e);
        }
    }

    render() {
        const {
            type = "text", placeholder = "", name, label,
            disable = false, required = false
        } = this.props;
        
        return (
            <div className="form-item">
                <Label forInput={name} required={required}>{label}</Label>
                <div className={("w-full rounded-lg h-fit " + (disable ? "bg-gray-300" : "bg-gray-100"))}>
                    <input
                        value={this.state.value}
                        required={required}
                        disabled={disable}
                        type={type}
                        placeholder={placeholder}
                        name={name}
                        className="w-full outline-none p-2 bg-transparent focus:outline-4 focus:outline-violet/40 rounded-lg"
                        onChange={this.handleChange.bind(this)}
                    />
                </div>
            </div>

        )
    }
}
