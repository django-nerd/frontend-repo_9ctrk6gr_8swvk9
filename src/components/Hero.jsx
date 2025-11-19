import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-sky-50" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-sky-200/30 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight"
            >
              Find your perfect home in Hyderabad
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-slate-600"
            >
              Personalised consultancy for buying, selling and investing in properties across the city.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700">
                Book a free consultation
              </a>
              <a href="#listings" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-slate-900 text-white font-semibold shadow hover:bg-black">
                Browse featured listings
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop" alt="Hyderabad skyline" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" />
            <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-xl p-4">
              <p className="text-sm text-slate-500">Avg. price per sqft</p>
              <p className="text-2xl font-bold text-slate-900">₹7,500</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
