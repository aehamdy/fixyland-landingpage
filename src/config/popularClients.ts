import client1 from "../assets/client-1.webp";
import client2 from "../assets/client-2.webp";
import client3 from "../assets/client-3.webp";
import client4 from "../assets/client-4.webp";
import client5 from "../assets/client-5.webp";
import client6 from "../assets/client-6.webp";

export type PopularClientType = {
  id: number;
  image: string;
};

export const popularClients: PopularClientType[] = [
  {
    id: 1,
    image: client1,
  },
  {
    id: 2,
    image: client2,
  },
  {
    id: 3,
    image: client3,
  },
  {
    id: 4,
    image: client4,
  },
  {
    id: 5,
    image: client5,
  },
  {
    id: 6,
    image: client6,
  },
];
