import axios from "axios";
import './Signup.css'
import React, { useState } from "react";
// import { Link } from "react-router-dom";
function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    async function sendRequest() {
      try {
        const response = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
          user
        );
        console.log(response);
        console.log("signu", response.data.idToken);
      } catch (err) {
        console.log("err", err);
      }
    }
    sendRequest();
  };

  return (
    <>
    <div className="w-100 vh-100  d-flex justify-content-center align-items-center bg-dark ">
      <div className="w-50 border border-white h-75 gb">
        {/* <img src="../../assets/Images/signup.png" alt="singup" /> */}
      </div>
      <div className="w-50">
      <form onSubmit={onSubmitHandler} className="border border-success w-50 m-auto p-3 rounded  bg-light position-relative">

      <div className="text-center">
            <h1>Signup</h1>
          </div>
          <div className="d-flex flex-column">
            <label className="fs-3 fw-bold mt-4" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="p-2 fs-4"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button className="btn btn-primary mt-4 w-50 border rounded-pill p-3">
              Signup
            </button>
          </div>
          <div className="text-center my-3 fs-4">
            <p className="d-inline">Already Have an account?</p>
          </div>
      </form>
      </div>
    </div>

    </>
  );
}

export default Signup;
