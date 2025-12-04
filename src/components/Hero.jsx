import heroimg from "../assets/heroimg.jpg";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl animate-fadeIn">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
          Where Every Cup <br />
          <span className="text-6xl md:text-7xl text-[#D7CCC8] drop-shadow-xl">
            Tells a Story
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-10 opacity-90">
          Welcome to Brew Haven, your cozy corner for handcrafted coffee
          experiences. Savor the warmth, embrace the aroma, and discover your
          new favorite brew.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <button className="px-7 py-3 bg-[#8b5a32] hover:bg-[#6b4426] transition-all duration-300 rounded-lg text-white font-semibold shadow-lg hover:scale-105">
            Order Now →
          </button>

          <button onClick={() => {
    const section = document.getElementById("menu");
    section?.scrollIntoView({ behavior: "smooth" });
  }}
  className="px-6 py-3 border border-white hover:bg-white hover:text-black transition rounded-lg font-semibold"
>
   View Menu
          </button>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-12 text-center mb-12">
          <div className="transition hover:scale-110">
            <h3 className="text-3xl font-bold">15+</h3>
            <p className="text-sm opacity-90">Coffee Varieties</p>
          </div>

          <div className="transition hover:scale-110">
            <h3 className="text-3xl font-bold">10K+</h3>
            <p className="text-sm opacity-90">Happy Customers</p>
          </div>

          <div className="transition hover:scale-110">
            <h3 className="text-3xl font-bold">5★</h3>
            <p className="text-sm opacity-90">Average Rating</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center">
          <div className="w-7 h-12 border-2 border-white rounded-full flex justify-center shadow-inner">
            <div className="w-1.5 h-3 bg-white mt-2 rounded-full animate-bounce"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
