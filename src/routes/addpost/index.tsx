import { ActionButton } from "../../components/Action/ActionButton";
import AuthLayout from "../../layouts/AuthLayout";
import { UserExample } from "../../types/user";
import Images from "../../components/Images/Images";
import GuyCard from "../../components/GuyCard";
import Icons, { IconName } from "../../components/Icons";
import { MotelExample } from "@AppTypes/motel";
import React from "react";
import AddInput from "./AddInput";

export default function AddPost() {

    const handleUpPost = (e: React.SyntheticEvent) => {
        e.preventDefault()

        const target = e.target as typeof e.target & {
            img: FileList
        };

        console.log(target.img[0]);
    }

    return (
        <AuthLayout>
            <div className="w-full h-screen flex justify-center pt-8 fixed bg-gray-150">
                <form onSubmit={handleUpPost} className="w-4/5 h-5/6 p-4 shadow-md rounded-lg bg-white">
                    <div className="flex justify-between pb-2 px-2 border-b-2 border-gray-150 border-solid">
                        <h1 className="text-2xl font-bold">
                            <input name="name" className="bg-transparent outline-none" placeholder="Tên trọ" />
                        </h1>
                        <div className="flex justify-between w-1/5">
                            <div></div>
                            <ActionButton content="Đăng bài" bgColor="violet" type="submit" />
                        </div>
                    </div>
                    <div className="h-5/6 px-8 w-full">
                        <div>
                            <Images images={[]}>
                                <>
                                    <Images.List />
                                    <Images.Upload />
                                </>
                            </Images>
                        </div>
                        <div className="h-full flex justify-center pt-8">
                            <div className="w-4/5">
                                <AddInput name="address" placeholder="Địa chỉ" iconName={IconName.Location1} />
                                <AddInput name="fee" placeholder="Chi phí" iconName={IconName.Coin} />
                                <div className="flex p-2 w-full bg-gray-150/50 rounded-lg my-2">
                                    <Icons iconName={IconName.InfoCircle} stroke="#CCCCCC" strokeWidth="2" />
                                    <div className="ml-2 w-full">
                                        <textarea
                                            name="description"
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