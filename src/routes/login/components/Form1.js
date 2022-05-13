import { AvatarSize } from "@AppTypes/user";
import Avatar from "@components/Avatar";
import Input from "@components/Form/Input";
import { Navigate } from "react-router-dom";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { updateUserData } from "@api/user";
import { UserContext } from "@hooks/UserManager";

export default function Form1() {
    const [isRedirectUrl, setIsRedirectUrl] = useState(false);
    const [redirectUrl, setRedirectUrl] = useState('');
    const { user } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const phone = e.target.telephone_number.value
        const address = e.target.address.value

        const data = {
            given_name: name,
            phone,
            address
        }

        async function updateUser() {
            return new Promise((resolve, reject) => {
                Promise.all([updateUserData(data)])
                    .then(() => {
                        setIsRedirectUrl(true);
                        setRedirectUrl('/');
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

    }

    return (
        (isRedirectUrl)
            ? <Navigate to={redirectUrl} />
            : <form className="h-full flex flex-col justify-evenly items-center" onSubmit={handleSubmit}>
                <Avatar user={user} size={AvatarSize.XLarge} />

                <div className="w-full px-5">
                    <Input name="name" label="Tên" placeholder="Nguyen Van A" required value={user.name} />
                    <Input name="email" label="Email" placeholder="nva@gmail.com" value={user.email} disable />
                    <Input name="telephone_number" label="SĐT" placeholder="+84123456789" required value={user.phone} />
                    <Input name="address" label="Địa chỉ" placeholder="Hà Nội" value={user.address} />
                    <i>Các mục đánh dấu <span className="text-red-500">*</span> là buộc phải điền</i>
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