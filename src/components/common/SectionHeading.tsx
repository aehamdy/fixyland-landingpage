import Heading from "./Heading";

type SectionHeadingProps = {
  title: string;
  className?: string;
};

function SectionHeading({ title, className }: SectionHeadingProps) {
  return (
    <Heading
      level="h2"
      title={title}
      className={`font-bold text-large md:text-large lg:text-5xl text-content-dark-alt dark:text-content-light ${className}`}
    />
  );
}

export default SectionHeading;
