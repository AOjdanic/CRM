type Props = {
  title: string;
  subtitle: string;
};

export function TitleSection({ title, subtitle }: Props) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 self-stretch">
      <h2 className="text-dark-primary text-center text-[32px] font-medium">
        {title}
      </h2>

      <span className="text-dark-secondary text-base font-normal text-center">
        {subtitle}
      </span>
    </div>
  );
}
