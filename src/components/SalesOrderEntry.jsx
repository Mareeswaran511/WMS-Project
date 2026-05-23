// ─────────────────────────────────────────────────────
//  SalesOrderEntry.jsx  —  Create / update a sales order
//  Props : orderData, setOrderData, orderDetails,
//          completionChecked, setCompletionChecked,
//          orderCompleted,    setOrderCompleted,
//          goToDetails()
// ─────────────────────────────────────────────────────
import React, { useEffect, useState } from "react";
import "../styles/salesorder.css";

const blankForm = {
  orderNo: "", customer: "", account: "",
  address: "", orderDate: "", carrier: ""
};

const SalesOrderEntry = ({
  orderData = {}, setOrderData,
  orderDetails = [],
  completionChecked, setCompletionChecked,
  orderCompleted,    setOrderCompleted,
  goToDetails
}) => {
  const [form, setForm] = useState(blankForm);

  // Sync if parent passes existing order
  useEffect(() => { setForm(orderData); }, [orderData]);

  // Update form + parent state on every keystroke
  const handleChange = ({ target }) => {
    const updated = { ...form, [target.name]: target.value };
    setForm(updated);
    setOrderData(updated);
  };

  // All fields except orderNo must be filled
  const isValid = ["customer","account","address","orderDate","carrier"]
    .every(f => form[f]);

  // Generate order number and persist to parent
  const createOrder = () => {
    const updated = { ...form, orderNo: "ORD" + Math.floor(10000 + Math.random() * 90000) };
    setForm(updated);
    setOrderData(updated);
    return updated;
  };

  const handleSubmit = () => {
    if (!isValid) return alert("Please fill all fields");
    if (!form.orderNo) { createOrder(); return alert("Order Created Successfully"); }
    if (completionChecked && orderDetails.length > 0) {
      setOrderCompleted(true);
      return alert("Order entry completed successfully");
    }
    alert("Order Updated Successfully");
  };

  const handleDetails = () => {
    if (!isValid) return alert("Please fill all fields");
    if (!form.orderNo) createOrder();
    goToDetails();
  };

  const handleReset = () => {
    setForm(blankForm);
    setOrderData(blankForm);
    setCompletionChecked(false);
    setOrderCompleted(false);
  };

  // Field config — drives the input grid (DRY)
  const fields = [
    { label: "Order No",   name: "orderNo",   readOnly: true,         col: "col-md-4" },
    { label: "Customer",   name: "customer",  type: "text",           col: "col-md-4" },
    { label: "Account",    name: "account",   type: "text",           col: "col-md-4" },
    { label: "Address",    name: "address",   type: "text",           col: "col-md-4" },
    { label: "Order Date", name: "orderDate", type: "date",           col: "col-md-4" },
    { label: "Carrier",    name: "carrier",   type: "text",           col: "col-md-4" },
  ];

  return (
    <div className="page-bg">
      <div className="page-header"><h2>Sales Order Entry</h2></div>

      <div className="main-card">
        {/* ── Input Grid ── */}
        <div className="row g-3 mb-4">
          {fields.map(({ label, name, type = "text", readOnly, col }) => (
            <div className={col} key={name}>
              <label>{label}</label>
              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                readOnly={readOnly}
                className="form-control dark-input"
              />
            </div>
          ))}
        </div>

        {/* ── Buttons ── */}
        <div className="d-flex gap-2 justify-content-center flex-wrap">
          <button className="custom-btn save-btn"    onClick={handleSubmit}>Submit</button>
          <button className="custom-btn reset-btn"   onClick={() => window.location.reload()}>Refresh</button>
          <button className="custom-btn back-btn"    onClick={handleReset}>Reset</button>
          <button className="custom-btn details-btn" onClick={handleDetails} disabled={!isValid}>Details</button>
        </div>

        {/* ── Completion checkbox ── */}
        <div className="checkbox-section">
          <input
            type="checkbox"
            checked={completionChecked}
            disabled={!orderDetails.length}
            onChange={(e) => setCompletionChecked(e.target.checked)}
          />
          <label>Entry Completed</label>
        </div>
      </div>
    </div>
  );
};

export default SalesOrderEntry;