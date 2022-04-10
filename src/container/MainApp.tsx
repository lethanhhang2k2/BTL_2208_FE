import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import NotFoundPage from "../routes/404pages";
import Login from "../routes/login";
import LoginTwo from "../routes/login2";
import NewFeed from "../routes/newfeed/index"
import TestSlide from "./TestSlide";

export default function MainApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NewFeed />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/login/2" element={<LoginTwo />}></Route>
                <Route path="*" element={<NotFoundPage />}></Route>
                <Route path="/test" element={<TestSlide />}></Route>
            </Routes>
        </BrowserRouter>
    )
}