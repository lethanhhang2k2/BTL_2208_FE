import { MotelProperty } from "@AppTypes/motel";
import Icons, { IconName } from "@components/Icons";

interface IProps {
    motel: MotelProperty,
    isGrayColor?: boolean
}

export default function MotelCard({ motel, isGrayColor = false }: IProps) {
    return (
        <div className="relative z-10 h-full rounded-lg p-3">
            <p className={"text-2xl font-bold  truncate " + (isGrayColor ? "text-gray-600" : "text-white")}>{motel.title}</p>
            <div className="flex flex-col justify-between ml-3 mt-2">
                <div className="flex mb-1">
                    <Icons iconName={IconName.Location1} stroke={(isGrayColor ? "gray" : "white")} strokeWidth="2px" />
                    <p className={"ml-1 " + (isGrayColor ? "text-gray-400" : "text-white")}>{motel.address} </p>
                </div>
                <div className="flex mb-1">
                    <Icons iconName={IconName.Coin} stroke={(isGrayColor ? "gray" : "white")} strokeWidth="2px" />
                    <p className={"ml-1 " + (isGrayColor ? "text-gray-400" : "text-white")}> {motel.fee}</p>
                </div>
                <div className="flex mb-1">
                    <Icons iconName={IconName.InfoCircle} stroke={(isGrayColor ? "gray" : "white")} strokeWidth="2px" />
                    <p className={"ml-1 " + (isGrayColor ? "text-gray-400" : "text-white")}> {motel.description}</p>
                </div>
            </div>
        </div>
    )
}