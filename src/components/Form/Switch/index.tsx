import { useState } from "react";

interface InputProps {
    name: string;
    value: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Switch({ name, value, onChange }: InputProps) {
    const [checked, setChecked] = useState(value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(!checked);
        if (onChange) {
            onChange(e);
        }
    }

    return (
        <label className="flex items-center cursor-pointer mx-[5%]">
            <div className="relative">
                <input type="checkbox" className="switch sr-only" name={name} defaultChecked={checked} onChange={handleChange} />
                <div className={"line block w-[68px] h-[32px] rounded-full transition " + ((checked) ? "bg-violet" : "bg-blue-400")} ></div>
                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-all duration-500"></div>
            </div>
        </label >
    )
}