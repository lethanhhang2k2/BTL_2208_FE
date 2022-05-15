import { createContext, useContext, useEffect, useState } from "react"
import UploadImage from "../UploadImage"

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
                    <div className="w-1/5 shadow-md rounded-lg">
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
        <UploadImage />
    )
}

Images.List = ImagesList
Images.Upload = UploadImg

export default Images
