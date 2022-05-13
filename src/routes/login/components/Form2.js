import { UserRole } from "@AppTypes/user";
import Input from "@components/Form/Input";
import Switch from "@components/Form/Switch";
import UploadAvatar from "@components/Form/UploadAvatar";
import { UserContext } from "@hooks/UserManager";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { updateUserData, uploadImage } from "@api/user";
import { Navigate } from "react-router-dom";

export default function Form1() {
    const [isRedirectUrl, setIsRedirectUrl] = useState(false);
    const [redirectUrl, setRedirectUrl] = useState('');
    const { user } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()

        const avatar = e.target.avatar.files[0]
        const role = (e.target.role.checked) ? "renter" : "landlord";
        const username = e.target.username.value
        const password = e.target.password.value

        const data = {
            role,
            username,
            password
        }

        async function updateUser() {
            return new Promise((resolve, reject) => {
                Promise.all([uploadImage(avatar), updateUserData(data)])
                    .then(() => {
                        setIsRedirectUrl(true);
                        setRedirectUrl('/login/3');
                        resolve();
                    }).catch((error) => {
                        toast.error(error.message);
                        console.log(error);
                        reject(error);
                    });
            });
        }

        toast.promise(
            updateUser, {
            pending: 'Đang cập nhật',
            success: 'Cập nhật thành thành công',
            error: 'Cập nhật thất bại',
        }, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        console.log(data);
    }

    return (
        (isRedirectUrl)
            ? <Navigate to={redirectUrl} />
            : <form className="h-full flex flex-col justify-evenly items-center" onSubmit={handleSubmit}>
                <div className="flex flex-col items-center">
                    <UploadAvatar default_value={user.avtHref} />
                    <div className="form-item flex justify-center mt-3">
                        <label className="min-w-fit truncate font-bold text-gray-600">Chủ trọ</label>
                        <Switch name="role" value={user.role !== UserRole.LandLord} />
                        <label className="min-w-fit truncate font-bold text-gray-600">Thuê trọ</label>
                    </div>
                </div>
                <div className="w-full px-5">
                    <Input name="username" label="Username" placeholder="Aha move" value={user.username} onChange={() => { }} />
                    <Input name="password" label="Password" type="password" />
                    <Input name="re-password" label="Password" type="password" />
                </div>
                <div className="pt-2 flex justify-center">
                    <button
                        type="submit"
                        className="h-[48px] w-[120px] p-4 rounded-full bg-violet text-white
                     flex items-center justify-center transition ease-in-out duration-700 hover:bg-violet/80">
                        Lưu
                    </button>
                </div>
            </form>
    )
}