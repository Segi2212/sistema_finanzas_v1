import { Button } from "./ui/button";
type gender = "masculino" | "femenino";

interface userData {
  name: "Oscar";
  lastName: "Juarez";
  age: "32";
  gender: "masculino";
}

function Dashboard() {
  return (
    <div className="">
      <HeaderDashBoard />
    </div>
  );
}

function HeaderDashBoard() {
  return (
    <div className="flex gap-x-4">
      <div className="row-span-1 flex-1">
        <div>
          <span className="text-[30px] font-medium">Resumen financiero</span>
        </div>
        <div>
          <span className="text-[15px] font-small">
            Bienvenid de vuelta, . Aquí tienes el pulso de tu patrimonio a fecha
            de hoy.
          </span>
        </div>
      </div>
      <div className="flex-1 flex justify-center gap-x-8">
        <Button className="bg-primary-200 my-auto p-5 text-lg">
          Registrar movimiento
        </Button>
        <Button className="bg-primary-200 my-auto p-5 text-lg">
          Descargar informe
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;
