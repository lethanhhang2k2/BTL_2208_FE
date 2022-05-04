import * as SWMIconPack from "react-swm-icon-pack";

export default function ThingCard({ motel = {
    name: "Chung cư mini tại cầu giấy",
    owner: "Toro Toro",
    address: "Mai Dịch",
    fee: "2tr",
    describe: "Gần ĐHQG.",
    illuHref: "https://o.rada.vn/data/image/2020/02/25/adorable-home-bedroom-3.jpg",
    status: "Đã phê duyệt"
} }) {
    return (
        <div className="bg-white w-[320px] p-2 rounded-lg relative">
            <div>
                <img src={motel.illuHref} className="rounded-lg h-2/3 w-full object-cover" />
            </div>
            <div className="flex justify-end -mt-[16px]">
                <div className="flex mr-2 text-green bg-bggreen px-2 rounded-full text-[12px] h-[32px] font-bold w-2/5 items-center justify-center">{motel.status}</div>
            </div>
            <div className="px-2 absolute bottom-2">
                <div className="text-[20px] font-bold">{motel.name}</div>
                <div className="flex flex-col justify-between text-gray-160">
                    <div className="flex">
                        <SWMIconPack.User1 color="#CCCCCC" />
                        {motel.owner}
                    </div>
                    <div className="flex w-3/5 justify-between">
                        <div className="flex">
                            <SWMIconPack.Location1 color="#CCCCCC" />
                            {motel.address}
                        </div>
                        <div className="flex">
                            <SWMIconPack.Coin color="#CCCCCC" />
                            {motel.fee}
                        </div>
                    </div>
                    <div className="flex">
                        <SWMIconPack.InfoCircle color="#CCCCCC" />
                        {motel.describe}
                    </div>
                </div>
            </div>
        </div>
    )
}