import User from "../../../../components/User";
import ActionHeaderNews from "./ActionHeaderNews";

interface IHeaderNews {
    user: object
}

export default function HeaderNews({ user }: IHeaderNews) {
    return (
        <div className="py-4 flex justify-center">
            <div className="flex w-[560px] justify-between">
                <div className="w-[400px]">
                    <User
                        user={user}
                        sizeAvt="32px"
                    />
                </div>
                <ActionHeaderNews />
            </div>
        </div>
    )
}