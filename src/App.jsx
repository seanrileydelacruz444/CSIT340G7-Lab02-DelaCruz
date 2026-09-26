import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutSection />
      <SkillSection/>
      <ProjectSection/>
      <ExperienceSection/>
      <ContactSection/>
      <Footer/>
    </>
  );
}


export default App;