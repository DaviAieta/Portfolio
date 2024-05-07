import Hero from "./Hero/Hero";
import About from "./About/About";
import Navbar from "../../components/Navbar/Navbar";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
