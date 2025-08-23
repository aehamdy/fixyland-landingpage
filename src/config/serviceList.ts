import type { IconName } from "../components/common/Icon";

export type ServiceType = {
  id: number;
  title: string;
  description: string;
  icon: IconName;
};

export const serviceList: ServiceType[] = [
  {
    id: 1,
    title: "Fitness Center",
    description:
      "arem npsum dolor sit conse ateturs adipisicing elit deler sit conse execuse adipisci",
    icon: "bicycle",
  },
  {
    id: 2,
    title: "Jacuzzi",
    description:
      "arem npsum dolor sit conse ateturs adipisicing elit deler sit conse execuse adipisci",
    icon: "bathtub",
  },
  {
    id: 3,
    title: "Swimming Pool",
    description:
      "arem npsum dolor sit conse ateturs adipisicing elit deler sit conse execuse adipisci",
    icon: "swimming",
  },
  {
    id: 4,
    title: "SPA Treatment",
    description:
      "arem npsum dolor sit conse ateturs adipisicing elit deler sit conse execuse adipisci",
    icon: "towel",
  },
];
