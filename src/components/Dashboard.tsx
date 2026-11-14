import { Button } from "./ui/button";
import { Kbd } from "./ui/kbd";
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
import {
  CartesianGrid,
  XAxis,
  Bar,
  BarChart,
  PieChart,
  Pie,
  Label,
} from "recharts";
import { TraceIcon, TraceLine, TraceTitle } from "./ui/trace";
import { Shield } from "lucide-react";
import {
  Plus,
  Landmark,
  ArrowDown,
  CreditCard,
  PiggyBank,
  ArrowRight,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "./ui/attachment";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

type gender = "masculino" | "femenino";

export interface IUserData {
  name: string;
  lastName: string;
  age: number;
  gender: gender;
}

function Dashboard({ userData }: { userData: IUserData }) {
  return (
    <div>
      <HeaderDashBoard userData={userData}></HeaderDashBoard>
      <CardMoney></CardMoney>
      <div className="flex mt-5 gap-x-5">
        <div className="flex-4 h-auto w-auto">
          <div>
            <CardAnnualReport />
          </div>
          <div>
            <LatestMovements />
          </div>
        </div>
        <div className="flex-2 h-100 w-auto">
          <CompareExpenses month="Noviembre" />
          <NextPayments />
          <HeritageDiagnosis />
        </div>
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

function CardAnnualReport() {
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
        <div className="flex flex-1 flex-col justify-center pb-3">
          <CardHeader>
            <CardTitle>Flujo de Efectivo Mensual</CardTitle>
            <CardDescription>
              Comparativa analítica de entradas líquidas vs compromisos de
              gastos
            </CardDescription>
          </CardHeader>
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

function CompareExpenses({ month }: { month: string }) {
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "var(--chart-1)",
    },
    safari: {
      label: "Safari",
      color: "var(--chart-2)",
    },
    firefox: {
      label: "Firefox",
      color: "var(--chart-3)",
    },
    edge: {
      label: "Edge",
      color: "var(--chart-4)",
    },
    other: {
      label: "Other",
      color: "var(--chart-5)",
    },
  } satisfies ChartConfig;
  const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--primary-100)" },
    { browser: "safari", visitors: 200, fill: "var(--primary-200)" },
    { browser: "firefox", visitors: 287, fill: "var(--primary-300)" },
    { browser: "edge", visitors: 173, fill: "var(--primary-400)" },
    { browser: "other", visitors: 190, fill: "var(--primary-500)" },
  ];
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Distribución de Gastos</CardTitle>
          <CardDescription>Por categoría en {month}</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius={40}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-xl font-bold"
                          >
                            20 $
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Visitors
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="list-item columns-1">
          {chartData.map((item) => (
            <TraceLine className="px-3 w-auto">
              <TraceIcon>
                <div
                  className="rounded-2xl w-3 h-3"
                  style={{ backgroundColor: item.fill }}
                ></div>
              </TraceIcon>
              <TraceTitle className="flex w-full">
                <div className="flex w-full">
                  <div className="w-full flex justify-between text-right">
                    <div className="mr-auto">{item.browser}</div>
                    <div className="ml-auto text-right">{item.visitors} $</div>
                  </div>
                </div>
              </TraceTitle>
            </TraceLine>
          ))}
        </CardFooter>
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

function LatestMovements() {
  const lastMovements = [
    { icon: ArrowDown, concept: "1", category: "2", date: "", amount: 0 },
    { icon: ArrowDown, concept: "1", category: "2", date: "", amount: 0 },
    { icon: ArrowDown, concept: "1", category: "2", date: "", amount: 0 },
    { icon: ArrowDown, concept: "1", category: "2", date: "", amount: 0 },
    { icon: ArrowDown, concept: "1", category: "2", date: "", amount: 0 },
  ];
  return (
    <div>
      <Card className="mt-4">
        <div>
          <CardHeader>
            <CardTitle>Últimos Movimientos</CardTitle>
            <CardDescription>
              Operaciones bancarias sincronizadas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table className="mt-4">
              <TableHeader className="bg-secondary-10">
                <TableRow>
                  <TableHead className="text-center">Concepto</TableHead>
                  <TableHead className="text-center">Categoría</TableHead>
                  <TableHead className="text-center">Fecha</TableHead>
                  <TableHead className="text-center">Monto</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {lastMovements.map((item) => (
                  <TableRow>
                    <TableCell className="flex font-medium align-center">
                      <item.icon />
                      <span>{item.concept}</span>
                    </TableCell>
                    <TableCell className="text-center">
                      <Kbd className="p-3 text-primary-300 bg-secondary-10">
                        {item.concept}
                      </Kbd>
                    </TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell className="text-right">${item.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <div className="flex mt-4 justify-center text-md text-secondary-400 cursor-pointer">
            <span className="my-auto">
              Ver todos los movimientos del periodo
            </span>
            <ArrowRight className="ml-2" my-auto size="20" />
          </div>
        </div>
      </Card>
    </div>
  );
}

function NextPayments() {
  const debts = [
    { icon: ArrowDown, title: "Parte 1", date: "fecha1", money: 1 },
    { icon: ArrowDown, title: "Parte 2", date: "fecha1", money: 1 },
  ];
  return (
    <div>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Próximos Vencimientos</CardTitle>
          <CardDescription>De los proximos 7 días</CardDescription>
        </CardHeader>
        <CardContent>
          {debts.map((item) => (
            <Attachment className="w-full flex mt-1">
              <AttachmentMedia>
                <item.icon />
              </AttachmentMedia>
              <AttachmentContent className="">
                <AttachmentTitle>{item.title}</AttachmentTitle>
                <AttachmentDescription>{item.date}</AttachmentDescription>
              </AttachmentContent>
              <AttachmentActions>{item.money}</AttachmentActions>
            </Attachment>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

function HeritageDiagnosis() {
  return (
    <div>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Diagnóstico Patrimonial</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-6xl text-primary-400">88%</div>
          <div className="mt-2 h-4 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-secondary-400"
              style={{ width: "88%" }}
            />
          </div>
          <Alert className="mt-4 bg-secondary-10">
            <Shield
              color="var(--color-primary-300)"
              className="font-primary-300"
            />
            <AlertTitle>Fondo de Emergencia</AlertTitle>
            <AlertDescription>
              Dispones de liquidez asegurada para sostener tu nivel de vida
              actual durante 8 meses completos sin requerir nuevos ingresos.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

export default Dashboard;
