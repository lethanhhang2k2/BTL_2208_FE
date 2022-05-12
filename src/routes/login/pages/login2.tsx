import login_illus_1 from "@images/login-illus-1.jpg";
import Logo from "@components/Logo";
import QuickRedirect from "@components/QuickRedirect";
import Form2 from "../components/Form2";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../index.scss";

export default function LoginTwo() {
    return (
        <div className="w-screen h-screen bg-cover login-page">
             <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="flex items-center justify-center h-screen">
                <div className="bg-white shadow-md rounded-3xl grid grid-cols-5 p-4 w-5/6 ss:w-4/5 3xl:w-3/5 h-4/5">
                    <div className="hidden lg:flex lg:flex-col col-span-3 mx-16 my-8 justify-between">
                        <div className="flex justify-center">
                            <Logo size="48px" />
                        </div>
                        <p className="text-center pb-8"><b>Nền tảng tìm trọ tốt nhất cho sinh viên</b></p>
                        <div className="flex justify-center">
                            <p className="text-justify w-4/5">Đăng ký ngay để cùng tham gia mạng lưới với hơn <b className="text-2xl">100.000</b> nhà cung cấp</p>
                        </div>
                        <div className="h-1/2">
                            <img src={login_illus_1} className="h-full w-auto" alt="illus" />
                        </div>
                        <div className="w-full flex justify-center">
                            <QuickRedirect />
                        </div>
                    </div>
                    <div className="col-span-5 bg-gray-50 lg:col-span-2 rounded-xl shadow-lg">
                        <Form2 />
                    </div>
                </div>
            </div>
        </div>
    )
}