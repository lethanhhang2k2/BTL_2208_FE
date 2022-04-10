import Logo from "../../components/Logo";
import QuickRedirect from "../../components/QuickRedirect";

export default function Login() {
    return (
        <div className="w-screen h-screen bg-[url('https://thumbs.dreamstime.com/b/silhouette-city-brown-color-68767629.jpg')] bg-cover">
            <div className="flex items-center justify-center h-screen">
                <div className="bg-white shadow-md w-4/5 h-4/5 rounded-lg grid grid-cols-6">
                    <div className="col-span-2 mx-16 my-8 relative">
                        <div className="flex justify-center">
                            <Logo size="64px" />
                        </div>
                        <p className="text-center pb-8"><b>Nền tảng tìm trọ tốt nhất cho sinh viên</b></p>
                        <p className="text-justify">Đăng ký ngay để cùng tham gia mạng lưới với hơn <b className="text-2xl">100.000</b> nhà cung cấp</p>
                        <div className="pt-16">
                            <button className="mb-2 flex w-full items-center border-2 border-solid border-gray-150 rounded-lg p-2 shadow-md">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
                                    width="40"
                                    height="40"
                                ></img>
                                <b className="ml-4">Sign in with Facebook</b>
                            </button>
                            <button className="flex w-full items-center border-2 border-solid border-gray-150 rounded-lg p-2 shadow-md">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
                                    width="40"
                                    height="40"
                                ></img>
                                <b className="ml-4">Sign in with Facebook</b>
                            </button>
                        </div>
                        <div className="absolute bottom-0 w-full">
                            <div className="flex justify-center">
                                <QuickRedirect />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 flex items-center pr-4">
                        <img
                            src="https://cdn.thehappystay.vn/thumb_xx368/upload/2019/09/21/hanoi-westlake-cozy-and-luxury-2-bedroom-violet-room666.jpg"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}