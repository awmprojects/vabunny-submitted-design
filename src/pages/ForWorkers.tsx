
import Header from "@/components/Header";
import Hero from "@/components/workers/WorkersHero";
import Benefits from "@/components/workers/WorkersBenefits";
import WhyChooseUs from "@/components/workers/WhyChooseUs";
import Testimonials from "@/components/workers/WorkersTestimonials";
import CallToAction from "@/components/workers/WorkersCTA";
import Footer from "@/components/Footer";
import WorkersConversionPopup from "@/components/WorkersConversionPopup";

const ForWorkers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Footer />
      <WorkersConversionPopup />
    </div>
  );
};

export default ForWorkers;
