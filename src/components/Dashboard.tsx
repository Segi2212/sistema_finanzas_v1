import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  ChartContainer,
  ChartTooltipContent,
  ChartTooltip,
  type ChartConfig,
} from "./ui/chart";
import { CartesianGrid, XAxis, Bar, BarChart } from "recharts";
import {} from "lucide-react";
import { Plus, Landmark, ArrowDown, CreditCard, PiggyBank } from "lucide-react";

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
      <div className="flex mt-5">
        <div className="flex-4 h-auto w-auto p-3">
          <AnnualReport />
        </div>
        <div className="flex-2 h-100 w-auto p-3"></div>
      </div>
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
        <Card className="relative flex-1 rounded-sm">
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

function AnnualReport() {
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "var(--chart-1)",
    },
    mobile: {
      label: "Mobile",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig;

  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  return (
    <div>
      <Card>
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:py-0!">
          <CardTitle>Ingresos - Egresos por mes</CardTitle>
          <CardDescription>
            Comparativa analítica de entradas líquidas vs compromisos de gastos
          </CardDescription>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <BarChart data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dashed" />}
                />
                <Bar
                  dataKey="desktop"
                  fill="var(--color-primary-200)"
                  radius={4}
                />
                <Bar
                  dataKey="mobile"
                  fill="var(--color-secondary-200)"
                  radius={4}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex">
            <CardChartAnnual />
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}

function CardChartAnnual() {
  const comparativeDate = [
    { title: "Promedio Ingresos", money: 1 },
    { title: "Promedio Gastos", money: 1 },
    { title: "Promedio Gastos", money: 1 },
  ];
  return (
    <div className="flex w-full gap-x-3">
      {comparativeDate.map((item) => (
        <Card className="flex-1 gap-0">
          <CardHeader>
            <CardTitle className="text-xs">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <span>{item.money} $</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Dashboard;
