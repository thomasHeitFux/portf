import Image from "next/image";
import Sidebar from "./components/sidebar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Github from "./components/Github";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-[family-name:var(--font-geist-sans)]">
      {/* Contenedor principal */}
        <Header />
        <Github/>
      <div className="flex">
        {/* Sección del nombre y la imagen/icono (Sidebar) */}
        <Sidebar />

        {/* Contenido principal */}
        <div className="flex-1 ml-0 sm:ml-80 p-8  sm:p-16">

          {/* Barra superior en pantallas pequeñas */}

          {/* About Section */}
          <section className="mb-16 text-center sm:text-left max-w-4xl ">
            <About />

          </section>

          {/* Projects Section */}
          <Projects />

          {/* Education Section */}
          <Education />

          {/* Skills Section */}
          <Skills />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
