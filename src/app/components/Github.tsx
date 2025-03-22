import { FaGithub } from "react-icons/fa";

export default function Github() {
  return (
    <header className="relative w-full p-4 ">
      <a
        href="https://github.com/tu_usuario"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-4 sm:right-4 sm:bottom-auto text-gray-300 hover:text-white text-2xl transition-all duration-300"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
    </header>
  );
}
