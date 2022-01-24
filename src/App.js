import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
  <NavBar title="TextUtils"  aboutText="About TextUtils"/>
  <div className="container my-3">
  <TextForm/>
  </div>


  </>
  );
}

export default App;
