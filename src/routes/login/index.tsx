import { useState } from "react";
import { useGoogleAuth } from '@hooks/GoogleAuthProvider';
import { getVerifyToken } from '@api/auth';
import { Navigate } from "react-router-dom"
import Logo from "@components/Logo";
import QuickRedirect from "@components/QuickRedirect";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.scss";
import GG_Logo from "@images/gg.png"
import illus from "@images/login2.jpg"


export default function Login() {
    const [isRedirectUrl, setIsRedirectUrl] = useState(false);
    const [redirectUrl, setRedirectUrl] = useState('');
    const { isSignedIn, signIn, signOut } = useGoogleAuth();

    const processSignIn = async (token: string | undefined): Promise<void> => {
        return new Promise(async (resolve, reject) => {
            if (token) {
                const data = await getVerifyToken(token);
                if (!data || !data.is_correct) {
                    setIsRedirectUrl(false);
                    signOut();
                    reject();
                }
                else if (!data.enough_data) {
                    setIsRedirectUrl(true);
                    setRedirectUrl('/login/2');
                    resolve();
                }
                else {
                    setIsRedirectUrl(true);
                    setRedirectUrl('/');
                    resolve();
                }
            }
        });
    }

    const handleSignIn = async () => {
        const googleUser = await signIn();

        toast.promise(
            processSignIn(googleUser?.tokenId), {
            pending: 'Signing in...',
            success: 'Đăng nhập thành công',
            error: 'Đăng nhập thất bại',
        });
    }

    const handleSignOut = () => {
        signOut();
    }

    return (isRedirectUrl)
        ? <Navigate to={redirectUrl} />
        : <div className="w-screen h-screen bg-cover login-page">
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
                                {!isSignedIn
                                    ? <button
                                        className="flex justify-content-center w-full items-center border-2 border-solid border-gray-150 rounded-full p-2 text-ellipsis"
                                        onClick={handleSignIn}>
                                        <img
                                            src={GG_Logo}
                                            alt="google"
                                            width="32"
                                            height="32"
                                        ></img>
                                        <b className="ml-4 truncate">Sign in with Google</b>
                                    </button>
                                    : <div className="flex justify-center">
                                        <p className="font-semibold">Bạn đã đang nhập rồi!</p>
                                        <button className="mx-1 font-bold text-bgviolet underline" onClick={handleSignOut}>Logout</button>
                                    </div>}
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <QuickRedirect />
                        </div>
                    </div>

                    <div className="hidden md:flex col-auto md:col-span-3 xl:col-span-4 overflow-hidden rounded-2xl">
                        <img
                            src={illus}
                            alt="login-illus"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
}