import type { OfferType } from "../config/offers";
import Icon from "./common/Icon";

type OfferCardProps = {
  offer: OfferType;
};

function OfferCard({ offer }: OfferCardProps) {
  return (
    <article className="relative flex flex-col items-center gap-2 rounded-lg overflow-hidden max-h-[230px] md:max-h-[340px]">
      <img
        src={offer.image}
        alt={offer.title}
        className="w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 flex items-center p-4 bg-black/40">
        <div className="space-y-3">
          <div className="w-fit py-1 px-2 text-regular md:text-base text-content-light border">
            {offer.discount}% Off
          </div>

          <h3 className="font-bold text-regular md:text-medium text-content-light">
            {offer.title}
          </h3>

          <a
            href={offer.link}
            className="flex items-center gap-2 w-fit p-2 text-regular md:text-base text-content-dark bg-white hover:scale-110 rounded-lg transition-all"
          >
            Book Now <Icon name="arrow-up-right" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default OfferCard;
