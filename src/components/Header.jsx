import React, { useContext } from 'react';
import AuthContext from "../context/AuthContext";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



function Header() {

  const { isLoggedIn, logout } = useContext(AuthContext);

  const history = useHistory();

  return (
    <div>
      <div className="loginFormHeaderDiv">
        <div>
          <h1>FRIENDS DATABASE</h1>
        </div>
        {
          !isLoggedIn ?
            (
              <div className="loginFormHeaderButtonDiv">
                <button onClick={() => { history.push("/login") }}>LOGIN</button>
              </div>
            ) : (
              <div className="loginFormHeaderButtonDiv">
                <button onClick={() => { history.push("/friends") }}>FRIENDS LIST</button>
                <button onClick={() => { history.push("/friends/add") }}>ADD FRIEND</button>
                <button onClick={logout}>LOGOUT</button>
              </div>
            )
        }
      </div>
    </div>
  );
}

export default Header;
