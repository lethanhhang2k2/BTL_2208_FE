import { useEffect, useState } from "react"
import Icons, { IconName } from "../Icons";

export default function UploadAvatar() {
    const [avt, setAvt] = useState(null)

    const handleChangeAvt = (e) => {
        const img = e.target.files[0]

        console.log(URL.createObjectURL(img));
        setAvt(URL.createObjectURL(img))
    }

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(avt)
        }
    }, [avt])

    return (
        <label
            className="w-[160px] h-[160px] rounded-full border-solid border-4 border-violet cursor-pointer">
            {avt ? (
                <div className="h-full">
                    <img src={avt} className="h-[152px] w-auto object-cover rounded-full" />
                </div>
            ) : (
                <div className="w-full h-full flex items-center justify-center">
                    <Icons IconName={IconName.PlusCircle} className="h-16 w-16" color="#A194FE" />
                </div>
            )}
            <input
                type="file"
                className="opacity-0" accept="image/png, image/jpeg, image/svg"
                onChange={handleChangeAvt}
                name="avatar"
            />
        </label>
    )
}