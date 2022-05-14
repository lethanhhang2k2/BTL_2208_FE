import { Link } from "react-router-dom";

export default function IconButton({ children, path="", type="button", handleClick = () => {} }) {
    return (
        <div className="mx-[9px] cursor-pointer">
            <Link to={path} type={type} onClick={handleClick}>
                { children }
            </Link>
        </div>
    )
}