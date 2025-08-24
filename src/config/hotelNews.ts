import hotelNews1 from "../assets/hotel-news-1.webp";
import hotelNews2 from "../assets/hotel-news-2.webp";
import hotelNews3 from "../assets/hotel-news-3.webp";

export type PublislhedType = {
  date: {
    at: string;
    icon: string;
  };
  author: {
    by: string;
    icon: string;
  };
};

export type hotelNewsType = {
  id: number;
  type?: string;
  title: string;
  description: string;
  image: string;
  published: PublislhedType;
};

export const hotelNews: hotelNewsType[] = [
  {
    id: 1,
    title: "Most Expensive Hotel Rooms In New York",
    description:
      "Perspicialtis amniste colup dtate accusan titume delermque laudartium totium aperiam",
    type: "Hotel",
    image: hotelNews1,
    published: {
      date: { at: "January 16, 2024", icon: "calendar" },
      author: { by: "Admin", icon: "user" },
    },
  },
  {
    id: 2,
    title: "Our New Miami Beach Hotel Is Open",
    description:
      "Perspicialtis amniste colup dtate accusan titume delermque laudartium totium aperiam",
    type: "Room",
    image: hotelNews2,
    published: {
      date: { at: "January 16, 2024", icon: "calendar" },
      author: { by: "Admin", icon: "user" },
    },
  },
  {
    id: 1,
    title: "Guests Offers Exclusive Facilities To Service",
    description:
      "Perspicialtis amniste colup dtate accusan titume delermque laudartium totium aperiam",
    type: "Resort",
    image: hotelNews3,
    published: {
      date: { at: "January 16, 2024", icon: "calendar" },
      author: { by: "Admin", icon: "user" },
    },
  },
];
