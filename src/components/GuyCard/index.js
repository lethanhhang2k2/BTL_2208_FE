import Avatar from "../Avatar";
import User from "../User";
import ContactBar from "./ContactBar";
import MotelInfo from "./MotelInfo";
import theme from "../../assets/theme";

export default function GuyCard({ user = {
    id: 111,
    username: "haha",
    theme: "red",
    avtHref: "https://i.pinimg.com/736x/42/75/aa/4275aa3edb74bde2df465ac939560fca.jpg",
    distance: 3.9,
    address: "Thanh Xuan",
    role: "Chủ trọ"
} }) {
    return (
        <div className="h-3/4 w-[320px] bg-white rounded-lg p-2">
            <div className="h-1/3">
                <img
                    src="https://docs.microsoft.com/en-us/windows/apps/design/controls/images/image-licorice.jpg"
                    className="object-cover h-full w-full rounded-lg"
                />
            </div>
            <div className="h-1/4 flex flex-col justify-between">
                <div className="-mt-[12px]">
                    <User user={user} sizeAvt="60px" twoLine={true} showRole={true} border={true} />
                </div>
                <div className="flex justify-center mb-4">
                    <ContactBar />
                </div>
            </div>
            <div className="h-2/5 rounded-lg" style={{ background: theme[user.theme] }}>
                <MotelInfo />
            </div>
        </div>
    )
}