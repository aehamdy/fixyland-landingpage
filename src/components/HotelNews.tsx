import { hotelNews } from "../config/hotelNews";
import RoomCard from "./common/RoomCard";
import SectionHeading from "./common/SectionHeading";
import SectionTitle from "./common/SectionTitle";

function HotelNews() {
  return (
    <section className="flex flex-col justify-around w-full h-dvh section-padding bg-surface-alt dark:bg-surface-dark">
      <div className="flex flex-col items-center gap-1 md:gap-2 mx-auto">
        <SectionTitle title="Special Offers" />
        <SectionHeading
          title="Special Discounts for Hotel & Resort Booking"
          className="md:w-3/4 text-center"
        />
      </div>

      <ul className="no-scrollbar flex gap-4 overflow-x-auto snap-x w-full">
        {hotelNews.map((news) => (
          <li
            key={news.id}
            className="min-w-full sm:min-w-1/2 md:min-w-[calc(100%/3+0.5rem)] snap-start select-none"
          >
            <RoomCard room={news} variant="news" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default HotelNews;
