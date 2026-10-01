import { useScrollReveal } from '@/hooks/useScrollReveal';
import { restaurantInfo } from '@/data/restaurant';
import { Heart, Users, Flame, Award } from 'lucide-react';

const highlights = [
  { icon: Flame, title: 'Flame-Grilled', desc: 'Every burger and wing cooked over open flame for that signature smoky flavor.' },
  { icon: Heart, title: 'Comfort Food', desc: 'Hearty, satisfying plates that feel like home — from mac and cheese to loaded fries.' },
  { icon: Users, title: 'Solo & Group Friendly', desc: 'Quick counter service for lunch breaks, with plenty of seating for the whole crew.' },
  { icon: Award, title: 'Detroit Favorite', desc: 'Rated 4.3 stars by 180+ happy customers and counting — a Livernois staple.' },
];

export default function About() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 bg-stone-50">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 sm:px-8 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-amber-600 uppercase">
            Our Story
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-stone-900 mt-2 mb-4">
            Detroit's Comfort Food Spot
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image collage */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/4315148/pexels-photo-4315148.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Gourmet burgers on a wooden board"
              className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.pexels.com/photos/14590691/pexels-photo-14590691.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Warm restaurant interior"
              className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold text-stone-800 mb-4">
              Where Detroit Comes to Eat
            </h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              Bink's Grill has been serving up flame-grilled burgers, crispy wings, and
              classic comfort food on Livernois Avenue for years. What started as a small
              counter-service spot has grown into a neighborhood favorite — the kind of
              place where the food is generous, the prices are fair, and the welcome is
              always warm.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              Whether you're grabbing a quick solo lunch, picking up takeout for the family,
              or sitting down for a casual dinner, Bink's Grill delivers the comfort food
              you crave without breaking the bank. Most plates come in under $20, and
              there's always plenty of free parking.
            </p>

            <div className="flex flex-wrap gap-2">
              {restaurantInfo.offerings.map((offering) => (
                <span
                  key={offering}
                  className="rounded-full bg-amber-100 text-amber-800 px-4 py-1.5 text-sm font-medium"
                >
                  {offering}
                </span>
              ))}
              {restaurantInfo.diningOptions.map((option) => (
                <span
                  key={option}
                  className="rounded-full bg-stone-200 text-stone-700 px-4 py-1.5 text-sm font-medium"
                >
                  {option}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                <h.icon size={24} className="text-amber-600" />
              </div>
              <h4 className="font-bold text-stone-800 mb-2">{h.title}</h4>
              <p className="text-sm text-stone-500 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
