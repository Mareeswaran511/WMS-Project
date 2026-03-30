import React, { useState } from "react";
import Dashboard from "./Dashboard";
import SalesOrder from "./SalesOrder";
import OrderQuery from "./OrderQuery";
import WaveCreation from "./WaveCreation";
import WaveLaunch from "./WaveLaunch";

function Home() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="d-flex">

      {/* Sidebar */}
      <div className="bg-dark text-white p-3 vh-100" style={{ width: "220px" }}>
        <h4 className="mb-4">📦 WMS</h4>

        <button className="btn btn-outline-light w-100 mb-2"
          onClick={() => setPage("dashboard")}>
          Dashboard
        </button>

        <button className="btn btn-outline-light w-100 mb-2"
          onClick={() => setPage("sales")}>
          Sales Order
        </button>

        <button className="btn btn-outline-light w-100 mb-2"
          onClick={() => setPage("query")}>
          Order Query
        </button>

        {/* ✅ ADD HERE */}
        <button className="btn btn-outline-light w-100 mb-2"
          onClick={() => setPage("waveCreate")}>
          Wave Creation
        </button>

        <button className="btn btn-outline-light w-100"
          onClick={() => setPage("waveLaunch")}>
          Wave Launch
        </button>
      </div>

      {/* Content */}
      <div className="flex-grow-1 p-4 bg-light">

        {page === "dashboard" && <Dashboard />}
        {page === "sales" && <SalesOrder />}
        {page === "query" && <OrderQuery />}

        {/* ✅ ADD HERE */}
        {page === "waveCreate" && <WaveCreation />}
        {page === "waveLaunch" && <WaveLaunch />}

      </div>
    </div>
  );
}

export default Home;