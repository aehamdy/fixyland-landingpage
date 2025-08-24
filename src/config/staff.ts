import staff1 from "../assets/staff-1.webp";
import staff2 from "../assets/staff-2.webp";
import staff3 from "../assets/staff-3.webp";
import staff4 from "../assets/staff-4.webp";

export type StaffType = {
  id: number;
  name: string;
  position: string;
  image: string;
};

export const staffList: StaffType[] = [
  {
    id: 1,
    name: "Michael Dean",
    position: "Chef Master",
    image: staff1,
  },
  {
    id: 2,
    name: "Arnold Taylor",
    position: "Room Cleans",
    image: staff2,
  },
  {
    id: 3,
    name: "Michael Dean",
    position: "Assistant Chef",
    image: staff3,
  },
  {
    id: 4,
    name: "Michael Dean",
    position: "Supervisor",
    image: staff4,
  },
];
