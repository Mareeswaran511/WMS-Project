// ──────────────────────────────────────────────────────
//  OrderDetails.jsx  —  Add / Edit / Delete SKU lines
//  Props : data (parent order), rows, setRows,
//          goBack(), setCompletionChecked
// ──────────────────────────────────────────────────────
import React, { useEffect, useState } from "react";
import "../styles/orderdetails.css";

const blankForm = { sku: "", lot: "", serial: "", ordQty: "", availQty: "100" };

const OrderDetails = ({ data = {}, rows: initRows = [], setRows: setParentRows, goBack, setCompletionChecked }) => {
  const [form,          setForm]          = useState(blankForm);
  const [rows,          setRows]          = useState(initRows);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const isEditing = selectedIndex !== null;

  useEffect(() => { setRows(initRows); }, [initRows]);

  const handleChange = ({ target }) => setForm({ ...form, [target.name]: target.value });

  const clearForm = () => { setForm(blankForm); setSelectedIndex(null); };

  // Sync rows to parent and reset completion flag
  const syncRows = (updated) => {
    setRows(updated);
    setParentRows(updated);
    setCompletionChecked(false);
  };

  const handleAdd = () => {
    const { sku, lot, serial, ordQty } = form;
    if (!sku || !lot || !serial || !ordQty) return alert("Fill all fields");
    syncRows([...rows, form]);
    clearForm();
  };

  const handleUpdate = () => {
    if (isEditing === false) return alert("Select a row");
    const updated = [...rows];
    updated[selectedIndex] = form;
    syncRows(updated);
    clearForm();
  };

  const handleDelete = () => {
    if (isEditing === false) return alert("Select a row");
    syncRows(rows.filter((_, i) => i !== selectedIndex));
    clearForm();
  };

  return (
    <div className="page-bg">
      <div className="page-header"><h2>Order Details</h2></div>

      <div className="main-card">
        {/* ── Form fields ── */}
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <label>Order#</label>
            <input value={data.orderNo} readOnly className="form-control dark-input" />
          </div>
          <div className="col-md-6">
            <label>SKU</label>
            <input name="sku" value={form.sku} onChange={handleChange}
              readOnly={isEditing} className="form-control dark-input" />
          </div>
          <div className="col-md-6">
            <label>Lot#</label>
            <input name="lot" value={form.lot} onChange={handleChange} className="form-control dark-input" />
          </div>
          <div className="col-md-6">
            <label>Serial#</label>
            <input name="serial" value={form.serial} onChange={handleChange} className="form-control dark-input" />
          </div>
          <div className="col-md-6">
            <label>Ord Qty</label>
            <input name="ordQty" value={form.ordQty} onChange={handleChange} className="form-control dark-input" />
          </div>
          <div className="col-md-6">
            <label>Avail Qty</label>
            <input value={form.availQty} readOnly className="form-control dark-input" />
          </div>
        </div>

        {/* ── Buttons ── */}
        <div className="d-flex gap-2 flex-wrap mb-4">
          <button className="custom-btn add-btn"    onClick={handleAdd}>Add SKU</button>
          <button className="custom-btn update-btn" onClick={handleUpdate}>Update</button>
          <button className="custom-btn reset-btn"  onClick={clearForm}>Reset</button>
          <button className="custom-btn save-btn"   onClick={() => alert("SKU data added successfully")}>Submit</button>
          <button className="custom-btn delete-btn" onClick={handleDelete}>Delete</button>
          <button className="custom-btn back-btn"   onClick={goBack}>Back</button>
        </div>

        {/* ── SKU Table ── */}
        <div className="table-responsive">
          <table className="table table-bordered table-hover custom-table">
            <thead>
              <tr><th>SKU</th><th>Lot</th><th>Serial</th><th>Qty</th></tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}
                  onClick={() => { setForm(r); setSelectedIndex(i); }}
                  className={selectedIndex === i ? "selected-row" : ""}
                >
                  <td>{r.sku}</td><td>{r.lot}</td><td>{r.serial}</td><td>{r.ordQty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;