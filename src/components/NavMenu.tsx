import { navItems } from "../config/navItems";
import NavItem from "./common/NavItem";

type NavMenuProps = {
  isNavMenuOpen: boolean;
};

function NavMenu({ isNavMenuOpen }: NavMenuProps) {
  return (
    <div
      className={`flex md:hidden absolute min-w-[150px] w-2/5 end-5xl top-[calc(100%+0.5rem)] bg-surface-light rounded-md overflow-hidden ${
        isNavMenuOpen
          ? "top-[calc(100%+1rem)] opacity-100 z-40 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } transition-all duration-normal`}
    >
      <ul className="w-full">
        {navItems.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default NavMenu;
