import React, { useState } from "react";

const dummyData = [
  {
    orderNo: "SO1001",
    waveNo: "W100",
    sku: "SKU-01",
    ordQty: 10,
    orderDate: "2026-05-10",
    customer: "ABC Pvt Ltd",
    account: "AC-001"
  },
  {
    orderNo: "SO1002",
    waveNo: "W101",
    sku: "SKU-02",
    ordQty: 5,
    orderDate: "2026-05-11",
    customer: "XYZ Ltd",
    account: "AC-002"
  },
  {
    orderNo: "SO1003",
    waveNo: "W102",
    sku: "SKU-03",
    ordQty: 8,
    orderDate: "2026-05-12",
    customer: "DEF Ltd",
    account: "AC-003"
  }
];

const OrderQuery = () => {
  const [filters, setFilters] = useState({
    orderNo: "",
    waveNo: "",
    fromDate: "",
    toDate: ""
  });

  const [rows, setRows] = useState([]);

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handleQuery = () => {
    const filtered = dummyData.filter((item) => {
      const orderDate = new Date(item.orderDate);
      const from = filters.fromDate ? new Date(filters.fromDate) : null;
      const to = filters.toDate ? new Date(filters.toDate) : null;

      return (
        (!filters.orderNo || item.orderNo.includes(filters.orderNo)) &&
        (!filters.waveNo || item.waveNo.includes(filters.waveNo)) &&
        (!from || orderDate >= from) &&
        (!to || orderDate <= to)
      );
    });

    setRows(filtered);
  };

  const handleRefresh = () => {
    setFilters({
      orderNo: "",
      waveNo: "",
      fromDate: "",
      toDate: ""
    });
    setRows([]);
  };

  return (
    <div className="details-bg">

      <div className="top-header">
        <h2>Order Query</h2>
      </div>

      <div className="details-card">

        {/* FILTER SECTION */}
        <div className="row g-3 mb-3">

          <div className="col-md-3">
            <label>Order No</label>
            <input
              className="form-control dark-input"
              name="orderNo"
              value={filters.orderNo}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label>Wave No</label>
            <input
              className="form-control dark-input"
              name="waveNo"
              value={filters.waveNo}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label>From Date</label>
            <input
              type="date"
              className="form-control dark-input"
              name="fromDate"
              value={filters.fromDate}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label>To Date</label>
            <input
              type="date"
              className="form-control dark-input"
              name="toDate"
              value={filters.toDate}
              onChange={handleChange}
            />
          </div>

        </div>

        {/* BUTTONS */}
        <div className="d-flex gap-2 mb-4">

          <button className="custom-btn add-btn" onClick={handleQuery}>
            Query
          </button>

          <button className="custom-btn reset-btn" onClick={handleRefresh}>
            Refresh
          </button>

        </div>

        {/* GRID */}
        <div className="table-responsive">

          <table className="table table-bordered table-hover custom-table">

            <thead>
              <tr>
                <th>Order No</th>
                <th>Wave No</th>
                <th>SKU</th>
                <th>Ord Qty</th>
                <th>Order Date</th>
                <th>Customer</th>
                <th>Account</th>
              </tr>
            </thead>

            <tbody>

              {rows.length === 0 ? (
                <tr>
                  <td colSpan="7" style={{ textAlign: "center" }}>
                    No Data Found
                  </td>
                </tr>
              ) : (
                rows.map((r, i) => (
                  <tr key={i}>
                    <td>{r.orderNo}</td>
                    <td>{r.waveNo}</td>
                    <td>{r.sku}</td>
                    <td>{r.ordQty}</td>
                    <td>{r.orderDate}</td>
                    <td>{r.customer}</td>
                    <td>{r.account}</td>
                  </tr>
                ))
              )}

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
};

export default OrderQuery;