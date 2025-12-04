import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <section className="px-10 py-20">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-3xl">
          Brew Haven is your cozy corner for handcrafted coffee. Our mission is to
          serve fresh, aromatic blends with passion and care.
        </p>
      </section>
      <Footer />
    </>
  );
}
