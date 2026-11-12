import "./App.css";
import HeaderBar from "./components/HeaderBar";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="flex">
      <div className="w-auto h-dvh">
        <NavBar></NavBar>
      </div>
      <div className="flex-1 w-auto">
        <div className="">
          <HeaderBar></HeaderBar>
        </div>
        <div className="h-200"></div>
      </div>
    </div>
  );
}

export default App;
