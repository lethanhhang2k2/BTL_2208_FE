import Icons, { IconName } from "@components/Icons";

interface IAddInput {
    iconName: IconName,
    name: string,
    placeholder: string,
}

export default function AddInput({ iconName, name, placeholder }: IAddInput) {
    return (
        <div className="flex p-2 w-full bg-gray-150/50 rounded-full my-2">
            <Icons iconName={iconName} stroke="#CCCCCC" strokeWidth="2" />
            <div className="ml-2 w-full">
                <input
                    name={name}
                    placeholder={placeholder}
                    className="outline-none bg-transparent w-full"
                    required
                />
            </div>
        </div>
    )
}