import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Sidebar.css";

const Sidebar = (props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
    props.logout();
  };

  return (
    <div className="sidebar-container">
      <ul className="nav flex-column p-0 m-0">
        {/* Dashboard */}
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="fas fa-tachometer-alt"></i> 
            <span className="fontsize" style={{fontSize:"30px"}}>Dashboard</span>
          </Link>
        </li>
        {/* Banner Details */}
        <li className="nav-item">
          <Link to="/addcategory" className="nav-link">
            <i className="fas fa-ad"></i> 
            <span className="fontsize">Add Category</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/postads" className="nav-link">
            <i className="fas fa-address-book"></i> 
            <span className="fontsize">Post Ads</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/MyAds" className="nav-link">
            <i className="fas fa-address-book"></i> 
            <span className="fontsize">My Ads</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/response" className="nav-link">
            <i className="fas fa-address-book"></i> 
            <span className="fontsize">Response</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contactlist" className="nav-link">
            <i className="fas fa-address-book"></i> 
            <span className="fontsize">Only Chat</span>
          </Link>
        </li>

        {/* Logout */}
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> 
            <span className="fontsize">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;


// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./Sidebar.css";

// const Sidebar = (props) => {
//   const navigate = useNavigate();
//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     navigate("/");
//     props.logout();
//   };

//   return (
//     <div className="sidebar-container fixed-sidebar"> {/* Apply class for fixed position */}
//       <ul className="nav flex-column p-0 m-0">
//         {/* Dashboard */}
//         <li className="nav-item">
//           <Link to="/" className="nav-link">
//             <i className="fas fa-tachometer-alt"></i> 
//             <span className="fontsize" style={{ fontSize: "30px" }}>Dashboard</span>
//           </Link>
//         </li>
//         {/* Add Category */}
//         <li className="nav-item">
//           <Link to="/addcategory" className="nav-link">
//             <i className="fas fa-ad"></i> 
//             <span className="fontsize">Add Category</span>
//           </Link>
//         </li>
//         {/* Post Ads */}
//         <li className="nav-item">
//           <Link to="/contactlist" className="nav-link">
//             <i className="fas fa-address-book"></i> 
//             <span className="fontsize">Post Ads</span>
//           </Link>
//         </li>
//         {/* Response */}
//         <li className="nav-item">
//           <Link to="/contactlist" className="nav-link">
//             <i className="fas fa-address-book"></i> 
//             <span className="fontsize">Response</span>
//           </Link>
//         </li>
//         {/* Only Chat */}
//         <li className="nav-item">
//           <Link to="/contactlist" className="nav-link">
//             <i className="fas fa-address-book"></i> 
//             <span className="fontsize">Only Chat</span>
//           </Link>
//         </li>
//         {/* Logout */}
//         <li className="nav-item">
//           <a href="#" className="nav-link" onClick={handleLogout}>
//             <i className="fas fa-sign-out-alt"></i> 
//             <span className="fontsize">Logout</span>
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
