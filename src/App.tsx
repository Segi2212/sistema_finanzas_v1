import "./App.css";
import HeaderBar from "./components/HeaderBar";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Configuration from "./components/Configuration";
import { Routes, Route } from "react-router";
import { type IUserData } from "./components/Dashboard";

const userData: IUserData = {
  name: "Oscar",
  gender: "masculino",
};

function App() {
  return (
    <div className="flex">
      <div className="w-auto h-dvh">
        <NavBar></NavBar>
      </div>
      <div className="flex-1 w-auto bg-tertiary-05">
        <div className="">
          <HeaderBar></HeaderBar>
        </div>
        <div className="h-auto bg-tertiary-05 p-9">
          <Routes>
            <Route path="/" element={<Dashboard userData={userData} />} />
            <Route path="/conf" element={<Configuration />} />
          </Routes>
          {/* <Dashboard userData={userData} /> */}
        </div>
      </div>
    </div>
  );
}
// ! Solicitar y mandar datos desde aquí

export default App;
