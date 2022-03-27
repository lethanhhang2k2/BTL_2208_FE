import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import NewFeed from "../routes/newfeed/index"

export default function MainApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NewFeed />}></Route>
            </Routes>
        </BrowserRouter>
    )
}