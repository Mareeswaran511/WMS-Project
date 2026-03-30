import React, { useState } from "react";
import Home from "./Home";
import Login from "./Login";
import WaveCreation from "./WaveCreation";
import WaveLaunch from "./WaveLaunch";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin 
        ? <Login onLogin={() => setIsLogin(false)} />
        : <Home />
      }
    </>
  );
}

export default App;