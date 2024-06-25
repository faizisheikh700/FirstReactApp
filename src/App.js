import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import About from './components/About';


function App() {
  
  const [mode, setMode] = useState("light"); // Dark mode enable h ya nh ye btata hn

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1908a1";
      showAlert(" :dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" :light mode has neen enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="First Apps"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      {/* <Navbar/> */}
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter Text Here" mode={mode} />
        {/* <About/> */}

      </div>
    </>
  );
}

export default App;
