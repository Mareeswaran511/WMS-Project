import React from "react";

function WaveLaunch() {
  return (
    <div className="card p-4 shadow">
      <h3>Wave Launch</h3>

      <div className="row">
        <input className="form-control col m-2" placeholder="Order #" />
        <input className="form-control col m-2" placeholder="Wave #" />
        <input type="date" className="form-control col m-2" />
        <input type="date" className="form-control col m-2" />
        <input className="form-control col m-2" placeholder="Customer" />
        <input className="form-control col m-2" placeholder="Carrier" />
      </div>

      <div className="mt-2">
        <button className="btn btn-primary me-2">Launch</button>
        <button className="btn btn-secondary me-2">Reset</button>
        <button className="btn btn-info me-2">Refresh</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}

export default WaveLaunch;