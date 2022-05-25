import { getAllConversation, getChatBox, getChatMenu } from "@api/chat";
import { createPost, getAllPosts, getPost } from "@api/post";
import { getUser } from "@api/user";
import { UserContext } from "@hooks/UserManager";
import { useContext, useEffect, useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import GuyCard from "../components/GuyCard";
import ThingCard from "../components/ThingCard";
import { MotelExample, MotelProperty } from "../types/motel";
import { UserExample } from "../types/user";

// const images = [
//     "https://i.pinimg.com/originals/a8/8f/71/a88f712fd81f7521317d1f3744533774.jpg",
//     "https://1.bp.blogspot.com/-_lH8VQsFxo8/V10EFzsGlkI/AAAAAAAAAjA/3gwjXnSAM2IZNVAR4zOBYRzaLAv_glY-gCK4B/s1600/get.jpg",
//     "https://i.pinimg.com/originals/9b/54/73/9b547328bfab95aed625e75ac3e89682.jpg"
// ]

export default function TestSlide() {
    //     const [post, setPost] = useState<MotelProperty>()
    //     const [posts, setPosts] = useState<MotelProperty[]>()
    //     const { user } = useContext(UserContext)

    //     useEffect(() => {
    //         // getPost("627b8c3aa13751dc148450bc")
    //         //     .then(post => {
    //         //         console.log(post)
    //         //     })
    //         //     .catch(err => console.log(err))

    //         // getAllPosts()
    //         //     .then(posts => {
    //         //         console.log(posts.data)
    //         //     })
    //         //     .catch(err => console.log(err))

        
    //     getAllConversation({ _id: user.id })
    //         .then(chat => console.log(chat.data))
    //         .catch(err => console.log(err))
        
<<<<<<< HEAD
        getChatBox("628d4e87c0949da4e14be571")
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
=======
    //     getChatBox("627cbf1e44b1954e72b8bf24")
    //         .then(res => console.log(res.data))
    //         .catch(err => console.log(err))
>>>>>>> 3e54caab78cdbada025e580e0d805a003a466008
        
    //     getChatMenu({ _id: user.id })
    //         .then(chat => console.log(chat.data))
    //         .catch(err => console.log(err))
    // }, [])


    return (
        <div></div>);
    //         <div className="h-[50%] w-[50%] bg-black">
    //             <h1>
    //                 Trang này là để test slide của boostrap.
    //             </h1>
    //             <Carousel>
    //                 {images.map(image => {
    //                     return (
    //                         <Carousel.Item>
    //                             <Image thumbnail={true} src={image} width="800px" />
    //                         </Carousel.Item>
    //                     )
    //                 })}
    //             </Carousel>
    //             <div className="h-screen w-screen" style={{ backgroundColor: "gray" }}>
    //                 <GuyCard user={UserExample} quickCard={false} />
    //                 <ThingCard motel={MotelExample} />
    //             </div>
    //         </div>
    //     )
}