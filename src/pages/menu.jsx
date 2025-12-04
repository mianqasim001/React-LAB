import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import espresso from "../assets/espresso.jpg";
import latte from "../assets/latte.jpg";
import cappuccino from "../assets/cappuccino.jpg";
import americano from "../assets/americano.jpg";
import mocha from "../assets/mocha.jpg";
import coldBrew from "../assets/coldbrew.jpg";
import Footer from "../components/Footer";

export default function Menu() {
  const categories = ["All", "Espresso", "Latte", "Cappuccino", "Cold Brew"];

  const items = [
    {
      name: "Espresso Shot",
      category: "Espresso",
      price: "$4.50",
      img: espresso,
      desc: "Strong, bold, and full of flavor.",
    },
    {
      name: "Cappuccino",
      category: "Cappuccino",
      price: "$6.00",
      img: cappuccino,
      desc: "Balanced with steamed milk and rich foam.",
    },
    {
      name: "Classic Latte",
      category: "Latte",
      price: "$5.50",
      img: latte,
      desc: "Smooth espresso blended with creamy milk.",
    },
    {
      name: "Americano",
      category: "Espresso",
      price: "$5.00",
      img: americano,
      desc: "Espresso diluted with hot water—simple & bold.",
    },
    {
      name: "Mocha Latte",
      category: "Latte",
      price: "$6.50",
      img: mocha,
      desc: "Chocolate, milk, and espresso perfection.",
    },
    {
      name: "Cold Brew",
      category: "Cold Brew",
      price: "$5.75",
      img: coldBrew,
      desc: "Slow-brewed for 16 hours for smooth flavor.",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <>
    <Header/>
    <section className="min-h-screen bg-[#f7f1ec] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center text-[#5D4037] mb-12"
        >
          Our Coffee Menu
        </motion.h1>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`
                px-5 py-2 rounded-full border 
                transition-all duration-300
                ${
                  cat === selectedCategory
                    ? "bg-[#8b5a32] text-white border-[#8b5a32]"
                    : "border-[#8b5a32] text-[#8b5a32] hover:bg-[#8b5a32] hover:text-white"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Coffee Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence>
            {filteredItems.map((coffee, index) => (
              <motion.div
                key={coffee.name}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={coffee.img}
                    alt={coffee.name}
                    className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h2 className="text-xl font-semibold text-[#3E2723]">
                    {coffee.name}
                  </h2>
                  <p className="text-sm text-[#6b4f4f]">{coffee.desc}</p>

                  <div className="flex justify-between items-center mt-3">
                    <span className="text-lg font-bold text-[#8b5a32]">
                      {coffee.price}
                    </span>

                    <button className="px-3 py-1 bg-[#8b5a32] text-white rounded-lg hover:bg-[#6b4426] transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
