import { useRef } from "react";
import { roomList } from "../config/roomTypes";
import RoomCard from "./common/RoomCard";
import SectionHeading from "./common/SectionHeading";
import SectionTitle from "./common/SectionTitle";

function RoomType() {
  const containerRef = useRef<HTMLUListElement | null>(null);
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    isDown = true;
    startX = e.pageX - containerRef.current.offsetLeft;
    scrollLeft = containerRef.current.scrollLeft;
    containerRef.current.classList.add("cursor-grabbing");
  };

  const handleMouseLeave = () => {
    isDown = false;
    if (containerRef.current) {
      containerRef.current.classList.remove("cursor-grabbing");
    }
  };

  const handleMouseUp = () => {
    isDown = false;
    if (containerRef.current) {
      containerRef.current.classList.remove("cursor-grabbing");
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed multiplier
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="w-full h-dvh section-padding bg-surface-alt dark:bg-surface-dark">
      <div className="flex flex-col items-center gap-1 md:gap-2 mx-auto">
        <SectionTitle title={`Room Type`} />
        <SectionHeading
          title="The Best Luxury Rooms and Suites"
          className="w-7/10 text-center"
        />
      </div>

      <div className="w-full mt-6 overflow-x-auto cursor-grabbing">
        <ul
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="no-scrollbar flex gap-4 overflow-x-auto snap-x w-full"
        >
          {roomList.map((room) => (
            <li
              key={room.id}
              className="min-w-full sm:min-w-1/2 md:min-w-[calc(100%/3+0.5rem)] snap-start select-none"
            >
              <RoomCard variant="room" room={room} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default RoomType;
