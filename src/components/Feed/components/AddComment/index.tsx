interface IProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export default function AddComment({ onChange }: IProps) {
    return (
        <div className="m-2 mt-0">
            <div className="bg-gray-100 rounded-lg">
                <input type="text" className="w-full py-2 px-3 bg-transparent outline-none" placeholder="Add a comment..." onChange={onChange} />
            </div>
        </div>
    )
}