import * as SWMIconPack from "react-swm-icon-pack";
import Action from "../../components/Action";
import IconButton from "../../components/IconButton";

export default function ActionAppHeader() {
    return (
        <Action>
            <IconButton>
                <SWMIconPack.Home2 />
            </IconButton>
            <IconButton>
                <SWMIconPack.MessageCircleLines />
            </IconButton>
            <IconButton>
                <SWMIconPack.PlusCircle />
            </IconButton>
            <IconButton>
                <SWMIconPack.Explore />
            </IconButton>
            <IconButton>
                <SWMIconPack.Bell />
            </IconButton>
        </Action>
    )
}