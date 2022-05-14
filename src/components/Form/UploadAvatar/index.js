import { useEffect, useState } from "react"
import default_avatar from "@images/default-avatar.jpg"

export default function UploadAvatar() {
    const [avt, setAvt] = useState(undefined)

    const handleChangeAvt = (e) => {
        const img = e.target.files[0]

        console.log(URL.createObjectURL(img));
        setAvt(URL.createObjectURL(img))
    }

    // Free reference to the file
    useEffect(() => (() => URL.revokeObjectURL(avt)), [avt])

    return (
        <label
            className="w-[160px] h-[160px] rounded-full border-solid border-4 border-violet cursor-pointer">
            <div className="h-full">
                <img src={avt || default_avatar} className="h-[152px] w-auto object-cover rounded-full" alt="user-avatar" />
            </div>
            <input
                type="file"
                className="opacity-0" accept="image/png, image/jpeg"
                onChange={handleChangeAvt}
                name="avatar"
            />
        </label>
    )
}