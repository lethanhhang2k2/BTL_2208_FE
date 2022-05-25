import React, { Suspense, useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation
} from "react-router-dom";

import PrivateRoute from "@routes/Redirect/PrivateRoute";
import Loading from "@routes/Redirect/Components/Loading";
import Inbox from "@routes/inbox";
import { UserProvider } from "@hooks/UserManager";
import TestSlide from "./TestSlide";

const NotFoundPage = React.lazy(() => import("@routes/404_page"));
const Login = React.lazy(() => import("@routes/login"));
const LoginTwo = React.lazy(() => import("@routes/login/pages/login2"));
const Nametag = React.lazy(() => import("@routes/nametag"));
const NewFeed = React.lazy(() => import("@routes/newfeed/index"));
const QuickCard = React.lazy(() => import("@routes/quickcard"));
const QuickCardEdit = React.lazy(() => import("@routes/QuickCardEdit"));
const SearchPage = React.lazy(() => import("@routes/search"));
const Profile = React.lazy(() => import("@routes/profile"));
const AddPost = React.lazy(() => import("@routes/addpost"));
const PostDetail = React.lazy(() => import("@routes/PostDetail"));

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
                    {/* <Route path="/nametag"
                        element={<PrivateRoute element={<Nametag />} />} /> */}
                    <Route path="/quickcard"
                        element={<PrivateRoute element={<QuickCard />} />} />
                    <Route path="/quickcard/edit"
                        element={<PrivateRoute element={<QuickCardEdit />} />} />
                    <Route path="/inbox"
                        element={<PrivateRoute element={<Inbox />} />} />
                    <Route path="/search"
                        element={<PrivateRoute element={<SearchPage />} />} />
                    <Route path="/profile"
                        element={<PrivateRoute element={<Profile />} />} />
                    <Route path="/profile/:userID"
                        element={<PrivateRoute element={<Profile />} />} />
                    <Route path="/create-post"
                        element={<PrivateRoute element={<AddPost />} />} />
                    
                    <Route path="/test"
                        element={<TestSlide />} />
                    <Route path="/nametag"
                        element={<Nametag />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default function MainApp() {
    return (
        <UserProvider>
            <Router>
                <Wrapper />
            </Router>
        </UserProvider>
    )
}