import React, { useState } from "react";

function SalesOrder() {
  const [form, setForm] = useState({
    orderNo: "",
    orderDate: "",
    customer: "",
    account: "",
    address: "",
    carrier: ""
  });

  return (
    <div className="card p-4 shadow">
      <h3>Sales Order Entry</h3>

      <div className="row">
        <div className="col-md-4">
          <label>Order #</label>
          <input className="form-control"
            onChange={(e) => setForm({ ...form, orderNo: e.target.value })}/>
        </div>

        <div className="col-md-4">
          <label>Order Date</label>
          <input type="date" className="form-control"
            onChange={(e) => setForm({ ...form, orderDate: e.target.value })}/>
        </div>

        <div className="col-md-4">
          <label>Customer</label>
          <input className="form-control"
            onChange={(e) => setForm({ ...form, customer: e.target.value })}/>
        </div>

        <div className="col-md-4 mt-2">
          <label>Account</label>
          <input className="form-control"
            onChange={(e) => setForm({ ...form, account: e.target.value })}/>
        </div>

        <div className="col-md-4 mt-2">
          <label>Ship Address</label>
          <input className="form-control"
            onChange={(e) => setForm({ ...form, address: e.target.value })}/>
        </div>

        <div className="col-md-4 mt-2">
          <label>Carrier</label>
          <input className="form-control"
            onChange={(e) => setForm({ ...form, carrier: e.target.value })}/>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-3">
        <button className="btn btn-success me-2">Submit</button>
        <button className="btn btn-secondary me-2">Reset</button>
        <button className="btn btn-info me-2">Refresh</button>
        <button className="btn btn-danger me-2">Delete</button>
        <button className="btn btn-primary">Details</button>
      </div>
    </div>
  );
}

export default SalesOrder;