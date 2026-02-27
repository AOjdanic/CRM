import { Star } from './Star';
import { StarHalf } from './StarHalf';

export function ReviewScore() {
  return (
    <div className="flex items-start gap-1">
      <Star />
      <Star />
      <Star />
      <Star />
      <StarHalf />
    </div>
  );
}
