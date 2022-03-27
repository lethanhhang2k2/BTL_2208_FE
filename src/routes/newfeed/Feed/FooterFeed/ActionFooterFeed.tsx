import * as SWMIconPack from "react-swm-icon-pack";
import Action from "../../../../components/Action";
import IconButton from "../../../../components/IconButton";

export default function ActionFooterFeed() {
    return (
        <Action>
            <IconButton>
                <SWMIconPack.MessageCircleLines />
            </IconButton>
            <IconButton>
                <SWMIconPack.Share1 />
            </IconButton>
        </Action>
    )
}