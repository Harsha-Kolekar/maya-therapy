import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import WhoIHelp from "@/components/WhoIHelp";
import Expertise from "@/components/Expertise";
import HowIWork from "@/components/HowIWork";
import Services from "@/components/Services";
import AboutMaya from "@/components/AboutMaya";
import OurOffice from "@/components/OurOffice";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <IntroSection />

      <WhoIHelp />

      <Expertise />

      <HowIWork />

      <Services />

      <AboutMaya />

      <OurOffice />

      <FAQ />

      <CTA />

      <Footer />
    </main>
  );
}