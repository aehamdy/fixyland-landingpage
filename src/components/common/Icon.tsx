import { FaBehance, FaRegCheckCircle } from "react-icons/fa";
import { FaPersonSwimming } from "react-icons/fa6";
import { IoIosBicycle } from "react-icons/io";
import {
  LuArrowUpRight,
  LuBath,
  LuBed,
  LuCalendar,
  LuChevronDown,
  LuFacebook,
  LuMenu,
  LuMoon,
  LuPlus,
  LuQuote,
  LuSearch,
  LuStar,
  LuSun,
  LuUserRound,
  LuUsersRound,
} from "react-icons/lu";
import { MdBathtub } from "react-icons/md";
import { PiTowel } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { RxInstagramLogo } from "react-icons/rx";

export type IconName =
  | "facebook"
  | "x"
  | "instagram"
  | "behance"
  | "magnifying-glass"
  | "menu"
  | "arrow-up-right"
  | "chevron-down"
  | "bicycle"
  | "bathtub"
  | "swimming"
  | "towel"
  | "circle-check"
  | "star"
  | "quote"
  | "bed"
  | "bath"
  | "plus"
  | "calendar"
  | "user"
  | "users"
  | "sun"
  | "moon";

const iconMap = {
  facebook: LuFacebook,
  x: RiTwitterXFill,
  instagram: RxInstagramLogo,
  behance: FaBehance,
  "magnifying-glass": LuSearch,
  menu: LuMenu,
  "arrow-up-right": LuArrowUpRight,
  "chevron-down": LuChevronDown,
  bicycle: IoIosBicycle,
  bathtub: MdBathtub,
  swimming: FaPersonSwimming,
  towel: PiTowel,
  "circle-check": FaRegCheckCircle,
  star: LuStar,
  quote: LuQuote,
  bed: LuBed,
  bath: LuBath,
  plus: LuPlus,
  calendar: LuCalendar,
  user: LuUserRound,
  users: LuUsersRound,
  sun: LuSun,
  moon: LuMoon,
};

interface IconProps {
  name: IconName;
  size?: number | string;
  className?: string;
}

function Icon({ name, size = 21, className = "" }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(
      `Icon ${name} not found, Please check icon name or import icon`
    );
  }

  return <IconComponent className={className} size={size} />;
}

export default Icon;
