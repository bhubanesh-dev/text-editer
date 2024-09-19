import "./App.css";
import Alert from "./componets/Alert";
//import About from './componets/About';
import Contentarea from "./componets/Contentarea";
import Footer from "./componets/Footer";
import Navbar from "./componets/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from "react";
import About from "./componets/About";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);

    /*setInterval(() => {
      document.title="TEXT Editer: Paste";
    },300);
    setInterval(() => {
      document.title="TEXT Editer: Edit";
    },500);
    setInterval(() => {
      document.title="TEXT Editer: Copy";
    },700);
    */
  };
  const [mode, setmode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      showAlert("Dark mode enable", "success");

      document.body.style.backgroundColor = "#251d3b";

      console.log(alert);
      console.log("toggle mode triggered enabling dark mode");
    } else {
      setmode("light");
      showAlert("Dark mode disabled", "success");
      document.body.style.backgroundColor = "lightgrey";

      console.log(alert);
      console.log("toggle mode triggered for disabling dark mode");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TEXT Editer"
          linkedwith="help"
          toggleMode={toggleMode}
          mode={mode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/About" element={<About mode={mode}/>} />
          <Route exact path="/" element={ <Contentarea heading="Enter your text below"  mode={mode} showAlert={showAlert} />} />
        </Routes>
        <Footer mode={mode} />
      </Router>
    </>
  );
}

export default App;
