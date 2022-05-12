export interface LinkObject {
    href: string;
    text: string;
    separator?: string;
}

const defaultValue: LinkObject[] = [
    { href: "#", text: "Điều khoản" },
    { href: "#", text: "Nhóm" },
    { href: "#", text: "Tiro" }
];

export default function QuickRedirect({ link = defaultValue }: { link?: LinkObject[] }) {
    return (
        <div className="text-gray-400 flex flex-wrap justify-center">
            {link.map((item, index) => {
                return (
                    <div key={index} className="flex items-center">
                        <a href={item.href} className="text-gray-400 text-[14px] ">
                            {item.text}
                        </a>
                        {(index != link.length - 1) && <span className="mx-2">{item.separator || " · "}</span>}
                    </div>
                );
            })}
        </div>
    )
}