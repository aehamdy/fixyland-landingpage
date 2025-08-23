import offer1 from "../assets/offer-1.webp";
import offer2 from "../assets/offer-2.webp";

export type OfferType = {
  id: number;
  discount: number;
  title: string;
  link: string;
  image: string;
};

export const offers: OfferType[] = [
  {
    id: 1,
    discount: 30,
    title: `Get 30% Off on Hotel Booking`,
    link: "#",
    image: offer1,
  },
  {
    id: 2,
    discount: 35,
    title: `Get 35% Off on Resort Booking`,
    link: "#",
    image: offer2,
  },
];
