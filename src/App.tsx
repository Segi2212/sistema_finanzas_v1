import "./App.css";
import HeaderBar from "./components/HeaderBar";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import { type IUserData } from "./components/Dashboard";

const userData: IUserData = {
  name: "Oscar",
  lastName: "Juarez",
  age: 32,
  gender: "masculino",
};

function App() {
  return (
    <div className="flex">
      <div className="w-auto h-dvh">
        <NavBar></NavBar>
      </div>
      <div className="flex-1 w-auto bg-tertiary-10">
        <div className="">
          <HeaderBar></HeaderBar>
        </div>
        <div className="h-auto bg-tertiary-10 p-9">
          <Dashboard userData={userData} />
        </div>
      </div>
    </div>
  );
}
// ! Solicitar y mandar datos desde aquí

export default App;
