import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useGoogleAuth } from "@hooks/GoogleAuthProvider";
import Loading from "./Components/Loading";
import { getUserData, parseUser } from "@api/user";
import { UserContext } from "@hooks/UserManager";

const PrivateRoute = ({ element }: { element: React.ReactElement }) => {
    const { setUser } = React.useContext(UserContext);
    const [loading, setLoading] = React.useState(true);
    const [state, setState] = React.useState(false);
    const { isSignedIn, isInitialized } = useGoogleAuth();

    useEffect(() => {
        if (isInitialized) {
            getUserData()
                .then(user => {
                    // console.log(user);
                    setUser(parseUser(user.data["user_data"]));
                    setState(user.ok);
                    setLoading(false);

                }).catch((error) => {
                    console.log(error);
                    setState(false);
                    setLoading(false);
                });
        }
    }, [isInitialized]);

    // console.log(isInitialized);
    if (!isInitialized) {
        return <Loading />
    } else {
        if (isSignedIn) {
            return (loading)
                ? <Loading />
                : (state)
                    ? element
                    : <Navigate to="/login" />
        }
        return isSignedIn ? element : <Navigate to="/login" />;
    };
}

export default PrivateRoute;
