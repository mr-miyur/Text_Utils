import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1800);
  };

  return (
    <>
    <Router>
      <NavBar title="TextUtils" aboutText="About TextUtils" />
      <Alert alert={alert} />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <TextForm showAlert={showAlert} />
        </Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
