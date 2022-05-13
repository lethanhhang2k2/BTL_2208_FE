import Icons, { IconName } from "@components/Icons";
import Action from "@components/Action";
import IconButton from "@components/IconButton";
import { toast } from "react-toastify";

export default function ActionFooterFeed() {
    return (
        <Action>
            <IconButton onClick={() => { toast("Tính năng đang phát triển") }}>
                <Icons iconName={IconName.Share1} />
            </IconButton>
        </Action>
    )
}