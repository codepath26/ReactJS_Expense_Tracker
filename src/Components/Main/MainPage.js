import React from "react";
import {  useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();
  const completeProfile = () => {
    navigate("/profile");
  };
  return (
    <>
      <h1>Your Profile is Incompleted</h1>
      <button onClick={completeProfile}> Complete Now!</button>
    </>
  );
}

export default MainPage;
