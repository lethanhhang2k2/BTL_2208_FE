import User from "@components/User";
import ContactBar from "./ContactBar";
import MotelInfo from "./MotelInfo";
import { AvatarSize, UserExample, UserProperty } from "@AppTypes/user";
import { MotelExample } from "@AppTypes/motel";

interface IGuyCard {
    user: UserProperty,
    quickCard: boolean
}

export default function GuyCard({ user = UserExample, quickCard = true }: IGuyCard) {
    return (
        <div className="h-4/5 w-[320px] bg-white rounded-lg p-2 shadow-md relative justify-between flex flex-col">
            <div className="h-1/3">
                <img
                    src="https://docs.microsoft.com/en-us/windows/apps/design/controls/images/image-licorice.jpg"
                    className="object-cover h-full w-full rounded-lg"
                />
            </div>
            <div className="h-1/4 flex flex-col justify-between">
                <div className="-mt-[12px] mb-2">
                    <User
                        user={user}
                        sizeAvt={AvatarSize.Medium}
                        border={true}
                        showRole={true}
                        twoLine={true}
                    />
                </div>
                <div className="flex justify-center mb-4">
                    <ContactBar />
                </div>
            </div>
            {quickCard ? (
                <div className="h-2/5 rounded-lg" style={{ background: user.theme }}>
                    <MotelInfo motel={MotelExample} />
                </div>
            ) : (
                <div className="flex w-full justify-evenly text-[20px] text-gray-160 h-2/5 items-center">
                    <div className="bg-gray-160/20 rounded-lg w-[100px] h-[100px] flex flex-col justify-center items-center">
                        <div>{user.posts}</div>
                        <div>Posts</div>
                    </div>
                    <div className="bg-gray-160/20 rounded-lg w-[100px] h-[100px] flex flex-col justify-center items-center">
                        <div>{ }</div>
                        <div>Pending</div>
                    </div>
                </div>
            )}
        </div>
    );
}