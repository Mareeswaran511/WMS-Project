// ──────────────────────────────────────────────────
//  WaveCreationByOrder.jsx  —  Query orders & create wave
//  Self-contained — no props needed
// ──────────────────────────────────────────────────
import React, { useState } from "react";
import "../styles/wavecreation.css";

// Demo data (replace with API call later)
const DEMO_ORDERS = [
  { orderNo: "ORD1001", orderDate: "2026-05-12", customer: "Amazon"   },
  { orderNo: "ORD1002", orderDate: "2026-05-13", customer: "Flipkart" },
  { orderNo: "ORD1003", orderDate: "2026-05-14", customer: "Myntra"   },
];

const blankForm = { waveNo: "", orderNo: "", fromDate: "", toDate: "" };

const WaveCreationByOrder = () => {
  const [form,        setForm]        = useState(blankForm);
  const [rows,        setRows]        = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleChange = ({ target }) => setForm({ ...form, [target.name]: target.value });

  const handleQuery = () => {
    if (!form.orderNo && !form.fromDate && !form.toDate)
      return alert("Enter Order No or Date");
    setRows(DEMO_ORDERS);
  };

  const handleSubmit = () => {
    if (selectedRow === null) return alert("Select grid data");
    const waveNo = "WAVE" + Math.floor(10000 + Math.random() * 90000);
    setForm({ ...form, waveNo });
    alert("Wave created successfully");
  };

  return (
    <div className="page-bg">
      <div className="page-header"><h2>Wave Creation By Order</h2></div>

      <div className="wide-card">
        {/* ── Filter form ── */}
        <div className="d-flex flex-wrap gap-3 mb-3">
          {[
            { label: "Wave No",    name: "waveNo",    readOnly: true,  placeholder: "Auto Generated" },
            { label: "Order No",   name: "orderNo",   type: "text",    placeholder: "Enter Order No" },
            { label: "From Date",  name: "fromDate",  type: "date"     },
            { label: "To Date",    name: "toDate",    type: "date"     },
          ].map(({ label, name, type = "text", readOnly, placeholder }) => (
            <div key={name} className="d-flex flex-column">
              <label className="mb-1 fw-500">{label}</label>
              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                readOnly={readOnly}
                placeholder={placeholder}
                className="form-control dark-input"
                style={{ width: 220 }}
              />
            </div>
          ))}
        </div>

        {/* ── Buttons ── */}
        <div className="d-flex gap-2 mb-4">
          <button className="custom-btn add-btn"   onClick={handleQuery}>Query</button>
          <button className="custom-btn save-btn"  onClick={handleSubmit}>Submit</button>
          <button className="custom-btn reset-btn" onClick={() => window.location.reload()}>Refresh</button>
        </div>

        {/* ── Results table ── */}
        {rows.length > 0 && (
          <table className="table table-bordered table-hover custom-table">
            <thead>
              <tr><th>Order No</th><th>Order Date</th><th>Customer Name</th></tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} onClick={() => setSelectedRow(i)}
                  className={selectedRow === i ? "selected-row" : ""}>
                  <td>{row.orderNo}</td><td>{row.orderDate}</td><td>{row.customer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default WaveCreationByOrder;