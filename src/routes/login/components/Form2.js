import Input from "@components/Form/Input";
import Switch from "@components/Form/Switch";
import UploadAvatar from "@components/Form/UploadAvatar";

export default function Form1() {
    const handleSubmit = (e) => {
        e.preventDefault()

        const avatar = e.target.avatar.files[0]
        const role = e.target.role.checked
        const username = e.target.username.value
        const password = e.target.password.value

        const data = {
            avatar,
            role,
            username,
            password
        }

        console.log(data);
    }

    return (
        <form className="h-full flex flex-col justify-evenly items-center" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center">
                <UploadAvatar />
                <div className="form-item flex justify-center mt-3">
                    <label className="min-w-fit truncate font-bold text-gray-600">Chủ trọ</label>
                    <Switch name="role" />
                    <label className="min-w-fit truncate font-bold text-gray-600">Thuê trọ</label>
                </div>
            </div>
            <div className="w-full px-5">
                <Input name="name" label="Username" placeholder="Aha move" />
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