import { Download, Landmark, Settings, Watch, X } from "lucide-react";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "./ui/tabs";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Field, FieldError, FieldLabel } from "./ui/field";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

// Tipos
import type { gendersT } from "../Catalogs/Gender";
import type { coinsT } from "../Catalogs/Coins";

// Catálogos
import { gendersC } from "../Catalogs/Gender";
import { coinsC } from "../Catalogs/Coins";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function Configuration() {
  const [selectedTab, setSelectedTab] = useState("a");
  return (
    <div className="">
      <div className="text-2xl font-medium">
        <span>Sistema</span> <span>Ajustes Globales</span>
      </div>
      <div className="text-4xl font-bold mt-2">
        Configuración y Preferencias
      </div>
      <div className="w-full mt-3">
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="gap-2" variant="default">
            <TabsTrigger className="p-4" value="a">
              <Settings
                className={selectedTab == "a" ? "text-primary-200" : ""}
              />
              Generales
            </TabsTrigger>
            <TabsTrigger className="p-4" value="b">
              <Landmark
                className={selectedTab == "b" ? "text-primary-200" : ""}
              />
              Cuentas
            </TabsTrigger>
            <TabsTrigger className="p-4" value="c">
              <Download
                className={selectedTab == "c" ? "text-primary-200" : ""}
              />
              Exportación
            </TabsTrigger>
          </TabsList>
          <TabsContent value="a">
            <FormGeneralData1></FormGeneralData1>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function FormGeneralData1() {
  const formSchema = z.object({
    name: z
      .string({ error: "Introduzca un nombre" })
      .min(3, "Mínimo 3 caracteres")
      .max(25, "Máximo 25 caracteres"),
  });

  type FormData = z.infer<typeof formSchema>;

  const {
    trigger,
    formState: { errors },
    register,
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
    mode: "onChange",
  });

  const validateForm = async () => {
    await trigger();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Datos Generales</CardTitle>
        <CardDescription>
          Información general de la persona propietaria de la cuenta.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="mt-4 grid grid-cols-2 gap-2">
          {/* Nombre */}
          <Label className="flex flex-col w-full">
            <Label className="mr-auto">Nombre</Label>
            <div className="w-full flex">
              <Input
                placeholder="Nombre"
                {...register("name")}
                aria-invalid={errors.name?.message !== undefined}
              ></Input>
              {watch("name") && (
                <X
                  className="h-full w-auto pl-2 cursor-pointer"
                  onClick={() => setValue("name", "")}
                ></X>
              )}
            </div>
            {errors.name?.message && (
              <FieldError className="mr-auto">
                {errors.name?.message}
              </FieldError>
            )}
          </Label>

          {/* Género */}
        </form>
      </CardContent>
      <CardFooter>
        <Button
          type="button"
          className="ml-auto bg-secondary-300"
          onClick={() => validateForm()}
        >
          Guardar
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Configuration;
