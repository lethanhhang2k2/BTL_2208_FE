import QuickRedirect, { LinkObject } from "@components/QuickRedirect";
import User from "@components/User";
import { UserProperty, AvatarSize } from "@AppTypes/user";

interface ISuggestProps {
    user: UserProperty,
    suggestedOwners: UserProperty[]
}

const links: LinkObject[] = [
    { href: "#", text: "Điều khoản" },
    { href: "#", text: "Hướng dẫn" },
    { href: "#", text: "Top chủ trọ" },
    { href: "#", text: "Ngôn ngữ" },
];

export default function Suggest({ user, suggestedOwners }: ISuggestProps) {
    return (
        <div className="w-[324px] sticky top-[128px] h-fit lerf-[920px] right-0 hidden lg:block">
            <div className="h-[80px] mb-[20px]">
                <User user={user} sizeAvt={AvatarSize.Medium} showName={true} twoLine={true} />
            </div>

            <div className="mb-[20px] text-gray-500 font-semibold">
                Gợi ý chủ trọ
            </div>

            <div>
                {suggestedOwners.map(owner => {
                    return (
                        <div key={owner.id} className="mb-[20px] w-[100%] flex justify-between">
                            <User user={owner} sizeAvt={AvatarSize.SSmall} showName={false} twoLine={true} />
                            <button className="text-[#0E60FF] text-[14px]"> Follow </button>
                        </div>
                    )
                })}
            </div>

            <QuickRedirect link={links} />
        </div>
    )
}