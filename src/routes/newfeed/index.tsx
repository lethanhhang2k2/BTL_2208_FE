
import { memo, useEffect, useState, useContext } from "react"
import AuthLayout from "@layouts/AuthLayout"
import { UserExample } from "../../types/user"
import Feed from "../../components/Feed"
import Suggest from "./components/Suggest"
import { getAllPosts, parsePost } from "@api/post"
import { UserContext } from "@hooks/UserManager"

function NewFeed() {
    const [feeds, setFeeds] = useState<any[]>([])
    const { user } = useContext(UserContext)
    useEffect(() => {
        getAllPosts()
            .then(res => {
                console.log(res.data)
                const data = res.data
                const posts = data.posts.map((post: any) => {
                    return parsePost(post)
                })
                console.log(posts)
                setFeeds(posts)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <AuthLayout>
            <div className="pt-16 flex justify-center">
                <div className="max-w-[935px] w-full flex flex-row justify-center relative">
                    <div className="mr-0 lg:mr-[32px] max-w-[596px] w-full">
                        {feeds && feeds.map(feed => {
                            console.log(feed)
                            return (<Feed key={feed.id} data={feed} isShowFullComment />)
                        })}
                    </div>

                    <Suggest
                        user={user}
                        suggestedOwners={[UserExample, UserExample]}
                    />
                </div>
            </div>
        </AuthLayout>
    );
}

export default memo(NewFeed)