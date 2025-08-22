import { navItems } from "../config/navItems";
import NavItem from "./common/NavItem";

function NavMenu() {
  return (
    <div className="flex md:hidden bg-surface-light rounded-md overflow-hidden">
      <ul className="w-full">
        {navItems.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default NavMenu;
