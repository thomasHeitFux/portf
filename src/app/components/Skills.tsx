import Image from "next/image"
export default function Skills() {
    return(
        <section id="skills" className="py-28 mb-16">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Skills</h2>
        {/* Grid de iconos */}
        <div className="grid grid-cols-3  sm:grid-cols-7 gap-4 mb-8">
          {[
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg', name: 'JavaScript' },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg', name: 'Java' },
            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg', name: 'TypeScript' },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", name: "React" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", name: 'Tailwind CSS' },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg", name: "CSS" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg", name: "HTML" }
          ].map(({ src, name }, index) => (
            <div key={index} className="flex  flex-col  mt-14 mb-4">
              <Image src={src} alt={`${name} icon`} width={40} height={40} />
              <span className="text-sm mt-4 text-gray-300">{name}</span>
            </div>
          ))}
        </div>
      </section>
    )
}