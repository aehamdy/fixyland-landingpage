import aboutImage from "../assets/about.webp";
import { aboutList } from "../config/aboutList";
import { info } from "../config/info";
import Heading from "./common/Heading";
import Icon from "./common/Icon";
import SectionHeading from "./common/SectionHeading";
import SectionTitle from "./common/SectionTitle";
import ceoImage from "../assets/ceo-avatar.webp";
import Form from "./Form";

function About() {
  return (
    <section className="relative grid grid-cols-1 md:grid-cols-2 items-center w-full h-dvh section-padding py-6xl md:py-14xl bg-surface-alt dark:bg-surface-dark">
      <Form />

      <div className="relative w-full md:w-3/4 lg:w-3/5 h-3/4 mx-auto rounded-xlarge overflow-hidden">
        <img
          src={aboutImage}
          alt="about-image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="">
        <div className="flex flex-col gap-1 md:gap-2 w-3/4 md:w-full">
          <SectionTitle title={`About ${info.company.name}`} />
          <SectionHeading title="World Class Luxury Hotel and Resort Near City" />
        </div>

        <p className="w-3/4 md:w-full my-3 md:my-6 text-small md:text-regular lg:text-base text-content-dark dark:text-content-light">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          suscipit earum laborum nemo harum unde labore est dolorum, aspernatur
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2 my-3 md:my-6 text-small md:text-small lg:text-base text-content-muted dark:text-content-light">
          {aboutList.map((item) => (
            <li key={item.id} className="flex items-center gap-2">
              <Icon name="circle-check" className="text-accent-primary" />
              {item.label}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full overflow-hidden">
            <img
              src={ceoImage}
              alt="ceo-image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col md:gap-1">
            <Heading
              level="h4"
              title="Robert L. Robinson"
              className="font-semibold md:text-xl text-content-dark-alt dark:text-content-light"
            />
            <p className="text-regular md:text-base text-content-muted dark:text-content-light">
              CEO & Founder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
