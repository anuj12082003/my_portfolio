import { motion as Motion } from "framer-motion"

function Hero() {

  return (

    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}

        <div>

          <Motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white"
          >

            Hi I'm

            <span className="block text-emerald-500">
              Anuj Gupta
            </span>

          </Motion.h1>

          <Motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-lg text-slate-600 dark:text-slate-300"
          >

            MERN Stack Developer building modern web applications with clean UI and scalable backend systems.

          </Motion.p>

          {/* BUTTONS */}

          <div className="mt-8 flex gap-4">

            <a href="#projects">

              <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition">
                View Projects
              </button>

            </a>

            <a href="#contact">

              <button className="border border-emerald-500 text-emerald-500 px-6 py-3 rounded-lg hover:bg-emerald-500 hover:text-white transition">
                Contact Me
              </button>

            </a>

          </div>

        </div>

        {/* IMAGE */}

        <Motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 bg-emerald-400 blur-3xl opacity-30 rounded-full"></div>

            <img
              src="/profile.png"
              className="w-[280px] rounded-full border-4 border-emerald-400 relative"
            />

          </div>

        </Motion.div>

      </div>

    </section>

  )
}

export default Hero