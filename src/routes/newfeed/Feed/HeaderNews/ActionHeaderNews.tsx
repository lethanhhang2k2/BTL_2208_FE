import Icons, {IconName} from "../../../../components/Icons";
import Action from "../../../../components/Action";
import IconButton from "../../../../components/IconButton";

export default function ActionHeaderNews() {
    return (
        <Action>
            <IconButton>
                <Icons iconName={IconName.MessageCircleLines} color="white" />
            </IconButton>
            <IconButton>
                <Icons iconName={IconName.Bookmark} color="white" />
            </IconButton>
            <IconButton>
                <Icons iconName={IconName.MenuHorizontal} color="white" />
            </IconButton>
        </Action>
    )
}