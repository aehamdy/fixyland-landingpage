import { navItems } from "../config/navItems";
import NavItem from "./common/NavItem";

function NavBar() {
  return (
    <nav className="hidden md:flex">
      <ul className="flex items-center gap-2 font-semibold text-content-light">
        {navItems.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
