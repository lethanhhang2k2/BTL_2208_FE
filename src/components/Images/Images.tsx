import Icons, { IconName } from "@components/Icons"
import { createContext, useContext, useState } from "react"

const ImagesContext = createContext<{} | null>({})

interface IImages {
    children: JSX.Element,
    images: string[],
    setImages?: (i: any) => void
}

type ImagesContextType = {
    imgs: string[],
    is: File[],
    setImgs: (i: any) => void,
    setImages: (i: any) => void,
    setIs: (i: any) => void
}

function Images({ children, images, setImages }: IImages) {
    const [imgs, setImgs] = useState(images)
    const [is, setIs] = useState(images)

    return (
        <ImagesContext.Provider value={{ imgs, is, setImgs, setImages, setIs }}>
            <div className="flex justify-start p-4">
                {children}
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
                    <div className="w-1/4 shadow-md rounded-lg mx-4" key={img}>
                        <img src={img} className="rounded-lg object-cover w-full h-[160px] shadow-md" />
                    </div>
                )
            })}
        </>
    )
}

function UploadImg() {
    const { is, imgs, setImgs, setImages, setIs } = useContext(ImagesContext) as ImagesContextType 
    
    const handleChangeImg = (e: React.SyntheticEvent) => {

        const target = e.target as typeof e.target & {
            files: FileList
        };

        const img = target.files[0]

        setImgs(imgs.concat(URL.createObjectURL(img)))
        setIs(is.concat(img))
        setImages(is.concat(img))

        console.log(is)
        
    }

    return (
        <>
            {imgs.length < 4 ? (
                <label
                    className="mx-4 w-[160px] h-[160px] rounded-lg border-solid border-gray-160 cursor-pointer">
                    <div className="w-full h-full flex items-center justify-center border-[3px] rounded-lg">
                        <Icons iconName={IconName.PlusCircle} stroke="#CCCCCC" size="40px" />
                    </div>
                    <input
                        type="file"
                        className="opacity-0" accept="image/png, image/jpeg, image/svg"
                        onChange={handleChangeImg}
                        name="img"
                    />
                </label>
            ) : null}
        </>
    )
}

Images.List = ImagesList
Images.Upload = UploadImg

export default Images
