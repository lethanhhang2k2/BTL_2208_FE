import { Link } from "react-router-dom";

export default function IconButton({ children, href = "", type = "button", className = "", onClick = () => { } }) {
    return (
        <div className={("mx-[9px] cursor-pointer ") + className} onClick={onClick}>
            {(href)
                ? <Link to={href} type={type} className="block">
                    {children}
                </Link>
                : children}
        </div>
    )
}