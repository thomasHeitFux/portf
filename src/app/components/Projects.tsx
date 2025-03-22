import Image from "next/image";
export default function Projects() {
    return(
        <section id="projects" className="py-20 mb-16 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* E-commerce Project */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">ShoesApp - E-commerce</h3>
                <p className="text-gray-400 mb-4">
                  An eCommerce platform built for selling shoes, with integrated payments and inventory management.
                </p>
                <div className="flex space-x-4 mb-4">
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React Icon" width={30} height={30} />
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" alt="Redux Icon" width={30} height={30} />
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js Icon" width={30} height={30} />
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express Icon" width={30} height={30} />
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL Icon" width={30} height={30} />
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" alt="Firebase Icon" width={30} height={30} />
                </div>
                <a href="https://planb-rho.vercel.app/" target="_blank" className="text-purple-400 hover:text-purple-500">View Project</a>
              </div>

              {/* Expense Tracker Project */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Expense Tracker App</h3>
                <p className="text-gray-400 mb-4">
                  A Java-based application that helps users manage their expenses and income, providing a balance overview.
                </p>
                <div className="flex space-x-4 mb-4">
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java Icon" width={30} height={30} />
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg" alt="JUnit Icon" width={30} height={30} />
                </div>
                <a href="https://github.com/thomasHeitFux/JavaIntegrador" target="_blank" className="text-purple-400 hover:text-purple-500">View Project</a>
              </div>

              {/* Marvel API App */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Marvel API App</h3>
                <p className="text-gray-400 mb-4">
                  A mobile app that consumes the Marvel API to display characters and comics from the Marvel universe.
                </p>
                <div className="flex space-x-4 mb-4">
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React Icon" width={30} height={30} />
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" alt="Redux Icon" width={30} height={30} />
                </div>
                <a href="#" target="_blank" className="text-purple-400 hover:text-purple-500">View Project</a>
              </div>

              {/* Pokemon App */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">PokemonApp</h3>
                <p className="text-gray-400 mb-4">
                  A full-stack SPA where users can search for Pokemon, view their stats, and details.
                </p>
                <div className="flex space-x-4 mb-4">
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React Icon" width={30} height={30} />
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" alt="Redux Icon" width={30} height={30} />
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js Icon" width={30} height={30} />
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express Icon" width={30} height={30} />
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL Icon" width={30} height={30} />
                </div>
                <a href="https://poke-app-three-bice.vercel.app/" target="_blank" className="text-purple-400 hover:text-purple-500">View Project</a>
              </div>

              {/* Weather App */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">WeatherApp</h3>
                <p className="text-gray-400 mb-4">
                  A single-page application that shows current weather information based on the user's location.
                </p>
                <div className="flex space-x-4 mb-4">
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React Icon" width={30} height={30} />
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS Icon" width={30} height={30} />
                  <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" alt="Sass Icon" width={30} height={30} />
                </div>
                <a href="https://weatherapp-kappa-inky.vercel.app/" target="_blank" className="text-purple-400 hover:text-purple-500">View Project</a>
              </div>
            </div>
          </section>
    );
}