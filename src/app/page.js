import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Hero from "@/components/Home/Hero";
import AboutPreview from "@/components/Home/AboutPreview";
import ServicesPreview from "@/components/Home/ServicesPreview";
import ResearchHighlights from "@/components/Home/ResearchHighlights";
import Stats from "@/components/Home/Stats";
import Testimonials from "@/components/Home/Testimonials";
import CTASection from "@/components/Home/CTASection";
import { userData } from "@/data/userData";

export default function Home() {
  return (
    <>
      <Header userData={userData} />
      <main>
        <Hero />
        {/* <Stats /> */}
        <AboutPreview />
        <ServicesPreview />
        <ResearchHighlights />
        <Testimonials />
        <CTASection />
      </main>
      <Footer userData={userData} />
    </>
  );
}