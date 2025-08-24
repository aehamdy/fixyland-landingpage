import { info } from "../../config/info";

type LogoProps = {
  mode: "dark" | "light";
  isScalable?: boolean;
};

function Logo({ mode, isScalable }: LogoProps) {
  return (
    <a
      href="#"
      className={`flex justify-center items-center font-bold md:text-medium lg:text-3xl ${
        mode === "dark" ? "text-content-dark" : "text-content-light"
      } ${isScalable && "hover:scale-110 transition-all"}`}
    >
      {info.company.name}
    </a>
  );
}

export default Logo;
