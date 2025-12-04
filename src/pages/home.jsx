import Header from "../components/Header";
import Hero from "../components/Hero";
import CoffeeList from "../components/CoffeeList";
import Ideology from "../components/Ideology";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero />
      <CoffeeList />
      <Ideology />
      <Footer/>
    </>
  );
}
