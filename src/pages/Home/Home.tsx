import Hero from "./Hero/Hero";
import About from "./About/About";
import Navbar from "../../components/Navbar/Navbar";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
