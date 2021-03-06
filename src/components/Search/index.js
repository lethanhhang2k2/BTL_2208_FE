import Icons, { IconName } from '../Icons';
import IconButton from '../IconButton';

export default function Search() {
    return (
        <div className="bg-gray-150 h-[40px] w-[380px] rounded-lg items-center ml-2 hidden sm:flex">
            <div className="flex mx-[8px] justify-between w-full">
                <input
                    className="bg-transparent w-4/5 outline-0"
                    placeholder="Tìm trọ / Khu vực / Giá cả"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            var text = e.target.value;
                            window.location.href = `/search?q=${text}`;
                        }                        
                    }}
                />
                <IconButton>
                    <Icons iconName={IconName.Filters3} stroke="#bbbbbb" />
                </IconButton>
            </div>
        </div>
    )
}