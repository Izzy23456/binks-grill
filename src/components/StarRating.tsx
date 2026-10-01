import { Star } from 'lucide-react';

type StarRatingProps = {
  rating: number;
  size?: number;
  className?: string;
};

export default function StarRating({ rating, size = 16, className = '' }: StarRatingProps) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={i <= Math.round(rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300 fill-gray-300'}
        />
      ))}
    </div>
  );
}
