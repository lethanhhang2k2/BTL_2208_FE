import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import { MotelExample } from "../../types/motel";
import { UserExample } from "../../types/user";
import ActionBar from "./ActionBar";
import Images from "../../components/Images/Images";
import GuyCard from "../../components/GuyCard";
import Icons, { IconName } from "../../components/Icons";

export default function RequestPostDetail() {
    const [motel, setMotel] = useState(MotelExample)
    const motelId = useParams()

    useEffect(() => {

    }, [])

    return (
        <AuthLayout>
            <div className="w-screen h-screen flex justify-center pt-8 fixed bg-gray-150">
                <div className="w-4/5 h-5/6 p-4 shadow-md rounded-lg bg-white">
                    <div className="flex justify-between pb-2 px-2 border-b-2 border-gray-150 border-solid">
                        <h1 className="text-2xl font-bold">{motel.title}</h1>
                        <ActionBar />
                    </div>
                    <div className="h-5/6">
                        <div>
                            <Images images={motel.images}>
                                <>
                                    <Images.List />
                                </>
                            </Images>
                        </div>
                        <div className="h-full flex justify-between">
                            <div className="h-full w-1/3">
                                <GuyCard user={UserExample} quickCard={false} />
                            </div>
                            <div className="w-3/5">
                                <div className="flex">
                                    <Icons iconName={IconName.Location1} color="white" />
                                    <div className="ml-2">{motel.address}</div>
                                </div>
                                <div className="flex">
                                    <Icons iconName={IconName.Coin} color="white" />
                                    <div className="ml-2">{motel.fee}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}