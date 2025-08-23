import Heading from "./Heading";
import Icon from "./Icon";
import type { RoomType } from "../../config/roomTypes";

interface RoomCardProps {
  variant?: "room" | "news";
  room: RoomType;
}

function RoomCard({ room }: RoomCardProps) {
  return (
    <article className="flex flex-col gap-3">
      <div className="relative w-full h-64 overflow-hidden rounded-xl">
        <img
          src={room.image}
          alt={`${room.title}-image`}
          className="w-full h-full object-cover pointer-events-none select-none"
        />

        <div className="absolute top-2 start-2 w-fit p-1 px-2 text-small text-white bg-accent-primary rounded-lg">
          ${room.price}/Night
        </div>
      </div>

      <div className="space-y-3">
        <Heading
          level="h3"
          title={room.title}
          className="font-bold text-content-dark dark:text-content-light"
        />

        <div className="flex items-center gap-4 text-content-muted dark:text-content-light">
          <div className="flex items-center gap-1">
            <Icon name="users" size={18} className="text-accent-primary" />
            <span>{room.specialities.maximumOccupancy} People</span>
          </div>

          <div className="flex items-center gap-1">
            <Icon name="bed" size={18} className="text-accent-primary" />
            <span>{room.specialities.numberOfBeds} Beds</span>
          </div>

          <div className="flex items-center gap-1">
            <Icon name="bath" size={18} className="text-accent-primary" />
            <span>{room.specialities.numberOfBathrooms} Bath</span>
          </div>
        </div>

        <p className="text-content-muted dark:text-content-light">
          {room.description}
        </p>

        <div className="w-fit border-b hover:border-none border-b-accent-primary">
          <a
            href="#"
            className="flex items-center gap-1 w-fit py-1 px-2 text-accent-primary hover:text-content-light dark:text-content-light hover:bg-accent-primary rounded-medium"
          >
            Read More <Icon name="arrow-up-right" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default RoomCard;
