type HeadingProps = {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title: string;
  className?: string;
};

function Heading({ title, level, className }: HeadingProps) {
  const HeadingTag = level;

  return <HeadingTag className={className}>{title}</HeadingTag>;
}

export default Heading;
