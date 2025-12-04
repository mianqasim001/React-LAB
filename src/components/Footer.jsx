export default function Footer() {
  return (
    <footer className="bg-[#3b2f2f] text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold">Brew Haven</h2>
          <p className="mt-3 text-gray-300">
            Crafting the perfect cup since 2024.  
            Your daily dose of warmth, aroma, and comfort.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Menu</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-300">📞 +92 300 1234567</p>
          <p className="text-gray-300">📍 Karachi, Pakistan</p>
          <p className="text-gray-300 mt-3">
            Mon – Sat: 8:00 AM – 11:00 PM
          </p>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-10 border-t border-white/20 pt-4">
        © {new Date().getFullYear()} Brew Haven — All Rights Reserved.
      </div>
    </footer>
  );
}
