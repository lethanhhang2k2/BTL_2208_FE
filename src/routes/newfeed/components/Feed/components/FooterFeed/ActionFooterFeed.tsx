import Icons, {IconName} from "@components/Icons";
import Action from "@components/Action";
import IconButton from "@components/IconButton";

export default function ActionFooterFeed() {
    return (
        <Action>
            <IconButton>
                <Icons iconName={IconName.MessageCircleLines} />
            </IconButton>
            <IconButton>
                <Icons iconName={IconName.Share1} />
            </IconButton>
        </Action>
    )
}