import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authAction } from "../../Store/Auth";
import { expenseAction } from "../../Store/Expenses";
function Header() {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.Expenses);
  const [photo, setPhoto] = useState("");
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const getdata = async () => {
      try {
        const idToken = localStorage.getItem("token");
        // console.log(idToken);
        const response = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
          {
            idToken: idToken,
          }
        );
        const user = response.data.users[0];
        setDisplayName(user.displayName);
        localStorage.setItem("name", user.displayName);
        localStorage.setItem("photo", user.photoUrl);
        setPhoto(user.photoUrl);
      } catch (err) {
        console.log(err);
      }
    };
    getdata();
  });
  const onLogout = () => {
    dispatch(authAction.logout());
    //  localStorage.removeItem('token');
    navigate("/login");
  };
  const toggle = () => {
    console.log("at here toggle")
    dispatch(expenseAction.toggleTheme());
  };

  return (
    <nav className={`${expenses.isLight ? "navbar-light" : "navbar-dark"}`}>
      {expenses.totalExpenses > 100000 && <span
        onClick={toggle}
        className={`${expenses.isLight ? "lightTheme" : "darkTheme"}`}
      >
        <i class="fa-solid fa-lightbulb"></i>
      </span>}

        <img
          src={`${photo}`}
          alt="P"
          width="30px"
          className="border rounded-circle d-block me-2"
        />
        <span className="text-center me-4 text-primary-emphasis fw-bold">{displayName}</span>
      <button onClick={onLogout} className={`${expenses.isLight ? "button-dark" : "button-light"}`}>
        Logout
      </button>
    </nav>
  );
}

export default Header;
