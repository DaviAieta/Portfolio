import Hero from "./Hero/Hero";
import About from "./About/About";
import Navbar from "../../components/Navbar/Navbar";
import Projects from "./Projects/Projects";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </>
  );
};

export default Home;
