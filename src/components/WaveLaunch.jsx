// ────────────────────────────────────────────────
//  WaveLaunch.jsx  —  Query waves and launch them
//  Self-contained — no props needed
// ────────────────────────────────────────────────
import React, { useState } from "react";
import "../styles/wavelaunch.css";

// Demo data (replace with API call later)
const DEMO_WAVES = [
  { orderNo: "ORD1001", waveNo: "WAVE5001", orderDate: "2026-05-12", customer: "Amazon"   },
  { orderNo: "ORD1002", waveNo: "WAVE5002", orderDate: "2026-05-13", customer: "Flipkart" },
  { orderNo: "ORD1003", waveNo: "WAVE5003", orderDate: "2026-05-14", customer: "Myntra"   },
];

const blankForm = { orderNo: "", waveNo: "", fromDate: "", toDate: "" };

const WaveLaunch = () => {
  const [form,          setForm]          = useState(blankForm);
  const [rows,          setRows]          = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleChange = ({ target }) => setForm({ ...form, [target.name]: target.value });

  const handleQuery = () => {
    const { orderNo, waveNo, fromDate, toDate } = form;
    if (!orderNo && !waveNo && !fromDate && !toDate)
      return alert("Enter Order No / Wave No / Date");
    setRows(DEMO_WAVES);
  };

  const handleLaunch = () => {
    if (selectedIndex === null) return alert("Select a row");
    alert("Wave Launched Successfully");
  };

  return (
    <div className="page-bg">
      <div className="page-header"><h2>Wave Launch</h2></div>

      <div className="wide-card">
        {/* ── Filter form ── */}
        <div className="d-flex flex-wrap gap-3 mb-3">
          {[
            { label: "Order No",  name: "orderNo",  type: "text", placeholder: "Enter Order No"  },
            { label: "Wave No",   name: "waveNo",   type: "text", placeholder: "Enter Wave No"   },
            { label: "From Date", name: "fromDate", type: "date" },
            { label: "To Date",   name: "toDate",   type: "date" },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name} className="d-flex flex-column">
              <label className="mb-1 fw-500">{label}</label>
              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="form-control dark-input"
                style={{ width: 220 }}
              />
            </div>
          ))}
        </div>

        {/* ── Buttons ── */}
        <div className="d-flex gap-2 mb-4">
          <button className="custom-btn add-btn"          onClick={handleQuery}>Query</button>
          <button className="custom-btn launch-btn-color" onClick={handleLaunch}>Launch</button>
          <button className="custom-btn reset-btn"        onClick={() => window.location.reload()}>Refresh</button>
        </div>

        {/* ── Results table ── */}
        {rows.length > 0 && (
          <div className="table-responsive">
            <table className="table table-bordered table-hover custom-table">
              <thead>
                <tr><th>Order No</th><th>Wave No</th><th>Order Date</th><th>Customer Name</th></tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} onClick={() => setSelectedIndex(i)}
                    className={selectedIndex === i ? "selected-row" : ""}>
                    <td>{row.orderNo}</td><td>{row.waveNo}</td><td>{row.orderDate}</td><td>{row.customer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaveLaunch;