import * as SWMIconPack from "react-swm-icon-pack";

export default function MotelInfo({ motel = {
    name: "Chung cư mini tại cầu giấy",
    owner: "Toro Toro",
    address: "Mai Dịch",
    fee: "2tr",
    describe: "Gần ĐHQG.",
    illuHref: "https://o.rada.vn/data/image/2020/02/25/adorable-home-bedroom-3.jpg"
} }) {
    return (
        <div className={`p-4 flex flex-col justify-between h-full text-white z-10 relative before:content-[' '] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:object-cover before:rounded-lg before:opacity-40 before:-z-10 before:bg-[url('https://o.rada.vn/data/image/2020/02/25/adorable-home-bedroom-3.jpg')]`}>
            <p className="h-1/4 text-[20px] font-bold">{motel.name}</p>
            <div className="h-2/3 flex flex-col justify-between">
                <div className="flex">
                    <SWMIconPack.User1 color="white" />
                    {motel.owner}
                </div>
                <div className="flex w-3/5 justify-between">
                    <div className="flex">
                        <SWMIconPack.Location1 color="white" />
                        {motel.address}
                    </div>
                    <div className="flex">
                        <SWMIconPack.Coin color="white" />
                        {motel.fee}
                    </div>
                </div>
                <div className="flex">
                    <SWMIconPack.InfoCircle color="white" />
                    {motel.describe}
                </div>
            </div>
        </div>
    )
}