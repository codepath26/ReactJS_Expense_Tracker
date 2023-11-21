import React from 'react'
import axios from "axios";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../../Context/AuthContext';
function ForgotPassModal() {
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const {token,logginHandler} = useAuthContext();

  const onForgotPass = async (e) => {
    e.preventDefault();
    console.log("forgot password is called")
    console.log(token);
    const user = {
      idToken: token,
      password: password,
      returnSecureToken : true,
    };
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
        user
      );
      console.log("Forgotpass",response.data.refreshToken);
      logginHandler(response.data.refreshToken);
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="w-100 vh-100  d-flex justify-content-center align-items-center bg-dark bg-opacity-50 z-2">
        <div className="w-50">
          <form
            onSubmit={onForgotPass}
            className="border border-success w-50 m-auto p-3 rounded z-3 bg-light position-relative"
          >
            <div className="text-center">
              <h1>Forgot Password</h1>
            </div>
            <div className="d-flex flex-column">
              <label className="fs-3 fw-bold mt-4" htmlFor="password">
                New-Password
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
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgotPassModal;
