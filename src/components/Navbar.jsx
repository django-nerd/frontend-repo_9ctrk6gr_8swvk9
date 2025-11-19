import { useState } from 'react'
import { Menu, X, Home, Phone, Search } from 'lucide-react'

export default function Navbar({ onSearchClick }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-slate-900 font-semibold">
            <Home className="w-6 h-6 text-blue-600" />
            Hyderabad Realty
          </a>

          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#areas" className="hover:text-blue-600 transition">Popular Areas</a>
            <a href="#listings" className="hover:text-blue-600 transition">Listings</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={onSearchClick} className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
              <Search className="w-4 h-4" />
              Search
            </button>
            <a href="#contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg shadow hover:bg-black transition">
              <Phone className="w-4 h-4" />
              Get Consultation
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#services" className="block py-2">Services</a>
            <a href="#areas" className="block py-2">Popular Areas</a>
            <a href="#listings" className="block py-2">Listings</a>
            <a href="#contact" className="block py-2">Contact</a>
            <button onClick={onSearchClick} className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg">Search</button>
          </div>
        )}
      </div>
    </header>
  )
}
