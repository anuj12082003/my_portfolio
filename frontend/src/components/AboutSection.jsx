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
    <section className="bg-gray-900 text-white py-20 px-6">

      <div className="max-w-6xl mx-auto text-center">

        <Motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          About Me
        </Motion.h2>

        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          I am a MERN Stack Developer passionate about building modern web
          applications with clean UI and smooth user experiences.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {skills.map((skill, index) => {
            return (
              <Motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-black p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-lg font-semibold">
                  {skill}
                </h3>
              </Motion.div>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default AboutSection