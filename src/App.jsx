import { useState } from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Test from "./Test";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>

      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      {/* <Test />
      <Test /> */}
    </div>
  );
}

export default App;
