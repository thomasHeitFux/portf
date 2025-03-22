import Image from "next/image";
import { FaEnvelope, FaWhatsapp, FaInstagram, FaLinkedin} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="sm:block hidden fixed top-0 left-0 bottom-0 w-80 bg-purple-600/20 p-6 rounded-xl flex flex-col h-full">
      <Image
        className="rounded-full mb-2 mt-10"
        src="/images/profile-pic.jpg"
        alt="Icono de perfil"
        width={250}
        height={200}
      />
      <h1 className="text-4xl sm:text-5xl text-gray-200 font-bold mb-6 mt-6">
        Thomas Dominguez
      </h1>
      <p className="text-lg sm:text-xl text-gray-400">Full-stack Developer</p>

      <div className="flex flex-col my-18 gap-2">
  <a href="#about" className="text-lg text-gray-400 hover:text-purple-400">About</a>
  <a href="#projects" className="text-lg text-gray-400 hover:text-purple-400">Projects</a>
  <a href="#education" className="text-lg text-gray-400 hover:text-purple-400">Education</a>
  <a href="#skills" className="text-lg text-gray-400 hover:text-purple-400">Skills</a>
</div>



      <div className="flex mt-15 justify-center sm:justify-start gap-4">
        <a
          href="thomas41392@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-purple-400 text-xl"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://wa.me/874836470"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-purple-400 text-xl"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
           href="https://instagram.com/thomfux"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-purple-400 text-xl"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
           href="https://www.linkedin.com/in/dominguezthomas/"
           target="_blank"
          className="text-gray-400 hover:text-purple-400 text-xl"
          aria-label="Download CV"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
