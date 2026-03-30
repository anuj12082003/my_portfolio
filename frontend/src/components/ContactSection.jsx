import { useState } from "react"
import { motion as Motion } from "framer-motion"

function ContactSection() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)

    try {

      const res = await fetch("https://my-portfolio-backend-qnv5.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (data.success) {

        setSuccess(true)

        setFormData({
          name: "",
          email: "",
          message: ""
        })

        setTimeout(() => {
          setSuccess(false)
        }, 3000)
      }

    } catch (error) {
      console.error(error)
      alert("Something went wrong")
    }

    setLoading(false)
  }

  return (
    <section id="contact" className="bg-gray-900 text-white py-20 px-6">

      <div className="max-w-4xl mx-auto text-center">

        <Motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Contact Me
        </Motion.h2>

        <p className="text-gray-400 mb-12">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>

        {success && (
          <p className="text-green-400 mb-6">
            Message sent successfully 🚀
          </p>
        )}

        <Motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-black border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-black border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-blue-500"
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-black border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </Motion.form>

      </div>

    </section>
  )
}

export default ContactSection