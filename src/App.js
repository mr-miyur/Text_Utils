import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";

import TextForm from "./components/TextForm";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <NavBar title="TextUtils" aboutText="About TextUtils" />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} />
      <About />
    </>
  );
}

export default App;
