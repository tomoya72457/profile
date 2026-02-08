import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import HomeHero from "./components/home/HomeHero";
import AboutContent from "./components/about/AboutContent";
import SkillsBento from "./components/skills/SkillsBento";
import WorksShowcase from "./components/works/WorksShowcase";
import FutureVision from "./components/future/FutureVision";

export default function Page() {
  return (
    <>
      <Header />
      <HomeHero />
      <AboutContent />
      <SkillsBento />
      <WorksShowcase />
      <FutureVision />
      <Footer />
    </>
  );
}
