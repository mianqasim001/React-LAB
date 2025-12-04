import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <section className="px-10 py-20">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">Email: brewhaven@gmail.com</p>
        <p className="text-lg">Phone: +92 300 1234567</p>
      </section>
      <Footer />
    </>
  );
}
