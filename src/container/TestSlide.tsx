import { Carousel, Image } from "react-bootstrap";

const images = [
    "https://i.pinimg.com/originals/a8/8f/71/a88f712fd81f7521317d1f3744533774.jpg",
    "https://1.bp.blogspot.com/-_lH8VQsFxo8/V10EFzsGlkI/AAAAAAAAAjA/3gwjXnSAM2IZNVAR4zOBYRzaLAv_glY-gCK4B/s1600/get.jpg",
    "https://i.pinimg.com/originals/9b/54/73/9b547328bfab95aed625e75ac3e89682.jpg"
]

export default function TestSlide() {
    return (
        <div className="h-[50%] w-[50%]">
            <h1>
                Trang này là để test slide của boostrap.
            </h1>
            <Carousel>
                {images.map(image => {
                    return (
                        <Carousel.Item>
                            <Image thumbnail={true} src={image} width="800px" />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}