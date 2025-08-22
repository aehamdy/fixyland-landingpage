export type NavItemProps = {
  id: number;
  label: string;
  link: string;
  hasSubmenu?: boolean;
  isButton?: boolean;
};

export const navItems: NavItemProps[] = [
  {
    id: 1,
    label: "Home",
    link: "#",
    hasSubmenu: true,
  },
  {
    id: 2,
    label: "Pages",
    link: "#",
    hasSubmenu: true,
  },
  {
    id: 3,
    label: "Rooms & Suites",
    link: "#",
    hasSubmenu: true,
  },
  {
    id: 4,
    label: "Services",
    link: "#",
    hasSubmenu: true,
  },
  {
    id: 5,
    label: "Blog",
    link: "#",
    hasSubmenu: true,
  },
  {
    id: 6,
    label: "Contact",
    link: "#",
    hasSubmenu: false,
  },
  {
    id: 7,
    label: "Book Your Stay",
    link: "#",
    hasSubmenu: false,
    isButton: true,
  },
];
