import { useState } from 'react'

export default function ContactForm(){
  const [form, setForm] = useState({name:'', email:'', phone:'', message:'', interested_location:'', budget_in_inr:'', property_type:''})
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onChange = (e) => setForm(f => ({...f, [e.target.name]: e.target.value}))

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try{
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const payload = { ...form, budget_in_inr: form.budget_in_inr ? Number(form.budget_in_inr) : undefined }
      const res = await fetch(`${base}/api/inquiry`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if(!res.ok) throw new Error('Failed to submit')
      setStatus({ ok: true, msg: 'Thanks! We will reach out shortly.' })
      setForm({name:'', email:'', phone:'', message:'', interested_location:'', budget_in_inr:'', property_type:''})
    }catch(e){
      setStatus({ ok: false, msg: 'Something went wrong. Please try again.' })
    }finally{
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Talk to an expert</h2>
            <p className="mt-3 text-slate-600">Share your requirements and we’ll curate options that fit your budget and lifestyle.</p>
            <div className="mt-6 p-4 rounded-lg bg-white border border-slate-200">
              <p className="text-sm text-slate-600">Phone: +91 90000 00000</p>
              <p className="text-sm text-slate-600">Email: hello@hyderabadrealty.com</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-700">Name</label>
                <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-slate-700">Email</label>
                <input name="email" type="email" value={form.email} onChange={onChange} required className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm text-slate-700">Phone</label>
                <input name="phone" value={form.phone} onChange={onChange} className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="Optional" />
              </div>
              <div>
                <label className="text-sm text-slate-700">Budget (INR)</label>
                <input name="budget_in_inr" value={form.budget_in_inr} onChange={onChange} className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="e.g. 15000000" />
              </div>
              <div>
                <label className="text-sm text-slate-700">Preferred Area</label>
                <input name="interested_location" value={form.interested_location} onChange={onChange} className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="e.g. Gachibowli" />
              </div>
              <div>
                <label className="text-sm text-slate-700">Property Type</label>
                <select name="property_type" value={form.property_type} onChange={onChange} className="mt-1 w-full border rounded-lg px-3 py-2">
                  <option value="">Select</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Plot</option>
                  <option>Commercial</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="text-sm text-slate-700">Message</label>
              <textarea name="message" value={form.message} onChange={onChange} rows="4" className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="Tell us more" />
            </div>

            {status && (
              <p className={`mt-4 text-sm ${status.ok ? 'text-green-700' : 'text-red-700'}`}>{status.msg}</p>
            )}

            <button disabled={loading} className="mt-6 w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-60">
              {loading ? 'Submitting…' : 'Submit inquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
