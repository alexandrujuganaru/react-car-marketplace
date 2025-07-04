import CarListing from "./_components/carlisting-section";
import Footer from "./_components/footer";
import HeroSection from "./_components/hero-section";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <CarListing />
      <Footer />
    </div>
  );
}
