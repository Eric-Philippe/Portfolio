import "./App.css";
import AboutSection from "./components/Welcome/AboutSection";
import Head from "./components/Welcome/Head";
import ProjectSection from "./components/Welcome/ProjectSection";
import SkillsSection from "./components/Welcome/SkillsSection";

export default function App() {
  return (
    <>
      <Head />
      <ProjectSection />
      <SkillsSection />
      <AboutSection />
    </>
  );
}
