export const daysC = [
  { id: 1, value: "lunes", label: "Lunes" },
  { id: 2, value: "martes", label: "Martes" },
  { id: 3, value: "miercoles", label: "Miércoles" },
  { id: 4, value: "jueves", label: "Jueves" },
  { id: 5, value: "viernes", label: "Viernes" },
  { id: 6, value: "sabado", label: "Sábado" },
  { id: 7, value: "domingo", label: "Domingo" },
] as const;

export type daysT =
  | "Lunes"
  | "Martes"
  | "Miércoles"
  | "Jueves"
  | "Viernes"
  | "Sábado"
  | "Domingo";

//   type daysT = typeof daysC[number]["label"];
