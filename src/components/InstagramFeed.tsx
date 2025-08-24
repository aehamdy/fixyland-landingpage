import ig1 from "../assets/ig-1.webp";
import ig2 from "../assets/ig-2.webp";
import ig3 from "../assets/ig-3.webp";
import ig4 from "../assets/ig-4.webp";
import ig5 from "../assets/ig-5.webp";

const instagramImages = [
  {
    id: 1,
    image: ig1,
  },
  {
    id: 2,
    image: ig2,
  },
  {
    id: 3,
    image: ig3,
  },
  {
    id: 4,
    image: ig4,
  },
  {
    id: 5,
    image: ig5,
  },
];

function InstagramFeed() {
  return (
    <section className="relative h-[30dvh] bg-blue-200 overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="flex w-full h-full">
        {instagramImages.map((image) => (
          <div className="w-full h-full overflow-hidden">
            <img
              src={image.image}
              alt="instagram-image"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default InstagramFeed;
