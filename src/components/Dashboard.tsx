import { Button } from "./ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  Plus,
  Download,
  Landmark,
  ArrowDown,
  CreditCard,
  PiggyBank,
} from "lucide-react";

type gender = "masculino" | "femenino";

export interface IUserData {
  name: string;
  lastName: string;
  age: number;
  gender: gender;
}

function Dashboard({ userData }: { userData: IUserData }) {
  return (
    <div className="">
      <HeaderDashBoard userData={userData}></HeaderDashBoard>
      <CardMoney></CardMoney>
    </div>
  );
}

function HeaderDashBoard({ userData }: { userData: IUserData }) {
  return (
    <div className="flex gap-x-4">
      <div className="row-span-1 flex-1">
        <div>
          <span className="text-[30px] font-medium">Resumen financiero</span>
        </div>
        <div>
          <span className="text-[15px] font-small">
            {userData.gender! == "masculino" ? "Bienvenido" : "Bienvenida"} de
            vuelta, {userData.name}. Aquí tienes el pulso de tu patrimonio a la
            fecha de hoy.
          </span>
        </div>
      </div>
      <div className="flex-1 flex justify-center gap-x-8">
        <Button className="bg-primary-200 my-auto p-5 text-lg">
          <Plus />
          Registrar movimiento
        </Button>
        {/* <Button className="bg-primary-200 my-auto p-5 text-lg">
          <Download />
          Descargar informe
        </Button> */}
      </div>
    </div>
  );
}

function CardMoney() {
  const cards = [
    { title: "Balance total neto", icon: Landmark, money: 1 },
    { title: "Ingresos mensuales", icon: ArrowDown, money: 2 },
    { title: "Gastos mensuales", icon: CreditCard, money: 3 },
    { title: "Tasa de ahorro", icon: PiggyBank, money: 4 },
  ];
  return (
    <div className="flex gap-x-4 mt-4">
      {cards.map((item) => (
        <Card className="relative flex-1 ">
          <CardHeader className="">
            <CardTitle className="flex align-center justify-between">
              <div className="my-auto uppercase">{item.title}</div>
              <div className="p-1 bg-secondary-10 rounded-sm">
                <item.icon className="text-primary-300" />
              </div>
            </CardTitle>
          </CardHeader>
          <CardDescription className=" px-4">
            <div className="text-4xl text-primary-400 font-bold">
              {item.money} $
            </div>
          </CardDescription>
        </Card>
      ))}
    </div>
  );
}

export default Dashboard;
