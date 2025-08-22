import { info } from "../config/info";
import { socials } from "../config/socials";
import Icon from "./common/Icon";

function TopBar() {
  return (
    <address className="flex justify-center md:justify-between items-center w-full py-xxs px-5xl text-content-light bg-accent-primary">
      <div className="flex items-center gap-3 text-[8px] md:text-regular">
        <div className="relative flex items-center gap-2">
          <span className="w-1 md:w-2 h-1 md:h-2 bg-accent-secondary rounded-full"></span>
          <span className="">{info.company.address}</span>
        </div>

        <div className="relative flex items-center gap-2">
          <span className="w-1 md:w-2 h-1 md:h-2 bg-accent-secondary rounded-full"></span>
          <a href="#" className="">
            {info.company.email}
          </a>
        </div>

        <div className="relative flex items-center gap-2">
          <span className="w-1 md:w-2 h-1 md:h-2 bg-accent-secondary rounded-full"></span>
          <span className="">{info.company.phone}</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-lg">
        {socials.map((social) => (
          <a key={social.id} href={social.link} className="">
            <Icon name={social.iconName} />
          </a>
        ))}
      </div>
    </address>
  );
}

export default TopBar;
