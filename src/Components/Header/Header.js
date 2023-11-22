import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [photo, setPhoto] = useState("");
  const [displayName, setDisplayName] = useState("");
  useEffect(() => {
    const getdata = async () => {
      try {
        const idToken = localStorage.getItem("token");
        console.log(idToken);
        const response = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
          {
            idToken: idToken,
          }
        );
        const user = response.data.users[0];
        setDisplayName(user.displayName);
        setPhoto(user.photoUrl);
      } catch (err) {
        console.log(err);
      }
    };

    getdata();
  });
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" href="#">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" href="#">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" href="#">
                Link
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" href="#">
                    Action
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" href="#">
                    Another action
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" href="#">
                    Something else here
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link disabled" aria-disabled="true">
                Disabled
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <div className="border border-rounded-circle">
              <img src={photo} alt="P" width="100px" />{console.log(photo)}
            </div>
            <span>{displayName}</span>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
