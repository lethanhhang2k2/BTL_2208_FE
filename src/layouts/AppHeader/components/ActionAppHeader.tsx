import Icons, { IconName } from "@components/Icons";
import Action from "@components/Action";
import IconButton from "@components/IconButton";

export default function ActionAppHeader() {
    return (
        <Action>
            <IconButton>
                <Icons iconName={IconName.Home2}/>
            </IconButton>
            <IconButton>
                <Icons iconName={IconName.MessageCircleLines} />
            </IconButton>
            <IconButton>
                <Icons iconName={IconName.PlusCircle} />
            </IconButton>
            <IconButton>
                <Icons iconName={IconName.Bell} />
            </IconButton>
            <IconButton>
                <Icons iconName={IconName.Explore} />
            </IconButton>
        </Action>
    )
}