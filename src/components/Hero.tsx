import heroBackground from "../assets/hero.webp";
import { heroButtons } from "../config/heroButtons";
import Icon from "./common/Icon";
import Header from "./Header";

function Hero() {
  return (
    <section
      className="relative w-full h-[calc(100dvh-24px)] md:h-[calc(100dvh-33px)] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="absolute w-full z-30">
        <Header />
      </div>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="flex flex-col items-center gap-4">
          <h1 className="flex flex-col items-center gap-4 font-bold text-4xl md:text-6xl leading-8 md:leading-12 text-white">
            Book With Best
            <span className="text-accent-secondary">Luxury Hotel</span>
          </h1>
          <p className="w-3/4 py-md text-center text-content-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut,
            dolores architecto laudantium magnam
          </p>

          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8">
            {heroButtons.map((button) => (
              <a
                key={button.id}
                href={button.link}
                className={`group flex items-center gap-2 py-sm md:py-md px-sm md:px-lg text-content-dark ${
                  button.isCTA ? "bg-accent-secondary" : "bg-surface-light"
                } rounded-medium hover:scale-105 transition-all`}
              >
                {button.label}{" "}
                <Icon
                  name="arrow-up-right"
                  className="group-hover:translate-x-2 transition-all"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
