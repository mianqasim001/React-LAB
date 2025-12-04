import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="sticky top-0 backdrop-blur-x1 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="#home" className="logo">
            <div className="logo-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 8h1a4 4 0 1 1 0 8h-1"/>
                <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/>
                <line x1="6" x2="6" y1="2" y2="4"/>
                <line x1="10" x2="10" y1="2" y2="4"/>
                <line x1="14" x2="14" y1="2" y2="4"/>
              </svg>
            </div>
          </a>
          <h1 className="text-2xl font-bold text-amber-950">Brew Haven</h1>
        </div>

       {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-amber-900 font-medium">
          <Link
            to="/"
            className="
              relative 
              pb-1 
              hover:text-amber-900 
              transition 
              after:content-[''] 
              after:absolute 
              after:left-0 
              after:bottom-0 
              after:h-[2px] 
              after:w-0 
              after:bg-amber-900 
              hover:after:w-full 
              after:transition-all 
              after:duration-300
            "
          >
            Home
          </Link>

          <Link
            to="/menu"
            className="
              relative 
              pb-1 
              hover:text-amber-900 
              transition 
              after:content-[''] 
              after:absolute 
              after:left-0 
              after:bottom-0 
              after:h-[2px] 
              after:w-0 
              after:bg-amber-900 
              hover:after:w-full 
              after:transition-all 
              after:duration-300
            "
          >
            Menu
          </Link>

          <Link
            to="/about"
            className="
              relative 
              pb-1 
              hover:text-amber-900 
              transition 
              after:content-[''] 
              after:absolute 
              after:left-0 
              after:bottom-0 
              after:h-[2px] 
              after:w-0 
              after:bg-amber-900 
              hover:after:w-full 
              after:transition-all 
              after:duration-300
            "
          >
            About
          </Link>

          <Link
            to="/contact"
            className="
              relative 
              pb-1 
              hover:text-amber-900 
              transition 
              after:content-[''] 
              after:absolute 
              after:left-0 
              after:bottom-0 
              after:h-[2px] 
              after:w-0 
              after:bg-amber-900 
              hover:after:w-full 
              after:transition-all 
              after:duration-300
            "
          >
            Contact
          </Link>
        </nav>


        {/* Button */}
        <button className="bg-[#8b5a32] text-white px-5 py-2 rounded-lg hover:bg-[#6b4426] transition shadow">
          Order Now
        </button>

      </div>
    </header>
  );
}
