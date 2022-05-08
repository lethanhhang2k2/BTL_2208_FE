import login2 from "../../assets/images/login2.jpg";
import Logo from "../../components/Logo";
import QuickRedirect from "../../components/QuickRedirect";
import UpdateInfoForm from "./UpdateInfoForm";

export default function LoginTwo() {
    return (
        <div className="w-screen h-screen bg-[url('https://thumbs.dreamstime.com/b/silhouette-city-brown-color-68767629.jpg')] bg-cover">
            <div className="flex items-center justify-center h-screen">
                <div className="bg-white shadow-md w-4/5 h-4/5 rounded-lg grid grid-cols-2">
                    <div className="col-span-1 mx-16 my-8 relative">
                        <div className="flex justify-center">
                            <Logo size="64px" />
                        </div>
                        <p className="text-center pb-8"><b>Nền tảng tìm trọ tốt nhất cho sinh viên</b></p>
                        <div className="flex justify-center">
                            <p className="text-justify w-4/5">Đăng ký ngay để cùng tham gia mạng lưới với hơn <b className="text-2xl">100.000</b> nhà cung cấp</p>
                        </div>
                        <div className="h-1/2">
                            <img src={login2} className="h-full w-auto" />
                        </div>
                        <div className="absolute bottom-0 w-full">
                            <div className="flex justify-center">
                                <QuickRedirect />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <UpdateInfoForm />
                    </div>
                </div>
            </div>
        </div>
    )
}