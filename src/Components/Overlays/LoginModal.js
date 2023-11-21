import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";

function LoginModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {onUserLogin ,logginHandler} =useAuthContext();
  const navigate = useNavigate();
  const closeOverlay = () => {
    navigate("/");
  };
  const onLogin = async (e) => {
    e.preventDefault();
    localStorage.setItem('email' , email);
    const user = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
        user
      );
      console.log("Login response",response);
      onUserLogin();
      logginHandler(response.data.idToken);
   
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="w-100 vh-100  d-flex justify-content-center align-items-center bg-dark bg-opacity-50 z-2">
        <div className="w-50">
          <form
            onSubmit={onLogin}
            className="border border-success w-50 m-auto p-3 rounded z-3 bg-light position-relative"
          >
            <button
              className="btn-close z-1 position-absolute top-0 end-0 fs-3 m-3 "
              onClick={() => closeOverlay()}
            ></button>
            <div className="text-center">
              <h1>Login</h1>
            </div>
            <div className="d-flex flex-column">
              <label className="fs-3 fw-bold mt-4" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="p-2 fs-4"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="d-flex flex-column">
              <label className="fs-3 fw-bold mt-4" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                className="p-2 fs-4"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button className="btn btn-primary mt-4 w-50 border rounded-pill p-3">
                Login
              </button>
            </div>
            <div className="text-center my-3 p-2 fs-4">
              <Link
                to="/signup"
                className="d-block link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              >
                Create new account
              </Link>
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginModal;
