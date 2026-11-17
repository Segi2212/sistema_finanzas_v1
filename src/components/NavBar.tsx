import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarProvider,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
} from "./ui/sidebar";

import {
  Settings,
  TrendingUp,
  LayoutDashboard,
  ChartPie,
  ArrowRightLeft,
  Calendar1Icon,
  type LucideIcon,
} from "lucide-react";
import { useNavigate, NavLink } from "react-router";

type ItemsNav = {
  id: number;
  icon: LucideIcon;
  title: string | null;
  url: string;
};

function NavigationBar() {
  const navItems = [
    {
      section: "General",
      tabs: [
        { id: 0, icon: LayoutDashboard, title: "Dashboard", url: "/" },
        { id: 1, icon: ArrowRightLeft, title: "Movimientos", url: "b" },
      ],
    },
    {
      section: "Planificación",
      tabs: [
        { id: 2, icon: ChartPie, title: "Presupuestos", url: "c" },
        { id: 3, icon: Calendar1Icon, title: "Calendario", url: "d" },
      ],
    },
    {
      section: "Patrimonio",
      tabs: [{ id: 4, icon: TrendingUp, title: "Inversión", url: "e" }],
    },
  ];
  const navItemConf = [
    {
      section: "Sistema",
      tabs: [{ id: 5, icon: Settings, title: "Configuración", url: "f" }],
    },
  ];
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="h-14">
          <span className="m-auto text-3xl font-bold">Finanzas</span>
        </SidebarHeader>
        <SidebarContent className="">
          {navItems.map((section) => (
            <SidebarGroup key={section.section}>
              <SidebarGroupLabel className="text-sm text-secondary-400 font-extrabold">
                {section.section}
              </SidebarGroupLabel>
              <MainItems items={section.tabs} />
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarFooter className="mt-auto cursor-pointer">
          <NavLink to="conf">
            <SidebarGroupLabel className="text-sm text-neutral-100 font-extrabold">
              <Settings className="mr-2" />
              Configuración
            </SidebarGroupLabel>
          </NavLink>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}

function MainItems({ items }: { items: ItemsNav[] }) {
  const navigate = useNavigate();
  const projects = items;
  return (
    <SidebarMenu>
      {projects.map((project) => (
        <NavLink
          key={project.id}
          to={project.url}
          className={({ isActive }) =>
            isActive
              ? "bg-primary-100 text-white p-3 rounded-lg"
              : "text-gray-500 p-3 hover:bg-gray-100 rounded-lg"
          }
        >
          <SidebarMenuItem key={project.title}>
            <SidebarMenuButton onClick={() => navigate(project.url)}>
              <project.icon />
              <span>{project.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </NavLink>
      ))}
    </SidebarMenu>
  );
}

export default NavigationBar;
