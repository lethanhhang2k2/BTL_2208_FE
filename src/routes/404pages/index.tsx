import { useNavigate } from "react-router-dom"

export default function NotFoundPage() {
    const navigate = useNavigate()

    const handleGoHome = () => {
        navigate("/")
    }

    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <div className="w-fit">
                    <div className="flex justify-center">
                        404
                    </div>
                    <button onClick={handleGoHome} className="h-[48px] w-[120px] p-4 rounded-full bg-violet text-white flex items-center transition ease-in-out duration-700 hover:bg-violet/80">Go Home</button>
                </div>
            </div>
        </div>
    )
}