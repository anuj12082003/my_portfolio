import { motion as Motion } from "framer-motion"

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB"
]

function AboutSection() {

  return (

    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900">

      <div className="max-w-6xl mx-auto text-center">

        <Motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-slate-800 dark:text-white mb-12"
        >

          About Me

        </Motion.h2>

        <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-16">

          I build full stack applications using MERN stack with focus on clean UI and high performance backend systems.

        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {skills.map((skill, index) => (

            <Motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md"
            >

              <h3 className="text-lg font-semibold text-emerald-500">
                {skill}
              </h3>

            </Motion.div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default AboutSection