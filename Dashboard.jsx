import React from "react";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <div className="row mt-3">
        <div className="col-md-4">
          <div className="card p-3 shadow text-center">
            <h5>Total Orders</h5>
            <h3>120</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;