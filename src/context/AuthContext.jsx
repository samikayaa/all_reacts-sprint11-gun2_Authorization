import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage"




export const AuthContext = createContext();

export function AuthContextProvider({ children }) {

    let isLoggedIn = authUserInfo && authUserInfo.token;

    const history = useHistory();

    const [authUserInfo, setAuthUserInfo] = useLocalStorage("s11d2", {}); //useState({});

    const login = (formData) => {
        axios
            .post("https://nextgen-project.onrender.com/api/s11d2/login", formData)
            .then(response => {
                setAuthUserInfo(response.data);
                history.push("/"); // "/frieds" sayfasına da gider.
            })
            .catch(error => console.log(error));
    }

    const logout = () => {
        setAuthUserInfo({});
        history.push("/login");
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider >
    );
};


export default AuthContext;