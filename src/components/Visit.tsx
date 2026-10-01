import { useScrollReveal } from '@/hooks/useScrollReveal';
import { restaurantInfo } from '@/data/restaurant';
import { MapPin, Phone, Clock, Navigation, Accessibility, CreditCard, Car, CheckCircle2 } from 'lucide-react';

export default function Visit() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  const infoCards = [
    {
      icon: MapPin,
      title: 'Address',
      lines: [restaurantInfo.address, restaurantInfo.plusCode],
    },
    {
      icon: Phone,
      title: 'Phone',
      lines: [restaurantInfo.phone],
    },
    {
      icon: Clock,
      title: 'Hours',
      lines: ['Open Daily', 'Closes 9 PM'],
    },
  ];

  return (
    <section id="visit" className="py-24 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 sm:px-8 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-sm font-bold tracking-widest text-amber-600 uppercase">
            Come See Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-stone-900 mt-2 mb-4">
            Visit Bink's Grill
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Info cards */}
          <div className="flex flex-col gap-6">
            <div className="grid sm:grid-cols-3 gap-4">
              {infoCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-stone-50 rounded-2xl p-5 border border-stone-100 hover:border-amber-300 transition-colors"
                >
                  <card.icon size={22} className="text-amber-600 mb-3" />
                  <div className="font-bold text-stone-800 text-sm mb-1">{card.title}</div>
                  {card.lines.map((line) => (
                    <div key={line} className="text-sm text-stone-500">{line}</div>
                  ))}
                </div>
              ))}
            </div>

            {/* Service options */}
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <h3 className="font-bold text-stone-800 mb-4">Service Options</h3>
              <div className="flex flex-wrap gap-2">
                {restaurantInfo.serviceOptions.map((s) => (
                  <span key={s} className="flex items-center gap-1.5 rounded-full bg-green-50 text-green-700 px-3 py-1.5 text-sm font-medium">
                    <CheckCircle2 size={14} /> {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Accessibility */}
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <h3 className="flex items-center gap-2 font-bold text-stone-800 mb-4">
                <Accessibility size={18} className="text-amber-600" />
                Accessibility
              </h3>
              <div className="flex flex-wrap gap-2">
                {restaurantInfo.accessibility.map((a) => (
                  <span key={a} className="flex items-center gap-1.5 rounded-full bg-blue-50 text-blue-700 px-3 py-1.5 text-sm font-medium">
                    <CheckCircle2 size={14} /> {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Payments & Parking */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100">
                <h3 className="flex items-center gap-2 font-bold text-stone-800 mb-3 text-sm">
                  <CreditCard size={16} className="text-amber-600" />
                  Payments
                </h3>
                <ul className="space-y-1.5">
                  {restaurantInfo.payments.map((p) => (
                    <li key={p} className="flex items-center gap-1.5 text-sm text-stone-500">
                      <CheckCircle2 size={13} className="text-green-600" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100">
                <h3 className="flex items-center gap-2 font-bold text-stone-800 mb-3 text-sm">
                  <Car size={16} className="text-amber-600" />
                  Parking
                </h3>
                <ul className="space-y-1.5">
                  {restaurantInfo.parking.map((p) => (
                    <li key={p} className="flex items-center gap-1.5 text-sm text-stone-500">
                      <CheckCircle2 size={13} className="text-green-600" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(restaurantInfo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-stone-900 hover:bg-amber-400 transition-colors"
              >
                <Navigation size={16} />
                Get Directions
              </a>
              <a
                href={`tel:${restaurantInfo.phone.replace(/[()]/g, '').replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 rounded-full border-2 border-stone-300 px-6 py-3 text-sm font-semibold text-stone-700 hover:border-amber-400 hover:text-amber-600 transition-colors"
              >
                <Phone size={16} />
                Call to Order
              </a>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden shadow-lg min-h-[400px] lg:min-h-full border border-stone-200">
            <iframe
              title="Bink's Grill location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(restaurantInfo.address)}&output=embed`}
              className="w-full h-full min-h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
