import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { menu } from '@/data/restaurant';

export default function MenuSection() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="py-24 bg-stone-900">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 sm:px-8 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">
            What We Serve
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-4">
            Our Menu
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-4" />
          <p className="text-stone-400 max-w-xl mx-auto">
            Flame-grilled burgers, crispy wings, loaded sides, and decadent desserts —
            all under $20 a plate.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menu.map((cat, i) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                activeCategory === i
                  ? 'bg-amber-500 text-stone-900'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Menu items grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu[activeCategory].items.map((item, i) => (
            <div
              key={item.name}
              className="group bg-stone-800 rounded-2xl overflow-hidden border border-stone-700/50 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300"
              style={{
                animation: visible
                  ? `slideIn 0.5s ease ${i * 100}ms both`
                  : 'none',
              }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
                {item.tag && (
                  <span className="absolute top-3 left-3 rounded-full bg-amber-500 text-stone-900 text-xs font-bold px-3 py-1">
                    {item.tag}
                  </span>
                )}
                <span className="absolute bottom-3 right-3 rounded-full bg-stone-900/90 text-amber-400 text-lg font-extrabold px-4 py-1.5">
                  {item.price}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-stone-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-stone-500 text-sm mt-10">
          Prices may vary. Ask about daily specials and combo deals.
        </p>
      </div>
    </section>
  );
}
