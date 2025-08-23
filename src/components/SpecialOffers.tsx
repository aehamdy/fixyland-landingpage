import { offers } from "../config/offers";
import SectionHeading from "./common/SectionHeading";
import SectionTitle from "./common/SectionTitle";
import OfferCard from "./OfferCard";

function SpecialOffers() {
  return (
    <section className="flex flex-col justify-around w-full h-dvh section-padding bg-surface-alt dark:bg-surface-dark">
      <div className="flex flex-col items-center gap-1 md:gap-2 mx-auto">
        <SectionTitle title="Special Offers" />
        <SectionHeading
          title="Special Discounts for Hotel & Resort Booking"
          className="md:w-3/4 text-center"
        />
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto mt-6">
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </ul>
    </section>
  );
}

export default SpecialOffers;
