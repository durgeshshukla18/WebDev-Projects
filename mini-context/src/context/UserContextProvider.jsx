import React from "react";
import UserContext from "./UserContext.js";

function UserContextProvider({ children }) {

    const [user, setUser] = React.useState(null);

    // const user = {
    //     name: "John Doe",
    //     email: "john01@gmail.com",
    // }
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;