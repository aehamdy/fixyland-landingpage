import { useState } from "react";
import Logo from "./common/Logo";
import NavBar from "./NavBar";
import NavMenu from "./NavMenu";
import UserActions from "./UserActions";

function Header() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  return (
    <header className="relative flex items-center justify-between w-full pe-5xl bg-transparent">
      <NavMenu isNavMenuOpen={isNavMenuOpen} />

      <div className="flex justify-center items-center h-full py-sm md:py-lg px-2xl md:px-6xl lg:px-9xl font-bold text-3xl text-content-dark bg-white">
        <Logo />
      </div>

      <NavBar />

      <UserActions toggleNavMenu={toggleNavMenu} />
    </header>
  );
}

export default Header;
