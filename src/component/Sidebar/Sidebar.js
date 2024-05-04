import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Sidebar.css";

const Sidebar = (props) => {
  const [customerDropdownVisible, setCustomerDropdownVisible] = useState(false);
  const [userDropdownVisible, setUserDropdownVisible] = useState(false);
  const [categoryDropdownVisible, setCategoryDropdownVisible] = useState(false);
  const [addshopDropdownVisible, setAddShopDropdownVisible] = useState(false);

  const navigate = useNavigate();

  const toggleCustomerDropdown = () => {
    setCustomerDropdownVisible(!customerDropdownVisible);
  };

  const toggleUserDropdown = () => {
    setUserDropdownVisible(!userDropdownVisible);
  };

  const toggleCategoryDropdown = () => {
    setCategoryDropdownVisible(!categoryDropdownVisible);
  };

  const toggleAddShopDropdown = () => {
    setAddShopDropdownVisible(!addshopDropdownVisible);
  };


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

        {/* Category Dropdown */}
        {/* <li className="nav-item">
          <button className="nav-link" onClick={toggleCategoryDropdown}>
            <i className="fas fa-folder"></i> 
            <span className="fontsize">Category</span>
            <i
              className={`fas fa-chevron-${categoryDropdownVisible ? "up" : "down"}`}
              style={{ fontSize: "1.2rem", marginLeft: "auto" }}
            ></i>
          </button>
          {categoryDropdownVisible && (
            <ul className="submenu">
              <li>
                <Link to="/addcategory" className="submenu-link">
                  <i className="fas fa-folder-plus"></i> 
                  &nbsp;&nbsp;Add Category
                </Link>
              </li>
              <li>
                <Link to="/addsubcategory" className="submenu-link">
                  <i className="fas fa-folder-open"></i> 
                  &nbsp;&nbsp;Add Sub-category
                </Link>
              </li>
            </ul>
          )}
        </li> */}








        {/* Add Shop Dropdown */}
        {/* <li className="nav-item">
          <button className="nav-link" onClick={toggleAddShopDropdown}>
            <i className="fas fa-folder"></i> 
            <span className="fontsize">Add Shop</span>
            <i
              className={`fas fa-chevron-${addshopDropdownVisible ? "up" : "down"}`}
              style={{ fontSize: "1.2rem", marginLeft: "auto" }}
            ></i>
          </button>
          {addshopDropdownVisible && (
            <ul className="submenu">
               <li>
                <Link to="/addshopusers" className="submenu-link">
                  <i className="fas fa-folder-plus"></i> 
                  &nbsp;&nbsp;Shop User
                </Link>
              </li>
              <li>
                <Link to="/ShopCategory" className="submenu-link">
                  <i className="fas fa-folder-plus"></i> 
                  &nbsp;&nbsp;Shop Category
                </Link>
              </li>
              <li>
                <Link to="/productdescription" className="submenu-link">
                  <i className="fas fa-folder-open"></i> 
                  &nbsp;&nbsp;Product Desc.
                </Link>
              </li>
            </ul>
          )}
        </li> */}

      


        

        {/* Add Shop Users */}
        {/* <li className="nav-item">
          <Link to="/addshopusers" className="nav-link">
            <i className="fas fa-store"></i> 
            <span className="fontsize">Shop Users</span>
          </Link>
        </li> */}

         {/* Add Shop Category */}
         {/* <li className="nav-item">
          <Link to="/ShopCategory" className="nav-link">
            <i className="fas fa-store"></i> 
            <span className="fontsize">Shop Category</span>
          </Link>
        </li> */}

          {/* Product Description */}
          {/* <li className="nav-item">
          <Link to="/productdescription" className="nav-link">
            <i className="fas fa-info-circle"></i> 
            <span className="fontsize">Product Desc.</span>
          </Link>
        </li> */}




        {/* Banner Details */}
        <li className="nav-item">
          <Link to="/bannerdetails" className="nav-link">
            <i className="fas fa-ad"></i> 
            <span className="fontsize">Add Category</span>
          </Link>
        </li>

        {/* Customer Dropdown */}
        {/* <li className="nav-item">
          <button className="nav-link" onClick={toggleCustomerDropdown}>
            <i className="fas fa-users"></i> 
            <span className="fontsize">Customers</span>
            <i
              className={`fas fa-chevron-${customerDropdownVisible ? "up" : "down"}`}
              style={{ fontSize: "1.2rem", marginLeft: "auto" }}
            ></i>
          </button>
          {customerDropdownVisible && (
            <ul className="submenu">
              <li>
                <Link to="/customers" className="submenu-link">
                  <i className="fas fa-user-friends"></i> 
                  &nbsp;&nbsp; Total Customers
                </Link>
              </li>
              <li>
                <Link to="/VerifeidCustomers" className="submenu-link">
                  <i className="fas fa-check-circle"></i> 
                  &nbsp;&nbsp; Verified Customers
                </Link>
              </li>
              <li>
                <Link to="/NonverifeidCustomers" classclass="submenu-link">
                  <i className="fas fa-times-circle"></i> 
                  &nbsp;&nbsp;Non-Verified Customers
                </Link>
              </li>
            </ul>
          )}
        </li> */}

        {/* User Dropdown */}
        {/* <li className="nav-item">
          <button className="nav-link" onClick={toggleUserDropdown}>
            <i className="fas fa-user"></i> 
            <span className="fontsize">Users</span>
            <i
              className={`fas fa-chevron-${userDropdownVisible ? "up" : "down"}`}
              style={{ fontSize: "1.2rem", marginLeft: "auto" }}
            ></i>
          </button>
          {userDropdownVisible && (
            <ul className="submenu">
              <li>
                <Link to="/addusers" className="submenu-link">
                  <i className="fas fa-user-plus"></i> 
                  &nbsp;&nbsp;  Add Users
                </Link>
              </li>
              <li>
                <Link to="/viewusers" className="submenu-link">
                  <i className="fas fa-users"></i> 
                  &nbsp;&nbsp; View Users
                </Link>
              </li>
            </ul>
          )}
        </li> */}

        {/* Contact List */}
        <li className="nav-item">
          <Link to="/contactlist" className="nav-link">
            <i className="fas fa-address-book"></i> 
            <span className="fontsize">Post Ads</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contactlist" className="nav-link">
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
