const areas = [
  { name: 'Gachibowli', tag: 'IT hub, premium apartments' },
  { name: 'Kondapur', tag: 'Family-friendly, schools' },
  { name: 'Hitech City', tag: 'Metro, offices, rentals' },
  { name: 'Kokapet', tag: 'Upcoming, high-end villas' },
  { name: 'Madhapur', tag: 'Nightlife, startups' },
  { name: 'Manikonda', tag: 'Budget-friendly, growing' },
]

export default function Areas(){
  return (
    <section id="areas" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Popular areas</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((a) => (
            <div key={a.name} className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow transition">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">{a.name}</h3>
                <span className="text-xs text-blue-700 bg-blue-50 px-2 py-1 rounded">Hyderabad</span>
              </div>
              <p className="mt-2 text-slate-600 text-sm">{a.tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
