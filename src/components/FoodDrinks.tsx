import { foodList } from "../config/foodList";
import Icon from "./common/Icon";
import SectionHeading from "./common/SectionHeading";
import SectionTitle from "./common/SectionTitle";
import FoodItem from "./FoodItem";
import foodImage1 from "../assets/food-1.webp";
import foodImage2 from "../assets/food-2.webp";
import { popularClients } from "../config/popularClients";

function FoodDrinks() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 h-dvh section-padding bg-surface-light dark:bg-surface-dark">
      <div className="space-y-4">
        <div className="md:w-3/4 space-y-4 md:space-y-0">
          <SectionTitle title="Food & Drinks" />
          <SectionHeading title="Quality Food And Drinks Your Trip Are Enjoyable" />
        </div>

        <div className="text-regular md:text-base text-content-muted dark:text-content-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque non
          quo incidunt porro dolorem mollitia aliquid quibusdam accusamus esse
        </div>

        <ul className="flex flex-col gap-2">
          {foodList.map((food) => (
            <FoodItem key={food.id} food={food} />
          ))}
        </ul>

        <div className="w-fit py-2 px-2 text-small md:text-base rounded-medium text-content-light bg-accent-primary">
          <a href="" className="flex items-center gap-2">
            Learn More Hotel <Icon name="arrow-up-right" />
          </a>
        </div>
      </div>

      <div className="relative hidden md:grid grid-cols-2 gap-8">
        <div className="h-3/5 my-auto rounded-large overflow-hidden">
          <img src={foodImage1} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="h-3/5 rounded-large overflow-hidden">
          <img src={foodImage2} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="absolute top-3/4 start-1/2 -translate-y-3/4 -translate-x-1/2">
          <div className="relative flex flex-col items-center justify-center gap-3 w-full h-full py-2 px-4 bg-surface-light rounded-xl shadow-xl">
            <div className="text-accent-primary">Popular Clients</div>

            <div
              className="relative"
              style={{
                width: `140px`,
                height: "40px",
              }}
            >
              {popularClients.map((client, index) => (
                <div
                  key={client.id}
                  className="absolute w-10 h-10 border border-white rounded-full overflow-hidden"
                  style={{
                    left: `${index * 20}px`,
                    zIndex: index,
                  }}
                >
                  <img
                    src={client.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoodDrinks;
