import { motion as Motion } from "framer-motion"
import { useState, useEffect } from "react"

function Hero() {

  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {

  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Backend Developer"
  ]

  const currentRole = roles[index]

  let typingSpeed = deleting ? 40 : 80

  if (!deleting && charIndex === currentRole.length) {
    typingSpeed = 2000
  }

  const timer = setTimeout(() => {

    if (!deleting) {

      setText(currentRole.substring(0, charIndex + 1))
      setCharIndex(charIndex + 1)

      if (charIndex + 1 === currentRole.length) {
        setDeleting(true)
      }

    } else {

      setText(currentRole.substring(0, charIndex - 1))
      setCharIndex(charIndex - 1)

      if (charIndex === 0) {
        setDeleting(false)
        setIndex((prev) => (prev + 1) % roles.length)
      }

    }

  }, typingSpeed)

  return () => clearTimeout(timer)

}, [charIndex, deleting, index])

  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white h-screen flex items-center justify-center">

      <div className="text-center px-6">

        <Motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Anuj Gupta
          </span>
        </Motion.h1>

        {/* Typing Effect */}
        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-xl text-gray-300 h-8"
        >
          {text}
          <span className="animate-pulse">|</span>
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 flex justify-center gap-4"
        >
          <a href="#projects">
            <button className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 hover:scale-105 transition duration-300">
              View Projects
            </button>
          </a>

          <a href="#contact">
            <button className="border border-blue-500 px-6 py-2 rounded-lg hover:bg-blue-500 hover:scale-105 transition duration-300">
              Contact Me
            </button>
          </a>

        </Motion.div>

      </div>

    </section>
  )
}

export default Hero