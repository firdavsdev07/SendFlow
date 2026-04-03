import CardStack from "../components/CardStack";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Process from "../components/Process";
import Promo from "../components/Promo";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
function Home() {
  return (
    <>
      <Navbar />
      <main className="px-30 pt-50">
        <section id="hero">
          <Hero />
        </section>
        <section>
          <CardStack />
        </section>
        <section id="process">
          <Process />
        </section>
        <section>
          <Promo />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
