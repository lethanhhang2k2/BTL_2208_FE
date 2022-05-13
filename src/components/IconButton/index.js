export default function IconButton({ children, ...props }) {
    const { href, onClick } = props;
    return (
        href
            ? <a href={href}>{children}</a>
            : <div className="mx-[9px] cursor-pointer" onClick={onClick}>
                {children}
            </div>
    )
}