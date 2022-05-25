import React, { useEffect, useState } from "react";
import MotelCard from "@components/MotelCard";
import { MotelProperty, MotelExample } from "@AppTypes/motel"
import { ThemeColor, UserProperty } from "@AppTypes/user";
import Icons, { IconName } from "@components/Icons";
import { getUser, parseUser } from "@api/user";

interface MotelInfoProps {
    motel: MotelProperty
    theme?: string
}

export default function MotelInfo({ motel, theme }: MotelInfoProps) {
    const [ user, setUser ] = useState<UserProperty>()

    useEffect(() => {
        getUser(motel.owner)
            .then(res => setUser(parseUser(res.data.user)))
            .catch(err => console.log(err))
    })

        return (
            <div className={`flex flex-col justify-between h-full text-white z-10 relative before:content-[' '] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:object-cover before:rounded-lg before:opacity-40 before:-z-10 before:bg-[url('https://o.rada.vn/data/image/2020/02/25/adorable-home-bedroom-3.jpg')]`}>
                <MotelCard motel={motel} />
            </div>
        )
    }
