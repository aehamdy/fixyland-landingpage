import { info } from "../../config/Info";

function Logo() {
  return (
    <a
      href="#"
      className="flex justify-center items-center font-bold md:text-medium lg:text-3xl text-content-dark bg-white hover:scale-110 transition-all"
    >
      {info.company.name}
    </a>
  );
}

export default Logo;
