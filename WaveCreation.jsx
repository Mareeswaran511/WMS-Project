import React from "react";

function WaveCreation() {
  return (
    <div className="card p-4 shadow">
      <h3>Wave Creation</h3>

      <div className="row">
        <input className="form-control col m-2" placeholder="Order #" />
        <input className="form-control col m-2" placeholder="Wave #" />
        <input type="date" className="form-control col m-2" />
        <input type="date" className="form-control col m-2" />
        <input className="form-control col m-2" placeholder="Customer" />
        <input className="form-control col m-2" placeholder="Carrier" />
      </div>

      <div className="mt-2">
        <button className="btn btn-success me-2">Create Wave</button>
        <button className="btn btn-secondary me-2">Reset</button>
        <button className="btn btn-info me-2">Refresh</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}

export default WaveCreation;