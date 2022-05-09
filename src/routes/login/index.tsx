import React from "react";
import Logo from "../../components/Logo";
import QuickRedirect from "../../components/QuickRedirect";
import { useGoogleAuth } from '../../hook/GoogleAuthProvider';
import "./index.scss";
import { getVerifyToken } from '../../api/auth';

export default function Login() {
    const { signIn } = useGoogleAuth();

    const handleSignIn = async () => {
        const googleUser = await signIn();
        console.log(googleUser);
        if (googleUser?.tokenId) {
            await getVerifyToken(googleUser.tokenId);
        }
    }
    return (
        <div className="w-screen h-screen bg-cover login-page">
            <div className="flex items-center justify-center h-screen">
                <div className="bg-white shadow-md rounded-3xl grid grid-cols-6 p-3 w-5/6 ss:w-4/5 3xl:w-3/5 h-3/5">
                    <div className="col-span-6 md:col-span-3 xl:col-span-2 mx-10 my-2 flex flex-col justify-between">
                        <div>
                            <div>
                                <div className="flex justify-center">
                                    <Logo size="64px" />
                                </div>
                                <p className="text-center pb-8"><b>Nền tảng tìm trọ cho sinh viên</b></p>
                                <p className="text-center xl:text-justify">Đăng ký ngay để cùng tham gia mạng lưới với hơn <b className="text-2xl">100.000</b> nhà cung cấp</p>
                            </div>

                            <div className="pt-5 sm:pt-16">
                                <button className="flex justify-content-center w-full items-center border-2 border-solid border-gray-150 rounded-full p-2 text-ellipsis" onClick={handleSignIn}>
                                    <img
                                        src="./images/gg.png"
                                        alt="google"
                                        width="32"
                                        height="32"
                                    ></img>
                                    <b className="ml-4 truncate">Sign in with Google</b>
                                </button>
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <QuickRedirect />
                        </div>
                    </div>

                    <div className="hidden md:flex col-auto md:col-span-3 xl:col-span-4 overflow-hidden rounded-2xl shadow-md">
                        <img
                            src="./images/login-illus.png"
                            alt="login-illus"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}