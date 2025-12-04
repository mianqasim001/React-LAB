import {Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Menu from "./pages/menu";

export default function App() {
  return (
    <>  
    <div className="font-sans text-[#3E2723]">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         </Routes>
    </div>
    </>
  );
}
