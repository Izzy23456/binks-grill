import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit', href: '#visit' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-900/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-2xl font-extrabold tracking-tight text-white">
            Bink's
          </span>
          <span className="text-2xl font-light tracking-tight text-amber-400">
            Grill
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-stone-200 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#visit"
              className="flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-stone-900 hover:bg-amber-400 transition-colors"
            >
              <Phone size={14} />
              Call
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-stone-900/98 backdrop-blur-md ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="px-5 py-4 space-y-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-stone-200 hover:text-amber-400 font-medium py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2 border-t border-stone-700 flex flex-col gap-2 text-sm text-stone-400">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-amber-400" /> {restaurantInfo.phone}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-amber-400" /> {restaurantInfo.address}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-amber-400" /> {restaurantInfo.hours}
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
}
