import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Areas from './components/Areas'
import FeaturedListings from './components/FeaturedListings'
import ContactForm from './components/ContactForm'

function App() {
  const [openSearch, setOpenSearch] = useState(false)

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onSearchClick={() => setOpenSearch(true)} />
      <main>
        <Hero />
        <Services />
        <Areas />
        <FeaturedListings />
        <ContactForm />
      </main>

      {openSearch && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-24" onClick={() => setOpenSearch(false)}>
          <div className="bg-white w-full max-w-3xl mx-4 rounded-xl shadow-xl border border-slate-200" onClick={e => e.stopPropagation()}>
            <div className="p-4 border-b border-slate-200">
              <h3 className="font-semibold">Quick search</h3>
            </div>
            <SearchPanel onClose={() => setOpenSearch(false)} />
          </div>
        </div>
      )}

      <footer className="py-10 border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Hyderabad Realty Consultancy. All rights reserved.</p>
          <a href="/test" className="text-blue-700 hover:underline">System status</a>
        </div>
      </footer>
    </div>
  )
}

function SearchPanel({ onClose }){
  const [q, setQ] = useState('')
  const [type, setType] = useState('')
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')
  const [items, setItems] = useState(null)

  const search = async () => {
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    const params = new URLSearchParams()
    if(q) params.set('location', q)
    if(type) params.set('property_type', type)
    if(min) params.set('min_price', min)
    if(max) params.set('max_price', max)
    const res = await fetch(`${base}/api/properties?${params.toString()}`)
    const data = await res.json()
    setItems(data.items || [])
  }

  return (
    <div className="p-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
        <input value={q} onChange={e=>setQ(e.target.value)} className="border rounded-lg px-3 py-2" placeholder="Area or locality" />
        <select value={type} onChange={e=>setType(e.target.value)} className="border rounded-lg px-3 py-2">
          <option value="">Any type</option>
          <option>Apartment</option>
          <option>Villa</option>
          <option>Plot</option>
          <option>Commercial</option>
        </select>
        <input value={min} onChange={e=>setMin(e.target.value)} className="border rounded-lg px-3 py-2" placeholder="Min budget (INR)" />
        <input value={max} onChange={e=>setMax(e.target.value)} className="border rounded-lg px-3 py-2" placeholder="Max budget (INR)" />
        <button onClick={search} className="bg-blue-600 text-white rounded-lg px-4 py-2">Search</button>
      </div>

      <div className="p-4">
        {items === null ? (
          <p className="text-slate-600 text-sm">Enter filters and search to view results.</p>
        ) : items.length === 0 ? (
          <p className="text-slate-600 text-sm">No results. Try adjusting filters.</p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {items.map(p => (
              <div key={p._id} className="border rounded-lg overflow-hidden">
                <img src={p.image_url || 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=1200&auto=format&fit=crop'} alt={p.title} className="w-full h-40 object-cover" />
                <div className="p-3">
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-sm text-slate-600">{p.location}, {p.city}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="p-4 border-t border-slate-200 flex justify-end">
        <button onClick={onClose} className="px-4 py-2 rounded-lg border">Close</button>
      </div>
    </div>
  )
}

export default App
