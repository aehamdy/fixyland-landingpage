import Heading from "./Heading";

type SectionHeadingProps = {
  title: string;
};

function SectionTitle({ title }: SectionHeadingProps) {
  return (
    <div className="w-fit py-1 px-1 md:px-2 font-bold text-tiny md:text-small tracking-wider text-accent-primary uppercase bg-white rounded-medium">
      <Heading level="h4" title={title} />
    </div>
  );
}

export default SectionTitle;
