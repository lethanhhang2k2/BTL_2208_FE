import { ActionButton } from "../../components/Action/ActionButton";
import AuthLayout from "../../layouts/AuthLayout";
import { UserExample } from "../../types/user";
import Images from "../../components/Images/Images";
import GuyCard from "../../components/GuyCard";
import Icons, { IconName } from "../../components/Icons";
import { MotelExample } from "@AppTypes/motel";
import React, { useContext, useState } from "react";
import AddInput from "./AddInput";
import { createPost } from "@api/post";
import { UserContext } from "@hooks/UserManager";

export default function AddPost() {
    const [images, setImages] = useState<File[]>([])

    const handleUpPost = (e: React.SyntheticEvent) => {
        e.preventDefault()

        const target = e.target as typeof e.target & {
            title_of_post: { value: string },
            address: { value: string },
            room_area: { value: number },
            room_description: { value: string },
            rental_price: { value: number }
        };
        const postData = new FormData()

        postData.append("title_of_post", target.title_of_post.value)
        postData.append("address", target.address.value)
        postData.append("room_area", target.room_area.value.toString())
        postData.append("room_description", target.room_description.value)
        postData.append("rental_price", target.rental_price.value.toString())
        postData.append("file", images[0])
        console.log(images[0]);
        // for (const i in images) {
        //     console.log(i);
            
        //     postData.append('file', i)
        // }
        
        const newPost = {
            title_of_post: target.title_of_post.value,
            address: target.address.value,
            room_area: target.room_area.value,
            room_description: target.room_description.value,
            rental_price: target.rental_price.value,
            // filename_list: images,
            //phone_number: "",
        }

        console.log(newPost);
        console.log(postData)
        
        createPost(postData)
            .then(res => console.log(res.data))
            .then(() => {
                window.location.href = "/"
            })
            .catch(err => console.log(err))

    }

    return (
        <AuthLayout>
            <div className="w-full h-screen flex justify-center pt-8 fixed bg-gray-150">
                <form onSubmit={handleUpPost} className="w-4/5 h-5/6 p-4 shadow-md rounded-lg bg-white">
                    <div className="flex justify-between pb-2 px-2 border-b-2 border-gray-150 border-solid">
                        <h1 className="text-2xl font-bold">
                            <input name="title_of_post" className="bg-transparent outline-none" placeholder="Tên trọ" />
                        </h1>
                        <div className="flex justify-between w-1/5">
                            <div></div>
                            <ActionButton content="Đăng bài" bgColor="violet" type="submit" />
                        </div>
                    </div>
                    <div className="h-5/6 px-8 w-full">
                        <div>
                            <Images setImages={setImages} images={[]}>
                                <>
                                    <Images.List />
                                    <Images.Upload />
                                </>
                            </Images>
                        </div>
                        <div className="h-full flex justify-center pt-8">
                            <div className="w-4/5">
                                <AddInput name="address" placeholder="Địa chỉ" iconName={IconName.Location1} />
                                <div className="flex w-full">
                                    <AddInput type="number" name="rental_price" placeholder="Chi phí" iconName={IconName.Coin} />
                                    <AddInput type="number" name="room_area" placeholder="Diện tích phòng (m2)" iconName={IconName.Coin} />
                                </div>
                                <div className="flex p-2 w-full bg-gray-150/50 rounded-lg my-2">
                                    <Icons iconName={IconName.InfoCircle} stroke="#CCCCCC" strokeWidth="2" />
                                    <div className="ml-2 w-full">
                                        <textarea
                                            name="room_description"
                                            placeholder="Mô tả chi tiết"
                                            className="outline-none bg-transparent w-full resize-none"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AuthLayout>
    )
}