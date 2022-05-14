import Icons, { IconName } from '../Icons';
import IconButton from '../IconButton';

export default function Search() {
    return (
        <div className="bg-gray-150 h-[40px] w-[380px] rounded-lg flex items-center">
            <div className="flex mx-[8px] justify-between w-full">
                <input
                    className="bg-transparent w-4/5 outline-0"
                    placeholder="Tìm trọ / Khu vực / Giá cả"
                />
                <IconButton>
                    <Icons iconName={IconName.Filters3} stroke="#bbbbbb" />
                </IconButton>
            </div>
        </div>
    )
}