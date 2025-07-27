import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Redirect } from "react-router-dom";



function PrivateRoute({ children }, ...rest) {

    const { isLoggedIn } = useContext(AuthContext);


    return (
        <Route
            {...rest}
            render={({ location }) => {
                isLoggedIn ? children : <Redirect to={{ pathname: "/login" }} />;
            }}
        />
    )
}

export default PrivateRoute;