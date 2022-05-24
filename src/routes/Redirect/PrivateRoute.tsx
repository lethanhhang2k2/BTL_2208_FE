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
    const { isSignedIn, isInitialized, signOut } = useGoogleAuth();

    useEffect(() => {
        if (isInitialized) {
            const cookie = document.cookie
            const token = cookie.split("session-token=")
            console.log(token);
            
            getUserData(token[1])
                .then(user => {
                    console.log(user);
                    setUser(parseUser(user.data.user_data));
                    setState(user.ok);
                    if (!user.ok) signOut();
                    setLoading(false);

                }).catch((error) => {
                    console.log(error);
                    setState(false);
                    signOut();
                    setLoading(false);
                });
        }
    }, [isInitialized]);

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

    // if (!isInitialized) {
    //     return element;
    // } else {
    //     if (isSignedIn) {
    //         return (loading)
    //             ? element
    //             : (state)
    //                 ? element
    //                 : element
    //     }
    //     return isSignedIn ? element : element;
    // };

}

export default PrivateRoute;
