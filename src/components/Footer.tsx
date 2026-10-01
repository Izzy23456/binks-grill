import { restaurantInfo } from '@/data/restaurant';
import { Phone, MapPin, Clock, UtensilsCrossed } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <UtensilsCrossed size={24} className="text-amber-400" />
              <span className="text-2xl font-extrabold text-white">Bink's</span>
              <span className="text-2xl font-light text-amber-400">Grill</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Detroit's go-to spot for flame-grilled comfort food.
              Burgers, wings, loaded fries, and more — served fresh and fast.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-amber-400 font-bold text-lg">4.3</span>
              <span className="text-sm">· 180 Google reviews</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">Menu</a></li>
              <li><a href="#reviews" className="hover:text-amber-400 transition-colors">Reviews</a></li>
              <li><a href="#visit" className="hover:text-amber-400 transition-colors">Visit Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-amber-400 mt-0.5 shrink-0" />
                <span>{restaurantInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-amber-400 shrink-0" />
                <a href={`tel:${restaurantInfo.phone.replace(/[()]/g, '').replace(/\s/g, '')}`} className="hover:text-amber-400 transition-colors">
                  {restaurantInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-amber-400 shrink-0" />
                <span>Open Daily · Closes 9 PM</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {restaurantInfo.serviceOptions.map((s) => (
                <span key={s} className="rounded-full bg-stone-800 px-3 py-1 text-xs">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} Bink's Grill. All rights reserved.</p>
          <p>18455 Livernois, Detroit, MI 48221 · {restaurantInfo.phone}</p>
        </div>
      </div>
    </footer>
  );
}
