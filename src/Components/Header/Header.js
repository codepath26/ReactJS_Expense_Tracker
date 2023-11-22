// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { useProduct } from "../../Context/CartContext";
// import { useAuthContext } from "../../Context/AuthContext";

// function Header(props) {
//   const { cartDetails } = useProduct();
//   const {  logoutHandler, userIsLoggedIn } = useAuthContext();

 

//   const navigate = useNavigate();
//   const totalNumber = cartDetails.products.reduce((acc, product) => {
//     return acc + product.quantity;
//   }, 0);
//   // console.log("total number", totalNumber);
//   const onLogOut = () => {
//     logoutHandler();
//     navigate("/login");
//   };
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed top-0 left-0 w-100 z-1">
//       <div className="container">
//         <Link className="navbar-brand" to="#">
//           Your Logo
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <NavLink
//                 className={({ isActive }) =>
//                   ` nav-link  ${isActive ? "text-primary" : ""}`
//                 }
//                 to="/"
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 className={({ isActive }) =>
//                   `nav-link ${isActive ? "text-primary" : ""}`
//                 }
//                 to="about"
//               >
//                 About
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 className={({ isActive }) =>
//                   `nav-link ${isActive ? "text-primary" : ""}`
//                 }
//                 to="store"
//               >
//                 Store
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 className={({ isActive }) =>
//                   `nav-link ${isActive ? "text-primary" : ""}`
//                 }
//                 to="contact"
//               >
//                 Contactus
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {!userIsLoggedIn ? (
//         <Link className="btn btn-primary me-3" to="/login">
//           Login
//         </Link>
//       ) : (
//         <button onClick={onLogOut} className="btn btn-primary mx-1">
//           Logout
//         </button>
//       )}
//       {userIsLoggedIn && (
//         <Link to="/resetpassword" className="btn btn-primary">
//           Forgot Password
//         </Link>
//       )}
//       {userIsLoggedIn && (
//         <button
//           className="btn btn-dark mx-4 position-relative"
//           onClick={() => {
//             props.onOpen();
//           }}
//         >
//           Cart{" "}
//           <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//             {totalNumber}
//             <span className="visually-hidden">unread messages</span>
//           </span>
//         </button>
//       )}
//     </nav>
//   );
// }

// export default Header;
import React from 'react'

function Header() {
  return (
    <div>
      this header
    </div>
  )
}

export default Header;