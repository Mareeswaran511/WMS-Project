// ─────────────────────────────────────────────
//  App.jsx  —  Root component (router only)
//  Holds global state and decides which screen
//  to render based on the `screen` value.
// ─────────────────────────────────────────────

import React, { useState } from "react";
import Login               from "./components/Login";
import Sidebar             from "./components/Sidebar";
import SalesOrderEntry     from "./components/SalesOrderEntry";
import OrderDetails        from "./components/OrderDetails";
import WaveCreationByOrder from "./components/WaveCreationByOrder";
import WaveLaunch          from "./components/WaveLaunch";
import OrderQuery          from "./components/OrderQuery";

// ── Initial shape of a sales order ──
const blankOrder = {
  orderNo: "", customer: "", account: "",
  address: "", orderDate: "", carrier: ""
};

function App() {
  // ── Auth ──
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ── Navigation ──
  const [screen, setScreen] = useState("entry");

  // ── Shared order state (passed down to Entry + Details) ──
  const [orderData,         setOrderData]         = useState(blankOrder);
  const [orderDetails,      setOrderDetails]      = useState([]);
  const [completionChecked, setCompletionChecked] = useState(false);
  const [orderCompleted,    setOrderCompleted]    = useState(false);

  // ── Logout resets everything ──
  const logout = () => { setIsLoggedIn(false); setScreen("entry"); };

  // ── Show Login until authenticated ──
  if (!isLoggedIn) return <Login onLogin={() => setIsLoggedIn(true)} />;

  // ── Screen map ──
  const screens = {
    entry: (
      <SalesOrderEntry
        orderData={orderData}         setOrderData={setOrderData}
        orderDetails={orderDetails}
        completionChecked={completionChecked}
        setCompletionChecked={setCompletionChecked}
        orderCompleted={orderCompleted} setOrderCompleted={setOrderCompleted}
        goToDetails={() => setScreen("details")}
      />
    ),
    details: (
      <OrderDetails
        data={orderData}
        rows={orderDetails}           setRows={setOrderDetails}
        setCompletionChecked={setCompletionChecked}
        goBack={() => setScreen("entry")}
      />
    ),
    wave:   <WaveCreationByOrder />,
    launch: <WaveLaunch />,
    query:  <OrderQuery />,
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar — always visible after login */}
      <Sidebar screen={screen} setScreen={setScreen} logout={logout} />

      {/* Active screen rendered here */}
      <div style={{ flex: 1 }}>
        {screens[screen] ?? screens.entry}
      </div>
    </div>
  );
}

export default App;