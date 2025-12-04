export default function Button({ text }) {
  return (
    <button className="bg-coffeeDark hover:bg-coffeeMedium text-white px-5 py-3 rounded-lg shadow transition">
      {text}
    </button>
  );
}
