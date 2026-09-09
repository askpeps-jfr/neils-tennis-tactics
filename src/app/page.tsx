import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutCoach from "@/components/AboutCoach";
import TargetProfiles from "@/components/TargetProfiles";
import Testimonials from "@/components/Testimonials";
import CourtCoverage from "@/components/CourtCoverage";
import TacticalVault from "@/components/TacticalVault";
import GearTeaser from "@/components/GearTeaser";
import PricingPackages from "@/components/PricingPackages";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutCoach />
        <TargetProfiles />
        <Testimonials />
        <CourtCoverage />
        <TacticalVault />
        <GearTeaser />
        <PricingPackages />
        <BookingSection />
      </main>
      <Footer />
    </>
  );
}
