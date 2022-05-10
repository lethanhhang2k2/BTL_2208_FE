import React, { Suspense } from "react";
import { createContext, useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import PrivateRoute from "@routes/Redirect/PrivateRoute";
import Loading from "@routes/Redirect/Components/Loading";

// import NotFoundPage from "@routes/404_page";
// import Login from "@routes/login";
// import LoginTwo from "@routes/login2";
// import Nametag from "@routes/nametag";
// import NewFeed from "@routes/newfeed/index"
// import QuickCard from "@routes/quickcard";
// import QuickCardEdit from "@routes/QuickCardEdit";
// import TestSlide from "./TestSlide";

const NotFoundPage = React.lazy(() => import("@routes/404_page"));
const Login = React.lazy(() => import("@routes/login"));
const LoginTwo = React.lazy(() => import("@routes/login/pages/login2"));
const LoginThree = React.lazy(() => import("@routes/login/pages/login3"));
const Nametag = React.lazy(() => import("@routes/nametag"));
const NewFeed = React.lazy(() => import("@routes/newfeed/index"));
const QuickCard = React.lazy(() => import("@routes/quickcard"));
const QuickCardEdit = React.lazy(() => import("@routes/QuickCardEdit"));



const UserContext = createContext(null);

export default function MainApp() {
    const [user] = useState(null)

    return (
        <UserContext.Provider value={user}>
            <BrowserRouter>
                <Suspense fallback={<Loading />}>
                    <Routes>
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
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </UserContext.Provider>
    )
}