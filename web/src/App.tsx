import "./App.css";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Navbar from "./components/Navbar";
import CardStack from "./components/CardStack";
import Promo from "./components/Promo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="px-30 pt-50">
        <Hero />
        <CardStack />
        <Process />
        <Promo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
