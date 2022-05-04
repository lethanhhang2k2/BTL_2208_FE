import { createContext, useEffect, useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import NotFoundPage from "../routes/404pages";
import Login from "../routes/login";
import LoginTwo from "../routes/login2";
import Nametag from "../routes/nametag";
import NewFeed from "../routes/newfeed/index"
import QuickCard from "../routes/quickcard";
import QuickCardEdit from "../routes/QuickCardEdit";
import TestSlide from "./TestSlide";

const UserContext = createContext(null);

export default function MainApp() {
    const [user, setUser] = useState(null)

    return (
        <UserContext.Provider value={user}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<NewFeed />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/login/2" element={<LoginTwo />}></Route>
                    <Route path="*" element={<NotFoundPage />}></Route>
                    <Route path="/test" element={<TestSlide />}></Route>
                    <Route path="/nametag" element={<Nametag />}></Route>
                    <Route path="/quickcard" element={<QuickCard />}></Route>
                    <Route path="/quickcard/edit" element={<QuickCardEdit />}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}