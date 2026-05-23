// ─────────────────────────────────────────────
//  Sidebar.jsx  —  Navigation panel
//  Props : screen, setScreen, logout
// ─────────────────────────────────────────────
import React from "react";
import "../styles/sidebar.css";

// Menu items — add new screens here only
const MENU = [
  { key: "entry",  label: "Sales Order Entry"      },
  { key: "wave",   label: "Wave Creation By Order"  },
  { key: "launch", label: "Wave Launch"             },
  { key: "query",  label: "Order Query"             },
];

const Sidebar = ({ screen, setScreen, logout }) => (
  <div className="sidebar">
    <div>
      <div className="logo">WMS</div>
      <nav className="menu">
        {MENU.map(({ key, label }) => (
          <button
            key={key}
            className={screen === key ? "active" : ""}
            onClick={() => setScreen(key)}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
    <button className="logout-btn" onClick={logout}>Logout</button>
  </div>
);

export default Sidebar;