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

function NavigationBar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="h-14">
          <span className="m-auto text-3xl font-bold">Finanzas</span>
        </SidebarHeader>
        <SidebarContent className="bg-teal-50">
          <SidebarGroup>
            <SidebarGroupLabel className="text-ml font-extrabold">
              General
            </SidebarGroupLabel>
            <MainItems></MainItems>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="bg-secondary-100 mt-auto">
          <span>Footer</span>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}

function MainItems() {
  const projects = [
    { name: "Uno", url: "uno", icon: "icon" },
    { name: "Dos", url: "dos", icon: "icon" },
  ];
  return (
    <>
      <SidebarMenu>
        {projects.map((project) => (
          <SidebarMenuItem key={project.name}>
            <SidebarMenuButton render={<a href={project.url} />}>
              <project.icon />
              <span>{project.name}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </>
  );
}

export default NavigationBar;
