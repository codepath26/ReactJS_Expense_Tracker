import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Alert({onCompleteProfile}) {
  const [visibleProfile, setVisibleProfilel] = useState(false);
  const [visibleEmail, setVisibleEmail] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const name = localStorage.getItem("name");
    console.log("this", name === "undefined");
    if (name !== "" && name !== "undefined") {
      setVisibleProfilel(false);
    }
  }, []);
  useEffect(() => {
    if(!visibleEmail && !visibleProfile){
      onCompleteProfile();
    }
  }, [visibleEmail , visibleProfile, onCompleteProfile ]);
  const completeProfile = () => {
    navigate("/profile");
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
        console.log(response.data.status);
        if (response.data.status === "200") {
          setVisibleEmail(false);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      {visibleProfile && (
       
        <div
          className="alert alert-danger d-flex   justify-content-between aling-items-center"
          role="alert"
          >
          <span>Your Profile is not complete yet</span>
          <button onClick={completeProfile} className="btn btn-danger">
            Complete Now!
          </button>
        </div>
          
      )}
      {visibleEmail && (
        <div
          className="alert alert-danger d-flex justify-content-between aling-items-center"
          role="alert"
        >
          <span>Verify Your Email</span>
          <button onClick={verifyEmail} className="btn btn-warning">
            Verify Now!
          </button>
        </div>
      )}
    </>
  );
}

export default Alert;
