import About from "./Component/About/About";
import Service from "./Component/About/Service";
import Contact from "./Component/Contact/Contact";
import Home4 from "./Component/Home/Home4";
import Sidebar2 from "./Component/Layout/Sidebar2";

import Projects from "./Component/Projects/Projects";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const App = () => {
  return (

      <HelmetProvider>
      <div>
        <Helmet>
          <title>MD Arif | React Developer Portfolio</title>
          <meta name="description" content="Hi, I am MD Arif. Welcome to my web development portfolio." />
        </Helmet>

      </div>



    <div className="portfolio-shell">
      <Sidebar2 />

      <div className="desktop-content-shell">
        <section className="portfolio-section" id="home">
          <Home4 />
        </section>

        <section className="portfolio-section" id="about">
          <About />
        </section>

        <section className="portfolio-section" id="services">
          <Service />
        </section>

        <section className="portfolio-section" id="projects">
          <Projects />
        </section>

        <section className="portfolio-section" id="contact">
          <Contact />
        </section>
      </div>
    </div>
        </HelmetProvider>
  );
};

export default App;
