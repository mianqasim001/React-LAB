export default function CoffeeCard({ img, name, desc, price }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden">
      
      {/* Image */}
      <div className="relative">
        <img src={img} className="w-full h-60 object-cover" />

        {/* Price Badge */}
        <span className="absolute top-3 right-3 bg-[#3E2723] text-white text-sm px-3 py-1 rounded-full shadow">
          ${price}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#3E2723]">{name}</h3>
        <p className="mt-2 text-[#5D4037] text-sm">{desc}</p>

        <button className="mt-4 w-full bg-[#795548] text-white py-3 rounded-lg hover:bg-[#5D4037] transition flex items-center justify-center gap-2">
          <span>🛒</span> Add to Cart
        </button>
      </div>

    </div>
  );
}
