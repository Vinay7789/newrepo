import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Techform from "./components/Techform";
import About from "./components/About";
import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };
  const removeAllClasses=()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
  }

  const toggleMode = (csl) => {
    removeAllClasses()
    console.log(csl)
    document.body.classList.add('bg-' + csl)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    }
  };

  return (
    <>
     <Navbar title="Navbar" AboutMe="About" mode={mode} toggleMode={toggleMode} />
     <Alert alert = {alert}/>  
    {/* <BrowserRouter>
    
    <Navbar title="Navbar" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert = {alert}/>  
      <div className="container my-3">
        <Routes>   
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Techform heading="Enter the text to analyze below" onShowAlert={showAlert}/>} />
        </Routes>
      </div>
   </BrowserRouter>  */}
      <Techform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
<About  mode={mode}/>
    </>
  );
}
export default App;
