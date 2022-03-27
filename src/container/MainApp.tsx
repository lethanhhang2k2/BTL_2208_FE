import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import NewFeed from "../routes/newfeed/index"
import TestSlide from "./TestSlide";

export default function MainApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NewFeed />}></Route>
                <Route path="/test" element={<TestSlide />}></Route>
            </Routes>
        </BrowserRouter>
    )
}