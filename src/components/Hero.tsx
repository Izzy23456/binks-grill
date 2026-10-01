import { Star, MapPin, Clock, Phone, UtensilsCrossed } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/27049612/pexels-photo-27049612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Chef grilling burgers on an open flame"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/60 to-stone-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center pt-20 pb-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 border border-amber-400/30 px-4 py-1.5 mb-6 animate-[fadeIn_0.8s_ease]">
          <span className="flex items-center gap-1">
            <Star size={14} className="text-amber-400 fill-amber-400" />
            <Star size={14} className="text-amber-400 fill-amber-400" />
            <Star size={14} className="text-amber-400 fill-amber-400" />
            <Star size={14} className="text-amber-400 fill-amber-400" />
            <Star size={14} className="text-amber-400 fill-amber-400" />
          </span>
          <span className="text-sm font-semibold text-amber-100">
            4.3 · 180 Google reviews
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white mb-4 animate-[slideUp_1s_ease]">
          Bink's <span className="text-amber-400">Grill</span>
        </h1>

        <p className="text-lg sm:text-xl text-stone-200 max-w-2xl mx-auto mb-8 font-light animate-[slideUp_1.1s_ease]">
          Detroit's go-to spot for flame-grilled comfort food.
          Burgers, wings, loaded fries, and more — served fresh and fast.
        </p>

        {/* Quick info badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 animate-[slideUp_1.2s_ease]">
          <span className="flex items-center gap-2 rounded-full bg-stone-800/80 backdrop-blur-sm border border-stone-700/50 px-4 py-2 text-sm text-stone-200">
            <Clock size={15} className="text-amber-400" />
            Open · Closes 9 PM
          </span>
          <span className="flex items-center gap-2 rounded-full bg-stone-800/80 backdrop-blur-sm border border-stone-700/50 px-4 py-2 text-sm text-stone-200">
            <span className="text-amber-400 font-semibold">{restaurantInfo.priceRange}</span>
            per person
          </span>
          <span className="flex items-center gap-2 rounded-full bg-stone-800/80 backdrop-blur-sm border border-stone-700/50 px-4 py-2 text-sm text-stone-200">
            <UtensilsCrossed size={15} className="text-amber-400" />
            Dine-in · Takeout · Delivery
          </span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[slideUp_1.3s_ease]">
          <a
            href="#menu"
            className="rounded-full bg-amber-500 px-8 py-3.5 text-base font-bold text-stone-900 hover:bg-amber-400 hover:scale-105 transition-all duration-200 shadow-lg shadow-amber-500/20"
          >
            View Menu
          </a>
          <a
            href="#visit"
            className="flex items-center gap-2 rounded-full bg-transparent border-2 border-stone-500 px-8 py-3.5 text-base font-semibold text-white hover:border-amber-400 hover:text-amber-400 transition-all duration-200"
          >
            <MapPin size={18} />
            Get Directions
          </a>
          <a
            href={`tel:${restaurantInfo.phone.replace(/[()]/g, '').replace(/\s/g, '')}`}
            className="flex items-center gap-2 rounded-full bg-transparent border-2 border-stone-500 px-8 py-3.5 text-base font-semibold text-white hover:border-amber-400 hover:text-amber-400 transition-all duration-200"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-stone-400/60 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-stone-300 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
