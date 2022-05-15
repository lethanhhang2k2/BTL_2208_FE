import { useNavigate } from "react-router-dom"
import page_not_found_img from "@images/not-found.png";

export default function NotFoundPage() {
    const navigate = useNavigate()

    const handleGoHome = () => {
        navigate("/")
    }

    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <div className="w-fit flex flex-col items-center">
                    <img src={page_not_found_img} alt="page-not-found"/>
                    <button 
                    onClick={handleGoHome} 
                    className="h-[48px] w-[120px] p-4 mt-10 rounded-full bg-violet text-white flex items-center transition ease-in-out duration-700 hover:bg-violet/80">Go Home</button>
                </div>
            </div>
        </div>
    )
}