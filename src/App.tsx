import "./App.css";
import HeaderBar from "./components/HeaderBar";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";

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
        <div className="h-auto bg-tertiary-10 p-9">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
