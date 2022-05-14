import Icons, { IconName } from "@components/Icons";
import Action from "@components/Action";
import IconButton from "@components/IconButton";

export default function ActionHeaderNews() {
    return (
        <Action>
            <IconButton>
                <Icons iconName={IconName.MessageCircleLines} />
            </IconButton>
            <IconButton>
                <Icons iconName={IconName.Bookmark} />
            </IconButton>
            <IconButton>
                <Icons iconName={IconName.MenuHorizontal} />
            </IconButton>
        </Action>
    )
}