import { useScrollReveal } from '@/hooks/useScrollReveal';
import { reviews } from '@/data/restaurant';
import StarRating from './StarRating';
import { Quote } from 'lucide-react';

export default function Reviews() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="reviews" className="py-24 bg-stone-50">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 sm:px-8 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-sm font-bold tracking-widest text-amber-600 uppercase">
            What People Say
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-stone-900 mt-2 mb-4">
            Reviews
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-6" />

          {/* Rating summary */}
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl shadow-sm border border-stone-100 px-8 py-4">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-stone-900">4.3</div>
              <StarRating rating={4.3} size={16} className="mt-1" />
            </div>
            <div className="h-12 w-px bg-stone-200" />
            <div className="text-left">
              <div className="text-sm font-semibold text-stone-700">180 reviews</div>
              <div className="text-sm text-stone-500">on Google</div>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={review.author}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative"
              style={{
                animation: visible
                  ? `slideIn 0.5s ease ${i * 80}ms both`
                  : 'none',
              }}
            >
              <Quote
                size={36}
                className="absolute top-5 right-5 text-amber-200"
              />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-sm">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-bold text-stone-800 text-sm">{review.author}</div>
                  <div className="text-xs text-stone-400">{review.date}</div>
                </div>
              </div>

              <StarRating rating={review.rating} size={14} className="mb-3" />

              <p className="text-sm text-stone-600 leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* Write a review CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/search?q=Bink%27s+Grill+18455+Livernois+Detroit+MI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-stone-900 text-white px-6 py-3 text-sm font-semibold hover:bg-stone-800 transition-colors"
          >
            Read more on Google
          </a>
        </div>
      </div>
    </section>
  );
}
