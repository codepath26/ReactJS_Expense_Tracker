import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const [visibleProfile , setVisibleProfilel]= useState(true);
  const [visibleEmail , setVisibleEmail]= useState(true);
  const navigate = useNavigate();
  const completeProfile = () => {
    navigate("/profile");
    setVisibleProfilel(false);
  };
  async function verifyEmail() {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
          {
            idToken: token,
            requestType: "VERIFY_EMAIL",
          }
        );
        console.log(response);
        setVisibleEmail(false);

      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      {visibleProfile && <div
        className="alert alert-danger d-flex justify-content-between aling-items-center"
        role="alert"
      >
        <span>Your Profile is not complete yet</span>
        <button onClick={completeProfile} className="btn btn-danger">
          Complete Now!
        </button>
      </div>}
      {visibleEmail && <div
        className="alert alert-danger d-flex justify-content-between aling-items-center"
        role="alert"
      >
        <span>Verify Your Email</span>
        <button onClick={verifyEmail} className="btn btn-warning">
          Verify Now!
        </button>
      </div>}
    </>
  );
}

export default MainPage;
