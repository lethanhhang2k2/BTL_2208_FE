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
            <IconButton href="/inbox" onClick={() => { toast('🦄 Không có tin nhắn mới') }}>
                <Icons iconName={IconName.MessageCircleLines} />
            </IconButton>
            <IconButton href="/create-post/">
                <Icons iconName={IconName.PlusCircle} />
            </IconButton>
            <IconButton onClick={() => { toast('🦄 Không có thông báo mới') }}>
                <Icons iconName={IconName.Bell} />
            </IconButton>
            <IconButton onClick={()=>{toast('Hiện tính năng hoàn hảo này chưa khả dụng')}}>
                <Icons iconName={IconName.Explore} />
            </IconButton>
        </Action>
    )
}