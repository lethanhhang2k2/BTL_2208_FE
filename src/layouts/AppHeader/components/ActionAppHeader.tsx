import Icons, { IconName } from "@components/Icons";
import Action from "@components/Action";
import IconButton from "@components/IconButton";

export default function ActionAppHeader() {
    return (
        <Action>
            <IconButton path="/">
                <Icons iconName={IconName.Home2}/>
            </IconButton>
            <IconButton path="/inbox">
                <Icons iconName={IconName.MessageCircleLines} />
            </IconButton>
            <IconButton path="">
                <Icons iconName={IconName.PlusCircle} />
            </IconButton>
            <IconButton path="">
                <Icons iconName={IconName.Bell} />
            </IconButton>
            <IconButton path="">
                <Icons iconName={IconName.Explore} />
            </IconButton>
        </Action>
    )
}