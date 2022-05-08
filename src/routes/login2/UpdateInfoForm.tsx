import { useNavigate } from "react-router-dom";
import React from "react";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Switch from "../../components/Switch";
import UploadAvatar from "../../components/UploadAvatar";

export default function UpdateInfoForm() {
    const navigate = useNavigate()

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()

        const target = e.target as typeof e.target & {
            avatar: { files: FileList };
            role: { checked: boolean };
            name: { value: string };
            email: { value: string };
            telephone_number: { value: string };
            address: { value: string }
        };

        const avatar = target.avatar.files[0]
        const role = target.role.checked
        const name = target.name.value
        const email = target.email.value
        const telephone_number = target.telephone_number.value
        const address = target.address.value

        const data = {
            avatar,
            role,
            name,
            email,
            telephone_number,
            address
        }

        console.log(data);
        
        navigate("/")
    }

    return (
        <form className="w-4/5" onSubmit={(e: React.SyntheticEvent) => handleSubmit(e)}>
            <div className="flex justify-center pb-8">
                <UploadAvatar />
            </div>
            <div className="form-item">
                <label>Chủ trọ</label>
                <Switch name="role" />
                <label>Thuê trọ</label>
            </div>
            <div className="form-item">
                <Label forInput="name">Tên</Label>
                <Input name="name" />
            </div>
            <div className="form-item">
                <Label forInput="email">Email</Label>
                <Input name="email" />
            </div>
            <div className="form-item">
                <Label forInput="telephone_number">SĐT</Label>
                <Input name="telephone_number" />
            </div>
            <div className="form-item">
                <Label forInput="address">Địa chỉ</Label>
                <Input name="address" />
            </div>
            <div className="pt-2 flex justify-center">
                <button
                    type="submit"
                    className="h-[48px] w-[120px] p-4 rounded-full bg-violet text-white flex items-center justify-center transition ease-in-out duration-700 hover:bg-violet/80"
                >
                    Lưu
                </button>
            </div>
        </form>
    )
}