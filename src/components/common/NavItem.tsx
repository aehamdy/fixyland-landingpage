import type { NavItemProps } from "../../config/navItems";
import Icon from "./Icon";

function NavItem({ item }: { item: NavItemProps }) {
  return (
    <li className={`group ${item.isButton && "md:hidden"}`}>
      <a
        href={item.link}
        className="flex items-center gap-1 py-xs md:py-0 ps-xxs md:text-small lg:text-base group-hover:ps-lg md:group-hover:ps-0 md:ps-0 md:group-hover:text-accent-secondary group-hover:bg-accent-secondary md:group-hover:bg-transparent transition-all duration-300"
      >
        {item.label}
        <span className="hidden md:flex">
          {item.hasSubmenu && <Icon name="chevron-down" />}
        </span>
      </a>
    </li>
  );
}

export default NavItem;
