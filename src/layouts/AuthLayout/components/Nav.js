import Icons, { IconName } from "../../../components/Icons";
import qrcode from "../../../assets/images/qrcode.png";
import { Link } from "react-router-dom";

const path = [ "/nametag", "/quickcard", "/quickcard/edit"]

export default function Nav() {

    return (
        <div className="flex">
            <NavLink path="/nametag">
                <img src={qrcode} className="w-[28px] h-[28px]" />
            </NavLink>
            <NavLink path="/quickcard">
                <Icons iconName={IconName.Smartphone} width="28px" height="28px" stroke="white" />
            </NavLink>
            <NavLink path="/quickcard/edit">
                <Icons iconName={IconName.Edit3} width="28px" height="28px" stroke="white" />
            </NavLink>
        </div>
    )
}

function NavLink({ path, children }) {

    return (
        <Link to={path} className={`link-nav ${path === window.location.pathname ? "active" : ""}`}>
            {children}
        </Link>
    )
}