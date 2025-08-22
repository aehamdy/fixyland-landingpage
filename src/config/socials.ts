import type { IconName } from "../components/common/Icon";
import { info } from "./Info";

type Social = {
  id: number;
  iconName: IconName;
  link: string;
};

export const socials: Social[] = [
  {
    id: 1,
    iconName: "facebook",
    link: info.socials.facebook,
  },
  {
    id: 2,
    iconName: "x",
    link: info.socials.x,
  },
  {
    id: 3,
    iconName: "instagram",
    link: info.socials.instagram,
  },
  {
    id: 4,
    iconName: "behance",
    link: info.socials.behance,
  },
];
