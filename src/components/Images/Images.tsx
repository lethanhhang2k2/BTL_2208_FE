import { type } from "@testing-library/user-event/dist/type"
import { createContext, useContext, useEffect, useState } from "react"
import UploadImage from "../UploadImage"
import * as SWMIconPack from "react-swm-icon-pack";

const ImagesContext = createContext<{} | null>({})

interface IImages {
    children: JSX.Element,
    images: string[]
}

type ImagesContextType = {
    imgs: string[],
    setImgs: () => void
}

function Images({ children, images }: IImages) {
    const [imgs, setImgs] = useState(images)

    return (
        <ImagesContext.Provider value={ { imgs, setImgs } }>
            <div className="flex justify-evenly p-4">
                { children }
            </div>
        </ImagesContext.Provider>
    )
}

function ImagesList() {
    const { imgs } = useContext(ImagesContext) as ImagesContextType 

    return (
        <>
            {imgs.map(img => {
                return (
                    <div className="w-1/5">
                        <img src={img} className="rounded-lg object-cover w-full h-[100px] shadow-md" />
                    </div>
                )
            })}
        </>
    )
}

function UploadImg() {
    const { imgs, setImgs } = useContext(ImagesContext) as ImagesContextType 
    const [img, setImg] = useState("")
    
    const handleChangeImg = (e: React.SyntheticEvent) => {

        const target = e.target as typeof e.target & {
            files: FileList
        };

        const img = target.files[0]

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
                      <SWMIconPack.PlusCircle className="h-16 w-16" color="#CCCCCC" />  
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

Images.List = ImagesList
Images.Upload = UploadImg

export default Images
