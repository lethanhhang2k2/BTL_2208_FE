import React, { Suspense, createContext, useState, useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    useLocation
} from "react-router-dom";

import PrivateRoute from "@routes/Redirect/PrivateRoute";
import Loading from "@routes/Redirect/Components/Loading";
import Inbox from "@routes/inbox";

const NotFoundPage = React.lazy(() => import("@routes/404_page"));
const Login = React.lazy(() => import("@routes/login"));
const LoginTwo = React.lazy(() => import("@routes/login/pages/login2"));
const LoginThree = React.lazy(() => import("@routes/login/pages/login3"));

const Nametag = React.lazy(() => import("@routes/nametag"));
const NewFeed = React.lazy(() => import("@routes/newfeed/index"));
const QuickCard = React.lazy(() => import("@routes/quickcard"));
const QuickCardEdit = React.lazy(() => import("@routes/QuickCardEdit"));
const RequestPostDetail = React.lazy(() => import("@routes/requestpostdetail"))

function Wrapper() {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState("fadeIn");

    useEffect(() => {
        if (location !== displayLocation) setTransitionStage("fadeOut");
    }, [location]);

    return (
        <div
            className={`${transitionStage}`}
            onAnimationEnd={() => {
                if (transitionStage === "fadeOut") {
                    setTransitionStage("fadeIn");
                    setDisplayLocation(location);
                }
            }}>
            <Suspense fallback={<Loading />}>
                <Routes location={location}>
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/login"
                        element={<Login />} />

                    <Route path="/"
                        element={<PrivateRoute element={<NewFeed />} />} />
                    <Route path="/login/2"
                        element={<PrivateRoute element={<LoginTwo />} />} />
                    <Route path="/login/3"
                        element={<PrivateRoute element={<LoginThree />} />} />
                    <Route path="/nametag"
                        element={<PrivateRoute element={<Nametag />} />} />
                    <Route path="/quickcard"
                        element={<PrivateRoute element={<QuickCard />} />} />
                    <Route path="/quickcard/edit"
                        element={<PrivateRoute element={<QuickCardEdit />} />} />
                    <Route path="/request/detail"
                        element={<PrivateRoute element={<RequestPostDetail />} />} />
                    <Route path="/inbox"
                        element={<PrivateRoute element={<Inbox />} />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default function MainApp() {
    const UserContext = createContext({});
    const [user, setUser] = useState(null)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Wrapper />
            </BrowserRouter>
        </UserContext.Provider>
    )
}