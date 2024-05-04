import React from "react";
import BANNER1 from "../../assest/BANNER1.jpg";
import ColumnChart from "./ColumnChart"; 
import "./Dashboard.css";

function HomePage() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div
            className="card border-0 shadow-lg rounded"
            style={{ marginTop: "30px", marginBottom: "30px" }}
          >
            <div className="card-body">
              <h2 className="mb-4">Dashboard</h2>
              {/* Your dashboard content here */}
              <div className="dashboard-content">
                <div className="img-container">
                  <img
                    src={BANNER1}
                    alt="Dashboard Image"
                    className="img-fluid"
                  />
                </div>
                {/* Cards */}
                <div
                  className="row mt-4 justify-content-center"
                  style={{ height: "150px" }}
                >
                  <div className="col-md-4 p-3">
                    <div className="card h-100">
                      <div className="card-body">Total Ads</div>
                    </div>
                  </div>
                  <div className="col-md-4 p-3">
                    <div className="card h-100">
                      <div className="card-body">Total Response</div>
                    </div>
                  </div>
                  <div className="col-md-4 p-3">
                    <div className="card h-100">
                      <div className="card-body">Total Shop Banner</div>
                    </div>
                  </div>
                </div>

                {/* Chart */}
                <div className="chart mt-4">Users This Month(250)
                {/* Integrate the column chart component */}
                <li className="nav-item">
                  <ColumnChart />
                </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
