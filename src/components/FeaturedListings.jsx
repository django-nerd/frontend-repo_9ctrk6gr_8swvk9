import { useEffect, useState } from 'react'

function formatPrice(n){
  if(n == null) return '—'
  const crores = n / 10000000
  const lakhs = n / 100000
  if(crores >= 1) return `₹${crores.toFixed(2)} Cr`
  if(lakhs >= 1) return `₹${lakhs.toFixed(2)} L`
  return `₹${n.toLocaleString('en-IN')}`
}

export default function FeaturedListings(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try{
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/properties?limit=6`)
        const data = await res.json()
        setItems(data.items || [])
      }catch(e){
        setItems([])
      }finally{
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="listings" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Featured listings</h2>
          <a href="#contact" className="text-blue-700 hover:underline">Get full inventory →</a>
        </div>

        {loading ? (
          <p className="text-slate-600">Loading listings…</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.length === 0 ? (
              <div className="col-span-full p-6 border border-slate-200 rounded-xl bg-slate-50">
                <p className="text-slate-700">No listings yet. Ask us for curated options.</p>
              </div>
            ) : (
              items.map(p => (
                <div key={p._id} className="rounded-xl overflow-hidden border border-slate-200 bg-white hover:shadow transition">
                  <img src={p.image_url || 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=1200&auto=format&fit=crop'} alt={p.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-900">{p.title}</h3>
                    <p className="text-sm text-slate-600">{p.location}, {p.city}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-blue-700 font-semibold">{formatPrice(p.price_in_inr)}</span>
                      <span className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-700">{p.property_type}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  )
}
