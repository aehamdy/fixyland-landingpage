interface HeroButtonProps {
  id: number;
  label: string;
  link: string;
  icon: string;
  isCTA?: boolean;
}

export const heroButtons: HeroButtonProps[] = [
  {
    id: 1,
    label: "Explore More",
    link: "#",
    icon: "arrow-up-right",
    isCTA: true,
  },
  {
    id: 2,
    label: "Our Services",
    link: "#",
    icon: "arrow-up-right",
    isCTA: false,
  },
];
