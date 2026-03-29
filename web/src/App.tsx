import "./App.css";
import FloatingCardStack from "./components/floating-card-stack";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="px-30 pt-50">
        <Hero />
        <FloatingCardStack />
      </main>
    </>
  );
}

export default App;
