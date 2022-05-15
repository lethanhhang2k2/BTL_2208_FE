import AuthLayout from "../index";
import Nav from "./Nav";

export default function BgEditLayout({ backgroundColor, children }) {
    return (
        <AuthLayout>
            <div className="min-h-screen w-full flex flex-col items-center fixed"
                style={{
                    backgroundColor: "black",
                    background: backgroundColor
                }}>
                <div className="h-20 flex items-center w-full justify-end mr-[10%]">
                    <Nav />
                </div>
                <div className="flex justify-center pt-8 w-full">
                    {children}
                </div>
            </div>
        </AuthLayout>
    )
}