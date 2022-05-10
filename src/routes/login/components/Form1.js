import { AvatarSize, UserExample } from "@AppTypes/user";
import Avatar from "@components/Avatar";
import Input from "@components/Form/Input";

export default function Form1() {
    const handleSubmit = (e) => {
        e.preventDefault()

        const avatar = e.target.avatar.files[0]
        const role = e.target.role.checked
        const name = e.target.name.value
        const email = e.target.email.value
        const telephone_number = e.target.telephone_number.value
        const address = e.target.address.value

        const data = {
            avatar,
            role,
            name,
            email,
            telephone_number,
            address
        }

        console.log(data);
    }

    return (
        <form className="h-full flex flex-col justify-evenly items-center" onSubmit={handleSubmit}>
            <Avatar user={UserExample} size = {AvatarSize.XLarge}/>

            <div className="w-full px-5">
                <Input name="name" label="Tên" placeholder="Nguyen Van A" required/>
                <Input name="email" label="Email" placeholder="nva@gmail.com" disable/>
                <Input name="telephone_number" label="SĐT" placeholder="+84123456789" required />
                <Input name="address" label="Địa chỉ" placeholder="Hà Nội" />
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