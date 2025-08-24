import { exploreList } from "../config/exploreList";
import { info } from "../config/info";
import { socials } from "../config/socials";
import Icon from "./common/Icon";
import Logo from "./common/Logo";

function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-12 w-full min-h-[66dvh] section-padding bg-surface-dark">
      <div className="flex flex-col gap-4">
        <Logo mode="light" />

        <p className="text-content-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit est aut,
          tempore ullam, incidunt
        </p>

        <ul className="flex items-center gap-3">
          {socials.map((social) => (
            <li
              key={social.id}
              className="p-2 md:p-4 text-content-light hover:text-content-dark bg-white/20 hover:bg-white rounded-lg overflow-hidden transition-colors"
            >
              <a href={social.link} className="">
                <Icon name={social.iconName} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-xl text-content-light">EXPLORE</h3>

          <ul className="flex flex-col gap-2">
            {exploreList.map((explore) => (
              <li
                key={explore.id}
                className="flex w-fit text-content-muted hover:text-content-light whitespace-nowrap transition-colors duration-300"
              >
                <a href={explore.link} className="">
                  {explore.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 text-content-light">
          <h3 className="font-bold text-xl">CONTACT</h3>

          <div className="flex flex-col gap-4">
            <address className="text-content-muted">
              {info.company.address}
            </address>

            <p className="">{info.company.phone}</p>

            <p className="">{info.company.email}</p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex flex-col justify-around w-full p-6 text-content-light bg-white/5 rounded-xl">
          <h3 className="font-bold text-2xl">NEWSLETTER</h3>

          <div className="">
            <input
              type="email"
              placeholder="Ex. Info@domain.com"
              className="w-full py-2 border-b border-white/80 placeholder:text-content-muted"
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" name="newsletter" id="newsletter" />

            <label htmlFor="newsletter">
              I agree to the terms and conditions
            </label>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
