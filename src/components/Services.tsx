import { info } from "../config/info";
import { serviceList } from "../config/serviceList";
import Icon from "./common/Icon";
import SectionHeading from "./common/SectionHeading";
import SectionTitle from "./common/SectionTitle";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap3 md:gap-6 h-dvh section-padding bg-surface-light dark:bg-surface-dark">
      <div className="space-y-2 md:space-y-4">
        <div className="space-y-2 md:space-y-4">
          <SectionTitle title="Hotel Services" />

          <SectionHeading
            title={`Get The Best Hotel ${info.company.name} Services`}
          />
        </div>

        <p className="text-small md:text-regular text-content-muted dark:text-content-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          modi, eius dolorum dolorem nesciunt illum! Possimus quo nisi,
          perferendis nulla maxime placeat obcaecati non fugiat dolorem quia at
          natus veritatis.
        </p>

        <div className="w-fit py-2 px-2 md:px-3 rounded-medium bg-accent-primary">
          <a
            href="#"
            className="flex items-center gap-3 text-regular md:text-base text-content-light"
          >
            View All <Icon name="arrow-up-right" />
          </a>
        </div>
      </div>

      <ul className="grid grid-cols-2 gap-2 md:gap-4">
        {serviceList.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </ul>
    </section>
  );
}

export default Services;
