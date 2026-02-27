type Props = {
  authorImageSrc: string;
  authorName: string;
  authorTitle: string;
};

export function ReviewAuthor({
  authorImageSrc,
  authorName,
  authorTitle,
}: Props) {
  return (
    <div className="flex flex-col justify-center items-start gap-3 w-31">
      <div className="flex w-12 h-12 justify-center items-center rounded-full overflow-hidden">
        <img src={authorImageSrc} />
      </div>

      <div className="flex flex-col justify-center items-start gap-0.75">
        <h4 className="text-dark-primary text-base font-medium leading-normal">
          {authorName}
        </h4>

        <span className="text-dark-tertiary text-sm font-normal leading-normal">
          {authorTitle}
        </span>
      </div>
    </div>
  );
}
