import { Download, Landmark, Settings } from "lucide-react";
import { Tabs, TabsTrigger, TabsList } from "./ui/tabs";
import { useState } from "react";

function Header() {
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
        </Tabs>
      </div>
    </div>
  );
}

export default Header;
