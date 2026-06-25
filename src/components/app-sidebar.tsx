import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarFooter,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { appSidebarData } from "@/data/appSidebarData";
import { ChevronLeft } from "lucide-react";

const AppSidebar = () => {
  const location = useLocation();
  const { toggleSidebar, open } = useSidebar();

  const allItems = [
    ...appSidebarData.basic,
    ...appSidebarData.navMain,
    ...appSidebarData.navSecondary,
  ];

  const isActive = (url: string) => {
    if (url === "/home") return location.pathname === "/home" || location.pathname === "/";
    return location.pathname === url;
  };

  return (
    <Sidebar side='left' variant='sidebar' collapsible='icon'>∂
      <SidebarHeader className="px-3 pt-4 pb-2">
        <div className="flex items-center gap-3 px-1.5 py-1">
          <div
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[9px]"
            style={{
              background: 'linear-gradient(140deg, hsl(var(--primary)), hsl(var(--accent)))',
              boxShadow: '0 0 18px -4px hsl(var(--primary))',
            }}
          >
            <div className="h-[11px] w-[11px] rounded-full border-2 border-[#06121a]" />
          </div>
          <div className="group-data-[collapsible=icon]:hidden">
            <div className="text-[15px] font-extrabold tracking-[0.04em] text-foreground">CASTOR</div>
            <div className="mono mt-0.5 text-[9px] tracking-[0.14em] text-muted-foreground">^_^</div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 pt-2">
        <div className="mono mb-2 px-3 text-[10px] tracking-[0.16em] text-muted-foreground/60 group-data-[collapsible=icon]:hidden">
          MENU
        </div>
        <SidebarMenu>
          {allItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                className="relative"
              >
                <NavLink
                  to={item.url}
                  className={({ isActive: active }) => {
                    const a = isActive(item.url);
                    return `flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-colors ${
                      a
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`;
                  }}
                >
                  {isActive(item.url) && (
                    <div className="absolute left-0 top-1/2 h-[18px] w-[3px] -translate-y-1/2 rounded-r-full bg-primary" />
                  )}
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                  {(item as any).badge && (
                    <span className="mono ml-auto text-[10px] text-muted-foreground rounded-[5px] bg-card px-1.5 py-0.5 group-data-[collapsible=icon]:hidden">
                      {(item as any).badge}
                    </span>
                  )}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="px-3 pb-4">
        <button
          onClick={toggleSidebar}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-border px-3 py-2.5 text-[11px] font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft
            className="h-[15px] w-[15px] transition-transform"
            style={{ transform: open ? 'rotate(0deg)' : 'rotate(180deg)' }}
          />
          <span className="group-data-[collapsible=icon]:hidden">Collapse</span>
        </button>
        <div className="mt-2 flex items-center gap-2.5 px-2 group-data-[collapsible=icon]:hidden">
          <div
            className="h-[26px] w-[26px] flex-shrink-0 rounded-full"
            style={{ background: 'repeating-linear-gradient(45deg, #1a212c, #1a212c 4px, #222b38 4px, #222b38 8px)' }}
          />
          <div>
            <div className="text-[11px] font-semibold text-muted-foreground">castor12m</div>
            <div className="mono mt-0.5 text-[9px] text-muted-foreground/60">engineer</div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
