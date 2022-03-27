import * as SWMIconPack from "react-swm-icon-pack";
import Action from "../../../../components/Action";
import IconButton from "../../../../components/IconButton";

export default function ActionHeaderNews() {
    return (
        <Action>
            <IconButton>
                <SWMIconPack.MessageCircleLines />
            </IconButton>
            <IconButton>
                <SWMIconPack.Bookmark />
            </IconButton>
            <IconButton>
                <SWMIconPack.MenuHorizontal />
            </IconButton>
        </Action>
    )
}