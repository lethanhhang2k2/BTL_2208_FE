import * as SWMIconPack from 'react-swm-icon-pack';
import IconButton from '../IconButton';

export default function Search() {
    return (
        <div className="bg-gray-150 h-[40px] w-[380px] rounded-md flex items-center">
            <div className="flex mx-[8px] justify-between w-full">
                <input
                    className="bg-transparent w-4/5 outline-0"
                    placeholder="Tìm trọ/ Khu vực/ Giá cả"
                />
                <IconButton>
                    <SWMIconPack.Filters3 color="#9F9F9F"/>
                </IconButton>
            </div>
        </div>
    )
}