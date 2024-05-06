import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function UserForm() {
  const [userData, setUserData] = useState({
    image: "",
    personalResponseDetails: {
      name: "",
      mobileNo: "",
      emailId: "",
    },
    categoryName: "",
    productName: "",
    date: "",
    sellingPrice: "",
  });

  const [users, setUsers] = useState([
    {
      image: "https://via.placeholder.com/50",
      personalResponseDetails: {
        name: "Jaahid",
        mobileNo: "123-456-7890",
        emailId: "jaahid@example.com",
      },
      categoryName: "Category 1",
      productName: "Product A",
      date: "2023-10-15",
      sellingPrice: "100",
    },
    {
      image: "https://via.placeholder.com/50",
      personalResponseDetails: {
        name: "Aman",
        mobileNo: "098-765-4321",
        emailId: "aman@example.com",
      },
      categoryName: "Category 2",
      productName: "Product B",
      date: "2023-10-16",
      sellingPrice: "150",
    },
    {
      image: "https://via.placeholder.com/50",
      personalResponseDetails: {
        name: "Kumar",
        mobileNo: "555-555-5555",
        emailId: "kumar@example.com",
      },
      categoryName: "Category 2",
      productName: "Product C",
      date: "2023-10-17",
      sellingPrice: "200",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users
    .filter((user) => {
      const values = Object.values(user).join(" ").toLowerCase();
      return values.includes(searchTerm.toLowerCase());
    })
    .slice(indexOfFirstUser, indexOfLastUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      personalResponseDetails: {
        ...prevUserData.personalResponseDetails,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers([...users, userData]);
    setUserData({
      image: "",
      personalResponseDetails: {
        name: "",
        mobileNo: "",
        emailId: "",
      },
      categoryName: "",
      productName: "",
      date: "",
      sellingPrice: "",
    });
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      style={{
        width: "80%",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "5px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#333",
          textTransform: "uppercase",
        }}
      >
        Shop Product Response
      </h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          marginBottom: "20px",
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #ddd",
          width: "100%",
          boxSizing: "border-box",
        }}
      />
      {/* <form onSubmit={handleSubmit}>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={userData.image}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userData.personalResponseDetails.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Mobile No.:
          <input
            type="text"
            name="mobileNo"
            value={userData.personalResponseDetails.mobileNo}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email Id:
          <input
            type="text"
            name="emailId"
            value={userData.personalResponseDetails.emailId}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Product Name:
          <input
            type="text"
            name="productName"
            value={userData.productName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={userData.date}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Selling Price:
          <input
            type="text"
            name="sellingPrice"
            value={userData.sellingPrice}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add User</button>
      </form> */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
                backgroundColor: "#f2f2f2",
              }}
            >
              S.No.
            </th>
            <th
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
                backgroundColor: "#f2f2f2",
              }}
            >
              Image
            </th>
            <th
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
                backgroundColor: "#f2f2f2",
              }}
            >
              Personal Response Details
            </th>
            <th
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
                backgroundColor: "#f2f2f2",
              }}
            >
              Category Name
            </th>
            <th
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
                backgroundColor: "#f2f2f2",
              }}
            >
              Product Name
            </th>
            <th
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
                backgroundColor: "#f2f2f2",
              }}
            >
              Date
            </th>
            <th
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
                backgroundColor: "#f2f2f2",
              }}
            >
              Selling Price
            </th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={index}>
              <td
                style={{
                  padding: "10px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {index + 1 + (currentPage - 1) * usersPerPage}
              </td>
              <td
                style={{
                  padding: "10px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                <img
                  src={user.image}
                  alt="product"
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "5px",
                  }}
                />
              </td>
              <td
                style={{
                  padding: "10px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {user.personalResponseDetails.name}
                <br />
                {user.personalResponseDetails.mobileNo}
                <br />
                {user.personalResponseDetails.emailId}
              </td>
              <td
                style={{
                  padding: "10px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {user.categoryName}
              </td>
              <td
                style={{
                  padding: "10px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {user.productName}
              </td>
              <td
                style={{
                  padding: "10px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {user.date}
              </td>
              <td
                style={{
                  padding: "10px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {user.sellingPrice}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {usersPerPage < users.length && (
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {Array.from(
              { length: Math.ceil(users.length / usersPerPage) },
              (_, i) => (
                <li key={i} style={{ marginRight: "10px" }}>
                  <button
                    onClick={() => paginate(i + 1)}
                    style={{
                      padding: "5px 10px",
                      borderRadius: "3px",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {i + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default UserForm;
