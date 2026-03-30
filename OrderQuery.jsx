import React from "react";

function OrderQuery() {
  return (
    <div className="card p-4 shadow">
      <h3>Order Query</h3>

      {/* Filters */}
      <div className="row">
        <input className="form-control col m-2" placeholder="Order #" />
        <input className="form-control col m-2" placeholder="Wave #" />
        <input type="date" className="form-control col m-2" />
        <input type="date" className="form-control col m-2" />
        <input className="form-control col m-2" placeholder="Customer" />
        <input className="form-control col m-2" placeholder="Carrier" />
      </div>

      {/* Buttons */}
      <div className="mt-2">
        <button className="btn btn-primary me-2">Query</button>
        <button className="btn btn-secondary me-2">Reset</button>
        <button className="btn btn-info me-2">Refresh</button>
        <button className="btn btn-danger">Delete</button>
      </div>

      {/* Table */}
      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>Order#</th>
            <th>Wave#</th>
            <th>Customer</th>
            <th>Carrier</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>101</td>
            <td>W01</td>
            <td>ABC</td>
            <td>DHL</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderQuery;