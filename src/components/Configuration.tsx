import { Download, Landmark, Settings, X } from "lucide-react";
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
import { FieldError, FieldLabel } from "./ui/field";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

// Catálogos
import { gendersC } from "../Catalogs/Gender";
import { coinsC } from "../Catalogs/Coins";

import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
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
    gender: z
      .number({ error: "Selecciona un género" })
      .int({ error: "Selecciona un género" })
      .positive({ error: "Selecciona un género valido" }),
    coin: z
      .number({ error: "Selecciona una divisa" })
      .int({ error: "Selecciona una divisa" })
      .positive({ error: "Selecciona una divisa valida" }),
  });

  type FormData = z.infer<typeof formSchema>;

  const {
    trigger,
    formState: { errors },
    register,
    setValue,
    getValues,
    watch,
    control,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      gender: undefined,
      coin: undefined,
    },
    mode: "onChange",
  });
  const genderItems = gendersC.map((g) => ({ value: g.id, label: g.label }));
  const coinsItems = coinsC.map((g) => ({ value: g.id, label: g.label }));

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
        <form className="mt-4 grid grid-cols-2 gap-4">
          {/* Nombre */}
          <Label className="flex flex-col w-full">
            <FieldLabel className="mr-auto">Nombre</FieldLabel>
            <div className="w-full flex">
              <Input
                placeholder="Ingresa tu nombre"
                {...register("name")}
                aria-invalid={errors.name?.message !== undefined}
              ></Input>
              {}
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
          {/* field.value     // valor actual del formulario
              field.onChange  // para avisarle a RHF que cambió
              field.onBlur    // para marcar el campo como "touched"
              field.ref       // para poder hacer focus automático al campo con error
              fieldState      // { error, invalid, isTouched, isDirty } */}
          <Label className="flex flex-col w-full">
            <FieldLabel className="mr-auto">Género</FieldLabel>
            <div className="w-full">
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Select
                    items={genderItems}
                    value={field.value ?? null}
                    onValueChange={(v) => field.onChange(v ?? undefined)}
                  >
                    <div className="flex">
                      <SelectTrigger
                        ref={field.ref}
                        onBlur={field.onBlur}
                        aria-invalid={errors.gender?.message !== undefined}
                        className="w-full"
                      >
                        <SelectValue placeholder="Selecciona un género" />
                      </SelectTrigger>
                      {field.value != null && (
                        <X
                          className="my-auto cursor-pointer"
                          onClick={() => field.onChange(undefined)}
                        />
                      )}
                    </div>

                    <SelectContent alignItemWithTrigger={false}>
                      <SelectGroup>
                        {genderItems.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            {errors.gender?.message !== undefined && (
              <FieldError className="mr-auto">
                {errors.gender?.message}
              </FieldError>
            )}
          </Label>

          {/* Divisa */}
          <Label className="grid grid-cols-1">
            <FieldLabel>Divisa</FieldLabel>
            <div className="w-full">
              <Controller
                name="coin"
                control={control}
                render={({ field }) => (
                  <Select
                    items={coinsItems}
                    value={field.value ?? null}
                    onValueChange={(v) => field.onChange(v ?? undefined)}
                  >
                    <div className="flex ">
                      <SelectTrigger
                        ref={field.ref}
                        onBlur={field.onBlur}
                        className="w-full"
                        aria-invalid={errors.coin?.message !== undefined}
                      >
                        <SelectValue placeholder="Selecciona una divisa" />
                      </SelectTrigger>
                      {getValues("coin") != undefined && (
                        <X
                          className="my-auto"
                          onClick={() => field.onChange(undefined)}
                        />
                      )}
                    </div>
                    <SelectContent>
                      <SelectGroup>
                        {coinsC.map((item) => (
                          <SelectItem key={item.id} value={item.id}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.coin?.message !== undefined && (
                <FieldError>{errors.coin?.message}</FieldError>
              )}
            </div>
          </Label>
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
