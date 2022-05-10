import login_illus_2 from "@images/login-illus-2.png";
import Logo from "@components/Logo";
import QuickRedirect from "@components/QuickRedirect";
import Form1 from "../components/Form1";
import "../index.scss";

export default function LoginThree() {
    return (
        <div className="w-screen h-screen bg-cover login-page">
            <div className="flex items-center justify-center h-screen">
                <div className="bg-white shadow-md rounded-3xl grid grid-cols-2 p-3 w-5/6 ss:w-4/5 3xl:w-3/5 h-4/5">
                    <div className="hidden lg:flex lg:flex-col col-span-1 mx-16 my-8 justify-between">
                        <div className="flex justify-center">
                            <Logo size="48px" />
                        </div>
                        <p className="text-center pb-8"><b>Nền tảng tìm trọ tốt nhất cho sinh viên</b></p>
                        <div className="flex justify-center">
                            <p className="text-justify w-4/5">Đăng ký ngay để cùng tham gia mạng lưới với hơn <b className="text-2xl">100.000</b> nhà cung cấp</p>
                        </div>
                        <div className="h-1/2">
                            <img src={login_illus_2} className="h-full w-auto" alt="illus" />
                        </div>
                        <div className="w-full flex justify-center">
                            <QuickRedirect />
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <Form1 />
                    </div>
                </div>
            </div>
        </div>
    )
}