import { BlogSection } from "./components/BlogSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { WorksSection } from "./components/WorksSection";

export default function App() {
  return (
    <main className="bg-[#f2f2f2] text-[#131313]">
      <HeroSection />
      <WorksSection />
      <ServicesSection />
      <BlogSection />
      <Footer />
    </main>
  );
}
