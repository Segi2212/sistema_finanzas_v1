import { InputGroup } from "./ui/input-group";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { CalendarMinus2 } from "lucide-react";
import { es } from "date-fns/locale";
import { useState } from "react";

function HeaderBar() {
  return (
    <header className="fixed top-0 z-50 flex w-full h-14 items-center border-b px-normal">
      <div className="ml-auto">
        <CalendarMain />
      </div>
    </header>
  );
}

function CalendarMain() {
  let dateNow = new Date();
  const [date, newDate] = useState<Date>(dateNow);
  const month = date.toLocaleDateString("es-MX", {
    month: "short",
  });
  const monthUC = month.charAt(0).toUpperCase() + month.slice(1);
  return (
    <Popover>
      <PopoverTrigger className="cursor-pointer">
        <InputGroup className="bg-tertiary-10 px-2">
          <CalendarMinus2 size="20" className="text-neutral-100" />
          <span className="flex-1 px-2">
            {monthUC} {date.getFullYear().toString()}
          </span>
        </InputGroup>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar mode="single" locale={es} />
      </PopoverContent>
    </Popover>
  );
}

export default HeaderBar;
