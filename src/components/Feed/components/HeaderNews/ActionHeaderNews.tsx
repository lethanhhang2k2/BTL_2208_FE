import Icons, { IconName } from "@components/Icons";
import Action from "@components/Action";
import IconButton from "@components/IconButton";
import { useContext, useEffect, useState } from "react";
import { savePost, unsavePost } from "@api/post";
import { MotelProperty } from "@AppTypes/motel";
import { UserContext } from "@hooks/UserManager";

interface IActionHeaderNews {
    post?: MotelProperty,
    bookmark?: boolean
}

export default function ActionHeaderNews({ post, bookmark } : IActionHeaderNews) {
    const [isBookmarked, setBookmark] = useState(bookmark)
    const { user, setUser } = useContext(UserContext)

    const handleBookmark = () => {
        
        if (post) {
            setBookmark(!isBookmarked)

            if (!isBookmarked) {
                savePost(post.id)
                    .then(res => {
                        console.log(res.data)
                        
                    })
                    .catch(err => console.log(err))
                setUser({
                    ...user,
                    savedPosts: user.savedPosts?.concat(post.id)
                })
                console.log(user)
                    
            } else {
                unsavePost(post.id)
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err))
                
                if (user.savedPosts) {
                    const index = user.savedPosts.indexOf(post.id);
                
                    setUser({
                        ...user,
                        savedPosts: user.savedPosts?.splice(index, 1)
                    })
                }
            }
        }
    
    }

    return (
        <Action>
            <IconButton>
                <Icons iconName={IconName.MessageCircleLines} />
            </IconButton>
            <IconButton onClick={handleBookmark}>
                <Icons iconName={IconName.Bookmark} fill={isBookmarked ? "#001a72": "none"} />
            </IconButton>
            <IconButton>
                <Icons iconName={IconName.MenuHorizontal} />
            </IconButton>
        </Action>
    )
}