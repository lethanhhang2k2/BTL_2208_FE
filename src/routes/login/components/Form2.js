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
        const name = e.target.name.value
        const phone = e.target.telephone_number.value
        const address = e.target.address.value

        const data = {
            role,
            username,
            given_name: name,
            phone,
            address,
        }

        async function checkValid(data) {
            return new Promise((resolve, reject) => {
                if (data.username.trim() === '' || data.given_name.trim() === '' || data.phone.trim() === '') {
                    reject('Please fill all the fields')
                } else resolve();
            });
        }

        async function updateUser() {
            return new Promise((resolve, reject) => {
                checkValid(data)
                    .then(() => {
                        Promise.all([uploadImage(avatar), updateUserData(data)])
                            .then(() => {
                                setIsRedirectUrl(true);
                                setRedirectUrl('/');
                                resolve();
                            })
                    })
                    .catch((error) => {
                        toast.error(error.message);
                        console.log(error);
                        reject(error);
                    })
            });
        }

        toast.promise(
            updateUser, {
            pending: '??ang c???p nh???t',
            success: 'C???p nh???t th??nh th??nh c??ng',
            error: 'C???p nh???t th???t b???i',
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
                        <label className="min-w-fit truncate font-bold text-gray-600">Ch??? tr???</label>
                        <Switch name="role" value={user.role !== UserRole.LandLord} />
                        <label className="min-w-fit truncate font-bold text-gray-600">Thu?? tr???</label>
                    </div>
                </div>
                <div className="w-full px-4">
                    <Input name="username" label="Username" placeholder="Aha move" value={user.username} required />
                    <Input name="name" label="T??n" placeholder="Nguyen Van A" required value={user.name} />
                    <Input name="email" label="Email" placeholder="nva@gmail.com" value={user.email} disable />
                    <Input name="telephone_number" label="S??T" placeholder="+84123456789" required value={user.phone} />
                    <Input name="address" label="?????a ch???" placeholder="H?? N???i" value={user.address} />
                    <i>C??c m???c ????nh d???u <span className="text-red-500">*</span> l?? bu???c ph???i ??i???n</i>
                </div>
                <div className="pt-2 flex justify-center">
                    <button
                        type="submit"
                        className="h-[48px] w-[120px] p-4 rounded-full bg-violet text-white
                     flex items-center justify-center transition ease-in-out duration-700 hover:bg-violet/80">
                        L??u
                    </button>
                </div>
            </form>
    )
}