import { useEffect, useState } from "react"
import { Image } from "react-bootstrap";
import { Icons } from "react-toastify";

export default function UploadImage() {
    const [img, setImg] = useState(null)
    
    const handleChangeImg = (e) => {
        const img = e.target.files[0]

        console.log(URL.createObjectURL(img));
        setImg(URL.createObjectURL(img))
    }

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(img)
        }
    }, [img])

    return (
        <label
            className="w-[160px] h-[160px] rounded-lg border-solid border-4 border-gray-160 cursor-pointer">
            {img ? (
                <div className="h-full">
                    <img src={img} className="h-[152px] w-auto object-cover rounded-lg" />
                </div>
            ) : (
                <div className="w-full h-full flex items-center justify-center">
                      <Icons.PlusCircle className="h-16 w-16" color="#CCCCCC" />  
                </div>
            )}
            <input
                type="file"
                className="opacity-0" accept="image/png, image/jpeg, image/svg"
                onChange={handleChangeImg}
                name="img"
            />
        </label>
    )
}