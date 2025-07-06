
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhyPhilippines from "@/components/WhyPhilippines";
import Portfolio from "@/components/Portfolio";
import Rewards from "@/components/Rewards";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ConversionPopup from "@/components/ConversionPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <WhyPhilippines />
      <Portfolio />
      <Rewards />
      <FAQ />
      <Footer />
      <ConversionPopup />
    </div>
  );
};

export default Index;
