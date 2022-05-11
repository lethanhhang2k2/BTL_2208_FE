import AuthLayout from "..";
import Nav from "./Nav";

export default function BgEditLayout({ user, backgroundColor, children }) {
    return (
        <AuthLayout
            displayAvt={true}
            user={user}
            sizeAvt="40px"
            contentWidth="4/5"
        >
            <div className="h-screen w-screen flex flex-col justify-between items-center fixed" style={{ backgroundColor: "black", background: backgroundColor }}>
                <div className="h-[16%] flex items-center w-full justify-end mr-[10%]">
                    <Nav />
                </div>
                <div className="h-[84%] flex justify-center pt-8 w-full">
                    { children }
                </div>
            </div> 
        </AuthLayout>
    )
}