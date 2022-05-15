import Action from "../../components/Action";
import { ActionButton } from "../../components/Action/ActionButton";

const actions = [
    {
        content: "Từ chối",
        bgColor: "red"
    },
    {
        content: "Phê duyệt",
        bgColor: "violet"
    },
]

export default function ActionBar() {
    return (
        <div className="flex justify-between w-1/5">
            {actions.map(action => {
                return (
                   <ActionButton key={action.content} content={action.content} bgColor={action.bgColor} />
               )
           })}
        </div>
    )
}