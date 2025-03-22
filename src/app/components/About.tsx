import { FaEnvelope, FaWhatsapp, FaInstagram, FaDownload, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 text-center sm:text-left max-w-4xl mb-16">
      <h1 className="py-4 text-2xl sm:text-4xl text-gray-200 font-bold mb-2">
        About me
      </h1>
      <p className="text-lg sm:text-2xl text-gray-300 mb-6">
        I&apos;m Thomas Dominguez, a passionate Full-stack Developer with a strong
        background in building modern web applications. With experience in both
        frontend and backend development, I specialize in creating efficient,
        scalable, and user-friendly solutions.
      </p>
      <h2 className="mt-10 text-2xl sm:text-3xl text-gray-200 font-bold mb-2">Let&apos;s Connect</h2>
      <p className="text-lg sm:text-2xl text-gray-300 mb-6">
        If you&apos;re looking for a dedicated developer who combines technical expertise with creativity, feel free to reach out. I&apos;m always excited about collaborating on meaningful projects that make a difference.
      </p>

      {/* Iconos de contacto */}
      <div className="flex mt-18 justify-center sm:justify-start gap-6">
        <a
          href="https://wa.me/874836470"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500/60 hover:text-green-400 text-3xl"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://instagram.com/thomfux"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500/70 hover:text-pink-400 text-3xl"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/dominguezthomas/"
          target="_blank"
          className="text-blue-600/60 hover:text-blue-400 text-3xl"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:thomas41392@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500/50 hover:text-indigo-400 text-3xl"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="/documents/CV.pdf"
          download
          className="text-yellow-300/60 hover:text-yellow-400 text-3xl"
          aria-label="Download CV"
        >
          <FaDownload />
        </a>
      </div>
    </section>
  );
}
