import React from "react";
import { useEffect, useState } from "react";
import './LoginRight.css';
import sendRequest from "./LoginHandler";
import { useNavigate } from "react-router-dom";
function LoginRight() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg , setMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const animation = () => {
      const signUpForm = document.getElementById("signup-form");
      const signUpImage = document.getElementById("signup-image");
      if (signUpForm && signUpImage) {
        signUpForm.classList.add("fade-out");
        signUpImage.classList.add("fade-in");
      }
    };
    animation();
  });
  const onSubmitHandler = async(e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
      try{
        await sendRequest(user);
        setMsg("Login...");
        setEmail('');
        setPassword('');
        navigate('/main');
      }catch(err){
        console.log(err);
        setMsg(err.message);
      }
      setTimeout(() => {
        setMsg('')
      }, 3000); 
    
  };

  return (
    <>
      <div
        className="w-50 h-100   d-flex justify-content-center align-items-center"
        id="signup-form"
      >
        <form
          onSubmit={onSubmitHandler}
          className="w-75 h-75  m-auto p-3 rounded position-relative"
        >
          <div className="mb-4">
            <h2 className="text-primary">Login With Your Account</h2>
          </div>

          <div className="d-flex input-field mb-4">
            <i className="fa-solid fa-envelope my-auto"></i>
            <input type="text" className="input" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="d-flex input-field mb-4">
            <i className="fa-solid fa-unlock my-auto"></i>
            <input type="text" className="input" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <div className="ps-2 text-danger">{msg}</div>
          <div className="text-center mt-5">
            <button className="btn btn-primary mt-4 w-50 border fw-bold p-3">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginRight;
