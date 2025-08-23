import type { FoodType } from "../config/foodList";
import Icon from "./common/Icon";

interface FoodItemProps {
  food: FoodType;
}

function FoodItem({ food }: FoodItemProps) {
  return (
    <li key={food.id} className="flex items-center gap-2">
      <div className="text-accent-primary">
        <Icon name="circle-check" />
      </div>

      <div className="">
        <h3 className="font-bold text-content-dark dark:text-content-light">
          {food.title}
        </h3>
        <p className="text-regular md:text-base text-content-muted dark:text-content-light">
          {food.description}
        </p>
      </div>
    </li>
  );
}

export default FoodItem;
