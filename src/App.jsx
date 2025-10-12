import About from "./Component/About/About";
import Service from "./Component/About/Service";
import Contact from "./Component/Contact/Contact";
import Home4 from "./Component/Home/Home4";
import Sidebar2 from "./Component/Layout/Sidebar2";

import Projects from "./Component/Projects/Projects";


const App = () => {
  return (
    <div className="flex h-screen w-screen">

      <div className="fixed left-0 top-0 h-full w-1/4 sm:hidden md:block lg:block z-50">
        <Sidebar2 />
      </div>


      <div className="md:ml-[25%] w-full md:w-3/4 h-full overflow-y-auto scroll-smooth pt-16 md:pt-0 z-10">
        <section id="home">
          <Home4 />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Service />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </div >
  );
};

export default App;
