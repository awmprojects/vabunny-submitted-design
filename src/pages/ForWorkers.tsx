
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/workers/WorkersHero";
import Benefits from "@/components/workers/WorkersBenefits";
import WhyChooseUs from "@/components/workers/WhyChooseUs";
import Testimonials from "@/components/workers/WorkersTestimonials";
import CallToAction from "@/components/workers/WorkersCTA";
import Footer from "@/components/Footer";
import WorkersConversionPopup from "@/components/WorkersConversionPopup";

const ForWorkers = () => {
  useEffect(() => {
    document.title = "Find Remote VA Jobs - VABunny.com | Work from Home Opportunities for Filipino Virtual Assistants";
  }, []);

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
