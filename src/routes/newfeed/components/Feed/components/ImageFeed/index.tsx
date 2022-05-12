import { Carousel, Image } from "react-bootstrap"
import Icons, { IconName } from "@components/Icons";
import "./index.scss";

interface IImageFeedProps {
    images: string[],
}

export default function ImageFeed({ images }: IImageFeedProps) {
    return (
        <div className="w-full my-2 h-[400px]">
            <Carousel
                nextIcon={(
                    <div className="h-[24px] w-[24px] rounded-md bg-white">
                        <Icons iconName={IconName.ChevronSmallRight} />
                    </div>
                )}
                prevIcon={(
                    <div className="h-[24px] w-[24px] rounded-md bg-white">
                        <Icons iconName={IconName.ChevronSmallLeft} />
                    </div>
                )}
                controls={images.length > 1 ? true : false}>

                {images.map(image => {
                    return (
                        <Carousel.Item>
                            <Image thumbnail={true} src={image} width="560px" height="600px" className=" mx-auto" />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}