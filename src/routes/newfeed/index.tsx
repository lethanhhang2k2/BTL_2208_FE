import AppHeader from "../../layouts/AppHeader"
import Feed from "./Feed"
import Suggest from "./Suggest"

function NewFeed() {
    return (
        <>
            <AppHeader />
            <div className="py-[80px] flex justify-center">
                <div className="w-[932px] flex flex-row relative">
                    <div className="mr-[32px]">
                        <Feed />
                    </div>
                    <Suggest />
                </div>
            </div>
        </>
    )
}

export default NewFeed