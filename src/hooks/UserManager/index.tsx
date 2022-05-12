import { createContext, useState } from "react";
import { UserExample, UserProperty } from "@AppTypes/user";

const UserContext = createContext({ user: UserExample, setUser: (user: UserProperty) => { } });

const UserProvider = ({ children }: { children: React.ReactNode; }) => {
    const [user, setUser] = useState(UserExample);
    return <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>;
};

export { UserContext, UserProvider };