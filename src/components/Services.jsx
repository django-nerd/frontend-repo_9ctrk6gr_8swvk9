import { Building2, Home, Landmark, Wallet } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Buyer Advisory',
    desc: 'Discovery, site visits, price negotiation and end-to-end handholding.'
  },
  {
    icon: Building2,
    title: 'Seller Services',
    desc: 'Property valuation, marketing, buyer screening and documentation.'
  },
  {
    icon: Landmark,
    title: 'NRI Assistance',
    desc: 'Remote viewing, power-of-attorney guidance and trusted execution.'
  },
  {
    icon: Wallet,
    title: 'Investment Planning',
    desc: 'Rental yield, appreciation analysis, and portfolio diversification.'
  },
]

export default function Services(){
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">What we do</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-xl border border-slate-200 hover:shadow transition">
              <s.icon className="w-8 h-8 text-blue-600" />
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
