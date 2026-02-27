import { Divider } from './Divider';
import { ReviewScore } from './ReviewScore';
import { ReviewAuthor } from './ReviewAuthor';
import { ReviewDescription } from './ReviewDescription';

type Props = {
  authorName: string;
  authorTitle: string;
  authorImageSrc: string;
  reviewDescription: string;
};

export function ReviewCard({
  authorName,
  authorTitle,
  authorImageSrc,
  reviewDescription,
}: Props) {
  return (
    <div className="flex p-8 items-center gap-5 grow shrink-0 basis-0 bg-background-primary border border-solid border-border-primary rounded-lg">
      <ReviewAuthor
        authorImageSrc={authorImageSrc}
        authorName={authorName}
        authorTitle={authorTitle}
      />

      <Divider />

      <div className="flex flex-col items-start gap-3 grow shrink-0 basis-0">
        <ReviewScore />

        <ReviewDescription>{reviewDescription}</ReviewDescription>
      </div>
    </div>
  );
}
