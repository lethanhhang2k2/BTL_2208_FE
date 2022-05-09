import React from "react";
import { Navigate } from "react-router-dom";
import { useGoogleAuth } from "@hooks/GoogleAuthProvider";
import Loading from "./Components/Loading";

const PrivateRoute = ({ element }: { element: React.ReactElement }): React.ReactElement => {
    const { isSignedIn, isInitialized } = useGoogleAuth();
    console.log("isSignedIn", isSignedIn);
    if (!isInitialized) {
        return <Loading />
    }
    return isSignedIn ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
