type Props = {
  title: string;
  subtitle: string;
  className?: string;
};

export function ChooseVentureParagraph({
  title,
  subtitle,
  className = '',
}: Props) {
  return (
    <div
      className={`flex flex-col items-start gap-2 self-stretch ${className}`}
    >
      <h3 className="text-dark-primary text-center text-base font-medium leading-normal">
        {title}
      </h3>

      <span className="text-dark-secondary text-sm font-normal leading-normal">
        {subtitle}
      </span>
    </div>
  );
}
