import Icons, { IconName } from "@components/Icons";
import Action from "@components/Action";
import IconButton from "@components/IconButton";
import { toast } from "react-toastify";

export default function ActionAppHeader() {
    return (
        <Action>
            <IconButton href="/">
                <Icons iconName={IconName.Home2} />
            </IconButton>
            <IconButton onClick={() => { toast('🦄 Không có tin nhắn mới') }}>
                <Icons iconName={IconName.MessageCircleLines} />
            </IconButton>
            <IconButton href="/post">
                <Icons iconName={IconName.PlusCircle} />
            </IconButton>
            <IconButton onClick={() => { toast('🦄 Không có thông báo mới') }}>
                <Icons iconName={IconName.Bell} />
            </IconButton>
            <IconButton href="/explore">
                <Icons iconName={IconName.Explore} />
            </IconButton>
        </Action>
    )
}