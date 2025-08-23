import room1 from "../assets/room-1.webp";
import room2 from "../assets/room-2.webp";
import room3 from "../assets/room-3.webp";
import room4 from "../assets/room-4.webp";

type Specialities = {
  maximumOccupancy: number;
  numberOfBeds: number;
  numberOfBathrooms: number;
};

export type RoomType = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  specialities: Specialities;
};

export const roomList: RoomType[] = [
  {
    id: 1,
    title: "Deluxe Rooms",
    description:
      "Spacious and elegantly designed rooms featuring premium amenities, comfortable king-size beds, and stunning views. Perfect for guests seeking luxury and comfort.",
    price: 400,
    image: room1,
    specialities: {
      maximumOccupancy: 2,
      numberOfBeds: 1,
      numberOfBathrooms: 1,
    },
  },
  {
    id: 2,
    title: "Junior Rooms",
    description:
      "Cozy and well-appointed rooms with modern furnishings and essential amenities. Ideal for solo travelers or couples looking for comfort at great value.",
    price: 400,
    image: room2,
    specialities: {
      maximumOccupancy: 2,
      numberOfBeds: 1,
      numberOfBathrooms: 1,
    },
  },
  {
    id: 3,
    title: "Family Rooms",
    description:
      "Generously sized rooms designed for families, featuring multiple beds, extra space for relaxation, and family-friendly amenities to ensure everyone's comfort.",
    price: 600,
    image: room3,
    specialities: {
      maximumOccupancy: 4,
      numberOfBeds: 2,
      numberOfBathrooms: 2,
    },
  },
  {
    id: 4,
    title: "Single Rooms",
    description:
      "Premium single occupancy rooms offering privacy and tranquility. Thoughtfully designed with high-end finishes and personalized service for the discerning solo traveler.",
    price: 750,
    image: room4,
    specialities: {
      maximumOccupancy: 1,
      numberOfBeds: 1,
      numberOfBathrooms: 1,
    },
  },
];
