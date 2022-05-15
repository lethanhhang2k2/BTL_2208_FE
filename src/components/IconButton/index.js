import { Link } from "react-router-dom";

export default function IconButton({ children, href="", type="button", onClick = () => {} }) {
    return (
        <div className="mx-[9px] cursor-pointer">
            <Link to={href} type={type} onClick={onClick}>
                { children }
            </Link>
        </div>
    )
}