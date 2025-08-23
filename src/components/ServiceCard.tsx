import Icon from "./common/Icon";
import type { ServiceType } from "../config/serviceList";

function ServiceCard({ service }: { service: ServiceType }) {
  return (
    <li className="group h-[200px] rounded-large dark:border dark:border-accent-primary shadow-lg overflow-hidden">
      <div className="relative flex items-center h-full p-5">
        <div className="absolute w-full h-full top-1/2 start-0 -translate-y-1/2 flex flex-col items-start gap-2 p-3 group-hover:text-white">
          <Icon
            name={service.icon}
            size={64}
            className="text-content-dark dark:text-white"
          />

          <h3 className="font-bold text-medium md:text-xlarge text-content-dark group-hover:text-white dark:text-content-light">
            {service.title}
          </h3>

          <p className="text-content-muted group-hover:text-white dark:text-content-light">
            {service.description}
          </p>

          <div className="absolute w-full h-0 group-hover:h-full bottom-0 start-0 bg-accent-primary/90 duration-300 z-[-1]"></div>
        </div>
      </div>
    </li>
  );
}

export default ServiceCard;
