import { Home, Settings2, Info, SquareTerminal, Hexagon } from "lucide-react";

export const appSidebarData = {
  user: {
    name: "castor12m",
    email: "engineer",
    avatar: ""
  },
  basic: [
    {
      title: "Home",
      url: "/home",
      icon: Home
    },
    {
      title: "Patches",
      url: "/patches",
      icon: Hexagon,
      badge: "11"
    }
  ],
  navMain: [
    {
      title: "Playground",
      url: "/playground",
      icon: SquareTerminal,
      isActive: false,
      items: []
    }
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2
    },
    {
      title: "About",
      url: "/about",
      icon: Info
    }
  ]
};
