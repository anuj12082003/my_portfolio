import { useState } from "react"
import { motion as Motion } from "framer-motion"

function ContactSection() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (

    <section id="contact" className="py-24 px-6 bg-slate-50 dark:bg-slate-900">

      <div className="max-w-4xl mx-auto text-center">

        <Motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-slate-800 dark:text-white mb-6"
        >
          Contact Me
        </Motion.h2>

        <p className="text-slate-600 dark:text-slate-300 mb-12">
          Feel free to reach out for collaborations.
        </p>

        <Motion.form
          className="grid gap-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 p-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 p-3 rounded-lg"
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 p-3 rounded-lg"
          />

          <button
            className="bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition"
          >
            Send Message
          </button>

        </Motion.form>

      </div>

    </section>

  )
}

export default ContactSection