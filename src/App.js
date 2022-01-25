import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
// import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <NavBar title="TextUtils" aboutText="About TextUtils" />

      {/* <TextForm /> */}
      <About/>
    </>
  );
}

export default App;
