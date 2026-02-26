type Props = {
  title: string;
  subtitle: string;
};

export function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 self-stretch">
      <h2 className="text-dark-primary text-5xl font-medium leading-[120%] text-center">
        {title}
      </h2>

      <span className="text-dark-secondary text-center text-lg font-normal leading-normal">
        {subtitle}
      </span>
    </div>
  );
}
