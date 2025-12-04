import CoffeeCard from "./CoffeeCard";
import espresso from "../assets/espresso.jpg";
import cappuccino from "../assets/cappuccino.jpg";
import latte from "../assets/latte.jpg";
import coldbrew from "../assets/coldbrew.jpg";
import americano from "../assets/americano.jpg";
import mocha from "../assets/mocha.jpg";

export default function CoffeeList() {
  const data = [
    {
      img: espresso,
      name: "Classic Espresso",
      desc: "A bold, concentrated shot of coffee with a rich crema and aroma.",
      price: "3.50",
    },
    {
      img: cappuccino,
      name: "Creamy Cappuccino",
      desc: "Smooth espresso topped with foam and steamed milk.",
      price: "4.50",
    },
    {
      img: americano,
      name: "Americano",
      desc: "Simple elegance — espresso diluted with hot water for a clean, robust taste.",
      price: "3.25",
    },
    {
      img: latte,
      name: "Caramel Latte",
      desc: "Espresso meets creamy milk with sweet caramel drizzle.",
      price: "5.25",
    },
    {
      img: coldbrew,
      name: "Cold Brew",
      desc: "Slow-steeped for 24 hours, delivering a smooth, refreshing coffee experience.",
      price: "4.25",
    },
    {
      img: mocha,
      name: "Chocolate Mocha",
      desc: "Rich espresso blended with premium chocolate, topped with whipped cream.",
      price: "5.25",
    }
  ];

  return (
    <section id="menu" className="py-20 bg-[#f2ebe3] py-16 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {data.map((item, index) => (
          <CoffeeCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
