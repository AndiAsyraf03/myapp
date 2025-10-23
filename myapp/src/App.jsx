import { Outlet, Link } from "react-router-dom";
import "./App.css"


export default function App() {
  return (
    <div>
      <nav className="bg-gray-800 p-4 shadow-md">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6">
          <div>
            <Link to="/" className="text-white text-xl font-bold">
              MyWeb
            </Link>
          </div>
          <div className="space-x-6 md:space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</Link>
            <Link to="/profile" className="text-gray-300 hover:text-white transition-colors duration-300">Profile</Link>
            <Link to="/galeri" className="text-gray-300 hover:text-white transition-colors duration-300">Galeri</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact Me</Link>
            <Link to="/registrasi" className="text-gray-300 hover:text-white transition-colors duration-300">Registrasi</Link>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
