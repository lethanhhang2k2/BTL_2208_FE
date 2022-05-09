import User from "../../components/User";
import { UserProperty, AvatarSize } from "../../types/user";

interface ISuggestProps {
    user: UserProperty,
    suggestedOwners: UserProperty[]
}

export default function Suggest({ user, suggestedOwners }: ISuggestProps) {
    return (
        <div className="w-[324px] sticky top-[80px] h-fit lerf-[920px] right-0">
            <div className="h-[80px] mb-[20px]">
                <User user={user} sizeAvt={AvatarSize.Large} showName={true} twoLine={true} />
            </div>
            <div className="mb-[20px]">
                Gợi ý chủ trọ
            </div>
            <div>
                {suggestedOwners.map(owner => {
                    return (
                        <div key={owner.id} className="mb-[20px] w-[100%] flex justify-between">
                            <User user={owner} sizeAvt={AvatarSize.Small} showName={false} twoLine={true} />
                            <button className="text-[#0E60FF]">
                                Follow
                            </button>
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-between text-gray-160 text-[14px]">
                <button>Điều khoản</button>
                <p> · </p>
                <button>Hướng dẫn</button>
                <p> · </p>
                <button>Top chủ trọ</button>
                <p> · </p>
                <button>Ngôn ngữ</button>
            </div>
        </div>
    )
}